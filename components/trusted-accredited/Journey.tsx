"use client";

import { journeyMilestones } from "@/mockData/trusted-accredited";

export default function Journey() {
  return (
    <section className="w-full bg-white px-6 py-16 lg:p-[130px]">
      <div className="flex w-full flex-col gap-20">
        {/* Header */}
        <div className="flex w-full max-w-[830px] flex-col gap-6 sm:gap-8 lg:gap-[30px]">
          <div className="flex flex-row items-center gap-3 sm:gap-4">
            <span className="text-sm font-medium tracking-[3px] text-[var(--color-primary)] lg:text-base">
              04
            </span>
            <span className="h-px w-[104px] bg-black" />
            <span className="text-sm font-medium tracking-[3px] uppercase text-[#333333] lg:text-base">
              Our Journey
            </span>
          </div>

          <h2 className="text-[28px] font-bold leading-[36px] text-[#333333] sm:text-[36px] sm:leading-[44px] lg:text-[56px] lg:leading-[71px]">
            Our Journey Towards Excellence
          </h2>
        </div>

        {/* Timeline milestones */}
        <div className="flex w-full flex-col">
          {journeyMilestones.map((milestone, index) => (
            <div
              key={milestone.year}
              className={`relative flex w-full flex-row items-center px-6 py-8 sm:px-10 sm:py-10 lg:px-[50px] lg:py-[62px] ${
                index === 0
                  ? "bg-[#F9FAFC] border-t border-[#EAEAEA] border-b border-[#EAEAEA]"
                  : "bg-white border-b border-[#EAEAEA]"
              }`}
            >
              {/* Red accent bar on the left */}
              <div className="absolute left-0 top-0 h-full w-[4px] bg-[#CE1A00]" />

              {/* Year */}
              <span className="w-[50px] text-sm font-medium tracking-[3px] text-[#333333] sm:w-[60px] lg:w-[80px] lg:text-base">
                {milestone.year}
              </span>

              {/* Title */}
              <h3 className="text-lg font-semibold leading-[23px] text-[#333333] sm:text-[22px] sm:leading-[28px] lg:text-[28px] lg:leading-[35px] lg:min-w-[224px]">
                {milestone.title}
              </h3>

              {/* Description */}
              <p className="mt-2 block w-full text-sm leading-[23px] text-[#333333] lg:mt-0 lg:w-auto lg:text-[18px] lg:ml-[110px]">
                {milestone.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
