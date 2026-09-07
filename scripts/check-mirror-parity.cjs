#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const DATA_DIR = path.resolve(process.env.VENDORS_DIR || path.join(ROOT, 'vendors'));
const SITE_DIR = process.env.SITE_VENDORS_DIR
  ? path.resolve(process.env.SITE_VENDORS_DIR)
  : path.join(ROOT, 'website-repo', 'site', 'content', 'vendors');
const SITE_VENDORS_URL = process.env.SITE_VENDORS_URL || '';
const REPORT_PATH = path.join(ROOT, 'mirror-parity-report.md');

function vendorFiles(dir) {
  return fs.readdirSync(dir)
    .filter((name) => name.endsWith('.md') && !name.startsWith('_'))
    .sort();
}

function normalizedText(file) {
  return fs.readFileSync(file, 'utf8').replace(/\r\n/g, '\n');
}

function difference(left, right) {
  const rightSet = new Set(right);
  return left.filter((name) => !rightSet.has(name));
}

async function siteVendorFiles() {
  if (!SITE_VENDORS_URL) return { files: vendorFiles(SITE_DIR), source: SITE_DIR, local: true };

  const response = await fetch(SITE_VENDORS_URL, {
    headers: { Accept: 'application/json' },
    signal: AbortSignal.timeout(20000),
  });
  if (!response.ok) throw new Error(`Website API returned HTTP ${response.status}`);
  const payload = await response.json();
  const records = Array.isArray(payload.result) ? payload.result : payload.results;
  if (!Array.isArray(records)) throw new Error('Website API response has no result array');
  const files = records
    .map((record) => record && record.slug)
    .filter((slug) => typeof slug === 'string' && slug.length > 0)
    .map((slug) => `${slug}.md`)
    .sort();
  if (files.length !== records.length) throw new Error('Website API contains a record without a slug');
  return { files, source: SITE_VENDORS_URL, local: false };
}

async function main() {
  if (!fs.existsSync(DATA_DIR)) throw new Error(`Data vendors directory not found: ${DATA_DIR}`);
  if (!SITE_VENDORS_URL && !fs.existsSync(SITE_DIR)) throw new Error(`Website vendors directory not found: ${SITE_DIR}`);

  const dataFiles = vendorFiles(DATA_DIR);
  const site = await siteVendorFiles();
  const siteFiles = site.files;
  const missingInData = difference(siteFiles, dataFiles);
  const extraInData = difference(dataFiles, siteFiles);
  const differentContent = site.local ? siteFiles
    .filter((name) => dataFiles.includes(name))
    .filter((name) => normalizedText(path.join(SITE_DIR, name)) !== normalizedText(path.join(DATA_DIR, name))) : [];

  const lines = [
    '# Mirror parity report',
    '',
    `Website source: ${site.source}`,
    `Website vendor records: ${siteFiles.length}`,
    `Data vendor records: ${dataFiles.length}`,
    `Missing in data: ${missingInData.length}`,
    `Extra in data: ${extraInData.length}`,
    `Different content: ${differentContent.length}`,
    '',
  ];
  if (missingInData.length) lines.push('Missing in data:', ...missingInData.map((name) => `- ${name}`), '');
  if (extraInData.length) lines.push('Extra in data:', ...extraInData.map((name) => `- ${name}`), '');
  if (differentContent.length) lines.push('Different content:', ...differentContent.map((name) => `- ${name}`), '');

  fs.writeFileSync(REPORT_PATH, lines.join('\n'), 'utf8');

  const mismatch = missingInData.length || extraInData.length || differentContent.length;
  if (mismatch) {
    console.error(`Mirror parity failed: ${missingInData.length} missing, ${extraInData.length} extra, ${differentContent.length} different.`);
    process.exit(1);
  }
  console.log(`Mirror parity passed: ${dataFiles.length} vendor records match exactly.`);
}

main().catch((error) => {
  const message = error && error.message ? error.message : String(error);
  fs.writeFileSync(REPORT_PATH, `# Mirror parity report\n\nComparison failed: ${message}\n`, 'utf8');
  console.error(`Mirror parity failed to run: ${message}`);
  process.exit(1);
});
