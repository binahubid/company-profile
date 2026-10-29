---
name: BinaHub homepage — recommendation slide
description: Implemented scoped homepage recommendation journey with illustrated glass cards.
colors:
  hero-navy: "#0b2c6b"
  hero-detail: "#405675"
  hero-ice: "#e6efff"
  hero-seafoam: "#e0f2e9"
  hero-champagne: "#fff1cb"
  hero-gold: "#d9a441"
  hero-white: "#fff"
typography:
  recommendation-display:
    fontFamily: "Plus Jakarta Sans, Segoe UI, sans-serif"
    fontSize: "clamp(2.75rem, 4vw, 4rem)"
    fontWeight: 500
    lineHeight: 1.12
    letterSpacing: "-0.035em"
  card-title:
    fontFamily: "Plus Jakarta Sans, Segoe UI, sans-serif"
    fontSize: "clamp(18px, 2vw, 27px)"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "-0.025em"
  card-body:
    fontFamily: "Plus Jakarta Sans, Segoe UI, sans-serif"
    fontSize: "clamp(11px, 1.05vw, 14px)"
    fontWeight: 400
    lineHeight: 1.6
rounded:
  layer: "16px"
  badge: "10px"
  action: "999px"
---

# Design System: Homepage recommendation slide

## Overview

**Creative North Star: "Needs become a development direction"**

This record applies only to the homepage recommendation slide, its synchronized right-hand visual and backdrop, and the shared hero controls on the Indonesian and English home routes. It follows [the user-pinned homepage contract](../design-plans/home-recommendation-hero.md) and [its persisted surface brief](../.impeccable/surfaces/src-app-sections-hero-section-tsx.md). [Root DESIGN.md](../DESIGN.md) continues to record the separate recommendation landing extension; this ordinary homepage extension does not update that record or its sidecar.

The current composition restores the generic Kebutuhan / Kompetensi / Program journey: three equally sized light glass cards, each pairing native text with a transparent abstract sculpture. Ice blue, seafoam and champagne distinguish both the card grounds and illustrations. The latest supplied BinaHub Program Development Hero reference informs the illustrated glass, thin rims and soft atmosphere. BinaHub's Jakarta type and navy/gold anchors continue; the brand slide retains its existing copy, logo and orbit visual. The concrete coordination/Team Synergy example from version 0.2.38 is superseded.

Evidence: src/components/program-hero-visual.tsx and its CSS module, src/components/hero-message-carousel.tsx and its CSS module, and src/app/_sections/hero-section.tsx. PRODUCT.md's mobile browsing and keyboard access principles constrain this surface.

**Key Characteristics:**

- Three distinct light glass tones with semantic, still illustrations.
- Native localized labels and descriptions; an accessible offer and tracked actions.
- Shared slide state, stable visual footprint and bottom-centered controls.

## Colors

### Primary

Navy identifies the recommendation headline, card titles and primary action. Slate carries card descriptions and the Scroll cue. White forms the glass rims, highlights and primary-action text.

### Secondary

