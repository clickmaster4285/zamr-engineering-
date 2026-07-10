"use client";

import { howWeWorkRows } from "@/mockData/why-zamr";

export default function HowWeWork() {
  return (
    <section className="w-full bg-white px-6 py-16 lg:p-[130px]">
      <div className="flex flex-col items-start gap-10 lg:gap-[80px]">
        {/* Frame 120 — header */}
        <div className="flex w-full max-w-[853px] flex-col items-start gap-6 lg:gap-[30px]">
          {/* Frame 118 — section label */}
          <div className="flex flex-row items-center gap-4">
            <span className="text-sm font-medium tracking-[3px] text-[var(--color-blue-accent)] lg:text-base">
              01
            </span>
            <span className="h-px w-12 bg-[var(--text-dark)] sm:w-[104px]" />
            <span className="text-sm font-medium tracking-[3px] uppercase text-[var(--text-dark)] lg:text-base">
              How We Work
            </span>
          </div>

          {/* Heading */}
          <h2 className="w-full text-[36px] font-bold leading-[44px] text-[var(--text-dark)] sm:text-[44px] sm:leading-[52px] lg:text-[56px] lg:leading-[71px]">
            The Difference Is How We Deliver
          </h2>
        </div>

        {/* Frame 1321318994 — rows */}
        <div className="flex w-full flex-col items-start">
          {howWeWorkRows.map((row, index) => (
            <div
              key={row.title}
              className="group relative flex w-full flex-col gap-2 border-t border-[var(--border-section)] px-4 py-6 sm:flex-row sm:items-center sm:gap-0 sm:px-6 sm:py-8 lg:h-[120px] lg:px-[50px] lg:py-0 transition-colors duration-300 hover:bg-[var(--bg-hover)] bg-white"
            >
              {/* Accent border — slides up from bottom on hover (matches Services.tsx pattern) */}
              <span className="absolute left-0 bottom-0 w-[4px] h-0 bg-[var(--color-secondary)] transition-all duration-300 group-hover:h-full" />

              {/* Title */}
              <h3 className="w-full text-xl font-semibold leading-[28px] text-[var(--text-dark)] sm:w-[150px] sm:shrink-0 lg:w-[279px] lg:text-[28px] lg:leading-[35px]">
                {row.title}
              </h3>

              {/* Description */}
              <p className="w-full text-sm leading-5 text-[var(--text-dark)] sm:pl-6 sm:text-base lg:pl-[115px] lg:text-[18px] lg:leading-[23px]">
                {row.description}
              </p>
            </div>
          ))}
          {/* Bottom divider */}
          <div className="h-px w-full border-t border-[var(--border-section)]" />
        </div>
      </div>
    </section>
  );
}
