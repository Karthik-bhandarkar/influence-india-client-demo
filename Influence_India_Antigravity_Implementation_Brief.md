# Influence India Services — Precise Intro, Persistence, and UI Polish Plan

## Purpose
Restore and preserve the approved Influence India Services (IIS) logo intro, make it appear only when it adds value, retain the completed office-video work, introduce the client-requested grey accent tastefully on the main page, and perform only safe, feature-level code-structure cleanup.

This document is the implementation brief for Antigravity. The existing repository is the source of truth. Discover the actual code before editing; filenames mentioned below are historical clues, not guaranteed current paths.

---

## 1. Agreed UX behaviour

### When the logo intro SHOULD appear
1. On the visitor's first site visit in that browser, when no valid IIS intro/activity state exists.
2. When a visitor returns after **3 hours or more without activity on the site**. Three hours is the chosen default within the requested 2–4 hour window.
3. When a visitor opens a deep link directly after that inactivity period, show the intro first and then reveal the originally requested page. Do not redirect everyone to the homepage.

### When it SHOULD NOT appear
- On a normal refresh/reload a few seconds or minutes after the visitor started or completed the intro.
- When a network error forces a quick refresh or retry.
- When the visitor clicks internal navigation links or changes routes inside the single-page app.
- When the visitor returns after a short break (for example, 5, 20, or 60 minutes).
- Each time a component re-renders, a route changes, or a page section is revisited.
- When the visitor is actively using the site, even if the total time since first opening the site exceeds three hours.

### Intro sequence — preserve the already-approved design
1. Full-screen off-white background.
2. The **original IIS logo** appears in outline form.
3. Original logo colours fill upward from bottom to top, like liquid filling a glass.
4. The fill animation takes approximately **2 seconds**.
5. Company name and the approved tagline are revealed in the existing planned sequence.
6. A smooth transition reveals the requested page beneath/after the intro.

Do not redraw or replace the logo. Do not make up a new animation if the existing animation can be restored. Avoid a page reload or redirect as part of the intro. The intro must not hang indefinitely or block the site if animation support fails. Respect reduced-motion preferences with a brief, accessible transition or immediate reveal.

---

## 2. Persistence design: use a small, first-party functional cookie

Implement a simple, well-contained persistence gate. Prefer the existing project conventions and any existing consent/persistence utilities. Do not add a library just for this feature.

### State and timing rules
- Use one non-personal first-party cookie for a timestamp, such as `iis_last_activity_at`. Store only a timestamp; do not store identity, browsing history, or personal information.
- Cookie path: `/`; use `SameSite=Lax`; use `Secure` in HTTPS production; set a reasonable expiry such as 30 days. The cookie is a functional timing flag, not an analytics/tracking cookie.
- On app entry, **read the previous timestamp first**, before overwriting it.
- If there is no usable timestamp, treat this as a first visit and show the intro.
- If the current time minus the saved timestamp is at least **3 hours**, show the intro.
- If the difference is less than 3 hours, skip the intro and show the requested page immediately.
- When deciding to show the intro, write the current timestamp **before starting the animation**, not only after completion. This prevents the animation from replaying if the visitor immediately refreshes because of a network issue or partial load.
- When skipping the intro, update the timestamp so the new visit starts a fresh inactivity window.
- While the page is visible, update the last-activity timestamp in a throttled way on genuine user activity (for example, pointer, keyboard, touch, or meaningful focus activity). Do not write a cookie on every render or every keystroke; throttle writes to a reasonable interval.
- When the page becomes hidden or the visitor leaves, persist the latest activity/leave timestamp. When the page becomes visible again, compare the stored timestamp to the 3-hour threshold. If the visitor was away for 3+ hours, show the intro then; otherwise, resume without the intro.
- Keep the intro gate mounted/managed at the application shell level, following the actual app architecture, so it is not re-triggered by internal route changes.
- Guard against duplicate triggers from `visibilitychange`, `pageshow`, route changes, React development Strict Mode, and multiple event listeners. Register and clean up listeners correctly.
- Validate timestamps safely. If the cookie is malformed or unavailable, fail gracefully rather than showing a broken screen. If cookie storage is blocked, use the smallest reasonable fallback supported by the existing project and document that fallback.

### Important edge cases
- **Immediate refresh/network retry:** after an intro starts, a refresh within 3 hours must not restart it.
- **Short absence:** leaving for less than 3 hours must not restart it.
- **Long absence:** returning after 3+ hours should restart it once.
- **Next day:** the intro should appear again.
- **Internal navigation:** never restart the intro just because the route changed.
- **Background tab:** if the visitor returns to a tab after 3+ hours away, evaluate the gate then; do not rely only on a fresh page load.
- **Requested route:** preserve the intended path/query/hash. After the intro, show the page the visitor asked for, not an invented homepage redirect.
- **Reduced motion / unsupported animation:** show the page reliably without a stuck loader.

Do not add an analytics system, user accounts, server calls, or a new cookie-consent popup for this feature. If the site already has a consent manager or cookie policy, inspect and follow the existing approach; do not bypass the project's established consent handling. Do not claim legal compliance—this is an implementation requirement, not a legal review.

---

## 3. Main-page grey accent requested by the client

The required grey is **`#686868`**.

