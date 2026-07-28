# Protofile: Premium Personal Portfolio — Mustafa Ahmed

**Document Type:** Project Requirements Document (PRD) + Component Specification + Design System + Development Instructions  
**Version:** 1.0.0  
**Target Builder:** Cursor AI / Frontend Engineers  
**Stack:** HTML5, CSS3, Vanilla JavaScript (ES6+) — No frameworks  
**Owner:** Mustafa Ahmed — Flutter Developer  

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Folder Structure](#2-folder-structure)
3. [Design System](#3-design-system)
4. [Color Palette](#4-color-palette)
5. [Typography](#5-typography)
6. [Component Specifications](#6-component-specifications)
7. [Animation Specifications](#7-animation-specifications)
8. [Section Specifications](#8-section-specifications)
9. [Responsive Rules](#9-responsive-rules)
10. [UI Behaviors](#10-ui-behaviors)
11. [JavaScript Behaviors](#11-javascript-behaviors)
12. [CSS Architecture](#12-css-architecture)
13. [Accessibility Rules](#13-accessibility-rules)
14. [SEO Rules](#14-seo-rules)
15. [Performance Rules](#15-performance-rules)
16. [Asset Requirements](#16-asset-requirements)
17. [Development Guidelines](#17-development-guidelines)

---

## 1. Project Overview

### 1.1 Purpose

Build a **premium, modern, minimal-luxury** personal portfolio website for **Mustafa Ahmed**, positioning him as a **Flutter Developer**, software engineer, and UI/UX enthusiast. The site must feel **alive** through Flutter-inspired motion, glassmorphism, floating UI, and smooth interactions while remaining **accessible**, **SEO-optimized**, and **performant**.

### 1.2 Goals

| Goal | Success Criteria |
|------|------------------|
| Brand perception | Premium, trustworthy, technically credible |
| Conversion | Clear paths to Hire Me, Projects, WhatsApp, Email |
| Responsiveness | Flawless layout at all five breakpoints |
| Accessibility | WCAG 2.1 AA target for color contrast and keyboard use |
| Performance | LCP-friendly hero; lazy-loaded media; minimal JS bundle |
| Maintainability | Component-based HTML partials or repeatable patterns; modular CSS |

### 1.3 Non-Goals

- No React, Vue, Angular, or build-step requirement (optional minification only)
- No CMS or backend (static site)
- No blog unless added in a future phase

### 1.4 Architecture Principles

- **Clean Code:** Single responsibility per JS module; BEM or consistent naming in CSS
- **Component-Based Structure:** Reusable sections, cards, buttons, nav, footer
- **Modular CSS:** Tokens → base → layout → components → utilities → themes
- **Progressive Enhancement:** Core content works without JS; animations enhance
- **Semantic HTML:** One `<main>`, landmark regions, heading hierarchy

### 1.5 Page Map (Single Page Application Style)

| Order | Section ID | Nav Label |
|-------|------------|-----------|
| — | `#home` | Home |
| 1 | `#about` | About |
| 2 | `#education` | Education |
| 3 | `#experience` | Experience |
| 4 | `#skills` | Skills |
| 5 | `#projects` | Projects |
| 6 | `#testimonials` | Testimonials |
| 7 | `#services` | Services |
| 8 | `#contact` | Contact |

Footer includes quick links mirroring the above.

### 1.6 External Links (Canonical)

| Platform | URL |
|----------|-----|
| Facebook | `https://www.facebook.com/share/1atE9Py1z5/` |
| Instagram | `https://www.instagram.com/mustafaahmedkasem` |
| LinkedIn | `https://www.linkedin.com/in/mustafa-ahmed-9a77353b4` |
| WhatsApp | `https://wa.me/qr/S233W5CHVNNIF1` |
| Email | `mailto:mustafaahmadkasem@gmail.com` |

---

## 2. Folder Structure

```
portfolio/
├── index.html                 # Single entry; all sections
├── favicon.ico
├── favicon.svg
├── apple-touch-icon.png
├── site.webmanifest
├── robots.txt
├── sitemap.xml
│
├── assets/
│   ├── css/
│   │   ├── main.css           # Imports only (or single bundle entry)
│   │   ├── tokens/
│   │   │   ├── _colors.css
│   │   │   ├── _typography.css
│   │   │   ├── _spacing.css
│   │   │   ├── _breakpoints.css
│   │   │   ├── _shadows.css
│   │   │   ├── _radii.css
│   │   │   └── _motion.css
│   │   ├── base/
│   │   │   ├── _reset.css
│   │   │   ├── _root.css      # CSS variables light/dark
│   │   │   └── _globals.css
│   │   ├── layout/
│   │   │   ├── _container.css
│   │   │   ├── _grid.css
│   │   │   └── _section.css
│   │   ├── components/
│   │   │   ├── _navbar.css
│   │   │   ├── _mobile-drawer.css
│   │   │   ├── _buttons.css
│   │   │   ├── _cards.css
│   │   │   ├── _glass-card.css
│   │   │   ├── _badges.css
│   │   │   ├── _timeline.css
│   │   │   ├── _progress-bar.css
│   │   │   ├── _slider.css
│   │   │   ├── _wave-divider.css
│   │   │   ├── _social-icons.css
│   │   │   ├── _footer.css
│   │   │   ├── _back-to-top.css
│   │   │   ├── _theme-toggle.css
│   │   │   └── _cursor-effects.css
│   │   ├── sections/
│   │   │   ├── _hero.css
│   │   │   ├── _about.css
│   │   │   ├── _education.css
│   │   │   ├── _experience.css
│   │   │   ├── _skills.css
│   │   │   ├── _projects.css
│   │   │   ├── _testimonials.css
│   │   │   ├── _services.css
│   │   │   └── _contact.css
│   │   ├── effects/
│   │   │   ├── _background.css
│   │   │   ├── _particles.css
│   │   │   ├── _parallax.css
│   │   │   └── _scroll-reveal.css
│   │   ├── themes/
│   │   │   ├── _light.css
│   │   │   └── _dark.css
│   │   └── utilities/
│   │       ├── _visually-hidden.css
│   │       ├── _text-gradient.css
│   │       └── _glow.css
│   │
│   ├── js/
│   │   ├── main.js            # Bootstraps modules
│   │   ├── config.js          # Breakpoints, selectors, constants
│   │   ├── modules/
│   │   │   ├── theme.js
│   │   │   ├── navbar.js
│   │   │   ├── smooth-scroll.js
│   │   │   ├── mobile-menu.js
│   │   │   ├── typing-effect.js
│   │   │   ├── count-up.js
│   │   │   ├── scroll-reveal.js
│   │   │   ├── progress-animate.js
│   │   │   ├── testimonials-slider.js
│   │   │   ├── parallax.js
│   │   │   ├── magnetic-buttons.js
│   │   │   ├── mouse-glow.js
│   │   │   ├── custom-cursor.js
│   │   │   ├── background-canvas.js
│   │   │   └── back-to-top.js
│   │   └── utils/
│   │       ├── dom.js
│   │       ├── throttle.js
│   │       ├── prefers-reduced-motion.js
│   │       └── intersection.js
│   │
│   ├── images/
│   │   ├── profile/
│   │   │   ├── mustafa-hero.webp
│   │   │   └── mustafa-hero.png   # fallback
│   │   ├── projects/
│   │   │   ├── smart-chess.webp
│   │   │   └── ecommerce-app.webp
│   │   ├── testimonials/
│   │   │   └── nour-el-din.webp
│   │   ├── og/
│   │   │   └── og-image.jpg       # 1200×630
│   │   └── logo/
│   │       └── logo.svg
│   │
│   ├── icons/                     # Optional local Lucide subset SVGs
│   └── fonts/                     # Optional self-hosted; prefer Google Fonts CDN
│
└── docs/
    └── PROTOFILE.md               # Copy or symlink of this document
```

### 2.1 HTML Organization Strategy

- **Single `index.html`** with `<section>` blocks per area; optional HTML comments `<!-- COMPONENT: Hero -->`
- Repeatable patterns use consistent class prefixes: `c-` (component), `l-` (layout), `u-` (utility), `is-` / `has-` (state)
- Data attributes for JS hooks: `data-js="typing"`, `data-js="count-up"`, `data-target="contact"`

### 2.2 Naming Conventions

| Layer | Convention | Example |
|-------|------------|---------|
| CSS blocks | BEM | `.c-btn--primary`, `.c-card__title` |
| JS hooks | `data-js` | `data-js="magnetic"` |
| Section IDs | kebab-case | `#get-in-touch` or `#contact` (use `#contact` in nav) |
| Assets | kebab-case | `smart-chess.webp` |

---

## 3. Design System

### 3.1 Design Pillars

1. **Premium minimalism** — Large whitespace, restrained copy, strong hierarchy  
2. **Glass + soft UI** — Frosted surfaces, subtle inner highlights, soft shadows  
3. **Flutter-inspired depth** — Floating layers, blur orbs, gradient meshes, gentle parallax  
4. **Motion with purpose** — Reveal on scroll, hover feedback, never blocking content  
5. **Dual theme parity** — Light feels airy; dark feels navy + neon blue glow  

### 3.2 Spacing Scale (rem, base 16px)

| Token | Value | Usage |
|-------|-------|-------|
| `--space-2xs` | 0.25rem | Icon gaps |
| `--space-xs` | 0.5rem | Tight inline |
| `--space-sm` | 0.75rem | Badge padding |
| `--space-md` | 1rem | Default gap |
| `--space-lg` | 1.5rem | Card padding mobile |
| `--space-xl` | 2rem | Section inner gap |
| `--space-2xl` | 3rem | Between blocks |
| `--space-3xl` | 4rem | Section padding tablet |
| `--space-4xl` | 6rem | Section padding desktop |
| `--space-5xl` | 8rem | Hero vertical rhythm |

### 3.3 Border Radius

| Token | Value |
|-------|-------|
| `--radius-sm` | 8px |
| `--radius-md` | 12px |
| `--radius-lg` | 16px |
| `--radius-xl` | 24px |
| `--radius-2xl` | 32px |
| `--radius-full` | 9999px |

### 3.4 Elevation & Glass

**Glass surface recipe (light):**

- Background: `rgba(255, 255, 255, 0.55)`  
- Backdrop-filter: `blur(16px) saturate(180%)`  
- Border: `1px solid rgba(255, 255, 255, 0.35)`  
- Outer shadow: soft diffuse  
- Optional gradient border via pseudo-element mask  

**Glass surface recipe (dark):**

- Background: `rgba(15, 23, 42, 0.45)`  
- Border: `1px solid rgba(89, 150, 255, 0.25)`  
- Inner glow: `inset 0 1px 0 rgba(255,255,255,0.06)`  
- Neon edge on hover: accent gradient  

### 3.5 Gradient System

| Name | CSS Direction / Stops |
|------|------------------------|
| `--gradient-brand` | 135deg, `#22D3EE` → `#1B4EF5` → `#9333EA` |
| `--gradient-brand-soft` | 135deg, `#3874FF` → `#5996FF` |
| `--gradient-border` | 135deg, cyan → blue → purple at 40% opacity |
| `--gradient-mesh-hero` | Multi radial overlays (see Background spec) |

### 3.6 Iconography

- **Primary:** [Lucide Icons](https://lucide.dev/) via CDN script or inline SVG sprite  
- **Fallback:** Font Awesome 6 Free (CDN) if Lucide fails to load  
- Size scale: 16, 20, 24, 32px; stroke-width 1.75 default  

### 3.7 Imagery Style

- Profile: circular crop, subtle ring gradient border, soft drop shadow + glow in dark mode  
- Project thumbnails: 16:10 or 4:3, rounded `--radius-lg`, object-fit cover  

---

## 4. Color Palette

### 4.1 Light Theme

| Role | Token | Hex | Usage |
|------|-------|-----|-------|
| Primary | `--color-primary` | `#1B4EF5` | Buttons, links, focus ring |
| Secondary | `--color-secondary` | `#3874FF` | Hover states, badges |
| Accent | `--color-accent` | `#5996FF` | Glows, progress fills |
| Background | `--color-bg` | `#F5F7FC` | Page base |
| Surface | `--color-surface` | `#FFFFFF` | Cards (solid variant) |
| Text primary | `--color-text` | `#0F172A` | Headings, body |
| Text muted | `--color-text-muted` | `#64748B` | Secondary copy |
| Border | `--color-border` | `rgba(15, 23, 42, 0.08)` | Dividers |
| Success | `--color-success` | `#10B981` | Availability |
| Star | `--color-star` | `#FBBF24` | Testimonials |

**Gradient text (Ahmed):** `linear-gradient(90deg, #22D3EE, #1B4EF5, #9333EA)`

### 4.2 Dark Theme (Flutter-Inspired)

| Role | Token | Hex / Value | Usage |
|------|-------|-------------|-------|
| Background | `--color-bg` | `#070B14` | Deep navy base |
| Background elevated | `--color-bg-elevated` | `#0D1321` | Sections alternate |
| Surface glass | `--color-surface-glass` | `rgba(13, 19, 33, 0.6)` | Cards |
| Primary | `--color-primary` | `#4D7CFF` | Slightly lifted for contrast |
| Secondary | `--color-secondary` | `#5996FF` | Accents |
| Accent glow | `--color-accent-glow` | `#6BB0FF` | Neon highlights |
| Text primary | `--color-text` | `#F1F5F9` | Body |
| Text muted | `--color-text-muted` | `#94A3B8` | Meta |
| Neon border | `--color-neon-border` | `rgba(89, 150, 255, 0.45)` | Card edges |
| Mesh blob 1 | — | `#1B4EF5` at 25% opacity | Background |
| Mesh blob 2 | — | `#9333EA` at 15% opacity | Background |
| Mesh blob 3 | — | `#22D3EE` at 12% opacity | Background |

### 4.3 Contrast Requirements

- Body text vs background: **≥ 4.5:1** (AA)  
- Large text (≥ 18pt bold / 24pt): **≥ 3:1**  
- Primary buttons (white on `#1B4EF5`): verify **≥ 4.5:1**  
- Dark mode links: use `#93C5FD` or brighter primary for links on navy  

### 4.4 Theme Switching

- `data-theme="light" | "dark"` on `<html>`  
- Default: respect `prefers-color-scheme`; persist in `localStorage` key `portfolio-theme`  
- Toggle in navbar: sun/moon Lucide icons with `aria-pressed`  

---

## 5. Typography

### 5.1 Font Pairing (Google Fonts)

| Role | Family | Weights | Fallback |
|------|--------|---------|----------|
| Headings | **Plus Jakarta Sans** | 500, 600, 700, 800 | system-ui, sans-serif |
| Body | **Inter** | 400, 500, 600 | system-ui, sans-serif |
| Accent / Stats | **Plus Jakarta Sans** | 700 | — |
| Signature (About) | **Great Vibes** or **Poppins** italic | 400 | cursive fallback |

**Load strategy:**

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Inter:wght@400;500;600&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap" rel="stylesheet">
```

### 5.2 Type Scale (clamp for responsiveness)

| Token | clamp / size | Line height | Use |
|-------|--------------|-------------|-----|
| `--text-display` | `clamp(2.5rem, 5vw + 1rem, 4.5rem)` | 1.05 | Hero name |
| `--text-h1` | `clamp(2rem, 3vw + 1rem, 3rem)` | 1.15 | Section titles |
| `--text-h2` | `clamp(1.5rem, 2vw + 0.5rem, 2rem)` | 1.2 | Subsections |
| `--text-h3` | `1.25rem` | 1.3 | Card titles |
| `--text-body` | `clamp(0.9375rem, 0.2vw + 0.9rem, 1.0625rem)` | 1.65 | Paragraphs |
| `--text-sm` | `0.875rem` | 1.5 | Labels, meta |
| `--text-xs` | `0.75rem` | 1.4 | Badges |

### 5.3 Hierarchy Rules

- One `<h1>` on page: visually hero name or "Mustafa Ahmed" — SEO may use visually hidden site title if needed  
- Section titles: `<h2>` with optional gradient span on keyword ("Education", "Experience")  
- Card titles: `<h3>`  
- Letter-spacing: headings `-0.02em`; uppercase labels `0.08em`  

---

## 6. Component Specifications

### 6.1 Navbar (`c-navbar`)

**Structure:**

- Logo (text or SVG): "Mustafa." or monogram  
- Nav links: Home, About, Education, Experience, Skills, Projects, Testimonials, Services, Contact  
- Theme toggle button  
- CTA optional: "Hire Me" ghost button (desktop)  
- Mobile: hamburger → drawer  

**Visual:**

- Position: `sticky`, `top: 0`, `z-index: 1000`  
- Height: 72px desktop, 64px mobile  
- Background: glass blur increases on scroll (`is-scrolled` class)  
- Active link: gradient underline pill or dot indicator aligned to smooth scroll spy  

**States:**

- Default / scrolled / drawer-open / focus-visible  

### 6.2 Mobile Drawer (`c-drawer`)

- Full-height panel from right (or left per RTL future)  
- Same links + Hire Me + social row  
- Focus trap while open; `Escape` closes  
- Body scroll lock: `overflow: hidden` on `html`  

### 6.3 Buttons

#### Primary — Hire Me (`c-btn c-btn--primary`)

- Gradient background `--gradient-brand-soft`  
- White text, `--radius-full` or `--radius-lg`  
- Glow: `box-shadow: 0 0 24px rgba(27, 78, 245, 0.45)`  
- Hover: translateY(-2px), increased glow  
- Magnetic behavior optional (desktop, reduced motion off)  
- `href="#contact"` or `#get-in-touch` — **use `#contact` consistently**  

#### Secondary — View Projects (`c-btn c-btn--outline`)

- Transparent fill  
- Gradient border (pseudo-element)  
- Arrow icon (Lucide `arrow-right`) animates on hover  
- `href="#projects"`  

#### Ghost / Text buttons

- Download CV, Student, Message Me, Send Email  

### 6.4 Glass Card (`c-glass-card`)

- Padding: `--space-lg` mobile, `--space-xl` desktop  
- Gradient border on hover (opacity 0 → 1)  
- Optional floating animation (`@keyframes float` 6s ease-in-out infinite)  

### 6.5 Info Card (About metadata)

- Icon + label + value  
- Grid 2 columns on mobile for Age/Country/Email/Phone/Availability  

### 6.6 Stat Card (2×2 grid)

- Large number (count-up)  
- Label beneath  
- Hover: subtle scale 1.02 + glow  

### 6.7 Timeline (`c-timeline`)

- Vertical line centered (desktop) or left-aligned (mobile)  
- Glowing line: gradient primary → accent  
- Dots: pulsing ring animation  
- Cards alternate left/right on desktop ≥ laptop  

**Entries:**

| Title | Org | Period | Body |
|-------|-----|--------|------|
| Flutter Instructor | ATEC | 2025 – Present | Teach Flutter fundamentals, clean architecture, state management, and real-world app patterns to trainees. |
| Flutter Instructor | ADA EGY | 2025 – Present | Deliver hands-on Flutter workshops, mentoring developers on UI polish, APIs, and deployment readiness. |

*(Adjust copy slightly for uniqueness; keep factual.)*

### 6.8 Progress Bar (`c-progress`)

- Track: glass / muted fill  
- Fill: gradient with glow tip  
- Label row: skill name left, percentage right  
- Animate width 0 → target when in viewport  

**Skills data:**

| Skill | % |
|-------|---|
| Dart (OOP) | 95 |
| Data Structures | 85 |
| Problem Solving | 90 |
| Clean Code | 95 |
| SOLID Principles | 88 |
| Git | 85 |
| Agile Development | 80 |

### 6.9 Project Card (`c-project-card`)

- Image top, content bottom  
- Badges: technology chips  
- Actions: GitHub (required), Live Demo (optional, omit if N/A)  
- Hover: image scale 1.05 inside overflow hidden, card lift, shadow bloom  

**Projects:**

1. **Smart Chess** — Flutter, Stockfish, Raspberry Pi — Physical/digital chess experience with engine integration on Raspberry Pi.  
2. **E-Commerce App** — Flutter, REST API, Firebase, Provider — Full shopping flow with auth, catalog, cart, and cloud backend.  

### 6.10 Testimonial Slider (`c-slider`)

- Glass card, centered quote  
- 5 star row (filled Lucide stars)  
- Avatar circle, name, job title  
- Controls: prev/next, dots, swipe touch  
- Autoplay 5000ms, pause on hover/focus/interaction  
- Transition: fade + slight slide (300–400ms)  

**Sample slide:**

- Name: **Nour El-Din**  
- Title: **Training Program Student**  
- Quote: placeholder praising clarity, patience, and Flutter instruction quality (2–3 sentences, professional tone)  

### 6.11 Service Card (`c-service-card`)

- Icon in gradient circle  
- Title + short description (1–2 lines)  
- Hover: icon bounce or rotate 5deg, card glow  

**Services list:**

1. Flutter Development  
2. Backend Development  
3. UI/UX Design  
4. API Integration  
5. Firebase Development  
6. State Management  
7. Performance Optimization  
8. App Publishing  

### 6.12 Contact Cards (`c-contact-card`)

- Two cards: WhatsApp, Gmail  
- Icon header, description, CTA button  
- WhatsApp → `https://wa.me/qr/S233W5CHVNNIF1` (target `_blank`, `rel="noopener"`)  
- Gmail → `mailto:mustafaahmadkasem@gmail.com`  

### 6.13 Footer (`c-footer`)

- Columns: Brand blurb, Quick Links, Social, Contact snippet  
- Copyright: `© {year} Mustafa Ahmed. All rights reserved.`  
- Back to top: fixed button appears after scroll threshold  

### 6.14 Wave Divider (`c-wave`)

- SVG wave between Hero and About  
- Animated path morph or horizontal gradient shift (subtle, 8–12s loop)  
- Colors adapt to theme  

### 6.15 Floating Hero Stats

- Small glass chips near profile image  
- Example stats: "8+ Projects", "Flutter Expert", "3+ Years" (align with About stats; avoid contradiction)  
- Float animation staggered delays  

### 6.16 Theme Toggle (`c-theme-toggle`)

- 44×44px min touch target  
- `aria-label="Toggle dark mode"`  

### 6.17 Custom Cursor Layer (optional enhancement)

- Desktop only, `pointer: fine`  
- Small dot + trailing ring  
- Hide default cursor only when user has not requested reduced motion  
- Fallback: normal cursor  

---

## 7. Animation Specifications

### 7.1 Global Motion Tokens

| Token | Value |
|-------|-------|
| `--ease-out-expo` | `cubic-bezier(0.16, 1, 0.3, 1)` |
| `--ease-in-out` | `cubic-bezier(0.4, 0, 0.2, 1)` |
| `--duration-fast` | 150ms |
| `--duration-base` | 300ms |
| `--duration-slow` | 600ms |
| `--duration-reveal` | 800ms |

### 7.2 prefers-reduced-motion

When `prefers-reduced-motion: reduce`:

- Disable parallax, particles, cursor effects, magnetic buttons  
- Scroll reveal: instant opacity 1, no transform  
- Typing: show first role static or all roles as plain text  
- Autoplay slider: stop; manual only  
- Background: static gradient only  

### 7.3 Animated Background (Flutter-Inspired)

**Layers (back to front):**

1. Base gradient mesh (CSS multiple radial gradients)  
2. 3–5 blur orbs (`filter: blur(80px)`) — slow drift `@keyframes orb-float`  
3. Canvas or lightweight DOM particles (30–60 particles max)  
4. Floating Flutter-like shapes (rounded rects, circles, soft gradients, low opacity)  
5. Animated lines (SVG or CSS conic gradients, very subtle)  
6. Vignette + soft glow center-right near hero image  

**Performance:** Use `transform` and `opacity` only; `will-change` sparingly; pause when tab hidden (`document.visibilityState`).  

### 7.4 Mouse Glow Effect

- Radial gradient follows pointer on hero/background layer  
- Opacity 0.15 light / 0.25 dark  
- Throttled with `requestAnimationFrame`  

### 7.5 Magnetic Buttons

- Translate button toward cursor within 12px radius  
- Max displacement 8px  

### 7.6 Mouse Follow Gradient

- Border or spotlight on hero CTAs following local mouse position within element bounds  

### 7.7 Smooth Scrolling

- CSS `scroll-behavior: smooth` baseline  
- JS enhancement: offset for sticky nav height (72px) on anchor click  

### 7.8 Scroll Reveal

- Elements with `data-reveal`: fade + translateY(24px) → 0  
- Stagger children `data-reveal-stagger` by 80ms  
- Trigger: IntersectionObserver threshold 0.15, once: true  

### 7.9 Card / Image Hover

- Card: `translateY(-6px)`, shadow expand, border glow  
- Image: scale 1.05, 400ms `--ease-out-expo`  

### 7.10 Parallax

- Hero profile image: subtle Y shift on scroll (0.08 factor)  
- Background shapes: different factors for depth  

### 7.11 Count Up

- Duration 2000ms, ease out  
- Trigger once in viewport  
- Respect integers: 3+, 8+, 4+ display with suffix in HTML  

### 7.12 Typing Animation

- Rotating roles array:  
  - Flutter Developer  
  - Software Engineer  
  - Mobile App Developer  
  - UI/UX Enthusiast  
- Type speed ~50ms/char, delete ~30ms, pause 2000ms between words  
- Blinking cursor: CSS `@keyframes blink` 1s step-end infinite  

### 7.13 Progress Animation

- 1.2s fill after reveal  
- Optional shimmer on fill  

### 7.14 Wave Divider Animation

- SVG path animation or background-position loop 10s linear infinite  

### 7.15 Shadow Animation

- Pulsing glow on primary CTA `@keyframes pulse-glow` 3s infinite (subtle)  

### 7.16 Floating Cards

- `@keyframes float` ±8px Y, 5–7s, alternate  

### 7.17 Section Reveal

- Optional section background gradient shift on enter viewport  

---

## 8. Section Specifications

### 8.1 Section 0 — Global Shell

- Skip link: "Skip to main content" → `#main`  
- `#site-background` fixed inset 0 behind content  
- `<main id="main">` wraps all sections  

### 8.2 HOME — `#home`

**Layout (≥ laptop):** CSS Grid 2 columns ~55/45 or 1fr 1fr, gap `--space-3xl`, align center, min-height ~90vh minus nav  

**Left column:**

1. Greeting: "Hello, I'm" — `--text-sm`, uppercase tracking, muted color  
2. Name line 1: **Mustafa** — white in dark / `--color-text` in light, display size  
3. Name line 2: **Ahmed** — gradient text class  
4. Typing line: prefix optional "I'm a " + rotating roles  
5. Paragraph (copy direction):  

   > Flutter developer specializing in high-performance mobile applications, clean architecture, and polished UI. Experienced with state management, REST APIs, Firebase, and shipping beautiful, maintainable apps.

6. Button group: Hire Me (primary), View Projects (outline)  

**Right column:**

- Circular profile image (min 280px, max 420px responsive)  
- Decorative rings / gradient orbit  
- 2–3 floating stat glass chips  

**Bottom:** Wave divider full width  

**SEO:** Hero should not be the only H1 decision — recommend `<h1><span class="u-visually-hidden">Mustafa Ahmed — </span>Mustafa<span> Ahmed</span></h1>` pattern or single H1 containing full name.  

### 8.3 ABOUT — `#about`

**Two columns ≥ laptop; stack on mobile (content order: title block, bio right content, then cards).**

**Left:**

- `<h2>About Me</h2>`  
- Short description: "I'm Mustafa Ahmed, Flutter Developer."  
- Download CV button → `assets/files/mustafa-ahmed-cv.pdf` (placeholder path)  
- Social icons row (4) with external URLs from §1.6  
- Info cards: Age **20**, Country **Egypt**, Email **mustafaahmadkasem@gmail.com**, Phone **01102495288**, Availability **Available** (green dot)  

**Right:**

- Biography paragraphs covering: Flutter Developer, high-performance apps, **8+ projects**, clean architecture, freelance instructor, Ministry of Communications collaboration (word carefully: "programs aligned with Ministry of Communications initiatives" unless user confirms exact wording)  
- Signature: "Mustafa Ahmed" — Great Vibes  
- Stats grid 2×2:  
  - 3+ Years Experience  
  - 8+ Projects  
  - 4+ Companies  
  - Flutter Expert  

### 8.4 EDUCATION — `#education`

- Centered `<h2>My <span class="u-text-gradient">Education</span></h2>`  
- Decorative gradient lines flanking title (CSS pseudo elements)  
- Large glass card centered max-width 720px  
- Student icon (Lucide `graduation-cap`)  
- Title: **Bachelor's Degree in Chemistry and Computer Science**  
- Grade badge: **Very Good — 3.3 GPA**  
- Description: interdisciplinary focus bridging scientific reasoning with computing, algorithms, and software development foundations  
- Button: **Student** (ghost/style secondary — links `#` or portfolio section anchor; if no URL, use as decorative or link to education institution placeholder `#`)  

### 8.5 EXPERIENCE — `#experience`

- Title: My Experience (gradient keyword)  
- Vertical timeline with two entries (see §6.7)  

### 8.6 SKILLS — `#skills`

- Title: My Skills  
- Single large glass card: "Programming & Concepts"  
- Progress bars per §6.8  

### 8.7 PROJECTS — `#projects`

- Title: Featured Projects  
- Grid: 2 cols desktop, 1 col mobile  
- Two project cards minimum (expandable later)  
- GitHub URLs: placeholder `#` until real repos provided — use `aria-label` per project  

### 8.8 TESTIMONIALS — `#testimonials`

- Title: What People Say  
- Slider with ≥1 slide (Nour El-Din); structure supports multiple slides for future  

### 8.9 SERVICES — `#services`

- Title: My Services  
- Grid: 4 / 2 / 1 columns per breakpoint  
- 8 service cards  

### 8.10 GET IN TOUCH — `#contact`

- Title: Get In Touch  
- Two contact cards side by side desktop, stacked mobile  

### 8.11 FOOTER

- As §6.13  

---

## 9. Responsive Rules

### 9.1 Breakpoints

| Name | Min width | Max width | Container max |
|------|-----------|-----------|---------------|
| Mobile | 0 | 639px | 100% - 32px padding |
| Tablet | 640px | 1023px | 640px → 960px |
| Laptop | 1024px | 1279px | 1024px |
| Desktop | 1280px | 1535px | 1200px |
| Ultra Wide | 1536px | — | 1320px (content), background full bleed |

```css
/* Reference tokens */
--bp-tablet: 640px;
--bp-laptop: 1024px;
--bp-desktop: 1280px;
--bp-ultra: 1536px;
```

### 9.2 Typography Scaling

- All major headings use `clamp()` per §5.2  
- Ultra wide: cap `--text-display` at 4.5rem to avoid oversized hero  

### 9.3 Spacing

- Section vertical padding:  
  - Mobile: `--space-3xl`  
  - Tablet: `--space-4xl`  
  - Desktop+: `--space-4xl` to `--space-5xl`  

### 9.4 Grids

| Component | Mobile | Tablet | Laptop+ |
|-----------|--------|--------|---------|
| Hero | 1 col, image first or second per design (recommend image first on mobile for impact) | 1 col | 2 col |
| About | 1 col | 1 col | 2 col |
| Projects | 1 col | 2 col | 2 col |
| Services | 1 col | 2 col | 4 col |
| Contact | 1 col | 1 col | 2 col |
| Footer | stacked | 2 col | 4 col |

### 9.5 Navbar

- Mobile: hide inline links, show hamburger  
- Tablet: optionally collapse to hamburger until laptop  
- Laptop+: full horizontal nav; may hide less critical links in overflow menu if needed (prefer full list with smaller gap)  

### 9.6 Timeline

- Mobile: line left, cards full width  
- Laptop+: alternating cards  

### 9.7 Touch Targets

- Minimum 44×44px for all interactive elements on touch devices  

### 9.8 Images

- Hero image: width 70vw max on mobile, fixed max on desktop  
- Use `srcset` / `sizes` for profile and project images  

---

## 10. UI Behaviors

| Interaction | Behavior |
|-------------|----------|
| Nav link click | Smooth scroll to section, close drawer, set active state |
| Scroll | Navbar adds `is-scrolled`; back-to-top fades in after 400px |
| Hire Me | Navigate to `#contact` |
| View Projects | Navigate to `#projects` |
| Download CV | Download PDF; if missing, show toast "CV coming soon" |
| Social icons | Open new tab, `rel="noopener noreferrer"` |
| Theme toggle | Swap theme, icon morph, persist storage |
| Project GitHub | External link placeholder until URLs added |
| Slider dots | Jump to slide, reset autoplay timer |
| Hover (pointer fine) | Cards lift, glow intensifies |
| Focus | Visible outline 2px primary offset 2px |

---

## 11. JavaScript Behaviors

### 11.1 Module Load Order (`main.js`)

1. `prefers-reduced-motion` guard flags  
2. `theme.js` — apply before paint if possible (inline script in `<head>` optional for FOUC)  
3. `navbar.js` + `mobile-menu.js`  
4. `smooth-scroll.js`  
5. `background-canvas.js` or CSS-only fallback  
6. `typing-effect.js`  
7. `scroll-reveal.js`  
8. `count-up.js`  
9. `progress-animate.js`  
10. `testimonials-slider.js`  
11. `parallax.js`  
12. `magnetic-buttons.js`, `mouse-glow.js`, `custom-cursor.js` (desktop)  
13. `back-to-top.js`  

### 11.2 APIs & Patterns

- ES modules: `<script type="module" src="assets/js/main.js">`  
- No global pollution except optional `window.__PORTFOLIO__` debug  
- Event delegation where lists are static  
- `IntersectionObserver` for reveal, count-up, progress  
- `matchMedia` for breakpoint-specific JS (cursor, parallax)  

### 11.3 Active Section Spy

- On scroll, compare section bounding rects to viewport center; highlight matching nav link  
- `aria-current="page"` on active anchor  

### 11.4 Testimonials Slider Logic

- State: `currentIndex`, `totalSlides`, `autoplayId`  
- Touch: pointer down/up swipe threshold 50px  
- Keyboard: left/right when slider focused  
- Dots: `role="tablist"`, slides `role="tabpanel"`  

### 11.5 Typing Effect Logic

- Array of strings in `config.js`  
- DOM: `<span data-js="typing"></span><span class="c-typing-cursor">|</span>`  

### 11.6 Error Handling

- Fail silent for enhancements; core navigation works without JS  

---

## 12. CSS Architecture

### 12.1 Import Order (`main.css`)

1. tokens/*  
2. base/*  
3. themes/light (default variables on `:root`)  
4. themes/dark (`[data-theme="dark"]`)  
5. layout/*  
6. components/*  
7. sections/*  
8. effects/*  
9. utilities/*  

### 12.2 Specificity Policy

- Avoid `!important` except utilities or reduced-motion overrides  
- Component styles self-contained; section files only layout composition  

### 12.3 Custom Properties

- All colors, spacing, fonts via variables for theme swap  
- Components consume tokens, never hardcode hex except in token files  

### 12.4 Z-Index Scale

| Layer | z-index |
|-------|---------|
| Background | 0 |
| Content | 1 |
| Sticky nav | 1000 |
| Drawer overlay | 1100 |
| Drawer panel | 1101 |
| Back to top | 900 |
| Custom cursor | 9999 |

---

## 13. Accessibility Rules

### 13.1 Semantic Structure

- `<header>`, `<nav>`, `<main>`, `<section aria-labelledby="...">`, `<footer>`  
- Each section h2 has `id` matching `aria-labelledby`  

### 13.2 Keyboard

- All interactive elements focusable and visible focus ring  
- Drawer: roving tabindex or focus trap  
- Skip link first focusable element  

### 13.3 ARIA

- Mobile menu button: `aria-expanded`, `aria-controls="mobile-drawer"`  
- Icon-only buttons: `aria-label`  
- Slider: `aria-live="polite"` for slide changes  
- Decorative background: `aria-hidden="true"`  

### 13.4 Images

- Meaningful `alt` on profile and projects  
- Decorative shapes: empty alt or CSS-only  

### 13.5 Motion

- Honor `prefers-reduced-motion` (see §7.2)  

### 13.6 Form

- Contact uses mailto/wa links — no form required; if contact form added later, label all fields  

---

## 14. SEO Rules

### 14.1 Meta (in `<head>`)

```html
<title>Mustafa Ahmed | Flutter Developer & Software Engineer</title>
<meta name="description" content="Portfolio of Mustafa Ahmed — Flutter developer building high-performance apps with clean architecture, Firebase, and beautiful UI. Available for hire.">
<meta name="author" content="Mustafa Ahmed">
<link rel="canonical" href="https://YOUR-DOMAIN.com/">
<meta name="robots" content="index, follow">
<meta name="theme-color" content="#1B4EF5">
```

### 14.2 Open Graph

- `og:type` website  
- `og:title`, `og:description`, `og:url`, `og:image` (1200×630)  
- `og:locale` en_US  

### 14.3 Twitter Card

- `summary_large_image`  
- Same title, description, image  

### 14.4 Schema.org JSON-LD

Include `@type: Person` with:

- `name`, `jobTitle`: Flutter Developer  
- `email`, `telephone`  
- `url`, `sameAs` array (social URLs)  
- `knowsAbout`: Flutter, Dart, Firebase, Mobile Development  

Optional `WebSite` with `potentialAction` SearchAction if search added later.

### 14.5 Content

- Single clear H1 with full name  
- Logical heading order without skips  

---

## 15. Performance Rules

### 15.1 Loading

- `loading="lazy"` on below-fold images  
- Hero profile: `loading="eager"`, `fetchpriority="high"`  
- Preload hero WebP  
- Defer non-critical JS modules  

### 15.2 CSS

- Single bundled CSS or limited imports to reduce requests  
- Remove unused rules in production optional pass  

### 15.3 JavaScript

- No heavy libraries  
- Particle count capped; pause off-screen animations  
- Throttle scroll handlers  

### 15.4 Images

- WebP primary, PNG/JPEG fallback via `<picture>`  
- Width descriptors in srcset (400, 800, 1200)  

### 15.5 Fonts

- `display=swap`  
- Subset weights only (listed in §5.1)  

### 15.6 Lighthouse Targets (guidance)

- Performance ≥ 90  
- Accessibility ≥ 95  
- Best Practices ≥ 95  
- SEO ≥ 95  

---

## 16. Asset Requirements

### 16.1 Required Images

| Asset | Dimensions | Notes |
|-------|------------|-------|
| Profile hero | 800×800 min | Circular mask, professional photo |
| Smart Chess | 1200×750 | App/screenshot mock |
| E-Commerce App | 1200×750 | App/screenshot mock |
| Testimonial avatar | 200×200 | Nour El-Din or placeholder |
| OG image | 1200×630 | Name, title, brand colors |

### 16.2 Vectors

- Logo SVG monogram  
- Wave divider SVG (inline in HTML for animation)  
- Optional Flutter-like shapes as inline SVG in background layer  

### 16.3 Files

- CV PDF: `assets/files/mustafa-ahmed-cv.pdf`  
- `site.webmanifest` with icons 192, 512  
- `robots.txt`, `sitemap.xml` with production domain  

### 16.3 CDN Dependencies

- Google Fonts (§5.1)  
- Lucide: `https://unpkg.com/lucide@latest` + `lucide.createIcons()` or SVG sprite  
- Font Awesome fallback (optional): kit or CDN css  

---

## 17. Development Guidelines

### 17.1 Build Phases (Recommended for Cursor AI)

**Phase A — Foundation**

- Folder structure, tokens, reset, themes, container, typography  
- Background static layer + navbar + footer shell  

**Phase B — Core Sections**

- Hero (without heavy JS), About, Education, Experience, Skills  
- Wave divider  

**Phase C — Rich Sections**

- Projects, Services, Contact  
- Glass components polish  

**Phase D — Motion & JS**

- Typing, scroll reveal, count-up, progress, slider  
- Theme persistence  

**Phase E — Premium Effects**

- Particles, mouse glow, magnetic buttons, custom cursor, parallax  
- Reduced-motion pass  

**Phase F — SEO, A11y, Performance**

- Meta, JSON-LD, lazy loading, audit fixes  

### 17.2 Quality Checklist

- [ ] All five breakpoints visually verified  
- [ ] Dark/light parity on every section  
- [ ] Keyboard nav complete tour  
- [ ] No horizontal scroll on mobile  
- [ ] External links secure  
- [ ] GitHub/demo links updated or clearly placeholder  
- [ ] CV download works or graceful message  
- [ ] Lighthouse run documented  

### 17.3 Copy Tone

- Professional, confident, concise  
- First person in About/Hero; third person acceptable in testimonials  

### 17.4 Git Conventions (if used)

- `feat:`, `fix:`, `style:`, `perf:` conventional commits  
- Do not commit secrets or `.env`  

### 17.5 Browser Support

- Last 2 versions Chrome, Firefox, Safari, Edge  
- Graceful degradation: backdrop-filter fallback solid semi-opaque surface  

### 17.6 Definition of Done

The portfolio is **done** when:

1. All sections from §8 are implemented with content specified herein  
2. Design system tokens drive all visual decisions  
3. Animations match §7 with reduced-motion alternatives  
4. Responsive rules in §9 pass manual testing  
5. Accessibility §13 and SEO §14 artifacts present  
6. Performance §15 techniques applied  

---

## Appendix A — Hero Copy Block (Final Reference)

**Greeting:** Hello, I'm  

**Name:** Mustafa (solid) + Ahmed (gradient cyan → blue → purple)  

**Roles (typing):** Flutter Developer | Software Engineer | Mobile App Developer | UI/UX Enthusiast  

**Paragraph:**  
Flutter developer crafting high-performance mobile applications with clean architecture and expressive UI. Proficient in state management, REST APIs, Firebase integration, and shipping polished cross-platform experiences.

**CTAs:** Hire Me → `#contact` | View Projects → `#projects`  

---

## Appendix B — CSS Variable Starter (Implement in `_root.css`)

```css
:root {
  --color-primary: #1B4EF5;
  --color-secondary: #3874FF;
  --color-accent: #5996FF;
  --color-bg: #F5F7FC;
  --color-text: #0F172A;
  --color-text-muted: #64748B;
  --gradient-brand: linear-gradient(135deg, #22D3EE, #1B4EF5, #9333EA);
  --font-heading: "Plus Jakarta Sans", system-ui, sans-serif;
  --font-body: "Inter", system-ui, sans-serif;
}

[data-theme="dark"] {
  --color-primary: #4D7CFF;
  --color-secondary: #5996FF;
  --color-accent: #6BB0FF;
  --color-bg: #070B14;
  --color-text: #F1F5F9;
  --color-text-muted: #94A3B8;
}
```

---

## Appendix C — Config Constants (`config.js`)

```javascript
export const TYPING_ROLES = [
  "Flutter Developer",
  "Software Engineer",
  "Mobile App Developer",
  "UI/UX Enthusiast",
];

export const NAV_OFFSET = 72;
export const SLIDER_AUTOPLAY_MS = 5000;
export const STORAGE_THEME_KEY = "portfolio-theme";

export const SOCIAL_LINKS = {
  facebook: "https://www.facebook.com/share/1atE9Py1z5/",
  instagram: "https://www.instagram.com/mustafaahmedkasem",
  linkedin: "https://www.linkedin.com/in/mustafa-ahmed-9a77353b4",
  whatsapp: "https://wa.me/qr/S233W5CHVNNIF1",
};

export const CONTACT = {
  email: "mustafaahmadkasem@gmail.com",
  phone: "01102495288",
};
```

---

**End of Protofile v1.0.0** — Ready for Cursor AI implementation without additional product discovery.
