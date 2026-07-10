# ZAMR Engineering — Project Knowledge Base

This file documents the project's architecture, conventions, file structure, color system, and rules. Refer to it before making changes.

---

## 📁 Project Folder Structure

```
zamr-engineering/
├── app/                          # Next.js App Router pages
│   ├── layout.tsx                # Root layout (Outfit font, NavigationBar + Footer)
│   ├── page.tsx                  # Landing / Home page
│   ├── globals.css               # Global styles + all CSS custom properties
│   ├── about/
│   │   └── page.tsx              # About page
│   ├── services/
│   │   ├── page.tsx              # Services listing
│   │   └── [id]/
│   │       └── page.tsx          # Service detail page (uses mockData/services.ts)
│   ├── projects/
│   │   ├── page.tsx              # Projects listing (uses mockData/projects.ts)
│   │   └── [id]/
│   │       └── page.tsx          # Project detail page (uses mockData/projects.ts)
│   └── why-zamr-engineering/
│       └── page.tsx              # Why ZAMR page
├── components/
│   ├── ui/                       # Shared UI primitives
│   │   └── button.tsx
│   ├── landing/                  # Landing page sections
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── Projects.tsx
│   │   ├── WhyZamr.tsx
│   │   ├── Contacts.tsx
│   │   ├── NavigationBar.tsx
│   │   └── Footer.tsx
│   ├── About/                    # About page sections
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Stat.tsx
│   │   ├── Structure.tsx
│   │   └── Performance.tsx
│   ├── services/                 # Services listing page sections
│   │   ├── Hero.tsx
│   │   ├── WhyZamar.tsx
│   │   ├── Contact.tsx
│   │   └── detail/               # Service detail page sections
│   │       ├── ProjectHero.tsx
│   │       ├── Overview.tsx
│   │       ├── Capabilities.tsx
│   │       ├── Process.tsx
│   │       ├── Deliverables.tsx
│   │       └── RelatedWork.tsx
│   ├── projects/
│   │   └── detail/               # Project detail page sections
│   │       ├── ProjectHero.tsx
│   │       ├── Challenge.tsx
│   │       ├── Approach.tsx
│   │       ├── Results.tsx
│   │       ├── Gallery.tsx
│   │       ├── StatsBar.tsx
│   │       └── Contact.tsx
│   └── why-zamr/                 # Why ZAMR page sections
│       ├── Hero.tsx
│       ├── HowWeWork.tsx
│       ├── OurStrengths.tsx
│       ├── Commitment.tsx
│       ├── Process.tsx
│       ├── TrackRecord.tsx
│       └── CTASection.tsx
├── mockData/                     # 🔥 All static data (NO hardcoded data in components)
│   ├── landing.ts                # Landing page: hero, aboutStats, servicesPreview, navLinks, footer
│   ├── about.ts                  # About page: hero, pillars, stats, orgChart, performanceData
│   ├── services.ts               # Service detail data + servicesHero + whyZamrFeatures
│   ├── projects.ts               # Project detail data + projectFilters + projectsHeroStats + howWeDeliver
│   └── why-zamr.ts               # Why ZAMR page: hero, howWeWork, strengths, commitment, process, cta
├── lib/
│   └── utils.ts                  # Utility helpers (cn, etc.)
├── public/
│   ├── images/                   # Static images
│   ├── videos/                   # Background videos
│   └── icons/                    # SVG icons
├── package.json
├── tsconfig.json
├── next.config.ts
├── postcss.config.mjs
├── components.json               # shadcn/ui config
├── eslint.config.mjs
├── CLAUDE.md                     # Claude-specific instructions
├── AGENTS.md                     # THIS FILE — agent knowledge base
└── README.md
```

---

## 🎨 Color System (globals.css)

**⚠️ RULE:** All colors are defined as CSS custom properties in `globals.css` under `:root`. Component files MUST use `var(--token-name)` — never hardcode hex/oklch/rgb values.

### Primary Palette

