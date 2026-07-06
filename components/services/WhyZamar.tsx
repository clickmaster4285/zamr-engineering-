// components/WhyZamr.jsx
"use client";

import React from "react";

type Feature = {
  number: string;
  title: string;
  description: string;
};

const features: Feature[] = [
  {
    number: "01",
    title: "Technical Excellence",
    description:
      "Every deliverable is produced by experienced, accredited engineers and subjected to rigorous internal review before issue. No shortcuts. No junior-only teams.",
  },
  {
    number: "02",
    title: "Independence & Integrity",
    description:
      "Our verification and compliance practices operate with complete independence from design. We report what we find — not what clients want to hear.",
  },
  {
    number: "03",
    title: "Government Expertise",
    description:
      "Deep experience working within TfNSW, RMS, and Infrastructure NSW frameworks. We know the standards, the approval processes, and the people.",
  },
  {
    number: "04",
    title: "End-to-End Delivery",
    description:
      "From initial feasibility to as-built certification, we can resource the full project lifecycle — eliminating the gaps between consultant handovers.",
  },
];

export default function WhyZamr() {
  return (
    <section className="w-full bg-[#EDEEF1] px-6 py-16 sm:px-10 lg:px-30 lg:py-16">
      <div className="w-auto">
        <div className="mb-5 flex items-center gap-3">
          <span className="text-sm tracking-[0.1em] font-bold text-[#405BAD]">02</span>
          <span className="h-px w-12 bg-[#B7B7B7]" />
          <span className="text-sm tracking-[0.25em] text-[#4C4C4C]">WHY ZAMR</span>
        </div>

        <h2 className="mb-10 text-[44px] font-bold leading-tight text-[#333333] sm:text-[50px]">
          What sets us apart from the competition.
        </h2>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.number}
              className="group flex flex-col rounded-md border border-[#DDE0E4] bg-[#F0F1F3] p-6 shadow-sm transition-all duration-300 hover:shadow-md"
            >
              {/* Red line */}
              <span className="mb-4 h-0.5 w-6 bg-[#D32F2F]" />
              <span className="mb-2 text-[13px] font-semibold tracking-[0.05em] text-[#4C4C4C]">
                {feature.number}
              </span>
              <h3 className="mb-3 text-[19px] font-bold text-[#333333] transition-colors group-hover:text-[#405BAD]">
                {feature.title}
              </h3>
              <p className="text-[15px] leading-relaxed text-[#4C4C4C]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}