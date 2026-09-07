#!/usr/bin/env node
'use strict';

// Bounded data remediation for the monthly health check.
//
// The only automatic data edit allowed here is replacing a URL with the final
// target of a permanent (301/308), same-origin HTTPS redirect. Dead SLA links
// are reported for maintainer verification, never guessed or rewritten.

const fs = require('fs');
const path = require('path');
const childProcess = require('child_process');

const ROOT = path.resolve(__dirname, '..');
const FINDINGS_PATH = path.join(ROOT, 'data-health-findings.json');
const REPORT_PATH = path.join(ROOT, 'data-remediation-report.md');
const VALIDATOR_PATH = path.join(ROOT, 'scripts', 'validate-data.cjs');

function isSafePermanentRedirect(finding) {
  if (!finding || !finding.originalUrl || !finding.finalUrl || !Array.isArray(finding.redirectChain)) return false;
  if (finding.redirectChain.length === 0 || !finding.redirectChain.every(({ status }) => status === 301 || status === 308)) return false;
  try {
    const original = new URL(finding.originalUrl);
    const final = new URL(finding.finalUrl);
    return original.protocol === 'https:' && final.protocol === 'https:' &&
      original.host === final.host && original.href !== final.href;
  } catch {
    return false;
  }
}

function replaceFrontMatterUrl(text, from, to) {
  const match = text.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match || !match[1].includes(from)) return { changed: false, text };
  const frontMatter = match[1].split(from).join(to);
  return { changed: true, text: text.replace(match[1], frontMatter) };
}

function writeOutput(values) {
  if (!process.env.GITHUB_OUTPUT) return;
  fs.appendFileSync(process.env.GITHUB_OUTPUT, Object.entries(values)
    .map(([key, value]) => `${key}=${value}`)
    .join('\n') + '\n');
}

function runValidator() {
  return childProcess.spawnSync(process.execPath, [VALIDATOR_PATH], {
    cwd: ROOT,
    encoding: 'utf8',
  });
}

function buildReport(findings, safeRedirects, applied, changedFiles) {
  const lines = [
    '# Data remediation report',
    '',
    `Generated ${new Date().toISOString().slice(0, 10)} by scripts/remediate.cjs.`,
    '',
    `- Confirmed dead findings: ${findings.broken.length}`,
    `- Safe permanent same-origin redirects: ${safeRedirects.length}`,
    `- Automatic URL updates applied: ${applied ? changedFiles.length : 0}`,
    '',
    '## Automatic remediation policy',
    '',
    'Only HTTPS URLs that resolve through permanent 301/308 redirects while staying on the same host are canonicalized automatically. Every edit is limited to YAML front matter and is followed by structural validation.',
    '',
    'Confirmed dead SLA sources are not guessed or replaced automatically. They require verification against the vendor\'s current official SLA or legal page.',
    '',
  ];

  if (safeRedirects.length) {
    lines.push('## Safe redirects', '', applied
      ? `Applied ${changedFiles.length} file update(s).`
      : 'Dry run only. Set `AUTO_REMEDIATE=true` to apply these updates.', '');
    for (const redirect of safeRedirects) {
      lines.push(`- ${redirect.originalUrl} -> ${redirect.finalUrl} (${redirect.files.join(', ') || 'no matching file'})`);
    }
    lines.push('');
  }

  lines.push('## Dead links requiring verification', '');
  if (!findings.broken.length) {
    lines.push('No confirmed dead links require remediation.', '');
  } else {
    lines.push('These findings remain open for a maintainer to verify the replacement official source:', '');
    for (const finding of findings.broken) {
      const status = finding.status ? `HTTP ${finding.status}` : (finding.detail || 'unverifiable');
      lines.push(`- ${finding.file}: ${finding.url} (${status})`);
    }
    lines.push('');
  }
  return lines.join('\n');
}

function main() {
  if (!fs.existsSync(FINDINGS_PATH)) throw new Error('data-health-findings.json is missing; run data-health.cjs first');
  const findings = JSON.parse(fs.readFileSync(FINDINGS_PATH, 'utf8'));
  const safeRedirects = (findings.redirects || []).filter(isSafePermanentRedirect);
  const changedFiles = [];
  const originalContents = new Map();
  const apply = process.env.AUTO_REMEDIATE === 'true';

  if (apply) {
    for (const redirect of safeRedirects) {
      for (const file of redirect.files || []) {
        const filePath = path.join(ROOT, 'vendors', file);
        if (!fs.existsSync(filePath)) continue;
        if (!originalContents.has(filePath)) originalContents.set(filePath, fs.readFileSync(filePath, 'utf8'));
        const result = replaceFrontMatterUrl(fs.readFileSync(filePath, 'utf8'), redirect.originalUrl, redirect.finalUrl);
        if (result.changed) {
          fs.writeFileSync(filePath, result.text, 'utf8');
          if (!changedFiles.includes(file)) changedFiles.push(file);
        }
      }
    }

    if (changedFiles.length) {
      const validation = runValidator();
      if (validation.status !== 0) {
        for (const [filePath, contents] of originalContents) fs.writeFileSync(filePath, contents, 'utf8');
        throw new Error(`validation failed after remediation:\n${validation.stdout || ''}${validation.stderr || ''}`);
      }
    }
  }

  fs.writeFileSync(REPORT_PATH, buildReport(findings, safeRedirects, apply, changedFiles), 'utf8');
  writeOutput({ changed: changedFiles.length, safe_redirects: safeRedirects.length });
  console.log(`Safe permanent redirects: ${safeRedirects.length}`);
  console.log(`Automatic URL updates applied: ${apply ? changedFiles.length : 0}`);
  console.log(`Dead links requiring verification: ${findings.broken.length}`);
}

if (require.main === module) {
  try {
    main();
  } catch (error) {
    console.error(error && error.message ? error.message : String(error));
    process.exit(1);
  }
}

module.exports = {
  buildReport,
  isSafePermanentRedirect,
  replaceFrontMatterUrl,
};
