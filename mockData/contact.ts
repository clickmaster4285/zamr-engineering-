// mockData/contact.ts — All static data for the Contact page (/contact)

// ─── Hero ─────────────────────────────────────────────────────────────

export interface ContactHeroContent {
  title: string;
  subtitle: string;
  image: string;
}

export const heroContent: ContactHeroContent = {
  title: "Let's Talk About Your Next Project",
  subtitle:
    "Whether you need engineering expertise, project support, verification, or infrastructure solutions, our team is ready to understand your requirements and help you move forward.",
  image: "/images/image5.jpeg",
};

// ─── Enquiry / Contact form section (01) ──────────────────────────────

export type EnquiryFieldName =
  | "name"
  | "designation"
  | "company"
  | "website"
  | "email"
  | "phone"
  | "subject"
  | "message";

export interface EnquiryFormField {
  name: EnquiryFieldName;
  label: string;
  placeholder: string;
  type: "text" | "email" | "textarea";
  width: "half" | "full";
}

export interface EnquiryDetail {
  label: string;
  value: string;
}

export interface SocialLink {
  src: string;
  alt: string;
  href: string;
}

export interface EnquiryContent {
  sectionNumber: string;
  sectionLabel: string;
  heading: string;
  details: EnquiryDetail[];
  socialLinks: SocialLink[];
  fields: EnquiryFormField[];
  submitLabel: string;
}

export const enquiryContent: EnquiryContent = {
  sectionNumber: "01",
  sectionLabel: "CONTACT",
  heading: "Let's Build Something Exceptional.",
  details: [
    { label: "Company Name:", value: "ZAMR Engineering Pty Ltd" },
    { label: "Address 1:", value: "30 Smith Street Wentworthville NSW, 2145" },
    { label: "Address 2:", value: "L14, 3 Parramatta Square, 153 Macquarie St, Parramatta, NSW 2150" },
    { label: "Email:", value: "admin@zamrengineering.com.au" },
    { label: "Email:", value: "khalid.javed@zamrengineering.com.au" },
  ],
  socialLinks: [
    { src: "/icons/mynaui_instagram.svg", alt: "Instagram", href: "https://www.instagram.com/zamr_engineering?igsh=cW1hZ2pzdXNwanZk" },
    { src: "/icons/mynaui_linkedin.svg", alt: "LinkedIn", href: "https://www.linkedin.com/company/zamr-engineering/" },
    { src: "/icons/et_global.svg", alt: "Website", href: "https://zamrengineering.com.au/" },
    { src: "/icons/Vector.svg", alt: "Email", href: "mailto:admin@zamrengineering.com.au" },
  ],
  fields: [
    { name: "name", label: "Name", placeholder: "John Smith", type: "text", width: "half" },
    { name: "designation", label: "Designation", placeholder: "Designation", type: "text", width: "half" },
    { name: "company", label: "Company Name", placeholder: "Company Name", type: "text", width: "half" },
    { name: "website", label: "Company Website", placeholder: "Website URL", type: "text", width: "half" },
    { name: "email", label: "Business Email", placeholder: "Business Email", type: "email", width: "half" },
    { name: "phone", label: "Business Phone Number", placeholder: "Business Phone Number", type: "text", width: "half" },
    { name: "subject", label: "Subject", placeholder: "Subject", type: "text", width: "full" },
    { name: "message", label: "Message", placeholder: "Tell us about your project...", type: "textarea", width: "full" },
  ],
  submitLabel: "SUBMIT ENQUIRY",
};

// ─── How Can We Help? section ─────────────────────────────────────────

export interface HelpContent {
  heading: string;
  subtitle: string;
  items: string[];
}

export const helpContent: HelpContent = {
  heading: "How Can We Help?",
  subtitle: "Select from our engineering disciplines or project advisory services.",
  items: [
    "Planning & Design",
    "Project Management",
    "Project Verification",
    "Building Services",
    "Bridge Services",
    "Civil Works",
    "Traffic Engineering",
    "Asset Management",
  ],
};

// ─── Find Us section ──────────────────────────────────────────────────

export interface FindUsContent {
  heading: string;
  description: string;
  companyName: string;
  address: string;
  mapLabel: string;
  mapQuery: string;
  socialLinks: SocialLink[];
}

export const findUsContent: FindUsContent = {
  heading: "Find Us",
  description:
    "Visit our primary metropolitan Sydney office or request a meeting with our regional directors.",
  companyName: "ZAMR Engineering Pty Ltd",
  address: "30 Smith Street Wentworthville, NSW 2145 Australia",
  mapLabel: "Sydney HQ Location Map",
  mapQuery: "30 Smith Street Wentworthville NSW 2145",
  socialLinks: [
    { src: "/icons/mynaui_instagram.svg", alt: "Instagram", href: "https://www.instagram.com/zamr_engineering?igsh=cW1hZ2pzdXNwanZk" },
    { src: "/icons/mynaui_linkedin.svg", alt: "LinkedIn", href: "https://www.linkedin.com/company/zamr-engineering/" },
    { src: "/icons/et_global.svg", alt: "Website", href: "https://zamrengineering.com.au/" },
    { src: "/icons/Vector.svg", alt: "Email", href: "mailto:admin@zamrengineering.com.au" },
  ],
};
