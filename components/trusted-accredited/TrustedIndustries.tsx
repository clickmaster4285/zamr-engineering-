"use client";

import { industryItems } from "@/mockData/trusted-accredited";

export default function TrustedIndustries() {
  return (
    <section className="w-full bg-[#07183D] px-6 py-16 lg:p-[130px]">
      <div className="flex w-full flex-col gap-[60px]">
        {/* Header */}
        <div className="flex w-full flex-col gap-7">
          <div className="flex flex-row items-center gap-4">
            <span className="text-sm font-medium tracking-[3px] text-white lg:text-base">
              05
            </span>
            <span className="h-px w-[104px] bg-white" />
            <span className="text-sm font-medium tracking-[3px] uppercase text-white lg:text-base">
              Trusted Across Industries
            </span>
          </div>

          <h2 className="w-full text-[36px] font-bold leading-[44px] text-white sm:text-[44px] sm:leading-[55px]">
            Trusted Across Multiple Industries
          </h2>
        </div>

        {/* Industries grid — 2 rows of 3 */}
        <div className="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {industryItems.map((industry, index) => {
            // Determine border classes based on position
            const isFirstRow = index < 3;
            const isFirstCol = index % 3 === 0;
            const isLastRow = index >= 3;

            return (
              <div
                key={industry.name}
                className={`flex flex-col items-start justify-center p-6 border-b border-[rgba(255,255,255,0.08)] lg:border-l lg:border-[rgba(255,255,255,0.08)] ${
                  isFirstCol ? "lg:border-l-0" : ""
                } ${!isLastRow ? "" : "lg:border-b-0"}`}
              >
                <h3 className="text-[20px] font-semibold leading-[30px] text-white sm:text-[24px]">
                  {industry.name}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
