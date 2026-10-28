# Program recommendation entry

Approved 28 October 2026. Persuade surface for HR, leaders and organization
sponsors. This is an extension of the incumbent BinaHub design, not a new visual
world. Keep Jakarta, navy/white, restrained gold, existing tokens and hero artwork.
The initial entry implementation did not add a root DESIGN.md. The subsequent
recommendation-landing extension is now recorded in root DESIGN.md and its
.impeccable/design.json sidecar; those rules are explicitly route-scoped.

The homepage hero alternates two messages: program recommendations first,
BinaHub's original organizational-growth message second. Background/orbit imagery
do not swap. The first primary CTA opens /id/rekomendasi-program/ (EN supported),
which explains the organization service and hands off to app.binahub.id/discovery.
Team diagnosis, individual Self Diagnostic, catalog and inquiry remain separate.

Landing description superseded on 28 October 2026 by
design-plans/program-recommendation-elevenlabs.md: a sparse editorial opening,
manual needs/competencies/program demonstration, three-step process, illustrative
report, FAQ, closing CTA and alternate paths. Palette evidence is in
design-plans/binahub-program-palette.html and root DESIGN.md. The new decorative
ribbon raster has its exact prompt sidecar in public/program-recommendation/.
No invented program, testimonial, price or final-proposal promise is introduced.
This supersession applies only to the landing; the homepage-carousel description
and behavior below remain the record of the earlier entry implementation.

Hero behavior: eight-second rotation after intro readiness; labeled selectors,
pause/play, inactive panels inert/aria-hidden, overlapping grid to reserve height.
Hover, focus, touch, hidden/offscreen pages pause or stop rotation. Keyboard/manual
selection stops autoplay until explicit play. Reduced motion is manual-only.
Headline gold #AD7415 passes the 3:1 large-text contrast floor on white (3.97:1);
homepage illustration colors remain unchanged. The original entry implementation
introduced no new shipping raster; the later recommendation landing adds the
ribbon illustration documented above.

Verified: quality:public, production build and tools/test-program-entry.mjs.
Cross-repository browser regression lives in app-binahub/scripts/test-program-website-ui.mjs;
run after building this website. It checks manual/reduced-motion desktop/mobile,
autoplay/pause/resume/hover/focus/keyboard/offscreen, stable layout, responsive
overflow, ID/EN metadata and synthetic campaign handoff, without API writes.
Visual finish review: ship, including confirmation of the listed contrast fix.
This is not evidence of deployment, production email or paid-diagnostic readiness.

Pre-existing dirty catalog, package/version and changelog work is excluded from
this feature commit. Detailed cross-platform scope and paid-delivery release gates
are in app-binahub/docs/program-entry-release.md and paid-diagnostic-delivery-readiness.md.
