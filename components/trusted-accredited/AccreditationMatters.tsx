"use client";

import { Award, ShieldCheck } from "lucide-react";
import { accreditationItems } from "@/mockData/trusted-accredited";

export default function AccreditationMatters() {
  return (
    <section className="w-full bg-[var(--bg-hero)] px-6 py-16 lg:p-[130px]">
      <div className="flex w-full flex-col gap-[60px]">
        {/* Header */}
        <div className="flex w-full flex-col gap-7">
          <div className="flex flex-row items-center gap-4">
            <span className="text-sm font-medium tracking-[3px] text-white lg:text-base">
              03
            </span>
            <span className="h-px w-[104px] bg-white" />
            <span className="text-sm font-medium tracking-[3px] uppercase text-white lg:text-base">
              Why Accreditation Matters
            </span>
          </div>

          <h2 className="max-w-[441px] text-[36px] font-bold leading-[44px] text-white sm:text-[44px] sm:leading-[55px]">
            Why Accreditation Matters
          </h2>
        </div>

        {/* Accreditation items — 2x2 grid */}
        <div className="grid w-full grid-cols-1 sm:grid-cols-2 border-0 border-l border-[var(--border-dark)]">
          {accreditationItems.map((item, index) => (
            <div
              key={item.title}
              className={`flex flex-col items-start gap-3 border-0 border-b border-[var(--border-dark)] lg:border-l lg:border-[var(--border-dark)] ${
                index % 2 === 0 ? "lg:border-l-0" : ""
              } p-6`}
            >
              {item.icon === "award" ? (
                <Award size={32} strokeWidth={1.5} className="text-white" />
              ) : (
                <ShieldCheck size={32} strokeWidth={1.5} className="text-white" />
              )}

              <h3 className="text-[20px] font-semibold leading-[30px] text-white sm:text-[24px]">
                {item.title}
              </h3>

              <p className="w-full text-sm leading-[20px] text-[var(--text-light-subtle)] sm:text-base">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
