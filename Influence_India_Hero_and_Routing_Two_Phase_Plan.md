# Influence India Services — Two-Phase Hero Video + Route Repair Plan

## Purpose
Implement the full-bleed homepage hero video using only the intended assets in the project's `hero-src` folder, preserve the existing Influence India Services brand and homepage content, and fix the issue where only the homepage opens while linked pages fail.

This is deliberately split into two phases. Run Phase 1 first. Do not run Phase 2 until Phase 1 has returned a factual audit and the asset locations are confirmed.

---

# PHASE 1 — READ-ONLY AUDIT AND UNDERSTANDING CHECK

**Paste this prompt into Antigravity first. Do not ask it to edit code yet.**

> We need to make two targeted improvements to the existing Influence India Services website:
>
> **A. Homepage hero video**
> - Make the current homepage hero a full-bleed, prominent video experience inspired by the reference screenshot supplied in this task.
> - Keep the existing IIS website content over the video, especially the headline **“One system. Every step of the career.”**, the current supporting paragraph, and the existing CTA buttons and their destinations.
> - The video should fill the hero background/frame rather than appear as a small new video section or a replacement for the existing lower-page video.
> - Preserve IIS logo/brand styling, lime-green accents, typography, header/navigation, current button functionality, and the site's identity. Use a restrained overlay/gradient as needed so all hero text stays readable.
> - There is a project asset folder intended for this task, referred to as `hero-src`/`hero source`. Inspect the actual repository and locate the exact folder; do not assume a path or invent filenames. Inventory every file in it. Identify the intended video(s), image/poster/reference screenshot, actual file formats, dimensions, duration, sizes, and which asset is landscape versus portrait. Do not move, rename, copy, or edit assets yet.
> - The reference screenshot is a design reference, not a screenshot to place on the website as a substitute for video.
>
> **B. Linked pages not opening**
> - The site currently opens the homepage, but other linked pages reportedly do not open. Investigate this separately from the hero styling.
> - Discover the actual router, all declared routes, header/footer links, button destinations, and current deployment/SPA fallback configuration. This project has previously been reported to use `HashRouter`, but verify the current code instead of relying on that assumption.
> - Determine whether links are incorrectly configured, route components are not registered, direct URL loads/refreshes fail, or server/deployment rewrites are missing. Do not invent new pages or routes.
>
> **Safety and scope rules**
> - This is an existing functional website. Do not rebuild it or perform unrelated refactors.
> - Inspect `git status`/the current diff first and protect all existing user changes.
> - Do not edit, move, rename, delete, or create files in Phase 1.
> - Do not change the completed IIS logo intro or its three-hour persistence logic, the existing lower-page office/video section, the orbital section, the grey accent, or other unrelated design/features.
> - Do not claim you watched or tested a video unless you actually inspected it. Do not claim a route works unless you actually tested it.
> - The provided reference video appears associated with another business/site. Asset integration can be planned, but do not assert it is licensed for production. Record that production use requires documented permission/licensing unless an existing licence is available.
>
> **Return a report with these sections and stop:**
> 1. Actual project root and current Git status (briefly).
> 2. Existing homepage hero component(s), related styles, routing entry point, and router type.
> 3. A table of the exact `hero-src` files found: path, type, dimensions, duration (for video), file size, likely role, and whether it was actually previewed.
> 4. Proposed destination path for each asset (do not perform the move yet) and the reason for that destination.
> 5. Proposed hero layout: video coverage, where the headline/supporting text/CTAs sit, overlay and poster/fallback behaviour, desktop/mobile source selection, reduced-motion behaviour, and how the existing header remains usable.
> 6. A complete route/link inventory with each page's declared route, navigation link destination, and observed failure or success. Distinguish a click-navigation failure from a direct URL/refresh/deployment rewrite failure.
> 7. Minimal files likely to change for the hero and routes, separated into two scopes.
> 8. Baseline commands/tests available and any existing failures.
> 9. Any blocker or uncertainty, including production media permission.
>
> **Do not implement anything. End by summarizing your understanding in plain language and wait for approval.**

---

# PHASE 2 — IMPLEMENT AFTER REVIEWING PHASE 1

**Use this only after Phase 1 correctly identifies the real source assets, the real routes, and the likely causes. If Phase 1 invents paths or fails to identify the files/routes accurately, ask it to correct the audit before proceeding.**

