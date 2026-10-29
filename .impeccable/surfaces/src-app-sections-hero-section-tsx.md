---
version: 1
slug: "src-app-sections-hero-section-tsx"
primary_target: "src/app/_sections/hero-section.tsx"
related_targets: ["src/components/hero-message-carousel.tsx","src/components/hero-message-carousel.module.css","src/components/program-hero-visual.tsx","src/components/program-hero-visual.module.css","src/components/mobile-hero-deck.tsx","src/components/mobile-hero-deck.module.css"]
---

# Homepage recommendation slide · 28 October 2026

Scope: only the homepage's program-recommendation slide and its synchronized
right-hand visual, its recommendation background and shared slide controls.
User asks to restore the original three light cards, add more convincing glass
and borders using imagegen, and center seamless controls at the hero bottom.
Existing brand copy, logo and orbit remain intact.
Mode: Persuade, scoped to this recommendation hero.

The original contract below governs the retained tablet/desktop composition.
Mobile stacked story is the current contract through 767px and supersedes the
earlier phone layout/control directions. Prior verification remains historical.

## Direction contract

THESIS: Restore the calm Kebutuhan / Kompetensi / Program journey with equal light
glass layers. The user rejected the later concrete Team Synergy/navy-card version.
OWN-WORLD: Retain Jakarta and BinaHub navy/gold; use a cool white/ice ground and
champagne finish matching the recommendation landing and latest supplied hero
reference. Three transparent imagegen sculptures match each card: converging
paths (ice blue), flowing capability layers (seafoam), linked stages (champagne).
Their palettes, card grounds and icon accents must be visibly different.
Labels remain native HTML, never rasterized or part of the generated image.
STORY: Visitor reads the recommendation offer, sees the three-step relationship,
then follows the existing tracked CTA to the recommendation landing or catalog.
FIRST VIEWPORT: Existing text/CTA column opposite three offset illustrated
ice/seafoam/champagne glass cards and original generic journey descriptions. No dark
program card, specific program example, decorative short rules or invented data.
Thin glass rims, frosted faces and subtle overlapping radial mesh color fields
provide depth. Avoid visible background rectangles, grid lines or extra cards.
Controls belong to the hero bottom center, with a discreet frosted active pill
instead of the left-aligned underline. Add a centered Scroll link below controls
that goes to the next existing section. Tablet/desktop retain the two named slide
buttons. Current phone layout and controls follow Mobile stacked story below.
Both compositions retain a stable footprint and header clearance; existing
product copy, imagery and destinations stay unchanged.
FORM: User-pinned, code-led extension of the existing hero; seed: none
(brief-pinned). One parent slide state drives both copy and the visual. Keep
8-second rotation, stop/pause/reduced-motion/offscreen and focus behavior.
MOTION: From 768px, the right-hand orbit rotates over 64 seconds using transform only; pause
with the existing carousel playback state, outside viewport, on hidden page,
on focus/hover/manual interaction, and when its slide is inactive. Reduced
motion uses a static orbit. This separate visual/orbit is disabled on phones;
the mobile deck's transform/opacity motion is specified below.
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Boundaries and verification

No changes to destinations, tracking, catalog content, forms, AI, prices, questions
or delivery. The visual is decorative and localized ID/EN. Blur is static;
tablet/desktop slide changes use opacity and mobile deck positions use transform.
Test both messages, all four mobile cards, synchronized auto/manual
changes, ID/EN, responsive overflow, focus, reduced motion and homepage links.
Check three sculpture assets, distinct tones, readable labels, centered controls,
working Scroll destination, orbit run/pause, minimum touch
targets and forced-color/reduced-transparency fallbacks. Mesh and blur are static.

Structural scout: Codebase Memory list_projects/index_status confirmed this
website is not indexed. Targeted source reads and rg resolve the bounded chain:
HomeHero renders HeroSection, which is the only source caller of
HeroMessageCarousel. No exhaustive graph-impact claim is made.

