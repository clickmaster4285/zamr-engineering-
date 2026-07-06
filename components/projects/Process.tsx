// components/DeliveryProcess.jsx
export default function DeliveryProcess() {
  const processes = [
    {
      number: "01",
      title: "Project Briefing & Scope Definition",
      description:
        "We engage with your project team to define scope, constraints, and objectives. A tailored project brief and preliminary program are established.",
    },
    {
      number: "02",
      title: "Site Investigation & Data Gathering",
      description:
        "Geotechnical, survey, and utility data are collected and reviewed. Site conditions are assessed against the design requirements.",
    },
    {
      number: "03",
      title: "Concept & Preliminary Design",
      description:
        "Multiple design options are developed and evaluated. A preferred option is selected based on cost, constructability, and technical performance.",
    },
    {
      number: "04",
      title: "Detailed Design & Documentation",
      description:
        "Full engineering calculations, construction drawings, specifications, and BOQ are produced to the required regulatory standard.",
    },
    {
      number: "05",
      title: "Site Investigation & Data Gathering",
      description:
        "We manage all design-phase authority submissions, RMS, council, and EPA concurrences, and provide Principal Certifier engagement as required.",
    },
    {
      number: "06",
      title: "Construction Support & As-Built",
      description:
        "Our engineers provide RFI responses, hold-point inspections, and as-built certification to close out the project.",
    },
  ];

  return (
    <section className="w-full bg-[#0F172A] px-6 py-20 text-white md:px-30 py-16">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16">
          <div className="mb-4 flex items-center gap-3">
            <span className="text-xs font-bold tracking-widest text-white/70">
              03
            </span>
            <span className="h-px w-10 bg-white/40" />
            <span className="text-xs tracking-[0.25em] text-white/70">
              PROCESS
            </span>
          </div>

          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
            Our Delivery Process
          </h2>
        </div>

        {/* Process Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {processes.map((item, index) => (
            <div
              key={index}
              className="group relative rounded-2xl border border-white/10 bg-white/5 p-8 transition-all duration-300 hover:border-white/20 hover:bg-white/10"
            >
              {/* Number */}
              <div className="mb-6 text-5xl font-bold text-white/20 transition-colors group-hover:text-[#294098]">
                {item.number}
              </div>

              {/* Title */}
              <h3 className="mb-4 text-xl font-bold leading-tight text-white">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-[15px] leading-relaxed text-white/70">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}