> Implement the approved changes based on your Phase 1 audit. Use the exact assets found in the project's `hero-src`/`hero source` folder; do not search for substitutes or invent filenames.
>
> ## Part A — Place and integrate hero assets
> 1. Before editing, re-check Git status and keep all pre-existing changes intact.
> 2. Copy/move only the approved source video file(s) and poster/still image to suitable production asset locations based on the framework's existing conventions. Prefer clear filenames such as `iis-hero-desktop.webm`, `iis-hero-mobile.mp4`, and `iis-hero-poster.jpg` only if those names fit the existing conventions. Preserve originals in `hero-src` unless the repository's existing policy says otherwise and deletion is explicitly approved.
> 3. Use the landscape clip for wide screens and the supplied portrait clip for narrow/mobile screens only if Phase 1 verified both compositions are appropriate. Use responsive source selection intentionally (for example, separate responsive video elements or a robust source strategy); do not assume a single `<source>` list automatically switches assets based on viewport.
> 4. Keep the current homepage hero copy over the video, particularly **“One system. Every step of the career.”**, the current supporting paragraph, and existing CTA buttons and destinations. Do not copy unrelated text from the reference business. Do not rasterize the IIS text into the video.
> 5. Apply a restrained gradient/overlay only as needed for readable contrast. Keep the IIS identity, type styling, lime accent, and visual balance. Do not redesign the rest of the website.
> 6. Use the appropriate supplied or generated-from-the-supplied-video poster frame. Do not use a screenshot of the reference website as the poster. Preserve a graceful fallback to the poster/image if video cannot play.
> 7. Optimize without materially damaging visual quality. Avoid loading both large variants at full resolution unnecessarily. Use muted autoplay, `playsInline`, looping where appropriate, preload conservatively, and avoid blocking the main page content. Respect `prefers-reduced-motion` and, where feasible, data-saving preferences; show the poster instead of autoplaying for those users. Do not show audio controls if the intended hero is a decorative muted background, but ensure no audio plays automatically.
> 8. Keep the existing navigation/header and CTA controls functional. Do not place overlay text on top of navigation controls in a way that makes them hard to read or click.
>
> ## Part B — Fix all existing linked pages
> 1. Fix the actual cause identified in Phase 1, using the smallest changes possible. Do not rewrite the router or migrate router type unless the current implementation demonstrably requires it.
> 2. Ensure every existing intended navigation link opens its corresponding existing page and the browser does not land on a blank page or an unintended route.
> 3. Test both in-app link navigation and direct URL loading/refresh for each route, taking account of the project's actual router strategy. If the project uses `HashRouter`, preserve and test hash-based URLs; if it uses `BrowserRouter`, verify server/deployment SPA rewrites as appropriate. Do not add fictional routes or placeholders.
> 4. Verify internal CTA links, logo-to-home navigation, back/forward navigation, and fallback/404 behaviour if already supported. Keep existing form and contact actions intact.
>
> ## Scope protection
> - Do not modify unrelated homepage sections, other page content, desktop design outside the hero, mobile layouts unrelated to this task, typography system, dependencies, build configuration, CI/CD, or cleanup work.
> - Do not alter the completed logo intro/3-hour gate, existing lower-page video section, orbital visual, or `#686868` accent except if a demonstrable direct conflict must be reported and approved first.
> - No dependency upgrades, no dead-code deletion, no broad refactor, and no redesign.
> - The reference media is associated with another site/business. Do not state it is cleared for client production unless the user/client has documented the necessary rights. Keep integration technically testable locally, and explicitly flag the production-use permission requirement in the final report.
>
> ## Verification requirements
> - Run the actual application in a browser, not just static code inspection.
> - Test the home hero at desktop and mobile/narrow-phone widths. Confirm correct source variant, full bleed, video visible, text readable, buttons clickable, header usable, poster/fallback works, no horizontal overflow, no unintended layout shift, and reduced-motion behaviour.
> - Test every existing route via the website's own links and via direct URL/refresh, using the correct approach for the router in this project.
> - Run the same available build/type-check/lint/test commands that formed the baseline. Report pre-existing failures separately from new failures.
> - Inspect console errors and the complete Git diff. Confirm no unrelated files changed.
>
> ## Final report — required before stopping
> Provide: root cause of the route issue; routes tested and results; exact files created/changed and why; actual asset paths and which source each viewport uses; media optimisation/poster/fallback behaviour; browser screenshots or evidence; build/test results; console errors; any known limitations; confirmation that unrelated features were preserved; and whether production media rights were verified.
>
> Do not say “all working” without evidence. If a test cannot be performed, clearly label it unverified. After the report, stop and wait for review.

---

## Recommended workflow
1. Run Phase 1 only.
2. Review the audit report for correct file paths, assets, and real routes.
3. If correct, place/confirm the agreed source files in `hero-src` (if not already there) and run Phase 2.
4. Review the final diff and browser evidence before committing or deploying.

## Important production note
A technically working video is not automatically cleared for commercial use. Confirm the right to use the reference site's footage on the Influence India Services website before production deployment.
