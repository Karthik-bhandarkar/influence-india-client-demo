# Influence India Services — Mobile UX Audit & Implementation Plan

## Purpose

Improve the **mobile experience only where needed** while preserving the approved desktop design and the website's existing visual identity. The agreed direction is:

- **Page density:** Balanced and premium — remove wasted space, retain comfortable reading and necessary information.
- **Card layouts:** Mixed — stacked cards for important content; horizontal swipe cards only for suitable repeated/secondary items; accordions for optional detail where appropriate.
- **Motion:** Subtle fade-and-rise reveals, normally once when entering view; no continuous or attention-demanding animation.

This document is a scoped implementation specification for Antigravity. It does not authorize redesigning the site or changing unrelated behaviour.

---

## Non-negotiable safeguards

1. Inspect the **actual current working tree** first. Do not assume that a previously described file structure or path is still accurate.
2. Inspect `git status`, current diffs, package scripts, router configuration, and current mobile/desktop behaviour before editing. Preserve pre-existing user changes. Never reset, discard, stash, or overwrite unrelated work.
3. Establish a baseline by running the checks already supported by the repository. Record any failures that exist before changes so they are not misreported as regressions.
4. Keep this task limited to **responsive/mobile UX, mobile layout defects, and the agreed subtle card motion**. Do not perform dead-code cleanup, dependency upgrades, file renaming, broad architecture changes, copy rewrites, or a general visual redesign in this task.
5. Desktop is already approved. At desktop widths, keep the existing layout, hero dimensions, visual styling, content, navigation, orbital concept, and interactions unchanged unless a mobile-specific CSS change inadvertently affects desktop. Prefer mobile-first media-query overrides with narrowly scoped selectors.
6. Preserve the existing IIS logo intro, its three-hour inactivity behaviour, the workplace video and its playback configuration, the orbital section, routes, forms, header, footer, typography, colours, and all working functionality. Do not change the intro gate or persistence logic as part of this task.
7. Do not hide essential information simply to make a page appear shorter. Do not convert every section into a card or force every card into a carousel.
8. Do not add dependencies or introduce a new animation framework unless there is a demonstrated, unavoidable need. Prefer the existing stack and utilities.
9. If browser access, test tooling, or a route cannot be verified, state the limitation explicitly. Never fabricate screenshots, viewport tests, successful builds, or console results.
10. If any proposed change risks damaging a core feature or desktop appearance, stop and report the conflict before making that change.

---

## Phase 1 — Inventory and evidence-based audit (do not edit yet)

### A. Discover every page and route

- Read the actual root app/router and navigation definitions.
- Enumerate every reachable internal route, including the homepage, the About, Careers, Contact, Global Talent Program, Resources, and Systems pages if those routes still exist, plus any additional routes discovered in code.
- Follow links and identify shared layouts, headers, footers, overlays, modals, forms, and route-specific components.
- Do not rely on filenames alone to infer what a page renders.

### B. Establish baseline

- Capture/record the existing desktop appearance at a representative desktop viewport (at least 1366 × 768 or an available similar viewport).
- Inspect every reachable route at mobile widths. Record a concise issue list with route, viewport, affected component, and evidence.
- Run the existing project build and relevant type-check/lint/test scripts where available. Record the exact commands and outcomes.
- Check browser console errors and failed network requests where browser tooling is available.
- Separate pre-existing defects from defects introduced by later edits.

### C. Required responsive viewports

Test all reachable pages at these CSS viewport widths, using the actual browser/device emulation when available:

- **320 px** — narrow phone / worst-case wrapping
- **360 px** — common compact Android width
- **390 px** — common modern phone width
- **430 px** — larger phone width
- **768 px** — tablet breakpoint behaviour
- **1024 px** and **1366 px or wider** — ensure tablet/desktop layouts remain intact

At minimum, inspect page top, middle sections with cards/media, and page bottom. Do not claim all pages passed after testing only the homepage.

---

## Phase 2 — Mobile layout rules

Apply only changes supported by the audit evidence.

### A. Typography and wrapping

- Give headings and body text responsive sizes and line heights that match the existing type system.
- Allow headings to wrap naturally; avoid fixed widths and fixed heights that clip text.
- Prevent text collisions between titles, descriptions, buttons, icons, badges, and images.
- Add safe wrapping for long URLs, email addresses, long unbroken strings, and unusually long labels where needed (`overflow-wrap`, `min-width: 0`, or equivalent, used appropriately).
- Avoid using `white-space: nowrap` on content labels unless there is a clear reason and overflow is handled.
- Keep text contrast and existing brand typography intact. Do not rewrite approved copy merely to fit a screen.

### B. Spacing and page length

- Reduce excessive vertical gaps and padding on mobile without making reading cramped.
- Use flexible sizing, `max-width: 100%`, responsive grid/flex rules, and content-driven heights instead of brittle fixed dimensions.
- Remove accidental large empty areas and overly tall card padding where evidence shows they are unnecessary.
- Keep section rhythm consistent; not every section needs the same height or spacing.
- Avoid artificial truncation of important copy. Use a clearly labelled expand/collapse interaction only for genuinely secondary detail.

