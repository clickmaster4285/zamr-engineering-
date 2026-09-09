export interface ServiceCapability {
  title: string;
  items: string[];
}

export interface ServiceData {
  slug: string;
  index: string;
  title: string;
  description: string;
  tags: string[];
  capabilities: ServiceCapability[];
}

export interface SpecialistExpertise {
  slug: string;
  index: string;
  title: string;
  description: string;
  capabilities: ServiceCapability[];
}

export const services: ServiceData[] = [
  {
    slug: "engineering-and-design",
    index: "01",
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
    capabilities: [
      {
        title: "Civil Engineering",
        items: [
          "Road and intersection design",
          "Earthworks and site grading",
          "Stormwater and drainage design",
          "Culverts and cross-drainage structures",
          "Pavement design",
          "Utilities coordination",
          "Shared paths and active transport infrastructure",
        ],
      },
      {
        title: "Structural Engineering",
        items: [
          "Structural analysis and design",
          "Retaining walls",
          "Foundations",
          "Culverts and drainage structures",
          "Temporary works",
          "Protection slabs",
          "Structural assessment and strengthening",
        ],
      },
      {
        title: "Transport & Traffic Engineering",
        items: [
          "Intersection and road network improvements",
          "Traffic impact assessments",
          "Traffic signal design",
          "SIDRA and network modelling",
          "Traffic management planning",
          "Traffic control plans",
          "Road safety engineering",
        ],
      },
      {
        title: "Bridge Engineering",
        items: [
          "Concept and detailed bridge design",
          "Structural analysis",
          "Foundation design",
          "Load assessment",
          "Rehabilitation and strengthening design",
          "Constructability and design reviews",
        ],
      },
      {
        title: "Drainage & Water",
        items: [
          "Hydrologic and hydraulic assessment",
          "Stormwater drainage",
          "Pipe and culvert systems",
          "Scour protection",
          "Flood mitigation",
          "Drainage rehabilitation",
        ],
      },
      {
        title: "Engineering Advisory & Investigations",
        items: [
          "Business cases",
          "Engineering investigations",
          "Options assessment",
          "Technical feasibility",
          "Project planning and scoping",
          "Safety in Design",
          "Constructability reviews",
          "Value engineering",
        ],
      },
    ],
  },
  {
    slug: "project-and-program-management",
    index: "02",
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
    capabilities: [
      {
        title: "Project Management",
        items: [
          "Scope definition and project planning",
          "Programming and scheduling",
          "Budget and cost management",
          "Risk and opportunity management",
          "Team coordination",
          "Quality management",
          "Reporting and governance",
        ],
      },
      {
        title: "Program Management",
        items: [
          "Strategic program planning",
          "Multi-project coordination",
          "Resource management",
          "Program controls",
          "Stakeholder engagement",
          "Performance monitoring",
        ],
      },
      {
        title: "Contract & Commercial Management",
        items: [
          "Contract administration",
          "Change and variation management",
          "Claims assessment",
          "Documentation control",
          "Performance monitoring",
          "Commercial reviews",
          "Dispute support",
        ],
      },
      {
        title: "Procurement & Tendering",
        items: [
          "Procurement strategies",
          "Tender documentation",
          "Specifications",
          "Tender evaluation support",
          "Contractor engagement",
          "Estimating and pricing",
          "Delivery methodology",
          "Risk and opportunity assessment",
        ],
      },
      {
        title: "Stakeholder & Interface Management",
        items: [
          "Government and authority interfaces",
          "Utilities coordination",
          "Client and contractor coordination",
          "Community and stakeholder engagement",
          "Design and construction interfaces",
          "Issue resolution",
        ],
      },
      {
        title: "Project Controls",
        items: [
          "Programme development",
          "Cost tracking",
          "Progress monitoring",
          "Risk registers",
          "Forecasting",
          "Reporting dashboards",
          "Project governance",
        ],
      },
    ],
  },
  {
    slug: "project-verification-and-assurance",
    index: "03",
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
    capabilities: [
      {
        title: "TfNSW WAD Project Verification",
        items: [
          "Independent Project Verifier services",
          "WAD requirements",
          "Design verification",
          "Construction verification",
          "Monthly certification",
          "Compliance monitoring",
          "Project close-out support",
        ],
      },
      {
        title: "Design Verification",
        items: [
          "Design compliance review",
          "Standards and specification compliance",
          "Technical accuracy review",
          "Constructability assessment",
          "Safety and risk review",
          "Interface review",
          "Design certification",
        ],
      },
      {
        title: "Construction Verification",
        items: [
          "Compliance with approved design",
          "Site inspections",
          "Hold point reviews",
          "Materials verification",
          "Construction quality monitoring",
          "Environmental and safety compliance",
          "Records and documentation review",
        ],
      },
      {
        title: "Traffic Control Signal Verification",
        items: [
          "Signal design compliance",
          "Intersection safety assessment",
          "Phasing and timing review",
          "Capacity and traffic-flow assessment",
          "Utility interface review",
          "Integration with existing infrastructure",
        ],
      },
      {
        title: "Quality Assurance",
        items: [
          "Inspection and Test Plan reviews",
          "Hold point verification",
          "Non-conformance management",
          "Requests for Information",
          "Materials quality",
          "Technical documentation",
          "Quality system oversight",
        ],
      },
      {
        title: "Independent Technical Review",
        items: [
          "Proof engineering",
          "Peer review",
          "Technical due diligence",
          "Constructability review",
          "Compliance assessment",
          "Risk-based technical review",
        ],
      },
    ],
  },
  {
    slug: "asset-management-and-inspection",
    index: "04",
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
    capabilities: [
      {
        title: "Asset Inspections",
        items: [
          "Bridge inspections",
          "Road infrastructure inspections",
          "Structural inspections",
          "Drainage and culvert inspections",
          "Building and civil asset inspections",
          "Photographic and digital records",
        ],
      },
      {
        title: "Condition Assessment",
        items: [
          "Visual inspection",
          "Defect identification",
          "Condition rating",
          "Structural assessment",
          "Deterioration analysis",
          "Risk identification",
          "Maintenance prioritisation",
        ],
      },
      {
        title: "Asset Management",
        items: [
          "Asset registers and inventories",
          "Lifecycle planning",
          "Risk assessment",
          "Performance monitoring",
          "Maintenance strategies",
          "Cost optimisation",
          "Renewal prioritisation",
        ],
      },
      {
        title: "Bridge Asset Management",
        items: [
          "Level 2 and Level 3 inspections",
          "Structural condition assessment",
          "Defect mapping",
          "Load assessment support",
          "Rehabilitation planning",
          "Maintenance strategies",
          "Portfolio-level reviews",
        ],
      },
      {
        title: "Road & Civil Assets",
        items: [
          "Pavements",
          "Drainage",
          "Culverts",
          "Retaining structures",
          "Road furniture",
          "Safety barriers",
          "Shared paths and associated infrastructure",
        ],
      },
      {
        title: "Digital Asset Support",
        items: [
          "Drone-assisted inspections",
          "Photographic asset records",
          "BIM/digital asset information",
          "Condition databases",
          "Defect registers",
          "Digital reporting",
        ],
      },
    ],
  },
  {
    slug: "buildings-and-property-engineering",
    index: "05",
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
    capabilities: [
      {
        title: "Structural Engineering",
        items: [
          "Structural design",
          "Foundations",
          "Load-bearing elements",
          "Retaining walls",
          "Structural alterations",
          "Strengthening and remediation",
          "Structural assessments",
        ],
      },
      {
        title: "Civil & Stormwater",
        items: [
          "Site grading",
          "Stormwater drainage",
          "Driveways and pavements",
          "Retaining structures",
          "External works",
          "Service coordination",
        ],
      },
      {
        title: "Building Inspection & Assessment",
        items: [
          "Structural inspections",
          "Condition assessments",
          "Defect investigations",
          "Existing-building assessments",
          "Construction inspections",
          "Compliance inspections",
        ],
      },
      {
        title: "Certification & Engineering Advice",
        items: [
          "Structural certification",
          "Engineering certificates",
          "Design compliance checks",
          "Milestone inspections",
          "Temporary works certification",
          "Technical reports",
        ],
      },
      {
        title: "Dilapidation Surveys",
        items: [
          "Pre-construction surveys",
          "Post-construction surveys",
          "Photographic documentation",
          "Defect records",
          "Structural observations",
          "Comparative assessments",
        ],
      },
      {
        title: "Construction & Development Support",
        items: [
          "Design coordination",
          "Construction supervision",
          "Contractor coordination",
          "Quality assurance",
          "Progress monitoring",
          "Technical support",
        ],
      },
    ],
  },
  {
    slug: "construction-and-project-delivery",
    index: "06",
    title: "Construction & Project Delivery",
    description:
      "ZAMR Engineering provides engineering-led construction and project delivery services for civil and infrastructure works. Our involvement combines technical understanding with practical construction management to deliver safe, compliant and buildable outcomes.",
    tags: [
      "Civil Works",
      "Roads",
      "Drainage",
      "Concrete",
      "Structures",
      "Site Delivery",
    ],
    capabilities: [
      {
        title: "Road Works",
        items: [
          "Earthworks and excavation",
          "Subbase and base construction",
          "Pavement rehabilitation",
          "Asphalt works",
          "Line marking",
          "Signage",
          "Traffic management",
        ],
      },
      {
        title: "Drainage Works",
        items: [
          "Excavation and trenching",
          "Pipe installation",
          "Culverts",
          "Pits and headwalls",
          "Foundation treatment",
          "Scour protection",
          "Stormwater rehabilitation",
        ],
      },
      {
        title: "Structural & Bridge Works",
        items: [
          "Foundations",
          "Concrete structures",
          "Bridge components",
          "Temporary works",
          "Expansion joints",
          "Deck and structural repairs",
          "Rehabilitation works",
        ],
      },
      {
        title: "Concrete Works",
        items: [
          "Concrete foundations",
          "Pavements",
          "Kerb and gutter",
          "Footpaths",
          "Concrete coring",
          "Slabs and structural concrete",
        ],
      },
      {
        title: "Site & Construction Management",
        items: [
          "Site supervision",
          "Safety management",
          "Quality control",
          "Programme monitoring",
          "Resource coordination",
          "Site logistics",
          "Contractor interfaces",
        ],
      },
      {
        title: "Project Handover",
        items: [
          "Completion inspections",
          "Defect close-out",
          "Quality documentation",
          "Asset records",
          "As-constructed information",
          "Handover support",
        ],
      },
    ],
  },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return services.find((service) => service.slug === slug);
}