Latest user direction supersedes the concrete-card proposal from 0.2.38. Restore
the 0.2.37 journey composition without its rejected decorative short lines.
The generated assets are public/program-recommendation/hero-{needs,competencies,
program}.webp, each with its exact prompt and provenance sidecar. The previous
flat material-only experiment is superseded by the latest illustrated reference.
No questions, reports, catalog,
backend behavior, client data, prices or AI recommendation logic change.

## Earlier mobile-home extension · historical

The following density refinement and its `ship` verdict predate the four-card
deck. They do not establish the current phone composition or final deck review.

Explicit user addition: improve responsiveness of both home hero slides. Keep
desktop and product copy unchanged. Through767px, use a compact240px shared
visual footprint (250px through359px), complete three-color card imagery and
visible slide-name controls. Display type/description/action spacing is reduced
to keep offer, visual, controls and Scroll together at390×844. Both slide states
reserve the same footprint. Full website regression passed; parent and reviewer
opened recommendation/brand mobile viewport captures plus fullhero/320px scene
captures, disposition`ship`. No new palette/assets or physical-device claim.
Current material/layout values live in `docs/home-recommendation-hero-design.md`.

## Mobile stacked story · 29 October 2026

THESIS: A phone-first four-card deck replaces the scaled desktop composition.
OWN-WORLD: Existing Jakarta/navy and ice, seafoam, champagne glass; the fourth
BinaHub card uses a pale lavender ground and the existing blue/gold 3D logo.
STORY: Needs → competencies → program share the recommendation message; the
fourth card introduces BinaHub and synchronizes the original brand title/actions.
FIRST VIEWPORT: Square artwork cards above centered offer copy and actions. Rear
cards remain offset and visible. Four compact selectors, pause and Scroll remain
available; tablet and desktop keep the original two-slide composition.
FORM: Precisely user-pinned local adaptation, code-led; seed: none (brief-pinned).
MOTION: One eight-second clock, transform/opacity deck transitions, manual
selection and swipe pause autoplay; keyboard focus, hidden/offscreen and reduced
motion retain the existing safeguards. No continuous layout/filter animation.
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

Implementation: through 767px, square faces use min(66vw, 260px); the deck reserves
card size + 46px height and 24px bottom margin. Three rear faces stay offset and
visible. Static 12px backdrop blur supports the four tonal grounds; positions
transition with transform over 520ms and front-card content with opacity over
180ms. Hide the former separate mobile visual column and disable its orbit.

Controls: four compact 44px selectors with localized accessible names and a
44px play/pause button. First three indices select the shared recommendation
panel; fourth selects the original brand panel. The touch-stop ancestor excludes
the rotation button. Horizontal swipe selects/pauses while pan-y and pinch zoom
remain available. Scroll stays bottom-center and targets the existing #platform.

Evidence: version 0.2.42 passed public quality, TypeScript, the 45-route build
and both full browser passes. The corrected final touch-enabled run verified
Pause for 8.5 seconds and Play resuming to the next card. The reviewer reopened
all six refreshed captures, confirmed the single fix and returned `ship` with
no additional material visual issue in scope. Capture paths and prior evidence
are recorded in `docs/home-recommendation-hero-design.md`. Physical devices and
Safari remain untested. No new image/font/backend/data logic or global system
migration; root DESIGN.md and .impeccable/design.json remain unchanged.

## Desktop liquid field · 29 October 2026

THESIS: A soft liquid field anchors the recommendation artwork instead of
leaving it floating on an empty ground.
OWN-WORLD: Ice blue at the upper left, seafoam across the center and champagne
at the lower right; preserve the three existing illustrated glass cards.
STORY: Keep the offer and CTA dominant; the field supports the needs-to-program
journey without introducing another UI container or changing the card content.
FIRST VIEWPORT: One broad, irregular gradient disc behind the right-hand cards
only from 1024px. Mobile deck and tablet composition remain unchanged.
FORM: User-supplied reference, scoped code-led extension; seed: none (brief-pinned).
MOTION: Three overlapping color pools drift with transform over 22–34 seconds.
Blur/mask/gradient are static; pause follows existing ready/playback/visibility
state and inactive slide. Reduced motion keeps the field still.
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

