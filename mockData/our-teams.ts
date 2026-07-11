// mockData/our-teams.ts — All static data for the Our Team page

export interface HeroContent {
  title: string;
  subtitle: string;
  image: string;
}

export const heroContent: HeroContent = {
  title: "Meet the Experts Behind\nZAMR Engineering",
  subtitle:
    "Our strength lies in our people. From engineering specialists to project managers and operational leaders, our experienced team works together to deliver quality, innovation, and reliable engineering solutions across every project.",
  image: "/images/image5.jpeg",
};

export interface TeamMember {
  name: string;
  role: string;
  department: string;
  headshot: string;
}

export const leadershipTeam: TeamMember[] = [
  {
    name: "Omar Faruqi",
    role: "Design Manager",
    department: "Planning & Design",
    headshot: "/images/team/image1.png",
  },
  {
    name: "Khalid Javed",
    role: "Managing Director",
    department: "Leadership",
    headshot: "/images/team/image2.png",
  },
  {
    name: "Yashwant Dyall",
    role: "Quality Manager",
    department: "Operational Quality",
    headshot: "/images/team/image3.png",
  },
  {
    name: "Sara Mitchell",
    role: "Senior Civil Engineer",
    department: "Civil Engineering",
    headshot: "/images/team/image4.png",
  },
];

export interface EngineeringTeam {
  title: string;
  description: string;
}

export const engineeringTeams: EngineeringTeam[] = [
  {
    title: "Planning & Design",
    description:
      "We engage with your project team to define scope, constraints, and objectives. A tailored project brief and preliminary program are established.",
  },
  {
    title: "Civil Engineering",
    description:
      "We engage with your project team to define scope, constraints, and objectives. A tailored project brief and preliminary program are established.",
  },
  {
    title: "Structural Engineering",
    description:
      "We engage with your project team to define scope, constraints, and objectives. A tailored project brief and preliminary program are established.",
  },
  {
    title: "Bridge Engineering",
    description:
      "We engage with your project team to define scope, constraints, and objectives. A tailored project brief and preliminary program are established.",
  },
  {
    title: "Traffic Engineering",
    description:
      "We engage with your project team to define scope, constraints, and objectives. A tailored project brief and preliminary program are established.",
  },
  {
    title: "Asset Management",
    description:
      "We engage with your project team to define scope, constraints, and objectives. A tailored project brief and preliminary program are established.",
  },
  {
    title: "Project Management",
    description:
      "We engage with your project team to define scope, constraints, and objectives. A tailored project brief and preliminary program are established.",
  },
  {
    title: "Operational Quality",
    description:
      "We engage with your project team to define scope, constraints, and objectives. A tailored project brief and preliminary program are established.",
  },
];

export interface CollaborationContent {
  sectionNumber: string;
  sectionLabel: string;
  heading: string;
  description: string;
  values: { label: string }[];
  ctaButton: { label: string; href: string };
  image: string;
}

export const collaborationContent: CollaborationContent = {
  sectionNumber: "03",
  sectionLabel: "COLLABORATION",
  heading: "A Team Built on Collaboration",
  description:
    "At ZAMR Engineering, we believe successful projects begin with strong collaboration, technical excellence, and a shared commitment to delivering outstanding outcomes for every client.",
  values: [
    { label: "Collaboration" },
    { label: "Integrity" },
    { label: "Innovation" },
    { label: "Accountability" },
    { label: "Continuous Improvement" },
    { label: "Client Focus" },
  ],
  ctaButton: { label: "Learn More About ZAMR", href: "/about" },
  image: "/images/team/image5.png",
};

export interface CareersContent {
  heading: string;
  description: string;
  primaryButton: { label: string; href: string };
  secondaryButton: { label: string; href: string };
}

export const careersContent: CareersContent = {
  heading: "Grow Your Career with\nZAMR Engineering",
  description:
    "We're always looking for passionate engineers and industry professionals who share our commitment to quality, innovation, and excellence.",
  primaryButton: { label: "View Careers", href: "" },
  secondaryButton: { label: "Contact Us", href: "" },
};
