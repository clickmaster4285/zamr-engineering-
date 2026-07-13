"use client";

import { trackRecordStats } from "@/mockData/engineering-impact";

export default function TrackRecord() {
  return (
    <section className="w-full bg-[var(--bg-hero)] px-6 py-16 lg:p-[130px]">
      <div className="flex w-full flex-col gap-[60px]">
        {/* Section label */}
        <div className="flex flex-row items-center gap-4">
          <span className="text-sm font-medium tracking-[3px] text-white lg:text-base">07</span>
          <span className="h-px w-[104px] bg-white" />
          <span className="text-sm font-medium tracking-[3px] uppercase text-white lg:text-base">
            Our Track Record
          </span>
        </div>

        {/* Stats row */}
        <div className="flex w-full flex-wrap justify-between gap-x-8 gap-y-10">
          {trackRecordStats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-start gap-1"
            >
              <div className="flex flex-row items-start gap-2">
                <span className="text-[48px] font-normal leading-[60px] text-white sm:text-[60px] sm:leading-[76px] lg:text-[72px] lg:leading-[91px]">
                  {stat.value}
                </span>
                {stat.suffix && (
                  <span className="mt-1 text-[28px] font-light leading-[36px] text-white sm:mt-2 sm:text-[34px] sm:leading-[42px] lg:mt-3 lg:text-[42px] lg:leading-[50px]">
                    {stat.suffix}
                  </span>
                )}
              </div>
              <span className="text-left text-xs font-light leading-[20px] text-white sm:text-sm lg:text-base">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
