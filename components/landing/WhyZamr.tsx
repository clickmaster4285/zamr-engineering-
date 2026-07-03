"use client";

import React from "react";
import Link from "next/link";

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
    <section className="w-full bg-white px-6 py-16 sm:px-10 lg:px-30 lg:py-16">
      {/* Inner wrapper with ml-12 to align under the logo – now fixed */}
      <div className="">
        <div className="mb-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Increased: 15px → 17px */}
            <span className="text-sm font-bold tracking-[0.1em] text-[#405BAD]">04</span>
            <span className="h-px w-12 bg-[#B7B7B7]" />
            {/* Increased: 13px → 15px */}
            <span className="text-sm tracking-[0.25em] text-[#4C4C4C]">
              WHY ZAMR ENGINEERING
            </span>
          </div>
          <Link
            href="#learn-more"
            className="flex items-center gap-2 text-[16px] font-semibold text-[#405BAD] transition-opacity hover:opacity-70"
          >
            Learn More <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>

        {/* Increased: 38/44 → 40/46 */}
        <h2 className="mb-10 text-[40px] font-bold leading-tight text-[#333333] sm:text-[46px]">
          The difference is in how we build.
        </h2>

        <div className="border-t border-[#EAEAEA]">
          {points.map((point) => (
            <div
              key={point.title}
              // Matching Services row spacing: py-8, gap-4, px-6
              className="group relative flex cursor-pointer flex-col gap-4 border-b border-[#EAEAEA] bg-transparent px-6 py-8 transition-all duration-300 hover:bg-[#F4F7FF] hover:shadow-md sm:flex-row sm:items-center sm:gap-16 sm:px-8"
            >
              <span className="absolute left-0 top-0 h-full w-[3px] bg-[#C54A33] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              {/* Increased: 20px → 22px */}
              <h3 className="w-full shrink-0 text-[22px] font-bold text-[#333333] transition-colors group-hover:text-[#405BAD] sm:w-[230px]">
                {point.title}
              </h3>

              {/* Increased: 16/17 → 18/19 */}
              <p className="flex-1 text-[18px] leading-relaxed text-[#4C4C4C] transition-colors group-hover:text-[#1C1F26] md:text-[19px]">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}