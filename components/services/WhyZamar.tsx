"use client";

import { Barlow } from "next/font/google";
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
    <section className="flex w-full flex-col items-start gap-8 bg-[var(--bg-section)] px-4 py-12 lg:gap-[35.56px] lg:p-[77.037px] 2xl:gap-[60px] 2xl:p-[130px]">
      <div className="flex w-full flex-col items-start gap-4 lg:gap-[16.59px] 2xl:gap-7">
        <div className="flex w-full flex-row items-center gap-3 lg:w-auto lg:gap-[9.48px] 2xl:gap-4">
          <span className="shrink-0 text-sm font-medium leading-[18px] text-[var(--color-primary)] lg:text-[13px] lg:leading-4 lg:tracking-[1.77778px] 2xl:text-base 2xl:leading-5 2xl:tracking-[3px]">
            {sectionNumber}
          </span>
          <span className="h-px w-10 shrink-0 bg-[var(--text-heading)] lg:w-[61.63px] 2xl:w-[104px]" />
          <span className="text-sm font-medium leading-[18px] tracking-[3px] uppercase text-[var(--text-heading)] lg:text-[13px] lg:leading-4 lg:tracking-[1.77778px] 2xl:text-base 2xl:leading-5 2xl:tracking-[3px]">
            {sectionLabel}
          </span>
        </div>

        <div className="flex w-full flex-col items-start gap-2 lg:gap-[7.11px] 2xl:gap-3">
          <h2 className="w-full text-[28px] font-semibold leading-[35px] text-[var(--text-heading)] lg:text-[26.0741px] lg:font-bold lg:leading-[33px] 2xl:text-[44px] 2xl:leading-[55px]">
            {heading}
          </h2>
          <p className="w-full text-[15px] font-normal leading-[22px] text-[var(--text-soft)] lg:text-[13px] lg:leading-5 2xl:text-[18px] 2xl:leading-7">
            {subtitle}
          </p>
        </div>

        <p className="w-full text-sm font-normal leading-[22px] text-[var(--text-heading)] lg:text-[13px] lg:leading-[21px] 2xl:text-base 2xl:leading-[26px]">
          {intro}
        </p>
      </div>

      <div className="grid w-full grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-[9.48px] 2xl:gap-4">
        {features.map((feature, index) => (
          <article
            key={feature.number}
            className={`flex flex-col items-start gap-4 border border-[color-mix(in_srgb,var(--color-primary)_10%,transparent)] bg-[var(--bg-card)] p-5 lg:gap-0 lg:p-[16.5926px] 2xl:p-7 ${
              index === features.length - 1 ? "lg:col-span-2" : ""
            }`}
          >
            <span className="block h-0.5 w-6 shrink-0 bg-[var(--color-alert-accent-line)] lg:h-[1.19px] lg:w-[14.22px] 2xl:h-0.5 2xl:w-6" />

            <span
              className="text-[11px] font-bold leading-[13px] tracking-[2px] text-[color-mix(in_srgb,var(--color-primary)_45%,transparent)] lg:pt-[14.2222px] lg:text-[10px] lg:leading-[15px] lg:tracking-[1.06667px] 2xl:pt-6 2xl:text-[9px] 2xl:leading-[14px] 2xl:tracking-[1.8px]"
              style={{ fontFamily: barlow.style.fontFamily }}
            >
              {feature.number}
            </span>

            <div className="flex w-full flex-col items-start gap-1 lg:gap-0 lg:pt-[5.92593px] 2xl:pt-2.5">
              <span className="text-[11px] font-normal uppercase leading-[14px] tracking-[1px] text-[var(--text-soft)] lg:text-[10px] lg:leading-[13px] lg:tracking-[0.05em] 2xl:text-[11px] 2xl:leading-[14px]">
                {feature.eyebrow}
              </span>
              <h3 className="w-full text-lg font-semibold leading-[23px] text-[var(--text-heading)] lg:text-[15px] lg:font-medium lg:leading-[19px] 2xl:text-[20px] 2xl:leading-[25px]">
                {feature.title}
              </h3>
            </div>

            <p className="w-full text-[13px] font-normal leading-5 text-[var(--text-soft)] lg:pt-[5.92593px] lg:leading-[22px] 2xl:pt-2.5 2xl:text-[13.5px] 2xl:leading-[23px]">
              {feature.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
