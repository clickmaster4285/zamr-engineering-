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
  { value: 12, suffix: "+", label: "YEARS OF EXPERIENCE", align: "center" },
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
    index: "02",
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
    index: "03",
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
      "Precision-engineered civil solutions across hydraulic systems, structural frameworks, and geotechnical analysis for complex urban and regional infrastructure projects.",
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
      "Independent technical assurance — compliance review, quality auditing, and risk mitigation across the full infrastructure project lifecycle from design through to delivery.",
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
      "Advanced pavement engineering, geometric road design, and integrated traffic systems for future-ready transport networks across New South Wales and beyond.",
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
      "Engineering the clean energy transition — solar farm civil works, wind turbine foundations, and hybrid energy infrastructure at utility scale.",
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
      "Specialist advisory and compliance consulting precisely aligned with Transport for NSW regulatory standards, technical specifications, and certification frameworks.",
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
  "ALL",
  "Project Verification",
  "Buildings",
  "Civil Design",
  "Asset Management",
  "Civil Works",
  "Bridge Works",
  "Project Management",
];

export const projectsSection = {
  sectionNumber: "03",
  sectionLabel: "PROJECTS",
  heading: "Featured Work",
  ctaLabel: "ALL PROJECTS",
};

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
      label: "Origination(optional)",
      placeholder: "Origination",
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
    icon: "/icons/location.svg",
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
    src: "/icons/facebookSq.svg",
    alt: "Facebook",
    href: "#",
  },
  {
    src: "/icons/tweetersq.svg",
    alt: "Twitter",
    href: "#",
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
}

export interface LocationsContent {
  sectionNumber: string;
  sectionLabel: string;
  heading: string;
  description: string;
  stats: LocationsStat[];
  mapLegendTitle: string;
  mapLegendItems: { label: string; emphasized?: boolean }[];
  sidebarTitle: string;
  sidebarCountLabel: string;
  areas: LocationArea[];
  mapEmbedUrl: string;
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
  sidebarTitle: "All Locations",
  sidebarCountLabel: "14 areas",
  areas: [
    { name: "Blacktown", projectCount: 2 },
    { name: "Castle Hill", projectCount: 1 },
    { name: "Hornsby", projectCount: 1 },
    { name: "Parramatta", projectCount: 3 },
    { name: "Chatswood", projectCount: 1 },
    { name: "Liverpool", projectCount: 2 },
    { name: "Box Hill", projectCount: 1 },
    { name: "Marrickville", projectCount: 1 },
    { name: "Bankstown", projectCount: 1 },
    { name: "Penrith", projectCount: 1 },
    { name: "Campsie", projectCount: 1 },
    { name: "Sutherland", projectCount: 1 },
    { name: "Manly", projectCount: 1 },
    { name: "Campbelltown", projectCount: 1 },
  ],
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3314.992283969211!2d150.9671837!3d-33.8125122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12a2bb67749bf9%3A0xb0ef6047fcb0149d!2sZAMR%20Engineering!5e0!3m2!1sen!2s!4v1789019051054!5m2!1sen!2s",
};