export const specialistExpertise: SpecialistExpertise[] = [
  {
    slug: "bridges-and-structures",
    index: "01",
    title: "Bridges & Structures",
    description:
      "Bridges and structures are a core area of ZAMR's specialist expertise, supported by extensive experience in bridge management, design, inspection, rehabilitation, construction and asset management. We provide services across the complete bridge lifecycle—from assessment and design through construction, verification and ongoing asset management.",
    capabilities: [
      {
        title: "Bridge Design",
        items: [
          "Concept and detailed design",
          "Structural analysis",
          "Load assessment",
          "Foundation design",
          "Culvert and bridge structures",
          "Design optimisation",
        ],
      },
      {
        title: "Bridge Inspection",
        items: [
          "Level 2 inspections",
          "Level 3 inspections",
          "Condition assessment",
          "Defect identification and mapping",
          "Structural evaluation",
          "Inspection reporting",
        ],
      },
      {
        title: "Rehabilitation & Strengthening",
        items: [
          "Rehabilitation strategies",
          "Structural strengthening",
          "Component replacement",
          "Crack and concrete repairs",
          "Bearing and joint works",
          "Protective treatments",
        ],
      },
      {
        title: "Bridge Asset Management",
        items: [
          "Condition rating",
          "Maintenance planning",
          "Lifecycle management",
          "Risk assessment",
          "Portfolio reviews",
          "Renewal prioritisation",
        ],
      },
      {
        title: "Independent Review & Certification",
        items: [
          "Design verification",
          "Proof engineering",
          "Load assessment",
          "Structural certification",
          "Technical review",
          "Construction verification",
        ],
      },
    ],
  },
  {
    slug: "traffic-and-road-safety",
    index: "02",
    title: "Traffic & Road Safety",
    description:
      "ZAMR Engineering provides traffic engineering and road safety services to support safe, efficient and practical transport outcomes for road authorities, councils, developers and infrastructure contractors.",
    capabilities: [
      {
        title: "Road Safety Audits",
        items: [
          "Existing roads",
          "Concept design",
          "Detailed design",
          "Pre-opening",
          "Post-construction",
          "Temporary traffic arrangements",
        ],
      },
      {
        title: "Traffic Impact Assessment",
        items: [
          "Development traffic assessment",
          "Trip generation",
          "Intersection analysis",
          "Parking demand",
          "Network impacts",
          "Mitigation recommendations",
        ],
      },
      {
        title: "Traffic Modelling",
        items: [
          "SIDRA modelling",
          "Intersection modelling",
          "Network analysis",
          "Delay and queue analysis",
          "Scenario testing",
          "Capacity assessment",
        ],
      },
      {
        title: "Traffic Signal Engineering",
        items: [
          "Traffic signal design",
          "Signal warrant assessment",
          "Phasing and timing",
          "Pedestrian facilities",
          "Vehicle detection",
          "TfNSW compliance",
        ],
      },
      {
        title: "Traffic Management",
        items: [
          "Traffic Management Plans",
          "Traffic Control Plans",
          "Construction staging",
          "Temporary traffic arrangements",
          "Pedestrian and cyclist management",
          "Construction access planning",
        ],
      },
      {
        title: "Traffic Surveys",
        items: [
          "Traffic counts",
          "Turning movements",
          "Pedestrian counts",
          "Speed surveys",
          "Peak-hour analysis",
          "Data reporting",
        ],
      },
    ],
  },
  {
    slug: "civil-infrastructure",
    index: "03",
    title: "Civil Infrastructure",
    description:
      "ZAMR Engineering provides civil infrastructure engineering across roads, drainage, pavements, utilities and land development, combining practical design expertise with an understanding of construction and asset performance.",
    capabilities: [
      {
        title: "Roads & Pavements",
        items: [
          "Road geometry",
          "Intersection upgrades",
          "Pavement design",
          "Rehabilitation",
          "Shared paths",
          "Access roads",
        ],
      },
      {
        title: "Drainage",
        items: [
          "Stormwater systems",
          "Culverts",
          "Pits and headwalls",
          "Flood mitigation",
          "Scour protection",
          "Drainage rehabilitation",
        ],
      },
      {
        title: "Earthworks",
        items: [
          "Site grading",
          "Bulk earthworks",
          "Cut and fill",
          "Embankments",
          "Foundation preparation",
          "Site development",
        ],
      },
      {
        title: "Utilities",
        items: [
          "Utility identification",
          "Coordination",
          "Relocation planning",
          "Protection works",
          "Service interfaces",
        ],
      },
      {
        title: "Civil Structures",
        items: [
          "Retaining walls",
          "Culverts",
          "Headwalls",
          "Protection slabs",
          "Foundations",
          "Temporary structures",
        ],
      },
    ],
  },
  {
    slug: "digital-engineering-and-bim",
    index: "04",
    title: "Digital Engineering & BIM",
    description:
      "ZAMR Engineering integrates digital engineering, BIM, data and emerging technology into project delivery to improve coordination, decision-making, quality and efficiency.",
    capabilities: [
      {
        title: "BIM & Digital Modelling",
        items: [
          "BIM models",
          "Design coordination",
          "Model review",
          "Construction modelling",
          "Asset information models",
        ],
      },
      {
        title: "Drafting",
        items: [
          "Civil drawings",
          "Structural drawings",
          "Shop drawings",
          "Survey plans",
          "Work-as-executed drawings",
          "Technical detailing",
        ],
      },
      {
        title: "Digital Project Delivery",
        items: [
          "Digital document workflows",
          "Project dashboards",
          "Data management",
          "Digital QA",
          "Collaboration platforms",
        ],
      },
      {
        title: "Technology-Enabled Inspections",
        items: [
          "Drone imagery",
          "Digital defect records",
          "Photographic registers",
          "Condition databases",
          "Digital inspection reporting",
        ],
      },
      {
        title: "AI-Enabled Engineering",
        items: [
          "AI-assisted technical workflows",
          "Information review",
          "Knowledge management",
          "Reporting support",
          "Process automation",
        ],
      },
    ],
  },
  {
    slug: "inspection-certification-and-technical-assurance",
    index: "05",
    title: "Inspection, Certification & Technical Assurance",
    description:
      "ZAMR provides independent inspection, certification and technical-assurance services to support compliance, manage risk and give clients confidence in the condition and performance of their assets and projects.",
    capabilities: [
      {
        title: "Engineering Inspections",
        items: [
          "Structural inspections",
          "Civil inspections",
          "Construction inspections",
          "Existing asset inspections",
          "Defect investigations",
        ],
      },
      {
        title: "Certification",
        items: [
          "Structural certification",
          "Temporary works certification",
          "Engineering certificates",
          "Construction compliance",
          "Design compliance",
        ],
      },
      {
        title: "Dilapidation",
        items: [
          "Pre-construction surveys",
          "Post-construction surveys",
          "Photographic records",
          "Comparative condition reporting",
        ],
      },
      {
        title: "Technical Assessment",
        items: [
          "Structural assessment",
          "Condition assessment",
          "Engineering investigations",
          "Technical due diligence",
          "Failure and defect investigation",
        ],
      },
      {
        title: "Quality & Compliance",
        items: [
          "ITP reviews",
          "Hold point inspections",
          "QA audits",
          "Compliance reviews",
          "Documentation verification",
        ],
      },
    ],
  },
];

