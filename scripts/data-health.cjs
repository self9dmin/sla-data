#!/usr/bin/env node
// Self-contained data-health check for the SLA dataset.
// Zero runtime dependencies (Node 20+ global fetch). Reads vendors/*.md,
// flags stale vendors (last_verified older than 12 months) and broken links,
// writes data-health-report.md, and exposes a `count` GitHub Actions output.

'use strict';

const fs = require('fs');
const path = require('path');

const STALE_DAYS = 365;
const CONCURRENCY = 8;
const REQUEST_TIMEOUT_MS = 15000;
const USER_AGENT =
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 ' +
  '(KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36';

const ROOT = path.resolve(__dirname, '..');
const VENDORS_DIR = path.join(ROOT, 'vendors');
const REPORT_PATH = path.join(ROOT, 'data-health-report.md');

// --- Parse vendor files ----------------------------------------------------

function frontMatter(text) {
  // Extract the YAML front matter block between the first pair of --- lines.
  const m = text.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  return m ? m[1] : '';
}

function parseVendor(file) {
  const text = fs.readFileSync(file, 'utf8');
  const fm = frontMatter(text);

  // last_verified: a date, possibly quoted.
  let lastVerified = null;
  const lv = fm.match(/^\s*last_verified:\s*['"]?([0-9]{4}-[0-9]{2}-[0-9]{2})['"]?/m);
  if (lv) lastVerified = lv[1];

  // Collect URLs from known fields (front matter only, to avoid prose links).
  const urls = new Set();
  const urlFieldRe =
    /^\s*(?:sla_url|source_url|submission_url|website):\s*['"]?(https?:\/\/[^\s'"]+)/gm;
  let mm;
  while ((mm = urlFieldRe.exec(fm)) !== null) {
    urls.add(mm[1].replace(/[)>,.;]+$/, ''));
  }

  return {
    file: path.basename(file),
    lastVerified,
    urls: [...urls],
  };
}

// --- Freshness -------------------------------------------------------------

function daysSince(dateStr) {
  const d = new Date(dateStr + 'T00:00:00Z');
  if (isNaN(d.getTime())) return null;
  return Math.floor((Date.now() - d.getTime()) / 86400000);
}

// --- Link checking ---------------------------------------------------------

async function fetchWithTimeout(url, method) {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), REQUEST_TIMEOUT_MS);
  try {
    return await fetch(url, {
      method,
      redirect: 'follow',
      signal: ctrl.signal,
      headers: {
        'User-Agent': USER_AGENT,
        Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.9',
      },
    });
  } finally {
    clearTimeout(timer);
  }
}

// Returns { url, classification: 'OK'|'BLOCKED'|'BROKEN', status, detail }.
async function checkUrl(url) {
  const blocked = new Set([401, 403, 405, 429]);

  async function attempt(method) {
    const res = await fetchWithTimeout(url, method);
    return res.status;
  }

  let status = null;
  try {
    // HEAD first.
    try {
      status = await attempt('HEAD');
    } catch (e) {
      status = null;
    }
    // GET fallback if HEAD failed or was rejected in a way GET might pass.
    if (status === null || status === 405 || status === 403 || status >= 400) {
      try {
        status = await attempt('GET');
      } catch (e) {
        if (status === null) {
          return { url, classification: 'BROKEN', status: null, detail: e.message || 'network error' };
        }
      }
    }
  } catch (e) {
    return { url, classification: 'BROKEN', status: null, detail: e.message || 'network error' };
  }

  if (status === null) {
    return { url, classification: 'BROKEN', status: null, detail: 'network error' };
  }
  if (status < 400) return { url, classification: 'OK', status };
  if (blocked.has(status)) return { url, classification: 'BLOCKED', status };

  // Other 4xx / 5xx: retry 5xx once.
  if (status >= 500) {
    try {
      const retry = await attempt('GET');
      if (retry < 400) return { url, classification: 'OK', status: retry };
      if (blocked.has(retry)) return { url, classification: 'BLOCKED', status: retry };
      return { url, classification: 'BROKEN', status: retry };
    } catch (e) {
      return { url, classification: 'BROKEN', status, detail: 'server error' };
    }
  }
  return { url, classification: 'BROKEN', status };
}

