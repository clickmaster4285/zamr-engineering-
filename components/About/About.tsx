// app/about/page.tsx
"use client";

import { Outfit } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

type Pillar = {
  title: string;
  description: string;
};

const pillars: Pillar[] = [
  {
    title: "Precision",
    description:
      "Every calculation, every specification, every deliverable held to the highest standard.",
  },
  {
    title: "Integrity",
    description:
      "Transparent reporting and independent verification on every engagement.",
  },
  {
    title: "Innovation",
    description:
      "Forward-looking design thinking applied to proven engineering principles.",
  },
];

export default function About() {
  return (
    <section className="w-full bg-[#EEF1F6] px-6 py-36 sm:px-6 lg:px-30 lg:py-30">
      <div className="mx-auto grid grid-cols-1 gap-12 lg:grid-cols-[560px_1fr] lg:gap-0">
        {/* Left column */}
        <div>
          <div className="mb-6 flex items-center gap-3">
            <span className="text-[14px] font-bold tracking-[0.05em] text-[var(--color-primary)]">
              01
            </span>
            <span className="h-px w-12 bg-black" />
            <span className="text-sm tracking-[0.2em] text-gray-900">
              ABOUT US
            </span>
          </div>
          <h2 className="text-[46px] font-bold leading-[1.05] tracking-[-0.01em] text-[#1C1F26] sm:text-[54px]">
            Built on
            <br />
            Precision
            <br />
            <span className="relative inline-block">
              &amp; Reliability                  <span className="absolute -bottom-3 font-medium left-0.5 h-px w-48 bg-[var(--color-secondary)]" />
            </span>
          </h2>
        </div>

        {/* Right column */}
        <div className="flex flex-col justify-center">
          <p
            className={`${outfit.className} text-md md:text-md leading-[1.35] text-black`}
          >
            ZAMR Engineering was founded in 2012 with a single conviction: that
            infrastructure should be engineered with uncompromising precision and
            long-term thinking. From a modest two-person consultancy, we have
            grown into one of New South Wales’ most trusted civil engineering
            firms, delivering over 150 projects across road, civil, energy, and
            compliance disciplines.
          </p>
          <p
            className={`${outfit.className} mt-5 text-md md:text-md leading-[1.35] text-black`}
          >
            Our team of 45 engineers, project managers, and compliance
            specialists operates across NSW, Queensland, and Victoria —
            partnering with government agencies, private developers, and
            infrastructure funds to deliver outcomes that endure. We hold
            accreditations with TfNSW, Infrastructure NSW, and the Australian
            Institute of Engineers.
          </p>
          <p
            className={`${outfit.className} mt-5 text-md md:text-md leading-[1.35] text-black`}
          >
            We believe the best engineering is invisible — infrastructure that
            simply works, year after year, without incident. Every project we
            take on is guided by this philosophy: rigorous analysis, precise
            design, and disciplined delivery.
          </p>

          {/* Line above pillars – BLACK */}
          <div className="mt-12 mb-14 h-px w-full bg-black" />

          {/* Three pillars – left, center, right alignment */}
          <div className="grid grid-cols-3 gap-x-6 gap-y-8">
            {pillars.map((pillar, index) => (
              <div key={pillar.title}>
                <div
                  className={`text-3xl font-medium leading-none text-[var(--color-primary)]`}
                >
                  {pillar.title}
                </div>
                <p
                 className={`mt-4 text-md tracking-[0.01em] text-gray-700 max-w-[900px] overflow-hidden text-ellipsis `}
                >
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}