"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { whyZamrPoints, whyZamrSection } from "@/mockData/landing";

export default function WhyZamr() {
  const { sectionNumber, sectionLabel, heading, ctaLabel, ctaHref } =
    whyZamrSection;

  return (
    <section className="relative w-full isolate bg-white px-[30px] py-[30px] lg:px-[77px] lg:py-[77px] 2xl:p-[130px]">
      <div className="flex w-full flex-col gap-[18px] lg:gap-[47px] 2xl:gap-20">
        {/* Header */}
        <div className="flex w-full flex-col gap-[7px] lg:gap-[18px] 2xl:gap-[30px]">
          <div className="flex w-full flex-row items-start justify-between gap-3 lg:items-center">
            <div className="flex min-w-0 flex-1 flex-row items-center gap-[4px] lg:gap-[9.5px] 2xl:gap-4">
              <span className="shrink-0 text-sm font-medium leading-[18px] tracking-[0.68px] text-[var(--color-primary)] lg:text-[13px] lg:leading-4 lg:tracking-[1.78px] 2xl:text-base 2xl:leading-5 2xl:tracking-[3px]">
                {sectionNumber}
              </span>
              <span className="h-px w-[24px] shrink-0 bg-[var(--text-heading)] lg:w-[62px] 2xl:w-[104px]" />
              <span className="text-[12px] font-medium leading-[15px] tracking-[3px] uppercase text-[var(--text-section-label)]">
                {sectionLabel}
              </span>
            </div>

            {/* Learn More */}
            <Link
              href={ctaHref}
              className="group inline-flex shrink-0 items-center gap-1.5 text-sm font-medium leading-[18px] tracking-[0.68px] uppercase text-[var(--color-primary)] transition-colors duration-300 hover:text-[var(--color-secondary)] lg:gap-[5px] lg:text-[13px] lg:leading-4 lg:tracking-[1.78px] 2xl:gap-2 2xl:text-base 2xl:leading-5 2xl:tracking-[3px]"
            >
              {ctaLabel}
              <span className="transition-transform duration-300 group-hover:translate-x-[5px]">
                <ArrowRight
                  className="h-4 w-4 lg:h-[14px] lg:w-[14px] 2xl:h-6 2xl:w-6"
                  strokeWidth={1.25}
                />
              </span>
            </Link>
          </div>

          <h2 className="max-w-[898px] text-[28px] font-bold leading-[35px] text-[var(--text-heading)] lg:text-[33px] lg:leading-[42px] 2xl:text-[56px] 2xl:leading-[71px]">
            {heading}
          </h2>
        </div>

        {/* Rows */}
        <div className="flex w-full flex-col border-t border-[var(--border-section)]">
          {whyZamrPoints.map((point) => (
            <div
              key={point.title}
              className="group relative flex w-full flex-col gap-3 border-b border-[var(--border-section)] bg-white px-4 py-5 hover:bg-[var(--bg-hover)] lg:h-[71px] lg:flex-row lg:items-center lg:gap-0 lg:px-[30px] lg:py-0 2xl:h-[120px] 2xl:px-[50px]"
            >
              <span className="absolute bottom-0 left-0 h-0 w-px bg-[var(--color-secondary)] transition-all duration-300 group-hover:h-full lg:w-[2.4px] 2xl:w-1" />

              <h3 className="text-xl font-semibold leading-[25px] text-[var(--text-heading)] lg:w-[234px] lg:shrink-0 lg:text-lg lg:leading-[23px] 2xl:w-[394px] 2xl:text-[28px] 2xl:leading-[35px]">
                {point.title}
              </h3>
              <p className="text-sm leading-[18px] text-[var(--text-heading)] [font-feature-settings:'liga'_off] lg:min-w-0 lg:flex-1 lg:text-[13px] lg:leading-4 2xl:text-lg 2xl:leading-[23px]">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