async function checkAll(urls) {
  const results = new Map();
  let i = 0;
  async function worker() {
    while (i < urls.length) {
      const idx = i++;
      const url = urls[idx];
      results.set(url, await checkUrl(url));
    }
  }
  const workers = [];
  for (let w = 0; w < Math.min(CONCURRENCY, urls.length); w++) workers.push(worker());
  await Promise.all(workers);
  return results;
}

// --- Main ------------------------------------------------------------------

async function main() {
  const files = fs
    .readdirSync(VENDORS_DIR)
    .filter((f) => f.endsWith('.md'))
    .map((f) => path.join(VENDORS_DIR, f));

  const vendors = files.map(parseVendor);

  // Freshness.
  const stale = [];
  for (const v of vendors) {
    if (!v.lastVerified) {
      stale.push({ file: v.file, lastVerified: '(missing or unparseable)' });
      continue;
    }
    const age = daysSince(v.lastVerified);
    if (age === null) {
      stale.push({ file: v.file, lastVerified: `(unparseable: ${v.lastVerified})` });
    } else if (age > STALE_DAYS) {
      stale.push({ file: v.file, lastVerified: v.lastVerified });
    }
  }
  stale.sort((a, b) => a.file.localeCompare(b.file));

  // Unique URL set + reverse map url -> vendor files.
  const urlToVendors = new Map();
  for (const v of vendors) {
    for (const url of v.urls) {
      if (!urlToVendors.has(url)) urlToVendors.set(url, new Set());
      urlToVendors.get(url).add(v.file);
    }
  }
  const uniqueUrls = [...urlToVendors.keys()];

  console.log(`Checking ${uniqueUrls.length} unique URLs across ${vendors.length} vendors...`);
  const results = await checkAll(uniqueUrls);

  // Group broken links by vendor.
  const brokenByVendor = new Map();
  let brokenUrlCount = 0;
  for (const [url, r] of results) {
    if (r.classification !== 'BROKEN') continue;
    brokenUrlCount++;
    for (const file of urlToVendors.get(url)) {
      if (!brokenByVendor.has(file)) brokenByVendor.set(file, []);
      brokenByVendor.get(file).push(r);
    }
  }
  const brokenVendorFiles = [...brokenByVendor.keys()].sort((a, b) => a.localeCompare(b));

  // Build report.
  const lines = [];
  lines.push('# Data health report');
  lines.push('');
  lines.push(`Generated ${new Date().toISOString().slice(0, 10)} by scripts/data-health.cjs.`);
  lines.push('');

  lines.push('## Broken links');
  lines.push('');
  if (brokenUrlCount === 0) {
    lines.push('No broken links found.');
  } else {
    lines.push(`${brokenUrlCount} broken URL(s) found.`);
    lines.push('');
    for (const file of brokenVendorFiles) {
      lines.push(`### ${file}`);
      for (const r of brokenByVendor.get(file)) {
        const status = r.status === null ? (r.detail || 'network error') : `HTTP ${r.status}`;
        lines.push(`- ${r.url} (${status})`);
      }
      lines.push('');
    }
  }
  lines.push('');

  lines.push('## Stale (past the 12-month freshness window)');
  lines.push('');
  if (stale.length === 0) {
    lines.push('No stale vendors found.');
  } else {
    lines.push(`${stale.length} vendor(s) not verified in the last 12 months.`);
    lines.push('');
    for (const s of stale) {
      lines.push(`- ${s.file}: last_verified ${s.lastVerified}`);
    }
  }
  lines.push('');

  const count = brokenUrlCount + stale.length;

  if (count === 0) {
    lines.push('All clear: no broken links and no stale vendors.');
    lines.push('');
  }

  fs.writeFileSync(REPORT_PATH, lines.join('\n'), 'utf8');

  // Human summary.
  console.log(`Broken URLs: ${brokenUrlCount}`);
  console.log(`Stale vendors: ${stale.length}`);
  console.log(`Total issues (count): ${count}`);
  console.log(`Report written to ${path.relative(ROOT, REPORT_PATH)}`);

  // GitHub Actions output.
  if (process.env.GITHUB_OUTPUT) {
    fs.appendFileSync(process.env.GITHUB_OUTPUT, `count=${count}\n`);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