Finish: scoped liquid-field review `ship`, no material fixes. Parent/reviewer
opened the supplied reference, fresh desktop and unchanged mobile captures.
Final build/public quality and full browser regression passed, including pool
transform progress, static blur, inactive/offscreen pause, reduced motion and
forced colors. Perceived smoothness on physical devices and Safari is untested.

## Larger mobile deck and unboxed brand · 29 October 2026

User requests larger squares: min(76vw,310px), retaining offset glass faces.
Fourth state shows only the existing 3D logo, without card face, native card
label or rear stack. Preserve the shared footprint, original brand offer/CTA,
four-state timer, swipe/select/pause, Scroll and desktop liquid field.
Code-led precise local refinement; no new artwork or product behavior.

## Desktop click-to-shuffle · 29 October 2026

User requests this only after the PETA implementation. Precisely pinned local
interaction, code-led; no concept seed or approved comp. Keep the existing hero
composition, copy, destinations, three illustrations, distinct card tones and
mobile four-state deck. Only the desktop right-hand object gains an action.

MOTION THESIS: A finite fan-and-settle shuffle exchanges the three cards among
their existing slots. Batched FLIP measurements feed transform-only Web Animations
for760ms with30ms per-card offsets and exponential deceleration. No frame loop,
layout-property animation, animated filter or new dependency. Each card keeps
its original color and illustration regardless of slot. Repeated clicks are
ignored during the sequence; cancelled animations release the busy state.

QUALITY BAR: The initial viewport must still match the existing hero. A native
desktop-only button over the artwork supports click/Enter/Space, visible focus,
a discreet localized hint and a polite order announcement. Interaction pauses
the existing autoplay, which can be resumed through its original control.
Reduced motion changes order instantly; inactive slide is inert. Mobile retains
the existing deck with no desktop overlay. Review scope is these changes, not
the earlier copy/layout/world. No raster work or token migration.

Evidence: app repo `scripts/test-hero-shuffle.mjs` captures before/motion/after/
reduced desktop and unchanged mobile under app `.impeccable/review/` with prefix
`hero-shuffle-`. These are production-build loopback browser checks, not physical
device/Safari evidence or a live deployment claim.

### Shipped interaction record · version 0.2.44

From 1024px, the desktop journey has one native button with localized name and
hover/focus hint. Click, Enter and Space select a different permutation of the
existing three slots; native card copy, colors and illustrations stay attached
to their cards. The initial composition is unchanged. Tablet and the mobile
four-state deck retain their existing presentation and controls.

Batched before/after measurements feed three transform-only Web Animations:
760ms each, 30ms per-card offsets, cubic-bezier(0.16, 1, 0.3, 1), and backward
fill. Backward fill holds the prior pose through each delay and resolves the
stagger-flash finding. The busy button prevents queued activations; cancellation
releases that state. Reduced motion swaps order immediately, and preference or
active-slide changes cancel outstanding animations. Native cards remain
aria-hidden; the control has visible focus and a polite localized order status.
Focus/activation stops parent-owned carousel playback; its existing Play control
resumes it. Inactive visual content is inert. No frame loop, filter/layout
animation, raster, token migration or product behavior change is introduced.

Focused production-build Chromium checks, public quality, TypeScript, the
45-route production build and the full browser regression passed. The focused
test asserts backward fill and all three starting bounds within 2px, finite
transform motion, endpoint identity/colors/art, duplicate protection, keyboard,
reduced-motion cancellation and instant order, autoplay pause, inactive scope,
English naming, desktop overflow and the retained mobile deck.

Parent, finish reviewer and documenter opened hero-shuffle-{before,start,motion,
after,reduced}-desktop.png and hero-shuffle-mobile.png in the sibling app's
.impeccable/review/. Start is paused at 0ms and motion at 330ms. The follow-up
finish verdict is `ship` for the single scored stagger-flash fix, without a new
whole-hero review. Physical devices, Safari and perceived live performance remain
unverified. Existing palette/type advisory drift is reported without repair;
PRODUCT.md, root DESIGN.md and .impeccable/design.json stay unchanged. Detailed
material, motion and evidence notes are appended to
docs/home-recommendation-hero-design.md.
