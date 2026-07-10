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
    slug: "civil-engineering",
    index: "01",
    title: "Civil Engineering",
    shortDescription:
      "Precision-engineered civil solutions across hydraulic systems, structural frameworks, and geotechnical analysis for complex urban and regional infrastructure projects.",
    tags: [["STRUCTURAL", "Hydraulic"], ["GEOTECHNICAL"]],
    heroTitle: "CIVIL ENGINEERING",
    heroSubtitle: "Structurally sound. Technically precise. Built to last.",
    overviewNumber: "01",
    overviewHeading: "What is Civil Engineering?",
    overviewParagraphs: [
      "ZAMR Engineering's civil engineering practice delivers end-to-end solutions for some of New South Wales' most technically demanding infrastructure projects. Our multidisciplinary team combines structural, hydraulic, and geotechnical expertise to produce designs that are rigorously analysed, code-compliant, and engineered for long service life.",
      "From concept feasibility through to construction certification, we provide a seamless design and verification service. We regularly act as the Engineer of Record on complex urban developments, government infrastructure programs, and greenfield industrial sites — carrying full PI insurance and maintaining accreditations with Engineers Australia and Infrastructure NSW.",
    ],
    serviceDetails: [
      { label: "SERVICE AREA", value: "NSW · QLD · VIC" },
      { label: "TEAM SIZE", value: "18 Engineers" },
      { label: "ACCREDITATION", value: "Engineers Australia RPEQ" },
      { label: "TYPICAL DURATION", value: "3 – 24 months" },
      { label: "PROJECT SCALE", value: "$500K – $200M+" },
      { label: "SECTOR", value: "Government · Private · Industrial" },
    ],
    capabilitiesNumber: "02",
    capabilitiesHeading: "Technical Capabilities",
    capabilities: [
      { title: "Structural Analysis & Design", description: "RC, steel, and composite structural systems for bridges, retaining walls, culverts, and building substructures." },
      { title: "Hydraulic Engineering", description: "Stormwater drainage, flood modelling, waterway crossings, and detention basin design to Australian Standards." },
      { title: "Geotechnical Assessment", description: "Foundation design, slope stability analysis, earthwork specifications, and interpretation of geotechnical investigation data." },
      { title: "Civil Construction Documentation", description: "Complete construction drawing packages, specifications, BOQ, and engineer's estimates for tender and procurement." },
      { title: "Site Supervision & Inspection", description: "Hold-point inspections, construction phase engineering, RFI responses, and as-built certification." },
      { title: "Feasibility & Concept Design", description: "Early-stage technical feasibility, optioneering, and preliminary engineering to support planning and investment decisions." },
    ],
    processNumber: "03",
    processHeading: "Our Delivery Process",
    processSteps: [
      { number: "01", title: "Project Briefing & Scope Definition", description: "We engage with your project team to define scope, constraints, and objectives. A tailored project brief and preliminary program are established." },
      { number: "02", title: "Site Investigation & Data Gathering", description: "Geotechnical, survey, and utility data are collected and reviewed. Site conditions are assessed against the design requirements." },
      { number: "03", title: "Concept & Preliminary Design", description: "Multiple design options are developed and evaluated. A preferred option is selected based on cost, constructability, and technical performance." },
      { number: "04", title: "Detailed Design & Documentation", description: "Full engineering calculations, construction drawings, specifications, and BOQ are produced to the required regulatory standard." },
      { number: "05", title: "Authority & Compliance Approvals", description: "We manage all design-phase authority submissions, RMS, council, and EPA concurrences, and provide Principal Certifier engagement as required." },
      { number: "06", title: "Construction Support & As-Built", description: "Our engineers provide RFI responses, hold-point inspections, and as-built certification to close out the project." },
    ],
    deliverablesNumber: "04",
    deliverablesHeading: "What You Receive",
    deliverablesSubtext: "Every engagement is scoped to your project requirements. Below is a representative set of deliverables for a full-scope Civil Engineering engagement.",
    deliverables: [
      "Engineering design reports and calculations",
      "Construction drawings (all disciplines)",
      "Technical specifications and material schedules",
      "Bill of Quantities and engineer's estimate",
      "Authority submission packages",
      "Construction inspection and hold-point sign-off",
      "As-built drawings and certification letters",
      "Design verification statements (DVS)",
    ],
    relatedNumber: "05",
    relatedHeading: "Related Work",
    relatedProjects: [
      { title: "Hunter Valley Renewable Energy Hub", image: "/images/image2.jpeg", slug: "hunter-valley-renewable-energy-hub" },
      { title: "Metropolitan Bridge Rehabilitation", image: "/images/image6.jpeg", slug: "metropolitan-bridge-rehabilitation" },
      { title: "Urban Stormwater Management System", image: "/images/image7.jpeg", slug: "urban-stormwater-management-system" },
    ],
  },
  {
    slug: "project-verification",
    index: "02",
    title: "Project Verification",
    shortDescription:
      "Independent technical assurance — compliance review, quality auditing, and risk mitigation across the full infrastructure project lifecycle from design through to delivery.",
    tags: [["COMPLIANCE", "AUDIT"], ["RISK"]],
    heroTitle: "PROJECT VERIFICATION",
    heroSubtitle: "Independent assurance. Complete confidence.",
    overviewNumber: "01",
    overviewHeading: "What is Project Verification?",
    overviewParagraphs: [
      "ZAMR Engineering provides independent technical verification and compliance review services across the full infrastructure lifecycle. Our team of accredited engineers and auditors delivers objective assessments that give clients, financiers, and regulators complete confidence in project outcomes.",
      "We operate with full independence from design teams, ensuring our findings are impartial, evidence-based, and actionable. Our verification methodology aligns with the Infrastructure NSW Assurance Framework and TfNSW verification requirements.",
    ],
    serviceDetails: [
      { label: "SERVICE AREA", value: "NSW · QLD · VIC" },
      { label: "TEAM SIZE", value: "12 Specialists" },
      { label: "ACCREDITATION", value: "TfNSW Accredited" },
      { label: "TYPICAL DURATION", value: "2 – 12 months" },
      { label: "PROJECT SCALE", value: "$100K – $50M+" },
      { label: "SECTOR", value: "Government · Private" },
    ],
    capabilitiesNumber: "02",
    capabilitiesHeading: "Verification Capabilities",
    capabilities: [
      { title: "Design Verification", description: "Independent review of engineering designs against codes, standards, and project specifications." },
      { title: "Compliance Auditing", description: "Systematic audit of project documentation against TfNSW, RMS, and regulatory requirements." },
      { title: "Risk Assessment", description: "Identification and evaluation of technical, program, and commercial risks across the project lifecycle." },
      { title: "Quality Assurance", description: "Review of quality management systems, hold-point records, and inspection and test plans." },
      { title: "Independent Certifier Services", description: "Independent certification of project milestones, completion stages, and handover documentation." },
      { title: "Due Diligence Reviews", description: "Technical due diligence for infrastructure investments, acquisitions, and project financing." },
    ],
    processNumber: "03",
    processHeading: "Our Verification Process",
    processSteps: [
      { number: "01", title: "Scope Definition", description: "We work with you to define the verification scope, standards, and acceptance criteria." },
      { number: "02", title: "Document Review", description: "All relevant design documents, specifications, and records are reviewed against requirements." },
      { number: "03", title: "Site Inspection", description: "On-site inspections verify that construction aligns with approved designs and specifications." },
      { number: "04", title: "Findings & Reporting", description: "A comprehensive verification report is produced, detailing findings, non-conformances, and recommendations." },
      { number: "05", title: "Close-Out Verification", description: "We verify that all identified issues have been resolved and closed out to the required standard." },
      { number: "06", title: "Certificate Issuance", description: "A final verification certificate is issued, providing formal assurance of compliance." },
    ],
    deliverablesNumber: "04",
    deliverablesHeading: "Verification Deliverables",
    deliverablesSubtext: "Our verification engagements are scoped to your specific project requirements and assurance framework.",
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
      { title: "Western Sydney Infrastructure Plan", image: "/images/image6.jpeg", slug: "western-sydney-infrastructure-corridor" },
      { title: "Pacific Highway Upgrade Verification", image: "/images/image5.jpeg", slug: "pacific-highway-upgrade-verification" },
    ],
  },
  {
    slug: "road-infrastructure",
    index: "03",
    title: "Road Infrastructure",
    shortDescription:
      "Advanced pavement engineering, geometric road design, and integrated traffic systems for future-ready transport networks across New South Wales and beyond.",
    tags: [["PAVEMENT"], ["TRAFFIC"], ["GEOMETRIC"]],
    heroTitle: "ROAD INFRASTRUCTURE",
    heroSubtitle: "Connecting communities. Driving progress.",
    overviewNumber: "01",
    overviewHeading: "What We Deliver in Road Infrastructure?",
    overviewParagraphs: [
      "ZAMR Engineering's road infrastructure team brings deep expertise in pavement engineering, geometric road design, and traffic systems. We deliver projects that improve safety, capacity, and durability for regional and urban transport networks.",
      "Our engineers have extensive experience working with TfNSW, local councils, and private developers on projects ranging from minor intersection upgrades to major highway corridors.",
    ],
    serviceDetails: [
      { label: "SERVICE AREA", value: "NSW · QLD" },
      { label: "TEAM SIZE", value: "15 Engineers" },
      { label: "ACCREDITATION", value: "TfNSW Prequalified" },
      { label: "TYPICAL DURATION", value: "6 – 36 months" },
      { label: "PROJECT SCALE", value: "$1M – $500M+" },
      { label: "SECTOR", value: "Government" },
    ],
    capabilitiesNumber: "02",
    capabilitiesHeading: "Road Capabilities",
    capabilities: [
      { title: "Pavement Design", description: "Flexible and rigid pavement design to Austroads and TfNSW standards, including pavement rehabilitation and overlays." },
      { title: "Geometric Road Design", description: "Horizontal and vertical alignment design, intersection layouts, roundabouts, and cross-section development." },
      { title: "Traffic Engineering", description: "Traffic modelling, impact assessments, speed zone reviews, and intersection performance analysis." },
      { title: "Drainage Design", description: "Road drainage, culvert design, stormwater management, and water sensitive urban design." },
      { title: "Road Safety Audits", description: "Independent road safety audits at all stages — feasibility, design, pre-opening, and existing road." },
      { title: "Construction Support", description: "Site supervision, pavement monitoring, and construction phase engineering for road projects." },
    ],
    processNumber: "03",
    processHeading: "Our Road Delivery Process",
    processSteps: [
      { number: "01", title: "Route Selection & Feasibility", description: "Assessment of corridor options, constraints, and feasibility to identify the preferred route." },
      { number: "02", title: "Survey & Site Data", description: "Detailed survey, geotechnical investigation, and utility location to inform design." },
      { number: "03", title: "Concept Design", description: "Development of concept alignment, cross-sections, and intersection layouts for stakeholder review." },
      { number: "04", title: "Detailed Design", description: "Full detailed design including pavement, drainage, traffic facilities, and landscaping." },
      { number: "05", title: "Authority Approvals", description: "Management of TfNSW, council, and RMS approvals, including Road Occupancy Licences." },
      { number: "06", title: "Construction & Handover", description: "Construction support, quality assurance, and as-built documentation for project handover." },
    ],
    deliverablesNumber: "04",
    deliverablesHeading: "Road Infrastructure Deliverables",
    deliverablesSubtext: "Each road project is tailored to client requirements, but typically includes the following key deliverables.",
    deliverables: [
      "Geometric alignment design drawings",
      "Pavement design report and cross-sections",
      "Drainage design and hydrology report",
      "Traffic impact assessment",
      "Road safety audit reports",
      "Construction specifications and BOQ",
      "As-built documentation and certification",
    ],
    relatedNumber: "05",
    relatedHeading: "Related Work",
    relatedProjects: [
      { title: "Newell Highway Upgrade", image: "/images/image7.jpeg", slug: "newell-highway-upgrade" },
      { title: "Regional Road Safety Program", image: "/images/image5.jpeg", slug: "regional-road-safety-program" },
    ],
  },
  {
    slug: "renewable-energy-infrastructure",
    index: "04",
    title: "Renewable Energy Infrastructure",
    shortDescription:
      "Engineering the clean energy transition — solar farm civil works, wind turbine foundations, and hybrid energy infrastructure at utility scale.",
    tags: [["SOLAR"], ["WIND"], ["BATTERY"]],
    heroTitle: "RENEWABLE ENERGY",
    heroSubtitle: "Powering the clean energy transition.",
    overviewNumber: "01",
    overviewHeading: "What We Do in Renewable Energy?",
    overviewParagraphs: [
      "ZAMR Engineering is at the forefront of the clean energy transition, delivering civil engineering solutions for solar farms, wind energy projects, and battery storage facilities across Australia.",
      "Our team provides end-to-end civil engineering support — from feasibility studies and site selection through to detailed design, construction support, and grid connection certification.",
    ],
    serviceDetails: [
      { label: "SERVICE AREA", value: "NSW · QLD · VIC" },
      { label: "TEAM SIZE", value: "10 Engineers" },
      { label: "ACCREDITATION", value: "Clean Energy Council" },
      { label: "TYPICAL DURATION", value: "6 – 24 months" },
      { label: "PROJECT SCALE", value: "$5M – $500M+" },
      { label: "SECTOR", value: "Private · Government" },
    ],
    capabilitiesNumber: "02",
    capabilitiesHeading: "Energy Capabilities",
    capabilities: [
      { title: "Solar Farm Civil Design", description: "Site grading, access roads, stormwater management, and foundation design for solar PV arrays." },
      { title: "Wind Turbine Foundations", description: "Design of reinforced concrete turbine foundations, including geotechnical integration and fatigue analysis." },
      { title: "Battery Storage Facilities", description: "Civil and structural design for BESS compounds, including slab design, containment, and fire access." },
      { title: "Grid Connection Infrastructure", description: "Design of substation platforms, transmission line access, and switchyard civil works." },
      { title: "Environmental Compliance", description: "Erosion and sediment control, stormwater management plans, and environmental monitoring during construction." },
      { title: "Construction Support", description: "Site engineering, quality verification, and as-built documentation for renewable energy projects." },
    ],
    processNumber: "03",
    processHeading: "Our Energy Delivery Process",
    processSteps: [
      { number: "01", title: "Feasibility & Site Selection", description: "Technical feasibility assessment, site constraints analysis, and preliminary yield optimisation." },
      { number: "02", title: "Concept & Layout Design", description: "Development of site layout, access strategy, and preliminary civil design for approval." },
      { number: "03", title: "Detailed Civil Design", description: "Complete civil design including grading, drainage, roads, and foundation packages." },
      { number: "04", title: "Construction Documentation", description: "Detailed drawings, specifications, and BOQ for procurement and construction." },
      { number: "05", title: "Construction Engineering", description: "On-site engineering support, RFI responses, and quality verification during construction." },
      { number: "06", title: "Commissioning & Handover", description: "As-built documentation, certification, and handover to operations team." },
    ],
    deliverablesNumber: "04",
    deliverablesHeading: "Energy Project Deliverables",
    deliverablesSubtext: "Deliverables are scoped to each project phase, from feasibility through to construction and handover.",
    deliverables: [
      "Feasibility study and site assessment report",
      "Civil design drawings and specifications",
      "Drainage and stormwater management plans",
      "Foundation design packages",
      "Construction quality verification reports",
      "As-built drawings and certification",
      "Operations and maintenance manuals",
    ],
    relatedNumber: "05",
    relatedHeading: "Related Work",
    relatedProjects: [
      { title: "Solar Farm Civil Works", image: "/images/image2.jpeg", slug: "solar-farm-civil-works" },
      { title: "Wind Farm Foundation Package", image: "/images/image6.jpeg", slug: "wind-farm-foundation-package" },
    ],
  },
  {
    slug: "tfnsw-compliance",
    index: "05",
    title: "TfNSW Compliance",
    shortDescription:
      "Specialist advisory and compliance consulting precisely aligned with Transport for NSW regulatory standards, technical specifications, and certification frameworks.",
    tags: [["TfNSW"], ["RMS"], ["AUDIT"]],
    heroTitle: "TfNSW COMPLIANCE",
    heroSubtitle: "Meeting every standard. Exceeding every expectation.",
    overviewNumber: "01",
    overviewHeading: "What is TfNSW Compliance?",
    overviewParagraphs: [
      "ZAMR Engineering provides specialist TfNSW compliance consulting services. Our deep understanding of Transport for NSW standards, specifications, and approval processes ensures your project meets every regulatory requirement efficiently.",
      "Our team includes former TfNSW engineers and accredited auditors who bring firsthand knowledge of the approvals landscape. We help clients navigate the complexity of TfNSW compliance — from prequalification through to project certification.",
    ],
    serviceDetails: [
      { label: "SERVICE AREA", value: "NSW" },
      { label: "TEAM SIZE", value: "8 Specialists" },
      { label: "ACCREDITATION", value: "TfNSW Accredited" },
      { label: "TYPICAL DURATION", value: "1 – 18 months" },
      { label: "PROJECT SCALE", value: "$50K – $20M+" },
      { label: "SECTOR", value: "Government" },
    ],
    capabilitiesNumber: "02",
    capabilitiesHeading: "Compliance Capabilities",
    capabilities: [
      { title: "TfNSW Prequalification Support", description: "Assistance with TfNSW prequalification applications, scheme management, and ongoing compliance." },
      { title: "Specification Compliance Reviews", description: "Detailed review of design and construction documentation against TfNSW technical specifications." },
      { title: "Audit & Assurance Services", description: "Independent auditing of project delivery against TfNSW Quality and Assurance frameworks." },
      { title: "Approvals Management", description: "End-to-end management of TfNSW and RMS approvals, including Road Occupancy Licences and permits." },
      { title: "Safety in Design Reviews", description: "Facilitation of Safety in Design workshops and documentation in accordance with TfNSW requirements." },
      { title: "Training & Capability Building", description: "Tailored training programs to build TfNSW compliance capability within client organisations." },
    ],
    processNumber: "03",
    processHeading: "Our Compliance Process",
    processSteps: [
      { number: "01", title: "Gap Analysis", description: "Assessment of current compliance status against TfNSW requirements and identification of gaps." },
      { number: "02", title: "Compliance Plan", description: "Development of a tailored compliance plan with milestones, responsibilities, and deliverables." },
      { number: "03", title: "Documentation Review", description: "Systematic review of all project documentation against TfNSW specifications and standards." },
      { number: "04", title: "Audit & Inspection", description: "On-site audits and inspections to verify compliance with approved documentation and standards." },
      { number: "05", title: "Reporting & Remediation", description: "Compliance reports with findings, non-conformances, and recommended remediation actions." },
      { number: "06", title: "Certification & Close-Out", description: "Final compliance certification and close-out reporting for project completion." },
    ],
    deliverablesNumber: "04",
    deliverablesHeading: "Compliance Deliverables",
    deliverablesSubtext: "Our compliance engagements are structured to provide clear, actionable outputs at every stage.",
    deliverables: [
      "Compliance gap analysis report",
      "Compliance management plan",
      "Specification compliance matrices",
      "Audit reports and findings registers",
      "Remediation action plans",
      "Compliance certification statements",
      "Training materials and workshop records",
    ],
    relatedNumber: "05",
    relatedHeading: "Related Work",
    relatedProjects: [
      { title: "TfNSW Compliance Framework Review", image: "/images/image5.jpeg", slug: "tfnsw-compliance-framework-review" },
      { title: "Road Asset Compliance Audit", image: "/images/image7.jpeg", slug: "road-asset-compliance-audit" },
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
    "Five specialist engineering disciplines. One integrated consultancy. Delivering precision-led infrastructure outcomes across NSW, QLD, and Victoria.",
  image: "/images/image5.jpeg",
};

export interface WhyZamrFeature {
  number: string;
  title: string;
  description: string;
}

export const whyZamrFeatures: WhyZamrFeature[] = [
  {
    number: "01",
    title: "Technical Excellence",
    description:
      "Every deliverable is produced by experienced, accredited engineers and subjected to rigorous internal review before issue. No shortcuts. No junior-only teams.",
  },
  {
    number: "02",
    title: "Independence & Integrity",
    description:
      "Our verification and compliance practices operate with complete independence from design. We report what we find — not what clients want to hear.",
  },
  {
    number: "03",
    title: "Government Expertise",
    description:
      "Deep experience working within TfNSW, RMS, and Infrastructure NSW frameworks. We know the standards, the approval processes, and the people.",
  },
  {
    number: "04",
    title: "End-to-End Delivery",
    description:
      "From initial feasibility to as-built certification, we can resource the full project lifecycle — eliminating the gaps between consultant handovers.",
  },
];
