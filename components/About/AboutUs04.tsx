"use client";

import Image from "next/image";
import { aboutUs04Content } from "@/mockData/about";

export default function AboutUs04() {
  const { sectionNumber, sectionLabel, heading, image, imageAlt, paragraphs } = aboutUs04Content;

  return (
    <section className="w-full bg-[var(--bg-section)] px-6 py-16 lg:px-[130px] lg:py-[130px]">
      <div className="flex w-full flex-col gap-[30px]">
        {/* Section label — Frame 118 */}
        <div className="flex flex-row items-center gap-4">
          <span className="text-base font-medium tracking-[3px] text-[var(--color-contact-accent)]">
            {sectionNumber}
          </span>
          <span className="h-px w-[104px] bg-[var(--text-dark)]" />
          <span className="text-base font-medium tracking-[3px] uppercase text-[var(--text-dark)]">
            {sectionLabel}
          </span>
        </div>

        {/* Frame 1321319099 — image + text */}
        <div className="flex w-full flex-col gap-[30px] lg:flex-row lg:items-center">
          {/* Rectangle — image */}
          <div className="w-full lg:w-[435px] lg:shrink-0">
            <div className="relative aspect-[435/560] w-full overflow-hidden">
              <Image
                src={image}
                alt={imageAlt}
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Frame 1321319098 — text column */}
          <div className="flex w-full flex-1 flex-col gap-[30px]">
            <h2 className="w-full text-[32px] font-bold leading-[40px] text-[var(--text-dark)] sm:text-[38px] sm:leading-[46px] lg:text-[44px] lg:leading-[55px]">
              {heading}
            </h2>

            {/* Frame 1321318989 — paragraphs */}
            <div className="flex w-full flex-col gap-5">
              {paragraphs.map((paragraph, i) => (
                <p
                  key={i}
                  className="w-full text-base leading-relaxed text-[var(--text-dark)] lg:text-[20px] lg:leading-[25px]"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}