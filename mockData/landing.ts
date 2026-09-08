// mockData/landing.ts  All static data for the landing page

export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Why ZAMR Engineering", href: "/why-zamr-engineering" },
  { label: "Our Team", href: "/our-teams" },
  { label: "Trusted & Accredited", href: "/trusted-accredited" },
  { label: "Engineering For Impact", href: "/engineering-impact" },
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
  "Our approach integrates rigorous engineering methodology with forward-looking design thinking  producing outcomes that are structurally sound, environmentally considered, and technically innovative. Every project is an opportunity to advance what infrastructure can achieve.",
];

export interface ServicePreviewItem {
  index: string;
  slug: string;
  title: string;
  description: string;
}

export interface ProjectsFeaturedWork {
  slug: string;
  index: string;
  title: string;
  category: string;
  shortDescription: string;
  heroTitle: string;
  featuredImage: string;
  featuredImagewithhover: string;
}

export const projectsFeaturedWork: ProjectsFeaturedWork[] = [
  {
    slug: "solarfarm-intersection-upgrade-at-643-mitchell-highway-orange",
    index: "01",
    title: "Solarfarm Intersection Upgrade at 643 Mitchell Highway, Orange ",
    category: "Urban Infrastructure",
    shortDescription:
      "Metropolitan Bridge Rehabilitation involved delivering comprehensive engineering support to restore structural integrity, improve safety, and extend the operational lifespan of critical bridge infrastructure through effective planning, design, and project management.",

    heroTitle: "Solarfarm Intersection Upgrade at 643 Mitchell Highway, Orange",
    
    featuredImage: "/images/image12.png",
    featuredImagewithhover: "/images/image3.jpeg",
  },
  {
    slug: "loftus-street-and-windsor-road-grantham-farm-signalised-intersection",
    index: "01",
    title: "Loftus Street and Windsor Road, Grantham Farm- Signalised Intersection ",
    category: "Urban Infrastructure",
    shortDescription:
      "Signalised intersection upgrade at Grantham Farm improving traffic flow, safety, and connectivity for the surrounding road network.",
    heroTitle: "Loftus Street and Windsor Road, Grantham Farm- Signalised Intersection",
    
    featuredImage: "/images/image13.png",
    featuredImagewithhover: "/images/image2.jpeg",

  },
  {
    slug: "mr536-mamre-road-&-abbotts Rd-kemps-creek",
    index: "01",
    title: "MR536 Mamre Road & Abbotts Rd Kemps Creek ",
    category: "Urban Infrastructure",
    shortDescription:
      "Road infrastructure upgrade improving intersection geometry, drainage, and overall road safety at the Mamre Road and Abbotts Road connection.",
    heroTitle: "MR536 Mamre Road & Abbotts Rd Kemps Creek",
    
    featuredImage: "/images/image14.png",
    featuredImagewithhover: "/images/image1.jpeg",

  },
];

export const servicesPreview: ServicePreviewItem[] = [
  {
    index: "01",
    slug: "engineering-and-design",
    title: "Engineering & Design",
    description:
      "Integrated engineering and design services across civil, structural, transport and infrastructure projects from early investigations through detailed design and construction support.",
  },
  {
    index: "02",
    slug: "project-and-program-management",
    title: "Project & Program Management",
    description:
      "Senior-led project and program management across the infrastructure lifecycle  from project development and procurement through design, construction and close-out.",
  },
  {
    index: "03",
    slug: "project-verification-and-assurance",
    title: "Project Verification & Assurance",
    description:
      "Independent project verification and technical assurance for transport and infrastructure  with particular expertise in TfNSW developer-delivered works.",
  },
  {
    index: "04",
    slug: "asset-management-and-inspection",
    title: "Asset Management & Inspection",
    description:
      "Asset management, inspection and condition assessment services that help infrastructure owners manage risk and optimise maintenance and renewal investment.",
  },
  {
    index: "05",
    slug: "buildings-and-property-engineering",
    title: "Buildings & Property Engineering",
    description:
      "Multidisciplinary engineering for residential, commercial, industrial and community buildings  from feasibility and design through approvals, inspection and certification.",
  },
  {
    index: "06",
    slug: "construction-and-project-delivery",
    title: "Construction & Project Delivery",
    description:
      "Engineering-led construction and project delivery for civil and infrastructure works  combining technical understanding with practical construction management.",
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
      "An EMR consistently below industry average  because every worker goes home.",
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
    { src: "/icons/mynaui_instagram.svg", alt: "Instagram", href: "https://www.instagram.com/zamr_engineering?igsh=cW1hZ2pzdXNwanZk" },
    { src: "/icons/mynaui_linkedin.svg", alt: "LinkedIn", href: "https://www.linkedin.com/company/zamr-engineering/" },
    { src: "/icons/et_global.svg", alt: "Website", href: "https://zamrengineering.com.au/" },
    { src: "/icons/Vector.svg", alt: "Email", href: "mailto:admin@zamrengineering.com.au" },
  ],
};

export const footerQuickLinks: { label: string; href: string }[] = [
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Why ZAMR Engineering", href: "/why-zamr-engineering" },
  { label: "Our Team", href: "/our-teams" },
  { label: "Trusted & Accredited", href: "/trusted-accredited" },
  { label: "Engineering For Impact", href: "/engineering-impact" },
  { label: "Contact", href: "/contact" },
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

export const logoImage = "/images/zamarlogoTransparant.png";

export const footerDescription: string =
  "Specialist civil engineering consultancy delivering precision and compliance in infrastructure projects across Australia.";
