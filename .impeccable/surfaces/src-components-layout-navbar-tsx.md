# Navigation and home mobile header · 30 October 2026

Mode: Operate. Related: layout/footer.tsx, i18n/layout-copy.tsx,
program-hero-visual.module.css and the existing homepage hero.

## Direction contract

THESIS: Make the real service entry points findable without replacing any of the
four existing Services links or the main recommendation CTA.
OWN-WORLD: Keep the existing desktop dropdown, mobile disclosure menu, footer,
navy type and glass header. No global design-system change.
STORY: Visitors choose recommendations, team diagnosis, individual Self
Diagnostic or PETA. PETA is explicitly invitation-only, not a public test.
FIRST VIEWPORT: On mobile home only, slightly reduce the logo, retain a 44px
hamburger target with lighter chrome, and align the header with hero side
spacing. Make the centered Scroll cue visually smaller while retaining its
44px target. Leave the fixed chat trigger and all hero content unchanged.
FORM: Precisely approved local extension, code-led; no concept seed or comp.
New Services links precede the original four in both desktop and mobile. Footer
repeats them. Existing app /peta receives a public explanatory link only; no
invitation, authentication, report access or new marketing landing is changed.
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Implemented local refinement · 30 October 2026

Both Services menus and the footer list the four additions first: program
recommendations, team/organization diagnosis, individual Self Diagnostic and
PETA. The four original ecosystem links follow in their existing order. PETA
links only to the existing app `/peta`, with visible invitation-only wording;
the English team diagnosis link uses app `/en/insight`.

At widths through 767px, home alone uses a 144px × 40px logo, a lighter 44px
square menu toggle and 20px side spacing (16px below 360px). The Scroll cue keeps
its centered position and 44px minimum height, using 10px text and a 12px arrow
on mobile. Desktop retains the 16px arrow. The fixed chat trigger is untouched.
Current local checks and scoped finish disposition are recorded in
`docs/service-navigation-and-hero-2026-10-30.md`.
