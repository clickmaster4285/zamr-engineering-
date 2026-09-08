# ZAMR Engineering — ERP Tasks

> **Project:** ZAMR Engineering Website
> **Goal:** Company Marketing Website
> **Period:** Jul 1, 2026 → Sep 8, 2026
> **Total Goals:** 13 | **Total Tasks:** ~52
> **Note:** No start/end date falls on a Sunday
> **GitHub:** https://github.com/clickmaster4285/zamr-engineering-

---

## Goal 1: Project Setup & Landing Page
**Start:** Jul 1, 2026 | **End:** Jul 6, 2026
**Description:** Initialize the Next.js project, configure Tailwind CSS and shadcn/ui, set up the design system with CSS custom properties, and build the landing page with hero section, navigation bar, and footer. Establish the foundation for all subsequent pages.

| # | Task | Description | Start Date | End Date |
|---|------|-------------|------------|----------|
| 1.1 | Project initialization | Create Next.js 15 project with App Router, configure Tailwind CSS v4, shadcn/ui, TypeScript, and ESLint. Set up the base layout with Outfit font and global CSS custom properties for the color system. | Jul 1, 2026 | Jul 3, 2026 |
| 1.2 | Landing page hero section | Build the hero section with background video/image, company tagline, call-to-action buttons, and animated elements. Establish the dark blue hero design pattern used across all pages. | Jul 6, 2026 | Jul 6, 2026 |
| 1.3 | Navigation bar | Build the responsive navigation bar with desktop and mobile layouts, active link highlighting (yellow accent bar), smooth scroll links to page sections, and the ZAMR logo. | Jul 6, 2026 | Jul 6, 2026 |
| 1.4 | Footer section | Build the footer with quick links, service links, contact information, social media icons (LinkedIn, Twitter, Facebook), and copyright notice. Responsive layout with proper spacing. | Jul 6, 2026 | Jul 6, 2026 |
| 1.5 | Design system setup | Define all CSS custom properties in globals.css: primary palette (navy blue), secondary (yellow accent), backgrounds, text colors, borders, and image overlays. All components use var(--token-name) — no hardcoded colors. | Jul 6, 2026 | Jul 6, 2026 |

---

## Goal 2: About Page
**Start:** Jul 7, 2026 | **End:** Jul 8, 2026
**Description:** Build the About page with hero section, company overview, key directors, statistics, and an organizational structure chart. The page uses the established design system with dark hero backgrounds and light section alternation.

| # | Task | Description | Start Date | End Date |
|---|------|-------------|------------|----------|
| 2.1 | About hero + overview section | Build the About page hero with dark background, company overview text, and key statistics (years of experience, projects completed, team size). | Jul 7, 2026 | Jul 7, 2026 |
| 2.2 | Key directors section | Build the Key Directors section showing leadership team members with photos, names, and titles. Responsive card layout with hover effects. | Jul 7, 2026 | Jul 7, 2026 |
| 2.3 | Organizational structure chart | Build the org chart showing Technical Team, Operational Team, and External Team hierarchy with colored boxes and connector lines. Uses the blue color variants defined in the design system. | Jul 8, 2026 | Jul 8, 2026 |
| 2.4 | Responsive polish | Make all About page sections responsive across mobile, tablet, and desktop. Fix typography scaling, spacing, and layout breakpoints. | Jul 7, 2026 | Jul 8, 2026 |

---

## Goal 3: Services Page
**Start:** Jul 7, 2026 | **End:** Jul 10, 2026
**Description:** Build the Services listing page and individual service detail pages. Each service has a dedicated detail page with hero, overview, capabilities, process, deliverables, and related work sections. Data is centralized in mockData/services.ts.

| # | Task | Description | Start Date | End Date |
|---|------|-------------|------------|----------|
| 3.1 | Services listing page | Build the services listing page with a hero section, "Why ZAMR" features preview, and a services grid. Each service card links to its detail page via slug. | Jul 7, 2026 | Jul 7, 2026 |
| 3.2 | Service detail page structure | Build the service detail page with dynamic [id] routing using slug-based lookup from mockData. Sections: ProjectHero, Overview, Capabilities, Process, Deliverables, RelatedWork. | Jul 7, 2026 | Jul 7, 2026 |
| 3.3 | Service detail content | Populate all service detail sections with real content — engineering capabilities, project delivery processes, and case study references. Ensure each service has unique, meaningful content. | Jul 7, 2026 | Jul 10, 2026 |
| 3.4 | Services responsive design | Make services listing and detail pages fully responsive. Fix hero images, capability grids, and process timelines across all breakpoints. | Jul 7, 2026 | Jul 10, 2026 |

