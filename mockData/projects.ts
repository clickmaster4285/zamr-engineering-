export interface StatItem {
  label: string;
  value: string;
}

export interface ApproachStep {
  number: string;
  title: string;
  description: string;
}

export interface Achievement {
  value: string;
  label: string;
}

export interface ProjectData {
  slug: string;
  index: string;
  title: string;
  category: string;
  shortDescription: string;

  heroTitle: string;
  heroImage: string;

  stats: StatItem[];

  aboutNumber: string;
  aboutHeading: string;
  aboutDescription: string;
  location: string;
  challengeParagraphs: string[];

  approachNumber: string;
  approachHeading: string;
  approachSteps: ApproachStep[];

  resultsNumber: string;
  resultsHeading: string;
  resultsMetrics: Achievement[];
  achievements: string[];

  galleryNumber: string;
  galleryHeading: string;
  galleryImages: string[];

  relatedNumber: string;
  relatedHeading: string;
  relatedProjects: { title: string; slug: string; image: string }[];

  // Project cards displayed in the Refer Projects section on the services
  // detail page. Edit these directly on the relevant project entry.
  referProjects: { title: string; image: string; slug: string }[];
}

export const projects: ProjectData[] = [
  {
    slug: "wad-orange",
    index: "07",
    title: "WAD Orange",
    category: "",
    shortDescription:
      "Intersection upgrade improving traffic flow, safety, and connectivity at the Solarfarm site on Mitchell Highway, Orange.",

    heroTitle: "WAD Orange",
    heroImage: "/images/projects/wad_orange.jpg",

    stats: [
      { label: "CLIENT", value: "Transport for NSW" },
      { label: "VALUE", value: "$12 Million" },
      { label: "DURATION", value: "2023 – 2025" },
      { label: "LOCATION", value: "Orange, NSW" },
      { label: "SCOPE", value: "Civil & Transport Infrastructure" },
      { label: "TEAM", value: "8 Engineers" },
    ],

    aboutNumber: "01",
    aboutHeading: "What needed to be solved.",
    aboutDescription:
      "The intersection at 643 Mitchell Highway required upgrade to accommodate increased traffic volumes from the nearby solar farm development and improve safety for all road users.",
    location: "Orange, NSW",
    challengeParagraphs: [
      "The intersection upgrade needed to be delivered within a live traffic environment on a key regional freight route, requiring careful construction staging and traffic management.",
      "Coordination with the solar farm developer and transport authorities was essential to align intersection design with future traffic projections and operational requirements.",
    ],

    approachNumber: "02",
    approachHeading: "How We Delivered It",
    approachSteps: [
      {
        number: "01",
        title: "Traffic Assessment & Design Development",
        description: "Comprehensive traffic analysis and intersection design to accommodate projected traffic volumes from the solar farm development.",
      },
      {
        number: "02",
        title: "Geotechnical & Pavement Design",
        description: "Site investigation and pavement design to suit heavy vehicle movements and regional traffic conditions.",
      },
      {
        number: "03",
        title: "Staging & Traffic Management",
        description: "Detailed construction staging plan to maintain highway operations throughout the upgrade works.",
      },
      {
        number: "04",
        title: "Construction Support & Handover",
        description: "On-site engineering support during construction with quality verification and final commissioning.",
      },
    ],

    resultsNumber: "03",
    resultsHeading: "Project Outcomes",
    resultsMetrics: [
      { value: "100%", label: "Capacity Increase" },
      { value: "4", label: "Turn Movements Added" },
      { value: "Zero", label: "Traffic Disruptions" },
      { value: "6 Months", label: "Construction Duration" },
    ],
    achievements: [
      "Delivered intersection upgrade on time and within budget.",
      "Improved safety ratings across all conflict points.",
      "Maintained full highway access throughout construction.",
      "Coordination with solar farm developer ensured future-proof design.",
    ],

    galleryNumber: "04",
    galleryHeading: "Project Gallery",
    galleryImages: [
      "/images/image12.png",
      "/images/image3.jpeg",
      "/images/image4.jpeg",
      "/images/image5.jpeg",
      "/images/image6.jpeg",
    ],

    relatedNumber: "05",
    relatedHeading: "Related Work",
    relatedProjects: [
      { title: "WAD Orange", slug: "wad-orange ", image: "/images/projects/wad_orange.jpg" },
      { title: "Loftus Street and Windsor Road, Grantham Farm", slug: "dunmore-st-wentworthville", image: "/images/image2.jpeg" },
      { title: "Liverpool Bridge Inspection", slug: "mr536-mamre-road-&-abbotts-rd-kemps-creek", image: "/images/image14.png" },
    ],
    referProjects: [
      { title: "Kelso to Raglan Drainage", image: "/images/projects/kelso.jpg", slug: "kelso-to-raglan-drainage" },
      { title: "Tenterfield Bridge", image: "/images/projects/tenterfield.jpg", slug: "tenterfield-bridge" },
      { title: "M4 Smart Motorway", image: "/images/projects/m4moter.jpg", slug: "m4-smart-motorway " },
    ],
  },
  {
    slug: "dunmore-st-wentworthville",
    index: "08",
    title: "Dunmore St Wentworthville",
    category: "",
    shortDescription:
      "Signalised intersection upgrade at Grantham Farm improving traffic flow, safety, and connectivity for the surrounding road network.",

    heroTitle: "Dunmore St Wentworthville",
    heroImage: "/images/projects/dunmore.jpg",

    stats: [
      { label: "CLIENT", value: "Transport for NSW" },
      { label: "VALUE", value: "$18 Million" },
      { label: "DURATION", value: "2022 – 2024" },
      { label: "LOCATION", value: "Grantham Farm, NSW" },
      { label: "SCOPE", value: "Signalised Intersection" },
      { label: "TEAM", value: "10 Engineers" },
    ],

    aboutNumber: "01",
    aboutHeading: "What needed to be solved.",
    aboutDescription:
      "The intersection of Loftus Street and Windsor Road at Grantham Farm required signalisation to manage increasing traffic volumes and improve safety for vehicles, pedestrians, and cyclists.",
    location: "Grantham Farm, NSW",
    challengeParagraphs: [
      "The signalised intersection design needed to accommodate rapid growth in the surrounding residential area while maintaining服务水平 during construction.",
      "Environmental constraints and existing underground services required careful design coordination and construction methodology.",
    ],

    approachNumber: "02",
    approachHeading: "How We Delivered It",
    approachSteps: [
      {
        number: "01",
        title: "Traffic Signal Design",
        description: "Design of signal phasing, controller specifications, and detection systems to optimise intersection performance.",
      },
      {
        number: "02",
        title: "Geometric & Pavement Design",
        description: "Intersection geometry, kerb returns, and pavement design to accommodate signal infrastructure and turning movements.",
      },
      {
        number: "03",
        title: "Utility Coordination",
        description: "Identification and relocation of conflicting underground services ahead of construction.",
      },
      {
        number: "04",
        title: "Signal Installation & Commissioning",
        description: "Construction support and signal commissioning including optimisation of signal timing plans.",
      },
    ],

    resultsNumber: "03",
    resultsHeading: "Project Outcomes",
    resultsMetrics: [
      { value: "40%", label: "Crash Reduction" },
      { value: "3", label: "Signal Phases" },
      { value: "24/7", label: "Signal Operation" },
      { value: "Zero", label: "Fatalities Post-Completion" },
    ],
    achievements: [
      "Delivered signalised intersection on schedule.",
      "Achieved 40% reduction in reported crashes.",
      "Improved pedestrian and cyclist facilities.",
      "Seamless integration with existing road network.",
    ],

    galleryNumber: "04",
    galleryHeading: "Project Gallery",
    galleryImages: [
      "/images/image13.png",
      "/images/image2.jpeg",
      "/images/image5.jpeg",
      "/images/image6.jpeg",
      "/images/image7.jpeg",
    ],

    relatedNumber: "05",
    relatedHeading: "Related Work",
    relatedProjects: [
      { title: "WAD Orange", slug: "wad-orange ", image: "/images/projects/wad_orange.jpg" },
      { title: "Solarfarm Intersection Upgrade, Orange", slug: "wad-orange", image: "/images/image12.png" },
      { title: "Liverpool Bridge Inspection", slug: "mr536-mamre-road-&-abbotts-rd-kemps-creek", image: "/images/image14.png" },
    ],
    referProjects: [
      { title: "Kelso to Raglan Drainage", image: "/images/projects/kelso.jpg", slug: "kelso-to-raglan-drainage" },
      { title: "Tenterfield Bridge", image: "/images/projects/tenterfield.jpg", slug: "tenterfield-bridge" },
      { title: "M4 Smart Motorway", image: "/images/projects/m4moter.jpg", slug: "m4-smart-motorway " },
    ],
  },
  {
    slug: "liverpool-bridge-inspection",
    index: "09",
    title: "Liverpool Bridge Inspection",
    category: "",
    shortDescription:
      "Road infrastructure upgrade improving intersection geometry, drainage, and overall road safety at the Mamre Road and Abbotts Road connection.",

    heroTitle: "Liverpool Bridge Inspection",
    heroImage: "/images/projects/liverpool.png",

    stats: [
      { label: "CLIENT", value: "Transport for NSW" },
      { label: "VALUE", value: "$25 Million" },
      { label: "DURATION", value: "2022 – 2025" },
      { label: "LOCATION", value: "Kemps Creek, NSW" },
      { label: "SCOPE", value: "Road & Drainage Infrastructure" },
      { label: "TEAM", value: "12 Engineers" },
    ],

    aboutNumber: "01",
    aboutHeading: "What needed to be solved.",
    aboutDescription:
      "The Mamre Road and Abbotts Road intersection at Kemps Creek required significant upgrade to improve safety, capacity, and drainage for this growing Western Sydney corridor.",
    location: "Kemps Creek, NSW",
    challengeParagraphs: [
      "The intersection upgrade was part of the Western Sydney Aerotropolis precinct development, requiring coordination with multiple stakeholders and future land use requirements.",
      "Complex drainage conditions and flood plain management required innovative stormwater solutions integrated into the intersection design.",
    ],

    approachNumber: "02",
    approachHeading: "How We Delivered It",
    approachSteps: [
      {
        number: "01",
        title: "Corridor Assessment",
        description: "Detailed assessment of existing conditions, traffic patterns, and drainage to inform design requirements.",
      },
      {
        number: "02",
        title: "Intersection & Drainage Design",
        description: "Geometry and drainage design to accommodate growth traffic and manage stormwater within the precinct.",
      },
      {
        number: "03",
        title: "Environmental & Utility Coordination",
        description: "Management of environmental approvals and utility relocations ahead of construction.",
      },
      {
        number: "04",
        title: "Construction Delivery",
        description: "Phased construction delivery with traffic management to maintain road operations.",
      },
    ],

    resultsNumber: "03",
    resultsHeading: "Project Outcomes",
    resultsMetrics: [
      { value: "60%", label: "Capacity Increase" },
      { value: "2.5 km", label: "Road Upgraded" },
      { value: "100%", label: "Drainage Capacity" },
      { value: "Zero", label: "LTI Incidents" },
    ],
    achievements: [
      "Delivered intersection upgrade ahead of program.",
      "Achieved 60% capacity increase for projected growth.",
      "Zero lost-time incidents during construction.",
      "Integrated stormwater management system exceeding requirements.",
    ],

    galleryNumber: "04",
    galleryHeading: "Project Gallery",
    galleryImages: [
      "/images/image14.png",
      "/images/image1.jpeg",
      "/images/image3.jpeg",
      "/images/image5.jpeg",
      "/images/image7.jpeg",
    ],

    relatedNumber: "05",
    relatedHeading: "Related Work",
    relatedProjects: [
      { title: "WAD Orange", slug: "wad-orange ", image: "/images/projects/wad_orange.jpg" },
      { title: "Solarfarm Intersection Upgrade, Orange", slug: "wad-orange", image: "/images/image12.png" },
      { title: "Loftus Street and Windsor Road, Grantham Farm", slug: "dunmore-st-wentworthville", image: "/images/image13.png" },
    ],
    referProjects: [
      { title: "Kelso to Raglan Drainage", image: "/images/projects/kelso.jpg", slug: "kelso-to-raglan-drainage" },
      { title: "Tenterfield Bridge", image: "/images/projects/tenterfield.jpg", slug: "tenterfield-bridge" },
      { title: "M4 Smart Motorway", image: "/images/projects/m4moter.jpg", slug: "m4-smart-motorway " },
    ],
  },
  {
    slug: "kelso-to-raglan-drainage",
    index: "10",
    title: "Kelso to Raglan Drainage",
    category: "",
    shortDescription:
      "Intersection upgrade at Riverstone improving traffic flow, pedestrian safety, and connectivity for the growing residential community.",

    heroTitle: "Kelso to Raglan Drainage",
    heroImage: "/images/projects/kelso.jpg",

    stats: [
      { label: "CLIENT", value: "Transport for NSW" },
      { label: "VALUE", value: "$15 Million" },
      { label: "DURATION", value: "2023 – 2025" },
      { label: "LOCATION", value: "Riverstone, NSW" },
      { label: "SCOPE", value: "Intersection & Pedestrian Facilities" },
      { label: "TEAM", value: "8 Engineers" },
    ],

    aboutNumber: "01",
    aboutHeading: "What needed to be solved.",
    aboutDescription:
      "The Loftus Street intersection at Riverstone required upgrade to accommodate rapid residential growth and improve safety for all road users including pedestrians and cyclists.",
    location: "Riverstone, NSW",
    challengeParagraphs: [
      "The intersection design needed to integrate with the existing urban fabric while providing capacity for future growth in the Riverstone town centre.",
      "Construction staging was critical to maintain access to local businesses and residences throughout the upgrade.",
    ],

    approachNumber: "02",
    approachHeading: "How We Delivered It",
    approachSteps: [
      {
        number: "01",
        title: "Community & Stakeholder Engagement",
        description: "Extensive consultation with community and stakeholders to develop design that balances traffic flow with pedestrian amenity.",
      },
      {
        number: "02",
        title: "Intersection Design",
        description: "Detailed geometric and signal design to optimise intersection performance and safety.",
      },
      {
        number: "03",
        title: "Pedestrian & Cycle Facilities",
        description: "Design of upgraded pedestrian crossings, footpaths, and cycle connections through the intersection.",
      },
      {
        number: "04",
        title: "Construction & Commissioning",
        description: "Phased construction with traffic management and final signal commissioning.",
      },
    ],

    resultsNumber: "03",
    resultsHeading: "Project Outcomes",
    resultsMetrics: [
      { value: "35%", label: "Crash Reduction" },
      { value: "500m", label: "New Footpaths" },
      { value: "4", label: "Pedestrian Crossings" },
      { value: "Zero", label: "LTI Incidents" },
    ],
    achievements: [
      "Delivered intersection upgrade within budget and on schedule.",
      "Improved pedestrian safety with upgraded crossing facilities.",
      "Maintained access to local businesses throughout construction.",
      "Enhanced streetscape integration with Riverstone town centre.",
    ],

    galleryNumber: "04",
    galleryHeading: "Project Gallery",
    galleryImages: [
      "/images/image2.jpeg",
      "/images/image3.jpeg",
      "/images/image4.jpeg",
      "/images/projects/tenterfield.jpg",
      "/images/image7.jpeg",
    ],

    relatedNumber: "05",
    relatedHeading: "Related Work",
    relatedProjects: [
      { title: "WAD Orange", slug: "wad-orange ", image: "/images/projects/wad_orange.jpg" },
      { title: "Loftus Street and Windsor Road, Grantham Farm", slug: "dunmore-st-wentworthville", image: "/images/image13.png" },
      { title: "Tenterfield Bridge", slug: "tenterfield-bridge", image: "/images/projects/tenterfield.jpg" },
    ],
    referProjects: [
      { title: "Kelso to Raglan Drainage", image: "/images/projects/kelso.jpg", slug: "kelso-to-raglan-drainage" },
      { title: "Tenterfield Bridge", image: "/images/projects/tenterfield.jpg", slug: "tenterfield-bridge" },
      { title: "M4 Smart Motorway", image: "/images/projects/m4moter.jpg", slug: "m4-smart-motorway " },
    ],
  },
  {
    slug: "tenterfield-bridge",
    index: "11",
    title: "Tenterfield Bridge",
    category: "Urban Infrastructure",
    shortDescription:
      "Major road upgrade improving intersection capacity, drainage infrastructure, and overall safety at the Mamre Road and Abbotts Road corridor.",

    heroTitle: "Tenterfield Bridge",
    heroImage: "/images/projects/tenterfield.jpg",

    stats: [
      { label: "CLIENT", value: "Transport for NSW" },
      { label: "VALUE", value: "$35 Million" },
      { label: "DURATION", value: "2021 – 2024" },
      { label: "LOCATION", value: "Kemps Creek, NSW" },
      { label: "SCOPE", value: "Road & Drainage" },
      { label: "TEAM", value: "14 Engineers" },
    ],

    aboutNumber: "01",
    aboutHeading: "What needed to be solved.",
    aboutDescription:
      "The Mamre Road and Abbotts Road corridor required comprehensive upgrade to support the Western Sydney growth area, improving connectivity and safety for existing and future traffic.",
    location: "Kemps Creek, NSW",
    challengeParagraphs: [
      "The corridor upgrade needed to be delivered in stages to maintain access for existing residents and businesses while accommodating future development.",
      "Complex drainage conditions required innovative stormwater management solutions integrated into the road design.",
    ],

    approachNumber: "02",
    approachHeading: "How We Delivered It",
    approachSteps: [
      {
        number: "01",
        title: "Corridor Planning",
        description: "Comprehensive corridor assessment and planning to identify staged upgrade requirements.",
      },
      {
        number: "02",
        title: "Detailed Design",
        description: "Full detailed design of road geometry, drainage, and intersection improvements.",
      },
      {
        number: "03",
        title: "Environmental Management",
        description: "Environmental impact assessment and management plan development.",
      },
      {
        number: "04",
        title: "Construction Delivery",
        description: "Staged construction delivery with comprehensive traffic management.",
      },
    ],

    resultsNumber: "03",
    resultsHeading: "Project Outcomes",
    resultsMetrics: [
      { value: "3.5 km", label: "Road Upgraded" },
      { value: "50%", label: "Capacity Increase" },
      { value: "100%", label: "Drainage Capacity" },
      { value: "Zero", label: "Safety Incidents" },
    ],
    achievements: [
      "Delivered staged upgrade on time and within budget.",
      "Improved road safety across the corridor.",
      "Integrated stormwater management exceeding requirements.",
      "Zero safety incidents during construction.",
    ],

    galleryNumber: "04",
    galleryHeading: "Project Gallery",
    galleryImages: [
      "/images/image6.jpeg",
      "/images/image1.jpeg",
      "/images/image3.jpeg",
      "/images/image5.jpeg",
      "/images/image7.jpeg",
    ],

    relatedNumber: "05",
    relatedHeading: "Related Work",
    relatedProjects: [
      { title: "WAD Orange", slug: "wad-orange ", image: "/images/projects/wad_orange.jpg" },
      { title: "Liverpool Bridge Inspection", slug: "mr536-mamre-road-&-abbotts-rd-kemps-creek", image: "/images/image14.png" },
      { title: "Kelso to Raglan Drainage", slug: "kelso-to-raglan-drainage", image: "/images/projects/kelso.jpg" },
    ],
    referProjects: [
      { title: "Kelso to Raglan Drainage", image: "/images/projects/kelso.jpg", slug: "kelso-to-raglan-drainage" },
      { title: "Tenterfield Bridge", image: "/images/projects/tenterfield.jpg", slug: "tenterfield-bridge" },
      { title: "M4 Smart Motorway", image: "/images/projects/m4moter.jpg", slug: "m4-smart-motorway " },
    ],
  },
  {
    slug: "m4-smart-motorway ",
    index: "12",
    title: "M4 Smart Motorway",
    category: "Water & Irrigation Systems",
    shortDescription:
      "Integrated stormwater management solution for a high-density urban precinct, combining flood mitigation, water quality treatment, and community amenity.",

      heroTitle: "M4 Smart Motorway",
    heroImage: "/images/projects/m4moter.jpg",

    stats: [
      { label: "CLIENT", value: "Sydney Water Corporation" },
      { label: "VALUE", value: "$45 Million" },
      { label: "DURATION", value: "2022 – 2025" },
      { label: "LOCATION", value: "Western Sydney, NSW" },
      { label: "SCOPE", value: "Stormwater & Water Quality" },
      { label: "TEAM", value: "10 Engineers" },
    ],

    aboutNumber: "01",
    aboutHeading: "What needed to be solved.",
    aboutDescription:
      "An integrated stormwater management system designed to mitigate flood risk, improve water quality, and create community amenity in a rapidly developing urban precinct.",
    location: "Western Sydney, NSW",
    challengeParagraphs: [
      "The precinct's location in a floodplain with high groundwater presented significant drainage and water management challenges.",
      "Environmental water quality targets required innovative treatment solutions integrated into the public realm.",
    ],

    approachNumber: "02",
    approachHeading: "How We Delivered It",
    approachSteps: [
      {
        number: "01",
        title: "Hydrological Assessment",
        description: "Comprehensive hydrological and hydraulic modelling of the catchment to understand flood behaviour and water quality requirements.",
      },
      {
        number: "02",
        title: "Integrated System Design",
        description: "Design of integrated stormwater network incorporating detention basins, wetlands, and bio-retention systems.",
      },
      {
        number: "03",
        title: "WSUD Integration",
        description: "Integration of water sensitive urban design features into the public realm.",
      },
      {
        number: "04",
        title: "Construction & Commissioning",
        description: "Construction support and commissioning of all stormwater assets with performance verification.",
      },
    ],

    resultsNumber: "03",
    resultsHeading: "Project Outcomes",
    resultsMetrics: [
      { value: "85%", label: "Pollutant Removal" },
      { value: "8 ML", label: "Detention Volume" },
      { value: "2 km", label: "Constructed Wetlands" },
      { value: "100%", label: "Flood Protection" },
    ],
    achievements: [
      "Achieved 85% total suspended solids removal.",
      "Created 8 hectares of new wetland habitat.",
      "Delivered on schedule despite construction challenges.",
      "Integrated community amenity with stormwater infrastructure.",
    ],

    galleryNumber: "04",
    galleryHeading: "Project Gallery",
    galleryImages: [
      "/images/image7.jpeg",
      "/images/image1.jpeg",
      "/images/image2.jpeg",
      "/images/image5.jpeg",
      "/images/image6.jpeg",
    ],

    relatedNumber: "05",
    relatedHeading: "Related Work",
    relatedProjects: [
      { title: "WAD Orange", slug: "wad-orange ", image: "/images/projects/wad_orange.jpg" },
      { title: "BMD Bridge Inspection - TBA", slug: "bmd-bridge-inspection-tba", image: "/images/image2.jpeg" },
      { title: "Tenterfield Bridge", slug: "tenterfield-bridge", image: "/images/projects/tenterfield.jpg" },
    ],
    referProjects: [
      { title: "Kelso to Raglan Drainage", image: "/images/projects/kelso.jpg", slug: "kelso-to-raglan-drainage" },
      { title: "Tenterfield Bridge", image: "/images/projects/tenterfield.jpg", slug: "tenterfield-bridge" },
      { title: "M4 Smart Motorway", image: "/images/projects/m4moter.jpg", slug: "m4-smart-motorway " },
    ],
  },
];

