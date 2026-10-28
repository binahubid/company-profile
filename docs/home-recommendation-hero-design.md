---
name: BinaHub homepage — recommendation slide
description: Implemented and locally verified scoped homepage recommendation example.
colors:
  hero-navy: "#0b2c6b"
  hero-detail: "#405675"
  hero-ice: "#e2edfc"
  hero-seafoam: "#edf5f1"
  hero-champagne: "#f6e7c5"
  hero-gold: "#d9a441"
  hero-white: "#fff"
typography:
  recommendation-display:
    fontFamily: "Plus Jakarta Sans, Segoe UI, sans-serif"
    fontSize: "clamp(2.75rem, 4vw, 4rem)"
    fontWeight: 500
    lineHeight: 1.12
    letterSpacing: "-0.035em"
  need-quote:
    fontFamily: "Plus Jakarta Sans, Segoe UI, sans-serif"
    fontSize: "clamp(16px, 1.8vw, 24px)"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "-0.02em"
  program-title:
    fontFamily: "Plus Jakarta Sans, Segoe UI, sans-serif"
    fontSize: "clamp(26px, 3vw, 40px)"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.03em"
  card-label:
    fontFamily: "Plus Jakarta Sans, Segoe UI, sans-serif"
    fontSize: "12px"
    fontWeight: 600
    lineHeight: 1.5
rounded:
  layer: "16px"
  action: "999px"
---

# Design System: Homepage recommendation slide

## Overview

**Creative North Star: "Needs become a development direction"**

This record applies only to the homepage recommendation slide and its synchronized right-hand visual on the Indonesian and English home routes. It follows the explicit approval in [the homepage contract](../design-plans/home-recommendation-hero.md). [Root DESIGN.md](../DESIGN.md) continues to record the separate recommendation landing extension; neither record defines a whole-site migration.

The implemented visual is native HTML/CSS: two light glass cards introduce a coordination need and Communication/Collaboration, then a larger navy Team Synergy card becomes the visual destination. A localized illustrative disclosure qualifies the example. BinaHub's Jakarta type and navy/gold anchors continue. The brand slide retains its existing copy, logo and orbit visual. The homepage adds no raster; the landing continues to use its existing three WebP illustrations and prompt sidecars.

Evidence: src/components/program-hero-visual.tsx and its CSS module, src/components/hero-message-carousel.tsx and its CSS module, and src/app/_sections/hero-section.tsx. PRODUCT.md's mobile and keyboard principles remain applicable.

## Colors

Navy identifies the recommendation headline, need copy and competency tags, then becomes the dominant program card's ground. Slate supports light-card labels and the illustrative disclosure. The program reverses its title to white, uses champagne for its label and pale blue (#e8f0fc) for its supporting copy. Ice and seafoam remain supporting light surfaces; champagne is an accent rather than the program card's ground.

