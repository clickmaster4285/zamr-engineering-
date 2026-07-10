// mockData/why-zamr.ts — All static data for the Why ZAMR Engineering page

export interface HeroContent {
  title: string;
  subtitle: string;
  image: string;
}

export const heroContent: HeroContent = {
  title: "Engineering Confidence Through\nExperience, Quality & Precision",
  subtitle:
    "Choosing the right engineering partner is critical to every project's success. At ZAMR Engineering, we combine technical expertise, industry knowledge, and practical solutions to deliver reliable outcomes that exceed expectations.",
  image: "/images/image5.jpeg",
};

export interface HowWeWorkRow {
  title: string;
  description: string;
}

export const howWeWorkRows: HowWeWorkRow[] = [
  {
    title: "Engineering Expertise",
    description:
      "Experienced professionals delivering practical engineering solutions across complex infrastructure projects.",
  },
  {
    title: "Quality Focus",
    description:
      "Every project follows structured quality management processes to ensure consistent and reliable outcomes.",
  },
  {
    title: "Safety Commitment",
    description:
      "Safety is integrated into every stage of planning, design, and project delivery. ",
  },
  {
    title: "Client Collaboration",
    description:
      "We work closely with our clients to understand project objectives and deliver tailored engineering solutions.",
  },
  {
    title: "Reliable Delivery",
    description:
      "Committed to meeting deadlines while maintaining technical excellence and project quality.",
  },
  {
    title: "Sustainable Solutions",
    description:
      "Designing engineering solutions that support long-term performance, efficiency, and responsible development.",
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
      "We engage with your project team to define scope, deliverables, and milestones with precision. Every output is reviewed, verified, and delivered to the highest standard.",
  },
  {
    title: "Integrity",
    description:
      "We engage with your project team to define scope, deliverables, and milestones with precision. Every output is reviewed, verified, and delivered to the highest standard.",
  },
  {
    title: "Excellence",
    description:
      "We engage with your project team to define scope, deliverables, and milestones with precision. Every output is reviewed, verified, and delivered to the highest standard.",
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
  { value: "5", label: "ENGINEERING DISCIPLINES", align: "center" },
  { value: "150", suffix: "+", label: "PROJECTS DELIVERED", align: "center" },
  { value: "98", suffix: "%", label: "CLIENT SATISFACTION", align: "end" },
];

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