### C. Card layout — mixed strategy

Choose the layout according to the content role, not as a blanket rule:

1. **Stacked full-width cards:** primary services, key benefits, required process steps, key eligibility/role information, important metrics, and actions that should be discoverable without horizontal swiping.
2. **Horizontal swipe cards:** only for a peer group of repeated and self-contained items that genuinely benefits from side-by-side browsing, such as secondary capabilities or selected supplementary cards. Show a visible peek of the next card and provide accessible affordances/indicators where appropriate. Ensure touch scrolling works naturally.
3. **Expandable/accordion details:** optional detail that is lengthy but not required for the initial scan. Use accessible button semantics, keyboard support, visible state, and `aria-expanded`/`aria-controls` when suitable. Do not collapse essential information by default.
4. **Client/logo marquees and decorative media:** keep within the viewport and avoid horizontal page overflow; reduce motion or use a static presentation if continuous movement degrades usability on mobile.

Rules:
- Never place all content into a carousel solely to reduce vertical page length.
- Do not make users horizontally swipe to discover essential page content or primary actions.
- A horizontal carousel may scroll internally; the **page itself must not scroll horizontally**.
- Keep card padding, gaps, aspect ratios, and heights flexible. Text must expand naturally.
- Preserve the meaning, content order, and CTA functionality unless a specific UX issue requires an evidence-backed adjustment.

### D. Header, navigation, and footer

- Verify that the header fits narrow widths, has no title/logo/menu overlap, and does not consume an excessive amount of the first screen.
- Ensure mobile navigation opens/closes correctly, is keyboard accessible, and does not leave an invisible overlay blocking taps or scroll.
- If sticky/fixed UI exists, check that it never covers headings, anchor targets, form controls, or CTAs. Add suitable scroll offsets only where needed.
- Verify footer wordmarks, navigation, contacts, and any floating controls wrap and fit without clipping or creating sideways page scroll.

### E. Images, office video, and orbital section

- Keep the existing office video; do not replace its source or redesign the section. Ensure it stays inside the viewport, keeps its intended ratio, and does not force large unwanted vertical gaps on phones.
- Prevent images, decorative graphics, and SVGs from overflowing their parent containers. Preserve appropriate cropping and source quality.
- Keep the orbital concept and design identity. If the orbital visual is too wide/complex on phones, use a responsive scale/position or a narrowly scoped mobile adaptation; do not remove or rebuild it without reporting the need first.
- Avoid fixed-width media and canvas/WebGL elements that enlarge the document. Confirm touch interactions remain usable and the media does not sit on top of text.
- Maintain proper loading and fallbacks already implemented; do not change the intro/video logic as part of responsive work.

### F. Forms and interactive elements

- Make forms single-column where appropriate on phones; inputs, selects, textareas, and buttons should fit the content width.
- Labels must remain associated with controls and must not overlap placeholders or entered values.
- Verify focus, validation messages, keyboard appearance where testable, and submit behaviour.
- Ensure tap targets are comfortably usable (aim for approximately 44 × 44 CSS px when practical) and separated enough to avoid accidental taps.
- Check accordions, dropdowns, modals, buttons, and all carousel controls with actual interactions, not screenshots alone.

---

## Phase 3 — Subtle card animation

Motion should support hierarchy without making the page feel slower.

- Use a subtle **fade plus small upward movement** for selected cards/sections as they enter the viewport.
- Use the existing animation approach if one is already present. Do not add a new library merely for this effect.
- Keep duration restrained (a practical default range is about **250–450 ms**) and movement small; avoid large travel distances, elastic/bouncy effects, dramatic blur, or long delays.
- Prefer a one-time reveal per page visit/element entry rather than repeatedly animating on every tiny scroll. Avoid constant pulsing, floating, or looping card motion.
- Avoid long stagger chains; content should not feel blocked while waiting for animation. Primary heading, body copy, and primary CTA must not be delayed behind decorative motion.
- Use `prefers-reduced-motion: reduce` to remove or substantially reduce movement for visitors who request reduced motion. Content must remain visible if JavaScript or animation fails.
- Ensure opacity/transform states cannot leave cards invisible, unclickable, or blocking focus if the observer never fires. Provide an immediate-visible fallback.
- Do not introduce scroll-jacking or prevent natural touch scrolling.
- Check performance on a mobile-sized viewport and avoid animating heavy canvas/WebGL elements simply for effect.

---

## Phase 4 — Page-specific review checklist

Use the actual discovered routes, adding any others found. All pages must be reviewed individually.

