export interface ServiceData {
  slug: string;
  index: string;
  title: string;
  shortDescription: string;
  tags: string[][];
  heroTitle: string;
  heroSubtitle: string;
  overviewNumber: string;
  overviewHeading: string;
  overviewParagraphs: string[];
  serviceDetails: { label: string; value: string }[];
  capabilitiesNumber: string;
  capabilitiesHeading: string;
  capabilities: { title: string; description: string }[];
  processNumber: string;
  processHeading: string;
  processSteps: { number: string; title: string; description: string }[];
  deliverablesNumber: string;
  deliverablesHeading: string;
  deliverablesSubtext: string;
  deliverables: string[];
  relatedNumber: string;
  relatedHeading: string;
  relatedProjects: { title: string; image: string; slug: string }[];
}

export const services: ServiceData[] = [
  {
    slug: "engineering-and-design",
    index: "01",
    title: "Engineering & Design",
    shortDescription:
      "Integrated engineering and design services across civil, structural, transport and infrastructure projects — from early investigations through detailed design and construction support.",
    tags: [["Civil", "Structural", "Transport & Traffic", "Bridges"], ["Drainage", "Geotechnical"]],
    heroTitle: "ENGINEERING & DESIGN",
    heroSubtitle: "Practical, buildable, value-focused engineering.",
    overviewNumber: "01",
    overviewHeading: "What is Engineering & Design?",
    overviewParagraphs: [
      "ZAMR Engineering provides integrated engineering and design services across civil, structural, transport and infrastructure projects. From early investigations and concept development through detailed design and construction support, we deliver practical, buildable and value-focused solutions tailored to project requirements.",
      "Our multidisciplinary team draws on civil, structural, bridge, transport, drainage and geotechnical expertise to deliver designs that are rigorously analysed, code-compliant and engineered for long service life.",
    ],
    serviceDetails: [
      { label: "SERVICE AREA", value: "NSW · QLD · VIC" },
      { label: "TEAM SIZE", value: "18 Engineers" },
      { label: "ACCREDITATION", value: "Engineers Australia RPEQ" },
      { label: "TYPICAL DURATION", value: "2 – 24 months" },
      { label: "PROJECT SCALE", value: "$100K – $200M+" },
      { label: "SECTOR", value: "Government · Private · Industrial" },
    ],
    capabilitiesNumber: "02",
    capabilitiesHeading: "Engineering Capabilities",
    capabilities: [
      { title: "Civil Engineering", description: "Road and intersection design, earthworks and site grading, stormwater and drainage design, pavement design, utilities coordination and active transport infrastructure." },
      { title: "Structural Engineering", description: "Structural analysis and design, retaining walls, foundations, culverts and drainage structures, temporary works, protection slabs and strengthening." },
      { title: "Transport & Traffic Engineering", description: "Intersection and network improvements, traffic impact assessments, traffic signal design, SIDRA modelling, traffic management planning and road safety." },
      { title: "Bridge Engineering", description: "Concept and detailed bridge design, structural analysis, foundation design, load assessment, rehabilitation and strengthening design." },
      { title: "Drainage & Water", description: "Hydrologic and hydraulic assessment, stormwater drainage, pipe and culvert systems, scour protection, flood mitigation and drainage rehabilitation." },
      { title: "Engineering Advisory & Investigations", description: "Business cases, options assessment, technical feasibility, project planning and scoping, Safety in Design, constructability reviews and value engineering." },
    ],
    processNumber: "03",
    processHeading: "Our Engineering Process",
    processSteps: [
      { number: "01", title: "Project Briefing & Scope Definition", description: "We engage with your project team to define scope, constraints, and objectives. A tailored project brief and preliminary program are established." },
      { number: "02", title: "Site Investigation & Data Gathering", description: "Geotechnical, survey, and utility data are collected and reviewed. Site conditions are assessed against the design requirements." },
      { number: "03", title: "Concept & Preliminary Design", description: "Multiple design options are developed and evaluated. A preferred option is selected based on cost, constructability, and technical performance." },
      { number: "04", title: "Detailed Design & Documentation", description: "Full engineering calculations, construction drawings, specifications, and BOQ are produced to the required regulatory standard." },
      { number: "05", title: "Authority & Compliance Approvals", description: "We manage all design-phase authority submissions, RMS, council, and EPA concurrences, and coordinate Principal Certifier engagement." },
      { number: "06", title: "Construction Support & As-Built", description: "Our engineers provide RFI responses, hold-point inspections, and as-built certification to close out the project." },
    ],
    deliverablesNumber: "04",
    deliverablesHeading: "Engineering Deliverables",
    deliverablesSubtext: "Every engagement is scoped to your project requirements. Below is a representative set of deliverables for a full-scope engineering engagement.",
    deliverables: [
      "Engineering design reports and calculations",
      "Construction drawings (all disciplines)",
      "Technical specifications and material schedules",
      "Bill of Quantities and engineer's estimate",
      "Authority submission packages",
      "Construction inspection and hold-point sign-off",
      "As-built drawings and certification letters",
      "Design verification statements",
    ],
    relatedNumber: "05",
    relatedHeading: "Related Work",
    relatedProjects: [
      { title: "Metropolitan Bridge Rehabilitation", image: "/images/image6.jpeg", slug: "metropolitan-bridge-rehabilitation" },
      { title: "Hunter Valley Renewable Energy Hub", image: "/images/image2.jpeg", slug: "hunter-valley-renewable-energy-hub" },
      { title: "Urban Stormwater Management System", image: "/images/image7.jpeg", slug: "urban-stormwater-management-system" },
    ],
  },
  {
    slug: "project-and-program-management",
    index: "02",
    title: "Project & Program Management",
    shortDescription:
      "Senior-led project and program management across the infrastructure lifecycle — from project development and procurement through design, construction and close-out.",
    tags: [["Project Management", "Contract Management"], ["Procurement", "Commercial", "Delivery Advisory"]],
    heroTitle: "PROJECT & PROGRAM MANAGEMENT",
    heroSubtitle: "Effective governance. Commercial control. Successful outcomes.",
    overviewNumber: "01",
    overviewHeading: "What is Project & Program Management?",
    overviewParagraphs: [
      "ZAMR Engineering provides project and program management services across the infrastructure lifecycle, from project development and procurement through design, construction and close-out. Our senior-led approach focuses on effective governance, commercial control, stakeholder coordination and successful project outcomes.",
      "We provide the discipline, reporting and controls required to keep complex programs on time, on budget and aligned with stakeholder expectations.",
    ],
    serviceDetails: [
      { label: "SERVICE AREA", value: "NSW · ACT · QLD" },
      { label: "TEAM SIZE", value: "12 Specialists" },
      { label: "ACCREDITATION", value: "AIPM / PMP" },
      { label: "TYPICAL DURATION", value: "3 – 36 months" },
      { label: "PROJECT SCALE", value: "$500K – $500M+" },
      { label: "SECTOR", value: "Government · Private" },
    ],
    capabilitiesNumber: "02",
    capabilitiesHeading: "Management Capabilities",
    capabilities: [
      { title: "Project Management", description: "Scope definition, programming, budget and cost management, risk and opportunity management, team coordination, quality management and reporting." },
      { title: "Program Management", description: "Strategic program planning, multi-project coordination, resource management, program controls, stakeholder engagement and performance monitoring." },
      { title: "Contract & Commercial Management", description: "Contract administration, change and variation management, claims assessment, documentation control, commercial reviews and dispute support." },
      { title: "Procurement & Tendering", description: "Procurement strategies, tender documentation, specifications, evaluation support, contractor engagement, estimating and risk assessment." },
      { title: "Stakeholder & Interface Management", description: "Government and authority interfaces, utilities coordination, community engagement, and design-construction interface resolution." },
      { title: "Project Controls", description: "Programme development, cost tracking, progress monitoring, risk registers, forecasting, dashboards and project governance." },
    ],
    processNumber: "03",
    processHeading: "Our Management Process",
    processSteps: [
      { number: "01", title: "Programme Development", description: "We establish the project programme, milestones, resourcing plan and governance structure." },
      { number: "02", title: "Procurement & Tendering", description: "Procurement strategy and tender documentation are prepared and managed to contract award." },
      { number: "03", title: "Contract Administration", description: "Contracts are administered systematically, including variations, claims and commercial reviews." },
      { number: "04", title: "Progress & Cost Controls", description: "Progress, cost and risk are tracked against baseline with regular reporting and dashboards." },
      { number: "05", title: "Stakeholder & Interface Management", description: "Government, authority, utility and community interfaces are coordinated and resolved." },
      { number: "06", title: "Handover & Close-Out", description: "We manage completion inspection, documentation and close-out to support seamless handover." },
    ],
    deliverablesNumber: "04",
    deliverablesHeading: "Management Deliverables",
    deliverablesSubtext: "Our engagements produce structured, actionable outputs that support effective governance and control at every stage.",
    deliverables: [
      "Project management plans and governance structures",
      "Programmes, schedules and resource plans",
      "Cost and budget reports",
      "Risk and opportunity registers",
      "Procurement and tender documentation",
      "Progress and performance dashboards",
      "Close-out and handover reports",
    ],
    relatedNumber: "05",
    relatedHeading: "Related Work",
    relatedProjects: [
      { title: "Western Sydney Infrastructure Corridor", image: "/images/image1.jpeg", slug: "western-sydney-infrastructure-corridor" },
      { title: "Hunter Valley Renewable Energy Hub", image: "/images/image2.jpeg", slug: "hunter-valley-renewable-energy-hub" },
    ],
  },
  {
    slug: "project-verification-and-assurance",
    index: "03",
    title: "Project Verification & Assurance",
    shortDescription:
      "Independent project verification and technical assurance for transport and infrastructure — with particular expertise in TfNSW developer-delivered works.",
    tags: [["TfNSW WAD", "Independent Verification"], ["Design Verification", "Construction Verification", "Quality Assurance"]],
    heroTitle: "PROJECT VERIFICATION & ASSURANCE",
    heroSubtitle: "Independent oversight. Complete confidence.",
    overviewNumber: "01",
    overviewHeading: "What is Project Verification & Assurance?",
    overviewParagraphs: [
      "ZAMR Engineering provides independent Project Verification and technical assurance services for transport and infrastructure projects, with particular expertise in TfNSW developer-delivered works. We provide independent oversight across design and construction to confirm compliance, quality and technical integrity.",
      "Operating with full independence from design teams, our verifiers deliver impartial, evidence-based findings aligned with Infrastructure NSW and TfNSW assurance frameworks.",
    ],
    serviceDetails: [
      { label: "SERVICE AREA", value: "NSW · QLD · VIC" },
      { label: "TEAM SIZE", value: "10 Verifiers" },
      { label: "ACCREDITATION", value: "TfNSW WAD Accredited" },
      { label: "TYPICAL DURATION", value: "2 – 24 months" },
      { label: "PROJECT SCALE", value: "$100K – $300M+" },
      { label: "SECTOR", value: "Government · Private" },
    ],
    capabilitiesNumber: "02",
    capabilitiesHeading: "Verification Capabilities",
    capabilities: [
      { title: "TfNSW WAD Project Verification", description: "Independent Project Verifier services, WAD requirements, design and construction verification, monthly certification and close-out support." },
      { title: "Design Verification", description: "Design compliance review, standards and specification compliance, technical accuracy, constructability, safety and interface review, and certification." },
      { title: "Construction Verification", description: "Compliance with approved design, site inspections, hold point reviews, materials verification, quality monitoring and records review." },
      { title: "Traffic Control Signal Verification", description: "Signal design compliance, intersection safety assessment, phasing and timing review, capacity assessment and integration review." },
      { title: "Quality Assurance", description: "Inspection and Test Plan reviews, hold point verification, non-conformance management, RFI management and materials quality." },
      { title: "Independent Technical Review", description: "Proof engineering, peer review, technical due diligence, constructability review, compliance assessment and risk-based review." },
    ],
    processNumber: "03",
    processHeading: "Our Verification Process",
    processSteps: [
      { number: "01", title: "Scope Definition", description: "We work with you to define the verification scope, standards and acceptance criteria." },
      { number: "02", title: "Document Review", description: "All relevant design documents, specifications and records are reviewed against requirements." },
      { number: "03", title: "Site Inspection", description: "On-site inspections verify that construction aligns with approved designs and specifications." },
      { number: "04", title: "Findings & Reporting", description: "A comprehensive verification report is produced, detailing findings, non-conformances and recommendations." },
      { number: "05", title: "Remediation & Close-Out", description: "We verify that all identified issues have been resolved and closed out to the required standard." },
      { number: "06", title: "Certificate Issuance", description: "A final verification certificate is issued, providing formal assurance of compliance." },
    ],
    deliverablesNumber: "04",
    deliverablesHeading: "Verification Deliverables",
    deliverablesSubtext: "Our verification engagements are structured to provide clear, actionable outputs at every stage.",
    deliverables: [
      "Verification scope and methodology report",
      "Design review and compliance checklists",
      "Site inspection reports and photographs",
      "Non-conformance and observation registers",
      "Progressive verification statements",
      "Final verification certificate",
      "Close-out report",
    ],
    relatedNumber: "05",
    relatedHeading: "Related Work",
    relatedProjects: [
      { title: "Western Sydney Infrastructure Corridor", image: "/images/image1.jpeg", slug: "western-sydney-infrastructure-corridor" },
      { title: "Metropolitan Bridge Rehabilitation", image: "/images/image6.jpeg", slug: "metropolitan-bridge-rehabilitation" },
    ],
  },
  {
    slug: "asset-management-and-inspection",
    index: "04",
    title: "Asset Management & Inspection",
    shortDescription:
      "Asset management, inspection and condition assessment services that help infrastructure owners understand condition, manage risk and optimise maintenance and renewal investment.",
    tags: [["Bridge Inspections", "Structural Inspections"], ["Condition Assessment", "Asset Management", "Lifecycle Planning"]],
    heroTitle: "ASSET MANAGEMENT & INSPECTION",
    heroSubtitle: "Understand condition. Manage risk. Optimise investment.",
    overviewNumber: "01",
    overviewHeading: "What is Asset Management & Inspection?",
    overviewParagraphs: [
      "ZAMR Engineering provides asset management, inspection and condition assessment services to help infrastructure owners understand asset condition, manage risk and optimise maintenance and renewal investment across the asset lifecycle.",
      "From condition rating and lifecycle planning to rehabilitation prioritisation, our asset services give owners the evidence they need to make confident, cost-effective decisions.",
    ],
    serviceDetails: [
      { label: "SERVICE AREA", value: "NSW · QLD" },
      { label: "TEAM SIZE", value: "12 Inspectors" },
      { label: "ACCREDITATION", value: "L2 / L3 Bridge Inspection" },
      { label: "TYPICAL DURATION", value: "1 – 18 months" },
      { label: "PROJECT SCALE", value: "$50K – $100M+" },
      { label: "SECTOR", value: "Government · Asset Owners" },
    ],
    capabilitiesNumber: "02",
    capabilitiesHeading: "Asset Capabilities",
    capabilities: [
      { title: "Asset Inspections", description: "Bridge, road, structural, drainage and culvert inspections with photographic and digital records." },
      { title: "Condition Assessment", description: "Visual inspection, defect identification, condition rating, structural assessment and maintenance prioritisation." },
      { title: "Asset Management", description: "Asset registers and inventories, lifecycle planning, risk assessment, performance monitoring and renewal prioritisation." },
      { title: "Bridge Asset Management", description: "Level 2 and Level 3 inspections, structural condition assessment, defect mapping and rehabilitation planning." },
      { title: "Road & Civil Assets", description: "Pavements, drainage, culverts, retaining structures, road furniture, safety barriers and shared paths." },
      { title: "Digital Asset Support", description: "Drone-assisted inspections, BIM / digital asset information, condition databases and digital reporting." },
    ],
    processNumber: "03",
    processHeading: "Our Assessment Process",
    processSteps: [
      { number: "01", title: "Asset Register & Scoping", description: "We establish the asset register, inspection levels and assessment scope for your portfolio." },
      { number: "02", title: "Inspection & Data Capture", description: "Inspections are undertaken with photographic and digital records captured in the field." },
      { number: "03", title: "Condition Assessment", description: "Defects are identified, rated and mapped to establish current asset condition." },
      { number: "04", title: "Risk & Lifecycle Analysis", description: "Risk, deterioration and lifecycle cost are assessed to inform maintenance priorities." },
      { number: "05", title: "Strategy & Prioritisation", description: "Maintenance and renewal recommendations are prioritised and costed." },
      { number: "06", title: "Reporting & Digital Records", description: "Condition databases, registers and reports are delivered for ongoing management." },
    ],
    deliverablesNumber: "04",
    deliverablesHeading: "Asset Deliverables",
    deliverablesSubtext: "Our asset services produce the evidence and records owners need for confident, long-term decisions.",
    deliverables: [
      "Asset registers and inventories",
      "Inspection reports and photographs",
      "Condition assessment and rating reports",
      "Defect mapping and registers",
      "Lifecycle and renewal strategy",
      "Maintenance prioritisation plans",
      "Digital condition databases",
    ],
    relatedNumber: "05",
    relatedHeading: "Related Work",
    relatedProjects: [
      { title: "Metropolitan Bridge Rehabilitation", image: "/images/image6.jpeg", slug: "metropolitan-bridge-rehabilitation" },
      { title: "Urban Stormwater Management System", image: "/images/image7.jpeg", slug: "urban-stormwater-management-system" },
    ],
  },
  {
    slug: "buildings-and-property-engineering",
    index: "05",
    title: "Buildings & Property Engineering",
    shortDescription:
      "Multidisciplinary engineering for residential, commercial, industrial and community buildings — from feasibility and design through approvals, inspection and certification.",
    tags: [["Structural", "Civil", "Stormwater", "Certification"], ["Inspections", "Dilapidation", "Construction Support"]],
    heroTitle: "BUILDINGS & PROPERTY ENGINEERING",
    heroSubtitle: "Engineered for every building, from concept to certification.",
    overviewNumber: "01",
    overviewHeading: "What is Buildings & Property Engineering?",
    overviewParagraphs: [
      "ZAMR Engineering provides multidisciplinary engineering services for residential, commercial, industrial and community buildings. We support clients from feasibility and design through approvals, construction, inspection, certification and asset maintenance.",
      "Our building engineering practice is predominantly structural, civil, certification, inspection and construction-related, delivering safe, compliant and buildable outcomes.",
    ],
    serviceDetails: [
      { label: "SERVICE AREA", value: "NSW · ACT" },
      { label: "TEAM SIZE", value: "14 Engineers" },
      { label: "ACCREDITATION", value: "Engineers Australia" },
      { label: "TYPICAL DURATION", value: "2 – 18 months" },
      { label: "PROJECT SCALE", value: "$100K – $150M+" },
      { label: "SECTOR", value: "Residential · Commercial · Industrial" },
    ],
    capabilitiesNumber: "02",
    capabilitiesHeading: "Building Capabilities",
    capabilities: [
      { title: "Structural Engineering", description: "Structural design, foundations, load-bearing elements, retaining walls, alterations, strengthening and remediation." },
      { title: "Civil & Stormwater", description: "Site grading, stormwater drainage, driveways and pavements, retaining structures, external works and service coordination." },
      { title: "Building Inspection & Assessment", description: "Structural inspections, condition assessments, defect investigations and existing-building assessments." },
      { title: "Certification & Engineering Advice", description: "Structural certification, engineering certificates, design compliance checks, milestone and temporary works certification." },
      { title: "Dilapidation Surveys", description: "Pre- and post-construction surveys, photographic documentation, defect records and comparative assessments." },
      { title: "Construction & Development Support", description: "Design coordination, construction supervision, contractor coordination, quality assurance and technical support." },
    ],
    processNumber: "03",
    processHeading: "Our Building Process",
    processSteps: [
      { number: "01", title: "Feasibility & Scope", description: "We establish the building scope, constraints, design standards and project objectives." },
      { number: "02", title: "Concept & Preliminary Design", description: "Concept structural and civil layouts are developed and options evaluated with your team." },
      { number: "03", title: "Detailed Design & Documentation", description: "Complete structural and civil design, specifications and drawings are produced for approval." },
      { number: "04", title: "Approvals & Certification", description: "We support design compliance, milestone inspections and certification throughout delivery." },
      { number: "05", title: "Construction Support", description: "Construction supervision, RFI responses, inspections and quality assurance are provided on site." },
      { number: "06", title: "Handover & Asset Records", description: "Certification, as-built records and final engineering advice support project close-out." },
    ],
    deliverablesNumber: "04",
    deliverablesHeading: "Building Deliverables",
    deliverablesSubtext: "Our deliverables cover the full building lifecycle from design through to certification and asset records.",
    deliverables: [
      "Structural and civil design drawings",
      "Foundations and retaining structure designs",
      "Stormwater and site grading plans",
      "Inspection and condition assessment reports",
      "Dilapidation survey records",
      "Engineering certificates and compliance checks",
      "Construction support and quality records",
    ],
    relatedNumber: "05",
    relatedHeading: "Related Work",
    relatedProjects: [
      { title: "Metropolitan Bridge Rehabilitation", image: "/images/image6.jpeg", slug: "metropolitan-bridge-rehabilitation" },
      { title: "Urban Stormwater Management System", image: "/images/image7.jpeg", slug: "urban-stormwater-management-system" },
    ],
  },
  {
    slug: "construction-and-project-delivery",
    index: "06",
    title: "Construction & Project Delivery",
    shortDescription:
      "Engineering-led construction and project delivery for civil and infrastructure works — combining technical understanding with practical construction management.",
    tags: [["Civil Works", "Roads", "Drainage"], ["Concrete", "Structures", "Site Delivery"]],
    heroTitle: "CONSTRUCTION & PROJECT DELIVERY",
    heroSubtitle: "Safe, compliant, buildable outcomes.",
    overviewNumber: "01",
    overviewHeading: "What is Construction & Project Delivery?",
    overviewParagraphs: [
      "ZAMR Engineering provides engineering-led construction and project delivery services for civil and infrastructure works. Our involvement combines technical understanding with practical construction management to deliver safe, compliant and buildable outcomes.",
      "From road and drainage works to structural and concrete construction, we deliver with rigorous quality control, programme monitoring and hands-on site supervision.",
    ],
    serviceDetails: [
      { label: "SERVICE AREA", value: "NSW · QLD" },
      { label: "TEAM SIZE", value: "20 Delivery Team" },
      { label: "ACCREDITATION", value: "ISO 9001 / AS/NZS" },
      { label: "TYPICAL DURATION", value: "3 – 36 months" },
      { label: "PROJECT SCALE", value: "$500K – $200M+" },
      { label: "SECTOR", value: "Government · Private" },
    ],
    capabilitiesNumber: "02",
    capabilitiesHeading: "Delivery Capabilities",
    capabilities: [
      { title: "Road Works", description: "Earthworks and excavation, subbase and base construction, pavement rehabilitation, asphalt, line marking and signage." },
      { title: "Drainage Works", description: "Excavation and trenching, pipe installation, culverts, pits and headwalls, and stormwater rehabilitation." },
      { title: "Structural & Bridge Works", description: "Foundations, concrete structures, bridge components, temporary works, and deck and structural repairs." },
      { title: "Concrete Works", description: "Concrete foundations, pavements, kerb and gutter, footpaths, coring, and structural concrete." },
      { title: "Site & Construction Management", description: "Site supervision, safety management, quality control, programme monitoring, resource coordination and logistics." },
      { title: "Project Handover", description: "Completion inspections, defect close-out, quality documentation, asset records and as-constructed information." },
    ],
    processNumber: "03",
    processHeading: "Our Delivery Process",
    processSteps: [
      { number: "01", title: "Mobilisation & Planning", description: "We mobilise plant, workforce and implement the project quality and safety plan." },
      { number: "02", title: "Site Establishment", description: "Site setup, temporary works, traffic management and permit compliance are established." },
      { number: "03", title: "Construction Works", description: "Civil, drainage, structural and concrete works are delivered to programme and specification." },
      { number: "04", title: "Quality & Safety Control", description: "Ongoing quality control, safety management, inspections and programme monitoring." },
      { number: "05", title: "Defect & Completion Inspections", description: "Completion and defect inspections are undertaken with documented close-out." },
      { number: "06", title: "Handover & Asset Records", description: "Asset records, as-constructed information and quality documentation are handed over." },
    ],
    deliverablesNumber: "04",
    deliverablesHeading: "Delivery Deliverables",
    deliverablesSubtext: "Our construction engagements deliver compliant, documented and asset-ready outcomes.",
    deliverables: [
      "Construction and delivery plans",
      "Quality assurance and safety records",
      "Completed civil and structural works",
      "Inspection and hold-point records",
      "Defect close-out documentation",
      "As-constructed information",
      "Asset register and handover records",
    ],
    relatedNumber: "05",
    relatedHeading: "Related Work",
    relatedProjects: [
      { title: "Hunter Valley Renewable Energy Hub", image: "/images/image2.jpeg", slug: "hunter-valley-renewable-energy-hub" },
      { title: "Western Sydney Infrastructure Corridor", image: "/images/image1.jpeg", slug: "western-sydney-infrastructure-corridor" },
],
  },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return services.find((s) => s.slug === slug);
}

// --- Services Page Static Data ---

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

export const defaultHeroImage = "/images/image5.jpeg";

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