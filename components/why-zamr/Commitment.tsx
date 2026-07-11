"use client";

import { commitmentCards } from "@/mockData/why-zamr";

export default function Commitment() {
  return (
    <section className="w-full bg-[var(--bg-hero)] px-6 py-16 lg:p-[130px]">
      {/* Frame 1321319060 — inner */}
      <div className="flex flex-col items-start gap-10 lg:gap-[60px]">
        {/* Frame 1321319050 — header */}
        <div className="flex w-full flex-col items-start gap-6 lg:gap-[28px]">
          {/* Frame 118 — section label */}
          <div className="flex flex-row items-center gap-4">
            <span className="text-sm font-medium tracking-[3px] text-white lg:text-base">
              03
            </span>
            <span className="h-px w-12 bg-white sm:w-[104px]" />
            <span className="text-sm font-medium tracking-[3px] uppercase text-white lg:text-base">
              Our Commitment
            </span>
          </div>

          {/* Heading */}
          <h2 className="w-full text-[32px] font-bold leading-[40px] text-white sm:text-[38px] sm:leading-[46px] lg:text-[44px] lg:leading-[55px]">
            Our Commitment to Every Client
          </h2>
        </div>

        {/* Frame 1321319062 — cards row */}
        <div className="flex w-full flex-col items-stretch lg:flex-row">
          {commitmentCards.map((card) => (
            <div
              key={card.title}
              className="flex w-full flex-col items-start border-0 border-b border-l-0 border-white/[0.08] p-6 lg:w-[489.33px] lg:flex-1 lg:border-b lg:border-l"
            >
              {/* Frame 1321319061 */}
              <div className="flex w-full flex-col items-start gap-3 self-stretch">
                <h3 className="w-full text-xl font-semibold leading-[30px] text-white sm:text-2xl lg:text-[24px]">
                  {card.title}
                </h3>
                <p className="w-full text-sm leading-5 text-[var(--text-light-subtle)] sm:text-base lg:text-[16px] lg:leading-[20px]">
                  We engage with your project team to define scope,
                  deliverables, and milestones with precision. Every output is
                  reviewed, verified, and delivered to the highest standard.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