- **Home:** hero hierarchy and CTA fit; no oversized empty gaps; office video remains responsive; orbital visual stays within the viewport; metric/capability cards use a sensible mixed layout; footer and marquee do not cause page overflow.
- **About:** story/content blocks, imagery, leadership/team details if present, headings, and footer wrap correctly; secondary long detail can be grouped or expanded only where appropriate.
- **Careers:** role/career-track cards have natural height; details remain readable; application links/buttons are visible and usable.
- **Global Talent Program:** steps, eligibility, program information, and CTA hierarchy work on narrow screens; no required details are hidden in a swipe-only group.
- **Resources:** resource cards, file links, descriptions, metadata, and actions fit; long labels do not collide or overflow.
- **Systems:** diagrams, technical content, standards, metrics, and dense explanatory sections adapt without clipped text or media overflow.
- **Contact:** address/contact details wrap properly; form labels, errors, fields, and submit button remain usable.
- **Any additional routes/components discovered:** audit the same categories. Shared components must also be checked across all pages where they appear.

This is a checklist, not permission to invent page content or force a new visual style.

---

## Phase 5 — No-overlap and overflow verification

For every route and required viewport, explicitly check:

- No overlapping text, headings, buttons, icons, labels, images, or adjacent cards.
- No clipped words, lines, or card content.
- No page-level horizontal scrollbar or content extending beyond the viewport.
- No content hidden behind fixed/sticky header/footer elements or floating buttons.
- No text or CTA obscured by images, office video, or orbital graphics.
- No fixed card heights that break when text wraps or browser font size increases.
- No broken navigation, tap targets, form interactions, anchor targets, or carousel/accordion controls.
- No animation that keeps content invisible or blocks interaction.
- No broken media, console exceptions, or new failed requests caused by the changes.

Use screenshot comparison for each route where possible. For visual overlap, inspect the screenshot and the actual layout; do not rely on a single automated overflow check. Where available, use browser inspection for `scrollWidth > clientWidth` and element bounding rectangles to help locate issues, while remembering that intended internal carousels can have horizontal scroll.

Also inspect at least one scenario with a longer heading/text string and browser zoom or increased text size where the browser tooling supports it.

---

## Phase 6 — Desktop regression and final checks

After mobile changes:

1. Revisit all reachable routes at the baseline desktop viewport and compare against the original appearance.
2. Verify navigation, forms, internal links, office video, logo intro/persistence, orbital section, and any existing interactions.
3. Run the same build/type-check/lint/tests that were recorded in Phase 1.
4. Review the complete Git diff for unrelated edits, global CSS effects, duplicated breakpoints, accidental content changes, and unused styles introduced by the work.
5. Confirm the page has no mobile horizontal overflow at tested widths and no desktop regressions.
6. If a check is unavailable, report it rather than pretending it passed.

---

## Antigravity execution sequence

### Stage 1 — Audit only

First, inspect the repository and run through the page/viewport audit. Return a short findings report with:
- every route discovered;
- issues by route and viewport;
- baseline build/check results;
- proposed files/components to change and why;
- which areas are already correct and should be left untouched.

Do not edit code until the audit report exists. Then continue in the same task only for clear, low-risk, evidence-backed fixes. For high-risk changes to routing, the orbital implementation, or core app architecture, stop and ask for review.

### Stage 2 — Implement

Apply the smallest targeted responsive changes. Prefer component-level styles or scoped mobile media queries. Do not make broad changes to the shared design system unless the audit proves the rule is globally wrong and desktop safety is demonstrated.

### Stage 3 — Verify and report

Provide a route-by-route matrix with viewport widths tested and pass/fail findings. Attach or identify actual screenshots/evidence if available. List every changed file with its reason. Report all build/test/console results, any pre-existing issues, and remaining limitations. Confirm explicitly that desktop, video, logo intro/persistence, orbital section, navigation, and forms remain intact.

**Stop after the report. Do not begin dead-code cleanup or another redesign in the same task.**

---

## Ready-to-paste Antigravity prompt

Read and follow the attached **Influence India Services — Mobile UX Audit & Implementation Plan** as the implementation specification. Our agreed direction is balanced page density, mixed card layouts, and subtle one-time fade-and-rise animation.

First inspect the actual current repository and Git status, identify every reachable route, establish baseline build/check results, and audit all pages at 320, 360, 390, 430, and 768 px plus at least 1024 and 1366 px for desktop regression. Produce the audit findings before editing. Then implement only evidence-backed, targeted mobile fixes, using the document's mixed card and accessibility rules.

Mobile must have no overlapping/clipped text, no accidental page-level horizontal overflow, no controls hidden behind fixed UI, and no unusable forms or navigation. Keep essential content discoverable; do not turn every section into a carousel. Add only subtle card reveals that respect reduced motion and cannot leave content invisible.

Desktop already looks good: preserve its current appearance. Preserve the logo intro and its three-hour persistence, office video, orbital design, routes, content, navigation, forms, and working functionality. Do not do dead-code cleanup, dependency upgrades, unrelated renames, new architecture, or broad redesign in this task. Protect all existing user changes.

After the fixes, test every discovered route at the required widths, inspect actual browser layouts/screenshots and console, rerun baseline checks, compare desktop appearance, and inspect the complete Git diff. Report route-by-route evidence, changed files and reasons, failures and limitations. Never claim unperformed tests passed. If a core or high-risk change is necessary, stop and report before proceeding. After reporting, stop and wait for review.
