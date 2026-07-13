// mockData/engineering-impact.ts — All static data for the Engineering For Impact page

export interface HeroContent {
  title: string;
  subtitle: string;
  image: string;
}

export const heroContent: HeroContent = {
  title: "Creating Better Infrastructure\nThrough Smart Engineering",
  subtitle:
    "At ZAMR Engineering, every project is an opportunity to create lasting value. Through innovative thinking, technical excellence, and a commitment to quality, we deliver engineering solutions that strengthen infrastructure, improve communities, and support long-term success.",
  image: "/images/image5.jpeg",
};

// ─── Impact Areas (01 — 2×2 grid) ─────────────────────────────────────

export interface ImpactArea {
  title: string;
  description: string;
}

export const impactAreas: ImpactArea[] = [
  {
    title: "Safer Infrastructure",
    description:
      "Engineering solutions that prioritize structural integrity and public safety.",
  },
  {
    title: "Better Communities",
    description:
      "Supporting infrastructure that connects people and enhances everyday life.",
  },
  {
    title: "Sustainable Development",
    description:
      "Designing with long-term environmental and operational responsibility in mind.",
  },
  {
    title: "Reliable Delivery",
    description:
      "Providing dependable engineering services that help projects succeed from planning to completion.",
  },
];

// ─── Areas of Impact (02 — checklist + image) ─────────────────────────

export interface AreasOfImpactContent {
  sectionNumber: string;
  sectionLabel: string;
  heading: string;
  description: string;
  values: { label: string }[];
  image: string;
}

export const areasOfImpactContent: AreasOfImpactContent = {
  sectionNumber: "02",
  sectionLabel: "AREAS OF IMPACT",
  heading: "Delivering Value Across Every Project",
  description:
    "ZAMR Engineering delivers measurable impact across a broad range of disciplines — combining technical expertise with strategic thinking to support projects at every stage.",
  values: [
    { label: "Bridges & Transport Infrastructure" },
    { label: "Civil Engineering" },
    { label: "Asset Management" },
    { label: "Traffic Engineering" },
    { label: "Integrated Management Systems" },
    { label: "Engineering Verification" },
    { label: "Infrastructure Planning" },
  ],
  image: "/images/engineering-impact/image2.png",
};

// ─── Why It Matters (03 — dark blue 2×2 grid) ─────────────────────────

export interface WhyItMattersItem {
  icon: "award" | "shield-check";
  title: string;
  description: string;
}

export const whyItMattersItems: WhyItMattersItem[] = [
  {
    icon: "award",
    title: "Quality",
    description:
      "Consistent engineering standards applied on every project we deliver.",
  },
  {
    icon: "shield-check",
    title: "Safety",
    description:
      "Workplace safety embedded into every stage of design and delivery.",
  },
  {
    icon: "shield-check",
    title: "Compliance",
    description:
      "Aligned with Australian regulations and international management standards.",
  },
  {
    icon: "award",
    title: "Confidence",
    description:
      "Independently recognised systems that give clients full peace of mind.",
  },
];

// ─── Our Approach (04 — timeline steps) ───────────────────────────────

export interface ApproachStep {
  number: string;
  title: string;
  description: string;
}

export const approachSteps: ApproachStep[] = [
  {
    number: "01",
    title: "Understand",
    description: "We begin by understanding project goals, challenges, and stakeholder requirements.",
  },
  {
    number: "02",
    title: "Design",
    description: "Develop practical engineering solutions focused on quality, efficiency, and compliance.",
  },
  {
    number: "03",
    title: "Deliver",
    description: "Execute projects with precision, collaboration, and technical excellence.",
  },
  {
    number: "04",
    title: "Improve",
    description: "Continuously evaluate outcomes to support long-term performance and future growth.",
  },
];

// ─── Our Impact (05 — dark blue 3 columns) ────────────────────────────

export interface OurImpactItem {
  title: string;
  description: string;
}

export const ourImpactItems: OurImpactItem[] = [
  {
    title: "Innovation",
    description:
      "Applying modern engineering practices to solve complex challenges and drive better outcomes for clients and communities.",
  },
  {
    title: "Quality",
    description:
      "Maintaining the highest standards across every stage of project delivery, from initial design through to completion.",
  },
  {
    title: "Collaboration",
    description:
      "Working closely with clients, stakeholders, and project teams to achieve successful and lasting outcomes.",
  },
];

// ─── Featured Projects (06 — project cards) ──────────────────────────

export interface FeaturedProject {
  title: string;
  image: string;
  href: string;
}

export const featuredProjects: FeaturedProject[] = [
  {
    title: "Hunter Valley Renewable Energy Hub",
    image: "/images/image2.jpeg",
    href: "/projects/hunter-valley-renewable-energy-hub",
  },
  {
    title: "Metropolitan Bridge Rehabilitation",
    image: "/images/image10.png",
    href: "/projects/metropolitan-bridge-rehabilitation",
  },
  {
    title: "Urban Stormwater Management System",
    image: "/images/image7.jpeg",
    href: "/projects/urban-stormwater-management-system",
  },
];

// ─── Track Record (07 — stats) ────────────────────────────────────────

export interface TrackRecordStat {
  value: string;
  suffix: string;
  label: string;
  align: "start" | "center" | "end";
}

export const trackRecordStats: TrackRecordStat[] = [
  { value: "12", suffix: "+", label: "YEARS OF EXPERIENCE", align: "start" },
  { value: "05", suffix: "", label: "ENGINEERING DISCIPLINES", align: "center" },
  { value: "150", suffix: "+", label: "PROJECTS DELIVERED", align: "center" },
  { value: "98", suffix: "%", label: "CLIENT SATISFACTION", align: "end" },
];

// ─── CTA Section ──────────────────────────────────────────────────────

export interface CTAContent {
  heading: string;
  description: string;
  primaryButton: { label: string; href: string };
  secondaryButton: { label: string; href: string };
}

export const ctaContent: CTAContent = {
  heading: "Let's Build Infrastructure That Makes a Difference",
  description:
    "Partner with ZAMR Engineering to deliver engineering solutions that create lasting value, improve performance, and support sustainable growth.",
  primaryButton: { label: "Start Your Project", href: "" },
  secondaryButton: { label: "Contact Our Team", href: "" },
};
