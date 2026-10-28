# Compact catalog — implementation handoff

16 October 2026. Implemented in website 0.2.29: public `/pricing` and locale
variants, including search, categories, cards, detail and selection dialogs,
and contact handoff. Mode: Operate.

## Direction contract

THESIS: A compact solution shelf. A visitor sees search controls and solutions
early, then opens full CEO details.

INHERITED DESIGN: Existing BinaHub navy, white modules, cool neutral ground,
restrained borders and typography. This extends the incumbent operation-focused
UI; it does not establish a new visual world or replace design authority.

STORY: Identify a need, narrow the list, inspect one solution, save a selection
and discuss it. Page copy is Indonesian on `/id`; item names stay English.

FIRST VIEWPORT: Compact title/intro, search + category controls, count and first
row of products. Selection is accessible from the header and a mobile-safe tray.

FORM: Responsive grid: three columns on desktop, two on intermediate widths and
one on phones. Cards provide a short preview; the native detail dialog retains
the available objectives, content, outputs, audience, format and notes.

DOCUMENTATION: Keep this surface contract with the existing product/design
records. No root DESIGN.md rewrite or new design sidecar is needed for this
extension. No raster assets ship with the change; test screenshots are evidence.

## Behavior

- Category/search/selected-only filters combine. Reset clears all filters.
- Public module codes only may persist in session storage; unavailable selections
  are excluded from contact links. No personal or assessment data is stored.
- Retry a failed catalog request without reloading the whole page.
- Native modal dialogs support Escape, trapped focus and return to their trigger.
  Body scroll is locked only while a dialog is open.
- Empty/loading/error states are explicit, no prices or synthetic products.
- Indonesian headings and category UI retain English item names. English routes
  use English UI and metadata; locale layouts provide the corresponding titles.

## Verification

Eight desktop/mobile Playwright tests passed: combined filters, selection and
reload persistence, complete detail, Tab/Shift+Tab containment, Escape and focus
return, ID/EN UI and metadata, error/retry, no public prices, and no horizontal
overflow at 320 px. The UI detector returned `[]` for this surface. The fresh
full catalog finish review verdict was **Ship**. The final website build passed
(42/42 pages), including the dialog focus fixes.

Reproduce from app-binahub after starting website-prod on port 4318:

```powershell
$env:PLAYWRIGHT_CATALOG = '1'
$env:PLAYWRIGHT_BASE_URL = 'http://127.0.0.1:4318'
$env:PLAYWRIGHT_PORT = '4318'
$env:PLAYWRIGHT_REUSE_SERVER = 'true'
npx playwright test e2e/catalog-compact.spec.ts --workers=1
```

Screenshots were opened and checked in app-binahub `.codex_tmp`:
`catalog-{chromium,mobile-chromium}.png` and `catalog-detail-*.png`.
Synthetic API fixtures prove UI behavior and layout, not production catalog
content, API availability, contact delivery or deployment.

## Addition on 21 October 2026

The catalog now offers Cards and List views. List groups solution names beneath
category headings, with simple divided rows rather than stacked cards. Names
open the same detail dialog; selection, combined filters and the contact handoff
use the existing catalog data. No commercial or competency content changes.

The named, keyboard-accessible view controls expose their pressed state. The
preference persists for the current browser session and degrades to in-memory
state if storage is blocked. Only the mode string is saved under the versioned
`binahub.catalog.view.v1` key. Empty categories are omitted after filtering.
Long English titles wrap on phones; category labels follow the page locale.

Verification: 14 desktop/mobile Chromium Playwright cases passed, including
the existing catalog regressions plus grouped list semantics, details with
keyboard focus return, combined filters, selection across view changes,
reload/locale preference, special assessment entry and 320 px long-title layout.
Desktop/mobile list captures were visually inspected. Detector returned `[]`;
typecheck and targeted component lint passed. Fixtures remain synthetic and
do not demonstrate production data, delivery, or deployment.

## Release on 28 October 2026

Published the previously local Cards/List and solution deep-link changes as
0.2.32, retaining Next.js 16.4.3 and the security-patched dependency lockfile.
Public lint, typecheck and production build passed. Two fresh desktop/mobile
browser flows passed list/card switching, dialog/Escape, persisted selection and
view, search, 320–1440px overflow and `?solution=CODE` with synthetic API fixtures.
No catalog content, prices, competency definitions or CEO questions changed.
