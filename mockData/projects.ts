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
}

export const projects: ProjectData[] = [
  {
    slug: "Metropolitan-Bridge-Rehabilitation",
    index: "01",
    title: "Metropolitan Bridge Rehabilitation",
    category: "Urban Infrastructure",
    shortDescription:
      "Delivering comprehensive engineering support for the Western Sydney Infrastructure Corridor, improving connectivity and supporting economic growth in the region.",

    heroTitle: "WESTERN SYDNEY INFRASTRUCTURE CORRIDOR",
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
    aboutHeading: "About the Project",
    aboutDescription:
      "Metropolitan Bridge Rehabilitation involved delivering comprehensive engineering support to restore structural integrity, improve safety, and extend the operational lifespan of critical bridge infrastructure through effective planning, design, and project management.",
    location: "Western Sydney, NSW",
    challengeParagraphs: [
      "The project presented significant engineering challenges, including complex ground conditions across the corridor alignment, requiring innovative foundation solutions and extensive geotechnical investigation. The need to maintain existing transport operations during construction demanded meticulous staging and traffic management planning.",
      "Environmental sensitivities, including waterway crossings and endangered ecological communities, required close collaboration with environmental specialists and regulatory authorities to achieve approval and minimise construction impacts.",
    ],

    approachNumber: "02",
    approachHeading: "Our Approach",
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
    relatedHeading: "Related Projects",
    relatedProjects: [
      { title: "Metropolitan Bridge Rehabilitation", slug: "metropolitan-bridge-rehabilitation", image: "/images/image6.jpeg" },
      { title: "Hunter Valley Renewable Energy Hub", slug: "hunter-valley-renewable-energy-hub", image: "/images/image2.jpeg" },
      { title: "Urban Stormwater Management System", slug: "urban-stormwater-management-system", image: "/images/image7.jpeg" },
    ],
  },
  {
    slug: "hunter-valley-renewable-energy-hub",
    index: "02",
    title: "Hunter Valley Renewable Energy Hub",
    category: "Urban Infrastructure",
    shortDescription:
      "Engineering the clean energy transition in the Hunter Valley with comprehensive civil design and construction support for a large-scale renewable energy precinct.",

    heroTitle: "HUNTER VALLEY RENEWABLE ENERGY HUB",
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
    aboutHeading: "About the Project",
    aboutDescription:
      "The Hunter Valley Renewable Energy Hub is a landmark clean energy precinct combining solar generation, wind energy, and battery storage to deliver reliable renewable energy to the NSW grid.",
    location: "Hunter Valley, NSW",
    challengeParagraphs: [
      "The project spans over 3,000 hectares across multiple landholdings, requiring complex site planning to optimise layout while minimising environmental impact and maintaining agricultural land use where possible.",
      "Grid connection presented significant technical challenges, requiring detailed power system studies and close coordination with Transgrid to design the network connection infrastructure.",
    ],

    approachNumber: "02",
    approachHeading: "Our Approach",
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
    relatedHeading: "Related Projects",
    relatedProjects: [
      { title: "Western Sydney Infrastructure Corridor", slug: "Metropolitan Bridge Rehabilitation", image: "/images/image1.jpeg" },
      { title: "Metropolitan Bridge Rehabilitation", slug: "metropolitan-bridge-rehabilitation", image: "/images/image6.jpeg" },
      { title: "Urban Stormwater Management System", slug: "urban-stormwater-management-system", image: "/images/image7.jpeg" },
    ],
  },
  {
    slug: "Western-Sydney-Infrastructure-Corridor",
    index: "03",
    title: "Western Sydney Infrastructure Corridor",
    category: "Structural Engineering",
    shortDescription:
      "Comprehensive bridge rehabilitation program restoring structural integrity, improving safety, and extending the operational lifespan of critical metropolitan bridge infrastructure.",

    heroTitle: "Western Sydney Infrastructure Corridor",
    heroImage: "/images/image1.jpeg",

    stats: [
      { label: "CLIENT", value: "Transport for NSW" },
      { label: "VALUE", value: "$180 Million" },
      { label: "DURATION", value: "2020 – 2025" },
      { label: "LOCATION", value: "Sydney Metropolitan, NSW" },
      { label: "SCOPE", value: "Structural Remediation" },
      { label: "TEAM", value: "18 Engineers" },
    ],

    aboutNumber: "01",
    aboutHeading: "About the Project",
    aboutDescription:
      "A comprehensive bridge rehabilitation program encompassing structural assessment, detailed design, and construction supervision for 12 critical bridge assets across the Sydney metropolitan area.",
    location: "Sydney Metropolitan, NSW",
    challengeParagraphs: [
      "Many of the bridges were over 50 years old with limited as-built documentation, requiring extensive field investigation and non-destructive testing to establish existing conditions. The program had to be delivered without disrupting peak-hour traffic on some of Sydney's busiest transport corridors.",
      "Structural deficiencies identified during initial inspections required innovative strengthening solutions that could be installed within tight weekend possession windows, demanding close coordination with traffic management and rail authorities.",
    ],

    approachNumber: "02",
    approachHeading: "Our Approach",
    approachSteps: [
      {
        number: "01",
        title: "Condition Assessment",
        description:
          "Comprehensive visual inspection, non-destructive testing, and load rating analysis of all bridge assets to establish baseline condition and prioritise interventions.",
      },
      {
        number: "02",
        title: "Remedial Design Development",
        description:
          "Development of strengthening and remediation designs using advanced analysis techniques, including FRP wrapping, steel plate bonding, and bearing replacement solutions.",
      },
      {
        number: "03",
        title: "Traffic Management Integration",
        description:
          "Design of construction staging and traffic management plans to enable safe delivery of works within tight weekend and night-time possession windows.",
      },
      {
        number: "04",
        title: "Construction Supervision",
        description:
          "On-site engineering supervision during all remedial works, ensuring compliance with design intent and maintaining quality standards across all 12 bridge sites.",
      },
    ],

    resultsNumber: "03",
    resultsHeading: "Project Outcomes",
    resultsMetrics: [
      { value: "12", label: "Bridges Rehabilitated" },
      { value: "50+", label: "Years Life Extended" },
      { value: "0", label: "Traffic Disruptions" },
      { value: "98%", label: "On-Time Delivery" },
    ],
    achievements: [
      "All 12 bridges successfully rehabilitated and returned to service with a minimum 50-year design life extension.",
      "Zero unplanned traffic disruptions during the entire construction program, despite working on some of Sydney's busiest corridors.",
      "Achieved 98% on-time delivery across all possession windows, with no overruns on critical path activities.",
      "Received commendation from TfNSW for innovative use of FRP strengthening technology, setting a benchmark for future programs.",
    ],

    galleryNumber: "04",
    galleryHeading: "Project Gallery",
    galleryImages: [
      "/images/image3.jpeg",
      "/images/image4.jpeg",
      "/images/image5.jpeg",
      "/images/image7.jpeg",
      "/images/image1.jpeg",
    ],

    relatedNumber: "05",
    relatedHeading: "Related Projects",
    relatedProjects: [
      { title: "Western Sydney Infrastructure Corridor", slug: "western-sydney-infrastructure-corridor", image: "/images/image1.jpeg" },
      { title: "Hunter Valley Renewable Energy Hub", slug: "hunter-valley-renewable-energy-hub", image: "/images/image2.jpeg" },
      { title: "Urban Stormwater Management System", slug: "urban-stormwater-management-system", image: "/images/image7.jpeg" },
    ],
  },
  {
    slug: "Hunter-Valley-Renewable-Energy-Hub",
    index: "04",
    title: "Hunter Valley Renewable Energy Hub",
    category: "Water & Irrigation Systems",
    shortDescription:
      "Integrated stormwater management solution for a high-density urban precinct, combining flood mitigation, water quality treatment, and community amenity.",

    heroTitle: "Hunter Valley Renewable Energy Hub",
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
    aboutHeading: "About the Project",
    aboutDescription:
      "An integrated stormwater management system designed to mitigate flood risk, improve water quality, and create community amenity in a rapidly developing urban precinct in Western Sydney.",
    location: "Western Sydney, NSW",
    challengeParagraphs: [
      "The precinct's location in a floodplain with high groundwater presented significant drainage and water management challenges. The system had to accommodate a 1% AEP flood event while managing ongoing groundwater interactions.",
      "Environmental water quality targets required innovative treatment solutions, including constructed wetlands and water sensitive urban design (WSUD) features integrated into the public realm.",
    ],

    approachNumber: "02",
    approachHeading: "Our Approach",
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
    relatedHeading: "Related Projects",
    relatedProjects: [
      { title: "Western Sydney Infrastructure Corridor", slug: "western-sydney-infrastructure-corridor", image: "/images/image1.jpeg" },
      { title: "Metropolitan Bridge Rehabilitation", slug: "metropolitan-bridge-rehabilitation", image: "/images/image6.jpeg" },
      { title: "Hunter Valley Renewable Energy Hub", slug: "hunter-valley-renewable-energy-hub", image: "/images/image2.jpeg" },
    ],
  },
  {
    slug: "Metropolitan-Bridge-Rehabilitation",
    index: "05",
    title: "Metropolitan Bridge Rehabilitation",
    category: "Industrial Development",
    shortDescription:
      "Comprehensive civil and structural engineering for the Port of Newcastle upgrade, enhancing freight capacity and operational efficiency at Australia's largest port.",

    heroTitle: "Metropolitan Bridge Rehabilitation",
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
    aboutHeading: "About the Project",
    aboutDescription:
      "A major infrastructure upgrade program at the Port of Newcastle, delivering enhanced freight handling capacity, improved road and rail connectivity, and upgraded wharf infrastructure.",
    location: "Newcastle, NSW",
    challengeParagraphs: [
      "The working port environment required meticulous planning to maintain continuous port operations throughout construction, with no disruption to shipping schedules or freight movements.",
      "Challenging ground conditions including reclaimed land and variable founded depths required innovative foundation solutions and careful construction sequencing.",
    ],

    approachNumber: "02",
    approachHeading: "Our Approach",
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
    relatedHeading: "Related Projects",
    relatedProjects: [
      { title: "Western Sydney Infrastructure Corridor", slug: "western-sydney-infrastructure-corridor", image: "/images/image1.jpeg" },
      { title: "Metropolitan Bridge Rehabilitation", slug: "metropolitan-bridge-rehabilitation", image: "/images/image6.jpeg" },
      { title: "Urban Stormwater Management System", slug: "urban-stormwater-management-system", image: "/images/image7.jpeg" },
    ],
  },
  {
    slug: "Urban-Stormwater-Management-System",
    index: "06",
    title: "Urban Stormwater Management System",
    category: "Transportation Projects",
    shortDescription:
      "Strategic corridor enhancement program along the Pacific Highway, delivering road safety improvements, capacity upgrades, and travel time reliability for this critical national freight route.",

    heroTitle: "Urban Stormwater Management System",
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
    aboutHeading: "About the Project",
    aboutDescription:
      "A strategic corridor enhancement program delivering safety improvements, capacity upgrades, and travel time reliability along a 180 km section of the Pacific Highway — Australia's critical east coast freight route.",
    location: "North Coast, NSW",
    challengeParagraphs: [
      "Delivering upgrades on a live highway carrying over 20,000 vehicles per day required meticulous traffic management and construction staging to minimise disruption while maintaining safety.",
      "The corridor traverses environmentally sensitive areas including koala habitats and significant waterways, requiring careful environmental management and innovative mitigation measures.",
    ],

    approachNumber: "02",
    approachHeading: "Our Approach",
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
    relatedHeading: "Related Projects",
    relatedProjects: [
      { title: "Western Sydney Infrastructure Corridor", slug: "western-sydney-infrastructure-corridor", image: "/images/image1.jpeg" },
      { title: "Port of Newcastle Infrastructure Upgrade", slug: "port-of-newcastle-infrastructure-upgrade", image: "/images/image4.jpeg" },
      { title: "Metropolitan Bridge Rehabilitation", slug: "metropolitan-bridge-rehabilitation", image: "/images/image6.jpeg" },
    ],
  },
];

export function getProjectBySlug(slug: string): ProjectData | undefined {
  return projects.find((p) => p.slug === slug);
}