// --- Services Page Static Data (shared with other components) ---

export const defaultHeroImage = "/images/image5.jpeg";

export interface ServicesHeroContent {
  title: string;
  subtitle: string;
  image: string;
}

export const servicesHero: ServicesHeroContent = {
  title: "Our Services",
  subtitle:
    "Specialist engineering services delivering practical, compliant, and buildable infrastructure solutions across New South Wales.",
  image: "/images/image5.jpeg",
};

export const servicesCapabilitiesSection = {
  sectionNumber: "01",
  sectionLabel: "SERVICES",
  heading: "Our Full Capabilities",
};

export interface WhyZamrFeature {
  number: string;
  eyebrow: string;
  title: string;
  description: string;
}

export interface WhyZamrSection {
  sectionNumber: string;
  sectionLabel: string;
  heading: string;
  subtitle: string;
  intro: string;
  features: WhyZamrFeature[];
}

export const whyZamrSection: WhyZamrSection = {
  sectionNumber: "02",
  sectionLabel: "WHY ZAMR",
  heading: "The ZAMR Difference",
  subtitle: "Built on experience. Focused on the future.",
  intro:
    "We combine senior engineering judgement, independent technical assurance and practical delivery experience with the agility and technology-driven approach of a modern consultancy. The result is engineering advice that is clear, responsive and focused on outcomes.",
  features: [
    {
      number: "01",
      eyebrow: "EXPERIENCE WHERE IT MATTERS",
      title: "Senior-Led Engineering",
      description:
        "Our projects are supported by experienced engineering professionals who understand not only design, but how infrastructure is approved, constructed, verified, operated and maintained. That lifecycle perspective helps us identify issues early, make sound decisions and develop practical solutions that work beyond the drawing board.",
    },
    {
      number: "02",
      eyebrow: "CONFIDENCE THROUGH INDEPENDENCE",
      title: "Technical Assurance with Integrity",
      description:
        "Independence, professional judgement and technical integrity underpin our verification, certification and assurance services. We assess projects objectively against applicable requirements, identify risks clearly and provide clients and stakeholders with the confidence to make informed decisions.",
    },
    {
      number: "03",
      eyebrow: "WE UNDERSTAND THE DELIVERY ENVIRONMENT",
      title: "Government, Authority & Infrastructure Expertise",
      description:
        "Our experience spans government agencies, councils, developers, contractors and infrastructure owners. We understand the standards, specifications, approval pathways, interfaces and delivery pressures that shape real projects — particularly within transport and public infrastructure environments.",
    },
    {
      number: "04",
      eyebrow: "MORE THAN A CONSULTANT",
      title: "Integrated From Vision to Completion",
      description:
        "Our capability extends from planning, investigations and engineering design through project management, verification, construction support, inspection and asset management. Clients can engage ZAMR for a specialist assignment or bring us into the wider delivery team — reducing interfaces and maintaining continuity across the project lifecycle.",
    },
    {
      number: "05",
      eyebrow: "AGILE BY DESIGN. FUTURE FOCUSED.",
      title: "Technology-Enabled, Client-Focused Delivery",
      description:
        "Our focused core team, supported by an established network of specialist professionals, allows us to assemble the right expertise around each assignment while maintaining senior involvement and accountability. We continue to integrate digital engineering, data and AI-enabled workflows to improve efficiency, collaboration and the quality of our engineering outcomes.",
    },
  ],
};

export interface MethodologyStep {
  number: string;
  title: string;
  description: string;
}

export interface MethodologySection {
  sectionNumber: string;
  sectionLabel: string;
  heading: string;
  subtitle: string;
  steps: MethodologyStep[];
}

export const methodologySection: MethodologySection = {
  sectionNumber: "03",
  sectionLabel: "METHODOLOGY",
  heading: "From Planning to Delivery",
  subtitle:
    "Supporting projects through every stage with practical engineering expertise and disciplined project delivery.",
  steps: [
    {
      number: "01",
      title: "Understand",
      description: "Project requirements and challenges",
    },
    {
      number: "02",
      title: "Develop",
      description: "Engineering and delivery solutions",
    },
    {
      number: "03",
      title: "Deliver",
      description: "Quality-focused project execution",
    },
    {
      number: "04",
      title: "Support",
      description: "Verification, improvement, and ongoing support",
    },
  ],
};