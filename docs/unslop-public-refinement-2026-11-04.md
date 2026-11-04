# Public website refinement

4 November 2026 · website-prod 0.2.48

User authorized Unslop across the public website, not a new brand or feature set.
Method: Unslop by Damir Sokolovsky, https://github.com/heydamir/unslop, CC BY 4.0,
reviewed/installed ref `a6f121eee5f29c2f74976b75456feae8b66afb3a`.
No third-party snapshot/story scripts, image services or new packages were run.

## Direction

- Product: development solutions for teams and organizations.
- Character: calm, decisive, understandable.
- World: BinaHub's established consulting identity.
- Moments: the approved hero artwork and substantive program content.
- Signature: coherent navy navigation and calls to action.

Polish mode preserves the existing palette, Plus Jakarta Sans, content, layouts,
photography, glass/gradient materials and hero animation authorized by the owner.
It does not impose the skill's default anti-glass aesthetic on the owner's brief.
No redesign of the home/recommendation hero or regeneration of imagery is included.

## Source-grounded findings and changes

- Contact at 390px overflowed to 720px because a decorative absolute-width field
  had no containing/clipping parent. Contain that artwork locally; do not hide
  arbitrary page overflow at the document level.
- Contact labels were 10px uppercase, inputs 14px and errors 10px. Labels now use
  readable body roles; inputs are 16px, errors have IDs and aria associations.
  Optional fields, copy, validation and sending/consent semantics are unchanged.
- Navigation/footer actions and legal labels were 9–11px with widely tracked
  uppercase or low-opacity ink. Use existing navy/slate/bronze, 12px metadata and
  14px action roles. Preserve links, menus, responsive header and CTA priority.
- Gallery story captions required hover. Show their actual content on static
  navy overlays on all input types; retain original photos and section order.
- Chat trigger/close/send lacked accessible names. Name them per language,
  preserve the fixed location, provide Escape and return focus, enlarge input
  and targets. Remove the decorative pulse; preserve actual chat behavior.
- Add localized skip-to-content, visible focus and thin native scrollbars.
  Remove duplicate nested main landmarks on existing wrapper pages without
  changing their classes or content. Reduced-motion disables smooth anchor scroll.
- Catalog's entry said assessment/asesmen. Replace only its interface label with
  Self Diagnostic, per the owner's existing terminology rule, not instrument text.

## Passes and boundaries

Spacing: consistent touch sizes and control gaps, local clipping rather than
document overflow masking. Color: existing palette with darker readable metadata
and protected white gallery captions. Icons: retain Lucide/logo and name controls.
Copy: preserve factual/commercial content; only diagnostic interface terminology.
Type: readable label/action/input roles rather than tiny tracked text. Layout:
preserve page structure and fix the contact leak. Details: focus/labels/landmarks.
Visuals: no new assets, photography and approved effects unchanged. Motion:
remove only chat's purposeless pulse and keep reduced-motion anchor behavior.

Navigation, footer and focus changes apply through the shared layout to all
public routes and their id/en wrappers. Unchanged content components were not
rewritten merely to make every source file show a diff. Small deliberate diagram
annotations, hero scroll cues and brand labels are not automatically treated as
body copy. This is not a claim that all small typography or all WCAG issues vanish.

## Verification

Read-only local QA uses 13 public paths, unprefixed/id/en routes, 1440/390/768px,
reduced motion, and already-installed Playwright from an explicit local runtime.
External requests and non-GET operations are fulfilled locally, never sent.
Catalog uses its empty/unavailable fixture: live published catalog, chat AI,
contact delivery, tracking providers and backend authorization are not tested.

Initial visual collection was stopped after identifying the contact leak because
full-page images did not trigger viewport-bound content. The runner now scrolls
through sections before capture. Those early blanks are not reported as product
defects. Final route results and captures remain ignored in `.codex_tmp/`.

Final verification on 4 November 2026:

- 117/117 local route/viewport checks passed: 13 paths × unprefixed/id/en ×
  1440/390/768px. All returned 200, with no horizontal overflow, page JavaScript
  errors or visible unnamed product buttons; one main landmark per page.
- Home keyboard skip link, chat bounds, Escape and return focus passed at all
  three widths. No chat message was sent. Contact inputs were at least 16px.
- Public ESLint/TypeScript quality check, targeted final lint, program-entry and
  deployment contracts, three dependency compatibility tests and static asset
  check passed. React review found no new hook, data-fetch or dependency changes.
- Production build passed, generating 45/45 static pages. It used the existing
  local environment files; no environment values were printed or changed.
- Final contact/mobile and gallery/desktop captures were visually reviewed.
  No extra aesthetic revision was made after the bounded polish/verification pass.

These checks are local UI/build evidence, not live backend delivery, a complete
accessibility audit, a production deployment or a penetration-test result.

Release target: the verified `binahub` remote points only to
`https://github.com/binahubid/company-profile.git`, the owner's stated production
source. The multi-URL `origin` also contains two legacy mirrors; their push was
not authorized by the safety review, so they are intentionally not release targets.
