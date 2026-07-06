// components/Deliverables.jsx
export default function Deliverables() {
  const deliverables = [
    "Engineering design reports and calculations",
    "Construction drawings (all disciplines)",
    "Technical specifications and material schedules",
    "Bill of Quantities and engineer's estimate",
    "Authority submission packages",
    "Construction inspection and hold-point sign-off",
    "As-built drawings and certification letters",
    "Design verification statements (DVS)",
  ];

  return (
    <section className="w-full bg-white px-30 py-16 md:px-30 py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-2">
        {/* Left column */}
        <div>
          <div className="mb-5 flex items-center gap-3">
            <span className="text-sm font-bold tracking-widest text-[#14213D]">
              04
            </span>
            <span className="h-px w-10 bg-gray-300" />
            <span className="text-sm tracking-[0.25em] text-[#4C4C4C]">
              DELIVERABLES
            </span>
          </div>

          <h2 className="text-5xl font-bold leading-tight tracking-tight text-gray-900 sm:text-gray-900">
            What You Receive
          </h2>

          <p className="max-w-md text-[17px] leading-relaxed text-gray-600 md:text-[19px]">
            Every engagement is scoped to your project requirements. Below is
            a representative set of deliverables for a full-scope Civil
            Engineering engagement.
          </p>
        </div>

        {/* Right column — deliverables list */}
        <div>
          {deliverables.map((item, i) => (
            <div
              key={item}
              className={`flex items-center gap-4 py-4 ${
                i !== deliverables.length - 1 ? "border-b border-gray-100" : ""
              }`}
            >
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-[#C54A33]/50">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#C54A33"
                  strokeWidth="1.8"
                >
                  <circle cx="12" cy="12" r="9" />
                  <polyline
                    points="8 12.5 10.5 15 16 9"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="text-[17px] text-[#333333] md:text-[19px]">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}