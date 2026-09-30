import {
  aboutSection,
  aboutParagraphs,
  aboutDividerParagraphs,
} from "@/mockData/about";

export default function About() {
  const { sectionNumber, sectionLabel, heading } = aboutSection;

  return (
    <section className="flex w-full flex-col items-start gap-6 bg-[var(--bg-section)] px-5 py-14 lg:gap-[5.93px] lg:px-[77.037px] lg:py-[77.037px] 2xl:gap-2.5 2xl:p-[130px]">
      {/* Mobile: stacked label → heading → body. Tablet: column. Desktop: side-by-side. */}
      <div className="flex w-full flex-col items-start gap-6 lg:gap-8 2xl:flex-row 2xl:gap-[135px]">
        {/* Frame 120 — label + heading */}
        <div className="flex w-full flex-col items-start gap-6 lg:gap-[17.78px] 2xl:w-[352px] 2xl:shrink-0 2xl:gap-[30px]">
          {/* Frame 118 — section label */}
          <div className="flex w-full flex-row items-center gap-3 lg:w-auto lg:gap-[9.48px] 2xl:gap-4">
            <span className="shrink-0 text-sm font-medium leading-[18px] text-[var(--color-contact-accent)] lg:text-[13px] lg:leading-4 lg:tracking-[1.77778px] 2xl:text-base 2xl:leading-5 2xl:tracking-[3px]">
              {sectionNumber}
            </span>
            <span className="h-px w-10 shrink-0 bg-[var(--text-heading)] lg:w-[61.63px] 2xl:w-[104px]" />
            <span className="min-w-0 flex-1 text-sm font-medium leading-[18px] tracking-[3px] uppercase text-[var(--text-heading)] lg:flex-none lg:text-[13px] lg:leading-4 lg:tracking-[1.77778px] 2xl:text-base 2xl:leading-5 2xl:tracking-[3px]">
              {sectionLabel}
            </span>
          </div>

          {/* Frame 119 — heading + accent underline */}
          <div className="flex w-full flex-col items-start gap-3 lg:gap-[5.93px] 2xl:gap-2.5">
            <h2 className="w-full text-[28px] font-semibold leading-[35px] text-[var(--text-heading)] lg:text-[26.0741px] lg:font-bold lg:leading-[33px] 2xl:text-[44px] 2xl:leading-[55px]">
              {heading}
            </h2>
            <span className="block h-0.5 w-20 bg-[var(--color-alert-accent-line)] lg:h-px lg:w-[78.81px] 2xl:w-[133px]" />
          </div>
        </div>

        {/* Frame 1321318990 — body copy */}
        <div className="flex w-full flex-col items-start gap-4 lg:gap-[17.78px] 2xl:w-[989px] 2xl:gap-[30px]">
          <div className="flex w-full flex-col items-start gap-4 lg:gap-[11.85px] 2xl:gap-5">
            {aboutParagraphs.map((p) => (
              <p
                key={p.slice(0, 32)}
                className="w-full text-[15px] font-normal leading-6 text-[var(--text-heading)] [font-feature-settings:'liga'_off] lg:leading-[19px] 2xl:text-[20px] 2xl:leading-[25px]"
              >
                {p}
              </p>
            ))}
          </div>

          {/* Vector 23 — full on mobile/desktop, partial on tablet */}
          <div className="h-px w-full bg-[var(--text-heading)] lg:w-[586.07px] 2xl:w-full" />

          {aboutDividerParagraphs.map((p) => (
            <p
              key={p.slice(0, 32)}
              className="w-full text-[15px] font-normal leading-6 text-[var(--text-heading)] [font-feature-settings:'liga'_off] lg:leading-[19px] 2xl:text-[20px] 2xl:leading-[25px]"
            >
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
