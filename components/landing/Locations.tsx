"use client";

import React from "react";
import { locationsContent } from "@/mockData/landing";

export default function Locations() {
  const { sectionNumber, sectionLabel, heading, description } = locationsContent;

  return (
    <section className="w-full bg-[var(--bg-section)] px-4 py-12 sm:px-6 sm:py-16 lg:px-[130px] lg:py-[130px]">
      <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-[249px]">
        {/* Left column — text content */}
        <div className="flex w-full flex-col gap-8 lg:w-[588px] lg:shrink-0 lg:gap-[30px]">
          {/* Section label row */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-4">
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <span className="text-sm font-medium tracking-[3px] text-[var(--color-blue-accent)] sm:text-base">
                {sectionNumber}
              </span>
              <span className="hidden h-px w-16 sm:block sm:w-[104px] bg-[var(--text-dark)]" />
              <span className="text-sm font-medium tracking-[3px] uppercase text-[var(--text-dark)] sm:text-base">
                {sectionLabel}
              </span>
            </div>
          </div>

          {/* Heading */}
          <h2 className="text-[28px] font-bold leading-[36px] text-[var(--text-dark)] sm:text-[36px] sm:leading-[44px] md:text-[44px] md:leading-[52px] lg:text-[56px] lg:leading-[71px]">
            {heading}
          </h2>

          {/* Description */}
          <p className="text-base leading-relaxed text-[var(--text-dark)] lg:text-[18px] lg:leading-[23px]">
            {description}
          </p>
        </div>

        {/* Right column — Google Map */}
        <div className="h-[400px] w-full overflow-hidden sm:h-[500px] lg:h-[672px] lg:w-[631px] lg:shrink-0 border border-2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3314.992283969211!2d150.9671837!3d-33.8125122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12a2bb67749bf9%3A0xb0ef6047fcb0149d!2sZAMR%20Engineering!5e0!3m2!1sen!2s!4v1789019051054!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
      </div>
    </section>
  );
}
