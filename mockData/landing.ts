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
  headline: "Engineering Infrastructure\nwith Confidence",
  tagline: "",
  videoSrc: "/videos/video1.mp4",
};

export interface StatItem {
  value: number;
  suffix: string;
  label: string;
  align: "start" | "center" | "end";
}

export const aboutSection = {
  sectionNumber: "01",
  sectionLabel: "ABOUT US",
  heading: "Built on Precision & Reliability",
};

export const aboutStats: StatItem[] = [
  { value: 125, suffix: "+", label: "PROJECTS DELIVERED", align: "start" },
  { value: 12, suffix: "+", label: "YEARS INDUSTRY EXPERIENCE", align: "center" },
];

export const aboutParagraphs: string[] = [
  "ZAMR Engineering is a Sydney-based civil engineering consultancy delivering integrated design, project verification, and infrastructure delivery solutions across New South Wales and beyond. Founded on a commitment to technical excellence, we partner with government bodies, developers, and industry leaders to engineer infrastructure that endures.",
  "Our approach integrates rigorous engineering methodology with forward-looking design thinking — delivering infrastructure that is compliant, buildable, practical and engineered for long-term performance. Every project is delivered with a focus on quality, compliance, risk management and practical engineering outcomes.",
];

export const aboutlastbottomparagraph: string[] = [
  "Trusted by Government, Developers & Contractors",
];

export interface ServicePreviewItem {
  index: string;
  slug: string;
  title: string;
  description: string;
  tags: string[];
}

export const servicesSection = {
  sectionNumber: "02",
  sectionLabel: "SERVICES",
  heading: "What We Engineer",
  ctaLabel: "ZAMR Capability Statement",
};

export interface ProjectsFeaturedWork {
  slug: string;
  index: string;
  title: string;
  category: string;
  shortDescription: string;
  heroTitle: string;
  featuredImage: string;
}

export const projectsFeaturedWork: ProjectsFeaturedWork[] = [
  {
    slug: "wad-orange",
    index: "01",
    title: "WAD Orange ",
    category: "project verification",
    shortDescription:
      "Metropolitan Bridge Rehabilitation involved delivering comprehensive engineering support to restore structural integrity, improve safety, and extend the operational lifespan of critical bridge infrastructure through effective planning, design, and project management.",
    heroTitle: "WAD Orange",
    featuredImage: "/images/projects/wad_orange.jpg",
  },
  {
    slug: "dunmore-st-wentworthville",
    index: "02",
    title: "Dunmore St Wentworthville",
    category: "project verification",
    shortDescription:
      "Signalised intersection upgrade at Grantham Farm improving traffic flow, safety, and connectivity for the surrounding road network.",
    heroTitle: "Dunmore St Wentworthville",
    featuredImage: "/images/projects/dunmore.jpg",
  },
  {
    slug: "liverpool-bridge-inspection",
    index: "03",
    title: "Liverpool Bridge Inspection",
    category: "project verification",
    shortDescription:
      "Road infrastructure upgrade improving intersection geometry, drainage, and overall road safety at the Mamre Road and Abbotts Road connection.",
    heroTitle: "Liverpool Bridge Inspection",
    featuredImage: "/images/projects/liverpool.png",
  },
];

