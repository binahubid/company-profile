import assert from 'node:assert/strict';
import { readFileSync, readdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import test from 'node:test';

const root = new URL('../', import.meta.url);
const read = (file) => readFileSync(new URL(file, root), 'utf8');
const pkg = JSON.parse(read('package.json'));
const workflow = read('.github/workflows/quality.yml');

test('CI uses existing quality, contract and Node build commands', () => {
  for (const match of workflow.matchAll(/\bnpm run ([\w:-]+)/g)) {
    assert.equal(typeof pkg.scripts[match[1]], 'string', `Missing script: ${match[1]}`);
  }
  assert.match(workflow, /node-version: 22/);
  assert.match(workflow, /contents: read/);
  assert.match(workflow, /timeout-minutes: 15/);
  assert.match(workflow, /run: npm ci/);
  assert.match(workflow, /npm exec -- next typegen/);
  assert.match(workflow, /npm run quality:repo/);
  assert.match(pkg.scripts.build, /next build/);
  assert.doesNotMatch(read('next.config.ts'), /output\s*:\s*['"]export['"]/);
});

test('no workflow retains the obsolete destructive FTP deployment', () => {
  const dir = fileURLToPath(new URL('.github/workflows/', root));
  for (const file of readdirSync(dir).filter((entry) => /\.ya?ml$/.test(entry))) {
    const source = read(`.github/workflows/${file}`);
    assert.doesNotMatch(source, /uses:\s*SamKirkland\/FTP-Deploy-Action/i);
    assert.doesNotMatch(source, /dangerous-clean-slate:\s*true/i);
    assert.doesNotMatch(source, /run:\s*npm run quality:admin/);
  }
});
