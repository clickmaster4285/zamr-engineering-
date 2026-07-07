"use client";

import React from "react";
import { useRouter } from "next/navigation";

type Service = {
  index: string;
  title: string;
  description: string;
};

const services: Service[] = [
  {
    index: "01",
    title: "Civil Engineering",
    description:
      "Precision-engineered civil solutions across hydraulic systems, structural frameworks, and geotechnical analysis for complex urban and regional infrastructure projects.",
  },
  {
    index: "02",
    title: "Project Verification",
    description:
      "Independent technical assurance — compliance review, quality auditing, and risk mitigation across the full infrastructure project lifecycle from design through to delivery.",
  },
  {
    index: "03",
    title: "Road Infrastructure",
    description:
      "Advanced pavement engineering, geometric road design, and integrated traffic systems for future-ready transport networks across New South Wales and beyond.",
  },
  {
    index: "04",
    title: "Renewable Energy Infrastructure",
    description:
      "Engineering the clean energy transition — solar farm civil works, wind turbine foundations, and hybrid energy infrastructure at utility scale.",
  },
  {
    index: "05",
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
        <div className="flex w-[481px] flex-col gap-[30px]">
          <div className="flex flex-row items-center gap-4">
            <span className="text-sm font-medium tracking-[3px] text-[var(--color-primary)] lg:text-base">
              02
            </span>
            <span className="h-px w-12 bg-black sm:w-[104px]" />
            <span className="text-sm font-medium tracking-[3px] uppercase text-[#333333] lg:text-base">
              SERVICES
            </span>
          </div>
          <h2 className="text-[40px] font-bold leading-[50px] text-[#333333] sm:text-[48px] sm:leading-[60px] lg:text-[56px] lg:leading-[71px]">
            What We Engineer
          </h2>
        </div>

        {/* Frame 1321318998 — service rows */}
        <div className="mt-[50px] flex flex-col border-t border-[#EAEAEA]">
          {services.map((service, idx) => (
            <div
              key={service.index}
              className="group relative flex h-[164px] cursor-pointer flex-row items-center border-b border-[#EAEAEA] bg-white px-[50px] transition-colors duration-300 hover:bg-[#F9FAFC]"
            >
              {/* Accent border — slides up from bottom on hover */}
              <span className="absolute left-0 bottom-0 w-[2px] h-0 bg-[var(--color-accent)] transition-all duration-300 group-hover:h-full" />

              {/* Index — left:50px */}
              <span className="w-5 text-base font-medium tracking-[3px] text-[#333333]">
                {service.index}
              </span>

              {/* Title — left:170px */}
              <h3 className="ml-[100px] w-[213px] text-[28px] font-semibold leading-[35px] text-[#333333]">
                {service.title}
              </h3>

              {/* Description — left:504px, flex-1 */}
              <p className="ml-[121px] flex-1 max-w-[674px] text-lg leading-[23px] text-[#333333]">
                {service.description}
              </p>

              {/* Tags — 2-row layout per Figma, visible on hover */}
              <div className="ml-[26px] flex w-[224px] shrink-0 flex-col gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {tagRows.map((row, ri) => (
                  <div key={ri} className="flex flex-row items-center gap-[6px]">
                    {row.map((tag) => (
                      <span
                        key={tag}
                        className="border border-[#1945A7] px-[10px] py-2 text-xs font-medium tracking-[3px] text-[#1945A7]"
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
          className="mt-[50px] inline-flex cursor-pointer items-center gap-2 text-base font-medium tracking-[3px] text-[#1945A7] transition-all"
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
