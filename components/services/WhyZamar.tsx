"use client";

import { Barlow } from "next/font/google";
import React from "react";
import { whyZamrFeatures } from "@/mockData/services";

const barlow = Barlow({
  weight: ["700"],
  subsets: ["latin"],
  display: "swap",
});

export default function WhyZamr() {
  return (
    <section className="w-full bg-[var(--bg-section)] px-6 py-16 lg:p-[130px]">
      <div className="flex flex-col gap-[60px]">
        {/* Header */}
        <div className="flex flex-col gap-7">
          {/* Section label */}
          <div className="flex flex-row items-center gap-4">
            <span className="text-sm font-medium tracking-[3px] text-[var(--color-primary)] lg:text-base">
              02
            </span>
            <span className="h-px w-12 bg-[var(--text-dark)] sm:w-[104px]" />
            <span className="text-sm font-medium tracking-[3px] uppercase text-[var(--text-dark)] lg:text-base">
              WHY ZAMR
            </span>
          </div>
          <h2 className="text-[36px] font-bold leading-[44px] text-[var(--text-heading)] sm:text-[40px] sm:leading-[50px] lg:text-[44px] lg:leading-[55px]">
            What sets us apart from the competition.
          </h2>
        </div>

        {/* Cards row */}
        <div className="flex flex-col gap-4 lg:flex-row lg:gap-4">
          {whyZamrFeatures.map((feature) => (
            <div
              key={feature.number}
              className="flex flex-1 flex-col border px-5 py-6 lg:px-7 lg:py-7"
              style={{
                background: "var(--bg-card)",
                borderColor: "color-mix(in srgb, var(--color-primary) 10%, transparent)",
              }}
            >
              {/* Red accent line */}
              <span
                className="h-[2px] w-6 shrink-0"
                style={{ background: "var(--color-primary)" }}
              />

              {/* Number */}
              <span
                className="pt-6 text-[9px] font-bold leading-[14px] tracking-[1.8px]"
                style={{
                  fontFamily: barlow.style.fontFamily,
                  color: "color-mix(in srgb, var(--color-primary) 45%, transparent)",
                }}
              >
                {feature.number}
              </span>

              {/* Title */}
              <h3 className="pt-[10px] text-[20px] font-medium leading-[25px] text-[var(--text-heading)]">
                {feature.title}
              </h3>

              {/* Description */}
              <p
                className="pt-[10px] text-[13.5px] leading-[23px]"
                style={{ color: "var(--color-text-soft)" }}
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
