"use client";

import { methodologySection } from "@/mockData/services";

export default function Methodology() {
  const { sectionNumber, sectionLabel, heading, subtitle, steps } =
    methodologySection;

  return (
    <section className="flex w-full flex-col items-start gap-8 bg-white px-4 py-12 lg:gap-[47.41px] lg:p-[71.1111px] 2xl:gap-20 2xl:p-[120px]">
      <div className="flex w-full flex-col items-start gap-4 lg:gap-[9.48px] 2xl:gap-4">
        <div className="flex w-full flex-row items-center gap-3 lg:w-auto lg:gap-[9.48px] 2xl:gap-4">
          <span className="shrink-0 text-sm font-medium leading-[18px] text-[var(--color-contact-accent)] lg:text-[13px] lg:leading-4 lg:tracking-[1.77778px] 2xl:text-base 2xl:leading-5 2xl:tracking-[3px]">
            {sectionNumber}
          </span>
          <span className="h-px w-10 shrink-0 bg-[var(--text-heading)] lg:w-[61.63px] 2xl:w-[104px]" />
          <span className="text-sm font-medium leading-[18px] tracking-[3px] uppercase text-[var(--text-heading)] lg:text-[13px] lg:leading-4 lg:tracking-[1.77778px] 2xl:text-base 2xl:leading-5 2xl:tracking-[3px]">
            {sectionLabel}
          </span>
        </div>

        <h2 className="w-full text-[28px] font-semibold leading-[35px] text-[var(--text-heading)] lg:text-[26.0741px] lg:font-bold lg:leading-[33px] 2xl:text-[44px] 2xl:leading-[55px]">
          {heading}
        </h2>
        <p className="w-full text-sm font-normal leading-[22px] text-[var(--text-soft)] lg:text-[13px] lg:leading-[1.6] 2xl:text-[18px]">
          {subtitle}
        </p>
      </div>

      <div className="flex w-full flex-col items-start lg:flex-row lg:flex-wrap lg:gap-6 2xl:flex-nowrap 2xl:gap-10">
        {steps.map((step, index) => {
          const isLast = index === steps.length - 1;

          return (
            <div
              key={step.number}
              className="flex w-full flex-col items-start gap-4 lg:w-[calc(50%-12px)] lg:gap-[14.22px] 2xl:w-auto 2xl:min-w-0 2xl:flex-1 2xl:gap-6"
            >
              <div className="flex w-full flex-row items-center gap-4 lg:gap-[9.48px] 2xl:gap-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center bg-[var(--color-contact-accent)] lg:h-[28.44px] lg:w-[28.44px] lg:rounded-full 2xl:h-12 2xl:w-12">
                  <span className="text-sm font-bold leading-[18px] text-white lg:text-[13px] lg:leading-4 2xl:text-base 2xl:leading-5">
                    {step.number}
                  </span>
                </div>
                {!isLast && (
                  <span className="hidden h-0 flex-1 border-t-[1.18519px] border-[var(--color-contact-accent)] lg:block 2xl:border-t-2" />
                )}
              </div>

              <div
                className={`flex w-full flex-col items-start gap-1 lg:gap-[4.74px] 2xl:gap-2 ${
                  isLast ? "" : "pb-6 lg:pb-0"
                }`}
              >
                <h3 className="text-lg font-semibold leading-[23px] text-[var(--text-heading)] lg:text-[15px] lg:leading-[19px] 2xl:text-[20px] 2xl:leading-[25px]">
                  {step.title}
                </h3>
                <p className="w-full text-sm font-normal leading-5 text-[var(--text-soft)] lg:text-[13px] lg:leading-[1.5] 2xl:text-[15px]">
                  {step.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
