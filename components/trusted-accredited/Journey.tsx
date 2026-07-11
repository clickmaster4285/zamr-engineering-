"use client";

import { journeyMilestones } from "@/mockData/trusted-accredited";

export default function Journey() {
  return (
    <section className="w-full bg-white px-6 py-16 lg:px-[130px] lg:py-32.5">
      <div>
        {/* Header */}
        <div className="flex w-full flex-col gap-6 lg:w-[481px] lg:gap-[30px]">
          <div className="flex flex-row items-center gap-4">
            <span className="text-sm font-medium tracking-[3px] text-[var(--color-primary)] lg:text-base">
              04
            </span>
            <span className="h-px w-12 bg-[var(--text-dark)] sm:w-[104px]" />
            <span className="text-sm font-medium tracking-[3px] uppercase text-[var(--text-dark)] lg:text-base">
              JOURNEY
            </span>
          </div>
          <h2 className="text-[36px] font-bold leading-[44px] text-[var(--text-dark)] sm:text-[44px] sm:leading-[55px] lg:text-[56px] lg:leading-[71px]">
            Our Journey Towards Excellence
          </h2>
        </div>

        {/* Timeline milestones */}
        <div className="mt-8 flex flex-col border-t border-[var(--border-section)] lg:mt-[50px]">
          {journeyMilestones.map((milestone) => (
            <div
              key={milestone.year}
              className="group relative flex cursor-pointer flex-col gap-3 border-b border-[var(--border-section)] bg-white px-6 py-6 transition-colors duration-300 hover:bg-[var(--bg-hover)] active:bg-[var(--bg-hover)] sm:px-10 sm:py-8 lg:flex-row lg:items-center lg:h-[164px] lg:py-0 lg:px-[50px]"
            >
              {/* Accent bar — slides up from bottom on hover */}
              <span className="absolute left-0 bottom-0 h-0 w-[4px] bg-[var(--color-secondary)] transition-all duration-300 group-hover:h-full group-active:h-full" />

              {/* Year */}
              <span className="w-[50px] text-sm font-medium tracking-[3px] text-[var(--text-dark)] sm:w-[60px] lg:w-[80px] lg:text-base">
                {milestone.year}
              </span>

              {/* Title */}
              <h3 className="text-lg font-semibold leading-[23px] text-[var(--text-dark)] sm:text-[22px] sm:leading-[28px] lg:ml-[100px] lg:min-w-[224px] lg:text-[28px] lg:leading-[35px]">
                {milestone.title}
              </h3>

              {/* Description */}
              <p className="mt-2 block w-full text-sm leading-[23px] text-[var(--text-paragraph)] sm:text-base lg:mt-0 lg:ml-[110px] lg:flex-1 lg:text-[18px]">
                {milestone.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
