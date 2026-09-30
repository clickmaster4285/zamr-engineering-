import Image from "next/image";
import { aboutUs04Content } from "@/mockData/about";

export default function FounderStory() {
  const { sectionNumber, sectionLabel, heading, image, imageAlt, paragraphs } =
    aboutUs04Content;

  return (
    <section className="flex w-full flex-col items-start gap-8 bg-[var(--bg-section)] px-5 py-14 lg:gap-[17.78px] lg:px-[77.037px] lg:py-[77.037px] 2xl:gap-[30px] 2xl:p-[130px]">
      {/* Frame 118 — section label */}
      <div className="flex w-full flex-row items-center gap-3 lg:w-auto lg:gap-[9.48px] 2xl:gap-4">
        <span className="shrink-0 text-sm font-medium leading-[18px] text-[var(--color-primary)] lg:text-[13px] lg:leading-4 lg:tracking-[1.77778px] 2xl:text-base 2xl:leading-5 2xl:tracking-[3px]">
          {sectionNumber}
        </span>
        <span className="h-px w-10 shrink-0 bg-[var(--text-heading)] lg:w-[61.63px] 2xl:w-[104px]" />
        <span className="min-w-0 flex-1 text-sm font-medium leading-[18px] tracking-[3px] uppercase text-[var(--text-heading)] lg:flex-none lg:text-[13px] lg:leading-4 lg:tracking-[1.77778px] 2xl:text-base 2xl:leading-5 2xl:tracking-[3px]">
          {sectionLabel}
        </span>
      </div>

      {/* Frame 1321319099 — image + copy */}
      <div className="flex w-full flex-col items-start gap-6 lg:items-center lg:gap-6 2xl:flex-row 2xl:gap-[30px]">
        <div className="relative h-[400px] w-full shrink-0 overflow-hidden lg:h-[320px] 2xl:h-[560px] 2xl:w-[435px]">
          <Image
            src={image}
            alt={imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 1535px) 100vw, 435px"
          />
        </div>

        {/* Frame 1321319098 — heading + paragraphs */}
        <div className="flex w-full flex-col items-start gap-4 lg:gap-[17.78px] 2xl:w-[989px] 2xl:gap-[30px]">
          <h2 className="w-full text-[28px] font-semibold leading-[35px] text-[var(--text-heading)] [font-feature-settings:'liga'_off] lg:text-[26.0741px] lg:font-bold lg:leading-[33px] 2xl:text-[44px] 2xl:leading-[55px]">
            {heading}
          </h2>

          <div className="flex w-full flex-col items-start gap-4 lg:gap-[11.85px] 2xl:gap-5">
            {paragraphs.map((paragraph) => (
              <p
                key={paragraph.slice(0, 40)}
                className="w-full text-[15px] font-normal leading-6 text-[var(--text-heading)] [font-feature-settings:'liga'_off] lg:leading-[19px] 2xl:text-[20px] 2xl:leading-[25px]"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
