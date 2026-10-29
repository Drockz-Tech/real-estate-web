# Editorial Architecture Homepage Design

## Goal
Create a distinct, premium homepage for EssTeam in `test-deploy`, inspired by the reference site's sustainability-led architecture positioning without copying its Wix structure or visual design.

## Audience and job
The primary audience is a prospective client, collaborator, or design-minded visitor evaluating the studio's point of view and capabilities. The first screen should communicate: this is a serious multidisciplinary practice, it designs with environmental and human consequences in mind, and it has work worth exploring.

## Visual direction
Use an editorial architecture-journal language:
- Warm paper background rather than pure white.
- Near-black display typography with a narrow grotesk/serif contrast.
- Acid-lime and muted moss accents used for status, rules, and active states.
- Full-bleed architectural photography with restrained overlays.
- Thin rules, generous whitespace, numbered sections, and oversized text as navigation.

This borrows the reference site's restraint, sustainability language, and metric-led credibility, but changes the composition to a more contemporary magazine-like system.

## Page structure
1. Header: fixed/auto-sticking wordmark, compact navigation, outlined inquiry button, mobile menu toggle.
2. Hero: oversized statement "Designing the next useful beautiful thing." with a supporting paragraph, location stamp, and large image composition. Include a scroll cue.
3. Featured work: three project cards with category, place, year, and hover movement. Cards link to local placeholder anchors.
4. Manifesto: short studio statement split into a large quote and a numbered list of working principles.
5. Impact band: four metrics based on the source brand's real positioning, rewritten as concise proof points.
6. Services: accordion rows for architecture, interiors, urban strategy, and sustainability. Only one row open at a time.
7. Journal strip: three editorial notes with issue labels and dates.
8. Footer/contact: clear invitation, studio locations, email/phone, and small legal line.

## Interaction and accessibility
- Smooth in-page anchor scrolling with a reduced-motion fallback.
- Menu toggle works on mobile and updates `aria-expanded`.
- Services accordion uses real buttons and `aria-controls`/`aria-expanded`.
- Decorative images have empty alt text; project images have useful labels.
- Focus-visible styles are always present.
- All essential information remains available without JavaScript.

## Technical approach
Use three dependency-free files in `test-deploy`: `index.html`, `styles.css`, and `script.js`. Load Google Fonts in CSS with a system fallback. Use CSS custom properties, grid/flex layout, and media queries for responsive behavior. Use remote Unsplash `images.unsplash.com` URLs for the visual prototype because the local Wix media mirror contains placeholder files rather than usable project photography.

## Validation
Open the page locally in a browser at desktop and mobile widths. Verify no horizontal overflow, the menu toggle, accordion, anchor links, hover/focus states, and that images have loaded or degrade to the color blocks behind them. Run a static HTML/CSS/JS sanity check and inspect the rendered page with a screenshot if browser tooling is available.
