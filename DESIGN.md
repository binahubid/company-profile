---
name: BinaHub public website — recommendation-route extension
description: Existing BinaHub brand anchors and the implemented program recommendation landing extension.
colors:
  program-navy: "#0B2C6B"
  program-gold: "#D9A441"
  program-ink: "#10234B"
  program-blue: "#2F5EAB"
  program-sky: "#B7D1F2"
  program-ice: "#E8F0FC"
  program-champagne: "#F6E7C5"
  program-bronze: "#805A19"
  program-white: "#FFFFFF"
  program-canvas: "#F7F8FA"
  program-text: "#52617A"
  program-line: "#DFE4ED"
typography:
  display:
    fontFamily: "Plus Jakarta Sans, Segoe UI, sans-serif"
    fontSize: "clamp(2.25rem, 4.2vw, 4rem)"
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Plus Jakarta Sans, Segoe UI, sans-serif"
    fontSize: "clamp(1.65rem, 2.7vw, 2.5rem)"
    fontWeight: 600
    lineHeight: 1.22
    letterSpacing: "-0.03em"
  panel-title:
    fontFamily: "Plus Jakarta Sans, Segoe UI, sans-serif"
    fontSize: "clamp(1.35rem, 2vw, 1.8rem)"
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Plus Jakarta Sans, Segoe UI, sans-serif"
    fontSize: "1rem"
    fontWeight: 600
    lineHeight: 1.5
    letterSpacing: "-0.015em"
  lead:
    fontFamily: "Plus Jakarta Sans, Segoe UI, sans-serif"
    fontSize: "1.05rem"
    fontWeight: 400
    lineHeight: 1.75
  body:
    fontFamily: "Plus Jakarta Sans, Segoe UI, sans-serif"
    fontSize: "0.85rem"
    fontWeight: 400
    lineHeight: 1.75
  label:
    fontFamily: "Plus Jakarta Sans, Segoe UI, sans-serif"
    fontSize: "0.8rem"
    fontWeight: 600
    lineHeight: 1.5
rounded:
  tab: "11px"
  document: "12px"
  surface: "16px"
  pill: "999px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "16px"
  content: "20px"
  lg: "24px"
  xl: "32px"
  frame: "40px"
  stage: "48px"
  wide: "64px"
  section: "clamp(64px, 7vw, 104px)"
components:
  button-primary:
    backgroundColor: "{colors.program-navy}"
    textColor: "{colors.program-white}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "12px 20px"
  button-primary-hover:
    backgroundColor: "{colors.program-ink}"
  button-secondary:
    backgroundColor: "{colors.program-white}"
    textColor: "{colors.program-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "12px 20px"
  button-secondary-hover:
    backgroundColor: "{colors.program-canvas}"
  button-closing:
    backgroundColor: "{colors.program-white}"
    textColor: "{colors.program-navy}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "12px 20px"
  button-closing-hover:
    backgroundColor: "{colors.program-champagne}"
  demo-tab:
    textColor: "{colors.program-text}"
    rounded: "{rounded.tab}"
    padding: "10px 12px"
  demo-tab-selected:
    textColor: "{colors.program-navy}"
  process-card:
    backgroundColor: "#ffffff75"
    textColor: "{colors.program-navy}"
    rounded: "{rounded.surface}"
    padding: "28px"
  report-document:
    backgroundColor: "rgb(255 255 255 / 20%)"
    rounded: "{rounded.document}"
    padding: "30px"
---

# Design System: BinaHub public website

## Overview

**Creative North Star: "BinaHub navy/gold editorial extension"**

This document records the existing navy/gold and Plus Jakarta Sans brand anchors, then the implemented extension for `/rekomendasi-program` and its Indonesian/English equivalents. Its route tokens and component rules are authoritative for that landing only. It is not a record of a whole-site migration. The separately authorized homepage recommendation slide is recorded in [the homepage hero design](docs/home-recommendation-hero-design.md); catalog, discovery form and shared navigation retain their own design.

