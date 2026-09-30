"use client";

import { commitmentCards, commitmentSection } from "@/mockData/why-zamr";

export default function Commitment() {
  return (
    <section className="flex w-full flex-col items-start bg-[var(--bg-section)] px-5 py-[60px] lg:p-[77.037px] 2xl:p-[130px]">
      <div className="flex w-full flex-col items-start gap-8 lg:gap-[35.56px] 2xl:gap-[60px]">
        <div className="flex w-full flex-col items-start gap-3 lg:gap-[16.59px] 2xl:gap-7">
          <div className="flex flex-row items-center gap-3 lg:gap-[9.48px] 2xl:gap-4">
            <span className="shrink-0 text-sm font-medium leading-[18px] lg:text-[13px] lg:leading-4 lg:tracking-[1.77778px] lg:text-[var(--text-heading)] 2xl:text-base 2xl:leading-5 2xl:tracking-[3px]">
              {commitmentSection.number}
            </span>
            <span className="h-px w-10 shrink-0 bg-[var(--text-heading)] lg:w-[61.63px] 2xl:w-[104px]" />
            <span className="text-sm font-medium leading-[18px] tracking-[3px] uppercase text-[var(--text-heading)] lg:text-[13px] lg:leading-4 lg:tracking-[1.77778px] 2xl:text-base 2xl:leading-5 2xl:tracking-[3px]">
              {commitmentSection.label}
            </span>
          </div>

          <h2 className="w-full text-[28px] font-semibold leading-[35px] text-[var(--text-heading)] lg:text-[26.0741px] lg:font-bold lg:leading-[33px] 2xl:text-[44px] 2xl:leading-[55px]">
            {commitmentSection.heading}
          </h2>
        </div>

        <div className="flex w-full flex-col items-start gap-4 lg:flex-row lg:flex-wrap lg:gap-0 lg:gap-y-4 2xl:flex-nowrap 2xl:gap-y-0">
          {commitmentCards.map((card, index) => (
            <div
              key={card.title}
              className={`flex w-full flex-col items-start border-b border-[var(--border-section)] p-5 lg:w-1/2 lg:p-[14.2222px] 2xl:w-auto 2xl:flex-1 2xl:p-6 ${
                index > 0 ? "lg:border-l" : ""
              }`}
            >
              <div className="flex w-full flex-col items-start gap-2 lg:gap-[7.11px] 2xl:gap-3">
                <h3 className="w-full text-[20px] font-semibold leading-[25px] text-[var(--text-heading)] lg:text-lg lg:leading-[23px] 2xl:text-2xl 2xl:leading-[30px]">
                  {card.title}
                </h3>
                <p className="w-full text-sm font-normal leading-5 text-[var(--text-muted)] lg:text-[13px] lg:leading-4 lg:text-[var(--text-light-subtle)] 2xl:text-base 2xl:leading-5">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
