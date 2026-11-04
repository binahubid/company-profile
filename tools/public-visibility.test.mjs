import { createRequire } from 'node:module';
import { readFile } from 'node:fs/promises';
import vm from 'node:vm';
import assert from 'node:assert/strict';
import { test } from 'node:test';
const require = createRequire(import.meta.url), ts = require('typescript');
const source = await readFile(new URL('../src/i18n/layout-copy.tsx', import.meta.url), 'utf8');
const scope = { exports: {}, require, process: { env: {} } };
vm.runInNewContext(ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.ReactJSX } }).outputText, scope);
const copy = scope.exports.layoutCopy;

for (const locale of ['id', 'en']) {
  test(`${locale}: PETA and payment-demo entries stay out of public navigation/footer`, () => {
    const navLinks = copy[locale].nav.items.flatMap(item => [item, ...(item.submenu || [])]);
    const footerLinks = [...copy[locale].footer.groups.flatMap(group => group.links), ...copy[locale].footer.popularLinks];
    for (const link of [...navLinks, ...footerLinks]) {
      assert.doesNotMatch(link.href, /\/peta(?:[/?#]|$)|\/admin\/|\/individual\/trial/);
      assert.doesNotMatch(link.label, /\bPETA\b/);
      assert.doesNotMatch(link.label, /simulasi pembayaran|uji coba paket|mock payment/i);
    }
  });
  test(`${locale}: keep the other seven Services destinations and order`, () => {
    const services = copy[locale].nav.items.find(item => item.key === 'services');
    assert.deepEqual([...services.submenu.map(item => item.key)], ['programRecommendation', 'teamDiagnosis', 'individualDiagnostic', 'whyProgramsFail', 'workflow', 'serviceMap', 'chooseNeed']);
    assert.equal(services.submenu[2].href, 'https://app.binahub.id/insight/individual/packages');
    assert.equal(services.submenu[0].href, '/rekomendasi-program');
    assert.ok(copy[locale].footer.groups.some(group => group.links.some(link => link.href === 'https://app.binahub.id/insight/individual/packages')));
  });
}
