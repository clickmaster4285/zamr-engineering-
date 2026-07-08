# ZAMR Engineering — Planner + UI/UX Expectations

> **Source:** Figma design (`About Us Page` frame, node-id=599-3707)
> **Color Scheme:** `app/globals.css` — all colors in oklch, referenced via CSS custom properties
> **Last Updated:** July 6, 2026

---

## 1. Project Overview

A corporate website for **ZAMR Engineering**, a Sydney-based civil engineering consultancy. The site follows a single-page-landing layout (homepage) with dedicated subpages for About, Services, and Projects.

### Routes

| Route           | Sections                                                          | Status                            |
| --------------- | ----------------------------------------------------------------- | --------------------------------- |
| `/` (Landing) | Hero, About, Services, Projects, Why ZAMR, Contacts, Footer       | ✅ Implemented                    |
| `/about`      | Hero, About, Stats, Structure, Performance, Footer                | ✅ Implemented (needs refinement) |
| `/services`   | Hero, Why ZAMR, Contact                                           | ⚠️ Needs refinement             |
| `/projects`   | Hero, Overview, Capabilities, Process, Deliverables, Related Work | ⚠️ Needs refinement             |

---

## 2. 🎨 Design System (from `app/globals.css`)

### Colors — all defined as CSS custom properties in oklch

| Token                       | oklch Value                  | Visual               | Usage                                                |
| --------------------------- | ---------------------------- | -------------------- | ---------------------------------------------------- |
| `--color-primary`         | `oklch(0.254 0.07 266.5)`  | Deep navy blue       | Headings, buttons, links, section numbers            |
| `--color-primary-hover`   | `oklch(0.226 0.061 265.4)` | Darker navy          | Button hover states                                  |
| `--color-secondary`       | `oklch(0.696 0.102 78)`    | Gold/yellow          | Underlines, hover borders, icons, decorative accents |
| `--color-secondary-light` | `oklch(0.785 0.091 75.7)`  | Light gold           | Lighter decorative accents                           |
| `--bg-hero`               | `oklch(0.159 0.042 264.8)` | Near-black navy      | Hero backgrounds, dark sections, footer overlays     |
| `--bg-light`              | `oklch(0.979 0.006 264.4)` | Very light blue-gray | Section backgrounds (About, Services, Contacts)      |
| `--bg-light-alt`          | `oklch(0.985 0.003 264.4)` | Slightly lighter     | Alternative section bg                               |
| `--text-dark`             | `oklch(0.321 0 0)`         | Dark gray            | Body text                                            |
| `--text-muted`            | `oklch(0.417 0 0)`         | Medium gray          | Secondary text, labels                               |
| `--text-light`            | `oklch(0.757 0 0)`         | Light gray           | Nav links on hero                                    |
| `--border-light`          | `oklch(0.937 0 0)`         | Light gray           | Dividers                                             |
| `--background`            | `oklch(1 0 0)`             | White                | Page background                                      |

> **⚠️ Rule:** Always use `var(--token-name)` in component files. Never hardcode color values.

### Typography

- **Font:** Outfit (via `next/font`), loaded in root layout
- **Weights used:** 300 (light), 400 (regular), 500 (medium), 600 (semibold), 700 (bold)
- **Section headings:** 56px / bold (landing), 44px (subpages), 80px (about hero)
- **Body text:** 16–20px / 400 weight / 1.5–1.75 line-height

### Spacing System

- **Section padding (desktop):** px-6 / lg:px-32 horizontally, py-24 / lg:py-32 vertically
- **Section padding (About subpage Figma):** 130px all sides (about page), 130px all sides (stats)
- **Gap between section number and label:** 16px
- **Underline accent width:** 32px (landing) / 104px (about subpage) — secondary color

---

## 3. 📐 About Us Page — Detailed UI/UX Specs

Extracted from the Figma CSS provided. Each section references its exact Figma measurements.

### 3.1 Hero Section

| Property                 | Figma Spec                                                                                      |
| ------------------------ | ----------------------------------------------------------------------------------------------- |
| **Container**      | 1728 × 700px, 100px from top (under navbar)                                                    |
| **Background**     | `rgba(7, 24, 61, 0.8)` overlay over image                                                     |
| **Heading**        | "About ZAMR Engineering" — 80px / 700 bold / 101px line-height / white                         |
| **Subtitle**       | "A Sydney-based civil engineering consultancy..." — 18px / 500 / 23px line-height /`#B0B0B0` |
| **Alignment**      | Left-aligned, 130px from left edge (matches navbar logo padding)                                |
| **Text container** | 933px wide, vertically centered in remaining space                                              |

