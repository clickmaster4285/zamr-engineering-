"use client";

import Image from "next/image";
import { Check } from "lucide-react";
import { areasOfImpactContent } from "@/mockData/engineering-impact";

export default function AreasOfImpact() {
  const { sectionNumber, sectionLabel, heading, description, values, image } =
    areasOfImpactContent;

  return (
    <section className="w-full bg-[var(--bg-section)] px-4 py-14 lg:px-[77.037px] lg:py-[77.037px] 2xl:p-[130px]">
      <div className="flex w-full flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-[156.44px] 2xl:gap-[264px]">
        {/* Left column */}
        <div className="flex w-full flex-col items-start gap-8 lg:w-[539.35px] lg:shrink-0 lg:gap-[29.63px] 2xl:w-[555px] 2xl:gap-[50px]">
          {/* Header — label + heading */}
          <div className="flex w-full flex-col items-start gap-8 lg:gap-[17.78px] 2xl:gap-[30px]">
            <div className="flex flex-row items-center gap-3 lg:gap-[9.48px] 2xl:gap-4">
              <span className="text-sm font-medium leading-[18px] text-[var(--color-blue-accent)] lg:text-[13px] lg:leading-4 lg:tracking-[1.77778px] 2xl:text-base 2xl:leading-5 2xl:tracking-[3px]">
                {sectionNumber}
              </span>
              <span className="h-px w-[60px] bg-[var(--color-blue-accent)] lg:w-[61.63px] lg:bg-[var(--text-heading)] 2xl:w-[104px]" />
              <span className="text-sm font-semibold leading-[18px] uppercase text-[var(--text-heading)] lg:text-[13px] lg:font-medium lg:leading-4 lg:tracking-[1.77778px] 2xl:text-base 2xl:leading-5 2xl:tracking-[3px]">
                {sectionLabel}
              </span>
            </div>

            <h2 className="w-full text-[28px] font-semibold leading-[35px] text-[var(--text-heading)] lg:text-[26.0741px] lg:font-bold lg:leading-[33px] 2xl:text-[44px] 2xl:leading-[55px]">
              {heading}
            </h2>
          </div>

          {/* Description + checklist */}
          <div className="flex w-full flex-col items-start gap-8 lg:gap-[11.85px] 2xl:gap-5">
            <p className="w-full text-base font-normal leading-6 text-[var(--text-heading)] [font-feature-settings:'liga'_off] lg:text-[13px] lg:leading-4 2xl:text-[18px] 2xl:leading-[23px]">
              {description}
            </p>

            <div className="flex w-full flex-col items-start gap-4 lg:gap-[9.48px] 2xl:gap-4">
              {values.map((item) => (
                <div
                  key={item.label}
                  className="flex w-full flex-row items-center gap-3 lg:gap-[7.11px] 2xl:gap-3"
                >
                  <Check
                    className="h-5 w-5 shrink-0 text-[var(--color-blue-accent)] lg:h-[11.85px] lg:w-[11.85px] lg:[stroke-width:1.185px] 2xl:h-5 2xl:w-5 2xl:[stroke-width:2px]"
                    strokeWidth={2}
                  />
                  <span className="min-w-0 flex-1 text-base font-medium leading-5 text-[var(--text-heading)] lg:text-[13px] lg:leading-4 2xl:text-[18px] 2xl:leading-[23px]">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right column — image */}
        <div className="relative h-[240px] w-full overflow-hidden lg:h-[309.15px] lg:w-[330.57px] lg:shrink-0 lg:grow 2xl:h-[556px] 2xl:w-[649px] 2xl:grow-0">
          <Image
            src={image}
            alt="Engineering impact areas"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
