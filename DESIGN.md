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
  report-document:
    backgroundColor: "rgb(255 255 255 / 20%)"
    rounded: "{rounded.document}"
    padding: "30px"
---

# Design System: BinaHub public website

## Overview

**Creative North Star: "BinaHub navy/gold editorial extension"**

This document records the existing navy/gold and Plus Jakarta Sans brand anchors, then the implemented extension for `/rekomendasi-program` and its Indonesian/English equivalents. Its route tokens and component rules are authoritative for that landing only. It is not a record of a whole-site migration, and it does not replace the main homepage hero, catalog, discovery form or shared navigation design.

The confirmed reference direction is ElevenLabs' editorial hierarchy and product demonstration, with Hark/Apple-style light gradients. The built surface uses a white canvas, a navy headline, compact pill actions, fine dividers and an illustrated demonstration. Frosted glass is limited to the inner illustrative report, each demonstration artwork's inset sheet and the blue/champagne selected and hover tab overlays; the rail remains plain on the original Cool Canvas stage. Descriptive names below come from the existing palette guide; no new qualitative preference or visual world is proposed here.

**Key Characteristics:**

- Existing navy, gold and Jakarta anchors; additional colors scoped to the recommendation route.
- Readable editorial hierarchy, light surfaces and a restrained pair of applied gradients.
- A manual, clearly illustrative three-state demonstration with keyboard access and stable height.

Evidence captured on 28 October 2026: `src/app/globals.css`, `src/app/layout.tsx`, `src/styles/program-palette.module.css`, `src/components/program-recommendation.module.css`, `src/components/program-recommendation-landing.tsx` and `src/components/program-recommendation-demo.tsx`. `PRODUCT.md` supplies the durable mobile and keyboard-access constraints. The surface composition contract is `design-plans/program-recommendation-elevenlabs.md`; the visual palette guide is `design-plans/binahub-program-palette.html`.

## Colors

The brand anchors are navy and gold. The route adds light blue and warm supporting surfaces around them; the normative values above preserve the palette module's hex notation.

### Primary

- **BinaHub Navy** (`program-navy`): matches global `--primary`; used for the main headline, primary actions, selected tabs, links and the closing gradient.
- **Signature Blue** (`program-blue`): the route's keyboard-focus outline and the light endpoint of the closing gradient. Ordinary text links remain navy.

### Secondary

- **BinaHub Gold** (`program-gold`): matches global `--accent`; retained in the palette and illustration direction. It is not used as small text on white in this landing.
- **Champagne** (`program-champagne`): warm endpoint of the report gradient, text selection and the closing button's hover surface.
- **Readable Bronze** (`program-bronze`): step numerals and competency check icons on light surfaces.

### Tertiary

- **Glacier** (`program-ice`): demonstration-art fallback, the report gradient and supporting text on the closing blue field.
- **Sky Blue** (`program-sky`): declared supporting palette color and palette-guide swatch; the current landing stylesheet has no direct consumer. It is not a required new text or control role.

### Neutral

- **Deep Ink** (`program-ink`): default route text, secondary-action text and primary-action hover.
- **Pure White** (`program-white`): main canvas, demonstration content, opaque report fallback and inverse actions. The supported inner report glass uses the component's translucent white value above; report notes and definition descriptions use the darker local slate (`#405675`) over the original Daylight frame.
- **Cool Canvas** (`program-canvas`): secondary section and demo surfaces, secondary-action hover and the report gradient's middle stop. This is a route extension; it does not replace global `--secondary`.
- **Slate Blue** (`program-text`): supporting paragraphs, inactive tabs and detail text.
- **Quiet Line** (`program-line`): content dividers and secondary-action border.

**The Route Scope Rule.** Apply the `program-*` palette through the existing CSS-module theme boundary. Global brand values remain the anchors; this extension does not authorize changing other surfaces.

Daylight is applied behind the report document; Blue Hour is applied to the closing CTA. Their exact CSS is in the sidecar and palette module. Golden Light is defined and shown as a reserved visual accent in the guide, but is not applied to the landing. The blue-hour middle stop is part of that gradient, not a separately promoted primitive.

## Typography

