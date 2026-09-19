"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { servicesPreview, servicesSection } from "@/mockData/landing";

export default function Services() {
  const router = useRouter();
  const { sectionNumber, sectionLabel, heading, ctaLabel } = servicesSection;

  return (
    <section className="w-full bg-white px-[30px] py-[30px] lg:px-[77px] lg:py-[77px] 2xl:p-[130px]">
      <div className="flex w-full flex-col items-start gap-[18px] lg:gap-[47px] 2xl:gap-20">
        {/* Frame 120 — header */}
        <div className="flex w-full flex-col items-start gap-[7px] lg:w-[285px] lg:gap-[18px] 2xl:w-[481px] 2xl:gap-[30px]">
          <div className="flex flex-row items-center gap-[4px] lg:gap-[9.5px] 2xl:gap-4">
            <span className="text-sm font-medium leading-[18px] tracking-[0.68px] text-[var(--color-primary)] lg:text-[13px] lg:leading-4 lg:tracking-[1.78px] 2xl:text-base 2xl:leading-5 2xl:tracking-[3px]">
              {sectionNumber}
            </span>
            <span className="h-px w-[24px] bg-[var(--text-heading)] lg:w-[62px] 2xl:w-[104px]" />
            <span className="text-sm font-medium leading-[18px] tracking-[0.68px] uppercase text-[var(--text-heading)] lg:text-[13px] lg:leading-4 lg:tracking-[1.78px] 2xl:text-base 2xl:leading-5 2xl:tracking-[3px]">
              {sectionLabel}
            </span>
          </div>
          <h2 className="text-[36px] font-bold leading-[45px] text-[var(--text-heading)] lg:text-[33px] lg:leading-[42px] 2xl:text-[56px] 2xl:leading-[71px]">
            {heading}
          </h2>
        </div>

        {/* Frame 1321318998 — rows + CTA */}
        <div className="flex w-full flex-col items-end gap-[11px] lg:gap-[30px] 2xl:gap-[50px]">
          {/* Service rows */}
          <div className="flex w-full flex-col border-t border-[var(--border-section)]">
            {servicesPreview.map((service) => (
              <div
                key={service.index}
                role="link"
                tabIndex={0}
                onClick={() => router.push(`/services/${service.slug}`)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    router.push(`/services/${service.slug}`);
                  }
                }}
                className="group relative flex cursor-pointer flex-col gap-3.5 border-b border-[var(--border-section)] bg-white px-4 py-5 transition-colors duration-300 hover:bg-[var(--bg-hover)] active:bg-[var(--bg-hover)] lg:h-[97px] lg:flex-row lg:items-center lg:gap-0 lg:px-[30px] lg:py-0 2xl:h-[164px] 2xl:px-[50px]"
              >
                {/* Accent bar — yellow secondary */}
                <span className="absolute bottom-0 left-0 h-0 w-px bg-[var(--color-secondary)] transition-all duration-300 group-hover:h-full group-active:h-full lg:w-[2.4px] 2xl:w-1" />

                {/* Index */}
                <span className="shrink-0 text-sm font-medium leading-[18px] tracking-[0.68px] text-[var(--text-heading)] lg:w-[18px] lg:text-[13px] lg:leading-4 lg:tracking-[1.78px] 2xl:w-[23px] 2xl:text-base 2xl:leading-5 2xl:tracking-[3px]">
                  {service.index}
                </span>

                {/* Title */}
                <h3 className="text-xl font-semibold leading-[25px] text-[var(--text-heading)] lg:ml-[53px] lg:w-[185px] lg:shrink-0 lg:text-lg lg:leading-[23px] 2xl:ml-[97px] 2xl:w-[312px] 2xl:text-[28px] 2xl:leading-[35px]">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm leading-[18px] text-[var(--text-heading)] [font-feature-settings:'liga'_off] lg:ml-[14px] lg:flex-1 lg:text-[13px] lg:leading-4 2xl:ml-[22px] 2xl:max-w-[690px] 2xl:text-lg 2xl:leading-[23px]">
                  {service.description}
                </p>

                {/* Tags — always on mobile; hover-reveal tablet+ */}
                {service.tags.length > 0 && (
                  <div className="flex w-full flex-col gap-[4.5px] lg:ml-auto lg:w-[257px] lg:shrink-0 lg:gap-3 lg:opacity-0 lg:transition-opacity lg:duration-300 lg:group-hover:opacity-100 lg:group-active:opacity-100 2xl:w-[344px] 2xl:gap-5">
                    <div className="flex flex-row flex-wrap items-center gap-[2px] lg:gap-[6px] 2xl:gap-2.5">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center justify-center bg-white px-[3px] py-[1.5px] text-[11px] font-medium leading-[14px] text-[var(--text-heading)] lg:px-[7px] lg:py-[3.5px] lg:text-[10px] lg:leading-[13px] 2xl:px-3 2xl:py-1.5 2xl:text-xs 2xl:leading-[15px]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA */}
          <button
            type="button"
            onClick={() => router.push("/contact")}
            className="group inline-flex cursor-pointer items-center gap-[2px] text-sm font-medium leading-[18px] tracking-[0.68px] text-[var(--color-blue-accent)] transition-colors duration-300 hover:text-[var(--color-secondary)] lg:gap-2 lg:text-base lg:leading-5 lg:tracking-[3px]"
          >
            {ctaLabel}
            <span className="transition-transform duration-300 group-hover:translate-x-[5px]">
              <ArrowRight className="h-4 w-4 lg:h-6 lg:w-6" strokeWidth={1.25} />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
