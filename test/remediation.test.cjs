'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');

const {
  buildReport,
  isSafePermanentRedirect,
  replaceFrontMatterUrl,
} = require('../scripts/remediate.cjs');

function redirect(overrides = {}) {
  return {
    originalUrl: 'https://vendor.example/old-sla',
    finalUrl: 'https://vendor.example/legal/sla',
    redirectChain: [{
      from: 'https://vendor.example/old-sla',
      status: 301,
      to: 'https://vendor.example/legal/sla',
    }],
    files: ['vendor.md'],
    ...overrides,
  };
}

test('accepts a permanent HTTPS redirect on the same host', () => {
  assert.equal(isSafePermanentRedirect(redirect()), true);
});

test('rejects temporary, cross-origin, and insecure redirects', () => {
  assert.equal(isSafePermanentRedirect(redirect({ redirectChain: [{ status: 302 }] })), false);
  assert.equal(isSafePermanentRedirect(redirect({ finalUrl: 'https://other.example/sla' })), false);
  assert.equal(isSafePermanentRedirect(redirect({ originalUrl: 'http://vendor.example/old-sla' })), false);
});

test('replaces URLs only inside YAML front matter', () => {
  const source = [
    '---',
    'sla_url: https://vendor.example/old-sla',
    '---',
    'The historical URL remains documented: https://vendor.example/old-sla',
    '',
  ].join('\n');
  const result = replaceFrontMatterUrl(source, 'https://vendor.example/old-sla', 'https://vendor.example/legal/sla');
  assert.equal(result.changed, true);
  assert.match(result.text, /sla_url: https:\/\/vendor\.example\/legal\/sla/);
  assert.match(result.text, /historical URL remains documented: https:\/\/vendor\.example\/old-sla/);
});

test('does not rewrite a shorter URL inside a longer URL', () => {
  const source = [
    '---',
    'website: https://vendor.example',
    'source_url: https://vendor.example/en/legal/sla',
    '---',
    '',
  ].join('\n');
  const result = replaceFrontMatterUrl(source, 'https://vendor.example', 'https://vendor.example/en/');
  assert.equal(result.changed, true);
  assert.match(result.text, /website: https:\/\/vendor\.example\/en\//);
  assert.match(result.text, /source_url: https:\/\/vendor\.example\/en\/legal\/sla/);
});

test('reports dead links as human-verification work', () => {
  const report = buildReport({
    broken: [{ file: 'vendor.md', url: 'https://vendor.example/dead', status: 404 }],
  }, [], false, []);
  assert.match(report, /Dead links requiring verification/);
  assert.match(report, /https:\/\/vendor\.example\/dead/);
  assert.match(report, /not guessed or replaced automatically/);
});
