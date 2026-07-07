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
    <section className="w-full bg-[#F6F8FC] px-6 py-16 lg:p-[130px]">
      <div className="mx-auto max-w-[1468px]">
        <div className="flex flex-col gap-7">
          <div className="flex items-center gap-4">
            <span className="text-[16px] font-medium leading-5 tracking-[3px] text-[#1945A7]">
              {number}
            </span>
            <span className="h-px w-[104px] bg-black" />
            <span className="text-[16px] font-medium leading-5 tracking-[3px] uppercase text-[#333333]">
              RESULTS
            </span>
          </div>

          <h2 className="text-[44px] font-bold leading-[55px] text-[#090D15]">
            {heading}
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="flex flex-col gap-2 border border-[rgba(25,69,167,0.12)] bg-white p-6"
            >
              <span className="text-[36px] font-black leading-[45px] text-[#1945A7]">
                {metric.value}
              </span>
              <span className="text-[11px] font-semibold leading-[14px] tracking-[0.06em] text-[#697281] uppercase">
                {metric.label}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <h3 className="text-[22px] font-bold leading-[28px] text-[#090D15]">
            Key Achievements
          </h3>
          <ul className="mt-6 flex flex-col gap-4">
            {achievements.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-[6px] h-2 w-2 flex-none rounded-full bg-[#1945A7]" />
                <span className="text-[15px] leading-[22px] text-[#344153]">
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