The confirmed reference direction is ElevenLabs' editorial hierarchy and product demonstration, with Hark/Apple-style light gradients. The built surface groups the navy headline, explanatory lead and compact pill actions on a pale ice/champagne mesh, opposite an existing transparent glass sculpture. Static backdrop glass appears on three process cards, in the inner illustrative report and in the blue/champagne selected and hover tab overlays. The rail remains plain on the original Cool Canvas stage. Each demonstration image receives a direct static blur while its desktop HTML headline and caption remain sharp; mobile reduces this art to a narrow accent beside the readable content. A dedicated dark optical-glass illustration backs the closing CTA beneath a contrast overlay and native HTML copy. Descriptive names below come from the existing palette guide; no new palette or visual world is introduced.

**Key Characteristics:**

- Existing navy, gold and Jakarta anchors; additional colors scoped to the recommendation route.
- Readable editorial hierarchy, pale mesh surfaces, scoped glass and sharp native HTML copy.
- A manual, clearly illustrative three-state demonstration with keyboard access and stable height.

Evidence refreshed on 29 October 2026: `src/app/globals.css`, `src/app/layout.tsx`, `src/styles/program-palette.module.css`, `src/components/program-recommendation.module.css`, `src/components/program-recommendation-landing.tsx` and `src/components/program-recommendation-demo.tsx`. `PRODUCT.md` supplies the durable mobile and keyboard-access constraints. The surface composition contract is `design-plans/program-recommendation-elevenlabs.md`; the visual palette guide is `design-plans/binahub-program-palette.html`.

## Colors

The brand anchors are navy and gold. The route adds light blue and warm supporting surfaces around them; the normative values above preserve the palette module's hex notation.

### Primary

- **BinaHub Navy** (`program-navy`): matches global `--primary`; used for the main headline, primary actions, selected tabs, links, process headings and the closing image's solid fallback.
- **Signature Blue** (`program-blue`): the route's keyboard-focus outline and an endpoint of the retained Blue Hour palette definition. Ordinary text links remain navy.

### Secondary

- **BinaHub Gold** (`program-gold`): matches global `--accent`; retained in the palette and illustration direction. It is not used as small text on white in this landing.
- **Champagne** (`program-champagne`): warm endpoint of the report gradient, text selection and the closing button's hover surface.
- **Readable Bronze** (`program-bronze`): step numerals and competency check icons on light surfaces.

### Tertiary

- **Glacier** (`program-ice`): demonstration-art fallback, the report gradient and supporting text on the closing blue field.
- **Sky Blue** (`program-sky`): declared supporting palette color and palette-guide swatch; the current landing stylesheet has no direct consumer. It is not a required new text or control role.

### Neutral

- **Deep Ink** (`program-ink`): default route text, secondary-action text and primary-action hover.
- **Pure White** (`program-white`): main canvas, demonstration content, opaque report fallback and inverse actions. Supported process cards and the inner report use their scoped translucent white component values. Process opaque fallbacks use the local cool white (`#f9faff`); report notes, definition descriptions and process paragraphs use darker local slate (`#405675`). The opening lead is unboxed; the sculpture caption uses its local half-white fill.
- **Cool Canvas** (`program-canvas`): secondary section and demo surfaces, secondary-action hover and the report gradient's middle stop. This is a route extension; it does not replace global `--secondary`.
- **Slate Blue** (`program-text`): supporting paragraphs, inactive tabs and detail text. The process section overrides paragraphs both outside and inside cards to the darker local slate; its full-width field uses a local lavender-blue base (`#f0f1f8`) under two quiet radial washes. These are scoped material values, not replacements for the base palette.
- **Quiet Line** (`program-line`): content dividers and secondary-action border.

**The Route Scope Rule.** Apply the `program-*` palette through the existing CSS-module theme boundary. Global brand values remain the anchors; this extension does not authorize changing other surfaces.

