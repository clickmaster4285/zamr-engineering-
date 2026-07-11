"use client";

import Image from "next/image";
import Link from "next/link";
import { collaborationContent } from "@/mockData/our-teams";

export default function Collaboration() {
  const { sectionNumber, sectionLabel, heading, description, values, ctaButton, image } =
    collaborationContent;

  return (
    <section className="w-full bg-[#F6F8FC] px-6 py-16 lg:p-[130px]">
      <div className="flex w-full flex-col items-start gap-10 lg:flex-row lg:items-center lg:gap-[264px]">
        {/* Left column */}
        <div className="flex w-full flex-col items-start gap-[50px] lg:w-[555px]">
          {/* Header */}
          <div className="flex w-full flex-col items-start gap-[30px]">
            {/* Section label */}
            <div className="flex flex-row items-center gap-4">
              <span className="text-sm font-medium tracking-[3px] text-[var(--color-primary)] lg:text-base">
                {sectionNumber}
              </span>
              <span className="h-px w-[104px] bg-black" />
              <span className="text-sm font-medium tracking-[3px] uppercase text-[#333333] lg:text-base">
                {sectionLabel}
              </span>
            </div>

            {/* Heading */}
            <h2 className="w-full text-[36px] font-bold leading-[44px] text-[#333333] sm:text-[44px] sm:leading-[55px] lg:text-[56px] lg:leading-[71px]">
              {heading}
            </h2>
          </div>

          {/* Description + values */}
          <div className="flex w-full flex-col items-start gap-5">
            <p className="w-full text-base leading-[23px] text-[#333333] lg:text-lg">
              {description}
            </p>

            {/* Values grid — 2 columns */}
            <div className="grid w-full grid-cols-2 gap-x-3 gap-y-4">
              {values.map((item) => (
                <div
                  key={item.label}
                  className="flex flex-row items-center gap-3"
                >
                  {/* Check icon */}
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="shrink-0"
                  >
                    <path
                      d="M3.33334 10.8333L7.5 15L16.6667 5"
                      stroke="var(--color-primary)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-base font-medium leading-[23px] text-[#333333] sm:text-lg">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <Link
  href={ctaButton.href}
  className="flex cursor-pointer items-center justify-center border border-[var(--color-primary)] bg-[var(--bg-light)] px-8 py-4 text-sm font-bold uppercase tracking-[3px] text-[var(--color-primary)] transition-all duration-300 hover:bg-[var(--color-primary)] hover:text-white active:scale-[0.98]"
>
  {ctaButton.label}
</Link>
        </div>

        {/* Right column — image */}
        <div className="relative h-[350px] w-full overflow-hidden lg:h-[478px] lg:w-[649px]">
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
