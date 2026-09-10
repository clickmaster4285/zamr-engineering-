// mockData/about.ts — All static data for the About page

export interface HeroContent {
  title: string;
  subtitle: string;
  image: string;
}

export const logoFilledImage = "/images/zamrlogoFilled1.jpeg";

export const heroContent: HeroContent = {
  title: "About ZAMR Engineering",
  subtitle:
    "A Sydney-based civil engineering consultancy built on precision, technical excellence, and a commitment to enduring infrastructure.",
  image: "/images/image4.jpeg",
};

export interface Pillar {
  title: string;
  description: string;
}

export const aboutParagraphs: string[] = [
  "ZAMR Engineering is a Sydney-based civil engineering consultancy delivering practical, high-quality infrastructure solutions across New South Wales. We work with government agencies, councils, developers, contractors, and private clients to provide civil engineering, project verification, Transport for NSW compliance, project management, and technical advisory services",
  "Our approach combines sound engineering principles with practical construction experience to deliver infrastructure that is safe, compliant, buildable, and designed for long-term performance. From concept through to construction, we focus on reducing project risk, improving constructability, and ensuring every solution meets the required technical and regulatory standards.",
  "At ZAMR Engineering, we believe successful engineering is measured not only by technical excellence but by the confidence it gives our clients. Every project is delivered with precision, integrity, and a commitment to achieving practical outcomes that stand the test of time.",
];
export const aboutDividerParagraphs: string[] = [
  "Our approach integrates rigorous engineering methodology with forward-looking design thinking — producing outcomes that are structurally sound, environmentally considered, and technically innovative. Every project is an opportunity to advance what infrastructure can achieve.",
];

export interface StatItem {
  value: number;
  suffix: string;
  label: string;
  align: "start" | "center" | "end";
}

export const stats: StatItem[] = [
  { value: 10, suffix: "+", label: "Local\nCouncils", align: "start" },
  { value: 15, suffix: "+", label: "Government Agencies\n& Authorities", align: "center" },
  { value: 99, suffix: "%", label: "Client\nSatisfaction", align: "center" },
  { value: 50, suffix: "+", label: "Private Developers\n& Contractors", align: "center" },
  { value: 100, suffix: "+", label: "Major Infrastructure\nPackages Supported", align: "end" },
];

// --- Organizational Structure Data ---
export type TeamType = "technical" | "operational" | "external";

export const orgChartColors: Record<TeamType, string> = {
  technical: "var(--color-blue-struct-tech)",
  operational: "var(--color-blue-struct-ops)",
  external: "var(--color-blue-struct-ext)",
};

export const orgChartLineColor = "var(--color-blue-struct-line)";

export interface LegendItem {
  label: string;
  color: string;
}

export const orgChartLegend: LegendItem[] = [
  { label: "Technical Team", color: orgChartColors.technical },
  { label: "Operational Team", color: orgChartColors.operational },
  { label: "External Team", color: orgChartColors.external },
];

export interface BoxData {
  left: number;
  top: number;
  width: number;
  height: number;
  title: string;
  subtitle?: string;
  type: TeamType;
  fontSize?: number;
  fontWeight?: number;
}

export const orgChartMd: BoxData = {
  left: 754,
  top: 267,
  width: 271.8,
  height: 112.25,
  title: "Managing Director",
  subtitle: "Khalid Javed",
  type: "operational",
};

export const orgChartExternalBoxes: BoxData[] = [
  { left: 1259.12, top: 175, width: 264, height: 87, title: "Quality Support", subtitle: "Insaf Khan", type: "external" },
  { left: 1259.12, top: 280, width: 264, height: 86, title: "Cost Estimating", subtitle: "Natesh Natraj", type: "external" },
  { left: 1259.12, top: 386, width: 264, height: 85, title: "Contract Administration", subtitle: "Franca Bucci", type: "external" },
];

export const orgChartDm: BoxData = {
  left: 293,
  top: 607,
  width: 261.37,
  height: 116.26,
  title: "Design Manager",
  subtitle: "Omar Faruqi",
  type: "technical",
};

export const orgChartOd: BoxData = {
  left: 1199.03,
  top: 606.3,
  width: 274.2,
  height: 116.26,
  title: "Operational Director",
  subtitle: "Khalid Javed",
  type: "operational",
};

export interface SubHeaderData {
  left: number;
  top: number;
  width: number;
  title: string;
  type: TeamType;
}

export const orgChartSubHeaders: SubHeaderData[] = [
  { left: 106, top: 782, width: 196.43, title: "Structure Design", type: "technical" },
  { left: 329, top: 782, width: 188.64, title: "Civil Design", type: "technical" },
  { left: 554.54, top: 787.31, width: 196.43, title: "Traffic Management", type: "technical" },
  { left: 791.78, top: 787.98, width: 196.43, title: "Asset Management", type: "technical" },
  { left: 1016.2, top: 787.98, width: 198.04, title: "Operational - Quality", type: "operational" },
  { left: 1237.48, top: 787.98, width: 197.23, title: "Operation Safety", type: "operational" },
  { left: 1467, top: 786, width: 198.04, title: "Project Management", type: "operational" },
];

export const orgChartSubH = 44.9;

export interface NameCardData {
  left: number;
  top: number;
  width: number;
  height: number;
  names: string[];
  type: TeamType;
}

