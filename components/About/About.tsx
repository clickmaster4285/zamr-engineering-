"use client";

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
    <section className="w-full bg-[var(--bg-light)] px-6 py-16 lg:p-[130px]">
      {/* Frame 1321318991 — inner row */}
      <div className="mx-auto flex max-w-[1476px] flex-col items-start gap-10 lg:flex-row lg:gap-[135px]">
        {/* Frame 120 — left column */}
        <div className="flex w-full flex-col items-start gap-6 lg:w-[352px] lg:gap-[30px]">
          {/* Frame 118 — section label */}
          <div className="flex flex-row items-center gap-4">
            <span className="text-sm font-medium tracking-[3px] text-[var(--color-primary)] lg:text-base">
              01
            </span>
            <span className="h-px w-12 bg-black sm:w-[104px]" />
            <span className="text-sm font-medium tracking-[3px] uppercase text-[#333333] lg:text-base">
              ABOUT US
            </span>
          </div>

          {/* Frame 119 — heading */}
          <div className="flex w-full flex-col items-start gap-[10px]">
            <h2 className="w-full text-[36px] font-bold leading-[44px] text-[#333333] sm:text-[40px] sm:leading-[50px] lg:w-[352px] lg:text-[44px] lg:leading-[55px]">
              Built on
              <br />
              Precision
              <br />
              &amp; Reliability
            </h2>
            <span className="h-px w-[133px] border-t border-[var(--color-accent)]" />
          </div>
        </div>

        {/* Frame 1321318990 — right column */}
        <div className="flex w-full flex-col gap-6 lg:w-[989px] lg:gap-[30px]">
          {/* Frame 1321318989 — 3 paragraphs */}
          <div className="flex w-full flex-col gap-4 lg:gap-5">
            <p className="w-full text-base leading-relaxed text-[#333333] lg:text-[20px] lg:leading-[25px]">
              ZAMR Engineering was founded in 2012 with a single conviction: that
              infrastructure should be engineered with uncompromising precision and
              long-term thinking. From a modest two-person consultancy, we have
              grown into one of New South Wales&rsquo; most trusted civil engineering
              firms, delivering over 150 projects across road, civil, energy, and
              compliance disciplines.
            </p>
            <p className="w-full text-base leading-relaxed text-[#333333] lg:text-[20px] lg:leading-[25px]">
              Our team of 45 engineers, project managers, and compliance
              specialists operates across NSW, Queensland, and Victoria —
              partnering with government agencies, private developers, and
              infrastructure funds to deliver outcomes that endure. We hold
              accreditations with TfNSW, Infrastructure NSW, and the Australian
              Institute of Engineers.
            </p>
            <p className="w-full text-base leading-relaxed text-[#333333] lg:text-[20px] lg:leading-[25px]">
              We believe the best engineering is invisible — infrastructure that
              simply works, year after year, without incident. Every project we
              take on is guided by this philosophy: rigorous analysis, precise
              design, and disciplined delivery.
            </p>
          </div>

          {/* Divider */}
          <div className="h-px w-full border-t border-[#333333]" />

          {/* Frame 1321318988 — 3 pillars */}
          <div className="flex w-full flex-col gap-6 sm:flex-row sm:items-center sm:gap-[30px]">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="flex flex-1 flex-col gap-[2px]"
              >
                <h3 className="text-2xl font-normal leading-[30px] text-[var(--color-primary)] sm:text-[28px] sm:leading-[36px] lg:text-[32px] lg:leading-[40px]">
                  {pillar.title}
                </h3>
                <p className="text-sm font-light leading-5 text-[#333333] sm:text-base lg:text-[16px] lg:leading-[20px]">
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