| Token | Value | Usage |
|-------|-------|-------|
| `--color-primary` | oklch(0.254 0.07 266.5) | Buttons, headings, links, section numbers |
| `--color-primary-hover` | oklch(0.226 0.061 265.4) | Button hover state |
| `--color-secondary` | oklch(0.696 0.102 78) | Navbar active link, hover accent bars, underlines, icons, diamonds |
| `--color-secondary-light` | oklch(0.785 0.091 75.7) | Lighter secondary accents |
| `--color-accent` | var(--color-secondary) | Alias for secondary (yellow) |
| `--color-accent-light` | var(--color-secondary-light) | Alias for secondary light |

### Blue Variants

| Token | Value | Usage |
|-------|-------|-------|
| `--color-blue-accent` | oklch(0.296 0.101 268.4) | Section numbers, tags, metric values |
| `--color-blue-header` | oklch(0.266 0.104 268.1) | Header bars, chart primary, card titles |
| `--color-blue-label` | oklch(0.287 0.102 267.8) | Contact info labels |
| `--color-chart-bar-1` | oklch(0.408 0.157 268.2) | Chart bar (Civil Engineering) |
| `--color-chart-bar-2` | oklch(0.491 0.167 267.5) | Chart bar (Road Infrastructure) |
| `--color-chart-bar-3` | oklch(0.555 0.157 268.4) | Chart bar (Renewable Energy) |
| `--color-chart-bar-4` | oklch(0.61 0.127 266.8) | Chart bar (TfNSW Compliance) |
| `--color-blue-struct-tech` | oklch(0.48 0.115 261.5) | Org chart — Technical Team |
| `--color-blue-struct-ops` | oklch(0.675 0.115 246.7) | Org chart — Operational Team |
| `--color-blue-struct-ext` | oklch(0.782 0.045 259.7) | Org chart — External Team |
| `--color-blue-struct-line` | oklch(0.478 0.156 250.4) | Org chart — connector lines |

### Backgrounds

