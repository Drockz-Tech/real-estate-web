# Editorial Architecture Homepage Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a responsive, editorial-style EssTeam homepage in a new `test-deploy` folder.

**Architecture:** A static page owns the content and semantic structure in `index.html`; `styles.css` owns all layout, typography, responsive states, and motion; `script.js` owns only menu, accordion, and reveal behavior. No framework or build step is required.

**Tech Stack:** HTML5, CSS3, vanilla JavaScript, Google Fonts, Unsplash image URLs.

---

### Task 1: Create semantic page structure

**Files:**
- Create: `test-deploy/index.html`

- [ ] Add semantic header, hero, projects, manifesto, metrics, services, journal, contact, and footer sections with anchor IDs.
- [ ] Add accessible button controls for menu and service accordion.
- [ ] Add content metadata and image alt text.

### Task 2: Build the editorial visual system

**Files:**
- Create: `test-deploy/styles.css`

- [ ] Define custom properties for paper, ink, moss, lime, rules, and spacing.
- [ ] Add responsive grid layout for desktop, tablet, and mobile.
- [ ] Style hero image composition, project cards, metrics, accordion, and footer.
- [ ] Add restrained entrance motion and a `prefers-reduced-motion` override.
- [ ] Add visible keyboard focus states and responsive navigation styles.

### Task 3: Add lightweight interactions

**Files:**
- Create: `test-deploy/script.js`

- [ ] Toggle mobile navigation and `aria-expanded` state.
- [ ] Toggle one services panel at a time and sync ARIA state.
- [ ] Add IntersectionObserver reveal behavior with a no-observer fallback.
- [ ] Close the mobile menu after an internal navigation click.

### Task 4: Validate the rendered experience

**Files:**
- Test: `test-deploy/index.html`
- Test: `test-deploy/styles.css`
- Test: `test-deploy/script.js`

- [ ] Run a static syntax sanity check by loading the page in a local browser.
- [ ] Verify desktop and mobile layouts have no horizontal overflow.
- [ ] Verify menu and accordion controls work with keyboard and mouse.
- [ ] Verify image load fallback is visually acceptable.