/**
 * Normalizes a project slug (or URL param) so lookups are resilient to
 * URL-encoding, case differences and special characters like commas,
 * ampersands, em dashes and dots that appear in project titles.
 */
export function normalizeSlug(slug: string): string {
  let decoded = slug;
  try {
    decoded = decodeURIComponent(slug);
  } catch {
    decoded = slug;
  }
  return decoded
    .toLocaleLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function getProjectBySlug(slug: string): ProjectData | undefined {
  const normalizedSlug = normalizeSlug(slug);
  return projects.find((p) => normalizeSlug(p.slug) === normalizedSlug);
}

/**
 * Maps the filter pill labels shown on the Projects page to the project
 * `category` values they should display. A filter matches a project when any
 * of its categories is listed (all comparisons are case-insensitive).
 */
export const projectFilterCategoryMap: Record<string, string[]> = {
  all: [],
  "project verification": ["Project Verification", "Structural Engineering"],
  buildings: ["Buildings", "Urban Infrastructure"],
  "civil design": ["Civil Design", "Urban Infrastructure", "Structural Engineering"],
  "asset management": ["Asset Management", "Transportation Projects"],
  "civil works": ["Civil Works", "Industrial Development"],
  "bridge works": ["Bridge Works", "Water & Irrigation Systems", "Transportation Projects"],
  "project management": ["Project Management", "Transportation Projects"],
};

// --- Projects Listing Page Static Data ---

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

export interface HeroStat {
  value: string;
  label: string;
}

export const projectsHeroStats: HeroStat[] = [
  { value: "$180M+", label: "TOTAL PROJECT VALUE DELIVERED" },
  { value: "150+", label: "PROJECTS COMPLETED" },
  { value: "3", label: "STATES OPERATING" },
  { value: "2018", label: "DELIVERING SINCE" },
];

export interface HowWeDeliverItem {
  title: string;
  description: string;
}

export const projectsHowWeDeliver: HowWeDeliverItem[] = [
  {
    title: "Senior-Led Delivery",
    description:
      "Every commission is directed by experienced Chartered and Registered Professional Engineers, ensuring senior technical oversight from project commencement through to completion.",
  },
  {
    title: "Independent Quality Review",
    description:
      "All deliverables undergo rigorous internal peer review before issue, providing an additional level of technical assurance and quality control.",
  },
  {
    title: "End-to-End Capability",
    description:
      "From feasibility studies and concept design through detailed engineering, construction support, project verification, and final certification, we provide seamless delivery under a single engagement.",
  },
  {
    title: "Reliable Delivery",
    description:
      "With 98% of projects delivered in accordance with the agreed programme, we are committed to meeting deadlines without compromising quality, safety, or technical excellence.",
  },
];

export interface ProjectsContactInfo {
  company_name: string;
  address1: string;
  address2: string;
  phone: string;
  email1: string;
  email2: string;
}

export const defaultHeroImage = "/images/image5.jpeg";

export const projectsContactInfo: ProjectsContactInfo = {
  company_name: "ZAMR Engineering Pty Ltd",
  address1: "30 Smith Street Wentworthville NSW, 2145",
  address2: "L14, 3 Parramatta Square, 153 Macquarie St, Parramatta, NSW 2150",
  phone: "02 9688 5322",
  email1: "admin@zamrengineering.com.au",
  email2: "khalid.javed@zamrengineering.com.au",
};