export const servicesPreview: ServicePreviewItem[] = [
  {
    index: "01",
    slug: "engineering-and-design",
    title: "Engineering & Design",
    description:
      "ZAMR Engineering provides integrated engineering and design services across civil, structural, transport and infrastructure projects. From early investigations and concept development through detailed design and construction support, we deliver practical, buildable and value-focused solutions tailored to project requirements.",
    tags: [
      "Civil",
      "Structural",
      "Transport & Traffic",
      "Bridges",
      "Drainage",
      "Geotechnical",
    ],
  },
  {
    index: "02",
    slug: "project-and-program-management",
    title: "Project & Program Management",
    description:
      "ZAMR Engineering provides project and program management services across the infrastructure lifecycle, from project development and procurement through design, construction and close-out. Our senior-led approach focuses on effective governance, commercial control, stakeholder coordination and successful project outcomes.",
    tags: [
      "Project Management",
      "Contract Management",
      "Procurement",
      "Commercial",
      "Delivery Advisory",
    ],
  },
  {
    index: "03",
    slug: "project-verification-and-assurance",
    title: "Project Verification & Assurance",
    description:
      "ZAMR Engineering provides independent Project Verification and technical assurance services for transport and infrastructure projects, with particular expertise in TfNSW developer-delivered works. We provide independent oversight across design and construction to confirm compliance, quality and technical integrity.",
    tags: [
      "TfNSW WAD",
      "Independent Verification",
      "Design Verification",
      "Construction Verification",
      "Quality Assurance",
    ],
  },
  {
    index: "04",
    slug: "asset-management-and-inspection",
    title: "Asset Management & Inspection",
    description:
      "ZAMR Engineering provides asset management, inspection and condition assessment services to help infrastructure owners understand asset condition, manage risk and optimise maintenance and renewal investment across the asset lifecycle.",
    tags: [
      "Bridge Inspections",
      "Structural Inspections",
      "Condition Assessment",
      "Asset Management",
      "Lifecycle Planning",
    ],
  },
  {
    index: "05",
    slug: "buildings-and-property-engineering",
    title: "Buildings & Property Engineering",
    description:
      "ZAMR Engineering provides multidisciplinary engineering services for residential, commercial, industrial and community buildings. We support clients from feasibility and design through approvals, construction, inspection, certification and asset maintenance.",
    tags: [
      "Structural",
      "Civil",
      "Stormwater",
      "Certification",
      "Inspections",
      "Dilapidation",
      "Construction Support",
    ],
  },
  {
    index: "06",
    slug: "construction-and-project-delivery",
    title: "Construction & Project Delivery",
    description:
      "Specialist advisory and compliance consulting precisely aligned with Transport for NSW regulatory standards, technical specifications, and certification frameworks.",
    tags: [
      "Civil Works",
      "Roads",
      "Drainage",
      "Concrete",
      "Structures",
      "Site Delivery",
    ],
  },
];



export const projectFilters: string[] = [
  "All",
  "Engineering & Design",
  "Project & Program Management",
  "Project Verification & Assurance",
  "Asset Management & Inspection",
  "Buildings & Property Engineering",
  "Construction & Project Delivery",
];

export const projectsSection = {
  sectionNumber: "03",
  sectionLabel: "PROJECTS",
  heading: "Featured Work",
  ctaLabel: "LEARN MORE",
  logosLabel: "TRUSTED BY",
};

export interface ClientLogo {
  src: string;
  alt: string;
  category: string;
}

export const clientLogos: ClientLogo[] = [
  { src: "/images/clientlogo/EngineeringDesign1.png", alt: "Engineering & Design Client 1", category: "Engineering & Design" },
  { src: "/images/clientlogo/EngineeringDesign2.png", alt: "Engineering & Design Client 2", category: "Engineering & Design" },
  { src: "/images/clientlogo/AssetManagementInspection1.png", alt: "Asset Management & Inspection Client 1", category: "Asset Management & Inspection" },
  { src: "/images/clientlogo/AssetManagementInspection2.png", alt: "Asset Management & Inspection Client 2", category: "Asset Management & Inspection" },
  { src: "/images/clientlogo/BuildingsPropertyEngineering1.png", alt: "Buildings & Property Engineering Client 1", category: "Buildings & Property Engineering" },
  { src: "/images/clientlogo/BuildingsPropertyEngineering2.png", alt: "Buildings & Property Engineering Client 2", category: "Buildings & Property Engineering" },
  { src: "/images/clientlogo/ConstructionProjectDelivery1.png", alt: "Construction & Project Delivery Client 1", category: "Construction & Project Delivery" },
  { src: "/images/clientlogo/ConstructionProjectDelivery2.png", alt: "Construction & Project Delivery Client 2", category: "Construction & Project Delivery" },
  { src: "/images/clientlogo/ProjectProgramManagement1.png", alt: "Project & Program Management Client 1", category: "Project & Program Management" },
  { src: "/images/clientlogo/ProjectProgramManagement2.png", alt: "Project & Program Management Client 2", category: "Project & Program Management" },
  { src: "/images/clientlogo/ProjectVerificationAssurance1.png", alt: "Project Verification & Assurance Client 1", category: "Project Verification & Assurance" },
  { src: "/images/clientlogo/ProjectVerificationAssurance2.png", alt: "Project Verification & Assurance Client 2", category: "Project Verification & Assurance" },
];