**Current Implementation Check:**

- ✅ Uses image overlay with dark overlay
- ❌ Heading is `text-[36px]` (should be `text-[80px]`)
- ❌ Subtitle is `text-[14px]` (should be `text-[18px]`)
- ❌ Padding doesn't match Figma's 130px left offset

### 3.2 About Section (#01 — ABOUT US)

| Property                                               | Figma Spec                                                                                                                     |
| ------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| **Container**                                    | 1728 × 692px, bg`#F6F8FC` (→ `var(--bg-light)`)                                                                          |
| **Padding**                                      | 130px all around                                                                                                               |
| **Grid**                                         | 2-column: 352px (left) / 989px (right), gap 135px                                                                              |
| **Section label row**                            | "01" at 16px/500/3px letter-spacing / primary blue + 104px black line + "ABOUT US" at 16px/500/3px letter-spacing /`#333333` |
| **Left heading**                                 | "Built on Precision & Reliability" — 44px / 700 / 55px line-height /`#333333`                                               |
| **Underline**                                    | 133px line in`#CE1A00` (→ `var(--color-secondary)`)                                                                       |
| **Right column text**                            | 3 paragraphs — 20px / 400 / 25px line-height /`#333333`                                                                     |
| **Divider**                                      | `1px solid #333333` across full width                                                                                        |
| **3 Pillars (Precision, Integrity, Innovation)** | 32px / 400 / 40px line-height / primary blue + 16px / 300 / 20px line-height /`#333333` description                          |

**Current Implementation Check:**

- ✅ Section number uses `var(--color-primary)`
- ✅ Content structure matches roughly
- ❌ Padding uses `px-6 py-36 lg:px-30` — Figma says 130px
- ❌ Left heading is `text-[46px] sm:text-[54px]` — Figma says 44px
- ❌ Body text is smaller than Figma's 20px
- ❌ "ABOUT US" label letter-spacing is `tracking-[0.2em]` — Figma says `3px` (0.188em at 16px)
- ❌ Underline width is inconsistent with Figma's 133px

### 3.3 Stats Section (#02 — STATS)

| Property                    | Figma Spec                                                                                                      |
| --------------------------- | --------------------------------------------------------------------------------------------------------------- |
| **Container**         | 1728 × 453px, bg`#07183D` (→ `var(--bg-hero)`)                                                            |
| **Padding**           | 130px all around                                                                                                |
| **Section label row** | "02" at 16px/500/3px letter-spacing / white + 104px white line + "STATS" at 16px/500/3px letter-spacing / white |
| **Content**           | 3 equally-spaced stats: 150+, 12+, 98%                                                                          |
| **Number style**      | 72px / 400 / 91px line-height / white                                                                           |
| **Suffix (+ or %)**   | 42px / 300 / Urbanist font / white                                                                              |
| **Label style**       | 16px / 300 / 20px line-height / white                                                                           |
| **Stat alignment**    | Left / Center / Right across the 3 columns                                                                      |
| **Gap between stats** | 185px                                                                                                           |

**Current Implementation Check:**

- ✅ Stats numbers, labels, and alignment match
- ❌ Section label doesn't use the Figma letter-spacing/weight
- ❌ Padding doesn't match Figma's 130px
- ❌ Font for suffix says "Urbanist" in Figma (not Outfit)
- ❌ Gap between stats is not 185px

### 3.4 Organizational Structure (#03 — STRUCTURE)

| Property                          | Figma Spec                                                                          |
| --------------------------------- | ----------------------------------------------------------------------------------- |
| **Container**               | 1728 × 1273px, bg white                                                            |
| **Padding**                 | 130px all sides                                                                     |
| **MD Box**                  | 271.8 × 112.25px, bg`#4CAFEA` (operational), centered                            |
| **External Boxes (right)**  | 3 boxes: Quality Support, Cost Estimating, Contract Administration — bg`#B7C5E4` |
| **Connectors**              | Rounded paths, 3px stroke,`#007CD9`, with arrows                                  |
| **Design Manager**          | `#2C70B9` (technical)                                                             |
| **Operational Director**    | `#4CAFEA` (operational)                                                           |
| **Sub-headers (row)**       | 7 sub-headers at y=290, bg by type                                                  |
| **Bullet boxes**            | Below sub-headers, y=348, h=100, bg by type                                         |
| **Subcontractors**          | Bottom row                                                                          |
| **Chart coordinate system** | 900 × 560px                                                                        |

