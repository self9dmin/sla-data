#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const DATA_DIR = path.resolve(process.env.VENDORS_DIR || path.join(ROOT, 'vendors'));
const SITE_DIR = path.resolve(
  process.env.SITE_VENDORS_DIR || path.join(ROOT, 'website-repo', 'site', 'content', 'vendors')
);
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

function main() {
  if (!fs.existsSync(DATA_DIR)) throw new Error(`Data vendors directory not found: ${DATA_DIR}`);
  if (!fs.existsSync(SITE_DIR)) throw new Error(`Website vendors directory not found: ${SITE_DIR}`);

  const dataFiles = vendorFiles(DATA_DIR);
  const siteFiles = vendorFiles(SITE_DIR);
  const missingInData = difference(siteFiles, dataFiles);
  const extraInData = difference(dataFiles, siteFiles);
  const differentContent = siteFiles
    .filter((name) => dataFiles.includes(name))
    .filter((name) => normalizedText(path.join(SITE_DIR, name)) !== normalizedText(path.join(DATA_DIR, name)));

  const lines = [
    '# Mirror parity report',
    '',
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

main();
