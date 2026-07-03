"use client";

import React from "react";

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

// Same tags for ALL boxes
const commonTags = ["STRUCTURAL", "Hydraulic", "GEOTECHNICAL"];

export default function Services() {
  return (
    <section className="w-full bg-white px-6 py-16 sm:px-10 lg:px-30 lg:py-16">
      {/* Inner container with ml-12 to align under the logo */}
      <div className=" w-auto">
        <div className="mb-5 flex items-center gap-3">
          {/* Slightly bigger: 15px → 16px */}
          <span className="text-sm tracking-[0.1em] font-bold text-[#405BAD]">02</span>
          <span className="h-px w-12 bg-[#B7B7B7]" />
          {/* Slightly bigger: 13px → 14px */}
          <span className="text-sm tracking-[0.25em] text-[#4C4C4C]">SERVICES</span>
        </div>
        {/* Slightly bigger: 42/48 → 44/50 */}
        <h2 className="mb-10 text-[44px] font-bold leading-tight text-[#333333] sm:text-[50px]">
          What We Engineer
        </h2>
        <div className="border-t border-[#EAEAEA]">
          {services.map((service) => (
            <div
              key={service.index}
              className="group relative flex cursor-pointer flex-col gap-4 border-b border-[#EAEAEA] bg-transparent px-6 py-8 transition-all duration-300 hover:bg-[#F4F7FF] hover:shadow-md sm:flex-row sm:items-center sm:gap-8 sm:px-8"
            >
              {/* Left border accent */}
              <span className="absolute left-0 top-0 h-full w-[3px] bg-[#C54A33] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              {/* Slightly bigger: 15px → 16px */}
              <span className="w-10 shrink-0 text-[16px] font-semibold tracking-[0.05em] text-[#4C4C4C] transition-colors group-hover:text-[#405BAD]">
                {service.index}
              </span>

              {/* Slightly bigger: 22px → 23px */}
              <h3 className="w-full shrink-0 text-[23px] font-bold text-[#333333] transition-colors group-hover:text-[#405BAD] sm:w-[230px]">
                {service.title}
              </h3>

              {/* Slightly bigger: 16/18 → 17/19 */}
              <p className="flex-1 text-[17px] leading-relaxed text-[#4C4C4C] transition-colors group-hover:text-[#1C1F26] md:text-[19px]">
                {service.description}
              </p>

              {/* Tags – sharp corners, slightly bigger: 12px → 13px */}
              <div className="flex shrink-0 flex-wrap gap-2 opacity-0 transition-all duration-300 group-hover:opacity-100 sm:w-[190px] sm:justify-end">
                {commonTags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-none border border-[#405BAD]/60 px-2.5 py-1 text-[13px] font-semibold tracking-[0.05em] text-[#405BAD] transition-colors group-hover:border-[#405BAD] group-hover:bg-[#405BAD]/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        {/* Slightly bigger: 14px → 15px */}
        <a
          href="#contact"
          className="mt-8 inline-flex items-center gap-2 text-[15px] font-bold tracking-[0.15em] text-[#405BAD] transition-all hover:opacity-70 hover:gap-3"
        >
          REQUEST A CONSULTATION
          <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
    </section>
  );
}