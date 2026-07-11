// mockData/trusted-accredited.ts — All static data for the Trusted & Accredited page

export interface HeroContent {
  title: string;
  subtitle: string;
  image: string;
}

export const heroContent: HeroContent = {
  title: "Certified Standards. Trusted Engineering. Proven Results.",
  subtitle:
    "At ZAMR Engineering, quality, safety, and compliance are at the core of everything we do. Our accredited management systems and industry-recognised certifications demonstrate our commitment to delivering engineering services with professionalism, consistency, and integrity.",
  image: "/images/image5.jpeg",
};

// ─── Industry Certifications ───────────────────────────────────────────

export interface CertificationItem {
  name: string;
  category: string;
  description: string;
  badge: string;
}

export const certifications: CertificationItem[] = [
  {
    name: "ISO 9001",
    category: "Quality Management",
    description: "Rigorous standards for quality assurance and consistent delivery.",
    badge: "VERIFIED",
  },
  {
    name: "ISO 14001",
    category: "Environmental Management",
    description: "Committed to sustainable engineering and minimal environmental impact.",
    badge: "VERIFIED",
  },
  {
    name: "ISO 45001",
    category: "Health & Safety",
    description: "Industry-leading safety protocols protecting our team and project sites.",
    badge: "VERIFIED",
  },
  {
    name: "IMS",
    category: "Integrated Management System",
    description: "A unified framework for seamless compliance and technical excellence.",
    badge: "VERIFIED",
  },
];

// ─── Compliance ────────────────────────────────────────────────────────

export interface ComplianceContent {
  sectionNumber: string;
  sectionLabel: string;
  heading: string;
  description: string;
  values: { label: string }[];
  image: string;
}

export const complianceContent: ComplianceContent = {
  sectionNumber: "02",
  sectionLabel: "COMPLIANCE",
  heading: "Built Around Compliance",
  description:
    "Navigating regulatory landscapes requires a partner with deep technical knowledge and a commitment to standards. We integrate TfNSW and Australian standards into every phase of project verification.",
  values: [
    { label: "Quality Assurance" },
    { label: "Risk Management" },
    { label: "Safety Compliance" },
    { label: "Environmental Responsibility" },
    { label: "Continuous Improvement" },
    { label: "Client Satisfaction" },
  ],
  image: "/images/engineering-impact/image1.png",
};

// ─── Why Accreditation Matters ─────────────────────────────────────────

export interface AccreditationItem {
  icon: "award" | "shield-check";
  title: string;
  description: string;
}

export const accreditationItems: AccreditationItem[] = [
  {
    icon: "award",
    title: "Quality",
    description:
      "Consistent engineering standards applied on every project we deliver. ",
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

// ─── Our Journey (Timeline) ────────────────────────────────────────────

export interface JourneyMilestone {
  year: string;
  title: string;
  description: string;
}

export const journeyMilestones: JourneyMilestone[] = [
  {
    year: "2012",
    title: "Company Established",
    description: "ZAMR founded with focus on civil design.",
  },
  {
    year: "2015",
    title: "Quality System",
    description: "Implementation of first quality management framework.",
  },
  {
    year: "2018",
    title: "ISO Accreditation",
    description: "Achievement of triple ISO certification milestone.",
  },
  {
    year: "2021",
    title: "Full IMS",
    description: "Launch of our Integrated Management System.",
  },
  {
    year: "2024",
    title: "Excellence Focus",
    description: "Continuing our journey of technical leadership.",
  },
];

// ─── Trusted Across Industries ─────────────────────────────────────────

export interface IndustryItem {
  name: string;
}

export const industryItems: IndustryItem[] = [
  { name: "Infrastructure" },
  { name: "Bridges" },
  { name: "Civil Engineering" },
  { name: "Transport" },
  { name: "Government Projects" },
  { name: "Construction" },
];

// ─── Contact ───────────────────────────────────────────────────────────

export interface TrustedContactContent {
  sectionNumber: string;
  sectionLabel: string;
  heading: string;
  companyName: string;
  address1: string;
  address2: string;
  emails: { label: string; address: string }[];
  socialLinks: { icon: string; href: string }[];
}

export const trustedContactContent: TrustedContactContent = {
  sectionNumber: "06",
  sectionLabel: "CONTACT",
  heading: "Let's Build Something Exceptional.",
  companyName: "Company Name: ZAMR Engineering Pty Ltd",
  address1: "Address 1: 30 Smith Street Wentworthville NSW, 2145",
  address2: "Address 2: L14, 3 Parramatta Square, 153 Macquarie St, Parramatta, NSW 2150",
  emails: [
    { label: "Email", address: "admin@zamrengineering.com.au" },
    { label: "Email", address: "khalid.javed@zamrengineering.com.au" },
  ],
  socialLinks: [
    { icon: "instagram", href: "" },
    { icon: "linkedin", href: "" },
    { icon: "global", href: "" },
    { icon: "email", href: "mailto:admin@zamrengineering.com.au" },
  ],
};

// ─── CTA Section ───────────────────────────────────────────────────────

export interface CTAContent {
  heading: string;
  description: string;
  primaryButton: { label: string; href: string };
  secondaryButton: { label: string; href: string };
}

export const ctaContent: CTAContent = {
  heading: "Partner with a Team You Can Trust",
  description:
    "Whether you're planning new infrastructure, managing complex engineering challenges, or seeking reliable technical expertise, ZAMR Engineering is ready to support your next project.",
  primaryButton: { label: "Get In Touch", href: "" },
  secondaryButton: { label: "Explore Services", href: "/services" },
};

// ─── Form Placeholders ─────────────────────────────────────────────────

export interface FormField {
  label: string;
  placeholder: string;
  type: "text" | "email" | "textarea";
  width: "half" | "full";
}

export const formFields: FormField[] = [
  { label: "NAME", placeholder: "John Smith", type: "text", width: "half" },
  { label: "EMAIL", placeholder: "you@company.com.au", type: "email", width: "half" },
  { label: "SUBJECT", placeholder: "Project enquiry", type: "text", width: "full" },
  { label: "MESSAGE", placeholder: "Tell us about your project...", type: "textarea", width: "full" },
];
