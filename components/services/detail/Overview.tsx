interface Props {
  number: string;
  heading: string;
  paragraphs: string[];
  serviceDetails: { label: string; value: string }[];
}

export default function CivilEngineeringOverview({ number, heading, paragraphs, serviceDetails }: Props) {
  return (
    <section className="w-full bg-white px-6 py-16 lg:p-[130px]">
      <div className="mx-auto grid max-w-[1468px] grid-cols-1 gap-12 lg:grid-cols-[1fr_436px] lg:gap-[60px]">
        <div className="flex flex-col">
          <div className="flex items-center gap-4">
            <span className="text-[16px] font-medium leading-5 tracking-[3px] text-[var(--color-blue-accent)]">
              {number}
            </span>
            <span className="h-px w-[104px] bg-[var(--text-dark)]" />
            <span className="text-[16px] font-medium leading-5 tracking-[3px] uppercase text-[var(--text-dark)]">
              OVERVIEW
            </span>
          </div>

          <h2 className="pt-7 text-[44px] font-bold leading-[55px] text-[var(--text-heading)]">
            {heading}
          </h2>

          <div className="pt-8">
            {paragraphs.map((p, i) => (
              <p
                key={i}
                className={`text-[17px] leading-[31px] ${
                  i === 0 ? "text-[var(--text-paragraph)]" : "pt-5 text-[var(--color-text-soft)]"
                }`}
              >
                {p}
              </p>
            ))}
          </div>
        </div>

        <div className="flex flex-col overflow-hidden border border-[var(--color-primary)]/12 bg-[var(--bg-section)]">
          <div className="flex items-center justify-between bg-[var(--color-blue-header)] px-6 py-4">
            <span className="text-[10px] font-bold leading-[15px] tracking-[2px] text-white">
              SERVICE DETAILS
            </span>
            <span className="font-black leading-[33px] tracking-[-0.44px] text-white/18"
              style={{ fontSize: "22px" }}>
              {number}
            </span>
          </div>

          {serviceDetails.map((item, i) => (
            <div
              key={item.label}
              className="flex items-center justify-between px-6 py-4 border-b border-[var(--color-primary)]/8 last:border-b-0"
            >
              <span className="text-[9.5px] font-semibold leading-[14px] tracking-[1.33px] text-[var(--color-text-label)]">
                {item.label}
              </span>
              <span className="text-right text-[12.5px] font-bold leading-[19px] tracking-[-0.0625px] text-[var(--text-heading)]">
                {item.value}
              </span>
            </div>
          ))}

          <div className="border-t border-[var(--color-primary)]/10 px-6 py-4">
            <button className="flex w-full items-center justify-center gap-2 bg-[var(--color-blue-header)] py-[14px] text-[10px] font-bold leading-[15px] tracking-[2px] uppercase text-white transition-opacity hover:opacity-90">
              GET IN TOUCH
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" className="text-white">
                <path d="M5 12H19" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
