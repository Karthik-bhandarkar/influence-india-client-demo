# Influence India Services — Phase 2 Implementation
## Full-bleed homepage hero video + existing route repair

**Use this document only after Phase 1 has been completed and its audit reviewed.** This is an implementation specification for the existing project, not a request to rebuild or redesign the website.

---

## 0. Preconditions — confirm before editing

Before making any change:

1. Read the Phase 1 audit report from the current Antigravity conversation.
2. Re-open the actual project and inspect `git status`/the diff. Do not discard, reset, stash, overwrite, or revert the user's existing changes.
3. Confirm the actual homepage hero component, current router strategy, real existing route list, and root causes found in Phase 1.
4. Locate the exact hero source folder and verify the assets inside it. The supplied video filenames may resemble:
   - `bright-avenue-co-ltd-real-estate-purchase-and-resale-business-renovation-business.video.top_fv.Woblo (1).webm`
   - `bright-avenue-co-ltd-real-estate-purchase-and-resale-business-renovation-business.video.top_fv--sp-hq.Woblo.mp4`
   Use the actual paths confirmed in the repository; do not assume these long filenames or a folder location. If the expected source files are not present, stop and report the missing file instead of inventing a path or substituting the older abstract `workplace-loop.mp4`.
5. Confirm the landscape clip is appropriate for wide screens and the portrait clip is appropriate for mobile by previewing both actual files. Confirm the candidate poster/still-image file, if present.
6. If Phase 1 did not correctly identify the assets or routing issue, stop and correct the audit before implementation. Do not guess.

## 1. Required outcome A — full-bleed homepage hero video

The current homepage hero should become a full-width, prominent video-led hero inspired by the supplied reference screenshot. The video should visibly fill the existing hero area/background—not appear as a small video card and not merely replace the right-side image inside the old split layout if that fails to meet the approved full-bleed direction.

### Preserve the Influence India Services content

Retain the actual existing homepage copy and functionality, including:

- Headline: **“One system. Every step of the career.”**
- The existing supporting paragraph, copied from the current homepage code rather than re-created from memory.
- Existing CTA buttons and their destinations/handlers (including “Talk with us” and “What we do” if those are the actual current labels).
- The existing IIS logo/brand styling, lime-green accents, typography direction, navigation, and working header controls.

Do not copy Bright Avenue's company name, real-estate wording, giant placeholder text, labels, or any other reference-site content. Do not rasterise or bake the IIS heading into the video; the text must remain real, responsive, accessible HTML content.

### Visual composition

- Use the verified landscape video as the wide-screen hero source and the verified portrait video for narrow/mobile viewports only if Phase 1 confirmed that these variants are suitable.
- Use the video as a full-bleed hero background with an intentional crop (`object-fit: cover` or the equivalent supported by the existing styling system).
- Keep the IIS headline, description and CTA group readable above the footage. Use a restrained overlay/gradient or local scrim where necessary; do not obscure the video completely or apply a heavy effect that changes the brand direction.
- Maintain sufficient contrast behind text at all points in the video, including bright scenes. Ensure navigation remains visible, clickable, and distinct from the hero copy.
- Preserve the existing green floating card only if it remains compatible with the new approved full-bleed composition. Do not delete valuable current content without documenting the reason. Avoid stacking the old card over text/buttons or covering critical video detail.
- Make the hero layout responsive using existing project conventions. Check very narrow mobile widths and ensure no content overflows.
- Do not alter unrelated homepage sections or the separate lower-page workplace-video section.

## 2. Asset placement and handling

1. Put the verified video assets in appropriate production asset locations according to the existing repository conventions (likely under `public/videos/` for public static media). Confirm the actual project conventions before choosing paths.
2. Use consistent, descriptive production filenames only when the copy/move succeeds and the destination is verified—for example `iis-hero-desktop.webm` and `iis-hero-mobile.mp4`. Do not create duplicate copies when equivalent files already exist.
3. Preserve the originals in the source folder unless the existing repository policy explicitly requires otherwise. Never delete source files as part of this task.
4. Create or use a matching poster image from a verified frame of the supplied video. Prefer an existing appropriate source image if it is genuinely the hero poster. If extracting a frame is feasible with an already available tool, save a compressed static image in the appropriate public image folder. Do not use the full reference-site screenshot as the poster. If a suitable poster cannot be created, report that blocker and use the existing website hero image as a temporary fallback only if it already exists and is appropriate.
5. Verify all final asset paths from disk and reference exactly those paths in code. Do not invent paths.
6. Avoid unnecessary new dependencies. Compress/optimise media only where it can be done safely with available tools. Preserve source originals and report the resulting file sizes.

### Playback, loading and accessibility

