// mockData/why-zamr.ts — All static data for the Why ZAMR Engineering page

export interface HeroContent {
  title: string;
  subtitle: string;
  image: string;
}

export const heroContent: HeroContent = {
  title: "Engineering Confidence Through\nExperience, Quality & Precision",
  subtitle:
    "At ZAMR Engineering, we provide practical engineering solutions backed by industry experience, technical expertise, and a commitment to quality. From infrastructure delivery to independent verification, we work alongside our clients to solve complex challenges and deliver reliable project outcomes.",
  image: "/images/image5.jpeg",
};

export interface HowWeWorkRow {
  title: string;
  description: string;
}

export const howWeWorkRows: HowWeWorkRow[] = [
  {
    title: "Experienced Engineering Team",
    description:
      "Our multidisciplinary team brings extensive experience across civil infrastructure, transport, structural engineering, and project verification.",
  },
  {
    title: "Quality-Driven Delivery",
    description:
      "Structured quality systems, technical reviews, and compliance processes ensure every deliverable meets project requirements and industry standards.",
  },
  {
    title: "Independent Technical Assurance",
    description:
      "As a TfNSW-accredited verification provider, we deliver objective reviews that provide confidence in design, construction, and project outcomes.",
  },
  {
    title: "Practical Engineering Solutions",
    description:
      "We combine technical knowledge with construction experience to develop solutions that are practical, buildable, and cost-effective.",
  },
  {
    title: "Client-Focused Collaboration",
    description:
      "We work closely with clients, contractors, and stakeholders to understand project objectives and deliver outcomes aligned with expectations.",
  },
  {
    title: "Reliable Project Delivery",
    description:
      "We are committed to delivering high-quality engineering outcomes safely, efficiently, and in accordance with agreed project requirements.",
  },
];

export const ourStrengths: string[] = [
  "Experienced Engineering Team",
  "Integrated Management Systems",
  "Quality Assurance",
  "Project Verification",
  "Client-Focused Approach",
  "Regulatory Compliance",
];

export const ourStrengthsImage = "/images/image11.png";

export interface CommitmentCard {
  title: string;
  description: string;
}

export const commitmentCards: CommitmentCard[] = [
  {
    title: "Quality",
    description:
      "Delivering engineering solutions that meet the highest standards of technical excellence.",
  },
  {
    title: "Integrity",
    description:
      "Building trusted relationships through transparency, accountability, and professionalism.",
  },
  {
    title: "Innovation ",
    description:
      "Applying practical thinking and modern engineering approaches to overcome project challenges.",
  },
];

export interface ProcessItem {
  number: string;
  title: string;
  description: string;
}

export const processItems: ProcessItem[] = [
  {
    number: "01",
    title: "Understand",
    description:
      "Project consultation and requirements gathering.",
  },
  {
    number: "02",
    title: "Plan",
    description:
      "Develop practical engineering strategies.",
  },
  {
    number: "03",
    title: "Deliver",
    description:
      "Execute with quality, compliance, and efficiency.",
  },
  {
    number: "04",
    title: "Support",
    description:
      "Provide ongoing technical support and value.",
  },
];

export interface TrackRecordStat {
  value: string;
  suffix?: string;
  label: string;
  align: "start" | "center" | "end";
}

export const trackRecordStats: TrackRecordStat[] = [
  { value: "12", suffix: "+", label: "YEARS OF EXPERIENCE", align: "start" },
  { value: "05", label: "ENGINEERING DISCIPLINES", align: "center" },
  { value: "150", suffix: "+", label: "PROJECTS DELIVERED", align: "end" },
];

export interface OurValueCard {
  icon: "users" | "layers" | "map-pin";
  title: string;
  description: string;
}

export const ourValueCards: OurValueCard[] = [
  {
    icon: "users",
    title: "Social Commitment",
    description:
      "ZAMR Engineering provides internship programs for both graduates and immigrants — demonstrating strong social commitments to community development and workforce diversity.",
  },
  {
    icon: "layers",
    title: "End-to-End Services",
    description:
      "ZAMR Engineering provides any services that clients are looking for, ranging from design, to construction, to asset management — a true one-stop engineering partner.",
  },
  {
    icon: "map-pin",
    title: "State-Wide Coverage",
    description:
      "ZAMR Engineering provides services across NSW, from urban areas to rural areas — ensuring accessibility and reach for all communities.",
  },
];

export const ourValueContent = {
  heading: "Our Value",
  subtitle:
    "We deliver more than engineering expertise — we bring a commitment to community, accessibility, and end-to-end partnership.",
};

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
  primaryButton: { label: "Get In Touch", href: "/contact" },
  secondaryButton: { label: "Explore Services", href: "/services" },
};
