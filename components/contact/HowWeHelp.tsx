import { Check } from "lucide-react";
import { helpContent } from "@/mockData/contact";

export default function HowWeHelp() {
  const { heading, subtitle, items, sectionNumber, sectionLabel } = helpContent;

  return (
    <section className="flex w-full flex-col items-start justify-center bg-[var(--color-primary)] px-5 py-12 lg:items-center lg:px-[77.037px] lg:py-[77.037px] 2xl:p-[130px]">
      <div className="flex w-full flex-col items-start justify-center gap-8 lg:gap-[29.63px] 2xl:gap-[50px]">
        {/* Header */}
        <div className="flex w-full flex-col items-start gap-3 lg:gap-3 2xl:gap-5">
          <div className="flex w-full flex-row items-center gap-[9.48px]">
            <span className="text-[13px] font-medium leading-4 tracking-[1.77778px] text-white">
              {sectionNumber}
            </span>
            <span className="h-px w-[61.63px] bg-white" />
            <span className="text-[13px] font-medium leading-4 tracking-[1.77778px] uppercase text-white">
              {sectionLabel}
            </span>
          </div>

          <div className="flex w-full flex-col items-start gap-4 lg:gap-[18px] 2xl:gap-[30px]">
            <h2 className="w-full text-[28px] font-semibold leading-[35px] text-white lg:text-[26.0741px] lg:font-bold lg:leading-[33px] 2xl:text-[44px] 2xl:leading-[55px]">
              {heading}
            </h2>
            <p className="w-full text-base font-normal leading-5 text-white lg:text-lg lg:leading-[23px] 2xl:text-2xl 2xl:leading-[30px]">
              {subtitle}
            </p>
          </div>
        </div>

        {/* Help items */}
        <div className="grid w-full grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-x-6 lg:gap-y-4 2xl:grid-cols-4 2xl:gap-x-6 2xl:gap-y-4">
          {items.map((item) => (
            <div
              key={item}
              className="flex w-full flex-row items-center gap-4 py-0 lg:gap-[9.48px] lg:py-[7.11111px] 2xl:gap-4 2xl:py-3"
            >
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/10 lg:h-[14.22px] lg:w-[14.22px] lg:rounded-[7.11111px] 2xl:h-6 2xl:w-6 2xl:rounded-xl">
                <Check
                  className="h-3.5 w-3.5 text-white lg:h-[8.3px] lg:w-[8.3px] 2xl:h-3.5 2xl:w-3.5"
                  strokeWidth={2}
                />
              </span>
              <span className="min-w-0 flex-1 text-base font-medium leading-5 text-white lg:text-[13px] lg:leading-4 2xl:text-lg 2xl:leading-[23px]">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
