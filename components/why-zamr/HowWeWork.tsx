"use client";

import { howWeWorkRows, howWeWorkSection } from "@/mockData/why-zamr";

export default function HowWeWork() {
  return (
    <section className="flex w-full flex-col items-start bg-white px-5 py-[60px] lg:justify-center lg:p-[77.037px] 2xl:p-[130px]">
      <div className="flex w-full flex-col items-start gap-8 lg:gap-[47.41px] 2xl:gap-20">
        <div className="flex w-full flex-col items-start gap-3 lg:w-auto lg:gap-[17.78px] 2xl:gap-[30px]">
          <div className="flex flex-row items-center gap-3 lg:gap-[9.48px] 2xl:gap-4">
            <span className="shrink-0 text-sm font-medium leading-[18px] lg:text-[13px] lg:leading-4 lg:tracking-[1.77778px] 2xl:text-base 2xl:leading-5 2xl:tracking-[3px]">
              {howWeWorkSection.number}
            </span>
            <span className="h-px w-10 shrink-0 bg-[var(--text-heading)] lg:w-[61.63px] 2xl:w-[104px]" />
            <span className="text-sm font-medium leading-[18px] tracking-[3px] uppercase text-[var(--text-heading)] lg:text-[13px] lg:leading-4 lg:tracking-[1.77778px] 2xl:text-base 2xl:leading-5 2xl:tracking-[3px]">
              {howWeWorkSection.label}
            </span>
          </div>

          <h2 className="w-full text-[28px] font-semibold leading-[35px] text-[var(--text-heading)] lg:text-[26.0741px] lg:font-bold lg:leading-[33px] 2xl:text-[44px] 2xl:leading-[55px]">
            {howWeWorkSection.heading}
          </h2>
        </div>

        <div className="flex w-full flex-col items-start gap-4 lg:gap-0">
          {howWeWorkRows.map((row, index) => (
            <div
              key={row.title}
              className={`group relative flex w-full flex-col gap-2.5 border-t border-[var(--border-section)] p-4 transition-colors duration-300 hover:bg-[var(--bg-hover)] lg:h-24 lg:flex-row lg:items-center lg:gap-0 lg:p-0 lg:pl-[29.63px] 2xl:h-[120px] 2xl:pl-[50px] ${
                index === 0
                  ? "border-t-2 bg-[var(--bg-section)] lg:border-t-[0.592593px] lg:bg-[var(--bg-hover)] 2xl:border-t 2xl:bg-[var(--bg-hover)]"
                  : "bg-white"
              } ${index === howWeWorkRows.length - 1 ? "border-b lg:border-b-0" : ""}`}
            >
              <span className="absolute bottom-0 left-0 h-0 w-1 bg-[var(--color-secondary)] transition-all duration-300 group-hover:h-full lg:w-[2.37037px] 2xl:w-1" />

              <h3 className="w-full text-lg font-semibold leading-[23px] text-[var(--text-heading)] lg:w-[168.89px] lg:shrink-0 2xl:w-[331px] 2xl:text-[28px] 2xl:leading-[35px]">
                {row.title}
              </h3>

              <p className="w-full text-sm font-normal leading-5 text-[var(--text-heading)] lg:absolute lg:left-[263.11px] lg:top-1/2 lg:w-[528px] lg:-translate-y-1/2 lg:text-[13px] lg:leading-4 2xl:left-[444px] 2xl:w-[924px] 2xl:text-[18px] 2xl:leading-[23px]">
                {row.description}
              </p>
            </div>
          ))}
          <div className="hidden h-px w-full bg-[var(--border-section)] lg:block" />
        </div>
      </div>
    </section>
  );
}