Daylight is applied behind the report document. Blue Hour and Golden Light remain defined in the palette and guide, but neither is applied to the current landing; the closing CTA now uses its dedicated illustration over the navy fallback. Their exact CSS remains in the sidecar and palette module. The Blue Hour middle stop is part of the retained gradient, not a separately promoted primitive. Opening/process mesh and CTA contrast overlays are component materials recorded in the sidecar.

## Typography

**Display Font:** Plus Jakarta Sans, with Segoe UI and sans-serif fallbacks.
**Body Font:** the same family. `layout.tsx` loads weights 300–700 with `display: swap`; the landing does not introduce a second family. The globally available Inter and pixel/mono faces are outside this extension.

### Hierarchy

- **Display:** the single landing h1 uses the `display` token, balanced wrapping and a maximum width of 19ch. Tablet uses `clamp(2.35rem, 4.2vw, 3rem)`; at widths through 767px it becomes `clamp(1.85rem, 6.8vw, 2.8rem)`, line-height 1.15 and 20ch, beside the sculpture accent.
- **Headline:** section h2 elements use `headline`; individual sections constrain widths to suit the copy. The closing heading retains the same hierarchy on a dark field.
- **Panel title:** demo h2 elements use `panel-title`, with a 28ch maximum; mobile uses 1.3rem. The illustrative disclosure follows each panel heading.
- **Title:** step titles start at `title`; benefit titles use 0.9rem and path titles 0.85rem. The report title uses 1.2rem at line-height 1.4; the program example uses 1.4rem.
- **Lead:** `lead` is constrained to 49ch in the opening introduction with 24px separation from the h1; mobile uses 0.9rem and up to 49ch in its own full-width row.
- **Body:** `body` is the repeated paragraph size inside steps, demo content, benefits and FAQ answers. Intro/report copy uses 0.95rem. Paragraph line-height is 1.75 unless a detail rule sets 1.65.
- **Label:** `label` is the primary/secondary action type; mobile actions use 0.75rem. Demo tabs use 0.85rem, dropping to 0.7rem on mobile and 0.65rem below 360px. Disclosures and footnotes use 0.7rem, with selected mobile notes at 0.65rem.

**The Heading First Rule.** The meaningful heading leads a demo panel; the illustrative disclosure sits immediately after it. Preserve that disclosure without turning it into a decorative eyebrow.

## Layout

The landing uses a centered container capped at 1200px. Desktop reserves 48px per side through `min(100% - 96px, 1200px)`. Widths 768–1099px use 32px per side; widths through 767px use 20px; below 360px use 16px. Section separation uses the `section` spacing token. The opening clears the fixed shared navigation with 136px top padding, 120px on tablet and 112px on mobile.

The desktop opening has a 1.35:1 introduction/sculpture grid; h1, lead, actions and note form one left-hand reading sequence. Tablet uses 1.5:1 with a 24px gap. Mobile reserves an 88px right-hand accent beside the h1; lead, actions and note then each span both columns. The figure caption hides on mobile. The demo uses 1:1.08 art/content on desktop and .85:1.15 on tablet; mobile uses a 64px decorative art strip beside the content, hiding the strip's repeated headline/caption. The accessible content and its disclosure remain in the panel.

The process field spans the page width while its introduction and three ordered glass cards stay inside the centered container. Desktop has three columns with 24px gaps and a 40px top gap. Mobile keeps all three cards on a native horizontal reading rail, using `min(82vw, 320px)` card widths, 14px gaps, a visible thin scrollbar and start snap; the named ordered list is keyboard-focusable. Report and FAQ stack on mobile, as do alternate paths. The three demo tabs remain a three-column control. Tablet gutters, demonstration padding and report/FAQ gaps reduce before the mobile changes.

The demonstration's three panels occupy one shared grid area, so the largest panel continues to reserve height. Inactive panels use `visibility: hidden`, `aria-hidden` and `inert`; only the selected tab and panel participate in keyboard access. Do not replace this with HTML `hidden` without checking height stability: this project's Tailwind layer gives `hidden` a display-none rule. The panel grid has minimum heights of 308px by default, 360px on tablet and 370px on mobile.

