"use client";

import { approachSteps } from "@/mockData/engineering-impact";

export default function OurApproach() {
  return (
    <section className="w-full bg-white px-6 py-16 lg:px-[130px] lg:py-32.5">
      <div>
        {/* Header */}
        <div className="flex w-full flex-col gap-6 lg:gap-[30px]">
          <div className="flex flex-row items-center gap-4">
            <span className="text-sm font-medium tracking-[3px] text-[var(--color-primary)] lg:text-base">
              04
            </span>
            <span className="h-px w-12 bg-[var(--text-dark)] sm:w-[104px]" />
            <span className="text-sm font-medium tracking-[3px] uppercase text-[var(--text-dark)] lg:text-base">
              OUR APPROACH
            </span>
          </div>
          <h2 className="text-[36px] font-bold leading-[44px] text-[var(--text-dark)] sm:text-[44px] sm:leading-[55px] lg:text-[56px] lg:leading-[71px]">
            Our Journey Towards Excellence
          </h2>
        </div>

        {/* Timeline steps */}
        <div className="mt-8 flex flex-col border-t border-[var(--border-section)] lg:mt-20">
          {approachSteps.map((step) => (
            <div
              key={step.number}
              className="group relative flex cursor-pointer flex-col gap-3 border-b border-[var(--border-section)] bg-white px-6 py-6 transition-colors duration-300 hover:bg-[var(--bg-hover)] active:bg-[var(--bg-hover)] lg:h-[164px] lg:flex-row lg:items-center lg:px-[50px] lg:py-0"
            >
              {/* Accent border */}
              <span className="absolute bottom-0 left-0 h-0 w-[4px] bg-[var(--color-secondary)] transition-all duration-300 group-hover:h-full group-active:h-full" />

              {/* Step number */}
              <span className="w-20 shrink-0 text-sm font-medium tracking-[3px] text-[var(--text-dark)] lg:text-base">
                {step.number}
              </span>

              {/* Title */}
              <h3 className="text-xl font-semibold leading-[26px] text-[var(--text-dark)] lg:ml-[40px] lg:min-w-[213px] lg:text-[28px] lg:leading-[35px]">
                {step.title}
              </h3>

              {/* Description */}
              <p className="mt-2 block w-full text-sm leading-[23px] text-[var(--text-paragraph)] sm:text-base lg:ml-[121px] lg:mt-0 lg:flex-1 lg:text-[18px]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
