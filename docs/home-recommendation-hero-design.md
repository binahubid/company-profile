---
name: BinaHub homepage — recommendation slide
description: Implemented, locally verified extension of the homepage recommendation slide.
colors:
  hero-navy: "#0b2c6b"
  hero-detail: "#405675"
  hero-ice: "#e2edfc"
  hero-seafoam: "#e6f2ef"
  hero-champagne: "#f6e7c5"
typography:
  recommendation-display:
    fontFamily: "Plus Jakarta Sans, Segoe UI, sans-serif"
    fontSize: "clamp(2.75rem, 4vw, 4rem)"
    fontWeight: 500
    lineHeight: 1.12
    letterSpacing: "-0.035em"
  layer-title:
    fontFamily: "Plus Jakarta Sans, Segoe UI, sans-serif"
    fontSize: "clamp(18px, 2.3vw, 30px)"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "-0.025em"
rounded:
  layer: "16px"
  action: "999px"
---

# Design System: Homepage recommendation slide

## Overview

**Creative North Star: "Needs become a development direction"**

This record applies only to the homepage recommendation slide and its synchronized right-hand visual on the Indonesian and English home routes. It follows the explicit approval in [the homepage contract](../design-plans/home-recommendation-hero.md). [Root DESIGN.md](../DESIGN.md) continues to record the separate recommendation landing extension; neither record defines a whole-site migration.

The implemented visual is native HTML/CSS: three offset glass planes connect needs, competencies and programs. BinaHub's Jakarta type and navy/gold anchors continue. The brand slide retains its existing copy, logo and orbit visual. The homepage adds no raster; the landing continues to use its existing three WebP illustrations and prompt sidecars.

Evidence: src/components/program-hero-visual.tsx and its CSS module, src/components/hero-message-carousel.tsx and its CSS module, and src/app/_sections/hero-section.tsx. PRODUCT.md's mobile and keyboard principles remain applicable.

## Colors

Navy identifies the recommendation headline and plane titles; the darker slate detail role supports plane descriptions. Ice, seafoam and champagne distinguish the three steps without implying a separate brand identity.

The recommendation backdrop is linear-gradient(115deg,#fff 15%,#f1f6fe 62%,#faf3e4). Two static radial fields add blue at the upper left and champagne at the lower right of the square visual. The final plane's short rule uses gold; earlier plane rules use translucent blue.

**The Surface Scope Rule.** These values belong to the homepage recommendation slide. Do not replace global palette roles or the brand slide's design with them.

## Typography

Plus Jakarta Sans remains the existing family. The desktop recommendation display token above applies from 1024px; below that, the existing hero display uses clamp(1.75rem,7vw,2.5rem), line-height 1.1 and -0.025em tracking. Both recommendation title lines use weight 500 and upright navy type.

The recommendation description uses 14px/1.65 initially and 17px/1.75 from 1024px. Plane descriptions use clamp(11px,1.1vw,14px)/1.65 with a 28ch maximum. At 767px and below, plane titles are 18px and descriptions are 10px/1.5. These are decorative scene labels; the accessible offer and actions remain in the carousel content.

## Layout

The existing hero grid reserves min-height calc(100svh + 6rem). Below 1024px the visual appears above the copy; desktop places copy to the left and the visual to the right in a 1:0.9 grid. The grid caps at 1580px; the visual wrapper retains its existing responsive widths of 280px, 410px and 320px before desktop expands.

Both right-hand visuals share a CSS grid area, retaining the visual's square footprint during slide changes. The recommendation journey has aspect-ratio 1 and a 670px maximum width. Each plane occupies 77% width and 28% height. Needs begins at left 1%/top 9% with -8deg rotation; competencies uses 10%/35% and -2deg; program uses 20%/61% and 5deg. Padding is 26px 32px, reducing to 14px 18px on mobile.

## Elevation & Depth

Planes use the layer radius, a translucent white border and shadow 0 22px 48px -22px #0b2c6b38. Their opaque fallback gradients run ice to near-white, near-white to seafoam and warm white to champagne. Supported browsers apply static backdrop-filter blur(16px) saturate(125%) with translucent versions of those gradients. Blur, plane rotations and radial backgrounds do not animate.

Slide content, right-hand visuals and recommendation backdrop transition opacity over 220ms ease-out. Existing hero entrance motion is separate from that slide transition. Reduced motion removes the slide/visual/backdrop transitions and prevents automatic rotation. Reduced transparency removes plane filters and uses solid ice, seafoam and champagne. Forced colors hides the radial fields, short rules and backdrop; planes use Canvas/CanvasText borders and copy with no shadow or filter.

## Shapes

The three planes use softly rounded rectangles. Recommendation actions use the pill radius; the brand actions retain their existing shape. The visual's offsets and static rotations explain a relationship between the steps rather than defining a reusable global card style.

## Components

### Synchronized carousel and visual

HeroSection owns activeSlide, passes it to HeroMessageCarousel and selects the matching right-hand visual and backdrop. Recommendation starts selected. The recommendation visual is decorative and aria-hidden; its localized labels are Kebutuhan / Kompetensi / Program or Your needs / Competencies / Your program. The brand logo/orbit remains the second visual.

Automatic rotation retains the existing eight-second interval once the hero is ready. It pauses while hovered, outside the viewport or on a hidden page; keyboard focus, touch interaction and manual selection stop playback until resumed. Reduced motion makes the carousel manual and disables the rotation button. Inactive text panels use aria-hidden and inert; manual selection announces the selected slide politely. Copy, visual and atmosphere derive from the same parent state.

**The Synchronized Slide Rule.** A slide change changes offer copy, right-hand object and atmosphere together. Preserve the shared state and stable footprint.

### Actions and controls

Recommendation actions have a 44px minimum height, becoming 48px from 768px, with 12px type, weight 600, normal case and no added tracking. Primary stays navy/white; secondary stays light with a fine border. Existing localized ProgramJourneyLink destinations and tracking remain: recommendation landing and catalog for the first slide; diagnostic and perspective for the brand slide.

Controls retain 44px targets, selected underline and navy focus outlines. Do not turn the three decorative planes into controls or inferred recommendation results.

Local verification passed public quality, the 45-route production build and the full browser suite: automatic/manual synchronization, pause/hover/focus/offscreen behavior, reduced motion, ID/EN, responsive overflow, existing links and the landing's corrected artwork treatment, without API writes. Finish review found no issues across ten valid captures. Homepage evidence is ../app-binahub/.impeccable/review/program-hero-{desktop,mobile}.png and program-hero-brand-{desktop,mobile}.png; the other six are the landing's three scene desktop/mobile pairs. These checks establish local behavior and finish, not deployment or backend inference.

## Do's and Don'ts

- **Do** keep this extension scoped to the homepage recommendation slide and synchronize it through the parent slide state.
- **Do** retain existing destinations, tracking, locale behavior, playback controls and accessibility fallbacks.
- **Do** preserve the brand slide's existing copy, logo and orbit.
- **Don't** generate a new raster for these native planes or reuse the landing's direct-image blur as a plane treatment.
- **Don't** promote this three-plane composition, tiny decorative labels or entrance motion into global design rules.
- **Don't** claim the scene represents an actual visitor result.

Not canonized or repaired: existing shared-shell, brand-slide and entrance-motion choices are outside this bounded extension. No form, question, scoring, AI, price or delivery behavior is changed.
