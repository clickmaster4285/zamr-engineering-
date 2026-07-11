"use client";

import { certifications } from "@/mockData/trusted-accredited";

export default function IndustryCertifications() {
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

        {/* Certifications grid — 2x2 */}
        <div className="grid w-full grid-cols-1 sm:grid-cols-2">
          {certifications.map((cert) => (
            <div
              key={cert.name}
              className="flex flex-col items-start gap-3 border-b border-[rgba(51,51,51,0.08)] p-6"
            >
              {/* Title row with badge */}
              <div className="flex w-full flex-row items-center justify-between">
                <h3 className="text-[22px] font-semibold leading-[130%] text-[#333333] sm:text-[28px]">
                  {cert.name}
                </h3>
                <span className="flex items-center rounded bg-[#EAF0FF] px-[10px] py-[4px] text-[12px] font-semibold leading-[15px] text-[var(--color-primary)]">
                  {cert.badge}
                </span>
              </div>

              {/* Category */}
              <p className="text-base font-medium leading-[23px] text-[var(--color-primary)] sm:text-lg">
                {cert.category}
              </p>

              {/* Description */}
              <p className="w-full text-sm leading-[160%] text-[#697281] sm:text-base lg:text-[18px] lg:leading-[29px]">
                {cert.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