**Display Font:** Plus Jakarta Sans, with Segoe UI and sans-serif fallbacks.
**Body Font:** the same family. `layout.tsx` loads weights 300–700 with `display: swap`; the landing does not introduce a second family. The globally available Inter and pixel/mono faces are outside this extension.

### Hierarchy

- **Display:** the single landing h1 uses the `display` token, balanced wrapping and a maximum width of 19ch. At widths through 767px it becomes `clamp(2.1rem, 7.8vw, 3rem)` and 20ch.
- **Headline:** section h2 elements use `headline`; individual sections constrain widths to suit the copy. The closing heading retains the same hierarchy on a dark field.
- **Panel title:** demo h2 elements use `panel-title`, with a 28ch maximum; mobile uses 1.5rem. The illustrative disclosure follows each panel heading.
- **Title:** step titles start at `title`; benefit titles use 0.9rem and path titles 0.85rem. The report title uses 1.2rem at line-height 1.4; the program example uses 1.4rem.
- **Lead:** `lead`, constrained to 40ch; mobile uses 0.95rem and up to 45ch.
- **Body:** `body` is the repeated paragraph size inside steps, demo content, benefits and FAQ answers. Intro/report copy uses 0.95rem. Paragraph line-height is 1.75 unless a detail rule sets 1.65.
- **Label:** `label` is the primary/secondary action type; mobile actions use 0.75rem. Demo tabs use 0.85rem, dropping to 0.7rem on mobile and 0.65rem below 360px. Disclosures and footnotes use 0.7rem, with selected mobile notes at 0.65rem.

**The Heading First Rule.** The meaningful heading leads a demo panel; the illustrative disclosure sits immediately after it. Preserve that disclosure without turning it into a decorative eyebrow.

## Layout

The landing uses a centered container capped at 1200px. Desktop reserves 48px per side through `min(100% - 96px, 1200px)`. Widths 768–1099px use 32px per side; widths through 767px use 20px; below 360px use 16px. Section separation uses the `section` spacing token. The opening clears the fixed shared navigation with 176px top padding, reduced to 112px on mobile.

The desktop opening has a 1.35:1 headline/copy grid; the demonstration below has a 1:1.08 art/content grid. Process steps occupy three columns. Report and FAQ use two columns; alternate paths use two columns. At 767px and below these become single-column sequences in source reading order. The three demo tabs remain a three-column control. Tablet gutters, demonstration padding and report/FAQ gaps reduce before the mobile stack.

The demonstration's three panels occupy one shared grid area, so the largest panel continues to reserve height. Inactive panels use `visibility: hidden`, `aria-hidden` and `inert`; only the selected tab and panel participate in keyboard access. Do not replace this with HTML `hidden` without checking height stability: this project's Tailwind layer gives `hidden` a display-none rule. The panel grid has minimum heights of 308px by default, 360px on tablet and 330px on mobile.

Local visual evidence lives in the sibling app repository: `../app-binahub/.impeccable/review/program-landing-desktop.png`, `program-landing-mobile.png`, `program-landing-desktop-viewport.png` and `program-landing-mobile-viewport.png` (the latter three share the same directory). Desktop captures are 1440×1000 viewport; mobile captures are 390×844 viewport. These are local finish evidence, not deployment evidence.

Prior local verification passed `npm run quality:public`, the 45-route production build and `../app-binahub/scripts/test-program-website-ui.mjs`. That browser suite covered the existing carousel regression, landing demo keyboard/click selection and stable height, catalog deep link, FAQ, loaded image, reduced motion, desktop/mobile, responsive overflow at 320/390/768/1280/1600px, ID/EN metadata and synthetic tracked handoff without API writes. The earlier mechanical detector returned an empty findings array before finish review. The review's disclosure finding was corrected; final reviewer confirmation was limited to that fix. For the subsequent distinct-artwork extension, public quality, the 45-route build and the updated full browser regression passed. The updated suite checked all three images/headlines/tones, static glass, sharp HTML copy, accessibility fallbacks, responsive sizes, keyboard selection and stable height, localization, tracked handoff and the existing homepage carousel without API writes. Finish review found no issues across all six fresh local scene captures: `../app-binahub/.impeccable/review/program-scene-{needs,competencies,program}-{desktop,mobile}.png`. These checks do not validate production deployment, backend inference, email delivery or paid-diagnostic readiness.

