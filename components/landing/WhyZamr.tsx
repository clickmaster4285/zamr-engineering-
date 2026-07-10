"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type Point = {
  title: string;
  description: string;
};

const points: Point[] = [
  {
    title: "Safety first",
    description:
      "An EMR consistently below industry average — because every worker goes home.",
  },
  {
    title: "Self-perform strength",
    description:
      "In-house concrete, steel, and interiors crews give us schedule and quality control others can't match.",
  },
  {
    title: "Built sustainably",
    description:
      "LEED, WELL, and net-zero expertise woven into every phase of design and construction.",
  },
  {
    title: "Owner-aligned",
    description:
      "Transparent budgets, open-book contracts, and one team accountable from day one to handover.",
  },
];

export default function WhyZamr() {
  return (
    <section className="w-full bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-[130px] lg:py-20">
      <div>
        <div className="mb-8 sm:mb-10 lg:mb-[80px]">
          <div className="mb-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between sm:mb-6 lg:mb-8">
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <span className="text-sm font-medium tracking-[3px] text-[var(--color-primary)] sm:text-base">
                04
              </span>
              <span className="hidden h-px w-16 sm:block sm:w-[104px] bg-[var(--text-dark)]" />
              <span className="text-sm font-medium tracking-[3px] uppercase text-[var(--text-dark)] sm:text-base">
                WHY ZAMR ENGINEERING
              </span>
            </div>
           <span className="group flex cursor-pointer items-center gap-2 text-xs font-medium tracking-[0.3em] text-[var(--color-primary)] transition-all duration-300 hover:text-[var(--color-secondary)] sm:text-sm lg:text-base">
  LEARN MORE
  <span className="hidden transition-transform duration-300 group-hover:translate-x-[5px] lg:block">
    <ArrowRight size={24} />
  </span>
</span>
          </div>
          <h2 className="text-[28px] font-bold leading-[36px] text-[var(--text-dark)] sm:text-[36px] sm:leading-[44px] md:text-[44px] md:leading-[52px] lg:text-[56px] lg:leading-[71px]">
            The difference is in how we build.
          </h2>
        </div>

        <div className="border-t border-[var(--border-light)]">
          {points.map((point) => (
            <div
              key={point.title}
              className="group relative flex flex-col gap-2 border-b border-[var(--border-light)] px-4 py-5 sm:px-6 sm:py-6 lg:flex-row lg:items-center lg:px-[50px] lg:py-[42px]"
            >
              {/* Left accent border */}
              <span className="absolute left-0 top-0 h-full w-1 bg-[var(--color-accent)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              {/* Title */}
              <h3 className="text-lg font-semibold text-[var(--text-dark)] group-hover:text-[var(--color-primary)] sm:text-xl lg:w-[444px] lg:shrink-0 lg:text-[28px]">
                {point.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-[var(--text-dark)] sm:text-base lg:text-lg">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
