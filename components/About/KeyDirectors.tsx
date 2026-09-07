"use client";

import Image from "next/image";
import { keyDirectorsContent } from "@/mockData/about";

export default function KeyDirectors() {
  const { sectionNumber, sectionLabel, heading, directors } = keyDirectorsContent;

  return (
    <section className="w-full bg-white px-6 py-16 lg:p-[130px]">
      <div className="flex w-full flex-col gap-[60px]">
        {/* Header */}
        <div className="flex w-full flex-col gap-7">
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

          {/* Heading */}
          <h2 className="w-full text-[32px] font-bold leading-[40px] text-[var(--text-dark)] sm:text-[38px] sm:leading-[46px] lg:text-[44px] lg:leading-[55px]">
            {heading}
          </h2>
        </div>

        {/* professional-cards */}
        <div className="grid w-full grid-cols-1 gap-[32px] sm:grid-cols-2 lg:grid-cols-4">
          {directors.map((director) => (
            <div
              key={director.name}
              className="flex w-full flex-col gap-4 border-b border-[var(--border-light)] pb-5"
            >
              {/* headshot */}
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-[var(--bg-card)]">
                <Image
                  src={director.headshot}
                  alt={director.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Frame — name / role / department */}
              <div className="flex flex-col gap-1">
                <h3 className="w-full text-lg font-bold leading-[23px] text-[var(--text-dark)]">
                  {director.name}
                </h3>
                <p className="w-full text-sm font-medium leading-[18px] text-[var(--color-contact-accent)]">
                  {director.role}
                </p>
                <p className="w-full text-[13px] font-normal leading-4 text-[var(--text-soft)]">
                  {director.department}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}