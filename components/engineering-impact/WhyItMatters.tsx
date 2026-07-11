"use client";

import { Award, ShieldCheck } from "lucide-react";
import { whyItMattersItems } from "@/mockData/engineering-impact";

export default function WhyItMatters() {
  return (
    <section className="w-full bg-[#07183D] px-6 py-16 lg:p-[130px]">
      <div className="flex w-full flex-col gap-[60px]">
        {/* Header */}
        <div className="flex w-full flex-col gap-7">
          <div className="flex flex-row items-center gap-4">
            <span className="text-sm font-medium tracking-[3px] text-white lg:text-base">03</span>
            <span className="h-px w-[104px] bg-white" />
            <span className="text-sm font-medium tracking-[3px] uppercase text-white lg:text-base">
              Why Accreditation Matters
            </span>
          </div>
          <h2 className="max-w-[441px] text-[36px] font-bold leading-[44px] text-white sm:text-[44px] sm:leading-[55px]">
            Why Accreditation Matters
          </h2>
        </div>

        {/* Grid — 2×2 */}
        <div className="grid w-full grid-cols-1 sm:grid-cols-2">
          {whyItMattersItems.map((item, index) => (
            <div
              key={item.title}
              className={`flex flex-col items-start gap-3 border-0 border-b border-[rgba(255,255,255,0.08)] lg:border-l lg:border-[rgba(255,255,255,0.08)] ${
                index % 2 === 0 ? "lg:border-l-0" : ""
              } p-6`}
            >
              {item.icon === "award" ? (
                <Award size={32} strokeWidth={1.5} className="text-white" />
              ) : (
                <ShieldCheck size={32} strokeWidth={1.5} className="text-white" />
              )}
              <h3 className="text-[20px] font-semibold leading-[30px] text-white sm:text-[24px]">{item.title}</h3>
              <p className="w-full text-sm leading-[20px] text-[#B3B3B3] sm:text-base">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
