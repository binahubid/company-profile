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
    backgroundColor: "rgb(255 255 255 / 74%)"
    rounded: "{rounded.document}"
    padding: "30px"
---

# Design System: BinaHub public website

## Overview

**Creative North Star: "BinaHub navy/gold editorial extension"**

This document records the existing navy/gold and Plus Jakarta Sans brand anchors, then the implemented extension for `/rekomendasi-program` and its Indonesian/English equivalents. Its route tokens and component rules are authoritative for that landing only. It is not a record of a whole-site migration, and it does not replace the main homepage hero, catalog, discovery form or shared navigation design.

The confirmed reference direction is ElevenLabs' editorial hierarchy and product demonstration, with Hark/Apple-style light gradients. The built surface uses a white canvas, a navy headline, compact pill actions, fine dividers and an illustrated demonstration. The demo rail and illustrative report add the user's requested frosted glass, with blue/champagne selected and hover tab overlays. Descriptive names below come from the existing palette guide; no new qualitative preference or visual world is proposed here.

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
- **Pure White** (`program-white`): main canvas, demonstration content, opaque report fallback and inverse actions. The supported report glass uses the component's translucent white value above; report notes and definition descriptions use the darker local slate (`#405675`) for legibility over the artwork.
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

Local verification for this implementation passed `npm run quality:public`, the 45-route production build and `../app-binahub/scripts/test-program-website-ui.mjs`. The browser suite covers the existing carousel regression, landing demo keyboard/click selection and stable height, catalog deep link, FAQ, loaded image, reduced motion, desktop/mobile, responsive overflow at 320/390/768/1280/1600px, ID/EN metadata and synthetic tracked handoff without API writes. The mechanical detector returned an empty findings array before finish review. The review's disclosure finding was corrected; final reviewer confirmation was limited to that fix. These checks do not validate production deployment, backend inference, email delivery or paid-diagnostic readiness.

## Elevation & Depth

Most depth comes from white/canvas layering, light gradients, fine rules and the rendered ribbon artwork. Frosted material is limited to the demo tab rail and illustrative report document: supported browsers apply static `blur(16px) saturate(130%)` to the rail and `blur(20px) saturate(130%)` to the document. The rail has a translucent ice/white/champagne gradient; the report reuses the existing ribbon at 50% opacity behind its translucent sheet. Two small CSS shadows are present: a selected-tab shadow (`0 3px 9px rgb(16 35 75 / 9%)`) and a report-document shadow (`0 16px 36px rgb(16 35 75 / 12%)`). Their exact values, material gradients and component snippets are carried in `.impeccable/design.json`; no additional shadow scale is inferred.

Unsupported browsers retain the opaque rail (`#edf2fa`) and white report document. `prefers-reduced-transparency: reduce` removes both filters, makes the rail/document white and uses an opaque tab gradient. Forced colors removes the decorative ribbon and tab overlays, removes both filters, and uses `Highlight`/`HighlightText` for selection. Blur, filter and gradient position remain static in every state.

The sole authored raster remains `public/program-recommendation/direction-ribbon.webp` (1536×1024 source, 54,996 bytes). It is a navy/blue glass ribbon with a champagne-gold rim on pale blue, displayed with `object-fit: cover`; mobile art height is 192px. It is decorative (`alt=""` inside `aria-hidden="true"`), while text is HTML. The report reuses the same file as a decorative CSS backing layer; the glass change generated no new raster. The exact generation prompt and creation timestamp are retained in `public/program-recommendation/direction-ribbon.webp.json`. The scoped provenance check counted one raster and zero missing sidecars. This is an illustration, not a generated page comp or a customer-results image.

## Shapes

Actions use pill corners. Demo and report outer frames and the closing block share the `surface` radius; the inset document uses `document`, selected tabs use `tab`. Content rows use thin horizontal rules rather than a repeated enclosed card treatment. The root global radius remains separate from these route-specific values.

## Components

### Buttons and text links