export const orgChartNameCards: NameCardData[] = [
  { left: 98, top: 894, width: 211, height: 151, names: ["Kashif JKhan", "Yashwant Dyall", "Roland Ng"], type: "technical" },
  { left: 318, top: 894, width: 209, height: 151, names: ["Faraz Ahmed", "Thomas Chew", "Mark Shamoun"], type: "technical" },
  { left: 542, top: 894, width: 220, height: 151, names: ["Charles Waife", "Manhur Rahman", "Kirk Martinez"], type: "technical" },
  { left: 791, top: 894, width: 197, height: 151, names: ["Moeen", "Rayyaan", "Saad Malik"], type: "technical" },
  { left: 1007, top: 894, width: 217, height: 151, names: ["Yashwant Dyall", "Janaka Bandara"], type: "operational" },
  { left: 1237, top: 894, width: 198, height: 151, names: ["Kah Yong Yan"], type: "operational" },
  { left: 1456, top: 894, width: 220, height: 151, names: ["Dante Vinces", "Arshad Mahmood", "Tanuj Kakkar"], type: "operational" },
];

export interface SubcData {
  left: number;
  top: number;
  width: number;
  height: number;
}

export const orgChartSubc: SubcData = {
  left: 1099.38,
  top: 1111.84,
  width: 236.77,
  height: 61.25,
};

export const orgChartDesignWidth = 1680;
export const orgChartDesignHeight = 1273;

// --- Performance Data ---
export interface ServiceDatum {
  name: string;
  value: number;
  color: string;
}

export const revenueByService: ServiceDatum[] = [
  { name: "Civil Engineering", value: 4.27, color: "var(--color-blue-header)" },
  { name: "Road Infrastructure", value: 3.17, color: "var(--color-chart-bar-1)" },
  { name: "Project Verification", value: 2.17, color: "var(--color-chart-bar-2)" },
  { name: "Renewable Energy", value: 1.18, color: "var(--color-chart-bar-3)" },
  { name: "TfNSW Compliance", value: 0.68, color: "var(--color-chart-bar-4)" },
];

export interface TrendDatum {
  year: string;
  value: number;
}

export const growthTrend: TrendDatum[] = [
  { year: "FY21", value: 5.0 },
  { year: "FY22", value: 7.0 },
  { year: "FY23", value: 9.0 },
  { year: "FY24", value: 11.0 },
];

export interface GrowthStat {
  label: string;
  value: string;
}

export const growthStats: GrowthStat[] = [
  { label: "FY22 GROWTH", value: "+23.5%" },
  { label: "FY23 GROWTH", value: "+20.2%" },
  { label: "FY24 GROWTH", value: "+9.9%" },
  { label: "CAGR (3Y)", value: "+17.9%" },
];

// --- Key Directors / Organizational Team ---
export interface KeyDirector {
  name: string;
  role: string;
  department: string;
  headshot: string;
}

export const keyDirectorsContent = {
  sectionNumber: "03",
  sectionLabel: "KEY DIRECTORS",
  heading: "Organizational Team",
  directors: [
    {
      name: "Omar Faruqi",
      role: "Design Manager",
      department: "Planning & Design",
      headshot: "/images/team/Omar.jpeg",
    },
    {
      name: "Khalid Javed",
      role: "Managing Director",
      department: "Leadership",
      headshot: "/images/team/Khalid.jpeg",
    },
    {
      name: "Yashwant Dyall",
      role: "Quality Manager",
      department: "Operational Quality",
      headshot: "/images/team/Yashwant.jpeg",
    },
    {
      name: "Sara Mitchell",
      role: "Senior Civil Engineer",
      department: "Civil Engineering",
      headshot: "/images/team/girlreflict.png",
    },
  ] satisfies KeyDirector[],
};

// --- About US 04 ---
export const aboutUs04Content = {
  sectionNumber: "04",
  sectionLabel: "About Us",
  heading: "The Founder's Story Behind the Name ZAMR",
  image: "/images/image11.png",
  imageAlt: "ZAMR engineers reviewing project plans on an active construction site",
  paragraphs: [
    "Ours begins with family, is strengthened by purpose, and continues through a commitment to engineering excellence.",
    "The name ZAMR was deliberately chosen based on two complementary foundations that continue to define who we are today.",
    "Firstly, ZAMR is formed from the initials of our four children, reflecting the family values, integrity, and long-term commitment to building something that will endure for generations.",
    "Secondly, the name ZAMR carries an established linguistic association with strength and a clear, confident voice. These attributes resonated strongly with the type of engineering consultancy we aspired to build - one known for technical excellence, sound judgement, and decisive outcomes; one that values long-term relationships, and consistently delivers practical, outcome-focused solutions.",
    "Together, these two inspirations gave the name ZAMR both a deeply personal meaning and a professional identity. Today, it reflects our commitment to engineering excellence, trusted partnerships, continuous innovation, and creating lasting value for our clients and the communities we serve.",
    "The name ZAMR represents not only where we came from, but also where we are going—built on experience, focused on the future, and committed to delivering engineering solutions that make a lasting impact.",
  ],
};

// --- About Video (footer video poster) ---
export const aboutVideoContent = {
  posterImage: "/aboutusfootervideo.png",
  posterAlt: "ZAMR Engineering about and footer video",
};
