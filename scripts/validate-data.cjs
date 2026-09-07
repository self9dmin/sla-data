#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

const ROOT = path.resolve(__dirname, '..');
const DIR = path.resolve(process.env.VENDORS_DIR || path.join(ROOT, 'vendors'));
const today = new Date().toISOString().slice(0, 10);
const errors = [];
const slugs = new Map();

function fail(file, message) { errors.push(`${file}: ${message}`); }
function url(value) { return typeof value === 'string' && /^(?:https?:\/\/|mailto:)/.test(value); }
function date(value) { return value instanceof Date ? value.toISOString().slice(0, 10) : String(value || ''); }
function frontMatter(text) {
  const match = text.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  return match ? match[1] : null;
}
function walk(value, key, file) {
  if (key && /(?:^|_)(?:url|source_url)$/.test(key) && value != null && !url(value)) fail(file, `${key} must be an https URL`);
  if (value && typeof value === 'object') {
    for (const [childKey, childValue] of Object.entries(value)) walk(childValue, childKey, file);
  }
}

const files = fs.readdirSync(DIR).filter((name) => name.endsWith('.md')).sort();
for (const name of files) {
  const fm = frontMatter(fs.readFileSync(path.join(DIR, name), 'utf8'));
  if (!fm) { fail(name, 'missing YAML front matter'); continue; }
  let data;
  try { data = yaml.load(fm); } catch (error) { fail(name, `invalid YAML: ${error.message}`); continue; }
  if (!data || typeof data !== 'object') { fail(name, 'front matter must be an object'); continue; }
  const expected = name.replace(/\.md$/, '');
  if (data.slug !== expected) fail(name, `slug must match filename (${expected})`);
  if (!data.vendor_name) fail(name, 'missing vendor_name');
  if (!data.category) fail(name, 'missing category');
  if (!url(data.sla_url)) fail(name, 'missing or invalid sla_url');
  const verified = date(data.last_verified);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(verified)) fail(name, 'last_verified must be YYYY-MM-DD');
  else if (verified > today) fail(name, 'last_verified cannot be in the future');
  if (!Array.isArray(data.services) || data.services.length === 0) fail(name, 'services must contain at least one item');
  for (const service of data.services || []) {
    if (!service || !service.id) { fail(name, 'service missing id'); continue; }
    const uptime = service.uptime_commitment ?? service.uptime;
    if (uptime != null && (typeof uptime !== 'number' || uptime < 0 || uptime > 100)) fail(name, `invalid service uptime: ${service.id}`);
  }
  if (slugs.has(data.slug)) fail(name, `duplicate slug also in ${slugs.get(data.slug)}`);
  slugs.set(data.slug, name);
  walk(data, null, name);
}

if (errors.length) {
  console.error(`Data validation failed: ${errors.length} error(s)`);
  console.error(errors.join('\n'));
  process.exit(1);
}
console.log(`Validated ${files.length} vendor records with no structural errors.`);
