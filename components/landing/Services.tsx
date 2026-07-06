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

const commonTags = ["STRUCTURAL", "Hydraulic", "GEOTECHNICAL"];

export default function Services() {
  return (
    <section className="w-full bg-white px-6 py-20 lg:px-32 lg:py-20">
      <div>
        <div className="mb-8 flex items-center gap-4">
          <span className="text-base font-medium tracking-[0.2em] text-[var(--color-primary)]">
            02
          </span>
          <span className="h-px w-24 bg-black" />
          <span className="text-base font-medium tracking-[0.2em] text-[var(--text-dark)]">
            SERVICES
          </span>
        </div>
        <h2 className="mb-12 text-[56px] font-bold leading-[71px] text-[var(--text-dark)]">
          What We Engineer
        </h2>
        <div className="border-t border-[var(--border-light)]">
          {services.map((service) => (
            <div
              key={service.index}
              className="group relative flex cursor-pointer flex-col gap-4 border-b border-[var(--border-light)] bg-transparent px-6 py-8 transition-all duration-300 hover:bg-[var(--bg-light-alt)] hover:shadow-sm sm:flex-row sm:items-center sm:gap-8 sm:px-10"
            >
              {/* Left red accent border */}
              <span className="absolute left-0 top-0 h-full w-[4px] bg-[var(--color-accent)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <span className="w-10 shrink-0 text-base font-medium tracking-[0.2em] text-[var(--text-dark)] transition-colors group-hover:text-[var(--color-primary)]">
                {service.index}
              </span>

              <h3 className="w-full shrink-0 text-[28px] font-semibold leading-[35px] text-[var(--text-dark)] transition-colors group-hover:text-[var(--color-primary)] sm:w-[250px]">
                {service.title}
              </h3>

              <p className="flex-1 text-lg leading-[23px] text-[var(--text-dark)] transition-colors group-hover:text-[var(--text-dark)] md:text-lg">
                {service.description}
              </p>

              {/* Tags */}
              <div className="flex shrink-0 flex-wrap gap-2 opacity-0 transition-all duration-300 group-hover:opacity-100 sm:w-[200px] sm:justify-end">
                {commonTags.map((tag) => (
                  <span
                    key={tag}
                    className="border border-[var(--color-primary)] px-2.5 py-2 text-xs font-medium tracking-[0.3em] text-[var(--color-primary)] transition-colors group-hover:bg-[var(--color-primary)]/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <a
          href="#contact"
          className="mt-8 inline-flex items-center gap-2 text-base font-medium tracking-[0.3em] text-[var(--color-primary)] transition-all hover:opacity-70 hover:gap-3"
        >
          REQUEST A CONSULTATION
          <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
    </section>
  );
}
