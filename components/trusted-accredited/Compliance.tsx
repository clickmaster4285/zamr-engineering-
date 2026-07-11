"use client";

import Image from "next/image";
import { Check } from "lucide-react";
import { complianceContent } from "@/mockData/trusted-accredited";

export default function Compliance() {
  const { sectionNumber, sectionLabel, heading, description, values, image } =
    complianceContent;

  return (
    <section className="w-full bg-[var(--bg-section)] px-6 py-16 sm:px-10 sm:py-20 lg:p-[130px]">
      <div className="flex w-full flex-col items-start gap-12 lg:flex-row lg:items-center lg:gap-[264px]">
        {/* Left column */}
        <div className="flex w-full flex-col items-start gap-[50px] lg:w-[555px]">
          {/* Header */}
          <div className="flex w-full flex-col items-start gap-6 sm:gap-8 lg:gap-[30px]">
            <div className="flex flex-row items-center gap-3 sm:gap-4">
              <span className="text-sm font-medium tracking-[3px] text-[var(--color-primary)] lg:text-base">
                {sectionNumber}
              </span>
              <span className="hidden h-px w-[104px] bg-[var(--text-dark)] sm:block" />
              <span className="text-sm font-medium tracking-[3px] uppercase text-[var(--text-dark)] lg:text-base">
                {sectionLabel}
              </span>
            </div>

            <h2 className="w-full text-[28px] font-bold leading-[36px] text-[var(--text-dark)] sm:text-[36px] sm:leading-[44px] lg:text-[56px] lg:leading-[71px] lg:max-w-[555px]">
              {heading}
            </h2>
          </div>

          {/* Description + values */}
          <div className="flex w-full flex-col items-start gap-5">
            <p className="w-full text-sm leading-relaxed text-[var(--text-paragraph)] sm:text-base lg:text-[18px] lg:leading-[23px] lg:max-w-[555px]">
              {description}
            </p>

            {/* Values checklist with check icons */}
            <div className="flex w-full flex-col gap-4">
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
        </div>

        {/* Right column — image */}
        <div className="relative h-[280px] w-full overflow-hidden sm:h-[350px] lg:h-[572px] lg:w-[649px]">
          <Image
            src={image}
            alt="Engineering compliance documents and blueprints"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