Local visual evidence lives in the sibling app repository: `../app-binahub/.impeccable/review/program-landing-desktop.png`, `program-landing-mobile.png`, `program-landing-desktop-viewport.png` and `program-landing-mobile-viewport.png` (the latter three share the same directory). Desktop captures are 1440×1000 viewport; mobile captures are 390×844 viewport. These are local finish evidence, not deployment evidence.

Prior local verification passed `npm run quality:public`, the 45-route production build and `../app-binahub/scripts/test-program-website-ui.mjs`. That browser suite covered the existing carousel regression, landing demo keyboard/click selection and stable height, catalog deep link, FAQ, loaded image, reduced motion, desktop/mobile, responsive overflow at 320/390/768/1280/1600px, ID/EN metadata and synthetic tracked handoff without API writes. The earlier mechanical detector returned an empty findings array before finish review. The review's disclosure finding was corrected; final reviewer confirmation was limited to that fix. For the subsequent distinct-artwork extension, public quality, the 45-route build and the updated full browser regression passed. The updated suite checked all three images/headlines/tones, static glass, sharp HTML copy, accessibility fallbacks, responsive sizes, keyboard selection and stable height, localization, tracked handoff and the existing homepage carousel without API writes. Finish review found no issues across all six fresh local scene captures: `../app-binahub/.impeccable/review/program-scene-{needs,competencies,program}-{desktop,mobile}.png`. These checks do not validate production deployment, backend inference, email delivery or paid-diagnostic readiness.

Earlier local verification for the direct-blur correction and authorized homepage extension: `npm run quality:public`, the 45-route production build and the full browser suite passed. Coverage includes synchronized automatic/manual hero changes, pause/hover/focus/offscreen behavior, reduced motion, ID/EN, direct-image blur and absence of an inset art card, three images/headlines/tones, responsive widths from 320–1600px and existing links without API writes. Finish review found no issues in all ten fresh scene/hero desktop/mobile captures: `../app-binahub/.impeccable/review/program-scene-{needs,competencies,program}-{desktop,mobile}.png`, `program-hero-{desktop,mobile}.png` and `program-hero-brand-{desktop,mobile}.png`. These remain local evidence, not deployment evidence.

The 28 October landing-refinement verification passed public quality, TypeScript, the 45-route production build and the full browser regression. Coverage included ID/EN revised headlines, the lavender-blue process field and readable paragraphs, loaded CTA artwork, forced colors, keyboard selection and stable demo height, route/attribution behavior and the existing homepage carousel without API writes. Its local evidence used `../app-binahub/.impeccable/review/program-landing-{desktop,mobile}-viewport.png`, `program-process-{desktop,mobile}.png` and `program-closing-{desktop,mobile}.png`. Finish review accepted those six captures with disposition `ship`. Those checks predate the 29 October composition refinement and establish no production-deployment result.

## Elevation & Depth

The29October refinement passed public quality, TypeScript,45-route production
build and the full browser regression. Landing desktop/mobile viewport captures
and the scoped individual/SPIN/RM captures were opened by the parent and finish
reviewer: disposition`ship`, no material fixes. The process rail was exercised
with synthesized Chromium touch movement; the page retains vertical scrolling.
Tablet/320px widths were checked for overflow. Physicaldevices and Safari remain
untested. Local UI tests mock service calls and establish no live DB, email,
deployment or RM sales result. Home mobile now has its separately authorized
refinement documented in `docs/home-recommendation-hero-design.md`.