export interface WhyZamrPoint {
  title: string;
  description: string;
}

export const whyZamrSection = {
  sectionNumber: "04",
  sectionLabel: "Why ZAMR Engineering",
  heading: "The Difference Is How We Engineer",
  ctaLabel: "Learn More",
  ctaHref: "/why-zamr-engineering",
};

export const whyZamrPoints: WhyZamrPoint[] = [
  {
    title: "Technical Excellence",
    description:
      "Delivering precise engineering solutions backed by rigorous analysis, industry standards, and a commitment to quality outcomes.",
  },
  {
    title: "TfNSW Specialists",
    description:
      "Extensive experience delivering projects in accordance with Transport for NSW standards and specifications.",
  },
  {
    title: "Practical Delivery Focus",
    description:
      "Combining engineering expertise with construction knowledge to develop solutions that are safe, efficient, and buildable.",
  },
  {
    title: "Client-Aligned Approach",
    description:
      "Working collaboratively with government, developers, and contractors to deliver transparent advice and successful project outcomes from concept to completion.",
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
  ],
  phone: "02 9688 5322",
  socialLinks: [
    { src: "/icons/mynaui_instagram.svg", alt: "Instagram", href: "https://www.instagram.com/zamr_engineering?igsh=cW1hZ2pzdXNwanZk" },
    { src: "/icons/mynaui_linkedin.svg", alt: "LinkedIn", href: "https://www.linkedin.com/company/zamr-engineering/" },
    { src: "/icons/et_global.svg", alt: "Website", href: "https://zamrengineering.com.au/" },
    { src: "/icons/Vector.svg", alt: "Email", href: "mailto:admin@zamrengineering.com.au" },
  ],
};

export interface ContactDetailLine {
  label: string;
  value: string;
  href?: string;
}

export interface ContactFormField {
  id: string;
  name: "name" | "email" | "phone" | "designation" | "company" | "subject" | "message";
  label: string;
  placeholder: string;
  type?: "text" | "email" | "tel" | "textarea";
  required?: boolean;
  half?: boolean;
}

export interface ContactSectionContent {
  sectionNumber: string;
  sectionLabel: string;
  heading: string;
  details: ContactDetailLine[];
  formFields: ContactFormField[];
  submitLabel: string;
  sendingLabel: string;
}

