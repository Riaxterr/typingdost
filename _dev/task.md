# TypingDost SEO & Mobile View Implementation Tasks

- [x] Phase 1: index.html — Title, Meta, H1, Schemas, Performance tags
  - [x] Fix title tag (keyword-optimized)
  - [x] Fix meta description (power-packed, 155 chars)
  - [x] Expand keywords meta
  - [x] Fix H1 tag (unhide + make visible)
  - [x] Add FAQ JSON-LD schema
  - [x] Add SoftwareApplication JSON-LD schema
  - [x] Add performance preload/theme-color tags
  - [x] Fix og:image to use existing typingdost_brand.png
  - [x] Add SEO content section (visible crawlable text + FAQ)
  - [x] Add keyword-rich footer

- [x] Phase 2: Create robots.txt
- [x] Phase 3: Create sitemap.xml
- [x] Phase 4: certificate.html SEO optimization

- [x] Phase 5: Google Search Console Verification Meta Tag
  - [x] Add verification meta tag to index.html
  - [x] Add verification meta tag to certificate.html

- [x] Phase 6: Mobile Webapp View Optimization

  - [x] Optimize container width to 95% to save margins
  - [x] Align gamification dashboard on a single compact line
  - [x] Allow flex-wrapping for headers & tabs to avoid overflow clipping
  - [x] Fix stats telemetry boxes to fit 4 columns side-by-side without overflow
  - [x] Decrease padding inside typing box to maximize viewport characters
  - [x] Compact the live mascot interaction panel size
  - [x] Fix mobile keyboard guide toggle (removed override display:none)
  - [x] Transform mobile dropdowns (theme, sound, language, lessons) into premium centered overlay dialogs with blurred backdrops
  - [x] Fix z-index stacking context (dropdowns now show on top, not behind, other elements)

- [x] Phase 7: Performance & Typography Optimization
  - [x] Clean up Google Fonts payload (reduced from 8 font families to 3 core families: Inter, Orbitron, JetBrains Mono)
  - [x] Implement system font stacks fallback for vintage, cozy, and royal themes, eliminating external downloads
  - [x] Bump assets cache-busting version parameters to v=2.3

- [x] Phase 8: Govt Exam Mode Navbar Separation & Layout
  - [x] Separate Govt Exam Mode into its own dedicated navbar dropdown button
  - [x] Add multiple specific exam options (SSC CGL/CHSL, RRB NTPC, High Court, LDC Exam) under the dropdown
  - [x] Prevent lesson tabs container from wrapping (single-line horizontal scroll) and center-align the buttons with equal margins
  - [x] Redesign navbar buttons into unified premium glassmorphism capsules and prevent button word-wrapping (`nowrap`)
  - [x] Fix dropdown clipping/opening bug on desktop by setting overflow to visible
  - [x] Remove row-flex alignment bug to center the buttons layout with equal side spacing on widescreen desktops
  - [x] Implement selection highlighting, keyboard accessibility, and translation mapping
