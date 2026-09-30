"use client";

import { trackRecordSection, trackRecordStats } from "@/mockData/why-zamr";

export default function TrackRecord() {
  return (
    <section className="flex w-full flex-col items-start bg-[var(--color-primary)] px-5 py-[60px] lg:p-[77.037px] 2xl:p-[130px]">
      <div className="flex w-full flex-col items-start gap-10 lg:gap-[35.56px] 2xl:gap-[60px]">
        <div className="flex flex-row items-center gap-3 lg:gap-[9.48px] 2xl:gap-4">
          <span className="shrink-0 text-sm font-medium leading-[18px] text-white lg:text-[13px] lg:leading-4 lg:tracking-[1.77778px] 2xl:text-base 2xl:leading-5 2xl:tracking-[3px]">
            {trackRecordSection.number}
          </span>
          <span className="h-px w-10 shrink-0 bg-white lg:w-[61.63px] 2xl:w-[104px]" />
          <span className="text-sm font-medium leading-[18px] tracking-[3px] uppercase text-white lg:text-[13px] lg:leading-4 lg:tracking-[1.77778px] 2xl:text-base 2xl:leading-5 2xl:tracking-[3px]">
            {trackRecordSection.label}
          </span>
        </div>

        <div className="flex w-full flex-col items-start gap-8 lg:flex-row lg:items-center lg:gap-[109.63px] 2xl:gap-[185px]">
          {trackRecordStats.map((stat) => (
            <div
              key={stat.label}
              className="flex w-full flex-col items-start gap-1 lg:flex-1 lg:gap-[1.19px] 2xl:gap-0.5"
            >
              <div className="flex flex-row items-baseline gap-1 lg:items-start lg:gap-[4.74px] 2xl:gap-2">
                <span className="text-[56px] font-bold leading-[71px] text-white lg:text-[42.6667px] lg:font-normal lg:leading-[54px] 2xl:text-[72px] 2xl:leading-[91px]">
                  {stat.value}
                </span>
                {stat.suffix ? (
                  <span className="text-[32px] font-light leading-[38px] text-white lg:text-[24.8889px] lg:leading-[30px] 2xl:text-[42px] 2xl:leading-[50px]">
                    {stat.suffix}
                  </span>
                ) : null}
              </div>
              <span className="text-[13px] font-normal leading-4 tracking-[1px] text-[var(--text-light-subtle)] lg:tracking-normal lg:font-light lg:text-white 2xl:text-base 2xl:leading-5">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
