// mockData/landing.ts — All static data for the landing page

export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Why ZAMR Engineering", href: "/why-zamr-engineering" },
  { label: "Our Team", href: "" },
  { label: "Trusted & Accredited", href: "" },
  { label: "Engineering For Impact", href: "" },
];

export interface HeroContent {
  location: string;
  headline: string;
  tagline: string;
  videoSrc: string;
}

export const heroContent: HeroContent = {
  location: "SYDNEY · NSW · AUSTRALIA",
  headline: "Engineering Infrastructure\nfor the Future",
  tagline: "",
  videoSrc: "/videos/video1.mp4",
};

export interface StatItem {
  value: number;
  suffix: string;
  label: string;
  align: "start" | "center" | "end";
}

export const aboutStats: StatItem[] = [
  { value: 150, suffix: "+", label: "PROJECTS DELIVERED", align: "start" },
  { value: 12, suffix: "+", label: "YEARS OF EXPERIENCE", align: "center" },
  { value: 98, suffix: "%", label: "COMPLIANCE RATE", align: "end" },
];

export const aboutParagraphs: string[] = [
  "ZAMR Engineering is a Sydney-based civil engineering consultancy delivering precision-led infrastructure solutions across New South Wales and beyond. Founded on a commitment to technical excellence, we partner with government bodies, developers, and industry leaders to engineer infrastructure that endures.",
  "Our approach integrates rigorous engineering methodology with forward-looking design thinking — producing outcomes that are structurally sound, environmentally considered, and technically innovative. Every project is an opportunity to advance what infrastructure can achieve.",
];

export interface ServicePreviewItem {
  index: string;
  slug: string;
  title: string;
  description: string;
}

export const servicesPreview: ServicePreviewItem[] = [
  {
    index: "01",
    slug: "civil-engineering",
    title: "Civil Engineering",
    description:
      "Precision-engineered civil solutions across hydraulic systems, structural frameworks, and geotechnical analysis for complex urban and regional infrastructure projects.",
  },
  {
    index: "02",
    slug: "project-verification",
    title: "Project Verification",
    description:
      "Independent technical assurance — compliance review, quality auditing, and risk mitigation across the full infrastructure project lifecycle from design through to delivery.",
  },
  {
    index: "03",
    slug: "road-infrastructure",
    title: "Road Infrastructure",
    description:
      "Advanced pavement engineering, geometric road design, and integrated traffic systems for future-ready transport networks across New South Wales and beyond.",
  },
  {
    index: "04",
    slug: "renewable-energy-infrastructure",
    title: "Renewable Energy Infrastructure",
    description:
      "Engineering the clean energy transition — solar farm civil works, wind turbine foundations, and hybrid energy infrastructure at utility scale.",
  },
  {
    index: "05",
    slug: "tfnsw-compliance",
    title: "TfNSW Compliance",
    description:
      "Specialist advisory and compliance consulting precisely aligned with Transport for NSW regulatory standards, technical specifications, and certification frameworks.",
  },
];

export const serviceTagRows: string[][] = [
  ["STRUCTURAL", "Hydraulic"],
  ["GEOTECHNICAL"],
];

export const projectFilters: string[] = [
  "ALL",
  "Urban Infrastructure",
  "Structural Engineering",
  "Transportation Projects",
  "Water & Irrigation Systems",
  "Industrial Development",
];

export interface ClientLogo {
  src: string;
  alt: string;
}

export const clientLogos: ClientLogo[] = [
  { src: "/images/logo1.jpeg", alt: "Transport for NSW" },
  { src: "/images/logo2.jpeg", alt: "VIDA" },
  { src: "/images/logo3.jpeg", alt: "Queensland Government" },
  { src: "/images/logo4.jpeg", alt: "The National Roads & Motorists' Association" },
  { src: "/images/logo5.jpeg", alt: "Ausbuild" },
  { src: "/images/logo6.jpeg", alt: "Melbourne Civil Works" },
  { src: "/images/logo7.jpeg", alt: "Sydney Structural & Civil" },
  { src: "/images/logo8.jpeg", alt: "Brisbane Growth Development Agency" },
];

export interface WhyZamrPoint {
  title: string;
  description: string;
}

export const whyZamrPoints: WhyZamrPoint[] = [
  {
    title: "Safety first",
    description:
      "An EMR consistently below industry average — because every worker goes home.",
  },
  {
    title: "Self-perform strength",
    description:
      "In-house concrete, steel, and interiors crews give us schedule and quality control others can't match.",
  },
  {
    title: "Built sustainably",
    description:
      "LEED, WELL, and net-zero expertise woven into every phase of design and construction.",
  },
  {
    title: "Owner-aligned",
    description:
      "Transparent budgets, open-book contracts, and one team accountable from day one to handover.",
  },
];

export interface ContactInfo {
  companyName: string;
  address1: string;
  address2: string;
  emails: { label: string; address: string }[];
  phone: string;
  socialLinks: { src: string; alt: string; href: string }[];
}

export const contactInfo: ContactInfo = {
  companyName: "ZAMR Engineering Pty Ltd",
  address1: "30 Smith Street Wentworthville NSW, 2145",
  address2: "L14, 3 Parramatta Square, 153 Macquarie St, Parramatta, NSW 2150",
  emails: [
    { label: "Email", address: "admin@zamrengineering.com.au" },
    { label: "Email", address: "khalid.javed@zamrengineering.com.au" },
  ],
  phone: "",
  socialLinks: [
    { src: "/icons/mynaui_instagram.svg", alt: "Instagram", href: "" },
    { src: "/icons/mynaui_linkedin.svg", alt: "LinkedIn", href: "" },
    { src: "/icons/et_global.svg", alt: "Website", href: "" },
    { src: "/icons/Vector.svg", alt: "Email", href: "mailto:admin@zamrengineering.com.au" },
  ],
};

export const footerQuickLinks: string[] = [
  "About",
  "Projects",
  "Case Studies",
  "Insights",
  "Careers",
  "Contact",
];

export const footerServiceLinks: string[] = [
  "Planning & Design",
  "Project Management",
  "Project Verification",
  "Buildings Services",
  "Others Services",
];

export interface FooterContactInfo {
  location: string;
  email: string;
  phone: string;
}

export const footerContactInfo: FooterContactInfo = {
  location: "Sydney, New South Wales Australia",
  email: "info@zamreng.com.au",
  phone: "+61 2 3456 7890",
};

export const footerDescription: string =
  "Specialist civil engineering consultancy delivering precision-led infrastructure solutions across New South Wales.";
