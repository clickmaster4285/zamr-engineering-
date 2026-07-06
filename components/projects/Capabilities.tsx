// components/TechnicalCapabilities.jsx
export default function TechnicalCapabilities() {
  const capabilities = [
    {
      title: "Structural Analysis & Design",
      description:
        "RC, steel, and composite structural systems for bridges, retaining walls, culverts, and building substructures.",
    },
    {
      title: "Hydraulic Engineering",
      description:
        "Stormwater drainage, flood modelling, waterway crossings, and detention basin design to Australian Standards.",
    },
    {
      title: "Geotechnical Assessment",
      description:
        "Foundation design, slope stability analysis, earthwork specifications, and interpretation of geotechnical investigation data.",
    },
    {
      title: "Civil Construction Documentation",
      description:
        "Complete construction drawing packages, specifications, BOQ, and engineer's estimates for tender and procurement.",
    },
    {
      title: "Site Supervision & Inspection",
      description:
        "Hold-point inspections, construction phase engineering, RFI responses, and as-built certification.",
    },
    {
      title: "Feasibility & Concept Design",
      description:
        "Early-stage technical feasibility, optioneering, and preliminary engineering to support planning and investment decisions.",
    },
  ];

  return (
    <section className="w-full bg-white px-30 py-16 md:px-16">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12">
          <div className="mb-4 flex items-center gap-3">
            <span className="text-sm font-bold tracking-widest text-[var(--color-primary)]">
              02
            </span>
            <span className="h-px w-12 bg-[var(--color-primary)]" />
            <span className="text-sm font-semibold tracking-[0.25em] text-[#4C4C4C]">
              CAPABILITIES
            </span>
          </div>

          <h2 className="text-[44px] font-bold leading-tight tracking-tight text-[var(--color-primary)] sm:text-[50px]">
            Technical Capabilities
          </h2>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((item, index) => (
            <div
              key={index}
              className="group rounded-xl border border-gray-100 bg-white p-8 transition-all duration-300 hover:border-[var(--color-primary)]/30 hover:shadow-lg hover:shadow-[var(--color-primary)]/10"
            >
              <h3 className="mb-4 text-[23px] font-bold text-[var(--color-primary)] transition-colors group-hover:text-[var(--color-secondary)]">
                {item.title}
              </h3>
              <p className="text-[17px] leading-relaxed text-gray-600 md:text-[19px]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}