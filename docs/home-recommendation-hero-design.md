---
name: BinaHub homepage — recommendation journey and mobile deck
description: Scoped homepage glass journey, with a four-card mobile story above the existing offer.
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

# Design System: Homepage recommendation journey and mobile deck

Latest local refinement,0.2.43: mobile square size is min(76vw,310px), replacing
the earlier66vw/260pxvalue below. Statefour is now only the existing3Dlogo:
transparent face, no rim/shadow/blur, no card label and no rear stack. It retains
the shared deck footprint, brand offer and destinations. Firstthree retain their
colored offset glass stack; desktop/tablet and liquid field remain unchanged.

## Overview

**Creative North Star: "Needs become a development direction"**

This record applies only to the homepage recommendation journey, the authorized four-card mobile extension, their synchronized offer/backdrop, and the shared hero controls on the Indonesian and English home routes. It follows [the user-pinned homepage contract](../design-plans/home-recommendation-hero.md) and [its persisted surface brief](../.impeccable/surfaces/src-app-sections-hero-section-tsx.md). [Root DESIGN.md](../DESIGN.md) continues to record the separate recommendation landing extension; this homepage extension does not update that record or its sidecar.

From 768px, the composition retains the generic Kebutuhan / Kompetensi / Program journey: three equally sized light glass rectangles, each pairing native text with a transparent abstract sculpture. Ice blue, seafoam and champagne distinguish the grounds and illustrations. The supplied BinaHub Program Development Hero reference informs the thin rims and soft atmosphere. The original two-slide composition, brand copy, logo and orbit remain on tablet and desktop. The concrete coordination/Team Synergy example from version 0.2.38 is superseded.

Through 767px, four square cards form a deck above the centered offer. Needs, competencies and program share the existing recommendation text/actions; the fourth pale-lavender card reuses the existing 3D logo and selects the existing About BinaHub text/actions. Three offset rear cards remain visible. This mobile contract supersedes the earlier copy-first, compact three-rectangle scene and two named mobile buttons; their verification records below are historical. No new image, font, product claim or backend/data behavior is introduced.

Evidence: src/components/program-hero-visual.tsx and its CSS module, src/components/mobile-hero-deck.tsx and its CSS module, src/components/hero-message-carousel.tsx and its CSS module, and src/app/_sections/hero-section.tsx. PRODUCT.md's mobile browsing and keyboard access principles constrain this surface.

**Key Characteristics:**

- Three distinct light glass tones on tablet/desktop; a fourth pale-lavender brand card in the mobile deck.
- Native localized labels and descriptions; an accessible offer and tracked actions.
- One parent state and eight-second clock, a stable deck footprint, and bottom-centered controls.

## Colors

### Primary

Navy identifies the recommendation headline, card titles and primary action. Slate carries card descriptions and the Scroll cue. White forms the glass rims, highlights and primary-action text.

### Secondary

