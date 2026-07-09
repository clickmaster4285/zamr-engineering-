interface Metric {
  value: string;
  label: string;
}

interface Props {
  number: string;
  heading: string;
  metrics: Metric[];
  achievements: string[];
}

export default function Results({
  number,
  heading,
  metrics,
  achievements,
}: Props) {
  return (
    <section className="w-full bg-white px-6 py-16 lg:p-[130px]">
      {/* Frame 1321319072 — inner wrapper (gap: 60px) */}
      <div className="flex flex-col gap-10 lg:gap-[60px]">
        {/* Frame 120 — header (gap: 30px) */}
        <div className="flex flex-col gap-6 lg:gap-[30px]">
          {/* Frame 118 — section label */}
          {/* Figma: "03" / 104px line / "OUTCOMES", 16px/500/20px, gap:16px */}
          <div className="flex flex-row items-center gap-4">
            <span className="text-base font-medium tracking-[3px] text-[var(--color-blue-accent)]">
              {number}
            </span>
            <span className="h-px w-[104px] bg-[var(--text-dark)]" />
            <span className="text-base font-medium tracking-[3px] uppercase text-[var(--text-dark)]">
              OUTCOMES
            </span>
          </div>

          {/* Figma: 56px/700/71px, #333333 */}
          <h2 className="text-[var(--text-dark)] text-[36px] font-bold leading-[44px] sm:text-[44px] sm:leading-[52px] lg:text-[56px] lg:leading-[71px]">
            {heading}
          </h2>
        </div>

        {/* Frame 1321319071 — content area (gap: 41px) */}
        <div className="flex flex-col gap-8 lg:gap-[41px]">
          {/* Frame 1321319069 — metric cards row */}
          {/* Figma: flex row, 4 equal columns, 367×139px each, padding:30px */}
          <div className="grid grid-cols-2 gap-0 lg:grid-cols-4">
            {metrics.map((metric, i) => {
              const isLightBg = i % 2 === 1; // alternate: white, bg-light, white, bg-light
              return (
                <div
                  key={metric.label}
                  className="flex flex-col justify-start px-6 py-8 lg:px-[30px] lg:py-[30px] min-h-[100px] lg:min-h-[139px]"
                  style={{
                    background: isLightBg ? "var(--bg-light)" : "white",
                    borderTop: "1px solid color-mix(in srgb, var(--color-blue-header) 10%, transparent)",
                    borderRight: i < 3 ? "1px solid color-mix(in srgb, var(--color-blue-header) 10%, transparent)" : "none",
                  }}
                >
                  {/* Figma: Outfit 500, 44px/55px, #22419E (--color-blue-header) */}
                  <span className="text-[32px] font-medium leading-[40px] text-[var(--color-blue-header)] sm:text-[38px] sm:leading-[48px] lg:text-[44px] lg:leading-[55px]">
                    {metric.value}
                  </span>
                  {/* Figma: Outfit 500, 14px/18px, #9AA3B0 (--color-text-label), padding-top:8px */}
                  <span className="pt-2 text-xs font-medium leading-[15px] text-[var(--color-text-label)] sm:text-sm lg:text-[14px] lg:leading-[18px]">
                    {metric.label}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Frame 1321319070 — achievements (2-column grid) */}
          {/* Figma: 2 columns, each item has red diamond + text, border-bottom */}
          {achievements.length > 0 && (
            <div className="grid grid-cols-1 gap-0 lg:grid-cols-2">
              {achievements.map((item, i) => (
                <div
                  key={i}
                  className="flex flex-row items-start gap-4 px-0 py-4 lg:gap-[16px] lg:px-0 lg:py-[16px]"
                  style={{
                    borderBottom: "1px solid color-mix(in srgb, var(--color-blue-header) 8%, transparent)",
                  }}
                >
                  {/* Red diamond: 6×6px, rotated 45deg, #CE1A00 → var(--color-secondary) */}
                  <span className="mt-[9px] flex h-[6px] w-[6px] shrink-0 rotate-45 bg-[var(--color-secondary)] lg:mt-[9px]" />
                  {/* Figma: 14.5px/24px, #344153 (--text-paragraph) */}
                  <span className="text-[14px] leading-[22px] text-[var(--text-paragraph)] sm:text-[14.5px] sm:leading-[24px]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
