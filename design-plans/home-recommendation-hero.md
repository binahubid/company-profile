# Homepage recommendation slide · 28 October 2026

Scope: only the homepage's program-recommendation slide and its synchronized
right-hand visual, its recommendation background and shared slide controls.
User asks to restore the original three light cards, add more convincing glass
and borders using imagegen, and center seamless controls at the hero bottom.
Existing brand copy, logo and orbit remain intact.
Mode: Persuade, scoped to this recommendation hero.

The original contract below governs the retained tablet/desktop composition.
The final Mobile stacked story section supersedes earlier phone layout and
control directions; earlier verification remains historical evidence.

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

The following 29 October density refinement predates the stacked deck. Its
compact rectangle scene, visible mobile slide names and `ship` result are
historical, not the current mobile contract.

29 October: authorized mobile-home extension applies only through767px. Both
slides now use the compact shared scene, tighter offer/action rhythm and visible
slide-name controls. Existing tracking, autoplay/pause, reduced motion, colors
and illustrations remain. Current implementation and successful bounded browser
verification are recorded in `docs/home-recommendation-hero-design.md`; disposition
`ship`. Desktop is unchanged. Physical devices/Safari were not tested.

## Mobile stacked story · 29 October 2026

Through 767px, four square cards appear above the centered offer/actions. Reuse
the existing ice, seafoam and champagne semantic sculptures; finish with a local
pale-lavender BinaHub card and the existing /3D-logo-2.webp. The first three cards
share recommendation text/actions; the fourth selects the original About
BinaHub text/actions. No new image, font, claim, backend or data logic is added.
Tablet/desktop retain the original two-slide composition.

Use min(66vw, 260px) card faces, a deck height of card size + 46px and 24px bottom
margin. Keep three offset rear faces visible. Card transforms transition over
520ms; front-card copy/artwork opacity transitions over 180ms. The 12px backdrop
blur stays static. Hide the former separate mobile visual column and orbit.

One eight-second clock drives card and message state. Manual selection and a
horizontal swipe pause autoplay; retain focus, hidden-page, offscreen and
reduced-motion safeguards, plus vertical pan/pinch zoom. The touch-stop ancestor
excludes the rotation button so touch Pause/Play toggles correctly. Provide four
44px selectors with localized accessible names, a 44px play/pause control and
the existing bottom-centered Scroll link to #platform.

Version 0.2.42 passed public quality, TypeScript, the 45-route build and both full
browser passes. The touch Pause issue found in finish review was corrected;
the final touch-enabled run held Pause for 8.5 seconds and resumed on Play.
The reviewer reopened all six refreshed captures, confirmed the fix and returned
`ship`, with no additional material visual issue in scope. Current values,
capture paths and historical evidence live in `docs/home-recommendation-hero-design.md`.
Physical devices/Safari remain untested. Root DESIGN.md and its sidecar retain
their recommendation-landing scope; homepage detector advisories do not imply
a global color/type migration.

## Desktop liquid supplement · 29 October 2026

User reference adds one broad ice/mint/champagne liquid field behind the first
desktop slide's three existing cards, only from 1024px. Three overlapping radial
pools move with transform over 22, 29 and 34 seconds. Blur (26px), gradients,
outer shape and mask remain static; no library, raster or global design token
is added. Motion follows the existing carousel playback/visibility/active-slide
state. Reduced motion removes animations; forced colors hides the field.
Tablet and mobile composition, original messages, tracking and CTA destinations
remain untouched. Current material values live in the scoped hero design record.