Inspect the existing homepage and palette first. If this exact grey is already used clearly and appropriately, preserve it and report where. Otherwise, introduce it in **one restrained, visible secondary UI detail** on the main page, such as supporting/secondary text, a small label, a caption, or a thin divider.

Rules:
- Keep the current visual identity, spacing, hierarchy, and established blue/green theme intact.
- Do not recolour the entire page or change primary headings, buttons, logo colours, hero dimensions, orbital graphic, navigation, or video section.
- Ensure the grey has enough contrast against its background to remain readable.
- Do not add a new section solely to display the grey.

---

## 4. File-structure and maintainability — conservative scope only

The goal is to make the intro/persistence implementation easy to understand and maintain, **not to reorganize the whole repository**.

1. Inspect the real project structure, app entry point/layout, routing approach, logo intro component, animation styles, persistence utilities, and existing office-video implementation.
2. Find and reuse existing intro and logo code wherever possible. Historical clues include `public/images/influence-india-logo.png`, `public/images/iis-logo.svg`, and `src/components/IISLogo.tsx`; verify these paths before relying on them.
3. Keep one clear source of truth for intro eligibility and cookie handling. Avoid duplicating the timing logic across page components.
4. Follow the repository's current naming, component, hook, utility, styling, and test conventions. Put code in the established locations rather than inventing a new architecture.
5. Only make small structural cleanups directly needed by this feature, such as removing duplicate intro-gate logic or consolidating repeated cookie/timing code. Do not rename, move, or rewrite unrelated components.
6. Do not add dependencies unless the existing stack cannot reasonably implement the requirement; if a new dependency seems necessary, explain why before installing it.
7. Do not delete existing files, assets, routes, content, or styles just because they appear unused. Confirm references first.

---

## 5. Strict preservation requirements

The office-video section is **finished and approved**. Keep it as-is.

Do not change the video's asset/source, licensing attribution, placement, dimensions, styling, playback behaviour, poster/fallback, or surrounding section unless you can demonstrate a direct, unavoidable conflict with the intro. If a direct conflict exists, describe it and make only the smallest integration fix.

Also preserve:
- the approved original IIS logo and liquid-fill concept;
- existing company name and tagline content;
- current hero size/layout and existing blue/green theme;
- the original orbital concept and its placement;
- navigation, URLs, route behaviour, page content, typography, and interactions;
- responsive behaviour and existing performance work.

No homepage redesign. No unrelated refactor. No new sections. No fabricated assets or test evidence.

---

## 6. Required workflow for Antigravity

### Phase A — inspect before editing
- Inspect the app structure, route handling, current intro implementation, logo asset, cookie/storage utilities, main-page palette, office-video code, and Git diff/status.
- Identify the exact reason the intro is currently missing or repeatedly shown, if applicable.
- Summarize the proposed files to change and the intended change in each file.
- Do not assume historical filenames still exist. Use the actual repository.

If the cause or safe change scope is not clear, stop and report the evidence and uncertainty instead of guessing.

### Phase B — implement narrowly
- Restore/reconnect the original intro at the correct application-shell level.
- Implement the 3-hour inactivity rule and cookie persistence described above.
- Add `#686868` in one appropriate main-page secondary detail only if it is not already visibly present.
- Make only the minimal feature-level structure cleanup necessary.
- Leave the completed office video untouched.

### Phase C — verify with actual evidence
Run the project's existing checks and launch the actual site in a browser if the environment supports it. Do not report a visual/browser test as passed unless it was actually performed.

Use this test matrix:

| Test | Expected result |
|---|---|
| First visit / no timestamp cookie | Intro appears once |
| Refresh immediately after intro begins | Intro does not replay |
| Refresh within 3 hours | Intro is skipped |
| Internal route/page navigation | Intro is not replayed |
| Return after a short break | No intro |
| Return after 3+ hours away | Intro appears once, then requested page |
| Return the next day | Intro appears once |
| Hidden tab returned after 3+ hours | Intro is evaluated and appears once |
| Deep link after 3+ hours | Same requested route is shown after intro |
| Reduced motion or animation failure | Site content remains accessible; no stuck loader |
| Office video | Unchanged and still works |
| Main-page grey accent | `#686868` is visible in one restrained secondary use and readable |
| Console/build | No new relevant errors; existing checks pass where available |

If reliable time simulation is available, test timestamps without waiting three real hours. Do not alter production timing merely to make the test pass. Restore test state after testing.

### Phase D — report and stop
Provide:
1. Root cause of the missing/repeating intro, supported by code/browser evidence.
2. The exact inactivity rule implemented (3 hours) and how it behaves on refresh, route navigation, and long absence.
3. Cookie name, fields stored, expiry, and fallback behaviour if cookies are blocked.
4. The main-page location where `#686868` is used (or the existing use retained).
5. Exact files changed and a concise explanation for each.
6. Tests actually run and pass/fail results, including browser evidence if available.
7. Confirmation that the office-video implementation and unrelated design/functionality were preserved.
8. Any unresolved issues or checks that could not be run.

Do not claim success without evidence. After reporting, stop and wait for review before making any further changes.

---

## 7. Definition of done

This task is done only when the approved logo intro is restored, appears on first visit and after a 3-hour inactive return, does not annoy visitors with repeated playback on short refreshes or internal navigation, safely handles network-refresh scenarios, preserves the exact requested route, uses `#686868` tastefully on the main page, keeps the completed office video intact, and has a small, understandable implementation verified against the available tests.
