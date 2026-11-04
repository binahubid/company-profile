// Local visual QA only. Reuse an explicitly supplied, already-installed Playwright runtime.
import { createRequire } from 'node:module';
import { mkdir, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import assert from 'node:assert/strict';
const runtime = process.argv[2];
if (!runtime) throw new Error('Supply the absolute package.json path for the installed Playwright test runtime.');
const { chromium } = createRequire(resolve(runtime))('@playwright/test');
const origin = 'http://127.0.0.1:4320', phase = process.argv[3] || 'before';
const paths = ['', '/about', '/ecosystem', '/contact', '/pricing', '/insight', '/journey', '/from-bdn-to-binahub', '/binahub', '/gallery', '/perspektif', '/perspektif/transformation-signals-2026', '/rekomendasi-program'];
const output = resolve('.codex_tmp/unslop-' + phase); await mkdir(output, { recursive: true });
const results = [], browser = await chromium.launch({ headless: true });
try {
  for (const width of [1440, 390, 768]) {
    const context = await browser.newContext({ viewport: { width, height: width === 1440 ? 1000 : 900 }, reducedMotion: 'reduce' });
    // No production provider, analytics, contact submission, or image host requests.
    await context.route('**/*', route => {
      const request = route.request(), url = new URL(request.url());
      if (url.origin === origin && request.method() === 'GET') return route.continue();
      if (url.pathname.includes('/api/catalog/modules')) return route.fulfill({ status: 200, json: { success: true, products: [] } });
      return route.fulfill({ status: 204, body: '' });
    });
    const page = await context.newPage();
    for (const locale of ['', '/id', '/en']) for (const path of paths) {
      const url = locale + path || '/', errors = []; const onError = e => errors.push(e.message); page.on('pageerror', onError);
      const response = await page.goto(origin + url, { waitUntil: 'networkidle', timeout: 60000 });
      await page.evaluate(() => document.fonts.ready); await page.waitForTimeout(100);
      // Trigger viewport-bound content before judging a full-page capture as blank.
      await page.evaluate(async () => {
        for (let y = 0; y < document.documentElement.scrollHeight; y += Math.max(400, innerHeight - 100)) {
          window.scrollTo(0, y); await new Promise(done => setTimeout(done, 24));
        }
        window.scrollTo(0, 0);
      });
      await page.waitForTimeout(250);
      const metrics = await page.evaluate(() => {
        const visible = el => { const b = el.getBoundingClientRect(), s = getComputedStyle(el); return !el.closest('nextjs-portal') && b.width > 0 && b.height > 0 && s.visibility !== 'hidden' && s.display !== 'none' && Number(s.opacity) > 0; };
        const text = el => (el.innerText || '').trim().replace(/\s+/g, ' ').slice(0, 85);
        const tiny = [...document.querySelectorAll('p,label,button,a,figcaption')].filter(el => visible(el) && text(el) && parseFloat(getComputedStyle(el).fontSize) < 12).slice(0, 30).map(el => ({ tag: el.tagName, text: text(el), size: getComputedStyle(el).fontSize, className: el.className }));
        const unnamed = [...document.querySelectorAll('button')].filter(el => visible(el) && !text(el) && !el.getAttribute('aria-label') && !el.getAttribute('aria-labelledby') && !el.getAttribute('title')).map(el => el.outerHTML.slice(0, 200));
        return { overflow: document.documentElement.scrollWidth > innerWidth + 1, h1: [...document.querySelectorAll('h1')].filter(visible).map(text),
          tiny, unnamed, inputs: [...document.querySelectorAll('input,textarea,select')].filter(visible).map(el => ({ id: el.id, size: getComputedStyle(el).fontSize })), mains: document.querySelectorAll('main').length };
      });
      const key = (locale + path || 'home').replaceAll('/', '_');
      if (locale === '' && width !== 768) {
        if (phase !== 'final' || ['/contact', '/gallery', '/about', ''].includes(path)) await page.screenshot({ path: resolve(output, key + '-' + width + '.png'), fullPage: true, animations: 'disabled' });
        await page.screenshot({ path: resolve(output, key + '-' + width + '-top.png'), fullPage: false, animations: 'disabled' });
      }
      if (phase === 'final') {
        assert.equal(response?.status(), 200, url);
        assert.equal(metrics.overflow, false, `${url} overflows at ${width}`);
        assert.deepEqual(metrics.unnamed, [], `${url}: unnamed product buttons`);
        assert.deepEqual(errors, [], `${url}: runtime errors`);
        assert.equal(metrics.mains, 1, `${url}: nested main landmarks`);
        if (path === '/contact') assert(metrics.inputs.every(input => Number.parseFloat(input.size) >= 16), 'Mobile-safe form font size');
        if (locale === '' && path === '') {
          await page.keyboard.press('Tab');
          assert(await page.locator('.public-skip-link').evaluate(el => el === document.activeElement));
          await page.keyboard.press('Enter');
          assert.equal(await page.evaluate(() => document.activeElement.id), 'main-content');
          await page.locator('#chatbot-trigger').click();
          const chat = page.getByRole('region', { name: 'Chat BinaHub', exact: true }); await chat.waitFor();
          const bounds = await chat.boundingBox(); assert(bounds && bounds.x >= 0 && bounds.x + bounds.width <= width + 1);
          const input = page.getByRole('textbox', { name: 'Pesan untuk Bina', exact: true }); await input.fill('Draf QA lokal, jangan dikirim');
          await page.keyboard.press('Escape'); await chat.waitFor({ state: 'hidden' });
          assert(await page.locator('#chatbot-trigger').evaluate(el => el === document.activeElement));
        }
      }
      results.push({ url, width, status: response?.status(), errors, ...metrics });
      await writeFile(resolve(output, 'results.json'), JSON.stringify(results, null, 2));
      page.off('pageerror', onError);
      console.log(JSON.stringify({ url, width, status: response?.status(), overflow: metrics.overflow, tiny: metrics.tiny.length, unnamed: metrics.unnamed.length, errors: errors.length }));
    }
    await context.close();
  }
} finally { await browser.close(); }
await writeFile(resolve(output, 'results.json'), JSON.stringify(results, null, 2));
console.log(`Saved ${results.length} local route/viewport checks to ${output}. Catalog unavailable/empty fixture only; no live backend or form delivery tested.`);