Most depth comes from tonal layering, pale mesh grounds, fine rules and the glass illustrations. Supported browsers give process cards static `blur(16px) saturate(120%)` with `#ffffff75`, tab overlays `blur(16px) saturate(130%)` and the report sheet `blur(20px) saturate(130%)` with 20% white. The opening copy has no applied glass container; its former styles remain unused in the stylesheet and are not an active component rule. The reused transparent sculpture uses a radial halo and `drop-shadow(0 20px 18px #10234b14)`. Demo artwork instead uses direct image `filter: blur(20px)` and `transform: scale(1.12)`, with no inset sheet, border or white overlay. The showcase retains its original flat Cool Canvas ground (`#F7F8FA`); its transparent rail has no tint, gradient or blur. The report's original outer Daylight frame remains unchanged, without ribbon backing. Three scoped box shadows remain: selected tab (`0 3px 9px rgb(16 35 75 / 9%)`), process card (`0 16px 32px -24px #10234b38`) and report document (`0 16px 36px rgb(16 35 75 / 12%)`). Exact values, material gradients and component snippets are in `.impeccable/design.json`; no additional shadow scale is inferred.

Unsupported backdrop-filter browsers retain opaque cool-white process cards, opaque-gradient tab overlays and a white report document. `prefers-reduced-transparency: reduce` removes process/report/tab backdrop filters, makes process surfaces cool white and the report white, and uses the opaque tab gradient; direct decorative-image blur stays static. Forced colors uses `Canvas`/`CanvasText` on opening/process grounds and the closing CTA, removes card material, hides the opening figure, tab overlays and decorative images, removes report filters, and uses `Highlight`/`HighlightText` for tab selection. Blur, filter and gradient position remain static in every state.

The demonstration uses three decorative 1536×1024 WebP illustrations in `public/program-recommendation/`: the retained ice-blue navy/gold ribbon `direction-ribbon.webp` (54,996 bytes), seafoam/navy optical lenses `competency-lenses.webp` (62,694 bytes), and champagne/navy glass planes `program-layers.webp` (79,702 bytes). Each has its exact generation prompt, built-in image-generation tool and creation timestamp in a same-name `.webp.json` sidecar. Images use `object-fit: cover` and `object-position: 65% center` (66% center on mobile); the art panel has a 456px desktop minimum and stretches beside the 370px-minimum mobile panel. All three load eagerly; the initial needs image has high fetch priority and the other two low priority. Selection toggles their opacity immediately without an image transition. Empty alt text and an `aria-hidden="true"` artwork container keep this decoration outside the accessible recommendation content; desktop foreground headlines remain HTML and mobile hides their repeated art copy. The report has no raster backing. These are illustrations, not generated page comps or customer-results images.

## Shapes

Actions use pill corners. Process cards, demo/report outer frames and the closing block share the `surface` radius; the inset document uses `document`, selected tabs use `tab`. The three meaningful process steps use enclosed cards; demo details, report groups, FAQ and alternate-path rows retain thin horizontal rules. The root global radius remains separate from these route-specific values.

## Components

### Buttons and text links

Primary and secondary actions share a 46px minimum height, 10px icon gap and the frontmatter's padding and label type. Primary hover moves from navy to ink; the bordered secondary hover moves from white to canvas. Mobile uses 16px inline padding. The closing action reverses to white/navy and hovers to champagne. Inline text links have a 44px minimum height and reveal an underline on hover; their arrow icons remain separate SVGs.

Route links, buttons, summaries and focusable panels receive a 3px Signature Blue `:focus-visible` outline with 5px offset. Demo tabs inset that outline with -4px offset; demo panels use 4px offset. The closing button uses a white focus outline for its dark illustrated field. Actions transition background/text color for 160ms with `ease-out`; tabs transition text color and their gradient overlay's opacity for the same duration. The material overlay animates opacity only; blur, filters and gradient position do not animate. The route removes these transitions under `prefers-reduced-motion: reduce`.

### Opening introduction and process cards