The recommendation backdrop combines radial-gradient(ellipse at 78% 36%,#c9dff570,transparent 50%) with linear-gradient(115deg,#fff 15%,#eef4fc 62%,#f9f0df). The visual's separate static light field combines blue at the upper left (#a8cbed70) and gold at the lower right (#d9a44133). It extends 12% beyond the visual and fades with radial-gradient(ellipse at center,#000 25%,transparent 70%) as its mask, avoiding a visible rectangular edge. No decorative short rules remain on these cards.

**The Surface Scope Rule.** These values belong to the homepage recommendation slide. Do not replace global palette roles or the brand slide's design with them.

## Typography

Plus Jakarta Sans remains the existing family. The desktop recommendation display token above applies from 1024px; below that, the existing hero display uses clamp(1.75rem,7vw,2.5rem), line-height 1.1 and -0.025em tracking. Both recommendation title lines use weight 500 and upright navy type.

The recommendation description uses 14px/1.65 initially and 17px/1.75 from 1024px. The need quote uses the need-quote token with a 24ch maximum; the program name uses program-title. Card labels use card-label, with the program label reduced to weight 500. Competency tags use clamp(11px,1.1vw,14px)/1.5 at weight 500. Program supporting copy uses clamp(11px,1.1vw,14px)/1.65 with a 30ch maximum. The illustrative disclosure uses 11px/1.5.

At 767px and below, card labels and tags become 10px, the need quote 14px/1.4, the program name 25px/1.2, supporting copy 10px/1.5 and the disclosure 9px/1.5. These belong to the decorative example; the accessible offer and actions remain in the carousel content.

## Layout

The outer hero frame and inner content share min-height calc(100svh + 6rem) below 1024px. From 1024px, both use min-height clamp(810px,calc(100svh + 6rem),920px), so both slides share a bounded desktop minimum. This is a minimum-height rule, not a promise that longer content cannot grow. Below 1024px the visual appears above the copy; desktop places copy to the left and the visual to the right in a 1:0.9 grid. The grid caps at 1580px; the visual wrapper retains its existing responsive widths of 280px, 410px and 320px before desktop expands.

Both right-hand visuals share a CSS grid area and continue to reserve layout while inactive. The recommendation visual has aspect-ratio 1 and a 670px maximum width. On mobile its ratio becomes 1/1.15; that larger shared footprint remains reserved when the brand visual is selected. Mobile content uses 10.5rem top padding through 767px to clear the existing fixed header; widths from 768px retain 14.75rem top padding. The clearance applies to both slides.

Desktop card positions are relative to the visual:

| Card | Left / top | Width / height | Static rotation |
| --- | --- | --- | --- |
| Need | 4% / 9% | 78% / 25% | -6deg |
| Competencies | 0 / 33% | 79% / 26% | -2deg |
| Team Synergy | 20% / 55% | 78% / 35% | 3deg |

Card padding is 26px 30px. Through 767px it becomes 14px 17px; needs moves to top 8%, competencies to top 32%, and the program uses left 17%/top 55%, width 82%/height 36%. The disclosure sits at left 22%/bottom 2%, becoming 19%/1% on mobile. Competency tags wrap with an 8px gap and 7px 12px padding; mobile uses a 5px gap and 5px 8px padding.

## Elevation & Depth

Cards use the layer radius without an enclosing border. Needs has shadow 0 16px 35px -22px #0b2c6b52; competencies uses 0 18px 38px -22px #0b2c6b5c. Their opaque fallback gradients run ice to near-white and white to seafoam. Supported browsers apply static backdrop-filter blur(16px) saturate(125%) only to these two light cards, using translucent versions of those gradients.

The dominant program card uses radial-gradient(ellipse at 100% 0,#d9a44124,transparent 64%) over linear-gradient(125deg,#163e7c,#0b2c6b 65%,#10234b). Its shadow is 0 28px 48px -20px #0b2c6b70 with an inset 0 1px 0 #ffffff52 highlight. It has no backdrop filter. Blur, card rotations, light-field mask and radial backgrounds remain static.

Slide content, right-hand visuals and recommendation backdrop transition opacity over 220ms ease-out. Existing hero entrance motion is separate from that slide transition. Reduced motion removes the slide/visual/backdrop transitions and prevents automatic rotation. Reduced transparency removes light-card filters and uses solid ice and seafoam; the navy program remains opaque. Forced colors hides the light field and backdrop; cards use Canvas/CanvasText borders and copy with no shadow or filter, and tags receive Canvas/CanvasText borders and text.

## Shapes

The three cards use softly rounded rectangles. Competency tags and recommendation actions use the pill radius; the brand actions retain their existing shape. Offsets, static rotations and the larger navy program card establish an asymmetric hierarchy for this example rather than a reusable global card style.

## Components

### Synchronized carousel and visual

HeroSection owns activeSlide, passes it to HeroMessageCarousel and selects the matching right-hand visual and backdrop. Recommendation starts selected. The recommendation visual is decorative and aria-hidden. Its localized labels are Kebutuhan / Fokus kompetensi / Program yang relevan or Your needs / Development focus / Relevant program. The brand logo/orbit remains the second visual.

The concrete example reads "Koordinasi lintas tim belum konsisten." / "Cross-team coordination is inconsistent.", then the English catalog competency names Communication and Collaboration, then Team Synergy. Its supporting scope is "Tujuan bersama, kontribusi lintas fungsi, dan komitmen tim." / "Shared goals, cross-functional contributions and clear team commitments." The program reuses the existing illustrative SS-13 catalog example; it adds no program promise or recommendation inference. "Ilustrasi rekomendasi" / "Illustrative recommendation" remains visible below the cards.

Automatic rotation retains the existing eight-second interval once the hero is ready. It pauses while hovered, outside the viewport or on a hidden page; keyboard focus, touch interaction and manual selection stop playback until resumed. Reduced motion makes the carousel manual and disables the rotation button. Inactive text panels use aria-hidden and inert; manual selection announces the selected slide politely. Copy, visual and atmosphere derive from the same parent state.

**The Synchronized Slide Rule.** A slide change changes offer copy, right-hand object and atmosphere together. Preserve the shared state and stable footprint.

### Actions and controls

Recommendation actions have a 44px minimum height, becoming 48px from 768px, with 12px type, weight 600, normal case and no added tracking. Primary stays navy/white; secondary stays light with a fine border. Existing localized ProgramJourneyLink destinations and tracking remain: recommendation landing and catalog for the first slide; diagnostic and perspective for the brand slide.

Controls retain 44px targets, selected underline and navy focus outlines. Do not turn the decorative cards or competency tags into controls or inferred recommendation results.

Prior revision history: the earlier generic three-plane extension passed public quality, the 45-route production build and the full browser suite, including synchronization, playback behavior, ID/EN, responsive overflow and existing links without API writes. Its finish review found no issues across ten captures, including ../app-binahub/.impeccable/review/program-hero-{desktop,mobile}.png and program-hero-brand-{desktop,mobile}.png. Those results predate this concrete-card revision and do not establish its finish.

Current revision evidence (website version 0.2.38): the scoped record above was reconciled with the current component and stylesheet sources. Finish review requested removal of the light field's rectangular boundary and clearance for the fixed mobile header. The radial mask and shared mobile top padding described above are implemented; the reviewer confirmed both defects resolved without a regression after final corrections.

The corrected revision passed npm run quality:public, npm run build (45 routes) and node scripts/test-program-website-ui.mjs. The full existing homepage-carousel and recommendation-landing regression covered both hero visuals, manual/automatic changes, pause/hover/focus/offscreen behavior, reduced motion, ID/EN, widths from 320–1600px, program-card fit, the shared bounded desktop minimum, mobile need-card clearance of at least 8px below the navigation, forced-color fallback and tracked CTAs without API writes. The parent reopened all six final local hero captures: ../app-binahub/.impeccable/review/program-hero-{desktop,mobile}.png, program-hero-example-{desktop,mobile}.png and program-hero-brand-{desktop,mobile}.png. These results establish local implementation and behavior; they do not validate deployment, backend inference, forms or delivery.

## Do's and Don'ts

- **Do** keep this extension scoped to the homepage recommendation slide and synchronize it through the parent slide state.
- **Do** retain existing destinations, tracking, locale behavior, playback controls and accessibility fallbacks.
- **Do** preserve the brand slide's existing copy, logo and orbit.
- **Do** keep the coordination need and competency tags subordinate to the larger navy Team Synergy card, with its illustrative disclosure visible.
- **Do** retain the shared desktop minimum and mobile header clearance on both slides.
- **Don't** add decorative short rules to these cards or animate their blur, light field or static rotations.
- **Don't** generate a new raster for these native cards or reuse the landing's direct-image blur as a card treatment.
- **Don't** promote this card composition, tiny decorative labels or entrance motion into global design rules.
- **Don't** claim the scene represents an actual visitor result.

Not canonized or repaired: existing shared-shell, brand-slide and entrance-motion choices are outside this bounded extension; mobile clearance is a scoped hero correction. The root landing record and its sidecar remain unchanged because this is an ordinary homepage extension, not a global system update. No form, question, scoring, AI, price or delivery behavior is changed.
