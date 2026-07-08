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
    <section className="w-full bg-[var(--bg-section)] px-6 py-16 lg:p-[130px]">
      <div className="">
        <div className="flex flex-col gap-7">
          <div className="flex items-center gap-4">
            <span className="text-[16px] font-medium leading-5 tracking-[3px] text-[var(--color-blue-accent)]">
              {number}
            </span>
            <span className="h-px w-[104px] bg-[var(--text-dark)]" />
            <span className="text-[16px] font-medium leading-5 tracking-[3px] uppercase text-[var(--text-dark)]">
              RESULTS
            </span>
          </div>

          <h2 className="text-[44px] font-bold leading-[55px] text-[var(--text-heading)]">
            {heading}
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="flex flex-col gap-2 border border-[var(--color-blue-accent)]/12 bg-white p-6"
            >
              <span className="text-[36px] font-black leading-[45px] text-[var(--color-blue-accent)]">
                {metric.value}
              </span>
              <span className="text-[11px] font-semibold leading-[14px] tracking-[0.06em] text-[var(--color-text-soft)] uppercase">
                {metric.label}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <h3 className="text-[22px] font-bold leading-[28px] text-[var(--text-heading)]">
            Key Achievements
          </h3>
          <ul className="mt-6 flex flex-col gap-4">
            {achievements.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-[6px] h-2 w-2 flex-none rounded-full bg-[var(--color-blue-accent)]" />
                <span className="text-[15px] leading-[22px] text-[var(--text-paragraph)]">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