---

## Goal 4: Projects Page
**Start:** Jul 7, 2026 | **End:** Jul 10, 2026
**Description:** Build the Projects listing page with filterable project cards and individual project detail pages with hero, challenge, approach, results, gallery, and stats sections. Each project has a slug-based dynamic route.

| # | Task | Description | Start Date | End Date |
|---|------|-------------|------------|----------|
| 4.1 | Projects listing page | Build the projects listing page with filterable project cards, hero stats bar, and "How We Deliver" section. Project cards show thumbnail, title, category, and hover effects. | Jul 7, 2026 | Jul 7, 2026 |
| 4.2 | Project detail page | Build the project detail page with dynamic [id] routing. Sections: ProjectHero (with image gallery), Challenge, Approach, Results, StatsBar, Gallery, and Contact CTA. | Jul 7, 2026 | Jul 9, 2026 |
| 4.3 | Project detail hero + images | Build the project hero with large featured image, project metadata (client, timeline, value), and image gallery with lightbox. Add client logo marquee slider. | Jul 9, 2026 | Jul 10, 2026 |
| 4.4 | Project cards hover effects | Implement hover effects on project cards: image zoom (scale-135), overlay color change, and "View Project" button reveal. Uses the group-hover pattern from the design system. | Jul 8, 2026 | Jul 8, 2026 |

---

## Goal 5: Why ZAMR Engineering Page
**Start:** Jul 10, 2026 | **End:** Jul 11, 2026
**Description:** Build the "Why ZAMR Engineering" page showcasing the company's value proposition, work methodology, strengths, commitments, and track record. Features interactive charts and animated sections.

| # | Task | Description | Start Date | End Date |
|---|------|-------------|------------|----------|
| 5.1 | Why ZAMR hero + How We Work | Build the hero section and "How We Work" methodology grid with icon cards describing the company's approach to engineering projects. | Jul 10, 2026 | Jul 10, 2026 |
| 5.2 | Our Strengths + Commitment | Build the strengths section (key differentiators) and commitment cards section with icon-driven layouts and hover accent bars. | Jul 10, 2026 | Jul 10, 2026 |
| 5.3 | Process + Track Record | Build the step-by-step process visualization and track record statistics section with animated counters and chart data. | Jul 10, 2026 | Jul 10, 2026 |
| 5.4 | Responsive + CTA section | Make all sections responsive and add the call-to-action section at the bottom linking to the contact page. | Jul 11, 2026 | Jul 11, 2026 |

---

## Goal 6: Our Teams Page
**Start:** Jul 11, 2026 | **End:** Jul 11, 2026
**Description:** Build the Our Teams page showcasing leadership team members, engineering teams, collaboration culture, and career opportunities. Features team member cards with photos and detailed bios.

| # | Task | Description | Start Date | End Date |
|---|------|-------------|------------|----------|
| 6.1 | Leadership team section | Build the leadership team section with team member cards showing photos, names, titles, and brief bios. Grid layout with responsive columns. | Jul 11, 2026 | Jul 11, 2026 |
| 6.2 | Engineering teams + Collaboration | Build the engineering teams section showing different team specialties and the collaboration culture section describing cross-functional teamwork. | Jul 11, 2026 | Jul 11, 2026 |
| 6.3 | Careers + responsive | Build the careers/join-us section and make all Our Teams sections fully responsive with proper image loading and text wrapping. | Jul 11, 2026 | Jul 11, 2026 |

---

## Goal 7: Trusted & Accredited Page
**Start:** Jul 11, 2026 | **End:** Jul 13, 2026
**Description:** Build the Trusted & Accredited page showcasing industry certifications, compliance standards, accreditation milestones, and trusted industry verticals. Features an interactive journey timeline and industry cards.

| # | Task | Description | Start Date | End Date |
|---|------|-------------|------------|----------|
| 7.1 | Hero + Certifications | Build the hero section and industry certifications grid showing ISO standards, engineering accreditations, and quality badges with icons. | Jul 11, 2026 | Jul 11, 2026 |
| 7.2 | Compliance + Accreditation | Build the compliance standards section and accreditation matters explanation section with detailed content about why certifications matter. | Jul 11, 2026 | Jul 11, 2026 |
| 7.3 | Journey timeline + Industries | Build the milestones/journey timeline showing company growth and the trusted industries section with industry-specific cards and icons. | Jul 11, 2026 | Jul 13, 2026 |
| 7.4 | Responsive + Contact CTA | Make all sections responsive, add the contact CTA section, and polish typography and spacing across all breakpoints. | Jul 11, 2026 | Jul 13, 2026 |