## Elevation & Depth

Most depth comes from white/canvas layering, light gradients, fine rules and the demonstration's three glass illustrations. Frosted material is limited to the tab overlays, inset artwork sheet and inner illustrative report document: supported browsers apply static `blur(16px) saturate(130%)` to the tab overlays and `blur(20px) saturate(130%)` with 20% white to both sheets. The showcase retains its original flat Cool Canvas ground (`#F7F8FA`); its transparent rail has no tint, gradient or blur. The report's original outer Daylight frame remains unchanged, without ribbon backing. Two small CSS shadows are present: a selected-tab shadow (`0 3px 9px rgb(16 35 75 / 9%)`) and a report-document shadow (`0 16px 36px rgb(16 35 75 / 12%)`). Their exact values, material gradients and component snippets are carried in `.impeccable/design.json`; no additional shadow scale is inferred.

Unsupported browsers retain the plain rail, opaque-gradient tab overlays, white report document and an 85% white artwork sheet. `prefers-reduced-transparency: reduce` removes material filters, makes both sheets white and uses the opaque tab gradient. Forced colors hides tab overlays and decorative artwork, removes sheet filters, and uses `Highlight`/`HighlightText` for selection. Blur, filter and gradient position remain static in every state.

The demonstration uses three decorative 1536×1024 WebP illustrations in `public/program-recommendation/`: the retained ice-blue navy/gold ribbon `direction-ribbon.webp` (54,996 bytes), seafoam/navy optical lenses `competency-lenses.webp` (62,694 bytes), and champagne/navy glass planes `program-layers.webp` (79,702 bytes). Each has its exact generation prompt, built-in image-generation tool and creation timestamp in a same-name `.webp.json` sidecar. Images use `object-fit: cover` and `object-position: 65% center` (65% 52% on mobile); the art panel has a 456px desktop minimum and 224px mobile minimum. All three load eagerly; the initial needs image has high fetch priority and the other two low priority. Selection toggles their opacity immediately without an image transition. Empty alt text and an `aria-hidden="true"` artwork container keep this decoration outside the accessible recommendation content; foreground headlines remain HTML. The report has no raster backing. These are illustrations, not generated page comps or customer-results images.

## Shapes

Actions use pill corners. Demo and report outer frames and the closing block share the `surface` radius; the inset document uses `document`, selected tabs use `tab`. Content rows use thin horizontal rules rather than a repeated enclosed card treatment. The root global radius remains separate from these route-specific values.

## Components

### Buttons and text links

Primary and secondary actions share a 46px minimum height, 10px icon gap and the frontmatter's padding and label type. Primary hover moves from navy to ink; the bordered secondary hover moves from white to canvas. Mobile uses 16px inline padding. The closing action reverses to white/navy and hovers to champagne. Inline text links have a 44px minimum height and reveal an underline on hover; their arrow icons remain separate SVGs.

Route links, buttons, summaries and focusable panels receive a 3px Signature Blue `:focus-visible` outline with 5px offset. Demo tabs inset that outline with -4px offset; demo panels use 4px offset. The closing button uses a white focus outline for its blue field. Actions transition background/text color for 160ms with `ease-out`; tabs transition text color and their gradient overlay's opacity for the same duration. The material overlay animates opacity only; blur, filters and gradient position do not animate. The route removes these transitions under `prefers-reduced-motion: reduce`.

### Demonstration

A three-tab `tablist` presents needs, competencies and a catalog program. Arrow keys wrap; Home/End select the first/last tab; selection moves focus and uses roving tab stops. Selection is manual, without autoplay. The disclosure after every panel heading identifies the synthetic example. The Team Synergy example retains the catalog deep link `?solution=SS-13`; the demonstration does not invoke a recommendation API or collect input.

The rail remains transparent and plain over the original flat Cool Canvas showcase. Each text-only tab owns a blue/white/champagne glass-gradient pseudo-element: hidden at rest, 40% opacity on hover and 75% opacity when selected, with static 16px blur in supported browsers. The selected state also carries a translucent white border and the selected-tab shadow. Only the three tab icons were removed; content/action icons remain. These states retain the existing keyboard and touch behavior.