**Current Implementation Check:**

- ✅ Chart rendered as SVG with connectors
- ✅ Different colors for technical/operational/external
- ❌ Colors don't match Figma (`#3F6FB4` vs `#2C70B9`, `#67ADE5` vs `#4CAFEA`, `#BAC5E1` vs `#B7C5E4`)
- ❌ Section labels don't use CSS variables yet
- ❌ Padding layout differs from Figma

### 3.5 Performance Section (#04 — PERFORMANCE)

| Property                | Figma Spec                                                |
| ----------------------- | --------------------------------------------------------- |
| **Container**     | bg white (not light gray — current code uses`#F7F8FC`) |
| **Section label** | "04" / line / "PERFORMANCE"                               |
| **Title**         | "Revenue & Performance"                                   |
| **Left chart**    | Horizontal bar chart — revenue by service                |
| **Right chart**   | Area chart — 4-year growth trend + 4 stat boxes          |

**Current Implementation Check:**

- ✅ Charts use Recharts (BarChart + AreaChart)
- ✅ Data matches what's shown
- ❌ Background should be white, not gray
- ❌ Colors use `#1D4ED8` and `#1E3A8A` — should use `var(--color-primary)`
- ❌ Section label doesn't use CSS variables

---

## 4. 🧱 Components Architecture — Figma to Code Mapping

### Landing Page (`/`)

| Section # | Component     | Figma Layer                    | Notes            |
| --------- | ------------- | ------------------------------ | ---------------- |
| —        | NavigationBar | Header + Frame 114 + Frame 115 | ✅ Done          |
| —        | Hero          | Hero                           | In progress      |
| 01        | About         | Frame 120 + 119                | ✅ Uses CSS vars |
| 02        | Services      | Services                       | ✅ Uses CSS vars |
| 03        | Projects      | Projects                       | ✅ Uses CSS vars |
| 04        | Why ZAMR      | Why ZAMR Engineering           | ✅ Uses CSS vars |
| 05        | Contacts      | Contact                        | ✅ Uses CSS vars |
| —        | Footer        | Footer                         | ✅ Done          |

### About Page (`/about`)

| Section # | Component     | Figma Layer              | Status                |
| --------- | ------------- | ------------------------ | --------------------- |
| —        | Navbar (same) | Header                   | ✅ Done               |
| —        | Hero          | Hero (700px)             | ⚠️ Needs update     |
| 01        | About         | ABOUT US section         | ⚠️ Needs refinement |
| 02        | Stats         | Stats (dark bg)          | ⚠️ Needs refinement |
| 03        | Structure     | Organizational Structure | ⚠️ Needs refinement |
| 04        | Performance   | Performance              | ⚠️ Needs refinement |
| —        | Footer (same) | Footer                   | ✅ Done               |

---

## 5. 📋 Implementation Roadmap

### Phase 1: Foundation ✅ (Complete)

- [X] Project setup (Next.js 16, Tailwind v4, TypeScript)
- [X] Design tokens in `app/globals.css` (oklch)
- [X] Font loading (Outfit via `next/font`)
- [X] Navbar (matching Figma spec)
- [X] Footer (landing + about)

### Phase 2: Landing Page ✅ (Complete)

- [X] Hero
- [X] About (01) — CSS variables applied
- [X] Services (02) — CSS variables applied
- [X] Projects (03) — CSS variables applied
- [X] Why ZAMR (04) — CSS variables applied
- [X] Contacts (05) — CSS variables applied

### Phase 3: About Subpage 🔄 (In Progress)

- [ ] Refine Hero — match Figma 80px heading, 18px subtitle, 130px padding
- [ ] Refine About section — match Figma spacing, font sizes, pillar layout
- [ ] Refine Stats — match Figma letter-spacing, padding, gap
- [ ] Refine Structure — update org chart colors to Figma spec
- [ ] Refine Performance — use CSS vars for all colors, white bg
- [ ] Ensure all sections use `var(--)` from globals.css

