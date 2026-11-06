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
    <section className="w-full bg-white px-5 py-5 lg:px-[77px] lg:py-[77px] 2xl:px-[130px] 2xl:py-[130px]">
      <div className="mx-auto flex w-full max-w-[1468px] flex-col gap-8 lg:gap-9 2xl:gap-[60px]">
        <div className="flex flex-col gap-4 2xl:gap-[30px]">
          <div className="flex flex-row items-center gap-3 lg:gap-[9px] 2xl:gap-4">
            <span className="text-[14px] font-medium leading-[18px] text-[var(--color-primary)] lg:text-[13px] lg:leading-4 lg:tracking-[1.78px] 2xl:text-base 2xl:leading-5 2xl:tracking-[3px]">
              {number}
            </span>
            <span className="h-px w-10 bg-[var(--color-primary)] lg:w-[104px] lg:bg-[var(--text-dark)]" />
            <span className="text-[13px] font-semibold uppercase leading-4 text-[var(--text-dark)] lg:font-medium lg:tracking-[1.78px] 2xl:text-base 2xl:leading-5 2xl:tracking-[3px]">
              OUTCOMES
            </span>
          </div>

          <h2 className="text-[28px] font-semibold leading-[35px] text-[var(--text-dark)] lg:text-[26px] lg:font-bold lg:leading-[33px] 2xl:text-[44px] 2xl:leading-[55px]">
            {heading}
          </h2>
        </div>

        <div className="flex flex-col gap-4 lg:gap-6 2xl:gap-[41px]">
          <div className="flex flex-col gap-4 lg:grid lg:grid-cols-4 lg:gap-0">
            {metrics.map((metric, i) => {
              const isAlt = i % 2 === 1;
              return (
                <div
                  key={metric.label}
                  className="flex min-h-[101px] flex-col justify-center border px-5 py-5 lg:min-h-[100px] lg:border-0 lg:px-4 lg:py-4 2xl:min-h-[139px] 2xl:px-[30px] 2xl:py-[30px]"
                  style={{
                    background: isAlt ? "var(--bg-section)" : "white",
                    borderColor: "color-mix(in srgb, var(--color-primary) 18%, transparent)",
                    boxShadow:
                      "inset 0 0 0 1px color-mix(in srgb, var(--color-primary) 10%, transparent)",
                  }}
                >
                  <span className="text-[36px] font-bold leading-[45px] text-[var(--color-primary)] lg:text-[26px] lg:font-medium lg:leading-8 2xl:text-[44px] 2xl:leading-[55px]">
                    {metric.value}
                  </span>
                  <span className="pt-2 text-[14px] font-medium leading-[18px] text-[var(--color-text-label)]">
                    {metric.label}
                  </span>
                </div>
              );
            })}
          </div>

          {achievements.length > 0 && (
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {achievements.map((item, i) => (
                <div
                  key={i}
                  className="flex flex-row items-start gap-4 py-4"
                  style={{
                    borderBottom:
                      "1px solid color-mix(in srgb, var(--color-primary) 8%, transparent)",
                  }}
                >
                  <span className="mt-[9px] flex h-[6px] w-[6px] shrink-0 rotate-45 bg-[var(--color-secondary)]" />
                  <span className="text-[14.5px] leading-6 text-[var(--text-paragraph)]">
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