The three frontmatter surface colors are the tablet/desktop reduced-transparency fallbacks. At default transparency, each rectangular card uses its own light gradient: needs runs from near-white ice (#f8fbfff0) to blue (#dceaffc9); competencies from mint white (#f5fffbf0) to seafoam (#ccebdedb); program from warm ivory (#fffdf2f0) to champagne (#fae2a3c9). Badge grounds follow the same sequence, with blue, green and bronze icon ink. No card uses a dark program ground.

Mobile keeps those three color families and adds a local pale-lavender brand treatment. Its gradients are ice (#f8fbfff0 → #d4e5fbd9), seafoam (#f3fff9f0 → #bfe4d5e6), champagne (#fffdf4f0 → #f6dda1e6) and lavender (#faf8fff0 → #d6d9f6e6). Reduced transparency uses #e5efff, #d8eee3, #fff0c8 and #e6e7f8 respectively. These are homepage card materials, not a global palette migration.

### Neutral

The recommendation backdrop is white with overlapping static radial fields: pale blue at 12%/72% and 78%/24%, champagne at 87%/82%, and seafoam at 54%/58%. A low-opacity diagonal white sheen overlays those fields. There are no grid lines or extra backdrop cards.

The tablet/desktop visual's separate static atmosphere combines blue at the upper left (#a8cbed70) and gold at the lower right (#d9a44133). It extends 12% beyond the scene and fades through a radial mask, avoiding a rectangular edge. Fine pale-blue ellipses and two small nodes form its orbit. That separate visual column is hidden on phones.

**The Surface Scope Rule.** Keep these values scoped to the homepage hero; root palette roles and the tablet/desktop brand slide remain governed by their existing implementation.

## Typography

Plus Jakarta Sans remains the existing family. The recommendation-display token applies from 1024px; at 768–1023px, the existing hero display uses clamp(1.75rem, 7vw, 2.5rem), line-height 1.1 and -0.025em tracking. Both recommendation title lines use weight 500 and upright navy type. The description uses 14px/1.65 at 768–1023px and 17px/1.75 from 1024px; mobile values follow below.

Tablet/desktop card titles share card-title and descriptions share card-body. Through 1399px, descriptions become 10px/1.5; through 1023px titles become 20px. The mobile deck instead uses 21px/1.25 titles at weight 600 and 12px/1.55 descriptions. These labels belong to the decorative scene; the accessible offer and actions remain in the carousel content.

Desktop slide controls use 12px/1.5, with weight 600 for the selected slide. Phones use four compact indicators with visually hidden localized names. The mobile offer uses clamp(1.6rem, 6.3vw, 2.25rem)/1.16; its description uses 13px/1.7 with an 18px top gap. Actions have a 20px top gap and 11px labels. The Scroll cue uses 11px with a localized accessible destination label.

## Layout

Through 767px, the outer frame and inner content use min-height 100svh with intrinsic content growth. Mobile content has 180px top, 20px horizontal and 132px bottom padding (16px horizontal through 359px); the outer composition gap is zero. From 768–1023px the earlier min-height calc(100svh + 6rem) remains. From 1024px both use min-height clamp(880px, calc(100svh + 6rem), 1010px). Desktop content reserves 180px below the composition for controls and Scroll.

At 768–1023px, copy and CTA precede the original scene. Desktop places copy left and scene right in a 1:0.9 grid capped at 1580px; copy caps at 780px. From 768px the existing 380px scene width and 14.75rem top padding remain. Mobile hides this separate visual column and renders the deck inside the carousel, before its text panels.

Mobile cards use min(66vw, 260px) square faces. The deck reserves that size plus 46px height and a 24px bottom margin in every state. The front card rotates -2deg; the three rear positions use (12px, 14px, 4deg, .97 scale), (-12px, 29px, -5deg, .94 scale) and (2px, 43px, 2deg, .91 scale). Copy has 22px inset; only the front card's native copy and artwork are visible. Rear card faces preserve the layered silhouette.

From 768px, both right-hand visuals share a grid area and reserve layout while inactive. The recommendation scene has a 670px maximum width and aspect-ratio 1/1.08, becoming 1/1.16 through 1023px. Its three cards have equal width and height; positions are relative to that scene:

| Card | Left / top | Width / height | Static rotation |
| --- | --- | --- | --- |
| Needs | 18% / 4% | 80% / 32% | 8deg |
| Competencies | 0 / 35% | 80% / 32% | -5deg |
| Program | 20% / 66% | 80% / 32% | -7deg |

Tablet/desktop card padding is 22px 24px, becoming 14px 16px through 1399px. The text column caps at 57% of the card. Artwork occupies the right side at 59% width and 114% height, offset right -8% and bottom -9%; a left-edge mask lets it merge into the glass without covering the native text. Earlier mobile rectangle declarations remain in the stylesheet but no longer render because their column is hidden.

Controls remain horizontally centered at bottom 84px, with Scroll at bottom 22px. Phones have four 44px selectors and a separate 44px play/pause control; selectors show short bars, with a longer navy bar for the active card and localized accessible names. Tablet/desktop retain the two visible slide-name buttons. The mobile deck precedes the offer and actions; attribution and the existing manual/reduced-motion safeguards remain.

## Elevation & Depth

The three tablet/desktop cards use the same thin white rim (1px solid #ffffffe6), rounded corners, inset white top highlight and diffuse shadow (0 22px 48px -22px #0b2c6b38, inset 0 1px 0 #fff). Supported browsers add static backdrop-filter blur(18px) saturate(120%). Their surfaces, blur, shadows, masks and static rotations do not animate.

Mobile cards keep the white rim and 16px corners, with a scoped shadow (0 18px 34px -24px #0b2c6b66, inset 0 1px 0 #fff) and static 12px backdrop blur. Card positions transition with transform over 520ms using cubic-bezier(.16, 1, .3, 1); front-card copy and artwork transition opacity over 180ms ease-out. Blur, shadows and gradient positions stay static.

The shared controls use a faint white pill, white rim and static 10px backdrop blur. The selected slide receives a brighter translucent white pill; hover adds a restrained white fill. The atmosphere, material layers and illustration highlights provide depth without introducing a surrounding panel.

Slide text panels, tablet/desktop right-hand visuals and the recommendation backdrop transition opacity over 220ms ease-out. Existing hero entrance motion is separate and remains outside this extension. The tablet/desktop recommendation orbit rotates with transform only; the mobile deck replaces that scene and runs no orbit.

Reduced motion removes deck, slide/visual/backdrop transitions, automatic changes and the recommendation orbit animation. Reduced transparency removes card and control backdrop filters and uses their solid fallbacks; the control ground becomes #f4f7fc. Forced colors hides decorative artwork, atmosphere, recommendation backdrop, orbit and badges; cards use Canvas/CanvasText with no filter or shadow, and controls retain a CanvasText border and selected Highlight outline.

## Shapes

Equal softly rounded rectangles establish the three-step tablet/desktop journey. The cards share the layer radius; their offset positions and static rotations establish that composition. Desktop badges are 34px squares with softly rounded 10px corners, reducing to 25px and 8px corners through 1399px. Mobile uses four square, 16px-radius cards without badges.

Recommendation actions and controls use pill corners. Mobile brand actions also use pill corners and normal-case labels; mobile secondary actions are unboxed text links. The four mobile selector names are visually hidden behind compact bars. Tablet/desktop controls are unchanged.

## Components

### Synchronized carousel and visual

HeroSection owns activeSlide and passes it to HeroMessageCarousel. From 768px, two indices select the existing recommendation and brand text/visuals. Through 767px, four indices select the deck's front card; indices 0–2 share recommendation text/actions and backdrop, while index 3 selects the existing brand text/actions and backdrop. Needs starts selected. Both the mobile deck and the recommendation scene are decorative and aria-hidden, with empty image alternatives. The separate brand logo/orbit remains the second tablet/desktop visual.

The native card copy remains generic and localized:

| Card | Indonesian | English |
| --- | --- | --- |
| Needs | Kebutuhan — Tantangan dan tujuan tim Anda. | Your needs — Team challenges and intended outcomes. |
| Competencies | Kompetensi — Fokus pengembangan yang relevan. | Competencies — A relevant development focus. |
| Program | Program — Pilihan untuk dibahas bersama. | Your program — Options to explore with BinaHub. |
| Mobile brand | Tentang BinaHub — People. Learning. Elevated. | About BinaHub — People. Learning. Elevated. |

The cards describe a relationship, rather than a specific catalog example or a visitor result. Target, Layers3 and Route outline icons appear within the desktop badges.

One eight-second clock advances the two tablet/desktop slides or four mobile cards once the hero is ready. Carousel mouse hover pauses playback; keyboard focus, non-rotation touch interaction and manual selection stop it until resumed. A horizontal mobile swipe selects the adjacent card and stops autoplay; touch-action preserves vertical pan and pinch zoom. The rotation button is excluded from its ancestor's touch-stop handler so touch play/pause toggles correctly. Visibility observes the full #home-hero element; leaving the viewport or hiding the page pauses playback. Reduced motion makes the carousel manual and disables the rotation button. Inactive text panels use aria-hidden and inert; manual selection announces the selected card/slide politely.

From 768px, the recommendation orbit is two fine ellipses and two nodes inside a dedicated wrapper. Its 64-second linear animation rotates the wrapper through 360 degrees using transform only. It runs only when carousel playback is enabled and the recommendation slide is active; ready, hover, focus/manual stop, viewport visibility, page visibility and reduced motion govern it. It is explicitly disabled on mobile. This motion does not redefine the existing tablet/desktop brand orbit.

**The Synchronized Slide Rule.** The mobile front card, shared offer and backdrop derive from one parent index and clock. Tablet/desktop copy, right-hand object and atmosphere retain their two-slide mapping; recommendation orbit playback additionally follows the carousel's motion state.

### Illustrated glass cards

Three alpha WebP assets ship in public/program-recommendation: hero-needs.webp shows converging paths in ice blue, hero-competencies.webp shows flowing capability layers in seafoam, and hero-program.webp shows linked stages in champagne. Each is 768×768 with genuine transparency and has its adjacent .webp.json exact-prompt and provenance record. The competency sidecar records both its original generation and color-only edit. Proportional resize and WebP conversion preserve alpha.

These are separate sculptures, with no text, card face or background baked into them. Native HTML supplies every label and description. The earlier basic-glass material draft is superseded and does not ship in this scene; the recommendation landing's separate artwork remains governed by its existing record.

Mobile reuses these three sculptures and /3D-logo-2.webp for its fourth card. No new raster asset or generation is part of the stacked-deck extension; existing provenance records remain with the three sculptures.

**The Native Copy Rule.** Keep the card text native, localized and independent of its transparent illustration; retain all three distinct surface and artwork tones.

### Actions and controls

Recommendation actions retain 12px type, weight 600 and normal case, with 48px minimum height from 768px. Mobile actions use 46px minimum height and 11px normal-case labels for both messages; secondary actions become unboxed text links. Primary remains navy/white. Existing localized ProgramJourneyLink destinations and tracking remain: recommendation landing and catalog for the first three mobile cards/first desktop slide; diagnostic and perspective for the brand card/slide.

Shared controls use localized accessible names, aria-controls and aria-pressed. Tablet/desktop display two slide names. Mobile displays four compact indicators with hidden localized names, each at least 44px square; its first three selectors control the shared recommendation panel and the fourth controls the brand panel. Rotation keeps a 44px minimum width and localized play/pause name. Links and buttons retain navy focus outlines.

The centered Scroll link goes to the existing #platform section. Its visible label stays Scroll; its accessible label is localized. It has a 44px minimum height and a visible navy focus outline. Cards and artwork remain decorative rather than clickable recommendation results.

### Historical mobile density refinement · 29 October 2026

The following record predates the four-card deck and is superseded for current mobile layout and controls. Its test and finish results apply only to that earlier revision.

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

### Historical verification records

Prior revision history: the generic three-plane extension and the later version 0.2.38 concrete example passed their then-current public quality, 45-route build and browser regressions. The concrete revision's rectangular light-field edge and mobile header clearance were corrected and reviewed at that time. Those results are historical and do not establish verification of this illustrated revision.

Historical illustrated revision evidence (website version 0.2.39): the then-current public-quality check, TypeScript, 45-route production build and scripts/test-program-website-ui.mjs all passed. Browser checks covered ID/EN, three loaded sculptures and tones, native copy fit at 320–1600px, centered controls and Scroll, its #platform destination, reduced motion and forced colors, slide synchronization, tracking and recommendation-landing regressions. Motion checks then verified that the orbit advanced, paused on the inactive slide/offscreen and ran while the earlier mobile scene remained visible. Tests used synthetic data with no API writes. The finish reviewer reported no material visual defects in that illustrated composition; this is not verification of the current mobile deck.

The parent reopened nine local captures: ../app-binahub/.impeccable/review/program-hero-{desktop,mobile}.png, program-hero-full-mobile.png, program-hero-example-{desktop,mobile}.png, program-hero-controls-{desktop,mobile}.png and program-hero-brand-{desktop,mobile}.png. Final responsive corrections were additionally inspected in program-hero-fit-{320,1280}.png. These checks establish local behavior and scoped finish, not deployment, backend recommendation accuracy, forms or delivery.

### Mobile stacked-story verification · version 0.2.42

Website version 0.2.42 passed public quality, TypeScript and the 45-route production build. Both full browser passes passed. After finish review identified the touch Pause ancestor-handler issue, the corrected final run used a touch-enabled mobile browser: Pause.tap held the active card for 8.5 seconds and Play.tap resumed to the next card. Mobile gestures and rotation safeguards passed. The reviewer confirmed the single touch-pause fix was resolved and returned disposition `ship`, with no additional material visual issue in the scoped topology, typography, material or retained desktop composition.

The parent and reviewer opened all six refreshed local captures: ../app-binahub/.impeccable/review/home-mobile-deck-{0,1,2,3}.png, home-mobile-deck-320.png and program-hero-desktop.png. Mechanical type/color advisories are homepage-scoped and do not authorize a global palette or typography change. Physical devices and Safari remain untested. No deployment, backend, live data or delivery result is established.

### Desktop liquid supplement · 29 October 2026

The user added a localized moving gradient behind the first desktop slide's
right-hand object. From 1024px, a broad irregular disc uses a pale ice/seafoam/
champagne base and three overlapping radial color pools; no new bitmap, package,
font or global palette is introduced. The existing three cards, native labels,
illustrations, CTA, orbit and desktop layout remain unchanged. At 768–1023px
this field is hidden; phones keep the separate four-card deck.

The disc sits at 3% top, -2% right, 0 bottom and 2% left of the journey scene.
Its local color pools use blue #a9cdf4b3/#c3ddf780, mint #a9d9ca91/#cce8dd66
and warm gold #f2cf7aa8/#f8e2ad80. Static 26px blur and a radial mask soften
the field; only transform changes. Three 22s/29s/34s alternating ease-in-out
animations translate, rotate and scale the pools. Their gradient definitions,
blur, outer shape and mask are never animated. Temporary layer promotion runs
only with existing carousel motion state. Inactive slide, pause, hover/focus,
hidden page and offscreen state stop playback; reduced motion removes all three
animations. Forced colors hides the decorative field.

This is a homepage-only material extension. It supersedes the earlier static-only
atmosphere description for desktop without changing the root landing DESIGN.md
or its sidecar. No backend, user data, recommendation logic or deployment is
established by this work. Public quality, TypeScript, the 45-route build and final
full browser regression passed. The three pools are static with reduced motion;
the running transform changes while blur stays at 26px, and inactive/offscreen
states pause playback. Forced colors hides the field. The fresh desktop capture
and unchanged mobile deck capture were opened alongside the user's reference.
The scoped liquid-field finish review returned `ship`, with no material fixes.
Still captures establish composition, not perceived smoothness; physical-device
and Safari performance remain untested. The final documentation reconciliation
was completed directly after the documenter produced its scoped mobile patch.

## Do's and Don'ts

- **Do** keep this extension scoped to the homepage and synchronize it through parent slide and playback state.
- **Do** retain the three distinct ice/seafoam/champagne rectangles from 768px and the four square mobile cards with the pale-lavender brand finish, native generic copy and existing imagery.
- **Do** put the mobile deck above the offer, preserve its shared footprint and header clearance, and retain four 44px selectors, play/pause and bottom-centered Scroll.
- **Do** retain existing destinations, tracking, locale behavior, keyboard controls and accessibility fallbacks.
- **Do** preserve the brand copy/actions and existing logo; retain the original brand orbit only in the tablet/desktop composition.
- **Don't** restore the superseded dark Team Synergy card or concrete catalog example.
- **Don't** bake labels into artwork, add decorative card rules, grid lines, extra backdrop cards or a rectangular atmosphere boundary.
- **Don't** animate blur, shadows, mesh or masks; keep mobile position changes on transform and front-card content changes on opacity.
- **Don't** promote this card composition, tiny decorative descriptions or existing entrance motion into global design rules.
- **Don't** claim the scene represents an actual visitor result.

Not canonized or repaired: existing shared-shell, tablet/desktop brand-slide and entrance-motion choices remain outside this bounded extension. The root landing record and its sidecar remain unchanged because this is a homepage-scoped extension. No form, question, scoring, AI, price, delivery or backend recommendation behavior changes.
