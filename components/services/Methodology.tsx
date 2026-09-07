"use client";

import React from "react";
import { methodologySection } from "@/mockData/services";

export default function Methodology() {
  const { sectionNumber, sectionLabel, heading, subtitle, steps } =
    methodologySection;

  return (
    <section className="w-full bg-white px-6 py-16 lg:px-[130px] lg:py-[130px]">
      <div className="flex flex-col gap-[60px]">
        {/* Header */}
        <div className="flex flex-col gap-[28px]">
          {/* Section label */}
          <div className="flex flex-row items-center gap-4">
            <span className="text-base font-medium tracking-[3px] text-[var(--color-contact-accent)]">
              {sectionNumber}
            </span>
            <span className="h-px w-[104px] bg-[var(--text-dark)]" />
            <span className="text-base font-medium tracking-[3px] uppercase text-[var(--text-dark)]">
              {sectionLabel}
            </span>
          </div>

          {/* Heading + subtitle */}
          <div className="flex flex-col gap-3">
            <h2 className="text-[36px] font-bold leading-[44px] text-[var(--text-heading)] sm:text-[44px] sm:leading-[55px] lg:text-[48px] lg:leading-[60px]">
              {heading}
            </h2>
            <p
              className="text-[16px] leading-[26px] lg:text-[18px] lg:leading-[29px]"
              style={{ color: "var(--text-soft)" }}
            >
              {subtitle}
            </p>
          </div>
        </div>

        {/* Steps Tracker */}
        <div className="flex flex-col gap-10 lg:flex-row lg:gap-10">
          {steps.map((step, idx) => {
            const isLast = idx === steps.length - 1;
            return (
              <div
                key={step.number}
                className="flex flex-1 flex-col gap-6"
              >
                {/* Step head: circle + connector line */}
                <div className="flex flex-row items-center gap-4">
                  <div
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full"
                    style={{ background: "var(--color-contact-accent)" }}
                  >
                    <span className="text-base font-bold leading-5 text-white">
                      {step.number}
                    </span>
                  </div>
                  {!isLast && (
                    <span
                      className="h-0 flex-1"
                      style={{ borderTop: "2px solid var(--color-contact-accent)" }}
                    />
                  )}
                </div>

                {/* Step body */}
                <div className="flex flex-col gap-2">
                  <h3 className="text-[20px] font-semibold leading-[25px] text-[var(--text-heading)]">
                    {step.title}
                  </h3>
                  <p
                    className="text-[15px] leading-[22px]"
                    style={{ color: "var(--text-soft)" }}
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}