---

## Goal 8: Engineering Impact Page
**Start:** Jul 11, 2026 | **End:** Jul 13, 2026
**Description:** Build the Engineering For Impact page highlighting the company's social and environmental impact areas, featured projects, and track record. Focuses on the company's mission-driven engineering approach.

| # | Task | Description | Start Date | End Date |
|---|------|-------------|------------|----------|
| 8.1 | Hero + Impact Areas | Build the hero section and impact areas grid showing different domains where the company makes an engineering impact (infrastructure, sustainability, community). | Jul 11, 2026 | Jul 11, 2026 |
| 8.2 | Areas of Impact + Why It Matters | Build the detailed areas of impact section and the "Why It Matters" explanation with data-driven content and visualizations. | Jul 11, 2026 | Jul 13, 2026 |
| 8.3 | Approach + Featured Projects | Build the our approach steps section and featured projects showcase with project cards linking to the projects detail pages. | Jul 11, 2026 | Jul 13, 2026 |
| 8.4 | Responsive polish | Make all Engineering Impact sections responsive with proper typography, image loading, and spacing. | Jul 11, 2026 | Jul 13, 2026 |

---

## Goal 9: Footer Enhancements & Social Media
**Start:** Jul 30, 2026 | **End:** Jul 30, 2026
**Description:** Enhance the footer with social media links (LinkedIn, Twitter, Facebook) with target="_blank" for external navigation. Add quick links and service links with proper routing.

| # | Task | Description | Start Date | End Date |
|---|------|-------------|------------|----------|
| 9.1 | Social media links | Add LinkedIn, Twitter, and Facebook icon links to the footer with target="_blank" and rel="noopener noreferrer" for security. Use Font Awesome brand icons. | Jul 30, 2026 | Jul 30, 2026 |
| 9.2 | Quick links + service links | Organize footer into Quick Links (About, Services, Projects, Contact) and Service Links (specific service categories). All links use Next.js Link component for client-side navigation. | Jul 30, 2026 | Jul 30, 2026 |

---

## Goal 10: Contact Page & Email Integration
**Start:** Aug 17, 2026 | **End:** Aug 18, 2026
**Description:** Build the Contact page with an enquiry form, "How We Help" section, and office location map. Integrate nodemailer for sending contact form emails via Gmail SMTP. Test email delivery from all contact forms across the site.

| # | Task | Description | Start Date | End Date |
|---|------|-------------|------------|----------|
| 10.1 | Contact page structure | Build the contact page with four sections: ContactHero (dark hero with contact info), Enquiry (form), HowWeHelp (dark navy checkmark grid), FindUs (office details + Google Maps embed). | Aug 17, 2026 | Aug 17, 2026 |
| 10.2 | Enquiry form + useContactEnquiry hook | Build the 8-field enquiry form (Name, Designation, Company, Website, Email, Phone, Subject, Message) with the shared useContactEnquiry hook that tracks form state and submits to POST /api/contact. | Aug 17, 2026 | Aug 17, 2026 |
| 10.3 | API route + nodemailer | Build app/api/contact/route.ts — a POST endpoint using nodemailer over Gmail SMTP (STARTTLS, port 587). Emails sent from "Zamar_Eng" with replyTo set to visitor's email. Runtime set to "nodejs" (not Edge). | Aug 17, 2026 | Aug 17, 2026 |
| 10.4 | Cross-page contact form testing | Test email sending from all 5 contact forms: landing page Contacts.tsx, services/Contact.tsx, projects/detail/Contact.tsx, trusted-accredited/Contact.tsx, and the projects page inline form. Verify error handling and success feedback. | Aug 17, 2026 | Aug 18, 2026 |
| 10.5 | Responsive + error handling | Make the contact page fully responsive, add form validation, loading states (sending/success/error), and proper error handling for failed email sends. | Aug 17, 2026 | Aug 18, 2026 |

---

## Goal 11: Content Refresh — About Page
**Start:** Sep 7, 2026 | **End:** Sep 7, 2026
**Description:** Refresh the About page with updated content — new "About Us" section content, revised stats section, and removal of the Structure and Performance sections that were replaced with more relevant content.

| # | Task | Description | Start Date | End Date |
|---|------|-------------|------------|----------|
| 11.1 | About Us section content update | Update the About Us section with new company description, mission statement, and value proposition content. Replace outdated copy with current messaging. | Sep 7, 2026 | Sep 7, 2026 |
| 11.2 | Stats section redesign | Redesign the stats section with new data points and visual layout. Update the key metrics that showcase company achievements. | Sep 7, 2026 | Sep 7, 2026 |
| 11.3 | Remove Structure + Performance sections | Remove the Structure (org chart) and Performance (charts) sections from the About page as they are being replaced with more focused content. Clean up unused component imports. | Sep 7, 2026 | Sep 7, 2026 |

