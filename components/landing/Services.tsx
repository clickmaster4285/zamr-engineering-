"use client";

import React from "react";
import { useRouter } from "next/navigation";

type Service = {
  index: string;
  title: string;
  description: string;
};

const services: (Service & { slug: string })[] = [
  {
    index: "01",
    slug: "civil-engineering",
    title: "Civil Engineering",
    description:
      "Precision-engineered civil solutions across hydraulic systems, structural frameworks, and geotechnical analysis for complex urban and regional infrastructure projects.",
  },
  {
    index: "02",
    slug: "project-verification",
    title: "Project Verification",
    description:
      "Independent technical assurance — compliance review, quality auditing, and risk mitigation across the full infrastructure project lifecycle from design through to delivery.",
  },
  {
    index: "03",
    slug: "road-infrastructure",
    title: "Road Infrastructure",
    description:
      "Advanced pavement engineering, geometric road design, and integrated traffic systems for future-ready transport networks across New South Wales and beyond.",
  },
  {
    index: "04",
    slug: "renewable-energy-infrastructure",
    title: "Renewable Energy Infrastructure",
    description:
      "Engineering the clean energy transition — solar farm civil works, wind turbine foundations, and hybrid energy infrastructure at utility scale.",
  },
  {
    index: "05",
    slug: "tfnsw-compliance",
    title: "TfNSW Compliance",
    description:
      "Specialist advisory and compliance consulting precisely aligned with Transport for NSW regulatory standards, technical specifications, and certification frameworks.",
  },
];

const tagRows = [
  ["STRUCTURAL", "Hydraulic"],
  ["GEOTECHNICAL"],
];

export default function Services() {
  const router = useRouter();

  return (
    <section className="w-full bg-white px-6 py-16 lg:px-[130px] lg:py-20">
      <div className="mx-auto max-w-[1468px]">
        {/* Frame 120 — header */}
        <div className="flex w-full flex-col gap-6 lg:w-[481px] lg:gap-[30px]">
          <div className="flex flex-row items-center gap-4">
            <span className="text-sm font-medium tracking-[3px] text-[var(--color-primary)] lg:text-base">
              02
            </span>
            <span className="h-px w-12 bg-black sm:w-[104px]" />
            <span className="text-sm font-medium tracking-[3px] uppercase text-[#333333] lg:text-base">
              SERVICES
            </span>
          </div>
          <h2 className="text-[36px] font-bold leading-[44px] text-[#333333] sm:text-[44px] sm:leading-[55px] lg:text-[56px] lg:leading-[71px]">
            What We Engineer
          </h2>
        </div>

        {/* Frame 1321318998 — service rows */}
        <div className="mt-8 flex flex-col border-t border-[#EAEAEA] lg:mt-[50px]">
          {services.map((service, idx) => (
            <div
              key={service.index}
              onClick={() => router.push(`/services/${service.slug}`)}
              className="group relative flex cursor-pointer flex-col gap-3 border-b border-[#EAEAEA] bg-white px-6 py-6 transition-colors duration-300 hover:bg-[#F9FAFC] lg:h-[164px] lg:flex-row lg:items-center lg:px-[50px] lg:py-0"
            >
              {/* Accent border — slides up from bottom on hover */}
              <span className="absolute left-0 bottom-0 w-[4px] h-0 bg-[#CE1A00] transition-all duration-300 group-hover:h-full" />

              {/* Index — left:50px */}
              <span className="w-5 text-sm font-medium tracking-[3px] text-[#333333] lg:text-base">
                {service.index}
              </span>

              {/* Title — left:170px */}
              <h3 className="text-xl font-semibold leading-[26px] text-[#333333] lg:ml-[100px] lg:w-[213px] lg:text-[28px] lg:leading-[35px]">
                {service.title}
              </h3>

              {/* Description — left:504px, flex-1 */}
              <p className="text-sm leading-snug text-[#333333] lg:ml-[121px] lg:flex-1 lg:max-w-[674px] lg:text-lg lg:leading-[23px]">
                {service.description}
              </p>

              {/* Tags — 2-row layout per Figma, visible on hover */}
              <div className="flex flex-wrap items-center gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100 lg:ml-[26px] lg:w-[224px] lg:shrink-0 lg:flex-col lg:flex-nowrap lg:gap-2">
                {tagRows.map((row, ri) => (
                  <div key={ri} className="flex flex-row items-center gap-1.5 lg:gap-[6px]">
                    {row.map((tag) => (
                      <span
                        key={tag}
                        className="border border-[#1945A7] px-[10px] py-2 text-[10px] font-medium tracking-[3px] text-[#1945A7] lg:text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <button
          type="button"
          className="mt-8 inline-flex cursor-pointer items-center gap-2 text-sm font-medium tracking-[3px] text-[#1945A7] transition-all lg:mt-[50px] lg:text-base"
        >
          REQUEST A CONSULTATION
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 12H19"
              stroke="#1945A7"
              strokeWidth="1.25"
              strokeLinecap="round"
            />
            <path
              d="M12 5L19 12L12 19"
              stroke="#1945A7"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}