### Phase 4: Services Subpage ⏳ (Pending)

- [ ] Update all colors to CSS variables
- [ ] Match any Figma specs

### Phase 5: Projects Subpage ⏳ (Pending)

- [ ] Update all colors to CSS variables
- [ ] Match any Figma specs

### Phase 6: Polish ⏳ (Pending)

- [ ] Responsive testing across breakpoints
- [ ] Animation/transition refinement
- [ ] Form submission integration
- [ ] Performance optimization

---

## 6. 📏 UI/UX Principles & Rules

### Spacing

- **Section vertical padding:** 130px (subpages, per Figma) or 96px–128px (landing)
- **Inner content max-width:** 1728px (Figma artboard width)
- **Left padding for text:** 130px from left edge (matches logo position)
- **Gap between label row items:** 16px

### Section Labels

```
Pattern: [##] ──── [LABEL]
```

- Number: 16px / 500 weight / letter-spacing 3px / primary color (or white on dark bg)
- Line: `h-px` divider, 104px wide (subpages) / 96px wide (landing)
- Label text: 16px / 500 weight / uppercase / letter-spacing 3px / dark gray

### Typography Scale

| Element                    | Size | Weight | Line Height |
| -------------------------- | ---- | ------ | ----------- |
| Hero title (about)         | 80px | 700    | 101px       |
| Section heading (landing)  | 56px | 700    | 71px        |
| Section heading (subpages) | 44px | 700    | 55px        |
| Pillar title               | 32px | 400    | 40px        |
| Body text                  | 20px | 400    | 25px        |
| Section label              | 16px | 500    | 20px        |
| Nav links                  | 14px | 500    | 18px        |
| Stats number               | 72px | 400    | 91px        |
| Stats label                | 16px | 300    | 20px        |

### Interactive States

- **Links:** color transition on hover (300ms ease)
- **Buttons:** bg/text color swap on hover
- **Cards:** subtle lift effect (translateY -2px) + shadow increase
- **Accent underline:** secondary color (gold `var(--color-secondary)`)

### Recurring Section Pattern

```
┌─────────────────────────────────────┐
│  [##] ────────── LABEL              │  ← 16px / 500 / letter-spacing 3px
│                                     │
│  Heading (primary color)            │  ← 44–56px / 700 bold
│  ──── (underline accent, 32–133px) │  ← secondary (gold)
│                                     │
│  ┌─────────────────────────────┐    │
│  │ Content (20px body text)     │    │
│  └─────────────────────────────┘    │
│                                     │
│  ─────────────────────────────────  │  ← divider
│                                     │
│  [Item 1]    [Item 2]    [Item 3]   │  ← grid of stats/features
└─────────────────────────────────────┘
```

---

## 7. ✅ Coding Conventions

### Color Usage

```css
/* GOOD — uses CSS variable */
className="text-[var(--color-primary)]"

/* BAD — hardcoded hex */
className="text-[#132044]"

/* BAD — hardcoded oklch */
className="text-[oklch(0.254 0.07 266.5)]"
```

### Font

- No need to re-instantiate `Outfit` in individual components (already in root layout)
- Use Tailwind font utilities or just rely on body font inheritance

### Component Structure

- Use `"use client"` only when needed (state, effects, event handlers)
- Static content components should be Server Components by default

### Spacing

- Use Tailwind spacing utilities (px-6, py-24, gap-8, etc.)
- Reference Figma pixel values via the spacing system
- Document Figma-specific measurements as comments when deviating

---

## 8. ⏳ Known Issues to Track

1. **About page Hero** — heading size, subtitle size, and padding don't match Figma
2. **About page About section** — padding, typography, and pillar layout need updates
3. **Stats section** — letter-spacing, padding, gap, and Urbanist font for suffixes
4. **Structure chart** — colors need updating to match Figma (`#2C70B9`, `#4CAFEA`, `#B7C5E4`)
5. **Performance section** — bg should be white, colors should use CSS vars
6. **Services subpage** — still has hardcoded old blue (`#405BAD`)
7. **Projects subpage** — still has hardcoded old blue (`#14213D`)
8. **Outfit font re-instantiated** in `components/About/About.tsx` — unnecessary
9. **All subpages** should eventually use `var(--)` from globals.css consistently
