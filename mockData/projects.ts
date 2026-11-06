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
  // =================================================================
  // 01 — Campbell Street Shared Path Upgrade (EXISTING — unchanged)
  // =================================================================
  {
    slug: "campbell-street-shared-path-upgrade-m5-project-stage-3",
    index: "01",
    title: "Campbell Street Shared Path Upgrade (M5 Project – Stage 3)",
    category: "Engineering & Design",
    shortDescription: "Civil and lighting design for new shared paths connecting Campbell Road, St Peters, through the culvert under Campbell Road Bridge.",
    heroTitle: "Campbell Street Shared Path Upgrade (M5 Project – Stage 3)",
    heroImage: "/images/projects/campbell-street-shared-path-upgrade-m5-project-stage-3/CH%2010.jpg",
    stats: [
      { label: "CLIENT", value: "Transport for NSW" },
      { label: "VALUE", value: "4.3 Billion" },
      { label: "DURATION", value: "Sep 2020 - Jun 2021" },
      { label: "LOCATION", value: "Alexandria, NSW" },
      { label: "SCOPE", value: "Civil and lighting design" },
      { label: "STATUS", value: "In Progress" },
    ],
    aboutNumber: "01",
    aboutHeading: "What needed to be solved.",
    aboutDescription: "Transport for NSW, under the M5 Project, required new shared paths along Campbell Road, St Peters, to connect with newly constructed shared paths and the future Alexandra Canal shared path.",
    location: "Alexandria, NSW",
    challengeParagraphs: [
      "Transport for NSW, under the M5 Project, required new shared paths along Campbell Road, St Peters, to connect with newly constructed shared paths and the future Alexandra Canal shared path.",
      "The design needed to provide a continuous north-south connection through the existing culvert under Campbell Road Bridge, including drainage, lighting and retaining walls suited to the underpass.",
      "Civil and lighting design was delivered for the 2.5 m and 3.0 m shared paths, two retaining walls and culvert lighting, through to Issued for Construction documentation.",
    ],
    approachNumber: "02",
    approachHeading: "How We Delivered It",
    approachSteps: [
      { number: "01", title: "Survey & Investigation", description: "Gap analysis, ground survey and utility identification to define the project area." },
      { number: "02", title: "Shared Path Design", description: "Path alignment, pavement design, signposting and delineation to TfNSW standards." },
      { number: "03", title: "Drainage, Lighting & Structures", description: "Underpass drainage, pedestrian lighting for the culvert and retaining wall design." },
      { number: "04", title: "Construction Documentation", description: "Issued for Construction drawings, specifications and construction guidance." },
    ],
    resultsNumber: "03",
    resultsHeading: "Project Outcomes",
    resultsMetrics: [
      { value: "90 m", label: "RC Retaining Wall" },
      { value: "3.0 m", label: "New shared path sections" },
      { value: "9 Months", label: "Project duration" },
      { value: "100%", label: "IFC documentation" },
    ],
    achievements: [
      "Designed new shared paths on both sides of Campbell Road.",
      "Provided a continuous connection through the culvert under Campbell Road Bridge.",
      "Pedestrian lighting designed to limit spill lighting.",
      "Underpass drainage designed using the ILSAX model in DRAINS.",
    ],
    galleryNumber: "04",
    galleryHeading: "Project Photography",
    galleryImages: [
      "/images/projects/campbell-street-shared-path-upgrade-m5-project-stage-3/CH%2010.jpg",
      "/images/projects/campbell-street-shared-path-upgrade-m5-project-stage-3/CH%2040.jpg",
      "/images/projects/campbell-street-shared-path-upgrade-m5-project-stage-3/IMG_1126.JPG",
      "/images/projects/campbell-street-shared-path-upgrade-m5-project-stage-3/IMG_1163.JPG",
      "/images/projects/campbell-street-shared-path-upgrade-m5-project-stage-3/IMG_4521.JPG",
      "/images/projects/campbell-street-shared-path-upgrade-m5-project-stage-3/IMG_4523.JPG",
      "/images/projects/campbell-street-shared-path-upgrade-m5-project-stage-3/Optic%20Fibre%201.jpg",
      "/images/projects/campbell-street-shared-path-upgrade-m5-project-stage-3/Picture10.jpg",
      "/images/projects/campbell-street-shared-path-upgrade-m5-project-stage-3/Picture3.jpg",
      "/images/projects/campbell-street-shared-path-upgrade-m5-project-stage-3/Picture4.jpg",
      "/images/projects/campbell-street-shared-path-upgrade-m5-project-stage-3/Picture5.jpg",
      "/images/projects/campbell-street-shared-path-upgrade-m5-project-stage-3/Picture6.jpg",
      "/images/projects/campbell-street-shared-path-upgrade-m5-project-stage-3/Picture7.jpg",
      "/images/projects/campbell-street-shared-path-upgrade-m5-project-stage-3/Picture8.jpg",
      "/images/projects/campbell-street-shared-path-upgrade-m5-project-stage-3/Picture9.jpg",
      "/images/projects/campbell-street-shared-path-upgrade-m5-project-stage-3/Screenshot%202025-04-30%20113708.png",
    ],
    relatedNumber: "05",
    relatedHeading: "Related Work",
    relatedProjects: [
      { title: "Kurrajong Rd, Prestons- Staged Improvement Strategic Design", slug: "kurrajong-road-upgrade-prestons-strategic-design", image: "/images/projects/kurrajong-road-upgrade-prestons-strategic-design/image090.jpg" },
      { title: "Dunmore St & Station St Junction Upgrade, Wentworthville", slug: "dunmore-st-station-st-junction-upgrade-wentworthville", image: "/images/projects/dunmore-st-station-st-junction-upgrade-wentworthville/20220802_231947587_iOS.jpg" },
      { title: "Design of Retaining Walls at King St & Banksia St- Bayside Council", slug: "king-st-banksia-st-retaining-walls-design-bayside-council", image: "/images/projects/king-st-banksia-st-retaining-walls-design-bayside-council/banksia-street-existing-wall.jpg" },
    ],
  },

  // =================================================================
  // 02 — Kurrajong Road Upgrade (EXISTING — unchanged)
  // =================================================================
  {
    slug: "kurrajong-road-upgrade-prestons-strategic-design",
    index: "02",
    title: "Kurrajong Road Upgrade, Prestons – Strategic Design",
    category: "Engineering & Design",
    shortDescription: "Strategic design for staged improvements along approximately 6.1 km of Kurrajong Road, Prestons.",
    heroTitle: "Kurrajong Road Upgrade, Prestons – Strategic Design",
    heroImage: "/images/projects/kurrajong-road-upgrade-prestons-strategic-design/image090.jpg",
    stats: [
      { label: "CLIENT", value: "Liverpool City Council" },
      { label: "DURATION", value: "Jan 2022 - Apr 2022" },
      { label: "LOCATION", value: "Liverpool, NSW" },
      { label: "SCOPE", value: "Strategic Design" },
      { label: "STATUS", value: "In Progress" },
    ],
    aboutNumber: "01",
    aboutHeading: "What needed to be solved.",
    aboutDescription: "Liverpool City Council required staged improvements along approximately 6.1 km of Kurrajong Road, Prestons, a major east/west collector road linking the Hume Highway and Cowpasture Road, as growing traffic flows were causing delays and road safety concerns.",
    location: "Liverpool, NSW",
    challengeParagraphs: [
      "Liverpool City Council required staged improvements along approximately 6.1 km of Kurrajong Road, Prestons, a major east/west collector road linking the Hume Highway and Cowpasture Road, as growing traffic flows were causing delays and road safety concerns.",
      "The strategic design needed to develop a two-lane configuration in each direction, with supporting treatments to improve safety and access, and to be delivered as short-term, medium-term and long-term improvements.",
      "A 2D strategic design was prepared in consultation with Council, in line with Council standards and the Austroads Guide to Road Design, and submitted in AutoCAD and PDF formats.",
    ],
    approachNumber: "02",
    approachHeading: "How We Delivered It",
    approachSteps: [
      { number: "01", title: "Inception & Design Criteria", description: "Inception workshop with Council to confirm improvement works and agree key design criteria." },
      { number: "02", title: "Strategic Design", description: "2D design overlaid on aerial imagery showing lane arrangements, intersection treatments and key features." },
      { number: "03", title: "Staged Improvements", description: "Short, medium and long-term works identified across the full 6.1 km corridor." },
      { number: "04", title: "Review & Submission", description: "Collaborative review workshop with Council, then final submission in AutoCAD and PDF formats." },
    ],
    resultsNumber: "03",
    resultsHeading: "Project Outcomes",
    resultsMetrics: [
      { value: "6.1 km", label: "Corridor Designed" },
      { value: "3", label: "Staged Improvement Horizons" },
      { value: "2+2", label: "Lane Configuration" },
      { value: "2", label: "State Roads Connected" },
    ],
    achievements: [
      "Strategic design delivered for 6.1 km of Kurrajong Road.",
      "Short, medium and long-term improvements defined.",
      "Two lanes in each direction, with safety and access treatments.",
      "Aligned with Council standards and Austroads guidelines.",
    ],
    galleryNumber: "04",
    galleryHeading: "Project Photography",
    galleryImages: [
      "/images/projects/kurrajong-road-upgrade-prestons-strategic-design/image090.jpg",
      "/images/projects/kurrajong-road-upgrade-prestons-strategic-design/image091.jpg",
      "/images/projects/kurrajong-road-upgrade-prestons-strategic-design/image092.jpg",
      "/images/projects/kurrajong-road-upgrade-prestons-strategic-design/image093.jpg",
      "/images/projects/kurrajong-road-upgrade-prestons-strategic-design/image094.jpg",
      "/images/projects/kurrajong-road-upgrade-prestons-strategic-design/image095.jpg",
      "/images/projects/kurrajong-road-upgrade-prestons-strategic-design/image096.jpg",
      "/images/projects/kurrajong-road-upgrade-prestons-strategic-design/image097.png",
      "/images/projects/kurrajong-road-upgrade-prestons-strategic-design/image098.png",
      "/images/projects/kurrajong-road-upgrade-prestons-strategic-design/image099.png",
      "/images/projects/kurrajong-road-upgrade-prestons-strategic-design/image100.png",
      "/images/projects/kurrajong-road-upgrade-prestons-strategic-design/image101.png",
      "/images/projects/kurrajong-road-upgrade-prestons-strategic-design/image102.png",
      "/images/projects/kurrajong-road-upgrade-prestons-strategic-design/light-horse-interchange_orig.jpg",
      "/images/projects/kurrajong-road-upgrade-prestons-strategic-design/unnamed%20%281%29.png",
      "/images/projects/kurrajong-road-upgrade-prestons-strategic-design/unnamed%20%282%29.png",
      "/images/projects/kurrajong-road-upgrade-prestons-strategic-design/unnamed%20%283%29.png",
      "/images/projects/kurrajong-road-upgrade-prestons-strategic-design/unnamed.png",
      "/images/projects/kurrajong-road-upgrade-prestons-strategic-design/westlink-m7-2_orig.jpg",
    ],
    relatedNumber: "05",
    relatedHeading: "Related Work",
    relatedProjects: [
      { title: "Campbell St Shared Path Upgrade -M5 Project (Stage 3)", slug: "campbell-street-shared-path-upgrade-m5-project-stage-3", image: "/images/projects/campbell-street-shared-path-upgrade-m5-project-stage-3/CH%2010.jpg" },
      { title: "Dunmore St & Station St Junction Upgrade, Wentworthville", slug: "dunmore-st-station-st-junction-upgrade-wentworthville", image: "/images/projects/dunmore-st-station-st-junction-upgrade-wentworthville/20220802_231947587_iOS.jpg" },
      { title: "Design of Retaining Walls at King St & Banksia St- Bayside Council", slug: "king-st-banksia-st-retaining-walls-design-bayside-council", image: "/images/projects/king-st-banksia-st-retaining-walls-design-bayside-council/banksia-street-existing-wall.jpg" },
    ],
  },

  // =================================================================
  // 03 — Dunmore St & Station St Junction Upgrade (EXISTING — unchanged)
  // =================================================================
  {
    slug: "dunmore-st-station-st-junction-upgrade-wentworthville",
    index: "03",
    title: "Dunmore St & Station St Junction Upgrade",
    category: "Engineering & Design",
    shortDescription: "Concept and detailed design to improve accessibility at the Dunmore Street and Station Street junction in Wentworthville.",
    heroTitle: "Dunmore St & Station St Junction Upgrade",
    heroImage: "/images/projects/dunmore-st-station-st-junction-upgrade-wentworthville/20220802_231947587_iOS.jpg",
    stats: [
      { label: "CLIENT", value: "DM Roads" },
      { label: "VALUE", value: "$184,000" },
      { label: "DURATION", value: "Feb 2022 - Sept 2022" },
      { label: "LOCATION", value: "Wentworthville, NSW" },
      { label: "SCOPE", value: "Concept and detailed design" },
      { label: "STATUS", value: "In Progress" },
    ],
    aboutNumber: "01",
    aboutHeading: "What needed to be solved.",
    aboutDescription: "The Dunmore Street and Station Street Junction Upgrade, funded under the Black Spot Program and delivered by DM Roads and Cumberland City Council, was initiated after accessibility issues were identified at the junction, including steep pram ramps and a bus stop kerb too low for wheelchair ramp deployment.",
    location: "Wentworthville, NSW",
    challengeParagraphs: [
      "The Dunmore Street and Station Street Junction Upgrade, funded under the Black Spot Program and delivered by DM Roads and Cumberland City Council, was initiated after accessibility issues were identified at the junction, including steep pram ramps and a bus stop kerb too low for wheelchair ramp deployment.",
      "The design needed to correct crossfalls and levels between pram ramps and provide compliant wheelchair access around the junction and at the bus stop, while minimising impact on existing traffic signal infrastructure and utilities.",
      "Three concept options were prepared for stakeholder consultation, followed by detailed design and Issued for Construction drawings in line with AusSpec, Council and Transport for NSW requirements.",
    ],
    approachNumber: "02",
    approachHeading: "How We Delivered It",
    approachSteps: [
      { number: "01", title: "Survey & Investigation", description: "Site inspection, topographical and utility survey, and DBYD review." },
      { number: "02", title: "Concept Options", description: "Three concept designs with pros and cons, reviewed with stakeholders in a design workshop." },
      { number: "03", title: "Detailed Design", description: "Plans, cross-sections, long sections and cut/fill volumes with compliant crossfalls and drainage." },
      { number: "04", title: "Review & IFC Documentation", description: "Safety in Design and constructability review, then Issued for Construction drawings." },
    ],
    resultsNumber: "03",
    resultsHeading: "Project Outcomes",
    resultsMetrics: [
      { value: "3", label: "Concept Options Developed" },
      { value: "50 m", label: "Survey Extent From Junction" },
      { value: "1", label: "Bus Stop" },
      { value: "4", label: "Junction Approaches Reviewed" },
    ],
    achievements: [
      "Concept options developed and assessed with stakeholders.",
      "Compliant crossfalls and levels designed between pram ramps.",
      "Bus stop design corrected to allow wheelchair ramp deployment.",
      "Impact on traffic signal infrastructure and utility covers minimised.",
    ],
    galleryNumber: "04",
    galleryHeading: "Project Photography",
    galleryImages: [
      "/images/projects/dunmore-st-station-st-junction-upgrade-wentworthville/20220802_231947587_iOS.jpg",
      "/images/projects/dunmore-st-station-st-junction-upgrade-wentworthville/20220802_232017398_iOS.jpg",
      "/images/projects/dunmore-st-station-st-junction-upgrade-wentworthville/20220802_232028640_iOS.jpg",
      "/images/projects/dunmore-st-station-st-junction-upgrade-wentworthville/20220802_232811572_iOS.jpg",
      "/images/projects/dunmore-st-station-st-junction-upgrade-wentworthville/dunmore-station-street-site-plan.jpg",
      "/images/projects/dunmore-st-station-st-junction-upgrade-wentworthville/junction-streetscape-east.jpeg",
      "/images/projects/dunmore-st-station-st-junction-upgrade-wentworthville/junction-streetscape-west.jpeg",
    ],
    relatedNumber: "05",
    relatedHeading: "Related Work",
    relatedProjects: [
      { title: "Campbell St Shared Path Upgrade -M5 Project (Stage 3)", slug: "campbell-street-shared-path-upgrade-m5-project-stage-3", image: "/images/projects/campbell-street-shared-path-upgrade-m5-project-stage-3/CH%2010.jpg" },
      { title: "Kurrajong Rd, Prestons- Staged Improvement Strategic Design", slug: "kurrajong-road-upgrade-prestons-strategic-design", image: "/images/projects/kurrajong-road-upgrade-prestons-strategic-design/image090.jpg" },
      { title: "Design of Retaining Walls at King St & Banksia St- Bayside Council", slug: "king-st-banksia-st-retaining-walls-design-bayside-council", image: "/images/projects/king-st-banksia-st-retaining-walls-design-bayside-council/banksia-street-existing-wall.jpg" },
    ],
  },

  // =================================================================
  // 04 — King St & Banksia St Retaining Walls (EXISTING — unchanged)
  // =================================================================
  {
    slug: "king-st-banksia-st-retaining-walls-design-bayside-council",
    index: "04",
    title: "King St & Banksia St Retaining Walls Design – Bayside Council",
    category: "Engineering & Design",
    shortDescription: "Structural and geotechnical design for two retaining wall replacements at King Street, Rockdale and Banksia Street, Pagewood.",
    heroTitle: "King St & Banksia St Retaining Walls Design – Bayside Council",
    heroImage: "/images/projects/king-st-banksia-st-retaining-walls-design-bayside-council/banksia-street-existing-wall.jpg",
    stats: [
      { label: "CLIENT", value: "Indus Engineering" },
      { label: "DURATION", value: "September 2026 - Current" },
      { label: "LOCATION", value: "Rockdale NSW; Pagewood NSW" },
      { label: "SCOPE", value: "Structural and geotechnical design" },
      { label: "STATUS", value: "In Progress" },
    ],
    aboutNumber: "01",
    aboutHeading: "What needed to be solved.",
    aboutDescription: "Bayside Council's retaining wall renewal program required the replacement of two ageing retaining walls supporting road-verge embankments at King Street, Rockdale and Banksia Street, Pagewood, delivered through Indus Engineering.",
    location: "Rockdale NSW; Pagewood NSW",
    challengeParagraphs: [
      "Bayside Council's retaining wall renewal program required the replacement of two ageing retaining walls supporting road-verge embankments at King Street, Rockdale and Banksia Street, Pagewood, delivered through Indus Engineering.",
      "The new walls needed to achieve a 100-year design life within established residential streets, close to mature trees, underground services and adjoining properties, with site-specific geotechnical and drainage conditions.",
      "Structural and geotechnical design was prepared for a 63 m masonry/block wall at King Street and a 43.6 m steel H-post and precast sleeper wall at Banksia Street.",
    ],
    approachNumber: "02",
    approachHeading: "How We Delivered It",
    approachSteps: [
      { number: "01", title: "Geotechnical Coordination", description: "Review of site investigations to confirm founding conditions and design parameters." },
      { number: "02", title: "Structural Design", description: "Wall design for both sites, including earth pressure, post, pier and sleeper checks." },
      { number: "03", title: "Durability & Drainage", description: "100-year design life provisions, corrosion protection and subsoil drainage behind both walls." },
      { number: "04", title: "Drawings & Verification", description: "Design drawing packages and construction hold points, testing and founding verification." },
    ],
    resultsNumber: "03",
    resultsHeading: "Project Outcomes",
    resultsMetrics: [
      { value: "100 Years", label: "Design life" },
      { value: "107 m", label: "Total wall length" },
      { value: "2", label: "Sites designed" },
      { value: "63 m", label: "King Street Wall" },
    ],
    achievements: [
      "Replacement designed for two deteriorated retaining walls.",
      "100-year design life with corrosion protection.",
      "Subsoil drainage designed behind both walls.",
      "Construction verification requirements specified.",
    ],
    galleryNumber: "04",
    galleryHeading: "Project Photography",
    galleryImages: [
      "/images/projects/king-st-banksia-st-retaining-walls-design-bayside-council/banksia-street-existing-wall.jpg",
      "/images/projects/king-st-banksia-st-retaining-walls-design-bayside-council/banksia-street-road-verge.jpg",
      "/images/projects/king-st-banksia-st-retaining-walls-design-bayside-council/king-street-existing-wall.jpg",
      "/images/projects/king-st-banksia-st-retaining-walls-design-bayside-council/king-street-road-verge.jpg",
      "/images/projects/king-st-banksia-st-retaining-walls-design-bayside-council/retaining-wall-design-section.jpg",
      "/images/projects/king-st-banksia-st-retaining-walls-design-bayside-council/wall-measurement-detail.jpg",
      "/images/projects/king-st-banksia-st-retaining-walls-design-bayside-council/wall-site-investigation.jpg",
    ],
    relatedNumber: "05",
    relatedHeading: "Related Work",
    relatedProjects: [
      { title: "Campbell St Shared Path Upgrade -M5 Project (Stage 3)", slug: "campbell-street-shared-path-upgrade-m5-project-stage-3", image: "/images/projects/campbell-street-shared-path-upgrade-m5-project-stage-3/CH%2010.jpg" },
      { title: "Kurrajong Rd, Prestons- Staged Improvement Strategic Design", slug: "kurrajong-road-upgrade-prestons-strategic-design", image: "/images/projects/kurrajong-road-upgrade-prestons-strategic-design/image090.jpg" },
      { title: "Dunmore St & Station St Junction Upgrade, Wentworthville", slug: "dunmore-st-station-st-junction-upgrade-wentworthville", image: "/images/projects/dunmore-st-station-st-junction-upgrade-wentworthville/20220802_231947587_iOS.jpg" },
    ],
  },

  // =================================================================
  // 05 — M4 Smart Motorway Stage 2 (EXISTING — unchanged)
  // =================================================================
  {
    slug: "m4-smart-motorway-stage-2",
    index: "05",
    title: "M4 Smart Motorway Stage 2",
    category: "Project & Program Management",
    shortDescription: "Project engineering support for Stage 2 of NSW’s first smart motorway, improving congestion, safety and incident response on the M4.",
    heroTitle: "M4 Smart Motorway Stage 2",
    heroImage: "/images/projects/m4-smart-motorway-stage-2/00_M4SM_Hero-1.jpg",
    stats: [
      { label: "CLIENT", value: "Transport for NSW" },
      { label: "VALUE", value: "$470 Million" },
      { label: "DURATION", value: "April 2018 to October 2022" },
      { label: "LOCATION", value: "Mays Hill, NSW" },
      { label: "SCOPE", value: "Project engineering support" },
      { label: "STATUS", value: "In Progress" },
    ],
    aboutNumber: "01",
    aboutHeading: "What needed to be solved.",
    aboutDescription: "Transport for NSW delivered Stage 2 of the M4 Smart Motorway, the first in NSW, to reduce congestion and improve safety and incident response on a motorway carrying up to 7,100 vehicles per direction at peak times.",
    location: "Mays Hill, NSW",
    challengeParagraphs: [
      "Transport for NSW delivered Stage 2 of the M4 Smart Motorway, the first in NSW, to reduce congestion and improve safety and incident response on a motorway carrying up to 7,100 vehicles per direction at peak times.",
      "The works included variable message signs, traffic sensors, CCTV, speed and lane use signs, and widened ramps with new ramp meters, delivered by Seymour Whyte on a live motorway.",
      "Project engineering support was provided to TfNSW, overseeing contractor compliance with contract specifications, safety, environment, quality and traffic requirements.",
    ],
    approachNumber: "02",
    approachHeading: "How We Delivered It",
    approachSteps: [
      { number: "01", title: "Plan Review", description: "Review of the contractor's site management plans for safety, environment, quality and traffic." },
      { number: "02", title: "Inspection & Monitoring", description: "Periodic site inspections to monitor work against specifications, drawings and program." },
      { number: "03", title: "Hold Points & Compliance", description: "Witness and hold point inspections, with ITPs signed and compliance recorded." },
      { number: "04", title: "Reporting & Claims", description: "Progress reports, site meeting minutes, and assessment of progress, variation and EOT claims." },
    ],
    resultsNumber: "03",
    resultsHeading: "Project Outcomes",
    resultsMetrics: [
      { value: "1st", label: "Smart motorway in NSW" },
      { value: "3", label: "Ramps upgraded" },
      { value: "7,100", label: "Peak vehicles per direction" },
      { value: "2", label: "Project stage delivered" },
    ],
    achievements: [
      "Supported delivery of the first smart motorway in NSW.",
      "Contractor works monitored for contract, safety and environmental compliance.",
      "Hold and witness points inspected and compliance recorded.",
      "Emerging program, variation and EOT issues reported to TfNSW.",
    ],
    galleryNumber: "04",
    galleryHeading: "Project Photography",
    galleryImages: [
      "/images/projects/m4-smart-motorway-stage-2/00_M4SM_Hero-1.jpg",
      "/images/projects/m4-smart-motorway-stage-2/01_M4SM-845x684.jpg",
      "/images/projects/m4-smart-motorway-stage-2/02_M4SM-845x684.jpg",
      "/images/projects/m4-smart-motorway-stage-2/06_M4SM-845x683.png",
      "/images/projects/m4-smart-motorway-stage-2/09_M4SM-845x684.jpg",
      "/images/projects/m4-smart-motorway-stage-2/Image-in-Content-808-px-500-px44.jpg",
      "/images/projects/m4-smart-motorway-stage-2/m4-smart-motorway-new-south-wales-1.jpg",
      "/images/projects/m4-smart-motorway-stage-2/M4-SmartMotorway-Sydney-scaled.jpg",
      "/images/projects/m4-smart-motorway-stage-2/M4.jpg",
    ],
    relatedNumber: "05",
    relatedHeading: "Related Work",
    relatedProjects: [
      { title: "Bruce Highway Upgrade - Caboolture-Bribie Island Road to Steve Irwin Way", slug: "bruce-highway-upgrade-caboolture-bribie-island-road-to-steve-irwin-way", image: "/images/team/noimage.png" },
      { title: "Intersection upgrade at Showground Road and Carrington Road, Castle Hill", slug: "intersection-upgrade-showground-road-carrington-road-castle-hill", image: "/images/projects/intersection-upgrade-showground-road-carrington-road-castle-hill/unnamed%20%281%29.png" },
      { title: "A40 Victoria Rd, Kissing Point Rd & NSR2 Intersection Upgrade, Melrose Park", slug: "a40-victoria-road-kissing-point-road-nsr2-intersection-upgrade-melrose-park", image: "/images/projects/a40-victoria-road-kissing-point-road-nsr2-intersection-upgrade-melrose-park/unnamed%20%281%29.jpg" },
    ],
  },

  // =================================================================
  // 06 — Bruce Highway Upgrade
  // =================================================================
  {
    slug: "bruce-highway-upgrade-caboolture-bribie-island-road-to-steve-irwin-way",
    index: "06",
    title: "Bruce Highway Upgrade - Caboolture-Bribie Island Road to Steve Irwin Way",
    category: "Project & Program Management",
    shortDescription: "Project services for the 11 km Bruce Highway upgrade, widening from four to six lanes and upgrading five creek crossings for flood immunity.",
    heroTitle: "Bruce Highway Upgrade - Caboolture-Bribie Island Road to Steve Irwin Way",
    heroImage: "/images/team/noimage.png",
    stats: [
      { label: "CLIENT", value: "Department of Transport and Main Roads (DTMR)" },
      { label: "VALUE", value: "$662.5 Million" },
      { label: "DURATION", value: "Aug 2019 - Dec 2020" },
      { label: "LOCATION", value: "Caboolture, QLD" },
      { label: "SCOPE", value: "Project services" },
      { label: "STATUS", value: "In Progress" },
    ],
    aboutNumber: "01",
    aboutHeading: "What needed to be solved.",
    aboutDescription: "The Bruce Highway upgrade between Caboolture-Bribie Island Road and Steve Irwin Way, part of the wider Pine River to Caloundra Road program, is funded under the National Partnership Agreement with a $662.5 million commitment to improve capacity, safety and flood immunity.",
    location: "Caboolture, QLD",
    challengeParagraphs: [
      "The Bruce Highway upgrade between Caboolture-Bribie Island Road and Steve Irwin Way, part of the wider Pine River to Caloundra Road program, is funded under the National Partnership Agreement with a $662.5 million commitment to improve capacity, safety and flood immunity.",
      "The 11 km section is being widened from four to six lanes, with five creek crossings upgraded for flood immunity, requiring early works, property demolition and major contracts to be procured ahead of construction.",
      "Project services were provided to the Department of Transport and Main Roads from preliminary design through to contract award and administration.",
    ],
    approachNumber: "02",
    approachHeading: "How We Delivered It",
    approachSteps: [
      { number: "01", title: "Design Review", description: "Review of designs from concept to final, with option analysis using whole-of-life costing." },
      { number: "02", title: "Workshops & Risk", description: "Safety in design, constructability and risk workshops with the design consultants." },
      { number: "03", title: "Contract Documentation", description: "TIC-CO contract documentation prepared for early works and main contracts." },
      { number: "04", title: "Procurement & Administration", description: "Tender reviews and contract administration for early works and the two major contracts." },
    ],
    resultsNumber: "03",
    resultsHeading: "Project Outcomes",
    resultsMetrics: [
      { value: "$662.5M", label: "Funding commitment" },
      { value: "11 km", label: "Highway widened" },
      { value: "5", label: "Creek crossings upgraded" },
      { value: "2", label: "Major contracts procured" },
    ],
    achievements: [
      "Designs reviewed from concept through to final design.",
      "Early works and demolition contracts procured and administered.",
      "Contract documentation prepared for the main contracts.",
      "Tender review completed for the two major infrastructure contracts.",
    ],
    galleryNumber: "04",
    galleryHeading: "Project Photography",
    galleryImages: ["/images/team/noimage.png"],
    relatedNumber: "05",
    relatedHeading: "Related Work",
    relatedProjects: [
      { title: "M4 Smart Motorway Stage 2", slug: "m4-smart-motorway-stage-2", image: "/images/projects/m4-smart-motorway-stage-2/00_M4SM_Hero-1.jpg" },
      { title: "Intersection upgrade at Showground Road and Carrington Road, Castle Hill", slug: "intersection-upgrade-showground-road-carrington-road-castle-hill", image: "/images/projects/intersection-upgrade-showground-road-carrington-road-castle-hill/unnamed%20%281%29.png" },
      { title: "A40 Victoria Rd, Kissing Point Rd & NSR2 Intersection Upgrade, Melrose Park", slug: "a40-victoria-road-kissing-point-road-nsr2-intersection-upgrade-melrose-park", image: "/images/projects/a40-victoria-road-kissing-point-road-nsr2-intersection-upgrade-melrose-park/unnamed%20%281%29.jpg" },
    ],
  },

  // =================================================================
  // 07 — Showground Rd & Carrington Rd Intersection Upgrade
  // =================================================================
  {
    slug: "intersection-upgrade-showground-road-carrington-road-castle-hill",
    index: "07",
    title: "Showground Rd & Carrington Rd Intersection Upgrade",
    category: "Project & Program Management",
    shortDescription: "Project engineering support for the Showground Road intersection upgrades at Castle Hill, improving bus reliability and easing congestion.",
    heroTitle: "Showground Rd & Carrington Rd Intersection Upgrade",
    heroImage: "/images/projects/intersection-upgrade-showground-road-carrington-road-castle-hill/unnamed%20%281%29.png",
    stats: [
      { label: "CLIENT", value: "Transport for NSW" },
      { label: "VALUE", value: "$240 Million" },
      { label: "DURATION", value: "May 2021 - June 2023" },
      { label: "LOCATION", value: "Castle Hill, NSW" },
      { label: "SCOPE", value: "Project engineering support" },
      { label: "STATUS", value: "In Progress" },
    ],
    aboutNumber: "01",
    aboutHeading: "What needed to be solved.",
    aboutDescription: "The Australian and NSW Governments jointly funded upgrades to the Showground Road intersections at Carrington Road and De Clambe Drive, Castle Hill, to improve bus reliability, ease congestion and improve safety and access to Hills Showground Station.",
    location: "Castle Hill, NSW",
    challengeParagraphs: [
      "The Australian and NSW Governments jointly funded upgrades to the Showground Road intersections at Carrington Road and De Clambe Drive, Castle Hill, to improve bus reliability, ease congestion and improve safety and access to Hills Showground Station.",
      "The works included road widening, a new westbound left turn lane, a 2.5 m footpath, utility relocation and stormwater drainage upgrades, delivered by BMD Constructions as part of the Fast Alternative Delivery projects.",
      "Project engineering support was provided to Transport for NSW, managing design and construction for compliance with contract, safety, environment, quality and traffic requirements.",
    ],
    approachNumber: "02",
    approachHeading: "How We Delivered It",
    approachSteps: [
      { number: "01", title: "Design Support", description: "Assisting the project manager through the design phase and tender issue." },
      { number: "02", title: "Plan Review", description: "Review of traffic management plans, road occupancy licences and site management plans." },
      { number: "03", title: "Inspection & Compliance", description: "Periodic site inspections, witness and hold point checks, and ITP sign-off." },
      { number: "04", title: "Reporting & Claims", description: "Progress reports, site meeting minutes, and assessment of progress, variation and EOT claims." },
    ],
    resultsNumber: "03",
    resultsHeading: "Project Outcomes",
    resultsMetrics: [
      { value: "$240M", label: "Government Investment" },
      { value: "2", label: "Intersections Upgraded" },
      { value: "2.5 m", label: "New Concrete Footpath" },
      { value: "11", label: "Fast-track Projects" },
    ],
    achievements: [
      "Two Showground Road intersections upgraded.",
      "Dedicated westbound left turn lane added.",
      "Stormwater drainage capacity improved.",
      "Contractor works monitored for contract and safety compliance.",
    ],
    galleryNumber: "04",
    galleryHeading: "Project Photography",
    galleryImages: [
      "/images/projects/intersection-upgrade-showground-road-carrington-road-castle-hill/unnamed%20%281%29.png",
      "/images/projects/intersection-upgrade-showground-road-carrington-road-castle-hill/unnamed%20%282%29.png",
      "/images/projects/intersection-upgrade-showground-road-carrington-road-castle-hill/unnamed%20%283%29.png",
      "/images/projects/intersection-upgrade-showground-road-carrington-road-castle-hill/unnamed%20%284%29.png",
    ],
    relatedNumber: "05",
    relatedHeading: "Related Work",
    relatedProjects: [
      { title: "M4 Smart Motorway Stage 2", slug: "m4-smart-motorway-stage-2", image: "/images/projects/m4-smart-motorway-stage-2/00_M4SM_Hero-1.jpg" },
      { title: "Bruce Highway Upgrade - Caboolture-Bribie Island Road to Steve Irwin Way", slug: "bruce-highway-upgrade-caboolture-bribie-island-road-to-steve-irwin-way", image: "/images/team/noimage.png" },
      { title: "A40 Victoria Rd, Kissing Point Rd & NSR2 Intersection Upgrade, Melrose Park", slug: "a40-victoria-road-kissing-point-road-nsr2-intersection-upgrade-melrose-park", image: "/images/projects/a40-victoria-road-kissing-point-road-nsr2-intersection-upgrade-melrose-park/unnamed%20%281%29.jpg" },
    ],
  },

  // =================================================================
  // 08 — Victoria Rd & Kissing Point Rd Intersection Upgrade
  // =================================================================
  {
    slug: "a40-victoria-road-kissing-point-road-nsr2-intersection-upgrade-melrose-park",
    index: "08",
    title: "Victoria Rd & Kissing Point Rd Intersection Upgrade",
    category: "Project & Program Management",
    shortDescription: "Contractor management support for a new Left-In/Left-Out intersection on Victoria Road at Melrose Park, part of the redevelopment.",
    heroTitle: "Victoria Rd & Kissing Point Rd Intersection Upgrade",
    heroImage: "/images/projects/a40-victoria-road-kissing-point-road-nsr2-intersection-upgrade-melrose-park/unnamed%20%281%29.jpg",
    stats: [
      { label: "CLIENT", value: "Chrisos Civil Construction" },
      { label: "VALUE", value: "$4,123,301.98" },
      { label: "DURATION", value: "July 2022 - November 2023" },
      { label: "LOCATION", value: "Melrose Park, NSW" },
      { label: "SCOPE", value: "Contractor management support" },
      { label: "STATUS", value: "In Progress" },
    ],
    aboutNumber: "01",
    aboutHeading: "What needed to be solved.",
    aboutDescription: "As part of the Melrose Park redevelopment, a new Left-In/Left-Out intersection on Victoria Road was delivered under a Works Authorisation Deed to provide safer access to the new development and align with the ultimate road network.",
    location: "Melrose Park, NSW",
    challengeParagraphs: [
      "As part of the Melrose Park redevelopment, a new Left-In/Left-Out intersection on Victoria Road was delivered under a Works Authorisation Deed to provide safer access to the new development and align with the ultimate road network.",
      "The works included an approximately 150 m westbound slip lane with road widening, a new council road, a 5.8 m high retaining wall, and watermain and stormwater upgrades, constructed by Chrisos Civil Construction.",
      "Contractor management support was provided to ensure delivery in line with Transport for NSW specifications and quality, safety and environmental requirements.",
    ],
    approachNumber: "02",
    approachHeading: "How We Delivered It",
    approachSteps: [
      { number: "01", title: "Pre-Construction Documentation", description: "Management plans, CEMP and Inspection and Test Plans prepared, with the construction program developed." },
      { number: "02", title: "Inspections & Hold Points", description: "Pre-pour inspections, with hold and witness points raised, documented and signed off." },
      { number: "03", title: "Compliance & Support", description: "Contractor training, review of construction methods, and RFI, NCR and EOT management." },
      { number: "04", title: "Records & Handover", description: "Lot management records, as-built drawings, test results and close-out reports." },
    ],
    resultsNumber: "03",
    resultsHeading: "Project Outcomes",
    resultsMetrics: [
      { value: "150 m", label: "Westbound Slip Lane" },
      { value: "5.8 m", label: "Retaining Wall Height" },
      { value: "3,800 m²", label: "New Council Road" },
      { value: "418 m", label: "Watermain Amplified" },
    ],
    achievements: [
      "New Left-In/Left-Out intersection delivered on Victoria Road.",
      "Slip lane and road widening completed to the ultimate intersection geometry.",
      "Retaining wall, watermain and stormwater upgrades constructed.",
      "Full handover documentation compiled, including as-built drawings and test results.",
    ],
    galleryNumber: "04",
    galleryHeading: "Project Photography",
    galleryImages: [
      "/images/projects/a40-victoria-road-kissing-point-road-nsr2-intersection-upgrade-melrose-park/unnamed%20%281%29.jpg",
      "/images/projects/a40-victoria-road-kissing-point-road-nsr2-intersection-upgrade-melrose-park/unnamed%20%2810%29.jpg",
      "/images/projects/a40-victoria-road-kissing-point-road-nsr2-intersection-upgrade-melrose-park/unnamed%20%2811%29.jpg",
      "/images/projects/a40-victoria-road-kissing-point-road-nsr2-intersection-upgrade-melrose-park/unnamed%20%2812%29.jpg",
      "/images/projects/a40-victoria-road-kissing-point-road-nsr2-intersection-upgrade-melrose-park/unnamed%20%2813%29.jpg",
      "/images/projects/a40-victoria-road-kissing-point-road-nsr2-intersection-upgrade-melrose-park/unnamed%20%2814%29.jpg",
      "/images/projects/a40-victoria-road-kissing-point-road-nsr2-intersection-upgrade-melrose-park/unnamed%20%2815%29.jpg",
      "/images/projects/a40-victoria-road-kissing-point-road-nsr2-intersection-upgrade-melrose-park/unnamed%20%2816%29.jpg",
      "/images/projects/a40-victoria-road-kissing-point-road-nsr2-intersection-upgrade-melrose-park/unnamed%20%282%29.jpg",
      "/images/projects/a40-victoria-road-kissing-point-road-nsr2-intersection-upgrade-melrose-park/unnamed%20%283%29.jpg",
      "/images/projects/a40-victoria-road-kissing-point-road-nsr2-intersection-upgrade-melrose-park/unnamed%20%284%29.jpg",
      "/images/projects/a40-victoria-road-kissing-point-road-nsr2-intersection-upgrade-melrose-park/unnamed%20%285%29.jpg",
      "/images/projects/a40-victoria-road-kissing-point-road-nsr2-intersection-upgrade-melrose-park/unnamed%20%286%29.jpg",
      "/images/projects/a40-victoria-road-kissing-point-road-nsr2-intersection-upgrade-melrose-park/unnamed%20%287%29.jpg",
      "/images/projects/a40-victoria-road-kissing-point-road-nsr2-intersection-upgrade-melrose-park/unnamed%20%288%29.jpg",
      "/images/projects/a40-victoria-road-kissing-point-road-nsr2-intersection-upgrade-melrose-park/unnamed%20%289%29.jpg",
      "/images/projects/a40-victoria-road-kissing-point-road-nsr2-intersection-upgrade-melrose-park/unnamed.jpg",
      "/images/projects/a40-victoria-road-kissing-point-road-nsr2-intersection-upgrade-melrose-park/unnamed.png",
    ],
    relatedNumber: "05",
    relatedHeading: "Related Work",
    relatedProjects: [
      { title: "M4 Smart Motorway Stage 2", slug: "m4-smart-motorway-stage-2", image: "/images/projects/m4-smart-motorway-stage-2/00_M4SM_Hero-1.jpg" },
      { title: "Bruce Highway Upgrade - Caboolture-Bribie Island Road to Steve Irwin Way", slug: "bruce-highway-upgrade-caboolture-bribie-island-road-to-steve-irwin-way", image: "/images/team/noimage.png" },
      { title: "Intersection upgrade at Showground Road and Carrington Road, Castle Hill", slug: "intersection-upgrade-showground-road-carrington-road-castle-hill", image: "/images/projects/intersection-upgrade-showground-road-carrington-road-castle-hill/unnamed%20%281%29.png" },
    ],
  },

  // =================================================================
  // 09 — Mamre Rd & Abbotts Rd Traffic Signal Installation
  // =================================================================
  {
    slug: "mamre-road-abbotts-road-traffic-signal-installation",
    index: "09",
    title: "Mamre Rd & Abbotts Rd Traffic Signal Installation",
    category: "Project Verification & Assurance",
    shortDescription: "Independent design and construction verification for traffic signals and associated road works at five intersections in Kemps Creek.",
    heroTitle: "Mamre Rd & Abbotts Rd Traffic Signal Installation",
    heroImage: "/images/projects/mamre-road-abbotts-road-traffic-signal-installation/unnamed%20%2817%29.jpg",
    stats: [
      { label: "CLIENT", value: "FPI Developments NSW Pty Ltd, Stockland Fife Kemps Creek Pty Ltd, ESR Developments Pty Ltd, AT&L" },
      { label: "VALUE", value: "$35,969,912" },
      { label: "DURATION", value: "November 2024 to Current" },
      { label: "LOCATION", value: "Kemps Creek, NSW" },
      { label: "SCOPE", value: "Project verification (design & construction)" },
      { label: "STATUS", value: "In Progress" },
    ],
    aboutNumber: "01",
    aboutHeading: "What needed to be solved.",
    aboutDescription: "Traffic signals and associated road works were installed at five intersections in Kemps Creek, including Mamre Road and Abbotts Road, to TfNSW accepted drawings and requirements, delivered by Robson Civil under a developer-led arrangement.",
    location: "Kemps Creek, NSW",
    challengeParagraphs: [
      "Traffic signals and associated road works were installed at five intersections in Kemps Creek, including Mamre Road and Abbotts Road, to TfNSW accepted drawings and requirements, delivered by Robson Civil under a developer-led arrangement.",
      "The works included demolition, earthworks, drainage, pavement, concrete works, signage, line marking and traffic control signals, with design and construction both needing to meet TfNSW standards.",
      "Independent project verification was provided for both design and construction, confirming compliance with TfNSW standards, Australian Standards, Austroads guidelines and approvals.",
    ],
    approachNumber: "02",
    approachHeading: "How We Delivered It",
    approachSteps: [
      { number: "01", title: "Project Plan Review", description: "Review of each project plan revision, with Project Plan Certificates issued." },
      { number: "02", title: "Design Verification", description: "Detailed design documentation verified, with road safety audit findings confirmed as closed out." },
      { number: "03", title: "Construction Verification", description: "Hold and witness points reviewed, and works quality and durability independently assessed." },
      { number: "04", title: "Certification & Reporting", description: "Monthly construction certificates, completion and final verification certificates, and monthly progress reports." },
    ],
    resultsNumber: "03",
    resultsHeading: "Project Outcomes",
    resultsMetrics: [
      { value: "5", label: "Signalised Intersections" },
      { value: "5", label: "Verification Certificate Types" },
      { value: "15 Days", label: "Project Plan Review Period" },
      { value: "Monthly", label: "Progress Reports" },
    ],
    achievements: [
      "Design documentation verified against TfNSW standards.",
      "Road safety audit findings certified as closed out.",
      "Construction independently verified against TfNSW QA specifications.",
      "Full certification issued from project plans through to final verification.",
    ],
    galleryNumber: "04",
    galleryHeading: "Project Photography",
    galleryImages: [
      "/images/projects/mamre-road-abbotts-road-traffic-signal-installation/unnamed%20%2817%29.jpg",
      "/images/projects/mamre-road-abbotts-road-traffic-signal-installation/unnamed%20%2818%29.jpg",
      "/images/projects/mamre-road-abbotts-road-traffic-signal-installation/unnamed%20%2819%29.jpg",
      "/images/projects/mamre-road-abbotts-road-traffic-signal-installation/unnamed%20%282%29.png",
      "/images/projects/mamre-road-abbotts-road-traffic-signal-installation/unnamed%20%2820%29.jpg",
      "/images/projects/mamre-road-abbotts-road-traffic-signal-installation/unnamed%20%283%29.png",
      "/images/projects/mamre-road-abbotts-road-traffic-signal-installation/unnamed.jpg",
    ],
    relatedNumber: "05",
    relatedHeading: "Related Work",
    relatedProjects: [
      { title: "877 Richmond Rd, Marsden Park", slug: "richmond-road-service-road-culvert-extension", image: "/images/projects/richmond-road-service-road-culvert-extension/unnamed%20%281%29.jpg" },
      { title: "Tongarra Road and Church Street, Albion Park (Illawarra Highway HW25)", slug: "tongarra-road-church-street-traffic-signal-installation", image: "/images/projects/tongarra-road-church-street-traffic-signal-installation/20260929_115536.jpg" },
      { title: "Walter St & Willoughby Road, Willoughby", slug: "walter-street-road-reconstruction-utility-upgrade", image: "/images/projects/walter-street-road-reconstruction-utility-upgrade/unnamed%20%281%29.jpg" },
    ],
  },

  // =================================================================
  // 10 — Richmond Rd Service Road & Culvert Extension
  // =================================================================
  {
    slug: "richmond-road-service-road-culvert-extension",
    index: "10",
    title: "Richmond Rd Service Road & Culvert Extension",
    category: "Project Verification & Assurance",
    shortDescription: "Independent verification for service road and culvert extension works at 877 Richmond Road, Marsden Park.",
    heroTitle: "Richmond Rd Service Road & Culvert Extension",
    heroImage: "/images/projects/richmond-road-service-road-culvert-extension/unnamed%20%281%29.jpg",
    stats: [
      { label: "CLIENT", value: "McDowell Family Projects Pty Ltd" },
      { label: "VALUE", value: "$1,034,632" },
      { label: "DURATION", value: "June 2025 to Current" },
      { label: "LOCATION", value: "Marsden Park, NSW" },
      { label: "SCOPE", value: "Project verification (design & construction)" },
      { label: "STATUS", value: "In Progress" },
    ],
    aboutNumber: "01",
    aboutHeading: "What needed to be solved.",
    aboutDescription: "Development works at 877 Richmond Road, Marsden Park required an extension of the service road and culvert, with street lighting, stormwater drainage and utility relocation, delivered by J&G Asphalting for developer Isaac Property.",
    location: "Marsden Park, NSW",
    challengeParagraphs: [
      "Development works at 877 Richmond Road, Marsden Park required an extension of the service road and culvert, with street lighting, stormwater drainage and utility relocation, delivered by J&G Asphalting for developer Isaac Property.",
      "The works needed to meet Transport for NSW requirements, including reinstating any affected TfNSW assets, dedicating land as public road, and creating a culvert easement in favour of Blacktown City Council.",
      "Independent project verification was provided for both design and construction, confirming compliance with TfNSW standards, Australian Standards, Austroads guidelines and approvals.",
    ],
    approachNumber: "02",
    approachHeading: "How We Delivered It",
    approachSteps: [
      { number: "01", title: "Project Plan Review", description: "Review of each project plan revision, with Project Plan Certificates issued." },
      { number: "02", title: "Design Verification", description: "Detailed design documentation verified, with road safety audit findings confirmed as closed out." },
      { number: "03", title: "Construction Verification", description: "Hold and witness points reviewed, and works quality and durability independently assessed." },
      { number: "04", title: "Certification & Reporting", description: "Monthly construction certificates, completion and final verification certificates, and monthly progress reports." },
    ],
    resultsNumber: "03",
    resultsHeading: "Project Outcomes",
    resultsMetrics: [
      { value: "5", label: "Verification Certificate Types" },
      { value: "15 Days", label: "Project Plan Review Period" },
      { value: "2", label: "Driveway Laybacks Replaced" },
      { value: "100%", label: "Detailed Design Issue Reviewed" },
    ],
    achievements: [
      "Design documentation verified against TfNSW standards.",
      "Road safety audit findings certified as closed out.",
      "Construction independently verified against TfNSW QA specifications.",
      "Certification provided from project plans through to final verification.",
    ],
    galleryNumber: "04",
    galleryHeading: "Project Photography",
    galleryImages: [
      "/images/projects/richmond-road-service-road-culvert-extension/unnamed%20%281%29.jpg",
      "/images/projects/richmond-road-service-road-culvert-extension/unnamed%20%282%29.jpg",
      "/images/projects/richmond-road-service-road-culvert-extension/unnamed%20%283%29.jpg",
      "/images/projects/richmond-road-service-road-culvert-extension/unnamed%20%284%29.jpg",
      "/images/projects/richmond-road-service-road-culvert-extension/unnamed%20%285%29.jpg",
      "/images/projects/richmond-road-service-road-culvert-extension/unnamed%20%286%29.jpg",
      "/images/projects/richmond-road-service-road-culvert-extension/unnamed.jpg",
      "/images/projects/richmond-road-service-road-culvert-extension/unnamed.png",
    ],
    relatedNumber: "05",
    relatedHeading: "Related Work",
    relatedProjects: [
      { title: "MR536 Mamre Road & Abbotts Rd, Kemps Creek", slug: "mamre-road-abbotts-road-traffic-signal-installation", image: "/images/projects/mamre-road-abbotts-road-traffic-signal-installation/unnamed%20%2817%29.jpg" },
      { title: "Tongarra Road and Church Street, Albion Park (Illawarra Highway HW25)", slug: "tongarra-road-church-street-traffic-signal-installation", image: "/images/projects/tongarra-road-church-street-traffic-signal-installation/20260929_115536.jpg" },
      { title: "Walter St & Willoughby Road, Willoughby", slug: "walter-street-road-reconstruction-utility-upgrade", image: "/images/projects/walter-street-road-reconstruction-utility-upgrade/unnamed%20%281%29.jpg" },
    ],
  },

  // =================================================================
  // 11 — Tongarra Rd & Church St Traffic Signal Installation
  // =================================================================
  {
    slug: "tongarra-road-church-street-traffic-signal-installation",
    index: "11",
    title: "Tongarra Rd & Church St Traffic Signal Installation",
    category: "Project Verification & Assurance",
    shortDescription: "Independent verification for new traffic signals on the Illawarra Highway at Church Street and Tongarra Road, Albion Park.",
    heroTitle: "Tongarra Rd & Church St Traffic Signal Installation",
    heroImage: "/images/projects/tongarra-road-church-street-traffic-signal-installation/20260929_115536.jpg",
    stats: [
      { label: "CLIENT", value: "Balmoral Parade Pty Ltd" },
      { label: "VALUE", value: "$1,374,642" },
      { label: "DURATION", value: "April 2025 to Current" },
      { label: "LOCATION", value: "Albion Park, NSW" },
      { label: "SCOPE", value: "Project verification (design & construction)" },
      { label: "STATUS", value: "In Progress" },
    ],
    aboutNumber: "01",
    aboutHeading: "What needed to be solved.",
    aboutDescription: "New traffic signals were installed on the Illawarra Highway at Church Street and Tongarra Road, Albion Park, under development consent 741/2002, delivered by Devcon for Balmoral Parade Pty Ltd.",
    location: "Albion Park, NSW",
    challengeParagraphs: [
      "New traffic signals were installed on the Illawarra Highway at Church Street and Tongarra Road, Albion Park, under development consent 741/2002, delivered by Devcon for Balmoral Parade Pty Ltd.",
      "The signalised intersection included pavement works, drainage, lighting, signage, line marking, landscaping and service relocations, all designed and constructed to TfNSW requirements on a state highway.",
      "Independent project verification covered both design and construction, confirming compliance with TfNSW standards, Australian Standards, Austroads guidelines and planning approvals.",
    ],
    approachNumber: "02",
    approachHeading: "How We Delivered It",
    approachSteps: [
      { number: "01", title: "Project Plan Review", description: "Each project plan revision reviewed, with Project Plan Certificates issued." },
      { number: "02", title: "Design Verification", description: "Detailed design documents verified and road safety audit findings confirmed as closed out." },
      { number: "03", title: "Construction Verification", description: "Hold and witness points reviewed, with works quality and durability independently assessed." },
      { number: "04", title: "Certification & Reporting", description: "Monthly and completion certificates, final verification, and monthly progress reports." },
    ],
    resultsNumber: "03",
    resultsHeading: "Project Outcomes",
    resultsMetrics: [
      { value: "1", label: "New Signalised Intersection" },
      { value: "5", label: "Verification Certificate Types" },
      { value: "15 Days", label: "Project Plan Review Period" },
      { value: "Monthly", label: "Progress Reports" },
    ],
    achievements: [
      "New signalised intersection verified on a state highway.",
      "Design documentation verified against TfNSW standards.",
      "Road safety audit findings certified as closed out.",
      "Construction independently verified against TfNSW QA specifications.",
    ],
    galleryNumber: "04",
    galleryHeading: "Project Photography",
    galleryImages: [
      "/images/projects/tongarra-road-church-street-traffic-signal-installation/20260929_115536.jpg",
      "/images/projects/tongarra-road-church-street-traffic-signal-installation/20260929_120151.jpg",
      "/images/projects/tongarra-road-church-street-traffic-signal-installation/IMG-20260929-WA0006.jpg",
      "/images/projects/tongarra-road-church-street-traffic-signal-installation/unnamed%20%281%29.jpg",
      "/images/projects/tongarra-road-church-street-traffic-signal-installation/unnamed%20%282%29.jpg",
      "/images/projects/tongarra-road-church-street-traffic-signal-installation/unnamed.jpg",
      "/images/projects/tongarra-road-church-street-traffic-signal-installation/unnamed.png",
    ],
    relatedNumber: "05",
    relatedHeading: "Related Work",
    relatedProjects: [
      { title: "MR536 Mamre Road & Abbotts Rd, Kemps Creek", slug: "mamre-road-abbotts-road-traffic-signal-installation", image: "/images/projects/mamre-road-abbotts-road-traffic-signal-installation/unnamed%20%2817%29.jpg" },
      { title: "877 Richmond Rd, Marsden Park", slug: "richmond-road-service-road-culvert-extension", image: "/images/projects/richmond-road-service-road-culvert-extension/unnamed%20%281%29.jpg" },
      { title: "Walter St & Willoughby Road, Willoughby", slug: "walter-street-road-reconstruction-utility-upgrade", image: "/images/projects/walter-street-road-reconstruction-utility-upgrade/unnamed%20%281%29.jpg" },
    ],
  },

  // =================================================================
  // 12 — Walter St Road Reconstruction & Utility Upgrade
  // =================================================================
  {
    slug: "walter-street-road-reconstruction-utility-upgrade",
    index: "12",
    title: "Walter St Road Reconstruction & Utility Upgrade",
    category: "Project Verification & Assurance",
    shortDescription: "Contractor management support for public domain works at Walter Street, Willoughby, supporting a 164-unit residential development.",
    heroTitle: "Walter St Road Reconstruction & Utility Upgrade",
    heroImage: "/images/projects/walter-street-road-reconstruction-utility-upgrade/unnamed%20%281%29.jpg",
    stats: [
      { label: "CLIENT", value: "Chrisos Civil Construction" },
      { label: "VALUE", value: "$417,561" },
      { label: "DURATION", value: "November 2024 - February 2026" },
      { label: "LOCATION", value: "Willoughby, NSW" },
      { label: "SCOPE", value: "Contractor management support" },
      { label: "STATUS", value: "In Progress" },
    ],
    aboutNumber: "01",
    aboutHeading: "What needed to be solved.",
    aboutDescription: "Public domain works at Walter Street, Willoughby, supported an approved residential development of five buildings and 164 units, including the upgrade and relocation of utility services and the reconstruction of the road.",
    location: "Willoughby, NSW",
    challengeParagraphs: [
      "Public domain works at Walter Street, Willoughby, supported an approved residential development of five buildings and 164 units, including the upgrade and relocation of utility services and the reconstruction of the road.",
      "The works were staged, starting with telecommunications, substation, gas and water main upgrades, followed by kerb and gutter, concrete pavement replacement, asphalting and line marking.",
      "Contractor management support was provided to Chrisos Civil Construction to deliver the works in line with Transport for NSW specifications and quality, safety and environmental requirements.",
    ],
    approachNumber: "02",
    approachHeading: "How We Delivered It",
    approachSteps: [
      { number: "01", title: "Pre-Construction Documentation", description: "Management plans, CEMP, community notification and Inspection and Test Plans prepared, with the construction program developed." },
      { number: "02", title: "Dilapidation & Planning", description: "Dilapidation reports completed to record the condition of existing structures and properties." },
      { number: "03", title: "Hold Points & Compliance", description: "Hold and witness points raised and signed off, with construction methods reviewed and RFIs and NCRs managed." },
      { number: "04", title: "Records & Handover", description: "Lot management records, as-built drawings, test results and close-out reports compiled." },
    ],
    resultsNumber: "03",
    resultsHeading: "Project Outcomes",
    resultsMetrics: [
      { value: "164", label: "Residential Units Enabled" },
      { value: "5", label: "Residential Buildings" },
      { value: "11", label: "Construction Stages" },
      { value: "4", label: "Utility Services Upgraded" },
    ],
    achievements: [
      "Utility services relocated and upgraded for a 164-unit development.",
      "Walter Street kerb, pavement and line marking works completed.",
      "Hold points, ITPs and lot records managed for QA compliance.",
      "Full handover documentation compiled, including as-built drawings and test results.",
    ],
    galleryNumber: "04",
    galleryHeading: "Project Photography",
    galleryImages: [
      "/images/projects/walter-street-road-reconstruction-utility-upgrade/unnamed%20%281%29.jpg",
      "/images/projects/walter-street-road-reconstruction-utility-upgrade/unnamed%20%282%29.jpg",
      "/images/projects/walter-street-road-reconstruction-utility-upgrade/unnamed%20%283%29.jpg",
      "/images/projects/walter-street-road-reconstruction-utility-upgrade/unnamed%20%284%29.jpg",
      "/images/projects/walter-street-road-reconstruction-utility-upgrade/unnamed%20%285%29.jpg",
      "/images/projects/walter-street-road-reconstruction-utility-upgrade/unnamed%20%286%29.jpg",
      "/images/projects/walter-street-road-reconstruction-utility-upgrade/unnamed%20%287%29.jpg",
      "/images/projects/walter-street-road-reconstruction-utility-upgrade/unnamed%20%288%29.jpg",
      "/images/projects/walter-street-road-reconstruction-utility-upgrade/unnamed%20%289%29.jpg",
      "/images/projects/walter-street-road-reconstruction-utility-upgrade/unnamed.jpg",
      "/images/projects/walter-street-road-reconstruction-utility-upgrade/unnamed.png",
    ],
    relatedNumber: "05",
    relatedHeading: "Related Work",
    relatedProjects: [
      { title: "MR536 Mamre Road & Abbotts Rd, Kemps Creek", slug: "mamre-road-abbotts-road-traffic-signal-installation", image: "/images/projects/mamre-road-abbotts-road-traffic-signal-installation/unnamed%20%2817%29.jpg" },
      { title: "877 Richmond Rd, Marsden Park", slug: "richmond-road-service-road-culvert-extension", image: "/images/projects/richmond-road-service-road-culvert-extension/unnamed%20%281%29.jpg" },
      { title: "Tongarra Road and Church Street, Albion Park (Illawarra Highway HW25)", slug: "tongarra-road-church-street-traffic-signal-installation", image: "/images/projects/tongarra-road-church-street-traffic-signal-installation/20260929_115536.jpg" },
    ],
  },

  // =================================================================
  // 13 — Bridge Portfolio Management (RMS SMC)
  // =================================================================
  {
    slug: "bridge-portfolio-management-rms-stewardship-maintenance-contract",
    index: "13",
    title: "Bridge Portfolio Management – RMS Stewardship Maintenance Contract",
    category: "Asset Management & Inspection",
    shortDescription: "Bridge portfolio management services under the Stewardship Maintenance Contract, covering Sydney's North and West Zones.",
    heroTitle: "Bridge Portfolio Management – RMS Stewardship Maintenance Contract",
    heroImage: "/images/projects/bridge-portfolio-management-rms-stewardship-maintenance-contract/unnamed%20%281%29.png",
    stats: [
      { label: "CLIENT", value: "DM Roads" },
      { label: "VALUE", value: "$50 Million" },
      { label: "DURATION", value: "Dec 2016 - July 2018" },
      { label: "LOCATION", value: "Western and Northern Region, NSW" },
      { label: "SCOPE", value: "Bridge Portfolio Management Services" },
      { label: "STATUS", value: "In Progress" },
    ],
    aboutNumber: "01",
    aboutHeading: "What needed to be solved.",
    aboutDescription: "The Stewardship Maintenance Contract (SMC) was an outsourced model for maintaining Sydney's roads and bridges, using stewardship principles and performance-based metrics to focus on long-term asset condition, durability and customer experience.",
    location: "Western and Northern Region, NSW",
    challengeParagraphs: [
      "The Stewardship Maintenance Contract (SMC) was an outsourced model for maintaining Sydney's roads and bridges, using stewardship principles and performance-based metrics to focus on long-term asset condition, durability and customer experience.",
      "The contract covered the rebuilding, rehabilitation, strengthening and repainting of bridges, as well as the operation of bridge, tunnel and ferry assets across the North and West Zones of the Sydney Region.",
      "Bridge portfolio management services were provided to DM Roads, covering project and portfolio budgets, design management, procurement support and delivery oversight.",
    ],
    approachNumber: "02",
    approachHeading: "How We Delivered It",
    approachSteps: [
      { number: "01", title: "Briefs & Budgets", description: "Briefs developed for consultants and contractors, with project and portfolio budgets prepared." },
      { number: "02", title: "Design Management", description: "Concept and detailed designs and contract documentation managed for bridge rehabilitation projects." },
      { number: "03", title: "Procurement Support", description: "Tender packages prepared, with technical queries answered and tenders assessed." },
      { number: "04", title: "Delivery & Reporting", description: "Construction oversight, funding and variation management, and monthly forecast reports." },
    ],
    resultsNumber: "03",
    resultsHeading: "Project Outcomes",
    resultsMetrics: [
      { value: "2", label: "Sydney Zones Managed" },
      { value: "4", label: "Bridge Works Types" },
      { value: "3", label: "Operational Asset Types" },
      { value: "Monthly", label: "Forecast Reports" },
    ],
    achievements: [
      "Bridge portfolio managed across the North and West Zones.",
      "Rehabilitation designs and contract documentation overseen.",
      "Tender packages prepared and tender assessments supported.",
      "Construction delivery overseen, with client funding and variations managed.",
    ],
    galleryNumber: "04",
    galleryHeading: "Project Photography",
    galleryImages: [
      "/images/projects/bridge-portfolio-management-rms-stewardship-maintenance-contract/unnamed%20%281%29.png",
      "/images/projects/bridge-portfolio-management-rms-stewardship-maintenance-contract/unnamed%20%282%29.png",
      "/images/projects/bridge-portfolio-management-rms-stewardship-maintenance-contract/unnamed%20%283%29.png",
      "/images/projects/bridge-portfolio-management-rms-stewardship-maintenance-contract/unnamed%20%284%29.png",
      "/images/projects/bridge-portfolio-management-rms-stewardship-maintenance-contract/unnamed%20%285%29.png",
      "/images/projects/bridge-portfolio-management-rms-stewardship-maintenance-contract/unnamed%20%286%29.png",
      "/images/projects/bridge-portfolio-management-rms-stewardship-maintenance-contract/unnamed%20%287%29.png",
      "/images/projects/bridge-portfolio-management-rms-stewardship-maintenance-contract/unnamed%20%288%29.png",
      "/images/projects/bridge-portfolio-management-rms-stewardship-maintenance-contract/unnamed%20%289%29.png",
      "/images/projects/bridge-portfolio-management-rms-stewardship-maintenance-contract/unnamed.png",
    ],
    relatedNumber: "05",
    relatedHeading: "Related Work",
    relatedProjects: [
      { title: "Investigation, Condition Assessment and Renewal Works Program - Liverpool Council Bridges", slug: "investigation-condition-assessment-renewal-works-program-liverpool-council-bridges", image: "/images/projects/investigation-condition-assessment-renewal-works-program-liverpool-council-bridges/unnamed%20%281%29.jpg" },
      { title: "Rickabys Bridge Temporary Creek Crossing", slug: "rickabys-bridge-temporary-creek-crossing", image: "/images/projects/rickabys-bridge-temporary-creek-crossing/DJI_20260803102432_0105_D.webp" },
      { title: "Wyong Creek Bridge Structural Assessment", slug: "wyong-creek-bridge-structural-assessment", image: "/images/projects/wyong-creek-bridge-structural-assessment/12.%20Footbridge%20Kurrajong.webp" },
    ],
  },

  // =================================================================
  // 14 — Investigation, Condition Assessment & Renewal Works (Liverpool Bridges)
  // =================================================================
  {
    slug: "investigation-condition-assessment-renewal-works-program-liverpool-council-bridges",
    index: "14",
    title: "Investigation, Condition Assessment and Renewal Works Program - Liverpool Council Bridges",
    category: "Asset Management & Inspection",
    shortDescription: "Level 3 bridge inspections and structural assessment for three Liverpool Council bridges: Fifteenth Avenue, Spencer Road and Eighth Avenue.",
    heroTitle: "Investigation, Condition Assessment and Renewal Works Program - Liverpool Council Bridges",
    heroImage: "/images/projects/investigation-condition-assessment-renewal-works-program-liverpool-council-bridges/unnamed%20%281%29.jpg",
    stats: [
      { label: "CLIENT", value: "Liverpool City Council" },
      { label: "DURATION", value: "June 2025 - December 2025" },
      { label: "LOCATION", value: "Liverpool, NSW" },
      { label: "SCOPE", value: "Bridge Inspection" },
      { label: "STATUS", value: "In Progress" },
    ],
    aboutNumber: "01",
    aboutHeading: "What needed to be solved.",
    aboutDescription: "Liverpool City Council is investigating the condition of three bridges, Fifteenth Avenue Road Bridge, Spencer Road Footbridge and Eighth Avenue Road Bridge, after earlier visual inspections found cracking, timber decay and missing components.",
    location: "Liverpool, NSW",
    challengeParagraphs: [
      "Liverpool City Council is investigating the condition of three bridges, Fifteenth Avenue Road Bridge, Spencer Road Footbridge and Eighth Avenue Road Bridge, after earlier visual inspections found cracking, timber decay and missing components.",
      "A detailed engineering assessment was needed to confirm the severity of defects, check structural adequacy and identify suitable repair or rehabilitation options.",
      "Level 3 bridge inspections were provided to Council, covering testing, load capacity assessment, deterioration forecasting, repair recommendations and cost estimates.",
    ],
    approachNumber: "02",
    approachHeading: "How We Delivered It",
    approachSteps: [
      { number: "01", title: "Detailed Inspection", description: "On-site inspection of all bridge components, with cracking, joints, spalling and exposed reinforcement measured." },
      { number: "02", title: "Testing & Analysis", description: "Concrete, timber and reinforcement testing, including termite and ant damage assessment where applicable." },
      { number: "03", title: "Structural Assessment", description: "Load-carrying capacity analysis to the Austroads Bridge Design Code, with future deterioration projected." },
      { number: "04", title: "Recommendations & Reporting", description: "Repair, rehabilitation or replacement options with cost estimates, compiled into a formal engineering report." },
    ],
    resultsNumber: "03",
    resultsHeading: "Project Outcomes",
    resultsMetrics: [
      { value: "3", label: "Bridges Inspected" },
      { value: "Level 3", label: "Inspection Detail" },
      { value: "6", label: "Element Types Rated" },
      { value: "3", label: "Suburbs Covered" },
    ],
    achievements: [
      "Three bridges inspected and structurally assessed.",
      "Defects, deterioration modes and areas of distress identified.",
      "Repair and rehabilitation options recommended, with cost estimates.",
      "Findings compiled into a formal report with photographs, sketches and test results.",
    ],
    galleryNumber: "04",
    galleryHeading: "Project Photography",
    galleryImages: [
      "/images/projects/investigation-condition-assessment-renewal-works-program-liverpool-council-bridges/unnamed%20%281%29.jpg",
      "/images/projects/investigation-condition-assessment-renewal-works-program-liverpool-council-bridges/unnamed%20%282%29.jpg",
      "/images/projects/investigation-condition-assessment-renewal-works-program-liverpool-council-bridges/unnamed%20%283%29.jpg",
      "/images/projects/investigation-condition-assessment-renewal-works-program-liverpool-council-bridges/unnamed%20%284%29.jpg",
      "/images/projects/investigation-condition-assessment-renewal-works-program-liverpool-council-bridges/unnamed%20%285%29.jpg",
      "/images/projects/investigation-condition-assessment-renewal-works-program-liverpool-council-bridges/unnamed%20%286%29.jpg",
      "/images/projects/investigation-condition-assessment-renewal-works-program-liverpool-council-bridges/unnamed%20%287%29.jpg",
      "/images/projects/investigation-condition-assessment-renewal-works-program-liverpool-council-bridges/unnamed%20%288%29.jpg",
      "/images/projects/investigation-condition-assessment-renewal-works-program-liverpool-council-bridges/unnamed%20%289%29.jpg",
      "/images/projects/investigation-condition-assessment-renewal-works-program-liverpool-council-bridges/unnamed.jpg",
      "/images/projects/investigation-condition-assessment-renewal-works-program-liverpool-council-bridges/unnamed.png",
    ],
    relatedNumber: "05",
    relatedHeading: "Related Work",
    relatedProjects: [
      { title: "RMS Stewardship Maintenance Contract Bridge Portfolio Management", slug: "bridge-portfolio-management-rms-stewardship-maintenance-contract", image: "/images/projects/bridge-portfolio-management-rms-stewardship-maintenance-contract/unnamed%20%281%29.png" },
      { title: "Rickabys Bridge Temporary Creek Crossing", slug: "rickabys-bridge-temporary-creek-crossing", image: "/images/projects/rickabys-bridge-temporary-creek-crossing/DJI_20260803102432_0105_D.webp" },
      { title: "Wyong Creek Bridge Structural Assessment", slug: "wyong-creek-bridge-structural-assessment", image: "/images/projects/wyong-creek-bridge-structural-assessment/12.%20Footbridge%20Kurrajong.webp" },
    ],
  },

  // =================================================================
  // 15 — Rickabys Bridge Temporary Creek Crossing
  // =================================================================
  {
    slug: "rickabys-bridge-temporary-creek-crossing",
    index: "15",
    title: "Rickabys Bridge Temporary Creek Crossing",
    category: "Asset Management & Inspection",
    shortDescription: "Condition assessment and temporary creek crossing design to support construction access beneath the Bells Line of Road bridge.",
    heroTitle: "Rickabys Bridge Temporary Creek Crossing",
    heroImage: "/images/projects/rickabys-bridge-temporary-creek-crossing/DJI_20260803102432_0105_D.webp",
    stats: [
      { label: "CLIENT", value: "BMD" },
      { label: "DURATION", value: "May 2026 - Current" },
      { label: "LOCATION", value: "North Richmond, NSW" },
      { label: "SCOPE", value: "Condition assessment" },
      { label: "STATUS", value: "In Progress" },
    ],
    aboutNumber: "01",
    aboutHeading: "What needed to be solved.",
    aboutDescription: "Temporary access was required within a live creek corridor beneath the Bells Line of Road bridge at North Richmond, including culvert placement and rock fill close to the bridge piers.",
    location: "North Richmond, NSW",
    challengeParagraphs: [
      "Temporary access was required within a live creek corridor beneath the Bells Line of Road bridge at North Richmond, including culvert placement and rock fill close to the bridge piers.",
      "The works needed a practical, risk-informed engineering approach to support safe construction while protecting the integrity of the existing bridge structure.",
      "Condition assessment, temporary creek crossing design and construction control measures were provided to BMD to support safe delivery of the works.",
    ],
    approachNumber: "02",
    approachHeading: "How We Delivered It",
    approachSteps: [
      { number: "01", title: "Condition Assessment", description: "Level 2 visual inspection of the bridge piers, recording cracking, spalling, deterioration and any visible movement." },
      { number: "02", title: "Crossing Design", description: "Concept to preliminary design of the temporary crossing, including culvert layout and rock fill platform." },
      { number: "03", title: "Control Measures", description: "Offset distances, exclusion zones, plant movement limits and rock fill placement controls." },
      { number: "04", title: "Monitoring & Reporting", description: "Monitoring recommendations with trigger levels and response actions, then QA review and final report." },
    ],
    resultsNumber: "03",
    resultsHeading: "Project Outcomes",
    resultsMetrics: [
      { value: "Level 2", label: "Bridge Condition Assessment" },
      { value: "4", label: "Crossing Design Elements" },
      { value: "4", label: "Construction Control Measures" },
      { value: "2", label: "Monitoring Types Recommended" },
    ],
    achievements: [
      "Bridge piers inspected and condition documented.",
      "Temporary creek crossing developed to support construction access.",
      "Control measures defined to protect the bridge piers.",
      "Vibration and movement monitoring recommended, with trigger levels and responses.",
    ],
    galleryNumber: "04",
    galleryHeading: "Project Photography",
    galleryImages: [
      "/images/projects/rickabys-bridge-temporary-creek-crossing/DJI_20260803102432_0105_D.webp",
      "/images/projects/rickabys-bridge-temporary-creek-crossing/DJI_20260803130810_0136_D.webp",
      "/images/projects/rickabys-bridge-temporary-creek-crossing/DJI_20260803131344_0154_D.webp",
      "/images/projects/rickabys-bridge-temporary-creek-crossing/IMG_6714.webp",
      "/images/projects/rickabys-bridge-temporary-creek-crossing/IMG_6724.webp",
      "/images/projects/rickabys-bridge-temporary-creek-crossing/IMG_6922.webp",
      "/images/projects/rickabys-bridge-temporary-creek-crossing/IMG_6941.webp",
      "/images/projects/rickabys-bridge-temporary-creek-crossing/IMG_6963.webp",
    ],
    relatedNumber: "05",
    relatedHeading: "Related Work",
    relatedProjects: [
      { title: "RMS Stewardship Maintenance Contract Bridge Portfolio Management", slug: "bridge-portfolio-management-rms-stewardship-maintenance-contract", image: "/images/projects/bridge-portfolio-management-rms-stewardship-maintenance-contract/unnamed%20%281%29.png" },
      { title: "Investigation, Condition Assessment and Renewal Works Program - Liverpool Council Bridges", slug: "investigation-condition-assessment-renewal-works-program-liverpool-council-bridges", image: "/images/projects/investigation-condition-assessment-renewal-works-program-liverpool-council-bridges/unnamed%20%281%29.jpg" },
      { title: "Wyong Creek Bridge Structural Assessment", slug: "wyong-creek-bridge-structural-assessment", image: "/images/projects/wyong-creek-bridge-structural-assessment/12.%20Footbridge%20Kurrajong.webp" },
    ],
  },

  // =================================================================
  // 16 — Wyong Creek Bridge Structural Assessment
  // =================================================================
  {
    slug: "wyong-creek-bridge-structural-assessment",
    index: "16",
    title: "Wyong Creek Bridge Structural Assessment",
    category: "Asset Management & Inspection",
    shortDescription: "Structural condition assessment and load capacity verification of a private steel truss bridge carrying 23-tonne emergency and fire vehicles.",
    heroTitle: "Wyong Creek Bridge Structural Assessment",
    heroImage: "/images/projects/wyong-creek-bridge-structural-assessment/12.%20Footbridge%20Kurrajong.webp",
    stats: [
      { label: "CLIENT", value: "Metric Engineering" },
      { label: "DURATION", value: "May 2026 - Current" },
      { label: "LOCATION", value: "Wyong Creek, NSW" },
      { label: "SCOPE", value: "Structural condition assessment and load capacity verification" },
      { label: "STATUS", value: "In Progress" },
    ],
    aboutNumber: "01",
    aboutHeading: "What needed to be solved.",
    aboutDescription: "Wyong Creek Bridge is a private steel truss bridge with a timber deck, providing the sole vehicular access to a rural property in Wyong Creek and required to carry emergency and fire vehicles.",
    location: "Wyong Creek, NSW",
    challengeParagraphs: [
      "Wyong Creek Bridge is a private steel truss bridge with a timber deck, providing the sole vehicular access to a rural property in Wyong Creek and required to carry emergency and fire vehicles.",
      "With no design information available and visible deterioration of several structural elements, its condition and load capacity needed to be verified for continued service and bushfire access compliance.",
      "A structural condition assessment and load capacity verification was provided to Metric Engineering to confirm suitability for 23-tonne emergency and fire vehicles.",
    ],
    approachNumber: "02",
    approachHeading: "How We Delivered It",
    approachSteps: [
      { number: "01", title: "Site Inspection", description: "Visual condition assessment of the steel truss, timber deck, supporting elements and foundations." },
      { number: "02", title: "Measurement & Defects", description: "Key dimensions measured where documentation was unavailable, with corrosion, timber degradation and foundation conditions reviewed." },
      { number: "03", title: "Structural Analysis", description: "Load capacity verified for 23-tonne vehicles, with flood, scour and bushfire impacts considered." },
      { number: "04", title: "Findings & Reporting", description: "Risks, capacity limitations and compliance evaluated, with a report on suitability for emergency access." },
    ],
    resultsNumber: "03",
    resultsHeading: "Project Outcomes",
    resultsMetrics: [
      { value: "23 t", label: "Emergency Vehicle Load Verified" },
      { value: "1", label: "Sole Access Bridge Assessed" },
      { value: "3", label: "Main Bridge Elements Assessed" },
      { value: "1", label: "Structural Assessment Report" },
    ],
    achievements: [
      "Load capacity verified for 23-tonne emergency and fire vehicles.",
      "Bridge condition and defects assessed without original design information.",
      "Structural risks and capacity reduction factors identified.",
      "Report issued on suitability for continued service and bushfire access.",
    ],
    galleryNumber: "04",
    galleryHeading: "Project Photography",
    galleryImages: [
      "/images/projects/wyong-creek-bridge-structural-assessment/12.%20Footbridge%20Kurrajong.webp",
      "/images/projects/wyong-creek-bridge-structural-assessment/14.%20Footbridge%20Kurrajong.webp",
      "/images/projects/wyong-creek-bridge-structural-assessment/15.%20Footbridge%20Kurrajong.webp",
      "/images/projects/wyong-creek-bridge-structural-assessment/16.%20Right%20Fence.webp",
      "/images/projects/wyong-creek-bridge-structural-assessment/18.%20Right%20Cable.webp",
      "/images/projects/wyong-creek-bridge-structural-assessment/2.%20Pedestrian%20Bridge.webp",
      "/images/projects/wyong-creek-bridge-structural-assessment/22.%20Middle%20Tower.webp",
      "/images/projects/wyong-creek-bridge-structural-assessment/27.%20Left%20Fence.webp",
      "/images/projects/wyong-creek-bridge-structural-assessment/30.%20Footpath.webp",
      "/images/projects/wyong-creek-bridge-structural-assessment/5.%20Deck.webp",
    ],
    relatedNumber: "05",
    relatedHeading: "Related Work",
    relatedProjects: [
      { title: "RMS Stewardship Maintenance Contract Bridge Portfolio Management", slug: "bridge-portfolio-management-rms-stewardship-maintenance-contract", image: "/images/projects/bridge-portfolio-management-rms-stewardship-maintenance-contract/unnamed%20%281%29.png" },
      { title: "Rickabys Bridge Temporary Creek Crossing", slug: "rickabys-bridge-temporary-creek-crossing", image: "/images/projects/rickabys-bridge-temporary-creek-crossing/DJI_20260803102432_0105_D.webp" },
      { title: "Investigation, Condition Assessment and Renewal Works Program - Liverpool Council Bridges", slug: "investigation-condition-assessment-renewal-works-program-liverpool-council-bridges", image: "/images/projects/investigation-condition-assessment-renewal-works-program-liverpool-council-bridges/unnamed%20%281%29.jpg" },
    ],
  },

  // =================================================================
  // 17 — Bexley Child Care Centre
  // =================================================================
  {
    slug: "bexley-child-care-centre",
    index: "17",
    title: "Bexley Child Care Centre",
    category: "Buildings & Property Engineering",
    shortDescription: "Civil and structural engineering services for a two-storey childcare centre in Bexley with underground carpark.",
    heroTitle: "Bexley Child Care Centre",
    heroImage: "/images/projects/bexley-child-care-centre/12.webp",
    stats: [
      { label: "CLIENT", value: "Mammoth Projects" },
      { label: "VALUE", value: "$500,000" },
      { label: "DURATION", value: "Aug 2018 - Jun 2020" },
      { label: "LOCATION", value: "Bexley, NSW" },
      { label: "SCOPE", value: "Engineering consultancy services" },
      { label: "STATUS", value: "In Progress" },
    ],
    aboutNumber: "01",
    aboutHeading: "What needed to be solved.",
    aboutDescription: "A modern two-storey childcare centre with an underground carpark was developed in Bexley for Charter Hall by Mammoth Projects, designed by Armada Architects to accommodate up to 92 children across 2,200 sqm.",
    location: "Bexley, NSW",
    challengeParagraphs: [
      "A modern two-storey childcare centre with an underground carpark was developed in Bexley for Charter Hall by Mammoth Projects, designed by Armada Architects to accommodate up to 92 children across 2,200 sqm.",
      "The building uses concrete slabs, AFS walls and lightweight steel framing, with large glazed windows and landscaped play areas on both the ground and first floors.",
      "Civil and structural engineering services were provided to Mammoth Projects, from design development through to construction phase support.",
    ],
    approachNumber: "02",
    approachHeading: "How We Delivered It",
    approachSteps: [
      { number: "01", title: "Design Development", description: "Review of the most economical constructible solution, with structural criteria and a coordinated 60% drawing set." },
      { number: "02", title: "Tender Documentation", description: "Design drawings for Council approval and tender, with quantities, cost estimates and design certification." },
      { number: "03", title: "Civil & Structural Design", description: "Footings, slabs, columns, walls, roof and beams, stairs, lift shafts, retaining walls and site stormwater." },
    ],
    resultsNumber: "03",
    resultsHeading: "Project Outcomes",
    resultsMetrics: [
      { value: "2,200 m²", label: "Building Floor Area" },
      { value: "92", label: "Child Capacity" },
      { value: "2", label: "Storeys + Underground Carpark" },
      { value: "3", label: "Design Service Stages" },
    ],
    achievements: [
      "Civil and structural design delivered for a double-storey childcare centre.",
      "Design documentation prepared for Council approval and construction tender.",
      "Design certified by an accredited design engineer.",
      "Construction phase support provided, including site inspections.",
    ],
    galleryNumber: "04",
    galleryHeading: "Project Photography",
    galleryImages: [
      "/images/projects/bexley-child-care-centre/12.webp",
      "/images/projects/bexley-child-care-centre/20200313_151323.webp",
      "/images/projects/bexley-child-care-centre/20200313_151325.webp",
      "/images/projects/bexley-child-care-centre/20200313_151344.webp",
      "/images/projects/bexley-child-care-centre/20200313_151431.webp",
      "/images/projects/bexley-child-care-centre/20200313_151435.webp",
      "/images/projects/bexley-child-care-centre/20200313_151454.webp",
      "/images/projects/bexley-child-care-centre/20200313_151503.webp",
      "/images/projects/bexley-child-care-centre/20200313_153027.webp",
      "/images/projects/bexley-child-care-centre/20200313_153151.webp",
      "/images/projects/bexley-child-care-centre/20200313_153158.webp",
      "/images/projects/bexley-child-care-centre/20200313_153226.webp",
      "/images/projects/bexley-child-care-centre/20200313_153241.webp",
      "/images/projects/bexley-child-care-centre/20200313_153242.webp",
      "/images/projects/bexley-child-care-centre/20200320_152808.webp",
      "/images/projects/bexley-child-care-centre/20200320_153448.webp",
      "/images/projects/bexley-child-care-centre/20200320_153508.webp",
      "/images/projects/bexley-child-care-centre/20200320_153705.webp",
      "/images/projects/bexley-child-care-centre/20200511_170201.webp",
      "/images/projects/bexley-child-care-centre/20200512_082159.webp",
      "/images/projects/bexley-child-care-centre/20200512_083529.webp",
      "/images/projects/bexley-child-care-centre/aerial-shot-2-2048x1152.webp",
      "/images/projects/bexley-child-care-centre/c11.webp",
      "/images/projects/bexley-child-care-centre/c18.webp",
      "/images/projects/bexley-child-care-centre/c1t.webp",
      "/images/projects/bexley-child-care-centre/c3.webp",
      "/images/projects/bexley-child-care-centre/C6.webp",
      "/images/projects/bexley-child-care-centre/c8.webp",
      "/images/projects/bexley-child-care-centre/c9.webp",
      "/images/projects/bexley-child-care-centre/GroveAcademy_20_07_313266-2048x1365.webp",
      "/images/projects/bexley-child-care-centre/GroveAcademy_20_07_313480-2048x1366.webp",
      "/images/projects/bexley-child-care-centre/GroveAcademy_20_07_313774-2048x1366.webp",
      "/images/projects/bexley-child-care-centre/GroveAcademy_20_07_313994-2048x1365.webp",
      "/images/projects/bexley-child-care-centre/IMG_2619.webp",
    ],
    relatedNumber: "05",
    relatedHeading: "Related Work",
    relatedProjects: [
      { title: "CNHi Electrical Charging Station", slug: "cnhi-electrical-charging-station-upgrade", image: "/images/projects/cnhi-electrical-charging-station-upgrade/unnamed%20%281%29.jpg" },
      { title: "Commercial Development at Windsor- Café", slug: "geeta-cafe-restaurant-development", image: "/images/projects/geeta-cafe-restaurant-development/unnamed%20%281%29.png" },
      { title: "Hunter Valley Bus Depot, Morisset Stormwater Design", slug: "hunter-valley-bus-depot-stormwater-design", image: "/images/projects/hunter-valley-bus-depot-stormwater-design/DJI_20240724164500_0013_D.webp" },
    ],
  },

  // =================================================================
  // 18 — CNHi Electrical Charging Station Upgrade
  // =================================================================
  {
    slug: "cnhi-electrical-charging-station-upgrade",
    index: "18",
    title: "CNHi Electrical Charging Station Upgrade",
    category: "Buildings & Property Engineering",
    shortDescription: "Design and construction of a consolidated forklift charging area at the CNHI St Marys depot warehouse, improving safety and storage.",
    heroTitle: "CNHi Electrical Charging Station Upgrade",
    heroImage: "/images/projects/cnhi-electrical-charging-station-upgrade/unnamed%20%281%29.jpg",
    stats: [
      { label: "CLIENT", value: "CNH Industrial Australia" },
      { label: "VALUE", value: "$184,000" },
      { label: "DURATION", value: "July 2019 - January 2020" },
      { label: "LOCATION", value: "St Marys, NSW" },
      { label: "SCOPE", value: "Design and construction" },
      { label: "STATUS", value: "In Progress" },
    ],
    aboutNumber: "01",
    aboutHeading: "What needed to be solved.",
    aboutDescription: "The MHE Charging Station Upgrade at the CNHI St Marys depot warehouse was delivered to improve safety, efficiency and storage capacity in the forklift charging area.",
    location: "St Marys, NSW",
    challengeParagraphs: [
      "The MHE Charging Station Upgrade at the CNHI St Marys depot warehouse was delivered to improve safety, efficiency and storage capacity in the forklift charging area.",
      "The project aimed to reduce the area's risk rating from High to Moderate, increase pallet storage and add a pedestrian walkway behind the racking, with upgraded wall sheeting.",
      "Design and construction of the consolidated charging area was delivered for CNH Industrial, including racking-based charging stations and a new electrical distribution board.",
    ],
    approachNumber: "02",
    approachHeading: "How We Delivered It",
    approachSteps: [
      { number: "01", title: "Design & Consolidation", description: "Redesign of the existing forklift charging zone into one consolidated area." },
      { number: "02", title: "Racking & Charging Stations", description: "Pallet racking installed to double as battery charging stations, with chargers fitted on mesh decks." },
      { number: "03", title: "Electrical Works", description: "New 400 A distribution board, sub-mains, 415 V outlets and live connection, then testing and commissioning." },
      { number: "04", title: "Floor, Walkway & Finishing", description: "Floor repairs and coating, line marking, pedestrian walkway, wall sheeting, and battery fill and eye wash plumbing." },
    ],
    resultsNumber: "03",
    resultsHeading: "Project Outcomes",
    resultsMetrics: [
      { value: "46", label: "Racking Bays Installed" },
      { value: "400 A", label: "Distribution Board" },
      { value: "2,000 kg", label: "Capacity Per Bay" },
      { value: "40 m", label: "Sub-Mains Cable Installed" },
    ],
    achievements: [
      "Forklift charging consolidated into one safer area.",
      "Pallet racking installed that doubles as charging stations.",
      "New electrical distribution board commissioned and certified.",
      "Pedestrian walkway and upgraded wall sheeting added.",
    ],
    galleryNumber: "04",
    galleryHeading: "Project Photography",
    galleryImages: [
      "/images/projects/cnhi-electrical-charging-station-upgrade/unnamed%20%281%29.jpg",
      "/images/projects/cnhi-electrical-charging-station-upgrade/unnamed%20%281%29.png",
      "/images/projects/cnhi-electrical-charging-station-upgrade/unnamed%20%282%29.jpg",
      "/images/projects/cnhi-electrical-charging-station-upgrade/unnamed%20%282%29.png",
      "/images/projects/cnhi-electrical-charging-station-upgrade/unnamed%20%283%29.jpg",
      "/images/projects/cnhi-electrical-charging-station-upgrade/unnamed%20%283%29.png",
      "/images/projects/cnhi-electrical-charging-station-upgrade/unnamed%20%284%29.jpg",
      "/images/projects/cnhi-electrical-charging-station-upgrade/unnamed%20%284%29.png",
      "/images/projects/cnhi-electrical-charging-station-upgrade/unnamed%20%285%29.png",
      "/images/projects/cnhi-electrical-charging-station-upgrade/unnamed.jpg",
      "/images/projects/cnhi-electrical-charging-station-upgrade/unnamed.png",
    ],
    relatedNumber: "05",
    relatedHeading: "Related Work",
    relatedProjects: [
      { title: "Bexley Child Care Centre", slug: "bexley-child-care-centre", image: "/images/projects/bexley-child-care-centre/12.webp" },
      { title: "Commercial Development at Windsor- Café", slug: "geeta-cafe-restaurant-development", image: "/images/projects/geeta-cafe-restaurant-development/unnamed%20%281%29.png" },
      { title: "Hunter Valley Bus Depot, Morisset Stormwater Design", slug: "hunter-valley-bus-depot-stormwater-design", image: "/images/projects/hunter-valley-bus-depot-stormwater-design/DJI_20240724164500_0013_D.webp" },
    ],
  },

  // =================================================================
  // 19 — Geeta Café & Restaurant Development
  // =================================================================
  {
    slug: "geeta-cafe-restaurant-development",
    index: "19",
    title: "Geeta Café & Restaurant Development",
    category: "Buildings & Property Engineering",
    shortDescription: "Engineering and technical services for a new café and restaurant at Windsor, supporting all Construction Certificate conditions.",
    heroTitle: "Geeta Café & Restaurant Development",
    heroImage: "/images/projects/geeta-cafe-restaurant-development/unnamed%20%281%29.png",
    stats: [
      { label: "CLIENT", value: "Geeta & Private Client" },
      { label: "VALUE", value: "$61,050" },
      { label: "DURATION", value: "March 2022 - April 2023" },
      { label: "LOCATION", value: "Windsor, NSW" },
      { label: "SCOPE", value: "Engineering and technical services" },
      { label: "STATUS", value: "In Progress" },
    ],
    aboutNumber: "01",
    aboutHeading: "What needed to be solved.",
    aboutDescription: "A new café and restaurant at Windsor was developed with a commercial kitchen, dining areas, accessible amenities and car parking, in accordance with development consent from Hawkesbury City Council.",
    location: "Windsor, NSW",
    challengeParagraphs: [
      "A new café and restaurant at Windsor was developed with a commercial kitchen, dining areas, accessible amenities and car parking, in accordance with development consent from Hawkesbury City Council.",
      "The project required civil and structural works including retaining walls, driveway access and site drainage, designed to meet health, safety, accessibility and environmental requirements.",
      "Engineering and technical services were provided to satisfy all Construction Certificate conditions, from structural and civil design through to compliance documentation.",
    ],
    approachNumber: "02",
    approachHeading: "How We Delivered It",
    approachSteps: [
      { number: "01", title: "Architectural Review", description: "Architectural plans verified, including wall details, accessible amenities, kitchen layout and fire services." },
      { number: "02", title: "Engineering Design", description: "Structural, civil, hydraulic and mechanical design, including retaining walls, stormwater, on-site detention and ventilation." },
      { number: "03", title: "Access & Food Compliance", description: "Traffic management, car parking, disability access and food premises design to Australian Standards." },
      { number: "04", title: "Certification & Approvals", description: "Section J energy report, construction management plan and documentation coordinated with Council and the Principal Certifier." },
    ],
    resultsNumber: "03",
    resultsHeading: "Project Outcomes",
    resultsMetrics: [
      { value: "8", label: "Service Areas Delivered" },
      { value: "5", label: "Engineering Disciplines" },
      { value: "4", label: "Authorities Coordinated" },
      { value: "1", label: "Construction Certificate Supported" },
    ],
    achievements: [
      "Civil, structural, hydraulic and mechanical design delivered for a new café.",
      "Retaining walls, drainage and on-site detention designed.",
      "Accessibility and food premises compliance addressed.",
      "Documentation coordinated for Construction Certificate approval.",
    ],
    galleryNumber: "04",
    galleryHeading: "Project Photography",
    galleryImages: [
      "/images/projects/geeta-cafe-restaurant-development/unnamed%20%281%29.png",
      "/images/projects/geeta-cafe-restaurant-development/unnamed%20%282%29.png",
      "/images/projects/geeta-cafe-restaurant-development/unnamed%20%283%29.png",
      "/images/projects/geeta-cafe-restaurant-development/unnamed.png",
    ],
    relatedNumber: "05",
    relatedHeading: "Related Work",
    relatedProjects: [
      { title: "Bexley Child Care Centre", slug: "bexley-child-care-centre", image: "/images/projects/bexley-child-care-centre/12.webp" },
      { title: "CNHi Electrical Charging Station", slug: "cnhi-electrical-charging-station-upgrade", image: "/images/projects/cnhi-electrical-charging-station-upgrade/unnamed%20%281%29.jpg" },
      { title: "Hunter Valley Bus Depot, Morisset Stormwater Design", slug: "hunter-valley-bus-depot-stormwater-design", image: "/images/projects/hunter-valley-bus-depot-stormwater-design/DJI_20240724164500_0013_D.webp" },
    ],
  },

  // =================================================================
  // 20 — Hunter Valley Bus Depot Stormwater Design
  // =================================================================
  {
    slug: "hunter-valley-bus-depot-stormwater-design",
    index: "20",
    title: "Hunter Valley Bus Depot, Stormwater Design",
    category: "Buildings & Property Engineering",
    shortDescription: "Stormwater drainage design for a bus depot shed roof catchment at Morisset, connected to the existing approved network.",
    heroTitle: "Hunter Valley Bus Depot, Stormwater Design",
    heroImage: "/images/projects/hunter-valley-bus-depot-stormwater-design/DJI_20240724164500_0013_D.webp",
    stats: [
      { label: "CLIENT", value: "SD Group" },
      { label: "DURATION", value: "June 2021" },
      { label: "LOCATION", value: "Morisset, NSW" },
      { label: "SCOPE", value: "Stormwater drainage design" },
      { label: "STATUS", value: "In Progress" },
    ],
    aboutNumber: "01",
    aboutHeading: "What needed to be solved.",
    aboutDescription: "A bus depot shed was developed at Morisset for Hunter Valley, with SD Group as principal contractor, as part of a broader operational depot with stormwater management and site servicing.",
    location: "Morisset, NSW",
    challengeParagraphs: [
      "A bus depot shed was developed at Morisset for Hunter Valley, with SD Group as principal contractor, as part of a broader operational depot with stormwater management and site servicing.",
      "The shed's stormwater system needed to drain effectively, comply with authority requirements and connect to the existing approved stormwater network.",
      "Stormwater drainage design was provided to SD Group for the shed roof catchment and its connection to the existing system, in line with AS 3500.3.2.",
    ],
    approachNumber: "02",
    approachHeading: "How We Delivered It",
    approachSteps: [
      { number: "01", title: "Plan & Network Review", description: "Architectural and site plans reviewed, with the existing approved stormwater system and connection points assessed." },
      { number: "02", title: "Hydraulic Design", description: "Stormwater pipework and drainage components designed for the shed roof catchment, including dual tank requirements where applicable." },
      { number: "03", title: "Connection & Compliance", description: "Connection details designed and checked against AS 3500.3.2:2004 acceptable solutions." },
      { number: "04", title: "Documentation & Support", description: "Drawings with levels, pipe sizes and gradients, plus design notes and support during approval and construction." },
    ],
    resultsNumber: "03",
    resultsHeading: "Project Outcomes",
    resultsMetrics: [
      { value: "14", label: "Design Scope Items" },
      { value: "1", label: "Shed Roof Catchment Designed" },
      { value: "1", label: "Connection to Approved Network" },
      { value: "AS 3500.3.2", label: "Standard Complied With" },
    ],
    achievements: [
      "Stormwater system designed for the shed roof catchment.",
      "Connection to the existing approved network detailed.",
      "Design verified against AS 3500.3.2:2004.",
      "Construction drawings and calculations prepared for approval.",
    ],
    galleryNumber: "04",
    galleryHeading: "Project Photography",
    galleryImages: [
      "/images/projects/hunter-valley-bus-depot-stormwater-design/DJI_20240724164500_0013_D.webp",
      "/images/projects/hunter-valley-bus-depot-stormwater-design/unnamed%20%281%29.png",
      "/images/projects/hunter-valley-bus-depot-stormwater-design/unnamed%20%282%29.png",
      "/images/projects/hunter-valley-bus-depot-stormwater-design/unnamed.png",
      "/images/projects/hunter-valley-bus-depot-stormwater-design/WhatsApp%20Image%202024-07-25%20at%2009.32.45_94366a2d.jpg",
      "/images/projects/hunter-valley-bus-depot-stormwater-design/WhatsApp%20Image%202024-07-25%20at%2009.32.45_c4830102.jpg",
      "/images/projects/hunter-valley-bus-depot-stormwater-design/WhatsApp%20Image%202024-07-26%20at%2009.30.41_898cef85.jpg",
    ],
    relatedNumber: "05",
    relatedHeading: "Related Work",
    relatedProjects: [
      { title: "Bexley Child Care Centre", slug: "bexley-child-care-centre", image: "/images/projects/bexley-child-care-centre/12.webp" },
      { title: "CNHi Electrical Charging Station", slug: "cnhi-electrical-charging-station-upgrade", image: "/images/projects/cnhi-electrical-charging-station-upgrade/unnamed%20%281%29.jpg" },
      { title: "Commercial Development at Windsor- Café", slug: "geeta-cafe-restaurant-development", image: "/images/projects/geeta-cafe-restaurant-development/unnamed%20%281%29.png" },
    ],
  },

  // =================================================================
  // 21 — Pinegrove Memorial Park Road Rehabilitation
  // =================================================================
  {
    slug: "pinegrove-memorial-park-road-rehabilitation",
    index: "21",
    title: "Pinegrove Memorial Park Road Rehabilitation",
    category: "Construction & Project Delivery",
    shortDescription: "Design and construction of an all-weather access road, parking and landscaping at Pinegrove Memorial Park, Minchinbury.",
    heroTitle: "Pinegrove Memorial Park Road Rehabilitation",
    heroImage: "/images/projects/pinegrove-memorial-park-road-rehabilitation/unnamed%20%281%29.jpg",
    stats: [
      { label: "CLIENT", value: "Invocare Australia Pty Ltd" },
      { label: "VALUE", value: "$5,020,993.76" },
      { label: "DURATION", value: "June 2017 - March 2020" },
      { label: "LOCATION", value: "Minchinbury, NSW" },
      { label: "SCOPE", value: "Design and construction" },
      { label: "STATUS", value: "In Progress" },
    ],
    aboutNumber: "01",
    aboutHeading: "What needed to be solved.",
    aboutDescription: "Terra Santa Crypts at Pinegrove Memorial Park, Minchinbury, was initiated to meet growing demand for above-ground burial options in Sydney's western suburbs, offering a dignified and culturally sensitive alternative to in-ground burial.",
    location: "Minchinbury, NSW",
    challengeParagraphs: [
      "Terra Santa Crypts at Pinegrove Memorial Park, Minchinbury, was initiated to meet growing demand for above-ground burial options in Sydney's western suburbs, offering a dignified and culturally sensitive alternative to in-ground burial.",
      "The crypts sit near the North and West Chapels, and needed a new all-weather access road, parking and landscaped setting, built on ground affected by extensive site irrigation.",
      "Design and construction of the internal road and pavement works were delivered for InvoCare Australia, including drainage, landscaping and finishing works.",
    ],
    approachNumber: "02",
    approachHeading: "How We Delivered It",
    approachSteps: [
      { number: "01", title: "Site Investigation & Establishment", description: "Site investigations, reports and assessments completed, followed by site establishment and utility diversions." },
      { number: "02", title: "Earthworks & Drainage", description: "Foundation preparation, with a drainage blanket and subsoil drainage to support pavement longevity." },
      { number: "03", title: "Road & Parking Construction", description: "Kerbed and sealed access road, 18 parking bays, an accessible space, and turning and drop-off areas." },
      { number: "04", title: "Landscaping & Finishing", description: "Irrigation, water feature, green wall, soft and hard landscaping, public artworks, line marking and signage." },
    ],
    resultsNumber: "03",
    resultsHeading: "Project Outcomes",
    resultsMetrics: [
      { value: "180 m", label: "All-Weather Access Road" },
      { value: "6.5 m", label: "Road Width" },
      { value: "18", label: "Parking Bays" },
      { value: "175 acres", label: "Memorial Park Size" },
    ],
    achievements: [
      "New kerbed and sealed all-weather access road delivered.",
      "Parking, turning and drop-off areas constructed for safe vehicle movement.",
      "Drainage designed to protect the pavement from site irrigation.",
      "Landscaping, water feature and public artworks completed.",
    ],
    galleryNumber: "04",
    galleryHeading: "Project Photography",
    galleryImages: [
      "/images/projects/pinegrove-memorial-park-road-rehabilitation/unnamed%20%281%29.jpg",
      "/images/projects/pinegrove-memorial-park-road-rehabilitation/unnamed%20%281%29.png",
      "/images/projects/pinegrove-memorial-park-road-rehabilitation/unnamed%20%282%29.jpg",
      "/images/projects/pinegrove-memorial-park-road-rehabilitation/unnamed%20%282%29.png",
      "/images/projects/pinegrove-memorial-park-road-rehabilitation/unnamed%20%283%29.jpg",
      "/images/projects/pinegrove-memorial-park-road-rehabilitation/unnamed%20%283%29.png",
      "/images/projects/pinegrove-memorial-park-road-rehabilitation/unnamed.jpg",
      "/images/projects/pinegrove-memorial-park-road-rehabilitation/unnamed.png",
    ],
    relatedNumber: "05",
    relatedHeading: "Related Work",
    relatedProjects: [
      { title: "CNHi Safety Improvement Works", slug: "cnhi-safety-improvement-works", image: "/images/projects/cnhi-safety-improvement-works/20200327_090842.webp" },
      { title: "Kelso to Raglan Stormwater Drainage & Culvert Installation", slug: "kelso-to-raglan-stormwater-drainage-culvert-installation", image: "/images/projects/kelso-to-raglan-stormwater-drainage-culvert-installation/20220907_110123695_iOS.jpg" },
      { title: "Nepean Avenue Pathway Construction", slug: "nepean-avenue-pathway-construction", image: "/images/projects/nepean-avenue-pathway-construction/unnamed%20%281%29.jpg" },
    ],
  },

  // =================================================================
  // 22 — CNHi Safety Improvement Works
  // =================================================================
  {
    slug: "cnhi-safety-improvement-works",
    index: "22",
    title: "CNHi Safety Improvement Works",
    category: "Construction & Project Delivery",
    shortDescription: "Design and construction of Dangerous Goods storage and site safety upgrades at the CNH Industrial facility, St Marys.",
    heroTitle: "CNHi Safety Improvement Works",
    heroImage: "/images/projects/cnhi-safety-improvement-works/20200327_090842.webp",
    stats: [
      { label: "CLIENT", value: "CNH Industrial Australia" },
      { label: "VALUE", value: "$324,787" },
      { label: "DURATION", value: "November 2019 - March 2021" },
      { label: "LOCATION", value: "St Marys, NSW" },
      { label: "SCOPE", value: "Design and construction" },
      { label: "STATUS", value: "In Progress" },
    ],
    aboutNumber: "01",
    aboutHeading: "What needed to be solved.",
    aboutDescription: "Safety upgrades were delivered at the CNH Industrial facility to improve the handling and storage of Dangerous Goods, in accordance with Penrith City Council's Notice of Determination and approved plans.",
    location: "St Marys, NSW",
    challengeParagraphs: [
      "Safety upgrades were delivered at the CNH Industrial facility to improve the handling and storage of Dangerous Goods, in accordance with Penrith City Council's Notice of Determination and approved plans.",
      "The works included a new concrete pad for segregated Dangerous Goods containers, with drainage, lighting, an emergency shower and eye wash station, and a fire hydrant extension, together with road resurfacing and pavement restoration to improve space use, durability and safety.",
      "Design and construction were delivered for CNH Industrial, covering drainage, asphalting, line marking, plumbing and electrical works.",
    ],
    approachNumber: "02",
    approachHeading: "How We Delivered It",
    approachSteps: [
      { number: "01", title: "Design & Pad Construction", description: "Concrete pad designed and built to hold eight sea containers, with stormwater drainage to the existing line." },
      { number: "02", title: "Safety Systems", description: "Emergency shower and eye wash station with wastewater sump, extra fire hydrant connection, and lighting to the Dangerous Goods area." },
      { number: "03", title: "Road & Pavement Works", description: "Road resurfacing, office access and walkway asphalting, carpark garden bed conversion, patch repairs and crack sealing." },
      { number: "04", title: "Line Marking & Finishing", description: "Road and parking line marking, pedestrian crossing and speed hump marking, and guard rail installation." },
    ],
    resultsNumber: "03",
    resultsHeading: "Project Outcomes",
    resultsMetrics: [
      { value: "8", label: "Dangerous Goods Containers Housed" },
      { value: "300 m²", label: "Concrete Pad Built" },
      { value: "2,500 L", label: "Wastewater Sump Capacity" },
      { value: "230 m", label: "Internal Road Resurfaced" },
    ],
    achievements: [
      "Dangerous Goods storage segregated on a purpose-built concrete pad.",
      "Emergency shower, eye wash and fire hydrant provided for the storage area.",
      "Internal roads resurfaced, with pavements repaired and crack sealed.",
      "Line marking and speed humps completed for safer site movement.",
    ],
    galleryNumber: "04",
    galleryHeading: "Project Photography",
    galleryImages: [
      "/images/projects/cnhi-safety-improvement-works/20200327_090842.webp",
      "/images/projects/cnhi-safety-improvement-works/20200401_140625.webp",
      "/images/projects/cnhi-safety-improvement-works/20200408_094031.webp",
      "/images/projects/cnhi-safety-improvement-works/20200408_124928%281%29.webp",
      "/images/projects/cnhi-safety-improvement-works/20200408_162113%281%29.webp",
      "/images/projects/cnhi-safety-improvement-works/20200409_154753.webp",
      "/images/projects/cnhi-safety-improvement-works/20200409_155316.webp",
      "/images/projects/cnhi-safety-improvement-works/20200414_165231.webp",
      "/images/projects/cnhi-safety-improvement-works/20200414_165248.webp",
      "/images/projects/cnhi-safety-improvement-works/20200414_165707.webp",
      "/images/projects/cnhi-safety-improvement-works/20200414_165722.webp",
      "/images/projects/cnhi-safety-improvement-works/20200415_093638.webp",
      "/images/projects/cnhi-safety-improvement-works/20200415_093807.webp",
      "/images/projects/cnhi-safety-improvement-works/20200415_093906.webp",
      "/images/projects/cnhi-safety-improvement-works/20200415_094031.webp",
      "/images/projects/cnhi-safety-improvement-works/20200415_094131.webp",
      "/images/projects/cnhi-safety-improvement-works/20200415_094347.webp",
      "/images/projects/cnhi-safety-improvement-works/20200415_094437.webp",
      "/images/projects/cnhi-safety-improvement-works/20200415_100743.webp",
      "/images/projects/cnhi-safety-improvement-works/20200415_104728.webp",
      "/images/projects/cnhi-safety-improvement-works/20200415_110918.webp",
      "/images/projects/cnhi-safety-improvement-works/20200415_111937.webp",
      "/images/projects/cnhi-safety-improvement-works/20200415_135418.webp",
      "/images/projects/cnhi-safety-improvement-works/20200422_094408.webp",
      "/images/projects/cnhi-safety-improvement-works/20200423_101219.webp",
      "/images/projects/cnhi-safety-improvement-works/20200423_105842.webp",
      "/images/projects/cnhi-safety-improvement-works/20200423_105906.webp",
      "/images/projects/cnhi-safety-improvement-works/20200423_153429.webp",
      "/images/projects/cnhi-safety-improvement-works/20200423_153432.webp",
      "/images/projects/cnhi-safety-improvement-works/20200423_153506.webp",
      "/images/projects/cnhi-safety-improvement-works/20200430_122537.webp",
      "/images/projects/cnhi-safety-improvement-works/20200506_095908.webp",
      "/images/projects/cnhi-safety-improvement-works/20200506_100005.webp",
      "/images/projects/cnhi-safety-improvement-works/20200506_100019.webp",
      "/images/projects/cnhi-safety-improvement-works/20200506_100324.webp",
      "/images/projects/cnhi-safety-improvement-works/20200506_100356.webp",
      "/images/projects/cnhi-safety-improvement-works/20200506_104653.webp",
      "/images/projects/cnhi-safety-improvement-works/20200507_093939.webp",
      "/images/projects/cnhi-safety-improvement-works/20200507_130830.webp",
      "/images/projects/cnhi-safety-improvement-works/20200507_130852.webp",
      "/images/projects/cnhi-safety-improvement-works/20200507_153821.webp",
      "/images/projects/cnhi-safety-improvement-works/20200507_154455.webp",
      "/images/projects/cnhi-safety-improvement-works/20200507_154520.webp",
      "/images/projects/cnhi-safety-improvement-works/20200507_154557.webp",
      "/images/projects/cnhi-safety-improvement-works/20200507_170315.webp",
      "/images/projects/cnhi-safety-improvement-works/20200613_104823.webp",
      "/images/projects/cnhi-safety-improvement-works/20200908_074241.webp",
      "/images/projects/cnhi-safety-improvement-works/20200908_090034.webp",
      "/images/projects/cnhi-safety-improvement-works/20200908_090055.webp",
      "/images/projects/cnhi-safety-improvement-works/20200911_084328.webp",
      "/images/projects/cnhi-safety-improvement-works/20200911_084504.webp",
      "/images/projects/cnhi-safety-improvement-works/20200911_084531.webp",
      "/images/projects/cnhi-safety-improvement-works/20200911_112017.webp",
      "/images/projects/cnhi-safety-improvement-works/20200911_112043.webp",
      "/images/projects/cnhi-safety-improvement-works/20200911_112106.webp",
      "/images/projects/cnhi-safety-improvement-works/Aslphalting%201.webp",
      "/images/projects/cnhi-safety-improvement-works/asphalting%202.webp",
      "/images/projects/cnhi-safety-improvement-works/asphalting%203.webp",
      "/images/projects/cnhi-safety-improvement-works/IMG_2858.webp",
      "/images/projects/cnhi-safety-improvement-works/IMG_2864.webp",
      "/images/projects/cnhi-safety-improvement-works/IMG_2904.webp",
      "/images/projects/cnhi-safety-improvement-works/IMG_2905.webp",
      "/images/projects/cnhi-safety-improvement-works/IMG_3047.webp",
      "/images/projects/cnhi-safety-improvement-works/IMG_3048.webp",
      "/images/projects/cnhi-safety-improvement-works/IMG_3049.webp",
      "/images/projects/cnhi-safety-improvement-works/IMG_3051.webp",
      "/images/projects/cnhi-safety-improvement-works/IMG_3052.webp",
      "/images/projects/cnhi-safety-improvement-works/IMG_3053.webp",
      "/images/projects/cnhi-safety-improvement-works/IMG_3054.webp",
      "/images/projects/cnhi-safety-improvement-works/IMG_3237.webp",
      "/images/projects/cnhi-safety-improvement-works/IMG_3238.webp",
      "/images/projects/cnhi-safety-improvement-works/IMG_3239.webp",
      "/images/projects/cnhi-safety-improvement-works/IMG_3240.webp",
      "/images/projects/cnhi-safety-improvement-works/IMG_5001.webp",
      "/images/projects/cnhi-safety-improvement-works/IMG_5004.webp",
      "/images/projects/cnhi-safety-improvement-works/IMG_5005.webp",
      "/images/projects/cnhi-safety-improvement-works/IMG_5007.webp",
      "/images/projects/cnhi-safety-improvement-works/IMG_5010.webp",
      "/images/projects/cnhi-safety-improvement-works/IMG_5013.webp",
      "/images/projects/cnhi-safety-improvement-works/IMG_5014.webp",
      "/images/projects/cnhi-safety-improvement-works/IMG_5016.webp",
      "/images/projects/cnhi-safety-improvement-works/IMG_5017.webp",
      "/images/projects/cnhi-safety-improvement-works/internal%20road%201.webp",
      "/images/projects/cnhi-safety-improvement-works/internal%20road%202.webp",
    ],
    relatedNumber: "05",
    relatedHeading: "Related Work",
    relatedProjects: [
      { title: "Pinegrove Memorial Park Road Rehabilitation - D&C", slug: "pinegrove-memorial-park-road-rehabilitation", image: "/images/projects/pinegrove-memorial-park-road-rehabilitation/unnamed%20%281%29.jpg" },
      { title: "Kelso to Raglan Stormwater Drainage & Culvert Installation", slug: "kelso-to-raglan-stormwater-drainage-culvert-installation", image: "/images/projects/kelso-to-raglan-stormwater-drainage-culvert-installation/20220907_110123695_iOS.jpg" },
      { title: "Nepean Avenue Pathway Construction", slug: "nepean-avenue-pathway-construction", image: "/images/projects/nepean-avenue-pathway-construction/unnamed%20%281%29.jpg" },
    ],
  },

  // =================================================================
  // 23 — Kelso to Raglan Stormwater Drainage & Culvert Installation
  // =================================================================
  {
    slug: "kelso-to-raglan-stormwater-drainage-culvert-installation",
    index: "23",
    title: "Kelso to Raglan Stormwater Drainage & Culvert Installation",
    category: "Construction & Project Delivery",
    shortDescription: "Stormwater drainage installation including concrete pipes, headwalls, pits and a 60 m box culvert for the Kelso to Raglan Highway upgrade.",
    heroTitle: "Kelso to Raglan Stormwater Drainage & Culvert Installation",
    heroImage: "/images/projects/kelso-to-raglan-stormwater-drainage-culvert-installation/20220907_110123695_iOS.jpg",
    stats: [
      { label: "CLIENT", value: "Transport for NSW" },
      { label: "VALUE", value: "$45 Million" },
      { label: "DURATION", value: "March 2022 - March 2025" },
      { label: "LOCATION", value: "Bathurst, NSW" },
      { label: "SCOPE", value: "Construction" },
      { label: "STATUS", value: "In Progress" },
    ],
    aboutNumber: "01",
    aboutHeading: "What needed to be solved.",
    aboutDescription: "The Kelso to Raglan Upgrade is part of Transport for NSW's improvements to the Great Western Highway, east of Bathurst, to reduce congestion during events and holiday periods, improve safety and shorten travel times.",
    location: "Bathurst, NSW",
    challengeParagraphs: [
      "The Kelso to Raglan Upgrade is part of Transport for NSW's improvements to the Great Western Highway, east of Bathurst, to reduce congestion during events and holiday periods, improve safety and shorten travel times.",
      "The upgrade included additional lanes, safer turning paths, traffic lights at the PJ Moodie intersection and a shared footpath, and required new underground stormwater drainage along the highway.",
      "Stormwater drainage installation was delivered for Transport for NSW, including concrete pipes, headwalls, pits and a box culvert.",
    ],
    approachNumber: "02",
    approachHeading: "How We Delivered It",
    approachSteps: [
      { number: "01", title: "Site Preparation", description: "Utilities potholed and located, redundant drainage structures demolished, and management systems put in place." },
      { number: "02", title: "Pipe & Culvert Installation", description: "Precast concrete pipe culverts and a 60 m box culvert installed, including excavation, laying and backfilling." },
      { number: "03", title: "Headwalls, Pits & Outlets", description: "Precast headwalls and stormwater pits installed, with scour protection rock placed at drainage outlets." },
      { number: "04", title: "Inspection & Completion", description: "CCTV inspection and reporting to TfNSW requirements, and surplus material removed." },
    ],
    resultsNumber: "03",
    resultsHeading: "Project Outcomes",
    resultsMetrics: [
      { value: "2,250 m", label: "Concrete Pipe Installed" },
      { value: "42", label: "Precast Headwalls" },
      { value: "52", label: "Stormwater Pits" },
      { value: "60 m", label: "Box Culvert Length" },
    ],
    achievements: [
      "Underground stormwater drainage installed along the highway upgrade.",
      "Pipes, headwalls, pits and a box culvert constructed to TfNSW specifications.",
      "Scour protection placed at drainage outlets.",
      "Drainage inspected by CCTV and reported to TfNSW.",
    ],
    galleryNumber: "04",
    galleryHeading: "Project Photography",
    galleryImages: [
      "/images/projects/kelso-to-raglan-stormwater-drainage-culvert-installation/20220907_110123695_iOS.jpg",
      "/images/projects/kelso-to-raglan-stormwater-drainage-culvert-installation/20220907_110516366_iOS.jpg",
      "/images/projects/kelso-to-raglan-stormwater-drainage-culvert-installation/20220907_134757843_iOS.jpg",
      "/images/projects/kelso-to-raglan-stormwater-drainage-culvert-installation/20221130_030619993_iOS.jpg",
      "/images/projects/kelso-to-raglan-stormwater-drainage-culvert-installation/20221214_033714230_iOS.jpg",
      "/images/projects/kelso-to-raglan-stormwater-drainage-culvert-installation/367643603_1564651814069588_2366154985172353097_n.jpg",
      "/images/projects/kelso-to-raglan-stormwater-drainage-culvert-installation/368026203_707711721008961_3240506910689730464_n.jpg",
      "/images/projects/kelso-to-raglan-stormwater-drainage-culvert-installation/368510502_890351429396439_8260887158074419627_n.jpg",
      "/images/projects/kelso-to-raglan-stormwater-drainage-culvert-installation/368573608_831667862026378_776913069494549021_n.jpg",
      "/images/projects/kelso-to-raglan-stormwater-drainage-culvert-installation/370259592_851767310071016_3713290572377521734_n.jpg",
      "/images/projects/kelso-to-raglan-stormwater-drainage-culvert-installation/371546896_1647029365702740_2422247261277099260_n.jpg",
      "/images/projects/kelso-to-raglan-stormwater-drainage-culvert-installation/385537298_1789665284804127_8000564782005189142_n.jpg",
      "/images/projects/kelso-to-raglan-stormwater-drainage-culvert-installation/e7a2c2bb-5d22-4d35-a3d8-45c9d26efd44.jpg",
      "/images/projects/kelso-to-raglan-stormwater-drainage-culvert-installation/IMG_6205.JPG",
      "/images/projects/kelso-to-raglan-stormwater-drainage-culvert-installation/IMG_6637.JPG",
      "/images/projects/kelso-to-raglan-stormwater-drainage-culvert-installation/IMG_6753.JPG",
      "/images/projects/kelso-to-raglan-stormwater-drainage-culvert-installation/IYIJ3136.JPG",
      "/images/projects/kelso-to-raglan-stormwater-drainage-culvert-installation/TC_00103.JPG",
      "/images/projects/kelso-to-raglan-stormwater-drainage-culvert-installation/TC_00114.JPG",
      "/images/projects/kelso-to-raglan-stormwater-drainage-culvert-installation/TC_00161.JPG",
      "/images/projects/kelso-to-raglan-stormwater-drainage-culvert-installation/TC_00173.JPG",
      "/images/projects/kelso-to-raglan-stormwater-drainage-culvert-installation/TC_00197.JPG",
      "/images/projects/kelso-to-raglan-stormwater-drainage-culvert-installation/TC_00359.JPG",
      "/images/projects/kelso-to-raglan-stormwater-drainage-culvert-installation/TC_00360.JPG",
      "/images/projects/kelso-to-raglan-stormwater-drainage-culvert-installation/TC_00363.JPG",
      "/images/projects/kelso-to-raglan-stormwater-drainage-culvert-installation/TC_00366.JPG",
      "/images/projects/kelso-to-raglan-stormwater-drainage-culvert-installation/TC_00385.JPG",
      "/images/projects/kelso-to-raglan-stormwater-drainage-culvert-installation/TC_00390.JPG",
      "/images/projects/kelso-to-raglan-stormwater-drainage-culvert-installation/TC_00395.JPG",
      "/images/projects/kelso-to-raglan-stormwater-drainage-culvert-installation/TC_00399.JPG",
      "/images/projects/kelso-to-raglan-stormwater-drainage-culvert-installation/TC_00400.JPG",
      "/images/projects/kelso-to-raglan-stormwater-drainage-culvert-installation/TC_00476.JPG",
      "/images/projects/kelso-to-raglan-stormwater-drainage-culvert-installation/TC_00481.JPG",
      "/images/projects/kelso-to-raglan-stormwater-drainage-culvert-installation/TC_00544.JPG",
      "/images/projects/kelso-to-raglan-stormwater-drainage-culvert-installation/TC_00596.JPG",
      "/images/projects/kelso-to-raglan-stormwater-drainage-culvert-installation/TC_00600.JPG",
      "/images/projects/kelso-to-raglan-stormwater-drainage-culvert-installation/TC_00673.JPG",
      "/images/projects/kelso-to-raglan-stormwater-drainage-culvert-installation/TC_00803.JPG",
      "/images/projects/kelso-to-raglan-stormwater-drainage-culvert-installation/TC_00804.JPG",
      "/images/projects/kelso-to-raglan-stormwater-drainage-culvert-installation/TC_00948.JPG",
      "/images/projects/kelso-to-raglan-stormwater-drainage-culvert-installation/TC_01843.JPG",
      "/images/projects/kelso-to-raglan-stormwater-drainage-culvert-installation/TimePhoto_20220330_151045.jpg",
      "/images/projects/kelso-to-raglan-stormwater-drainage-culvert-installation/TimePhoto_20220331_100035.jpg",
      "/images/projects/kelso-to-raglan-stormwater-drainage-culvert-installation/TimePhoto_20220331_171348.jpg",
      "/images/projects/kelso-to-raglan-stormwater-drainage-culvert-installation/TimePhoto_20220503_095032.jpg",
      "/images/projects/kelso-to-raglan-stormwater-drainage-culvert-installation/TimePhoto_20220503_111625.jpg",
      "/images/projects/kelso-to-raglan-stormwater-drainage-culvert-installation/TimePhoto_20220503_130618.jpg",
      "/images/projects/kelso-to-raglan-stormwater-drainage-culvert-installation/TimePhoto_20220505_090000.jpg",
      "/images/projects/kelso-to-raglan-stormwater-drainage-culvert-installation/TimePhoto_20220505_094509.jpg",
      "/images/projects/kelso-to-raglan-stormwater-drainage-culvert-installation/TimePhoto_20220505_144705.jpg",
      "/images/projects/kelso-to-raglan-stormwater-drainage-culvert-installation/TimePhoto_20220518_113959.jpg",
      "/images/projects/kelso-to-raglan-stormwater-drainage-culvert-installation/TimePhoto_20220518_163146.jpg",
      "/images/projects/kelso-to-raglan-stormwater-drainage-culvert-installation/TimePhoto_20230119_104737.jpg",
      "/images/projects/kelso-to-raglan-stormwater-drainage-culvert-installation/TimePhoto_20230220_111129.jpg",
      "/images/projects/kelso-to-raglan-stormwater-drainage-culvert-installation/TimePhoto_20230505_091314.jpg",
      "/images/projects/kelso-to-raglan-stormwater-drainage-culvert-installation/TimePhoto_20230620_153700.jpg",
      "/images/projects/kelso-to-raglan-stormwater-drainage-culvert-installation/TimePhoto_20230719_104026.jpg",
      "/images/projects/kelso-to-raglan-stormwater-drainage-culvert-installation/VPLL9878.JPG",
      "/images/projects/kelso-to-raglan-stormwater-drainage-culvert-installation/WhatsApp%20Image%202022-05-03%20at%204.38.32%20PM.jpeg",
    ],
    relatedNumber: "05",
    relatedHeading: "Related Work",
    relatedProjects: [
      { title: "Pinegrove Memorial Park Road Rehabilitation - D&C", slug: "pinegrove-memorial-park-road-rehabilitation", image: "/images/projects/pinegrove-memorial-park-road-rehabilitation/unnamed%20%281%29.jpg" },
      { title: "CNHi Safety Improvement Works", slug: "cnhi-safety-improvement-works", image: "/images/projects/cnhi-safety-improvement-works/20200327_090842.webp" },
      { title: "Nepean Avenue Pathway Construction", slug: "nepean-avenue-pathway-construction", image: "/images/projects/nepean-avenue-pathway-construction/unnamed%20%281%29.jpg" },
    ],
  },

  // =================================================================
  // 24 — Nepean Avenue Pathway Construction
  // =================================================================
  {
    slug: "nepean-avenue-pathway-construction",
    index: "24",
    title: "Nepean Avenue Pathway Construction",
    category: "Construction & Project Delivery",
    shortDescription: "Design and construction of 1,100 m of shared pathway at Penrith, completing the missing link in the Great River Walk.",
    heroTitle: "Nepean Avenue Pathway Construction",
    heroImage: "/images/projects/nepean-avenue-pathway-construction/unnamed%20%281%29.jpg",
    stats: [
      { label: "CLIENT", value: "Axial Construction Pty Ltd / Penrith City Council" },
      { label: "VALUE", value: "$2.5 Million" },
      { label: "DURATION", value: "June 2024 - March 2025" },
      { label: "LOCATION", value: "Penrith, NSW" },
      { label: "SCOPE", value: "Design and construction" },
      { label: "STATUS", value: "In Progress" },
    ],
    aboutNumber: "01",
    aboutHeading: "What needed to be solved.",
    aboutDescription: "A new 2.6 m wide shared pathway is being delivered along the western side of Nepean Avenue, Penrith, from Tench Reserve to Memorial Avenue, completing the missing link in the Great River Walk.",
    location: "Penrith, NSW",
    challengeParagraphs: [
      "A new 2.6 m wide shared pathway is being delivered along the western side of Nepean Avenue, Penrith, from Tench Reserve to Memorial Avenue, completing the missing link in the Great River Walk.",
      "The path responds to growing traffic and pedestrian activity, and a Road Safety Audit that identified pedestrians as high risk, with physical separation from the road, protection of existing shade trees, and attention to sight lines and drainage.",
      "Design and construction of approximately 1,100 m of pathway were provided to Axial Construction, covering civil, stormwater, landscape, electrical and lighting works.",
    ],
    approachNumber: "02",
    approachHeading: "How We Delivered It",
    approachSteps: [
      { number: "01", title: "Design & Site Preparation", description: "Design to TfNSW guidelines, with services located, traffic management in place and the footpath area cleared." },
      { number: "02", title: "Drainage & Civil Works", description: "Stormwater and pit upgrades, kerb replacement and realignment, and partial road reconstruction." },
      { number: "03", title: "Pathway & Traffic Calming", description: "Coloured concrete pathway, raised pedestrian crossing, speed thresholds and stamped concrete features." },
      { number: "04", title: "Lighting & Landscaping", description: "Lighting bollards, tree pits with structural cells, tree planting, and a one-year establishment period." },
    ],
    resultsNumber: "03",
    resultsHeading: "Project Outcomes",
    resultsMetrics: [
      { value: "1,100 m", label: "Pathway Delivered" },
      { value: "2.6 m", label: "Path Width" },
      { value: "1", label: "Missing Link Completed" },
      { value: "1 Year", label: "Tree Establishment Period" },
    ],
    achievements: [
      "Missing Great River Walk link designed and constructed.",
      "Pedestrians separated from the roadway for safer access.",
      "Raised crossing, traffic calming and lighting provided.",
      "Existing shade trees protected, with new trees planted.",
    ],
    galleryNumber: "04",
    galleryHeading: "Project Photography",
    galleryImages: [
      "/images/projects/nepean-avenue-pathway-construction/unnamed%20%281%29.jpg",
      "/images/projects/nepean-avenue-pathway-construction/unnamed%20%282%29.jpg",
      "/images/projects/nepean-avenue-pathway-construction/unnamed%20%283%29.jpg",
      "/images/projects/nepean-avenue-pathway-construction/unnamed.jpg",
      "/images/projects/nepean-avenue-pathway-construction/unnamed.png",
    ],
    relatedNumber: "05",
    relatedHeading: "Related Work",
    relatedProjects: [
      { title: "Pinegrove Memorial Park Road Rehabilitation - D&C", slug: "pinegrove-memorial-park-road-rehabilitation", image: "/images/projects/pinegrove-memorial-park-road-rehabilitation/unnamed%20%281%29.jpg" },
      { title: "CNHi Safety Improvement Works", slug: "cnhi-safety-improvement-works", image: "/images/projects/cnhi-safety-improvement-works/20200327_090842.webp" },
      { title: "Kelso to Raglan Stormwater Drainage & Culvert Installation", slug: "kelso-to-raglan-stormwater-drainage-culvert-installation", image: "/images/projects/kelso-to-raglan-stormwater-drainage-culvert-installation/20220907_110123695_iOS.jpg" },
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
 * NOTE: filter keys cover both short and full labels so any normalisation
 * used by the filter UI resolves correctly.
 */
export const projectFilterCategoryMap: Record<string, string[]> = {
  all: [],
  "engineering & design": ["Engineering & Design"],
  "project & program management": ["Project & Program Management"],
  "project verification": ["Project Verification & Assurance"],
  "project verification & assurance": ["Project Verification & Assurance"],
  "asset management": ["Asset Management & Inspection"],
  "asset management & inspection": ["Asset Management & Inspection"],
  "buildings": ["Buildings & Property Engineering"],
  "buildings & property engineering": ["Buildings & Property Engineering"],
  "construction & project delivery": ["Construction & Project Delivery"],
  "civil design": ["Engineering & Design"],
  "civil works": ["Construction & Project Delivery"],
  "bridge works": ["Asset Management & Inspection"],
  "project management": ["Project & Program Management"],
};

// --- Projects Listing Page Static Data ---

export const projectFilters: string[] = [
  "All",
  "Engineering & Design",
  "Project & Program Management",
  "Project Verification & Assurance",
  "Asset Management & Inspection",
  "Buildings & Property Engineering",
  "Construction & Project Delivery",
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

/** Fallback when `public/images/projects/{slug}/` is missing or empty. */
export const defaultHeroImage = "/images/team/noimage.png";

export const projectsContactInfo: ProjectsContactInfo = {
  company_name: "ZAMR Engineering Pty Ltd",
  address1: "30 Smith Street Wentworthville NSW, 2145",
  address2: "L14, 3 Parramatta Square, 153 Macquarie St, Parramatta, NSW 2150",
  phone: "02 9688 5322",
  email1: "admin@zamrengineering.com.au",
  email2: "khalid.javed@zamrengineering.com.au",
};