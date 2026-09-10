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
    slug: "great-western-highway-upgrade—kelso-to-raglan",
    index: "01",
    title: "Great Western Highway Upgrade — Kelso to Raglan",
    category: "Urban Infrastructure",
    shortDescription:
      "Metropolitan Bridge Rehabilitation involved delivering comprehensive engineering support to restore structural integrity, improve safety, and extend the operational lifespan of critical bridge infrastructure through effective planning, design, and project management.",

    heroTitle: "Great Western Highway Upgrade — Kelso to Raglan",
    heroImage: "/images/image3.jpeg",

    stats: [
      { label: "CLIENT", value: "Transport for NSW" },
      { label: "VALUE", value: "$3.2 Billion" },
      { label: "DURATION", value: "2019 – 2026" },
      { label: "LOCATION", value: "Western Sydney, NSW" },
      { label: "SCOPE", value: "Civil & Structural" },
      { label: "TEAM", value: "24 Engineers" },
    ],

    aboutNumber: "01",
    aboutHeading: "What needed to be solved.",
    aboutDescription:
      "Metropolitan Bridge Rehabilitation involved delivering comprehensive engineering support to restore structural integrity, improve safety, and extend the operational lifespan of critical bridge infrastructure through effective planning, design, and project management.",
    location: "Western Sydney, NSW",
    challengeParagraphs: [
      "The project presented significant engineering challenges, including complex ground conditions across the corridor alignment, requiring innovative foundation solutions and extensive geotechnical investigation. The need to maintain existing transport operations during construction demanded meticulous staging and traffic management planning.",
      "Environmental sensitivities, including waterway crossings and endangered ecological communities, required close collaboration with environmental specialists and regulatory authorities to achieve approval and minimise construction impacts.",
    ],

    approachNumber: "02",
    approachHeading: "How We Delivered It",
    approachSteps: [
      {
        number: "01",
        title: "Feasibility & Route Selection",
        description:
          "Multi-criteria assessment of corridor options considering engineering constraints, environmental factors, and community impact to identify the preferred alignment.",
      },
      {
        number: "02",
        title: "Detailed Geotechnical Investigation",
        description:
          "Extensive borehole and test pit program across the corridor to characterise ground conditions and inform foundation and earthworks design.",
      },
      {
        number: "03",
        title: "Design Development & Approval",
        description:
          "Progressive design development through concept, preliminary, and detailed phases, with concurrent environmental assessment and stakeholder engagement.",
      },
      {
        number: "04",
        title: "Construction Support & Delivery",
        description:
          "On-site engineering team providing construction support, quality verification, and design adjustments to address site conditions as they arise.",
      },
    ],

    resultsNumber: "03",
    resultsHeading: "Project Outcomes",
    resultsMetrics: [
      { value: "32 km", label: "Corridor Length" },
      { value: "18", label: "Bridge Structures" },
      { value: "6", label: "Interchanges" },
      { value: "85%", label: "Local Content" },
    ],
    achievements: [
      "Delivered all design packages on schedule, with zero design-related delays to the construction program.",
      "Achieved a 25% reduction in embodied carbon through optimised pavement design and material selection.",
      "Successfully obtained all regulatory approvals within the project timeframe, including TfNSW and EPA concurrences.",
      "Completed over 50,000 hours of engineering without a lost-time safety incident.",
    ],

    galleryNumber: "04",
    galleryHeading: "Project Gallery",
    galleryImages: [
      "/images/image2.jpeg",
      "/images/image3.jpeg",
      "/images/image4.jpeg",
      "/images/image5.jpeg",
      "/images/image6.jpeg",
    ],

    relatedNumber: "05",
    relatedHeading: "Related Work",
    relatedProjects: [
      { title: "Jonica Rd Austral Double Storey Dwelling & Studio", slug: "jonica-rd-australia-double-storey-dwelling-&-studio", image: "/images/image2.jpeg" },
      { title: "Kurrajong Rd, Prestons- Staged Improvement Strategic Design", slug: "Kurrajong-rd-,-prestons-staged-improvement-strategic-design", image: "/images/image1.jpeg" },
      { title: "BMD Bridge Inspection- TBA", slug: "bmd-bridge-inspection-tba", image: "/images/image2.jpeg" },
    ],
    referProjects: [
      { title: "Loftus Street, Riverstone Intersection Upgrade", image: "/images/image2.jpeg", slug: "loftus-street-riverstone-intersection-upgrade" },
      { title: "Mamre Road and Abbotts Road, Kemps Creek", image: "/images/image6.jpeg", slug: "mamre-road-and-abbotts-road-kemps-creek" },
      { title: "Urban Stormwater Management System", image: "/images/image7.jpeg", slug: "urban-stormwater-management-system" },
    ],
  },
  {
    slug: "jonica-rd-australia-double-storey-dwelling-&-studio",
    index: "02",
    title: "Jonica Rd Austral Double Storey Dwelling & Studio",
    category: "Urban Infrastructure",
    shortDescription:
      "Engineering the clean energy transition in the Hunter Valley with comprehensive civil design and construction support for a large-scale renewable energy precinct.",

    heroTitle: "Jonica Rd Austral Double Storey Dwelling & Studio",
    heroImage: "/images/image2.jpeg",

    stats: [
      { label: "CLIENT", value: "Green Energy Development Corp" },
      { label: "VALUE", value: "$850 Million" },
      { label: "DURATION", value: "2021 – 2027" },
      { label: "LOCATION", value: "Hunter Valley, NSW" },
      { label: "SCOPE", value: "Civil & Energy Infrastructure" },
      { label: "TEAM", value: "16 Engineers" },
    ],

    aboutNumber: "01",
    aboutHeading: "What needed to be solved.",
    aboutDescription:
      "The Hunter Valley Renewable Energy Hub is a landmark clean energy precinct combining solar generation, wind energy, and battery storage to deliver reliable renewable energy to the NSW grid.",
    location: "Hunter Valley, NSW",
    challengeParagraphs: [
      "The project spans over 3,000 hectares across multiple landholdings, requiring complex site planning to optimise layout while minimising environmental impact and maintaining agricultural land use where possible.",
      "Grid connection presented significant technical challenges, requiring detailed power system studies and close coordination with Transgrid to design the network connection infrastructure.",
    ],

    approachNumber: "02",
    approachHeading: "How We Delivered It",
    approachSteps: [
      {
        number: "01",
        title: "Site Selection & Feasibility",
        description:
          "Technical feasibility assessment of candidate sites, including solar irradiance analysis, wind resource assessment, grid proximity, and environmental constraints.",
      },
      {
        number: "02",
        title: "Civil Design & Layout Optimisation",
        description:
          "Optimisation of solar array layout, wind turbine placement, and battery storage compound location to maximise energy yield while minimising earthworks and environmental impact.",
      },
      {
        number: "03",
        title: "Infrastructure Design",
        description:
          "Detailed design of site roads, stormwater management, turbine foundations, and substation platforms to support the full renewable energy precinct.",
      },
      {
        number: "04",
        title: "Construction Engineering Support",
        description:
          "On-site civil engineering support during construction, including earthworks verification, foundation conformance testing, and as-built documentation.",
      },
    ],

    resultsNumber: "03",
    resultsHeading: "Project Outcomes",
    resultsMetrics: [
      { value: "500 MW", label: "Total Capacity" },
      { value: "120", label: "Wind Turbines" },
      { value: "200 ha", label: "Solar Array" },
      { value: "200 MW", label: "Battery Storage" },
    ],
    achievements: [
      "Optimised site layout achieved a 12% increase in energy yield compared to the initial concept design.",
      "All civil design packages delivered on time and within budget, supporting the project's ambitious construction program.",
      "Achieved a 30% reduction in site earthworks through careful grading optimisation and cut-to-fill balance.",
      "Designed turbine foundations that reduced concrete volume by 18% compared to industry-standard designs.",
    ],

    galleryNumber: "04",
    galleryHeading: "Project Gallery",
    galleryImages: [
      "/images/image1.jpeg",
      "/images/image3.jpeg",
      "/images/image4.jpeg",
      "/images/image5.jpeg",
      "/images/image7.jpeg",
    ],

    relatedNumber: "05",
    relatedHeading: "Related Work",
    relatedProjects: [
      { title: "Great Western Highway Upgrade — Kelso to Raglan", slug: "great-western-highway-upgrade—kelso-to-raglan", image: "/images/image1.jpeg" },
      { title: "Kurrajong Rd, Prestons- Staged Improvement Strategic Design", slug: "Kurrajong-rd-,-prestons-staged-improvement-strategic-design", image: "/images/image6.jpeg" },
      { title: "BMD Bridge Inspection- TBA", slug: "bmd-bridge-inspection-tba", image: "/images/image7.jpeg" },
    ],
    referProjects: [
      { title: "Loftus Street, Riverstone Intersection Upgrade", image: "/images/image2.jpeg", slug: "loftus-street-riverstone-intersection-upgrade" },
      { title: "Mamre Road and Abbotts Road, Kemps Creek", image: "/images/image6.jpeg", slug: "mamre-road-and-abbotts-road-kemps-creek" },
      { title: "Urban Stormwater Management System", image: "/images/image7.jpeg", slug: "urban-stormwater-management-system" },
    ],
  },
  {
    slug: "Kurrajong-rd-,-prestons-staged-improvement-strategic-design",
    index: "03",
    title: "Kurrajong Rd, Prestons- Staged Improvement Strategic Design",
    category: "Structural Engineering",
    shortDescription:
      "Rebuilding a critical arterial corridor without stopping a city.",

    heroTitle: "Kurrajong Rd, Prestons- Staged Improvement Strategic Design",
    heroImage: "/images/image1.jpeg",

    stats: [
      { label: "CLIENT", value: "Transport for NSW / Penrith City Council" },
      { label: "VALUE", value: "$47M" },
      { label: "DURATION", value: "18 Months" },
      { label: "LOCATION", value: "Western Sydney, NSW" },
      { label: "SCOPE", value: "Pavement, Geometry & Drainage" },
      { label: "TEAM", value: "14 Engineers" },
    ],

    aboutNumber: "01",
    aboutHeading: "What needed to be solved.",
    aboutDescription:
      "The Great Western Highway corridor through Penrith had reached the end of its structural pavement life, carrying over 28,000 vehicles per day including heavy freight. Deteriorating ride quality, subsurface drainage failures, and insufficient lane widths had created compounding safety and economic costs for the region.",
    location: "Sydney Metropolitan, NSW",
    challengeParagraphs: [
      "ZAMR Engineering was engaged by Transport for NSW to deliver the full civil, pavement, and drainage design for an 8.2km rehabilitation — within a live traffic environment and an aggressive 18-month program. The project required staged construction sequencing, temporary traffic management design, and coordination with Endeavour Energy, Sydney Water, and NBN Co for utility protection."
    ],

    approachNumber: "02",
    approachHeading: "How We Delivered It",
    approachSteps: [
      {
        number: "01",
        title: "Pavement Investigation & Structural Analysis",
        description:
          "A comprehensive pavement investigation program was conducted including FWD deflection surveys, DCP testing, and laboratory CBR analysis of subgrade materials. CIRCLY mechanistic-empirical analysis determined residual structural capacity and informed the rehabilitation treatment selection across seven distinct pavement zones.",
      },
      {
        number: "02",
        title: "Geometric & Drainage Design",
        description:
          "The existing horizontal and vertical alignment was reassessed against Austroads Guide to Road Design criteria. Where required, geometric improvements were incorporated to address sight distance deficiencies and substandard superelevation transitions. A new kerb and gutter and subsurface drainage network was designed to address the root-cause of premature pavement failure.",
      },
      {
        number: "03",
        title: "Traffic Management & Staging",
        description:
          "A detailed Construction Traffic Management Plan was prepared in coordination with TfNSW Network Operations. Six construction stages were sequenced to maintain two traffic lanes in each direction throughout, with independent road safety audits conducted at each staging transition point.",
      },
      {
        number: "04",
        title: "Authority Coordination & Certification",
        description:
          "All utility authority agreements, RMS concurrences, and local council approvals were managed by ZAMR Engineering. Our team acted as the Principal Certifier for the structural pavement works and issued the final Certificate of Completion to Transport for NSW.",
      },
    ],

    resultsNumber: "03",
    resultsHeading: "Results & Achievements",
    resultsMetrics: [
      { value: "8.2km", label: "CORRIDOR UPGRADED" },
      { value: "98%", label: "ON-TIME DELIVERY" },
      { value: "30yr", label: "DESIGN LIFE" },
      { value: "ZERO", label: "LTI INCIDENTS " },
    ],
    achievements: [
      "Full structural pavement rehabilitation across 7 distinct pavement zones.",
      "Geometric improvements addressing 4 identified sight distance deficiencies.",
      "Project delivered within budget and on the agreed program milestone dates",
      "New subsurface drainage network eliminating root-cause failure mechanism.",
      "Zero lost-time injury incidents across the full 18-month construction program",
      "Client satisfaction rating of 9.4/10 on post-project TfNSW feedback survey"
    ],

    galleryNumber: "04",
    galleryHeading: "Project Gallery",
    galleryImages: [
      "/images/image1.jpeg",
      "/images/image8.png",
      "/images/image9.png",
      "/images/image10.png",
    ],

    relatedNumber: "05",
    relatedHeading: "Related Work",
    relatedProjects: [
      { title: "Great Western Highway Upgrade — Kelso to Raglan", slug: "great-western-highway-upgrade—kelso-to-raglan", image: "/images/image1.jpeg" },
      { title: "Jonica Rd Austral Double Storey Dwelling & Studio", slug: "jonica-rd-australia-double-storey-dwelling-&-studio", image: "/images/image2.jpeg" },
      { title: "BMD Bridge Inspection- TBA", slug: "bmd-bridge-inspection-tba", image: "/images/image7.jpeg" },
    ],
    referProjects: [
      { title: "Loftus Street, Riverstone Intersection Upgrade", image: "/images/image2.jpeg", slug: "loftus-street-riverstone-intersection-upgrade" },
      { title: "Mamre Road and Abbotts Road, Kemps Creek", image: "/images/image6.jpeg", slug: "mamre-road-and-abbotts-road-kemps-creek" },
      { title: "Urban Stormwater Management System", image: "/images/image7.jpeg", slug: "urban-stormwater-management-system" },
    ],
  },
  {
    slug: "bmd-bridge-inspection-tba",
    index: "04",
    title: "BMD Bridge Inspection",
    category: "Water & Irrigation Systems",
    shortDescription:
      "Integrated stormwater management solution for a high-density urban precinct, combining flood mitigation, water quality treatment, and community amenity.",

    heroTitle: "BMD Bridge Inspection",
    heroImage: "/images/image2.jpeg",

    stats: [
      { label: "CLIENT", value: "Sydney Water Corporation" },
      { label: "VALUE", value: "$95 Million" },
      { label: "DURATION", value: "2022 – 2025" },
      { label: "LOCATION", value: "Western Sydney, NSW" },
      { label: "SCOPE", value: "Water & Civil Infrastructure" },
      { label: "TEAM", value: "12 Engineers" },
    ],

    aboutNumber: "01",
    aboutHeading: "What needed to be solved.",
    aboutDescription:
      "An integrated stormwater management system designed to mitigate flood risk, improve water quality, and create community amenity in a rapidly developing urban precinct in Western Sydney.",
    location: "Western Sydney, NSW",
    challengeParagraphs: [
      "The precinct's location in a floodplain with high groundwater presented significant drainage and water management challenges. The system had to accommodate a 1% AEP flood event while managing ongoing groundwater interactions.",
      "Environmental water quality targets required innovative treatment solutions, including constructed wetlands and water sensitive urban design (WSUD) features integrated into the public realm.",
    ],

    approachNumber: "02",
    approachHeading: "How We Delivered It",
    approachSteps: [
      {
        number: "01",
        title: "Hydrological Assessment",
        description:
          "Comprehensive hydrological and hydraulic modelling of the catchment to understand flood behaviour, groundwater interactions, and water quality requirements.",
      },
      {
        number: "02",
        title: "Integrated System Design",
        description:
          "Design of an integrated stormwater network incorporating detention basins, constructed wetlands, bio-retention systems, and underground storage to meet flood and water quality objectives.",
      },
      {
        number: "03",
        title: "WSUD Integration",
        description:
          "Integration of water sensitive urban design features into the public realm, creating landscape amenity while providing stormwater treatment and flow control.",
      },
      {
        number: "04",
        title: "Construction & Commissioning",
        description:
          "Construction support and commissioning of all stormwater assets, including performance verification and handover to Sydney Water for ongoing operation.",
      },
    ],

    resultsNumber: "03",
    resultsHeading: "Project Outcomes",
    resultsMetrics: [
      { value: "1,200 ha", label: "Catchment Area" },
      { value: "85%", label: "Pollutant Removal" },
      { value: "12 ML", label: "Detention Volume" },
      { value: "3.5 km", label: "Constructed Wetlands" },
    ],
    achievements: [
      "Achieved 85% total suspended solids removal, exceeding the regulatory water quality target of 80%.",
      "Created 12 hectares of new wetland habitat and community parkland integrated with the stormwater system.",
      "Delivered the project on schedule despite significant rainfall during construction, with no flood-related delays.",
      "Received the NSW Stormwater Industry Association Award for Excellence in Urban Stormwater Management.",
    ],

    galleryNumber: "04",
    galleryHeading: "Project Gallery",
    galleryImages: [
      "/images/image1.jpeg",
      "/images/image2.jpeg",
      "/images/image3.jpeg",
      "/images/image5.jpeg",
      "/images/image6.jpeg",
    ],

    relatedNumber: "05",
    relatedHeading: "Related Work",
    relatedProjects: [
      { title: "Great Western Highway Upgrade — Kelso to Raglan", slug: "great-western-highway-upgrade—kelso-to-raglan", image: "/images/image1.jpeg" },
      { title: "Jonica Rd Austral Double Storey Dwelling & Studio", slug: "jonica-rd-australia-double-storey-dwelling-&-studio", image: "/images/image2.jpeg" },
      { title: "Kelso to Raglan General Concrete Paving Works", slug: "kelso-to-raglan-general-concrete-paving-works", image: "/images/image7.jpeg" },
    ],
    referProjects: [
      { title: "Loftus Street, Riverstone Intersection Upgrade", image: "/images/image2.jpeg", slug: "loftus-street-riverstone-intersection-upgrade" },
      { title: "Mamre Road and Abbotts Road, Kemps Creek", image: "/images/image6.jpeg", slug: "mamre-road-and-abbotts-road-kemps-creek" },
      { title: "Urban Stormwater Management System", image: "/images/image7.jpeg", slug: "urban-stormwater-management-system" },
    ],
  },
  {
    slug: "kelso-to-raglan-general-concrete-paving-works",
    index: "05",
    title: "Kelso to Raglan General Concrete Paving Works",
    category: "Industrial Development",
    shortDescription:
      "Comprehensive civil and structural engineering for the Port of Newcastle upgrade, enhancing freight capacity and operational efficiency at Australia's largest port.",

    heroTitle: "Kelso to Raglan General Concrete Paving Works",
    heroImage: "/images/image6.jpeg",

    stats: [
      { label: "CLIENT", value: "Port Authority of NSW" },
      { label: "VALUE", value: "$420 Million" },
      { label: "DURATION", value: "2020 – 2025" },
      { label: "LOCATION", value: "Newcastle, NSW" },
      { label: "SCOPE", value: "Maritime & Civil Infrastructure" },
      { label: "TEAM", value: "14 Engineers" },
    ],

    aboutNumber: "01",
    aboutHeading: "What needed to be solved.",
    aboutDescription:
      "A major infrastructure upgrade program at the Port of Newcastle, delivering enhanced freight handling capacity, improved road and rail connectivity, and upgraded wharf infrastructure.",
    location: "Newcastle, NSW",
    challengeParagraphs: [
      "The working port environment required meticulous planning to maintain continuous port operations throughout construction, with no disruption to shipping schedules or freight movements.",
      "Challenging ground conditions including reclaimed land and variable founded depths required innovative foundation solutions and careful construction sequencing.",
    ],

    approachNumber: "02",
    approachHeading: "How We Delivered It",
    approachSteps: [
      {
        number: "01",
        title: "Operational Review & Planning",
        description: "Detailed review of port operations to identify critical path activities and develop construction staging that minimised operational impact.",
      },
      {
        number: "02",
        title: "Geotechnical Investigation",
        description: "Extensive geotechnical investigation of wharf and terminal areas to characterise ground conditions and inform foundation and pavement design.",
      },
      {
        number: "03",
        title: "Detailed Design & Documentation",
        description: "Full detailed design of wharf upgrades, pavement rehabilitation, and road/rail interface improvements to meet port operational requirements.",
      },
      {
        number: "04",
        title: "Construction & Commissioning",
        description: "On-site engineering support, quality verification, and commissioning of completed infrastructure for handover to port operations.",
      },
    ],

    resultsNumber: "03",
    resultsHeading: "Project Outcomes",
    resultsMetrics: [
      { value: "40%", label: "Capacity Increase" },
      { value: "3.2 km", label: "Wharf Upgraded" },
      { value: "1,200", label: "Daily Truck Movements" },
      { value: "0", label: "Operational Disruptions" },
    ],
    achievements: [
      "Delivered a 40% increase in freight handling capacity without any disruption to ongoing port operations.",
      "Completed all wharf works within stringent tidal and operational windows, with zero schedule overruns.",
      "Achieved an industry-leading safety record with over 80,000 hours worked without a lost-time incident.",
    ],

    galleryNumber: "04",
    galleryHeading: "Project Gallery",
    galleryImages: [
      "/images/image1.jpeg",
      "/images/image2.jpeg",
      "/images/image3.jpeg",
      "/images/image5.jpeg",
      "/images/image6.jpeg",
    ],

    relatedNumber: "05",
    relatedHeading: "Related Work",
    relatedProjects: [
      { title: "Jonica Rd Austral Double Storey Dwelling & Studio", slug: "jonica-rd-australia-double-storey-dwelling-&-studio", image: "/images/image1.jpeg" },
      { title: "Great Western Highway Upgrade — Kelso to Raglan", slug: "great-western-highway-upgrade—kelso-to-raglan", image: "/images/image6.jpeg" },
      { title: "BMD Bridge Inspection- TBA", slug: "bmd-bridge-inspection-tba", image: "/images/image7.jpeg" },
    ],
    referProjects: [
      { title: "Loftus Street, Riverstone Intersection Upgrade", image: "/images/image2.jpeg", slug: "loftus-street-riverstone-intersection-upgrade" },
      { title: "Mamre Road and Abbotts Road, Kemps Creek", image: "/images/image6.jpeg", slug: "mamre-road-and-abbotts-road-kemps-creek" },
      { title: "Urban Stormwater Management System", image: "/images/image7.jpeg", slug: "urban-stormwater-management-system" },
    ],
  },
  {
    slug: "may-street-bridge-over-mulwaree-river-goulburn",
    index: "06",
    title: "May Street Bridge over Mulwaree River, Goulburn",
    category: "Transportation Projects",
    shortDescription:
      "Strategic corridor enhancement program along the Pacific Highway, delivering road safety improvements, capacity upgrades, and travel time reliability for this critical national freight route.",

    heroTitle: "May Street Bridge over Mulwaree River, Goulburn",
    heroImage: "/images/image7.jpeg",

    stats: [
      { label: "CLIENT", value: "Transport for NSW" },
      { label: "VALUE", value: "$680 Million" },
      { label: "DURATION", value: "2021 – 2027" },
      { label: "LOCATION", value: "North Coast, NSW" },
      { label: "SCOPE", value: "Road & Transport Infrastructure" },
      { label: "TEAM", value: "20 Engineers" },
    ],

    aboutNumber: "01",
    aboutHeading: "What needed to be solved.",
    aboutDescription:
      "A strategic corridor enhancement program delivering safety improvements, capacity upgrades, and travel time reliability along a 180 km section of the Pacific Highway — Australia's critical east coast freight route.",
    location: "North Coast, NSW",
    challengeParagraphs: [
      "Delivering upgrades on a live highway carrying over 20,000 vehicles per day required meticulous traffic management and construction staging to minimise disruption while maintaining safety.",
      "The corridor traverses environmentally sensitive areas including koala habitats and significant waterways, requiring careful environmental management and innovative mitigation measures.",
    ],

    approachNumber: "02",
    approachHeading: "How We Delivered It",
    approachSteps: [
      {
        number: "01",
        title: "Corridor Assessment & Planning",
        description: "Comprehensive assessment of the entire corridor to identify priority locations for safety and capacity improvements based on crash data and traffic modelling.",
      },
      {
        number: "02",
        title: "Environmental & Stakeholder Engagement",
        description: "Close collaboration with environmental regulators, local communities, and stakeholders to develop solutions that balance transport outcomes with environmental stewardship.",
      },
      {
        number: "03",
        title: "Detailed Design & Approvals",
        description: "Full detailed design of intersection upgrades, overtaking lanes, safety barriers, and wildlife crossings with concurrent environmental approval processes.",
      },
      {
        number: "04",
        title: "Construction Delivery",
        description: "Phased construction delivery with comprehensive traffic management to maintain highway operations, supported by on-site engineering and quality assurance.",
      },
    ],

    resultsNumber: "03",
    resultsHeading: "Project Outcomes",
    resultsMetrics: [
      { value: "180 km", label: "Corridor Improved" },
      { value: "35%", label: "Crash Reduction" },
      { value: "12", label: "Intersections Upgraded" },
      { value: "28", label: "Wildlife Crossings" },
    ],
    achievements: [
      "Achieved a 35% reduction in crash frequency across the corridor within the first two years of completion.",
      "Delivered 28 wildlife crossings including 12 canopy bridges, setting a new standard for ecological connectivity in road infrastructure.",
      "Completed all works on time and within budget despite challenging environmental conditions and weather events.",
      "Awarded the Engineers Australia Infrastructure Award for Excellence in Transport Infrastructure.",
    ],

    galleryNumber: "04",
    galleryHeading: "Project Gallery",
    galleryImages: [
      "/images/image1.jpeg",
      "/images/image2.jpeg",
      "/images/image3.jpeg",
      "/images/image4.jpeg",
      "/images/image6.jpeg",
    ],

    relatedNumber: "05",
    relatedHeading: "Related Work",
    relatedProjects: [
      { title: "Great Western Highway Upgrade — Kelso to Raglan", slug: "great-western-highway-upgrade—kelso-to-raglan", image: "/images/image1.jpeg" },
      { title: "Jonica Rd Austral Double Storey Dwelling & Studio", slug: "jonica-rd-australia-double-storey-dwelling-&-studio", image: "/images/image2.jpeg" },
      { title: "Kelso to Raglan General Concrete Paving Works", slug: "kelso-to-raglan-general-concrete-paving-works", image: "/images/image7.jpeg" },
    ],
    referProjects: [
      { title: "Loftus Street, Riverstone Intersection Upgrade", image: "/images/image2.jpeg", slug: "loftus-street-riverstone-intersection-upgrade" },
      { title: "Mamre Road and Abbotts Road, Kemps Creek", image: "/images/image6.jpeg", slug: "mamre-road-and-abbotts-road-kemps-creek" },
      { title: "Urban Stormwater Management System", image: "/images/image7.jpeg", slug: "urban-stormwater-management-system" },
    ],
  },
  {
    slug: "solarfarm-intersection-upgrade-at-643-mitchell-highway-orange",
    index: "07",
    title: "Solarfarm Intersection Upgrade at 643 Mitchell Highway, Orange",
    category: "Urban Infrastructure",
    shortDescription:
      "Intersection upgrade improving traffic flow, safety, and connectivity at the Solarfarm site on Mitchell Highway, Orange.",

    heroTitle: "Solarfarm Intersection Upgrade at 643 Mitchell Highway, Orange",
    heroImage: "/images/image12.png",

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
      { title: "Great Western Highway Upgrade — Kelso to Raglan", slug: "great-western-highway-upgrade—kelso-to-raglan", image: "/images/image1.jpeg" },
      { title: "Loftus Street and Windsor Road, Grantham Farm", slug: "loftus-street-and-windsor-road-grantham-farm-signalised-intersection", image: "/images/image2.jpeg" },
      { title: "MR536 Mamre Road & Abbotts Rd Kemps Creek", slug: "mr536-mamre-road-&-abbotts-rd-kemps-creek", image: "/images/image14.png" },
    ],
    referProjects: [
      { title: "Loftus Street, Riverstone Intersection Upgrade", image: "/images/image2.jpeg", slug: "loftus-street-riverstone-intersection-upgrade" },
      { title: "Mamre Road and Abbotts Road, Kemps Creek", image: "/images/image6.jpeg", slug: "mamre-road-and-abbotts-road-kemps-creek" },
      { title: "Urban Stormwater Management System", image: "/images/image7.jpeg", slug: "urban-stormwater-management-system" },
    ],
  },
  {
    slug: "loftus-street-and-windsor-road-grantham-farm-signalised-intersection",
    index: "08",
    title: "Loftus Street and Windsor Road, Grantham Farm - Signalised Intersection",
    category: "Urban Infrastructure",
    shortDescription:
      "Signalised intersection upgrade at Grantham Farm improving traffic flow, safety, and connectivity for the surrounding road network.",

    heroTitle: "Loftus Street and Windsor Road, Grantham Farm - Signalised Intersection",
    heroImage: "/images/image13.png",

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
      { title: "Great Western Highway Upgrade — Kelso to Raglan", slug: "great-western-highway-upgrade—kelso-to-raglan", image: "/images/image1.jpeg" },
      { title: "Solarfarm Intersection Upgrade, Orange", slug: "solarfarm-intersection-upgrade-at-643-mitchell-highway-orange", image: "/images/image12.png" },
      { title: "MR536 Mamre Road & Abbotts Rd Kemps Creek", slug: "mr536-mamre-road-&-abbotts-rd-kemps-creek", image: "/images/image14.png" },
    ],
    referProjects: [
      { title: "Loftus Street, Riverstone Intersection Upgrade", image: "/images/image2.jpeg", slug: "loftus-street-riverstone-intersection-upgrade" },
      { title: "Mamre Road and Abbotts Road, Kemps Creek", image: "/images/image6.jpeg", slug: "mamre-road-and-abbotts-road-kemps-creek" },
      { title: "Urban Stormwater Management System", image: "/images/image7.jpeg", slug: "urban-stormwater-management-system" },
    ],
  },
  {
    slug: "mr536-mamre-road-&-abbotts-rd-kemps-creek",
    index: "09",
    title: "MR536 Mamre Road & Abbotts Rd Kemps Creek",
    category: "Urban Infrastructure",
    shortDescription:
      "Road infrastructure upgrade improving intersection geometry, drainage, and overall road safety at the Mamre Road and Abbotts Road connection.",

    heroTitle: "MR536 Mamre Road & Abbotts Rd Kemps Creek",
    heroImage: "/images/image14.png",

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
      { title: "Great Western Highway Upgrade — Kelso to Raglan", slug: "great-western-highway-upgrade—kelso-to-raglan", image: "/images/image1.jpeg" },
      { title: "Solarfarm Intersection Upgrade, Orange", slug: "solarfarm-intersection-upgrade-at-643-mitchell-highway-orange", image: "/images/image12.png" },
      { title: "Loftus Street and Windsor Road, Grantham Farm", slug: "loftus-street-and-windsor-road-grantham-farm-signalised-intersection", image: "/images/image13.png" },
    ],
    referProjects: [
      { title: "Loftus Street, Riverstone Intersection Upgrade", image: "/images/image2.jpeg", slug: "loftus-street-riverstone-intersection-upgrade" },
      { title: "Mamre Road and Abbotts Road, Kemps Creek", image: "/images/image6.jpeg", slug: "mamre-road-and-abbotts-road-kemps-creek" },
      { title: "Urban Stormwater Management System", image: "/images/image7.jpeg", slug: "urban-stormwater-management-system" },
    ],
  },
  {
    slug: "loftus-street-riverstone-intersection-upgrade",
    index: "10",
    title: "Loftus Street, Riverstone Intersection Upgrade",
    category: "Urban Infrastructure",
    shortDescription:
      "Intersection upgrade at Riverstone improving traffic flow, pedestrian safety, and connectivity for the growing residential community.",

    heroTitle: "Loftus Street, Riverstone Intersection Upgrade",
    heroImage: "/images/image2.jpeg",

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
      "/images/image6.jpeg",
      "/images/image7.jpeg",
    ],

    relatedNumber: "05",
    relatedHeading: "Related Work",
    relatedProjects: [
      { title: "Great Western Highway Upgrade — Kelso to Raglan", slug: "great-western-highway-upgrade—kelso-to-raglan", image: "/images/image1.jpeg" },
      { title: "Loftus Street and Windsor Road, Grantham Farm", slug: "loftus-street-and-windsor-road-grantham-farm-signalised-intersection", image: "/images/image13.png" },
      { title: "Mamre Road and Abbotts Road, Kemps Creek", slug: "mamre-road-and-abbotts-road-kemps-creek", image: "/images/image6.jpeg" },
    ],
    referProjects: [
      { title: "Loftus Street, Riverstone Intersection Upgrade", image: "/images/image2.jpeg", slug: "loftus-street-riverstone-intersection-upgrade" },
      { title: "Mamre Road and Abbotts Road, Kemps Creek", image: "/images/image6.jpeg", slug: "mamre-road-and-abbotts-road-kemps-creek" },
      { title: "Urban Stormwater Management System", image: "/images/image7.jpeg", slug: "urban-stormwater-management-system" },
    ],
  },
  {
    slug: "mamre-road-and-abbotts-road-kemps-creek",
    index: "11",
    title: "Mamre Road and Abbotts Road, Kemps Creek",
    category: "Urban Infrastructure",
    shortDescription:
      "Major road upgrade improving intersection capacity, drainage infrastructure, and overall safety at the Mamre Road and Abbotts Road corridor.",

    heroTitle: "Mamre Road and Abbotts Road, Kemps Creek",
    heroImage: "/images/image6.jpeg",

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
      { title: "Great Western Highway Upgrade — Kelso to Raglan", slug: "great-western-highway-upgrade—kelso-to-raglan", image: "/images/image1.jpeg" },
      { title: "MR536 Mamre Road & Abbotts Rd Kemps Creek", slug: "mr536-mamre-road-&-abbotts-rd-kemps-creek", image: "/images/image14.png" },
      { title: "Loftus Street, Riverstone Intersection Upgrade", slug: "loftus-street-riverstone-intersection-upgrade", image: "/images/image2.jpeg" },
    ],
    referProjects: [
      { title: "Loftus Street, Riverstone Intersection Upgrade", image: "/images/image2.jpeg", slug: "loftus-street-riverstone-intersection-upgrade" },
      { title: "Mamre Road and Abbotts Road, Kemps Creek", image: "/images/image6.jpeg", slug: "mamre-road-and-abbotts-road-kemps-creek" },
      { title: "Urban Stormwater Management System", image: "/images/image7.jpeg", slug: "urban-stormwater-management-system" },
    ],
  },
  {
    slug: "urban-stormwater-management-system",
    index: "12",
    title: "Urban Stormwater Management System",
    category: "Water & Irrigation Systems",
    shortDescription:
      "Integrated stormwater management solution for a high-density urban precinct, combining flood mitigation, water quality treatment, and community amenity.",

    heroTitle: "Urban Stormwater Management System",
    heroImage: "/images/image7.jpeg",

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
      { title: "Great Western Highway Upgrade — Kelso to Raglan", slug: "great-western-highway-upgrade—kelso-to-raglan", image: "/images/image1.jpeg" },
      { title: "BMD Bridge Inspection - TBA", slug: "bmd-bridge-inspection-tba", image: "/images/image2.jpeg" },
      { title: "Mamre Road and Abbotts Road, Kemps Creek", slug: "mamre-road-and-abbotts-road-kemps-creek", image: "/images/image6.jpeg" },
    ],
    referProjects: [
      { title: "Loftus Street, Riverstone Intersection Upgrade", image: "/images/image2.jpeg", slug: "loftus-street-riverstone-intersection-upgrade" },
      { title: "Mamre Road and Abbotts Road, Kemps Creek", image: "/images/image6.jpeg", slug: "mamre-road-and-abbotts-road-kemps-creek" },
      { title: "Urban Stormwater Management System", image: "/images/image7.jpeg", slug: "urban-stormwater-management-system" },
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