The opening mesh combines ice-blue and champagne radial washes over a near-white vertical ground. Headline, existing lead, tracked actions and note now share one introduction. The opposite figure reuses `hero-needs.webp` (768×768 with alpha, 64,892 bytes), an existing local sculpture with its preserved generation-prompt sidecar. It uses `object-fit: contain`, eager loading, a soft halo/drop shadow and a 360px minimum figure height (280px on tablet); its maximum image height is 400px. A translucent 14px-radius caption connects needs, competencies and program with native text and SVG arrows. Mobile keeps the figure as the 88px accent, limits its image to the accent width and 210px height, and hides the caption. This refinement introduces no new artwork or palette. The former glass opening-copy container is no longer rendered.

The process section places its existing introduction above three ordered glass cards on the full-width lavender-blue mesh. Its heading and card titles stay navy; all paragraphs, including the introduction outside the cards, use the darker local slate. The meaningful 1–3 sequence is retained by the ordered list, with visible bronze numerals hidden from assistive technology to avoid duplicating native list semantics. Cards have 28px padding (24px on mobile), a translucent white border and the process-card shadow. The mobile native rail retains all text, supports touch and keyboard scrolling, and exposes its scrollbar without autoplay. Cards remain explanatory rather than clickable, with no hover or animation treatment.

### Demonstration

A three-tab `tablist` presents needs, competencies and a catalog program. Arrow keys wrap; Home/End select the first/last tab; selection moves focus and uses roving tab stops. Selection is manual, without autoplay. The disclosure after every panel heading identifies the synthetic example. The Team Synergy example retains the catalog deep link `?solution=SS-13`; the demonstration does not invoke a recommendation API or collect input.

The rail remains transparent and plain over the original flat Cool Canvas showcase. Each text-only tab owns a blue/white/champagne glass-gradient pseudo-element: hidden at rest, 40% opacity on hover and 75% opacity when selected, with static 16px blur in supported browsers. The selected state also carries a translucent white border and the selected-tab shadow. Only the three tab icons were removed; content/action icons remain. These states retain the existing keyboard and touch behavior.

Each tab pairs its content with a distinct illustration, tone and sharp HTML headline: needs uses the existing ice-blue ribbon with “Dari tantangan menuju hasil yang nyata.” / “From challenges to tangible results.”; competencies uses seafoam/navy lenses with “Kenali kemampuan yang perlu dikembangkan.” / “Identify the capabilities your team needs to develop.”; program uses champagne/navy glass planes with “Program yang tepat. Langkah yang jelas.” / “The right program. A clear next step.” These are aspirational editorial headlines; the synthetic-example disclosure and final-scope caveat remain visible in the content panel. The local art fallback is Glacier for needs, seafoam (`#e6f2ef`) for competencies and Champagne for program; seafoam is a scoped scene value, not a new global palette role. The headline is a direct HTML paragraph in the artwork panel, using `clamp(1.7rem, 2.5vw, 2.3rem)`, weight 500, line-height 1.18 and -0.03em tracking; mobile uses 1.55rem. Padding is 34px on desktop, 26px on tablet and 22px on mobile. The small BinaHub signature is a direct HTML caption; its desktop inset is 34px left/24px bottom and mobile uses 22px left/16px bottom. Only the images are blurred and scaled; copy has no filtered ancestor or additional card. The shared art container and content-panel grid preserve layout during manual selection.

At widths through 767px the repeated art headline/caption hide, leaving a 64px decorative accent and a readable content panel with 22px 18px padding; semantic panel headings, disclosure and controls remain visible. Mobile art typography declarations remain in source but do not render in this compact state.

**The Distinct Scene Rule.** Each demonstration state changes its illustration, tone and HTML headline together; keep image selection immediate, blur static and foreground HTML sharp. Preserve the plain rail, manual controls and illustrative disclosure.

### Report document

A frosted, padded inner document sits inside the original Daylight outer frame, without a ribbon backing. In supported browsers only the inner sheet uses 20% white with static 20px blur. It retains its translucent white border, opaque fallback and report-document shadow. Definition-list groups retain horizontal dividers; notes and definition descriptions use the local darker slate. The title is followed by an illustrative-report note, then three groups and a discussion footer. This is a visual outline of deliverables, not a final proposal.

