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
    <section className="w-full bg-white px-5 py-14 sm:px-8 md:px-10 md:py-16 xl:px-[130px] xl:py-[130px]">
      <div className="mx-auto flex w-full max-w-[1468px] flex-col gap-10 md:gap-12 xl:gap-[60px]">
        <div className="flex flex-col gap-6 xl:gap-[30px]">
          <div className="flex flex-row items-center gap-4">
            <span className="text-sm font-medium tracking-[3px] text-[var(--color-primary)] md:text-base">
              {number}
            </span>
            <span className="h-px w-16 bg-[var(--text-dark)] md:w-[104px]" />
            <span className="text-sm font-medium tracking-[3px] uppercase text-[var(--text-dark)] md:text-base">
              OUTCOMES
            </span>
          </div>

          <h2 className="text-[32px] font-bold leading-[40px] text-[var(--text-dark)] sm:text-[40px] sm:leading-[50px] md:text-[48px] md:leading-[58px] xl:text-[56px] xl:leading-[71px]">
            {heading}
          </h2>
        </div>

        <div className="flex flex-col gap-8 xl:gap-[41px]">
          <div
            className="grid grid-cols-2 gap-px xl:grid-cols-4"
            style={{
              background:
                "color-mix(in srgb, var(--color-blue-header) 10%, transparent)",
            }}
          >
            {metrics.map((metric, i) => {
              const isLightBg = i % 2 === 1;
              return (
                <div
                  key={metric.label}
                  className="flex min-h-[110px] flex-col justify-start px-4 py-6 sm:px-6 md:min-h-[128px] md:px-[30px] md:py-[30px] xl:min-h-[139px]"
                  style={{ background: isLightBg ? "var(--bg-light)" : "white" }}
                >
                  <span className="text-[26px] font-medium leading-[32px] text-[var(--color-blue-header)] sm:text-[32px] sm:leading-[40px] md:text-[38px] md:leading-[48px] xl:text-[44px] xl:leading-[55px]">
                    {metric.value}
                  </span>
                  <span className="pt-2 text-xs font-medium leading-[15px] text-[var(--color-text-label)] md:text-[14px] md:leading-[18px]">
                    {metric.label}
                  </span>
                </div>
              );
            })}
          </div>

          {achievements.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2">
              {achievements.map((item, i) => (
                <div
                  key={i}
                  className="flex flex-row items-start gap-4 py-4"
                  style={{
                    borderBottom:
                      "1px solid color-mix(in srgb, var(--color-blue-header) 8%, transparent)",
                  }}
                >
                  <span className="mt-[9px] flex h-[6px] w-[6px] shrink-0 rotate-45 bg-[var(--color-secondary)]" />
                  <span className="text-[14px] leading-[22px] text-[var(--text-paragraph)] md:text-[14.5px] md:leading-[24px]">
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