---

## Goal 12: Content Refresh — Why ZAMR & Services
**Start:** Sep 7, 2026 | **End:** Sep 8, 2026
**Description:** Rebuild the Why ZAMR Engineering page with updated content and methodology. Redesign the Services detail page with new hero, capabilities section, and color scheme updates across the site.

| # | Task | Description | Start Date | End Date |
|---|------|-------------|------------|----------|
| 12.1 | Why ZAMR page rebuild | Rebuild the Why ZAMR Engineering page with updated hero content, revised "How We Work" section, and refreshed strength/commitment cards. Update mockData/why-zamr.ts. | Sep 7, 2026 | Sep 7, 2026 |
| 12.2 | Methodology page rebuild | Rebuild the methodology/process section with updated step-by-step content and visual design. Rename ProjectHero to ServicesHero for the services context. | Sep 7, 2026 | Sep 7, 2026 |
| 12.3 | Color scheme update | Update the global color scheme — revise primary, secondary, and accent color values in globals.css. Ensure all pages reflect the new color theory consistently. | Sep 7, 2026 | Sep 7, 2026 |
| 12.4 | Services detail page redesign | Redesign the services detail page: remove the old Services section from the listing page (keep the component for landing reuse), update the hero content, and add a new "Core Capabilities" section after the capabilities grid. | Sep 7, 2026 | Sep 8, 2026 |

---

## Goal 13: Content Refresh — Projects & Hero
**Start:** Sep 8, 2026 | **End:** Sep 8, 2026
**Description:** Update the Projects page with new project content, redesign the project hero section, fix the "project not found" error page, and update the "How We Deliver" section content.

| # | Task | Description | Start Date | End Date |
|---|------|-------------|------------|----------|
| 13.1 | Projects content update | Update the projects mockData with new project entries, descriptions, images, and case study content. Ensure all project detail pages render correctly. | Sep 8, 2026 | Sep 8, 2026 |
| 13.2 | Project hero redesign | Redesign the project hero section with updated layout, larger featured images, and improved metadata display (client, timeline, project value). | Sep 8, 2026 | Sep 8, 2026 |
| 13.3 | Fix "project not found" page | Fix the error when accessing a project detail page — the slug lookup was failing due to mismatched data. Ensure all project slugs resolve correctly from mockData. | Sep 8, 2026 | Sep 8, 2026 |
| 13.4 | How We Deliver content | Update the "How We Deliver" section on the projects page with new process content and methodology description. Update the services detail page contact section routing. | Sep 8, 2026 | Sep 8, 2026 |

---

## Summary

| Goal | Description | Tasks | Start | End |
|------|-------------|-------|-------|-----|
| 1. Project Setup & Landing | Next.js init, hero, navbar, footer, design system | 5 | Jul 1 | Jul 6 |
| 2. About Page | Hero, directors, org chart, responsive | 4 | Jul 7 | Jul 8 |
| 3. Services Page | Listing, detail pages, content, responsive | 4 | Jul 7 | Jul 10 |
| 4. Projects Page | Listing, detail, hero images, card effects | 4 | Jul 7 | Jul 10 |
| 5. Why ZAMR Engineering | Hero, methodology, strengths, track record | 4 | Jul 10 | Jul 11 |
| 6. Our Teams | Leadership, engineering teams, careers | 3 | Jul 11 | Jul 11 |
| 7. Trusted & Accredited | Certifications, compliance, journey, industries | 4 | Jul 11 | Jul 13 |
| 8. Engineering Impact | Impact areas, approach, featured projects | 4 | Jul 11 | Jul 13 |
| 9. Footer & Social Media | Social links, quick links, service links | 2 | Jul 30 | Jul 30 |
| 10. Contact & Email | Form, nodemailer, API route, cross-page testing | 5 | Aug 17 | Aug 18 |
| 11. Content Refresh: About | About Us, stats, remove sections | 3 | Sep 7 | Sep 7 |
| 12. Content Refresh: Why ZAMR & Services | Rebuild pages, color scheme, services redesign | 4 | Sep 7 | Sep 8 |
| 13. Content Refresh: Projects & Hero | New content, hero, fix errors, How We Deliver | 4 | Sep 8 | Sep 8 |
| **TOTAL** | | **~52** | **Jul 1** | **Sep 8** |