export const contactSection: ContactSectionContent = {
  sectionNumber: "06",
  sectionLabel: "CONTACT",
  heading: "Let\u2019s Build Something Exceptional.",
  details: [
    {
      label: "Company Name",
      value: contactInfo.companyName,
    },
    {
      label: "Address 1",
      value: contactInfo.address1,
    },
    {
      label: "Address 2",
      value: contactInfo.address2,
    },
    {
      label: "Email",
      value: contactInfo.emails[0].address,
      href: `mailto:${contactInfo.emails[0].address}`,
    },
    {
      label: "Phone",
      value: contactInfo.phone,
      href: `tel:${contactInfo.phone.replace(/\s/g, "")}`,
    },
  ],
  formFields: [
    {
      id: "name",
      name: "name",
      label: "Full Name",
      placeholder: "John Smith",
      type: "text",
      required: true,
      half: true,
    },
    {
      id: "email",
      name: "email",
      label: "Email Address",
      placeholder: "Email Address",
      type: "email",
      required: true,
      half: true,
    },
    {
      id: "phone",
      name: "phone",
      label: "Phone Number (Optional)",
      placeholder: "Phone Number",
      type: "tel",
      half: true,
    },
    {
      id: "designation",
      name: "designation",
      label: "Organizations (Optional)",
      placeholder: "Organizations",
      type: "text",
      half: true,
    },
    {
      id: "company",
      name: "company",
      label: "Company Name (Optional)",
      placeholder: "Company Name",
      type: "text",
    },
    {
      id: "subject",
      name: "subject",
      label: "Subject",
      placeholder: "Subject",
      type: "text",
      required: true,
    },
    {
      id: "message",
      name: "message",
      label: "Message",
      placeholder: "Tell us about your project...",
      type: "textarea",
      required: true,
    },
  ],
  submitLabel: "SUBMIT ENQUIRY",
  sendingLabel: "SENDING\u2026",
};

export const footerQuickLinks: { label: string; href: string }[] = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Why ZAMR Engineering", href: "/why-zamr-engineering" },
  { label: "Trusted & Accredited", href: "/trusted-accredited" },
  { label: "Engineering For Impact", href: "/engineering-impact" },
];

export const footerServiceLinks: { label: string; href: string }[] = [
  {
    label: "Engineering & Design",
    href: "/services/engineering-and-design",
  },
  {
    label: "Project & Program Management",
    href: "/services/project-and-program-management",
  },
  {
    label: "Project Verification & Assurance",
    href: "/services/project-verification-and-assurance",
  },
  {
    label: "Asset Management & Inspection",
    href: "/services/asset-management-and-inspection",
  },
  {
    label: "Buildings & Property Engineering",
    href: "/services/buildings-and-property-engineering",
  },
  {
    label: "Construction & Project Delivery",
    href: "/services/construction-and-project-delivery",
  },
];

export interface FooterContactInfo {
  location1: string;
  location2: string;
  email: string;
  phone: string;
}

export const footerContactInfo: FooterContactInfo = {
  location1: "L14, 3 Parramatta Square, 153 Macquarie St, Parramatta, NSW 2150",
  location2: "30 Smith Street Wentworthville NSW, 2145",
  email: "admin@zamrengineering.com.au",
  phone: "02 9688 5322",
};

export interface FooterMetaItem {
  type: "phone" | "email" | "location";
  value: string;
  href?: string;
  icon: string;
  alt: string;
}

export const footerMetaItems: FooterMetaItem[] = [
  {
    type: "phone",
    value: footerContactInfo.phone,
    href: `tel:${footerContactInfo.phone.replace(/\s/g, "")}`,
    icon: "/icons/phonewhite.svg",
    alt: "Phone",
  },
  {
    type: "email",
    value: footerContactInfo.email,
    href: `mailto:${footerContactInfo.email}`,
    icon: "/icons/gamilwhite.svg",
    alt: "Email",
  },
  {
    type: "location",
    value: footerContactInfo.location1,
    icon: "/icons/location.svg",
    alt: "Location",
  },
  {
    type: "location",
    value: footerContactInfo.location2,
    icon: "/icons/maillocation.svg",
    alt: "Location",
  },
];

export interface FooterSocialLink {
  src: string;
  alt: string;
  href: string;
}

export const footerSocialLinks: FooterSocialLink[] = [
  {
    src: "/icons/Linkdinsq.svg",
    alt: "LinkedIn",
    href: contactInfo.socialLinks[1]?.href ?? "#",
  },
  {
    src: "/icons/insta.png",
    alt: "Instagram",
    href: contactInfo.socialLinks[0]?.href ?? "#",
  },
];

export const footerLegalLinks: { label: string; href: string }[] = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
];

export const logoImage = "/images/zamarlogoTransparant.png";

