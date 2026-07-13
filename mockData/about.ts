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

export const pillars: Pillar[] = [
  {
    title: "Precision",
    description:
      "Every calculation, every specification, every deliverable held to the highest standard.",
  },
  {
    title: "Integrity",
    description:
      "Transparent reporting and independent verification on every engagement.",
  },
  {
    title: "Innovation",
    description:
      "Forward-looking design thinking applied to proven engineering principles.",
  },
];

export const aboutParagraphs: string[] = [
  "ZAMR Engineering was founded in 2012 with a single conviction: that infrastructure should be engineered with uncompromising precision and long-term thinking. From a modest two-person consultancy, we have grown into one of New South Wales' most trusted civil engineering firms, delivering over 150 projects across road, civil, energy, and compliance disciplines.",
  "Our team of 45 engineers, project managers, and compliance specialists operates across NSW, Queensland, and Victoria — partnering with government agencies, private developers, and infrastructure funds to deliver outcomes that endure. We hold accreditations with TfNSW, Infrastructure NSW, and the Australian Institute of Engineers.",
  "We believe the best engineering is invisible — infrastructure that simply works, year after year, without incident. Every project we take on is guided by this philosophy: rigorous analysis, precise design, and disciplined delivery.",
];

export interface StatItem {
  value: number;
  suffix: string;
  label: string;
  align: "start" | "center" | "end";
}

export const stats: StatItem[] = [
  { value: 150, suffix: "+", label: "PROJECTS DELIVERED", align: "start" },
  { value: 12, suffix: "+", label: "YEARS OF EXPERIENCE", align: "center" },
  { value: 98, suffix: "%", label: "COMPLIANCE RATE", align: "end" },
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
