import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

const packageJson = JSON.parse(readFileSync(new URL('../package.json', import.meta.url), 'utf8'));
const layout = readFileSync(new URL('../src/layouts/Layout.astro', import.meta.url), 'utf8');
const posthog = readFileSync(new URL('../src/components/posthog.astro', import.meta.url), 'utf8');

test('PostHog is installed for the shared production layout', () => {
  assert.equal(typeof packageJson.dependencies['posthog-js'], 'string');
  assert.match(layout, /const posthogKey = import\.meta\.env\.PROD/);
  assert.match(layout, /PUBLIC_POSTHOG_PROJECT_TOKEN/);
  assert.match(layout, /posthogKey && <PostHog/);
  assert.match(posthog, /define:vars=\{\{ apiKey, apiHost \}\}/);
  assert.doesNotMatch(posthog, /import\.meta\.env/);
});
