"use client";

import { trackRecordStats } from "@/mockData/why-zamr";

export default function TrackRecord() {
  return (
    <section className="w-full bg-[var(--bg-hero)] px-6 py-16 lg:p-[130px]">
      <div className="flex flex-col items-start gap-10 lg:gap-[60px]">
        {/* Frame 118 — section label */}
        <div className="flex flex-row items-center gap-4">
          <span className="text-sm font-medium tracking-[3px] text-white lg:text-base">
            05
          </span>
          <span className="h-px w-12 bg-white sm:w-[104px]" />
          <span className="text-sm font-medium tracking-[3px] uppercase text-white lg:text-base">
            Our Track Record
          </span>
        </div>

        {/* Stats row */}
        <div className="flex w-full flex-col items-start gap-8 sm:flex-row sm:items-center sm:justify-between sm:gap-[185px]">
          {trackRecordStats.map((stat) => {
            const alignClass = {
              start: "items-start",
              center: "items-center",
              end: "items-end",
            }[stat.align];

            return (
              <div
                key={stat.label}
                className={`flex w-full flex-col ${alignClass} gap-[2px] sm:flex-1 sm:mx-auto`}
              >
                <div className="flex flex-row items-start gap-2">
                  <span className="text-[48px] font-normal leading-[60px] text-white sm:text-[60px] sm:leading-[76px] lg:text-[72px] lg:leading-[91px]">
                    {stat.value}
                  </span>
                  {stat.suffix && (
                    <span className="text-[28px] font-light leading-[34px] text-white sm:text-[36px] sm:leading-[42px] lg:text-[42px] lg:leading-[50px]">
                      {stat.suffix}
                    </span>
                  )}
                </div>
                <span className="text-sm font-light leading-5 text-white sm:text-base">
                  {stat.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