Primary and secondary actions share a 46px minimum height, 10px icon gap and the frontmatter's padding and label type. Primary hover moves from navy to ink; the bordered secondary hover moves from white to canvas. Mobile uses 16px inline padding. The closing action reverses to white/navy and hovers to champagne. Inline text links have a 44px minimum height and reveal an underline on hover; their arrow icons remain separate SVGs.

Route links, buttons, summaries and focusable panels receive a 3px Signature Blue `:focus-visible` outline with 5px offset. Demo tabs inset that outline with -4px offset; demo panels use 4px offset. The closing button uses a white focus outline for its blue field. Actions transition background/text color for 160ms with `ease-out`; tabs transition text color and their gradient overlay's opacity for the same duration. The material overlay animates opacity only; blur, filters and gradient position do not animate. The route removes these transitions under `prefers-reduced-motion: reduce`.

### Demonstration

A three-tab `tablist` presents needs, competencies and a catalog program. Arrow keys wrap; Home/End select the first/last tab; selection moves focus and uses roving tab stops. Selection is manual, without autoplay. The disclosure after every panel heading identifies the synthetic example. The Team Synergy example retains the catalog deep link `?solution=SS-13`; the demonstration does not invoke a recommendation API or collect input.

The rail uses the static glass material documented above. Each tab owns a blue/white/champagne gradient pseudo-element: hidden at rest, 60% opacity on hover and full opacity when selected. The selected state also carries a translucent white border and the selected-tab shadow. Its background is a gradient overlay, not an opaque white selected fill. These states retain the existing keyboard and touch behavior.

### Report document

A frosted, padded document sits inside the Daylight frame over the reused ribbon. It has a translucent white border, the supported material or opaque fallback described above, and the report-document shadow. Definition-list groups retain horizontal dividers; notes and definition descriptions use the local darker slate. The title is followed by an illustrative-report note, then three groups and a discussion footer. This is a visual outline of deliverables, not a final proposal.

Glass finish evidence is in the sibling app's `.impeccable/review/program-glass-report-desktop.png`, `program-glass-report-mobile.png` and `program-glass-tabs-hover.png`. The glass implementation retained the passing public-quality checks, 45-route production build and full landing/homepage-hero browser regression. These remain local checks; no deployment, form or backend change is implied.

### FAQ and alternate paths

FAQ uses native `details`/`summary` with a 44px minimum summary height, bottom rules and an SVG chevron that rotates on open. Alternate paths remain linked rows with titles, explanatory text and arrow icons. Shared navigation/footer and the external discovery form retain their own existing implementations; this route adds no input-field or navigation component token.

## Do's and Don'ts

### Do:

- **Do** retain BinaHub navy, gold and Plus Jakarta Sans as the established anchors.
- **Do** keep the additional palette and component rules scoped to the recommendation landing.
- **Do** preserve illustrative disclosures, visible keyboard focus and stable demo-panel height.
- **Do** keep foreground copy on readable light or blue fields; use the existing bronze role for small warm accents on light surfaces.
- **Do** preserve the native FAQ controls and manual demo interaction under reduced motion.
- **Do** keep glass scoped to the demo rail and illustrative report, preserve opaque/reduced-transparency/forced-color variants, and animate only overlay opacity within the material treatment.

### Don't:

- **Don't** infer a whole-site rebrand or change the main homepage hero from this extension.
- **Don't** treat the reserved Golden Light gradient or unused Sky Blue variable as a required new landing component.
- **Don't** style BinaHub Gold as small text on white in this route.
- **Don't** make the illustrative example appear to be the visitor's actual recommendation or a customer result.
- **Don't** turn a pre-heading disclosure eyebrow into a reusable component rule; the finish fix places the disclosure after the heading.
- **Don't** animate blur, filters or gradient position in the two glass surfaces.

Not canonized or repaired: no whole-site token audit or migration is claimed; globally loaded secondary/pixel fonts, global canvas differences, shared-shell behavior and the pre-existing typography-detector advisory are outside this narrow glass merge. The pre-heading disclosure was corrected before the original record. No backend, form, scoring, AI, price or question behavior is changed by these documents.
