# Influence India Services — final landing-page implementation plan

## 1. Goal and agreed scope
Build a complete, responsive, single-page website for Influence India Services, a pan-India staffing and workforce management company. Give employers and job seekers equal prominence. Use a bold editorial direction, oversized typography, workplace photography, and a lime-green/charcoal palette derived from the uploaded company logo.

This is a frontend landing page, not a recruitment portal. No authentication, application uploads, database, backend contact form, invented pricing, or additional policy pages are included. Contact actions lead directly to WhatsApp or email.

## 2. Confirmed inputs and content constraint
- Company: Influence India Services.
- WhatsApp: +91 96063 29992; use `https://wa.me/919606329992`.
- Employer email: `contact@influenceindiaservices.com`.
- Job-seeker email: `careers@influenceindiaservices.com`.
- Logo attachment: `e7d5ab2e-9a36-42df-984f-a719f40282ea`; successfully fetched and inspected at `/tmp/influence-india-logo.png` in this session. The artwork contains lime-green and grey branding on a black background. Preserve the full logo, proportions, and lettering; do not redraw or recolour it. Re-fetch the attachment if the temporary file is unavailable later.
- Use the previously supplied website wording unchanged. Preserve the eight FAQ questions and answers, including any unusual wording. Do not generate replacement marketing copy, testimonials, service names, pillar titles, statistics, or addresses.
- Missing policy URLs: omit links entirely rather than displaying nonfunctional links.
- Three innovation pillars without descriptions: display supplied titles only; retain the supplied description for the remaining pillar.

**Required content input:** The current conversation summary identifies the sections but does not contain the original full copy, FAQ text, testimonials, pillar titles, or complete Bengaluru address. They are not present in the inspected scaffold. Implementation must obtain that original text from the earlier conversation if accessible, or from a user-provided text/document. This is a content-availability blocker, not permission to invent wording. Do not call the page content-complete until the source copy has been recovered.

## 3. Repository and technical approach
The repository is a blank React 19 + Vite 8 + Tailwind CSS v4 scaffold. `src/App.tsx` currently renders an empty container; `src/index.css` imports Tailwind; `src/main.tsx` already wires the global stylesheet. No component library or design-system dependency appears in `package.json`.

- Keep React, Vite, and Tailwind; do not install an unrelated UI framework.
- Implement the page in `src/App.tsx`, using small section components and typed content arrays in the same file initially. Extract files only if the completed source becomes materially difficult to maintain.
- Define reusable brand tokens and global typography in `src/index.css` using Tailwind v4 theme support. Keep CSS imports first.
- Establish minimal local primitives for section layout, section labels, headings, and contact links; use them consistently instead of introducing a large design-system abstraction.
- Use public Google Fonts: Manrope for display typography and Inter for body text, with system sans-serif fallbacks. Wire imports in `src/index.css`; no private-font tooling is needed.
- Preserve the existing entrypoint and Vite configuration. Update `index.html` with a company-specific title and a factual meta description derived from supplied copy.
- Store the supplied logo in a stable local asset location rather than referencing a temporary filesystem path.
- No router is needed. Use in-page anchors and direct contact links.

## 4. Visual direction
Use charcoal and near-black surfaces, warm off-white reading sections, bright lime accents, and muted grey supporting text. Define semantic colour tokens once; validate contrast, especially for green text and secondary text. Lime is primarily an accent and CTA background with dark text, not small low-contrast text on white.

Use an editorial grid with generous spacing, oversized but fluid headings, numbered section markers, strong dividers, and restrained corners. Avoid a generic collection of identical rounded cards. Alternate light and dark sections to create a clear reading rhythm. Keep typography and image crops deliberate rather than adding decorative gradients unrelated to the logo.

Place the complete logo on a near-black backing in the header and footer; maintain sufficient legibility without stretching or cutting off its wordmark.

Photography should portray credible workplace settings, teams, manufacturing/logistics, and training. Use Unsplash search during implementation, favouring relevant Indian workplace imagery where available. Select one strong hero photograph and no more than two supporting photographs. Do not imply stock subjects are actual employees, clients, or testimonial authors. Supply descriptive alt text, responsive crops, fixed aspect ratios, and lazy loading below the fold. Never use stock photos as testimonial portraits without a supplied identity match.

## 5. Page structure
Implement these sections in this order, using the original supplied wording:

