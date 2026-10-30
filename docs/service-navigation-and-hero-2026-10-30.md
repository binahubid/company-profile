# Services navigation and hero refinement · 30 October 2026

Website version 0.2.45 implements the approved local composition refinement:
centered existing recommendation heading/actions with the wide manual preview
below; four real service destinations before the four retained ecosystem links
in desktop/mobile Services and footer; a smaller home mobile logo, lighter menu
toggle and subtler Scroll cue. Desktop keeps its 16px Scroll arrow; the 12px
override is scoped through 767px. PETA remains visibly invitation-only and links
only to the existing app `/peta`. Fixed chat is unchanged.

Implementation verification passed `npm run quality:public`, the 45-route
production build, and the sibling app's `scripts/test-service-navigation-ui.mjs`
and `scripts/test-program-website-ui.mjs`. The focused suite checks ID/EN
eight-link ordering, destinations and retained originals, PETA without an
invitation fragment, footer, Enter/Escape, home dimensions, Scroll, fixed chat
and preview tabs. The full regression covers the existing carousel, manual
tabs, touch, catalog, metadata and UTM handoff without API writes.

Local Chromium evidence uses 390×844 and 1440×1000 emulation, with overflow
checks at 320/390/768/1024/1440px. Parent and finish reviewer opened all nine
captures under `../app-binahub/.impeccable/review/`: `service-refine-` followed by
`landing-desktop`, `landing-mobile`, `home-mobile`, `home-mobile-full`,
`services-desktop`, `services-mobile-top`, `services-mobile-bottom`,
`footer-desktop` and `footer-mobile`, each `.png`. The full home capture includes
the complete Scroll cue and clearance. These establish local composition and
behavior; physical phones, Safari, deployment and live backend effects were not
tested.

The full finish review requested two material fixes: mobile-only scoping for the
Scroll SVG override and reconciliation of obsolete root DESIGN opening prose.
The code fix and documentation correction are applied. The final verdict pass
scored both fixes resolved with disposition `ship`, scoped to those two fixes.
Earlier `ship` verdicts apply to their recorded
revisions. The single detector pass, `service-refine-detector.json`, contains
122 advisories (66 font-size, 53 color, three radius), with no primary finding.

Root DESIGN frontmatter, `.impeccable/design.json`, PRODUCT.md, raster assets
and their provenance records are unchanged. Pre-existing sidecar/type/palette
drift is recorded without repair or promotion into new rules. No form, AI,
scoring, payment, email or invitation policy changes are part of this work.
