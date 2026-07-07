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
    <section className="w-full bg-white px-6 py-20 lg:px-32 lg:py-20">
      <div>
        <div className="mb-[80px] flex items-center justify-between">
          <div>
            <div className="mb-8 flex items-center gap-4">
              <span className="text-base font-medium tracking-[0.2em] text-[var(--color-primary)]">
                04
              </span>
              <span className="h-px w-24 bg-black" />
              <span className="text-base font-medium tracking-[0.2em] text-[var(--text-dark)]">
                WHY ZAMR ENGINEERING
              </span>
            </div>
            <h2 className="text-[56px] font-bold   text-[var(--text-dark)]">
              The difference is in how we build.
            </h2>
          </div>
          <Link
            href=""
            className="flex items-center gap-2 text-base font-medium tracking-[0.3em] text-[var(--color-primary)] transition-opacity hover:opacity-70"
          >
            Learn More <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>

        <div className="border-t border-[var(--border-light)]">
          {points.map((point) => (
            <div
              key={point.title}
              className="group relative flex items-center border-b border-[var(--border-light)] py-[42px] pl-[50px] pr-[50px]"
            >
              {/* Left red border */}
              <span className="absolute left-0 top-0 h-full w-1 bg-[var(--color-accent)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              {/* Title */}
              <h3 className="w-[444px] shrink-0 text-[28px] font-semibold  text-[var(--text-dark)] group-hover:text-[var(--color-primary)]">
                {point.title}
              </h3>

              {/* Description */}
              <p className=" text-lg  text-[var(--text-dark)]">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