Each tab pairs its content with a distinct illustration, tone and sharp HTML headline: needs uses the existing ice-blue ribbon with “Dari tantangan, menuju arah.”; competencies uses seafoam/navy lenses with “Temukan fokus. Bangun kemampuan.”; program uses champagne/navy glass planes with “Program yang tepat. Langkah yang jelas.” English equivalents follow the locale. The local art fallback is Glacier for needs, seafoam (`#e6f2ef`) for competencies and Champagne for program; seafoam is a scoped scene value, not a new global palette role. The inset sheet uses 18px desktop and 12px mobile insets, a 12px radius and a translucent white border. Its headline uses `clamp(1.7rem, 2.5vw, 2.3rem)`, weight 500, line-height 1.18 and -0.03em tracking; mobile uses 1.55rem. The small BinaHub signature remains HTML below it. Sheet filters never apply to the foreground copy. The shared art container and content-panel grid preserve layout during manual selection.

**The Distinct Scene Rule.** Each demonstration state changes its illustration, tone and HTML headline together; keep the image change immediate and the frosted sheet static. Preserve the plain rail, manual controls and illustrative disclosure.

### Report document

A frosted, padded inner document sits inside the original Daylight outer frame, without a ribbon backing. In supported browsers only the inner sheet uses 20% white with static 20px blur. It retains its translucent white border, opaque fallback and report-document shadow. Definition-list groups retain horizontal dividers; notes and definition descriptions use the local darker slate. The title is followed by an illustrative-report note, then three groups and a discussion footer. This is a visual outline of deliverables, not a final proposal.

The earlier report-glass correction passed public-quality checks, the 45-route production build, the full landing/homepage-hero browser regression and review of five fresh desktop/mobile captures. The reviewer found no material issue in that correction. Those checks predate the distinct tab-artwork extension. These remain local checks; no deployment, form or backend change is implied.

### FAQ and alternate paths

FAQ uses native `details`/`summary` with a 44px minimum summary height, bottom rules and an SVG chevron that rotates on open. Alternate paths remain linked rows with titles, explanatory text and arrow icons. Shared navigation/footer and the external discovery form retain their own existing implementations; this route adds no input-field or navigation component token.

## Do's and Don'ts

### Do:

- **Do** retain BinaHub navy, gold and Plus Jakarta Sans as the established anchors.
- **Do** keep the additional palette and component rules scoped to the recommendation landing.
- **Do** preserve illustrative disclosures, visible keyboard focus and stable demo-panel height.
- **Do** keep foreground copy on readable light or blue fields; use the existing bronze role for small warm accents on light surfaces.
- **Do** preserve the native FAQ controls and manual demo interaction under reduced motion.
- **Do** keep glass scoped to the tab overlays, inset demonstration-art sheet and inner illustrative report; preserve the plain rail/original report frame and opaque/reduced-transparency/forced-color variants, and animate only tab-overlay opacity within the material treatment.
- **Do** change each demo state's illustration, tone and HTML headline together without image animation; keep decorative images outside the accessible content and retain their prompt sidecars.

### Don't:

- **Don't** infer a whole-site rebrand or change the main homepage hero from this extension.
- **Don't** treat the reserved Golden Light gradient or unused Sky Blue variable as a required new landing component.
- **Don't** style BinaHub Gold as small text on white in this route.
- **Don't** make the illustrative example appear to be the visitor's actual recommendation or a customer result.
- **Don't** turn a pre-heading disclosure eyebrow into a reusable component rule; the finish fix places the disclosure after the heading.
- **Don't** animate blur, filters or gradient position in the glass surfaces, or rasterize the demonstration headlines into the artwork.

Not canonized or repaired: no whole-site token audit or migration is claimed; globally loaded secondary/pixel fonts, global canvas differences, shared-shell behavior and the pre-existing typography-detector advisory are outside this narrow tab-artwork merge. The pre-heading disclosure was corrected before the original record. A homepage-hero suggestion remains a proposal, not built design canon. No backend, form, scoring, AI, price or question behavior is changed by these documents.
