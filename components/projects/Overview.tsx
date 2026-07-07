// components/CivilEngineeringOverview.jsx
interface Props {
  number: string;
  heading: string;
  paragraphs: string[];
  serviceDetails: { label: string; value: string }[];
}

export default function CivilEngineeringOverview({ number, heading, paragraphs, serviceDetails }: Props) {
  return (
    <section className="w-full bg-white px-6 py-16 md:px-30">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <div className="mb-5 flex items-center gap-3">
            <span className="text-xs font-bold tracking-widest text-[var(--color-primary)]">
              {number}
            </span>
            <span className="h-px w-10 bg-[var(--color-primary)]" />
            <span className="text-xs font-semibold tracking-[0.25em] text-[#4C4C4C]">
              OVERVIEW
            </span>
          </div>

          <h2 className="mb-5 text-3xl font-extrabold text-[var(--color-primary)] md:text-4xl">
            {heading}
          </h2>

          {paragraphs.map((p, i) => (
            <p key={i} className="mb-4 text-[15px] leading-relaxed text-gray-600">
              {p}
            </p>
          ))}
        </div>

        <div className="h-fit overflow-hidden rounded-md border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between bg-[var(--color-primary)] px-6 py-4">
            <span className="text-xs font-bold tracking-[0.2em] text-white">
              SERVICE DETAILS
            </span>
            <span className="text-xs font-bold tracking-widest text-white/40">
              {number}
            </span>
          </div>

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