// components/CivilEngineeringOverview.jsx
export default function CivilEngineeringOverview() {
  const serviceDetails = [
    { label: "SERVICE AREA", value: "NSW · QLD · VIC" },
    { label: "TEAM SIZE", value: "18 Engineers" },
    { label: "ACCREDITATION", value: "Engineers Australia RPEQ" },
    { label: "TYPICAL DURATION", value: "3 – 24 months" },
    { label: "PROJECT SCALE", value: "$500K – $200M+" },
    { label: "SECTOR", value: "Government · Private · Industrial" },
  ];

  return (
    <section className="w-full bg-white px-6 py-16 md:px-30 py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-[1.4fr_1fr]">
        {/* Left column — overview text */}
        <div>
          {/* Eyebrow label */}
          <div className="mb-5 flex items-center gap-3">
            <span className="text-xs font-bold tracking-widest text-[var(--color-primary)]">
              01
            </span>
            <span className="h-px w-10 bg-[var(--color-primary)]" />
            <span className="text-xs font-semibold tracking-[0.25em] text-[#4C4C4C]">
              OVERVIEW
            </span>
          </div>

          {/* Heading */}
          <h2 className="mb-5 text-3xl font-extrabold text-[var(--color-primary)] md:text-4xl">
            What is Civil Engineering?
          </h2>

          {/* Paragraphs */}
          <p className="mb-4 text-[15px] leading-relaxed text-gray-600">
            ZAMR Engineering's civil engineering practice delivers end-to-end
            solutions for some of New South Wales' most technically demanding
            infrastructure projects. Our multidisciplinary team combines
            structural, hydraulic, and geotechnical expertise to produce
            designs that are rigorously analysed, code-compliant, and
            engineered for long service life.
          </p>
          <p className="text-[15px] leading-relaxed text-gray-600">
            From concept feasibility through to construction certification,
            we provide a seamless design and verification service. We
            regularly act as the Engineer of Record on complex urban
            developments, government infrastructure programs, and greenfield
            industrial sites — carrying full PI insurance and maintaining
            accreditations with Engineers Australia and Infrastructure NSW.
          </p>
        </div>

        {/* Right column — service details card */}
        <div className="h-fit overflow-hidden rounded-md border border-gray-200 shadow-sm">
          {/* Card header */}
          <div className="flex items-center justify-between bg-[var(--color-primary)] px-6 py-4">
            <span className="text-xs font-bold tracking-[0.2em] text-white">
              SERVICE DETAILS
            </span>
            <span className="text-xs font-bold tracking-widest text-white/40">
              01
            </span>
          </div>

          {/* Detail rows */}
          <div className="bg-white">
            {serviceDetails.map((item, i) => (
              <div
                key={item.label}
                className={`flex items-center justify-between px-6 py-4 ${
                  i % 2 === 0 ? "bg-[#F7F8FA]" : "bg-white"
                }`}
              >
                <span className="text-[11px] font-medium tracking-wide text-gray-400">
                  {item.label}
                </span>
                <span className="text-[13px] font-bold text-[var(--color-primary)]">
                  {item.value}
                </span>
              </div>
            ))}
          </div>

          {/* CTA button */}
          <div className="px-6 py-6">
            <button className="w-full bg-[var(--color-primary)] py-3 text-xs font-bold tracking-[0.2em] text-white transition-opacity hover:opacity-90">
              GET IN TOUCH →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}