The earlier report-glass correction passed public-quality checks, the 45-route production build, the full landing/homepage-hero browser regression and review of five fresh desktop/mobile captures. The reviewer found no material issue in that correction. Those checks predate the distinct tab-artwork extension. These remain local checks; no deployment, form or backend change is implied.

### Closing CTA

The closing surface uses `public/program-recommendation/cta-glass-path.webp`, an opaque 1800×600 WebP (38,406 bytes) generated with the built-in image-generation tool; its exact prompt and processing record live in `cta-glass-path.webp.json`. A decorative, empty-alt image fills the clipped 16px-radius block with `object-fit: cover` and `object-position: center right`. Native HTML retains the existing white heading, Glacier paragraph and inverse tracked action. The navy background remains a solid loading/failure fallback. A static dark overlay (`linear-gradient(90deg, #071a33e6 0%, #10234b99 55%, #0b2c6b26)`) protects copy; mobile strengthens it to `linear-gradient(90deg, #071a33e6, #10234bc4)`. No blur is added to this image.

The block has a 320px minimum height and a text/action grid with 56px padding and 48px gap; tablet uses 40px/24px. Mobile stacks it with 32px 24px padding and a 28px gap, keeping the action aligned to the start. Forced colors hides the image/overlay and uses a bordered system-color field. The illustration is static, decorative and outside accessible content; it contains no rasterized page text or generated claim.

### FAQ and alternate paths

FAQ uses native `details`/`summary` with a 44px minimum summary height, bottom rules and an SVG chevron that rotates on open. Alternate paths remain linked rows with titles, explanatory text and arrow icons. Shared navigation/footer and the external discovery form retain their own existing implementations; this route adds no input-field or navigation component token.

## Do's and Don'ts

### Do:

- **Do** retain BinaHub navy, gold and Plus Jakarta Sans as the established anchors.
- **Do** keep the additional palette and component rules scoped to the recommendation landing.
- **Do** preserve illustrative disclosures, visible keyboard focus and stable demo-panel height.
- **Do** keep foreground copy on readable light or blue fields; use the existing bronze role for small warm accents on light surfaces.
- **Do** preserve the native FAQ controls and manual demo interaction under reduced motion.
- **Do** keep backdrop glass scoped to process cards, tab overlays and the inner illustrative report; blur only decorative demonstration images directly, preserve the plain rail/original report frame and accessibility variants, and animate only tab-overlay opacity within the material treatment.
- **Do** change each demo state's illustration, tone and HTML headline together without image animation; keep decorative images outside the accessible content and retain their prompt sidecars.
- **Do** retain navy/slate process copy both outside and inside the glass cards and the dark CTA overlay behind native white copy.
- **Do** keep the opening headline, lead and actions together; retain native, keyboard-focusable horizontal process reading on mobile.

### Don't:

- **Don't** infer a whole-site rebrand from this extension; use the separately authorized homepage hero design for that surface.
- **Don't** treat the retained Blue Hour/Golden Light gradients or unused Sky Blue variable as required current landing surfaces.
- **Don't** style BinaHub Gold as small text on white in this route.
- **Don't** make the illustrative example appear to be the visitor's actual recommendation or a customer result.
- **Don't** turn a pre-heading disclosure eyebrow into a reusable component rule; the finish fix places the disclosure after the heading.
- **Don't** animate blur, filters or gradient position in the glass surfaces, or rasterize the demonstration headlines into the artwork.

Not canonized or repaired: no whole-site token audit or migration is claimed; globally loaded secondary/pixel fonts, global canvas differences, shared-shell behavior and the pre-existing typography-detector advisory are outside this narrow landing refinement. The pre-heading disclosure was corrected before the original record. The authorized homepage recommendation slide has its own scoped design record; its glass-plane composition is not a global component rule. No backend, form, scoring, AI, price or question behavior is changed by these documents.