- Decorative background video must be muted; never autoplay audio.
- Use inline playback on phones (`playsInline`) and loop the video only if it is a looping ambient hero clip.
- Use conservative loading/preload behaviour so video download does not block initial page rendering, the IIS logo intro, or essential text/controls.
- Provide an explicit verified poster image and graceful fallback if autoplay or playback fails.
- Respect `prefers-reduced-motion`: use the poster/static hero in reduced-motion mode rather than forcing autoplay. Where practical, also avoid autoplay for data-saving settings or slow connections.
- Do not load both large desktop and mobile video files eagerly on every device. Implement viewport-appropriate source selection using a strategy supported by the current framework and browser targets. Verify in developer tools that the wrong large variant is not downloaded unnecessarily.
- Preserve a visible, usable hero if JavaScript, autoplay, or video decoding fails.
- Avoid cumulative layout shift by reserving the hero's final dimensions before the video loads.

## 3. Required outcome B — repair the existing linked pages

Use the exact cause documented in Phase 1. Keep the existing framework and router strategy unless evidence proves that a minimal targeted change is not enough.

1. Fix all existing declared pages/navigation destinations that should work but currently fail.
2. Ensure header/footer links and existing internal CTA links lead to their correct existing destinations.
3. Test in-app click navigation as well as direct address-bar navigation and refresh on every declared route, using the correct approach for the existing router:
   - If the app uses `HashRouter`, preserve and test hash-based URLs.
   - If the app uses `BrowserRouter`, check the existing deployment's SPA fallback/rewrite setup and correct it only if the Phase 1 evidence identifies it as the failure source.
4. Keep the logo-to-home action, browser back/forward, and existing forms/contact interactions working.
5. Do not invent routes, add placeholder pages, silently redirect all navigation to the homepage, or replace the router just to make one test pass.
6. If the problem depends on hosting configuration outside the repository, make only the justified repository-side correction and state what must still be configured by the hosting provider.

## 4. Strict scope protection

Do **not**:

- Rebuild the site or redesign other sections/pages.
- Copy the reference site's content, brand, navigation, or typography.
- Modify the completed IIS logo intro or its three-hour persistence logic.
- Modify the orbital section, existing lower-page video section, grey accent, content data, general mobile UX, or unrelated styles.
- Perform the separate dead-code cleanup, folder renaming, dependency upgrades, broad refactoring, or formatting sweeps.
- Delete the source videos/poster, unrelated images, or uncertain files.
- Reset/revert existing user changes or claim a clean Git tree if one was not clean at the start.

Only make the minimum justified edits needed for the hero-video integration and the proven route fix. Keep these two scopes distinguishable in the final report.

## 5. Required verification

Run the application and inspect it in an actual browser. Code review or a successful build alone is insufficient.

### Hero checks

- Desktop: full-bleed video covers the hero; correct wide-screen source is used.
- Mobile/narrow phone: portrait source or the confirmed mobile fallback is used; the correct source is not preloaded on desktop unnecessarily.
- The headline, supporting paragraph, CTAs and navigation remain legible and functional.
- The hero has no unintended white gaps, broken crop, severe text-on-bright-frame contrast failure, or horizontal overflow.
- Poster and fallback work when video loading/playback is disabled or fails.
- Muted, inline, loop and reduced-motion behaviours are correct.
- The video does not delay or break the existing logo intro or its persistence logic.
- Existing lower-page video and orbital section are unchanged and still work.

### Routing checks

For every existing declared route, record a result for:

- Clicking its actual in-site navigation link.
- Loading the route directly in the address bar.
- Refreshing the route.
- Browser back/forward navigation.

Test the exact URL form appropriate to the project's router. Check browser console/network failures if any route still fails.

### Regression and repository checks

- Run the baseline build/type-check/lint/tests that were available in Phase 1, and compare results. Separate pre-existing failures from new failures.
- Inspect the full Git diff and make sure each changed file is necessary for either the hero or route repair.
- Check all referenced asset paths exist.
- Do not claim a test passed unless it was actually run. Mark unavailable tests as **NOT VERIFIED**.

## 6. Final report — do not skip

Return a concise but evidence-based report containing:

1. Root cause of the routing failure and exact fix.
2. Every existing route tested, with click navigation, direct load and refresh results.
3. Exact source and final paths for desktop video, mobile video, and poster/fallback.
4. Which video source is selected at each tested viewport and evidence that the other large source is not needlessly fetched.
5. Every created, copied, moved, or modified file and why it was necessary.
6. Actual browser verification results and screenshots if available.
7. Build/type-check/lint/test results, console errors, and unresolved issues.
8. Confirmation about what was left unchanged (logo intro/three-hour gate, existing lower-page video, orbital section, other pages/design).
9. A clear notice that the supplied video filenames indicate they may originate from Bright Avenue. Do not say commercial production use is approved unless the user/client has verified permission or licensing. If rights are not confirmed, mark production deployment as **BLOCKED PENDING RIGHTS CONFIRMATION**, even if the local implementation works.

After reporting, stop and wait for review. Do not continue into mobile redesign or dead-code cleanup.
