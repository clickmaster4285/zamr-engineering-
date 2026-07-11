"use client";

import { processItems } from "@/mockData/why-zamr";

export default function Process() {
  return (
    <section className="w-full bg-white px-6 py-16 lg:p-[130px]">
      <div className="flex flex-col items-start gap-10 lg:gap-[80px]">
        {/* Frame 120 — header */}
        <div className="flex w-full max-w-[361px] flex-col items-start gap-6 lg:gap-[30px]">
          {/* Frame 118 — section label */}
          <div className="flex flex-row items-center gap-4">
            <span className="text-sm font-medium tracking-[3px] text-[var(--color-blue-accent)] lg:text-base">
              04
            </span>
            <span className="h-px w-12 bg-[var(--text-dark)] sm:w-[104px]" />
            <span className="text-sm font-medium tracking-[3px] uppercase text-[var(--text-dark)] lg:text-base">
              Our Process
            </span>
          </div>

          {/* Heading */}
          <h2 className="w-full text-[36px] font-bold leading-[44px] text-[var(--text-dark)] sm:text-[44px] sm:leading-[52px] lg:text-[56px] lg:leading-[71px]">
            How We Work
          </h2>
        </div>

        {/* Frame 1321318995 — process rows */}
        <div className="flex w-full flex-col items-start">
          {processItems.map((item, index) => (
            <div
              key={item.number}
              className="group relative flex w-full flex-col gap-2 border-t border-[var(--border-section)] px-4 py-6 sm:flex-row sm:items-center sm:gap-0 sm:px-6 sm:py-8 lg:h-[164px] lg:px-[50px] lg:py-0 transition-colors duration-300 hover:bg-[var(--bg-hover)] bg-white">
              {/* Accent border — slides up from bottom on hover (matches Services.tsx pattern) */}
              <span className="absolute left-0 bottom-0 w-[4px] h-0 bg-[var(--color-secondary)] transition-all duration-300 group-hover:h-full" />

              {/* Number — left:50px in Figma */}
              <span className="w-[22px] shrink-0 text-sm font-medium tracking-[3px] text-[var(--text-dark)] sm:w-[23px] lg:text-base">
                {item.number}
              </span>

              {/* Content area */}
              <div className="flex w-full flex-col gap-1 sm:flex-row sm:items-center sm:pl-[96px] lg:pl-[120px]">
                {/* Title — left:170px in Figma */}
                <h3 className="text-xl font-semibold leading-[28px] text-[var(--text-dark)] sm:w-[150px] lg:text-[28px] lg:leading-[35px]">
                  {item.title}
                </h3>

                {/* Description — left:504px in Figma */}
                <p className="text-sm leading-5 text-[var(--text-dark)] sm:pl-6 sm:text-base lg:pl-[184px] lg:text-[18px] lg:leading-[23px]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
          {/* Bottom divider */}
          <div className="h-px w-full border-t border-[var(--border-section)]" />
        </div>
      </div>
    </section>
  );
}