The three frontmatter surface colors are the solid reduced-transparency fallbacks. At default transparency, each card uses its own light gradient: needs runs from near-white ice (#f8fbfff0) to blue (#dceaffc9); competencies from mint white (#f5fffbf0) to seafoam (#ccebdedb); program from warm ivory (#fffdf2f0) to champagne (#fae2a3c9). Badge grounds follow the same sequence, with blue, green and bronze icon ink. No card uses a dark program ground.

### Neutral

The recommendation backdrop is white with overlapping static radial fields: pale blue at 12%/72% and 78%/24%, champagne at 87%/82%, and seafoam at 54%/58%. A low-opacity diagonal white sheen overlays those fields. There are no grid lines or extra backdrop cards.

The visual's separate static atmosphere combines blue at the upper left (#a8cbed70) and gold at the lower right (#d9a44133). It extends 12% beyond the scene and fades through a radial mask, avoiding a rectangular edge. Fine pale-blue ellipses and two small nodes form its orbit.

**The Surface Scope Rule.** Keep these values scoped to the homepage recommendation slide; root palette roles and the brand slide remain governed by their existing implementation.

## Typography

Plus Jakarta Sans remains the existing family. The desktop recommendation-display token applies from 1024px; below that, the existing hero display uses clamp(1.75rem,7vw,2.5rem), line-height 1.1 and -0.025em tracking. Both recommendation title lines use weight 500 and upright navy type. The recommendation description uses 14px/1.65 initially and 17px/1.75 from 1024px.

All three card titles share card-title, and all descriptions share card-body. Through 1399px, card descriptions become 10px/1.5; through 1023px titles become 20px, then 18px through 767px. These small sizes belong to the decorative scene; the accessible offer and actions remain in the carousel content.

Desktop slide controls use 12px/1.5, with weight 600 for the selected slide. On phones the visual indicator is compact, while its localized native button name remains accessible. The Scroll cue uses 11px with a localized accessible destination label.

## Layout

Through767px, the outer frame and inner content use min-height100svh with intrinsic content growth. Mobile content has164px top,20px horizontal and132px bottom padding (16px horizontal through359px); composition gap24px. From768–1023px the earlier min-height calc(100svh +6rem) remains. From1024px both use min-height clamp(880px,calc(100svh +6rem),1010px). Desktop content reserves180px below the composition for controls and Scroll.

Copy and CTA appear before the decorative scene below1024px. Desktop places copy left and scene right in a1:0.9grid, capped at1580px; copy caps at780px. Mobile scene width caps at320px with a shared240px height (250px through359px), including the inactive visual footprint. The brand orbit uses230×230px centered inside that footprint. From768px the existing380px scene width and14.75rem top padding remain. Mobile refinements apply to both slides, not the desktop world.

Both right-hand visuals share a grid area and reserve layout while inactive. The recommendation scene has a 670px maximum width and aspect-ratio 1/1.08, becoming 1/1.16 through 1023px. Its three cards have equal width and height; positions are relative to that scene:

| Card | Left / top | Width / height | Static rotation |
| --- | --- | --- | --- |
| Needs | 18% / 4% | 80% / 32% | 8deg |
| Competencies | 0 / 35% | 80% / 32% | -5deg |
| Program | 20% / 66% | 80% / 32% | -7deg |

Card padding is 22px 24px, becoming 14px 16px through 1399px and 13px 14px through 767px. Through 359px, card padding reduces to 10px 12px and text gap to 4px so copy stays within the card. The text column caps at 57% of the card, becoming 58% on phones. Artwork occupies the right side at 59% width and 114% height, offset right -8% and bottom -9%; a left-edge mask lets it merge into the glass without covering the native text.

Controls are centered horizontally at bottom84px, with Scroll at bottom22px. Mobile now shows native localized slide names in10px type instead of indicator-only bars, with44px targets and a separate rotation control. The recommendation viewport keeps the complete offer, three cards, controls and Scroll together. This preserves the existing carousel state, attribution, automatic/manual changes and reduced-motion behavior.

## Elevation & Depth

All three cards use the same thin white rim (1px solid #ffffffe6), rounded corners, inset white top highlight and diffuse shadow (0 22px 48px -22px #0b2c6b38, inset 0 1px 0 #fff). Supported browsers add static backdrop-filter blur(18px) saturate(120%). Their surfaces, blur, shadows, masks and static rotations do not animate.

The shared controls use a faint white pill, white rim and static 10px backdrop blur. The selected slide receives a brighter translucent white pill; hover adds a restrained white fill. The atmosphere, material layers and illustration highlights provide depth without introducing a surrounding panel.

Slide content, right-hand visuals and recommendation backdrop transition opacity over 220ms ease-out. Existing hero entrance motion is separate and remains outside the rules established by this extension. The new recommendation orbit rotates with transform only; cards and raster artwork remain still.

Reduced motion removes slide/visual/backdrop transitions, automatic slide changes and the recommendation orbit animation. Reduced transparency removes card and control backdrop filters and uses the solid fallback colors; the control ground becomes #f4f7fc. Forced colors hides the atmosphere, recommendation backdrop, illustrations, orbit and badges; cards use Canvas/CanvasText with no filter or shadow, and the controls retain a CanvasText border and selected Highlight outline.

## Shapes

Equal softly rounded rectangles establish three steps of one journey. The cards share the layer radius; their offset positions and static rotations establish the composition. Desktop badges are 34px squares with softly rounded 10px corners, reducing to 25px and 8px corners through 1399px; phones hide badges to preserve copy and illustration space.

Recommendation actions and controls use pill corners. Mobile slide names are visible in the named buttons; the old compact indicator bars are hidden on phones. Desktop controls are unchanged.

## Components

### Synchronized carousel and visual

HeroSection owns activeSlide, passes it to HeroMessageCarousel, and selects the matching right-hand visual and backdrop. Recommendation starts selected. The entire recommendation scene is decorative and aria-hidden; its images use empty alternative text. The brand logo/orbit remains the second visual.

The native card copy remains generic and localized:

| Card | Indonesian | English |
| --- | --- | --- |
| Needs | Kebutuhan — Tantangan dan tujuan tim Anda. | Your needs — Team challenges and intended outcomes. |
| Competencies | Kompetensi — Fokus pengembangan yang relevan. | Competencies — A relevant development focus. |
| Program | Program — Pilihan untuk dibahas bersama. | Your program — Options to explore with BinaHub. |

The cards describe a relationship, rather than a specific catalog example or a visitor result. Target, Layers3 and Route outline icons appear within the desktop badges.

Automatic slide changes retain the eight-second interval once the hero is ready. Carousel hover pauses playback; keyboard focus, touch interaction and manual selection stop it until resumed. Visibility observes the full #home-hero element, so scrolling the copy out of view while the hero remains visible does not alone mark the hero offscreen. Leaving the viewport or hiding the page pauses playback. Reduced motion makes the carousel manual and disables the rotation button. Inactive text panels use aria-hidden and inert; manual selection announces the selected slide politely.

The recommendation orbit is two fine ellipses and two nodes inside a dedicated wrapper. Its 64-second linear animation rotates the wrapper through 360 degrees using transform only. It runs only when the carousel reports playback enabled and the recommendation slide is active; ready, hover, focus/manual stop, viewport visibility, page visibility and reduced motion therefore govern it. This new motion does not redefine the existing brand orbit.

**The Synchronized Slide Rule.** Copy, right-hand object and atmosphere derive from one parent slide state; orbit playback additionally follows the carousel's motion state.

### Illustrated glass cards

Three alpha WebP assets ship in public/program-recommendation: hero-needs.webp shows converging paths in ice blue, hero-competencies.webp shows flowing capability layers in seafoam, and hero-program.webp shows linked stages in champagne. Each is 768×768 with genuine transparency and has its adjacent .webp.json exact-prompt and provenance record. The competency sidecar records both its original generation and color-only edit. Proportional resize and WebP conversion preserve alpha.

These are separate sculptures, with no text, card face or background baked into them. Native HTML supplies every label and description. The earlier basic-glass material draft is superseded and does not ship in this scene; the recommendation landing's separate artwork remains governed by its existing record.

**The Native Copy Rule.** Keep the card text native, localized and independent of its transparent illustration; retain all three distinct surface and artwork tones.

### Actions and controls

Recommendation actions have a 44px minimum height, becoming 48px from 768px, with 12px type, weight 600, normal case and no added tracking. Primary remains navy/white; secondary remains light with a fine border. Existing localized ProgramJourneyLink destinations and tracking remain: recommendation landing and catalog for the first slide; diagnostic and perspective for the brand slide.

Shared controls use localized accessible names,aria-controls and aria-pressed. Desktop and mobile both display slide names; mobile uses10px labels and compact spacing. Rotation keeps44px minimum width and localized play/pause name. Links and buttons retain navy focus outlines.

## 29 October mobile refinement and evidence

Only≤767px density changed: display clamp(1.6rem,6.3vw,2.25rem)/1.16,
description13px/1.7 with18px top gap, CTA20px top gap and46px touch height.
Recommendation CTA type11px; brand10px. Card titles15px/1.2 (14px through359px),
body10px/1.45. Cards retain their distinct glass colors and three original images.
At normal phone width, cards are80%wide/34%high at17%/0%,0/32%,18%/64%,
with5deg,-4deg,-4degrotations. Through359px cards are85%wide and shifted12/13%.
All copy remains native; no new image, palette, claim or destination was added.

Quality/public TypeScript,45-route build and full browser regression passed.
Parent and finish reviewer opened `program-hero-mobile.png` and
`program-hero-brand-mobile.png` as primary390×844viewport evidence, plus
`program-hero-full-mobile.png` and `program-hero-fit-320.png` as supplementary
captures under sibling app `.impeccable/review/`. Disposition`ship`, no material
fixes. Tests cover320–1600overflow, bothslides, synchronized controls, orbit,
tracking and reducedmotion. Physicaldevices and Safari remain untested.

The centered Scroll link goes to the existing #platform section. Its visible label stays Scroll; its accessible label is localized. It has a 44px minimum height and a visible navy focus outline. Cards, badge icons and illustrations remain decorative rather than clickable recommendation results.

### Verification record

Prior revision history: the generic three-plane extension and the later version 0.2.38 concrete example passed their then-current public quality, 45-route build and browser regressions. The concrete revision's rectangular light-field edge and mobile header clearance were corrected and reviewed at that time. Those results are historical and do not establish verification of this illustrated revision.

Current revision evidence (website version 0.2.39): this record is reconciled with the implemented component and stylesheet sources. The final public-quality check, TypeScript, 45-route production build and scripts/test-program-website-ui.mjs all passed. Browser checks cover ID/EN, three different loaded sculptures and tones, native copy fit at 320–1600px, centered controls and Scroll, its #platform destination, reduced motion and forced colors, slide synchronization, tracking and existing recommendation-landing regressions. Motion checks verify that the orbit transform advances, pauses on the inactive slide/offscreen and runs while the mobile scene remains visible. Tests use synthetic data with no API writes. The finish reviewer reports no material visual defects in the illustrated composition.

The parent reopened nine local captures: ../app-binahub/.impeccable/review/program-hero-{desktop,mobile}.png, program-hero-full-mobile.png, program-hero-example-{desktop,mobile}.png, program-hero-controls-{desktop,mobile}.png and program-hero-brand-{desktop,mobile}.png. Final responsive corrections were additionally inspected in program-hero-fit-{320,1280}.png. These checks establish local behavior and scoped finish, not deployment, backend recommendation accuracy, forms or delivery.

## Do's and Don'ts

- **Do** keep this extension scoped to the homepage and synchronize it through parent slide and playback state.
- **Do** retain the three equally sized, distinct ice/seafoam/champagne glass cards, native generic copy and semantic transparent sculptures.
- **Do** retain copy and CTA before the scene on phones, the shared footprint, header clearance and bottom-centered controls with Scroll.
- **Do** retain existing destinations, tracking, locale behavior, keyboard controls and accessibility fallbacks.
- **Do** preserve the brand slide's existing copy, logo and orbit.
- **Don't** restore the superseded dark Team Synergy card or concrete catalog example.
- **Don't** bake labels into artwork, add decorative card rules, grid lines, extra backdrop cards or a rectangular atmosphere boundary.
- **Don't** animate card blur, shadows, mesh, masks, static card rotations or raster illustrations.
- **Don't** promote this card composition, tiny decorative descriptions or existing entrance motion into global design rules.
- **Don't** claim the scene represents an actual visitor result.

Not canonized or repaired: existing shared-shell, brand-slide and entrance-motion choices remain outside this bounded extension. The root landing record and its sidecar remain unchanged because this is an ordinary homepage extension. No form, question, scoring, AI, price, delivery or backend recommendation behavior changes.
