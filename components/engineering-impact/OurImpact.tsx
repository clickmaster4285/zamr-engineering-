"use client";

import { ourImpactItems } from "@/mockData/engineering-impact";

export default function OurImpact() {
  return (
    <section className="w-full bg-[#07183D] px-6 py-16 lg:p-[130px]">
      <div className="flex w-full flex-col gap-[60px]">
        {/* Header */}
        <div className="flex w-full flex-col gap-7">
          <div className="flex flex-row items-center gap-4">
            <span className="text-sm font-medium tracking-[3px] text-white lg:text-base">05</span>
            <span className="h-px w-[104px] bg-white" />
            <span className="text-sm font-medium tracking-[3px] uppercase text-white lg:text-base">Impact</span>
          </div>
          <h2 className="w-full text-[36px] font-bold leading-[44px] text-white sm:text-[44px] sm:leading-[55px]">
            Every Project Leaves a Lasting Impact
          </h2>
        </div>

        {/* 3-column grid — first item no left border, rest have left border */}
        <div className="grid w-full grid-cols-1 sm:grid-cols-3">
          {ourImpactItems.map((item, index) => (
            <div
              key={item.title}
              className={`flex flex-col items-start gap-3 p-6 sm:border-l sm:border-[rgba(255,255,255,0.08)] ${
                index === 0 ? "sm:border-l-0" : ""
              }`}
            >
              <h3 className="text-[20px] font-semibold leading-[30px] text-white sm:text-[24px]">{item.title}</h3>
              <p className="w-full text-sm leading-[20px] text-[#B3B3B3] sm:text-base">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
