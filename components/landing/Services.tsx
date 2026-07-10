"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";

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
    <section className="w-full bg-white px-6 py-16 lg:px-[130px] lg:py-32.5">
      <div className="">
        {/* Frame 120 — header */}
        <div className="flex w-full flex-col gap-6 lg:w-[481px] lg:gap-[30px]">
          <div className="flex flex-row items-center gap-4">
            <span className="text-sm font-medium tracking-[3px] text-[var(--color-primary)] lg:text-base">
              02
            </span>
            <span className="h-px w-12 bg-[var(--text-dark)] sm:w-[104px]" />
            <span className="text-sm font-medium tracking-[3px] uppercase text-[var(--text-dark)] lg:text-base">
              SERVICES
            </span>
          </div>
          <h2 className="text-[36px] font-bold leading-[44px] text-[var(--text-dark)] sm:text-[44px] sm:leading-[55px] lg:text-[56px] lg:leading-[71px]">
            What We Engineer
          </h2>
        </div>

        {/* Frame 1321318998 — service rows */}
        <div className="mt-8 flex flex-col border-t border-[var(--border-section)] lg:mt-[50px]">
          {services.map((service, idx) => (
            <div
              key={service.index}
              onClick={() => router.push(`/services/${service.slug}`)}
              className="group relative flex cursor-pointer flex-col gap-3 border-b border-[var(--border-section)] bg-white px-6 py-6 transition-colors duration-300 hover:bg-[var(--bg-hover)] active:bg-[var(--bg-hover)] lg:h-[164px] lg:flex-row lg:items-center lg:px-[50px] lg:py-0"
            >
              {/* Accent border — slides up from bottom on hover */}
              <span className="absolute left-0 bottom-0 w-[4px] h-0 bg-[var(--color-secondary)] transition-all duration-300 group-hover:h-full group-active:h-full" />

              {/* Index — left:50px */}
              <span className="w-5 text-sm font-medium tracking-[3px] text-[var(--text-dark)] lg:text-base">
                {service.index}
              </span>

              {/* Title — left:170px */}
              <h3 className="text-xl font-semibold leading-[26px] text-[var(--text-dark)] lg:ml-[100px] lg:w-[213px] lg:text-[28px] lg:leading-[35px]">
                {service.title}
              </h3>

              {/* Description — left:504px, flex-1 */}
              <p className="text-sm leading-snug text-[var(--text-dark)] lg:ml-[121px] lg:flex-1 lg:max-w-[674px] lg:text-lg lg:leading-[23px]">
                {service.description}
              </p>

              {/* Tags — 2-row layout per Figma, visible on hover */}
              <div className="flex flex-wrap gap-2 opacity-100 transition-opacity duration-300 group-hover:opacity-100 lg:ml-[26px] lg:w-[224px] lg:shrink-0 lg:flex-col lg:flex-nowrap lg:gap-2 lg:opacity-0 lg:group-hover:opacity-100">
                {tagRows.map((row, ri) => (
                  <div key={ri} className="flex flex-row items-center gap-1.5 lg:gap-[6px]">
                    {row.map((tag) => (
                      <span
                        key={tag}
                        className="border border-[var(--color-blue-accent)] px-[10px] py-2 text-[10px] font-medium tracking-[3px] text-[var(--color-blue-accent)] lg:text-xs"
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
        <div className="flex justify-end">
  <button
    type="button"
    className="group mt-8 inline-flex cursor-pointer items-center gap-2 text-sm font-medium tracking-[3px] text-[var(--color-blue-accent)] transition-all duration-300 hover:text-[var(--color-secondary)] lg:mt-[50px] lg:text-base"
  >
    REQUEST A CONSULTATION
    <span className="transition-transform duration-300 group-hover:translate-x-[5px]">
      <ArrowRight size={24} />
    </span>
  </button>
</div>
      </div>
    </section>
  );
}
