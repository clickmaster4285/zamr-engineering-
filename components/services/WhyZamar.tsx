"use client";

import { Barlow } from "next/font/google";
import React from "react";

const barlow = Barlow({
  weight: ["700"],
  subsets: ["latin"],
  display: "swap",
});

type Feature = {
  number: string;
  title: string;
  description: string;
};

const features: Feature[] = [
  {
    number: "01",
    title: "Technical Excellence",
    description:
      "Every deliverable is produced by experienced, accredited engineers and subjected to rigorous internal review before issue. No shortcuts. No junior-only teams.",
  },
  {
    number: "02",
    title: "Independence & Integrity",
    description:
      "Our verification and compliance practices operate with complete independence from design. We report what we find — not what clients want to hear.",
  },
  {
    number: "03",
    title: "Government Expertise",
    description:
      "Deep experience working within TfNSW, RMS, and Infrastructure NSW frameworks. We know the standards, the approval processes, and the people.",
  },
  {
    number: "04",
    title: "End-to-End Delivery",
    description:
      "From initial feasibility to as-built certification, we can resource the full project lifecycle — eliminating the gaps between consultant handovers.",
  },
];

export default function WhyZamr() {
  return (
    <section className="w-full bg-[var(--bg-section)] px-6 py-16 lg:p-[130px]">
      <div className="mx-auto flex max-w-[1468px] flex-col gap-[60px]">
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
          {features.map((feature) => (
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
