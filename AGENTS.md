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
│   ├── api/
│   │   └── contact/
│   │       └── route.ts          # POST endpoint — sends contact form emails via nodemailer
│   ├── contact/
│   │   └── page.tsx              # Contact page (Hero + Enquiry + HowWeHelp + FindUs)
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
│   ├── our-teams/
│   │   └── page.tsx              # Our Teams page
│   ├── trusted-accredited/
│   │   └── page.tsx              # Trusted & Accredited page
│   └── engineering-impact/
│       └── page.tsx              # Engineering For Impact page
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
│   ├── contact/                  # Contact page sections
│   │   ├── Hero.tsx
│   │   ├── Enquiry.tsx           # Contact form (wired to useContactEnquiry + /api/contact)
│   │   ├── HowWeHelp.tsx         # Dark navy checkmark grid
│   │   └── FindUs.tsx            # Office details + dark Google Maps embed
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
│   ├── why-zamr/                 # Why ZAMR page sections
│   │   ├── Hero.tsx
│   │   ├── HowWeWork.tsx
│   │   ├── OurStrengths.tsx
│   │   ├── Commitment.tsx
│   │   ├── Process.tsx
│   │   ├── TrackRecord.tsx
│   │   └── CTASection.tsx
│   ├── our-teams/                # Our Teams page sections
│   │   ├── Hero.tsx
│   │   ├── LeadershipTeam.tsx
│   │   ├── EngineeringTeams.tsx
│   │   ├── Collaboration.tsx
│   │   └── Careers.tsx
│   ├── trusted-accredited/       # Trusted & Accredited page sections
│   │   ├── Hero.tsx
│   │   ├── IndustryCertifications.tsx
│   │   ├── Compliance.tsx
│   │   ├── AccreditationMatters.tsx
│   │   ├── Journey.tsx
│   │   ├── TrustedIndustries.tsx
│   │   ├── Contact.tsx
│   │   └── CTASection.tsx
│   └── engineering-impact/       # Engineering For Impact page sections
│       ├── Hero.tsx
│       ├── ImpactAreas.tsx
│       ├── AreasOfImpact.tsx
│       ├── WhyItMatters.tsx
│       ├── OurApproach.tsx
│       ├── OurImpact.tsx
│       ├── FeaturedProjects.tsx
│       ├── TrackRecord.tsx
│       └── CTASection.tsx
├── mockData/                     # 🔥 All static data (NO hardcoded data in components)
│   ├── landing.ts                # Landing page: hero, aboutStats, servicesPreview, navLinks, footer
│   ├── about.ts                  # About page: hero, pillars, stats, orgChart, performanceData
│   ├── services.ts               # Service detail data + servicesHero + whyZamrFeatures
│   ├── projects.ts               # Project detail data + projectFilters + projectsHeroStats + howWeDeliver
│   ├── why-zamr.ts               # Why ZAMR page: hero, howWeWork, strengths, commitment, process, cta
│   ├── our-teams.ts              # Our Teams page: hero, leadership, engineering teams, collaboration, careers
│   ├── trusted-accredited.ts     # Trusted & Accredited page: hero, certifications, compliance, accreditation, journey, industries, contact, cta, formFields
│   ├── engineering-impact.ts     # Engineering For Impact page: hero, impactAreas, areasOfImpact, whyItMatters, approachSteps, ourImpact, featuredProjects, trackRecord, cta
│   └── contact.ts                # Contact page: hero, enquiryContent (form fields), helpContent, findUsContent
├── lib/
│   ├── utils.ts                  # Utility helpers (cn, etc.)
│   └── useContactEnquiry.ts      # Shared contact form hook (state + submit → POST /api/contact)
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
| `--color-success` | oklch(0.52 0.14 152) | Form success feedback messages |
| `--color-error` | oklch(0.55 0.19 27) | Form error feedback messages |
| `--color-contact-accent` | oklch(0.426 0.163 263) (#1945A7) | Contact page submit button, section numbers, icon strokes |
| `--color-contact-blue` | oklch(0.422 0.154 265) (#2344A1) | Contact page detail lines, social icon strokes |
| `--color-contact-dark` | oklch(0.221 0.075 264) (#07183D) | Contact page dark navy sections (How Can We Help, map bg) |

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
| `mockData/landing.ts` | heroContent, aboutStats, aboutParagraphs, servicesPreview, serviceTagRows, projectFilters, clientLogos, whyZamrPoints, contactInfo, navLinks, footerQuickLinks (`{ label, href }[]`), footerServiceLinks, footerContactInfo | All `components/landing/*` + NavigationBar + Footer |
| `mockData/about.ts` | heroContent, pillars, aboutParagraphs, stats, orgChart data (COLORS, boxes, subHeaders, nameCards), performance data (revenueByService, growthTrend, growthStats) | All `components/About/*` |
| `mockData/services.ts` | ServiceData (detail), servicesHero, whyZamrFeatures + getServiceBySlug() | `components/services/*`, `app/services/[id]/page.tsx` |
| `mockData/projects.ts` | ProjectData (detail), projectFilters, projectsHeroStats, projectsHowWeDeliver, projectsContactInfo + getProjectBySlug() | `components/projects/detail/*`, `app/projects/page.tsx`, `app/projects/[id]/page.tsx` |
| `mockData/why-zamr.ts` | heroContent, howWeWorkRows, ourStrengths, commitmentCards, processItems, trackRecordStats, ctaContent | All `components/why-zamr/*` |
| `mockData/our-teams.ts` | heroContent, leadershipTeam, engineeringTeams, collaborationContent, careersContent | All `components/our-teams/*` |
| `mockData/trusted-accredited.ts` | heroContent, certifications, complianceContent, accreditationItems, journeyMilestones, industryItems, trustedContactContent, ctaContent, formFields | All `components/trusted-accredited/*` |
| `mockData/engineering-impact.ts` | heroContent, impactAreas, areasOfImpact, whyItMatters, approachSteps, ourImpact, featuredProjects, trackRecord, ctaContent | All `components/engineering-impact/*` |
| `mockData/contact.ts` | heroContent, enquiryContent (details, socialLinks, form fields, submitLabel), helpContent, findUsContent | All `components/contact/*`, `app/contact/page.tsx` |

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

## 📧 Contact Form & Email Sending

All 5 contact forms (landing `Contacts.tsx`, `services/Contact.tsx`, `projects/detail/Contact.tsx`, `trusted-accredited/Contact.tsx`, projects page inline form) submit to a single POST endpoint.

### Flow
1. Form component calls the shared `useContactEnquiry()` hook (`lib/useContactEnquiry.ts`)
2. Hook tracks `{ name, email, subject, message }`, submits via `fetch` → `POST /api/contact`
3. `app/api/contact/route.ts` sends the email with **nodemailer** over Gmail SMTP
4. Hook exposes `status: "idle" | "sending" | "success" | "error"` — components render `CONTACT_STATUS_MESSAGES` feedback + disable the submit button while sending

### Environment Variables (`.env` — gitignored, never commit)

| Variable | Purpose |
|----------|---------|
| `SMTP_HOST` | SMTP server (`smtp.gmail.com`) |
| `SMTP_PORT` | SMTP port (`587`, STARTTLS) |
| `SMTP_USER` | Sender email (`software.clickmasters@gmail.com`) |
| `SMTP_PASS` | Gmail **App Password** (not the account password) |
| `SMTP_FROM_NAME` | Sender display name (`Zamar_Eng`) |
| `CONTACT_TO_EMAIL` | Recipient inbox (`umerkhayam1717@gmail.com`) |

### Rules
- The API route must stay on the Node.js runtime (`export const runtime = "nodejs"` — nodemailer is not Edge-compatible)
- Emails are sent `from: "Zamar_Eng" <software.clickmasters@gmail.com>` with `replyTo` set to the visitor's email
- `CONTACT_STATUS_MESSAGES` lives in the hook file (form logic — the one deliberate exception to the mockData-only rule, since it is shared app logic, not page content)
- Form status feedback colors use `var(--color-success)` / `var(--color-error)` tokens

### The /contact page
- Route: `app/contact/page.tsx` → `ContactHero` → `Enquiry` → `HowWeHelp` → `FindUs` (global Navbar/Footer wrap it)
- The Enquiry form has 8 fields (Name, Designation, Company Name, Company Website, Business Email, Business Phone Number, Subject, Message). Only `name`, `email`, `subject`, `message` are required; the optional fields (`designation`, `company`, `website`, `phone`) are included in the email body when filled
- The dark checkmark grid and map section use `--color-contact-dark`; the submit button uses `--color-contact-accent`
- Hero image lives in `mockData/contact.ts` (`heroContent.image`) — swap there when the final asset arrives

### Contact link routing (all point to `/contact`)
- Navbar CONTACT button (desktop + mobile) → `router.push("/contact")` in `components/landing/NavigationBar.tsx`
- CTA buttons from mockData: `trusted-accredited.ts` (Get In Touch), `our-teams.ts` (Contact Us), `engineering-impact.ts` (Start Your Project / Contact Our Team), `why-zamr.ts` (Get In Touch)
- Services detail `GET IN TOUCH` (components/services/detail/Overview.tsx) → `Link href="/contact"`
- Footer Quick Links includes a `Contact` entry (mockData/landing.ts `footerQuickLinks`)

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

