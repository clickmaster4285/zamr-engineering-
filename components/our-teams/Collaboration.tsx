"use client";

import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import { collaborationContent } from "@/mockData/our-teams";

export default function Collaboration() {
  const { sectionNumber, sectionLabel, heading, description, values, ctaButton, image } =
    collaborationContent;

  return (
    <section className="w-full bg-[var(--bg-section)] px-6 py-16 sm:px-10 sm:py-20 lg:p-[130px]">
      <div className="flex w-full flex-col items-start gap-12 lg:flex-row lg:items-center lg:gap-[120px] xl:gap-[200px]">
        {/* Left column */}
        <div className="flex w-full flex-col items-start gap-10 lg:w-[555px] lg:gap-[50px]">
          {/* Header */}
          <div className="flex w-full flex-col items-start gap-6 sm:gap-8 lg:gap-[30px]">
            {/* Section label */}
            <div className="flex flex-row items-center gap-3 sm:gap-4">
              <span className="text-sm font-medium tracking-[3px] text-[var(--color-primary)] lg:text-base">
                {sectionNumber}
              </span>
              <span className="hidden h-px w-[104px] bg-[var(--text-dark)] sm:block" />
              <span className="text-sm font-medium tracking-[3px] uppercase text-[var(--text-paragraph)] lg:text-base">
                {sectionLabel}
              </span>
            </div>

            {/* Heading */}
            <h2 className="w-full text-[28px] font-bold leading-[36px] text-[var(--text-dark)] sm:text-[36px] sm:leading-[44px] lg:text-[56px] lg:leading-[71px]">
              {heading}
            </h2>
          </div>

          {/* Description + values */}
          <div className="flex w-full flex-col items-start gap-5">
            <p className="w-full text-sm leading-relaxed text-[var(--text-paragraph)] sm:text-base lg:text-[18px] lg:leading-[23px]">
              {description}
            </p>

            {/* Values grid — responsive columns */}
            <div className="grid w-full grid-cols-1 gap-x-3 gap-y-4 sm:grid-cols-2">
              {values.map((item) => (
                <div
                  key={item.label}
                  className="flex flex-row items-center gap-3"
                >
                  {/* Check icon */}
                  <Check
                    size={20}
                    strokeWidth={2}
                    className="shrink-0 text-[var(--color-primary)]"
                  />
                  <span className="text-sm font-medium leading-[23px] text-[var(--text-paragraph)] sm:text-base lg:text-lg">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <Link
            href={ctaButton.href}
            className="flex cursor-pointer items-center justify-center border border-[var(--color-primary)] bg-[var(--bg-light)] px-6 py-3 text-xs font-bold uppercase tracking-[3px] text-[var(--color-primary)] transition-all duration-300 hover:bg-[var(--color-primary)] hover:text-white active:scale-[0.98] sm:px-8 sm:py-4 sm:text-sm"
          >
            {ctaButton.label}
          </Link>
        </div>

        {/* Right column — image */}
        <div className="relative h-[280px] w-full overflow-hidden sm:h-[350px] lg:h-[478px] lg:w-[649px]">
          <Image
            src={image}
            alt="ZAMR Engineering team collaborating"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
