"use client";

import Image from "next/image";
import { Check } from "lucide-react";
import { areasOfImpactContent } from "@/mockData/engineering-impact";

export default function AreasOfImpact() {
  const { sectionNumber, sectionLabel, heading, description, values, image } =
    areasOfImpactContent;

  return (
    <section className="w-full bg-[#F6F8FC] px-6 py-16 sm:px-10 sm:py-20 lg:p-[130px]">
      <div className="flex w-full flex-col items-start gap-12 lg:flex-row lg:justify-between lg:items-center ">
        {/* Left column */}
        <div className="flex w-full flex-col items-start gap-[50px] lg:w-[555px]">
          {/* Header */}
          <div className="flex w-full flex-col items-start gap-6 sm:gap-8 lg:gap-[30px]">
            <div className="flex flex-row items-center gap-3 sm:gap-4">
              <span className="text-sm font-medium tracking-[3px] text-[var(--color-primary)] lg:text-base">
                {sectionNumber}
              </span>
              <span className="hidden h-px w-[104px] bg-black sm:block" />
              <span className="text-sm font-medium tracking-[3px] uppercase text-[#333333] lg:text-base">
                {sectionLabel}
              </span>
            </div>

            <h2 className=" text-[28px] font-bold leading-[36px] text-[#333333] sm:text-[36px] sm:leading-[44px] lg:text-[56px] lg:leading-[71px] ">
              {heading}
            </h2>
          </div>

          {/* Description + values */}
          <div className="flex w-full flex-col items-start gap-5">
            <p className="w-full text-sm leading-relaxed text-[#333333] sm:text-base lg:text-[18px] lg:leading-[23px] lg:max-w-[555px]">
              {description}
            </p>

            {/* Values checklist */}
            <div className="flex w-full flex-col gap-4">
              {values.map((item) => (
                <div
                  key={item.label}
                  className="flex flex-row items-center gap-3"
                >
                  <Check
                    size={20}
                    strokeWidth={2}
                    className="shrink-0 text-[var(--color-primary)]"
                  />
                  <span className="text-sm font-medium leading-[23px] text-[#333333] sm:text-base lg:text-lg">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right column — image */}
        <div className="relative h-[280px] w-full overflow-hidden sm:h-[350px] lg:h-[588px] lg:w-[649px]">
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
