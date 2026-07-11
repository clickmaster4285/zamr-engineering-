"use client";

import { impactAreas } from "@/mockData/engineering-impact";

export default function ImpactAreas() {
  return (
    <section className="w-full bg-white px-6 py-16 lg:p-[130px]">
      <div className="flex w-full flex-col gap-[60px]">
        {/* Header */}
        <div className="flex w-full flex-col gap-7">
          <div className="flex flex-row items-center gap-4">
            <span className="text-sm font-medium tracking-[3px] text-[var(--color-primary)] lg:text-base">
              01
            </span>
            <span className="h-px w-[104px] bg-black" />
            <span className="text-sm font-medium tracking-[3px] uppercase text-[#333333] lg:text-base">
              Industry Certifications
            </span>
          </div>

          <h2 className="max-w-[454px] text-[36px] font-bold leading-[44px] text-[#090D15] sm:text-[44px] sm:leading-[55px]">
            Industry Certifications
          </h2>
        </div>

        {/* Impact areas grid — 2×2 */}
        <div className="grid w-full grid-cols-1 sm:grid-cols-2">
          {impactAreas.map((area) => (
            <div
              key={area.title}
              className="flex flex-col items-start gap-3 border-b border-[rgba(51,51,51,0.08)] p-6"
            >
              <h3 className="text-[20px] font-semibold leading-[30px] text-[#333333] sm:text-[24px]">
                {area.title}
              </h3>
              <p className="w-full text-sm leading-[20px] text-[#333333] sm:text-base">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