| Token | Value | Usage |
|-------|-------|-------|
| `--bg-light` | oklch(0.979 0.006 264.4) | Default section background (very light blue) |
| `--bg-light-alt` | oklch(0.985 0.003 264.4) | Alternate light background |
| `--bg-hero` | oklch(0.159 0.042 264.8) | Hero sections, dark sections (very dark blue) |
| `--bg-section` | oklch(0.97 0.004 264.4) | Section alternate backgrounds (#F6F8FC) |
| `--bg-card` | oklch(0.956 0.005 264.4) | Card backgrounds (#EFF4FC) |
| `--bg-hover` | oklch(0.976 0.002 264.4) | Hover state (#F9FAFC) |

### Text Colors

| Token | Value | Usage |
|-------|-------|-------|
| `--text-dark` | oklch(0.321 0 0) | Body text on light backgrounds (#333) |
| `--text-muted` | oklch(0.417 0 0) | Muted body text |
| `--text-light` | oklch(0.757 0 0) | Light text on dark backgrounds |
| `--text-contact` | oklch(0.254 0.07 266.5) | Contact section headings |
| `--text-heading` | oklch(0.105 0.016 264.2) | Very dark headings (#090D15) |
| `--text-paragraph` | oklch(0.285 0.023 258.3) | Paragraph text (#344153) |
| `--text-soft` | oklch(0.487 0.022 258.3) | Muted/meta text (#697281) |
| `--text-label` | oklch(0.649 0.022 258.3) | Form labels (#9AA3B0) |
| `--text-light-subtle` | oklch(0.72 0 0) | Light text on dark (#B3B3B3) |

### Image Overlays

| Token | Value | Usage |
|-------|-------|-------|
| `--overlay-image-default` | oklch(0 0 0 / 0.3) | Black 30% over image cards |
| `--overlay-image-hover` | oklch(0.254 0.07 266.5 / 0.5) | Blue 50% on image hover |
| `--overlay-image-hero` | oklch(0.254 0.07 266.5 / 0.8) | Blue 80% over hero images |

### Borders

| Token | Value | Usage |
|-------|-------|-------|
| `--border-light` | oklch(0.937 0 0) | Light borders |
| `--border-input` | oklch(0.254 0.07 266.5 / 0.18) | Form input borders |
| `--border-section` | oklch(0.925 0 0) | Section dividers (#EAEAEA) |
| `--border-table` | oklch(0.951 0.004 264.4) | Table row borders (#EEF0F8) |

---

## 📦 mockData Architecture

All static/page data lives in `mockData/` files. Components import and use data from these files — NO hardcoded strings/arrays/objects in components.

| File | Contents | Used By |
|------|----------|---------|
| `mockData/landing.ts` | heroContent, aboutStats, aboutParagraphs, servicesPreview, serviceTagRows, projectFilters, clientLogos, whyZamrPoints, contactInfo, navLinks, footerQuickLinks, footerServiceLinks, footerContactInfo | All `components/landing/*` + NavigationBar + Footer |
| `mockData/about.ts` | heroContent, pillars, aboutParagraphs, stats, orgChart data (COLORS, boxes, subHeaders, nameCards), performance data (revenueByService, growthTrend, growthStats) | All `components/About/*` |
| `mockData/services.ts` | ServiceData (detail), servicesHero, whyZamrFeatures + getServiceBySlug() | `components/services/*`, `app/services/[id]/page.tsx` |
| `mockData/projects.ts` | ProjectData (detail), projectFilters, projectsHeroStats, projectsHowWeDeliver, projectsContactInfo + getProjectBySlug() | `components/projects/detail/*`, `app/projects/page.tsx`, `app/projects/[id]/page.tsx` |
| `mockData/why-zamr.ts` | heroContent, howWeWorkRows, ourStrengths, commitmentCards, processItems, trackRecordStats, ctaContent | All `components/why-zamr/*` |

---

## 🧩 Architectural Rules

### 1. No hardcoded data in components
All static text, arrays, and objects MUST live in `mockData/` files and be imported. Components should only contain JSX, logic, and event handlers.

### 2. Always use CSS custom properties for colors
Use `var(--token-name)` from globals.css. Never hardcode hex (`#CE1A00`), rgb, or oklch values in component files. Exception: inline SVG fills that need specific colors may use `currentColor` or reference vars.

### 3. Use the `@/` path alias
- `@/mockData/...` for data files
- `@/components/...` for component imports
- `@/lib/...` for utility functions

### 4. Component naming convention
- Files use PascalCase matching the exported function name
- Page components are default exports
- Props interfaces are named `Props` (local) or exported

### 5. Landing Services.tsx — Accent Bar Pattern (reference design)
The accent bar in `components/landing/Services.tsx` shows the correct hover pattern:
- Starts hidden: `h-0`
- Grows full height on hover: `group-hover:h-full`
- Yellow color: `bg-[var(--color-secondary)]`
- Positioned on the left edge: `absolute left-0 bottom-0`
- Smooth transition: `transition-all duration-300`

---

## 🎬 Animation Standards

- **Marquee (client logos):** `@keyframes marquee` in globals.css, class `animate-marquee` (30s linear infinite)
- **Accent bars:** `transition-all duration-300` with `group-hover:` state changes
- **Image hover:** `transition-transform duration-500 group-hover:scale-135`
- **Fade-in on scroll:** IntersectionObserver + `opacity-0 translate-y-10` → `opacity-100 translate-y-0`

---

## 🔤 Typography

- **Font Stack:** Outfit (via `next/font/google`), variable weight
- **Code/Mono:** Outfit (same as body)
- **Section label numbers:** `text-sm font-medium tracking-[3px]` / `text-base font-medium tracking-[3px]` on lg
- **Section headings:** `text-[36px] font-bold` → `lg:text-[56px] lg:leading-[71px]`
- **Body text:** `text-base leading-relaxed` → `lg:text-[20px] lg:leading-[25px]`
- **Barlow font:** Used for stat values, chart labels, metric numbers, tags (via `next/font/google` local instance)