export const footerDescription: string =
  "Specialist civil engineering consultancy delivering precision and compliance in infrastructure projects across Australia.";

export const footerCopyright =
  "\u00A9 2026 ZAMR Engineering. All rights reserved.";

export const footerVideoSrc = "/videos/video1.mp4";

export interface LocationsStat {
  value: string;
  label: string;
}

export interface LocationArea {
  name: string;
  projectCount: number;
  address: string;
  lat: number;
  lng: number;
}

export interface LocationsContent {
  sectionNumber: string;
  sectionLabel: string;
  heading: string;
  description: string;
  stats: LocationsStat[];
  mapLegendTitle: string;
  mapLegendItems: { label: string; emphasized?: boolean }[];
  mapCenter: { lat: number; lng: number };
  mapZoom: number;
  areas: LocationArea[];
}

export const locationsContent: LocationsContent = {
  sectionNumber: "05",
  sectionLabel: "LOCATIONS",
  heading: "Where We\u2019ve Made an Impact",
  description:
    "Discover the projects and locations where our engineering expertise has contributed to better infrastructure and project outcomes.",
  stats: [
    { value: "14", label: "Locations" },
    { value: "18", label: "Projects" },
    { value: "NSW", label: "Region" },
  ],
  mapLegendTitle: "Project Locations",
  mapLegendItems: [
    { label: "2+ projects", emphasized: true },
    { label: "1 project" },
  ],
  mapCenter: { lat: -33.85, lng: 150.98 },
  mapZoom: 10,
  areas: [
    {
      name: "Blacktown",
      projectCount: 2,
      address: "Blacktown NSW 2148, Australia",
      lat: -33.771,
      lng: 150.906,
    },
    {
      name: "Castle Hill",
      projectCount: 1,
      address: "Castle Hill NSW 2154, Australia",
      lat: -33.7318,
      lng: 151.0069,
    },
    {
      name: "Hornsby",
      projectCount: 1,
      address: "Hornsby NSW 2077, Australia",
      lat: -33.7045,
      lng: 151.0993,
    },
    {
      name: "Parramatta",
      projectCount: 3,
      address: "Parramatta NSW 2150, Australia",
      lat: -33.814,
      lng: 151.0027,
    },
    {
      name: "Chatswood",
      projectCount: 1,
      address: "Chatswood NSW 2067, Australia",
      lat: -33.7967,
      lng: 151.1814,
    },
    {
      name: "Liverpool",
      projectCount: 2,
      address: "Liverpool NSW 2170, Australia",
      lat: -33.921,
      lng: 150.9236,
    },
    {
      name: "Box Hill",
      projectCount: 1,
      address: "Box Hill NSW 2765, Australia",
      lat: -33.6425,
      lng: 150.8989,
    },
    {
      name: "Marrickville",
      projectCount: 1,
      address: "Marrickville NSW 2204, Australia",
      lat: -33.9104,
      lng: 151.1561,
    },
    {
      name: "Bankstown",
      projectCount: 1,
      address: "Bankstown NSW 2200, Australia",
      lat: -33.9172,
      lng: 151.0336,
    },
    {
      name: "Penrith",
      projectCount: 1,
      address: "Penrith NSW 2750, Australia",
      lat: -33.7512,
      lng: 150.6942,
    },
    {
      name: "Campsie",
      projectCount: 1,
      address: "Campsie NSW 2194, Australia",
      lat: -33.9144,
      lng: 151.1032,
    },
    {
      name: "Sutherland",
      projectCount: 1,
      address: "Sutherland NSW 2232, Australia",
      lat: -34.0315,
      lng: 151.058,
    },
    {
      name: "Manly",
      projectCount: 1,
      address: "Manly NSW 2095, Australia",
      lat: -33.7972,
      lng: 151.288,
    },
    {
      name: "Campbelltown",
      projectCount: 1,
      address: "Campbelltown NSW 2560, Australia",
      lat: -34.0658,
      lng: 150.8142,
    },
  ],
};