1. **Header:** logo; anchor navigation to Services, Why Us, FAQ, and Contact; prominent WhatsApp contact. On small screens, collapse navigation into a labelled menu with correct expanded state.
2. **Hero:** large supplied headline and introduction, editorial workplace image, and equally visible employer and job-seeker actions. Employer email goes to the contact mailbox; job-seeker email goes to the careers mailbox. Do not hide either audience behind a toggle.
3. **Services:** all six supplied services in a numbered, responsive two-column layout, collapsing to one column on narrow screens.
4. **Reliability pillars:** clear typographic highlights using the supplied titles and descriptions; no invented numeric proof points.
5. **Ecosystem:** an accessible HTML/CSS diagram connecting only the supplied ecosystem nodes. Use a centred desktop arrangement and a linear mobile arrangement. Include readable text relationships rather than relying on connecting lines alone.
6. **Four pillars of innovation:** four numbered panels; use descriptions only where supplied. Do not fill missing descriptions with boilerplate.
7. **Pricing benefits:** present the provided benefits, not a fabricated price table or subscription plans. Include an employer contact action.
8. **Skill training:** supporting workplace/training photograph, supplied description, and a careers contact action.
9. **Why us:** all five supplied reasons with strong hierarchy and compact editorial layout.
10. **Testimonials:** all three supplied quotes and attributions, without invented logos, employers, star ratings, or portraits. Use a static grid rather than an auto-advancing carousel.
11. **FAQ:** eight supplied questions and answers in an accordion. Initially collapsed; allow independent opening of multiple answers. Use native accessible disclosure semantics or equivalent keyboard-operable local primitives.
12. **Contact and footer:** a closing employer/job-seeker contact area, WhatsApp number, both email addresses, full supplied Bengaluru address, logo, section links, and current-year copyright. Do not display policy links without real destinations.

## 6. Interaction and data flow
All content is static and local. React state is needed only for the mobile navigation if native disclosure is unsuitable. There is no network submission or stored personal data.

- All WhatsApp links use `https://wa.me/919606329992`; optional URL-encoded messages distinguish employer staffing enquiries from job enquiries without requiring a form.
- Email links use `mailto:` with the appropriate mailbox and an optional descriptive subject.
- If external contact links open a new tab, include `rel="noopener noreferrer"`. The page must not claim an enquiry was sent merely because a link was opened.
- Navigation links use stable section IDs and account for sticky-header offset. Close the mobile menu after choosing a section.
- Smooth scrolling and any subtle entry animation respect `prefers-reduced-motion`; do not require animation for content visibility.
- Every displayed CTA has a real destination. No dead buttons, placeholder policy anchors, or misleading application-submitted messages.

## 7. Responsive and accessibility requirements
Use mobile-first layout with Tailwind's standard breakpoints, fluid display type, and a bounded content width. Test approximately 375px, 768px, and 1440px widths. Ensure headings wrap without overflow, images retain useful crops, the ecosystem remains readable, and long email addresses wrap safely.

Use one H1, ordered H2/H3 hierarchy, semantic landmarks, a skip link, visible focus indicators, clear link labels, adequate touch targets, and WCAG AA colour contrast. Treat decorative imagery and diagram connectors as decorative; keep essential diagram information readable in text. FAQ and navigation must work by keyboard without hover dependence.

## 8. Implementation sequence
1. Recover the original copy and map it to the section structure without rewriting it.
2. Copy the inspected logo to a stable asset path; search and select workplace photographs using the Unsplash capability.
3. Establish global font wiring, brand tokens, layout primitives, and responsive header/footer.
4. Implement all sections in order with content arrays and direct contact actions.
5. Add mobile navigation, FAQ disclosure behaviour, accessible section anchors, and reduced-motion handling.
6. Update document metadata and complete visual/content verification.

## 9. Verification and acceptance criteria
This is a broad page implementation, so run the repository's relevant commands: `pnpm exec oxfmt src/App.tsx src/index.css index.html` for touched source formatting, then `pnpm build` (the existing Vite production build). Report actual outcomes; do not claim a build is a separate TypeScript check.

Use the existing supervised development server and preview; never start another dev server. Use logs only to diagnose an observed failure. If browser tooling is available, check desktop and mobile rendering, keyboard navigation, menu open/close, FAQ disclosure, anchor offsets, image loading, and contact destinations. If browser tooling is unavailable, report that limitation rather than claiming runtime verification.

The page is accepted when all listed sections and supplied content are present, the logo and workplace imagery render cleanly, both audiences have clear contact paths, every WhatsApp link targets `919606329992`, emails target the correct mailbox, responsive layouts have no horizontal overflow, navigation and FAQ work accessibly, and the production build succeeds. Missing original copy remains a disclosed blocker until recovered.

## 10. Delivery
Report the implemented sections, contact behaviour, verification results, and any remaining content or environmental blockers. Do not commit, push, create deployment infrastructure, or publish externally unless separately requested.
