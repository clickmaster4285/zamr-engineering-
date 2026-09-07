"use client";

import { Barlow } from "next/font/google";
import React from "react";
import { whyZamrSection } from "@/mockData/services";

const barlow = Barlow({
  weight: ["700"],
  subsets: ["latin"],
  display: "swap",
});

export default function WhyZamr() {
  const { sectionNumber, sectionLabel, heading, subtitle, intro, features } =
    whyZamrSection;

  return (
    <section
      className="w-full px-6 py-16 lg:px-[130px] lg:py-[130px]"
      style={{ background: "var(--bg-section)" }}
    >
      <div className="flex flex-col gap-[60px]">
        {/* Header */}
        <div className="flex flex-col gap-[28px]">
          {/* Section label — Frame 118 */}
          <div className="flex flex-row items-center gap-4">
            <span className="text-base font-medium tracking-[3px] text-[var(--color-contact-accent)]">
              {sectionNumber}
            </span>
            <span className="h-px w-[104px] bg-[var(--text-dark)]" />
            <span className="text-base font-medium tracking-[3px] uppercase text-[var(--text-dark)]">
              {sectionLabel}
            </span>
          </div>

          {/* heading-block */}
          <div className="flex flex-col gap-3">
            <h2 className="text-[36px] font-bold leading-[44px] text-[var(--text-heading)] sm:text-[40px] sm:leading-[50px] lg:text-[44px] lg:leading-[55px]">
              {heading}
            </h2>
            <p
              className="text-[16px] leading-[26px] lg:text-[18px] lg:leading-[28px]"
              style={{ color: "var(--text-soft)" }}
            >
              {subtitle}
            </p>
          </div>

          {/* Intro paragraph */}
          <p
            className="text-[15px] leading-[25px] lg:text-[16px] lg:leading-[26px]"
            style={{ color: "var(--text-dark)" }}
          >
            {intro}
          </p>
        </div>

        {/* Cards */}
        <div className="flex flex-col gap-4">
          {features.map((feature, idx) => {
            // Cards 1-2, 3-4 paired; card 5 spans full width
            const isFirstOfPair = idx % 2 === 0;
            const nextFeature = features[idx + 1];
            const isLastAlone = idx === features.length - 1 && features.length % 2 === 1;

            if (isFirstOfPair && nextFeature && !isLastAlone) {
              // Render a row of two cards
              return (
                <div key={feature.number} className="flex flex-col gap-4 lg:flex-row">
                  <FeatureCard feature={feature} />
                  <FeatureCard feature={nextFeature} />
                </div>
              );
            }

            if (isLastAlone) {
              // Full-width single card
              return <FeatureCard key={feature.number} feature={feature} fullWidth />;
            }

            // Skip — already rendered as part of a pair
            return null;
          })}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  feature,
  fullWidth = false,
}: {
  feature: { number: string; eyebrow: string; title: string; description: string };
  fullWidth?: boolean;
}) {
  return (
    <div
      className={`flex flex-col gap-0 p-7 ${fullWidth ? "w-full" : "flex-1"}`}
      style={{
        background: "var(--bg-card)",
        border: "1px solid color-mix(in srgb, var(--color-contact-accent) 10%, transparent)",
      }}
    >
      {/* Red accent line */}
      <span
        className="block h-[2px] w-6 shrink-0"
        style={{ background: "var(--color-alert-accent-line)" }}
      />

      {/* Number */}
      <div
        className="pt-6 text-[9px] font-bold leading-[14px] tracking-[1.8px]"
        style={{
          fontFamily: barlow.style.fontFamily,
          color: "color-mix(in srgb, var(--color-contact-accent) 45%, transparent)",
        }}
      >
        {feature.number}
      </div>

      {/* Heading block */}
      <div className="flex flex-col gap-2 pt-[10px]">
        {/* Eyebrow (uppercase small label) */}
        <span
          className="text-[11px] font-normal uppercase leading-[14px] tracking-[0.05em]"
          style={{ color: "var(--text-soft)" }}
        >
          {feature.eyebrow}
        </span>

        {/* Title */}
        <h3 className="text-[20px] font-medium leading-[25px] text-[var(--text-heading)]">
          {feature.title}
        </h3>
      </div>

      {/* Description */}
      <p
        className="pt-[10px] text-[13.5px] leading-[23px]"
        style={{ color: "var(--text-soft)" }}
      >
        {feature.description}
      </p>
    </div>
  );
}
