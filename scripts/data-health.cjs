#!/usr/bin/env node
// Self-contained data-health check for the SLA dataset.
// Zero runtime dependencies (Node 20+ global fetch). Reads vendors/*.md,
// flags stale vendors and individually-dated stale services (last_verified
// older than 12 months) and broken links,
// writes data-health-report.md, and exposes a `count` GitHub Actions output.

'use strict';

const fs = require('fs');
const path = require('path');

const STALE_DAYS = 365;
const CONCURRENCY = 8;
const REQUEST_TIMEOUT_MS = 20000;
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

  // Vendor-level last_verified: a top-level (column 0) date, possibly quoted.
  let lastVerified = null;
  const lv = fm.match(/^last_verified:\s*['"]?([0-9]{4}-[0-9]{2}-[0-9]{2})['"]?/m);
  if (lv) lastVerified = lv[1];

  // Per-service last_verified (optional). Walk the indented services block and
  // associate any service-level last_verified with that service's name. Services
  // without their own date inherit the vendor date and are covered by the
  // vendor-level freshness check, so only individually-dated services land here.
  const services = [];
  let inServices = false, cur = null;
  for (const line of fm.split(/\r?\n/)) {
    if (/^services:[ \t]*$/.test(line)) { inServices = true; continue; }
    if (!inServices) continue;
    if (/^\S/.test(line)) { if (cur) services.push(cur); inServices = false; cur = null; continue; }
    const item = line.match(/^\s*-\s+(?:id|name):\s*['"]?(.+?)['"]?\s*$/);
    if (item) { if (cur) services.push(cur); cur = { name: item[1].trim(), lastVerified: null }; continue; }
    const nm = line.match(/^\s+name:\s*['"]?(.+?)['"]?\s*$/);
    if (nm && cur) { cur.name = nm[1].trim(); continue; }
    const slv = line.match(/^\s+last_verified:\s*['"]?([0-9]{4}-[0-9]{2}-[0-9]{2})['"]?/);
    if (slv && cur) { cur.lastVerified = slv[1]; continue; }
  }
  if (cur) services.push(cur);

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
    services,
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

// Classification policy (bias to precision: never cry wolf on a public issue):
//   OK      -> any response with status < 400.
//   BROKEN  -> only a definitive dead status: 404 or 410, or a 5xx that
//              persists after one retry. These are confirmed dead.
//   BLOCKED -> everything we cannot definitively verify: 401/403/405/429,
//              any other non-dead 4xx, a timeout / AbortError / network or
//              DNS error / fetch throw. Not reported.
//
// Returns { url, classification: 'OK'|'BLOCKED'|'BROKEN', status, detail }.
async function checkUrl(url) {
  const dead = new Set([404, 410]);

  // Perform a request; returns { status } on a real HTTP response, or
  // { error } when the request timed out / was aborted / threw (network/DNS).
  async function attempt(method) {
    try {
      const res = await fetchWithTimeout(url, method);
      return { status: res.status };
    } catch (e) {
      const detail =
        e && e.name === 'AbortError'
          ? `timeout after ${REQUEST_TIMEOUT_MS}ms`
          : (e && e.message) || 'network error';
      return { error: detail };
    }
  }

  // HEAD first; if it errors/times out or returns any error status, retry once
  // with GET before giving up (some hosts reject or hang on HEAD).
  let r = await attempt('HEAD');
  if (r.error || (typeof r.status === 'number' && r.status >= 400)) {
    const g = await attempt('GET');
    // Prefer the GET outcome; it is the more reliable signal.
    r = g;
  }

  // Could not get a clear HTTP status: unverifiable -> BLOCKED, never BROKEN.
  if (r.error || typeof r.status !== 'number') {
    return { url, classification: 'BLOCKED', status: null, detail: r.error || 'unverifiable' };
  }

  const status = r.status;
  if (status < 400) return { url, classification: 'OK', status };

  // Definitive dead status.
  if (dead.has(status)) return { url, classification: 'BROKEN', status };

  // 5xx: confirm by retrying once; only BROKEN if it persists.
  if (status >= 500) {
    const retry = await attempt('GET');
    if (retry.error || typeof retry.status !== 'number') {
      return { url, classification: 'BLOCKED', status, detail: retry.error || 'unverifiable on retry' };
    }
    if (retry.status < 400) return { url, classification: 'OK', status: retry.status };
    if (retry.status >= 500) return { url, classification: 'BROKEN', status: retry.status };
    if (dead.has(retry.status)) return { url, classification: 'BROKEN', status: retry.status };
    return { url, classification: 'BLOCKED', status: retry.status };
  }

  // Any other 4xx (401/403/405/429 and friends): cannot confirm dead -> BLOCKED.
  return { url, classification: 'BLOCKED', status };
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

  // Per-service freshness: services that carry their own last_verified and are
  // past the window. (Services without their own date inherit the vendor date
  // and are already covered by the vendor-level check above.)
  const staleServices = [];
  for (const v of vendors) {
    for (const s of v.services || []) {
      if (!s.lastVerified) continue;
      const age = daysSince(s.lastVerified);
      if (age === null) {
        staleServices.push({ file: v.file, service: s.name, lastVerified: `(unparseable: ${s.lastVerified})` });
      } else if (age > STALE_DAYS) {
        staleServices.push({ file: v.file, service: s.name, lastVerified: s.lastVerified });
      }
    }
  }
  staleServices.sort((a, b) => a.file.localeCompare(b.file) || String(a.service).localeCompare(String(b.service)));

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
  lines.push(
    'BROKEN means a confirmed dead status (404, 410, or a 5xx that persisted ' +
      'after one retry). Links we could not verify (timeouts, network errors, ' +
      'or bot-protection responses such as 401/403/405/429) are treated as ' +
      'BLOCKED and omitted here to avoid false positives.'
  );
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

  lines.push('## Stale services (individually dated, past the 12-month window)');
  lines.push('');
  lines.push(
    'Services that carry their own `last_verified` date and are past the window. ' +
      'Services without an individual date inherit their vendor\'s date and appear ' +
      'under the vendor stale list above, not here.'
  );
  lines.push('');
  if (staleServices.length === 0) {
    lines.push('No individually-dated services are stale.');
  } else {
    lines.push(`${staleServices.length} service(s) past the 12-month window.`);
    lines.push('');
    for (const s of staleServices) {
      lines.push(`- ${s.file} — ${s.service}: last_verified ${s.lastVerified}`);
    }
  }
  lines.push('');

  const count = brokenUrlCount + stale.length + staleServices.length;

  if (count === 0) {
    lines.push('All clear: no broken links, no stale vendors, no stale services.');
    lines.push('');
  }

  fs.writeFileSync(REPORT_PATH, lines.join('\n'), 'utf8');

  // Human summary.
  console.log(`Broken URLs: ${brokenUrlCount}`);
  console.log(`Stale vendors: ${stale.length}`);
  console.log(`Stale services: ${staleServices.length}`);
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
