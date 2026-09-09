"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { servicesPreview } from "@/mockData/landing";

export default function Services() {
  const router = useRouter();

  return (
    <section className="w-full bg-white px-6 py-16 lg:px-[130px] lg:py-32.5">
      <div className="">
        {/* Frame 120 — header */}
        <div className="flex w-full flex-col gap-6 lg:w-[481px] lg:gap-[30px]">
          <div className="flex flex-row items-center gap-4">
            <span className="text-sm font-medium tracking-[3px] text-[var(--color-primary)] lg:text-base">
              02
            </span>
            <span className="h-px w-12 bg-[var(--text-dark)] sm:w-[104px]" />
            <span className="text-sm font-medium tracking-[3px] uppercase text-[var(--text-dark)] lg:text-base">
              SERVICES
            </span>
          </div>
          <h2 className="text-[36px] font-bold leading-[44px] text-[var(--text-dark)] sm:text-[44px] sm:leading-[55px] lg:text-[56px] lg:leading-[71px]">
            What We Engineer
          </h2>
        </div>

        {/* Frame 1321318998 — service rows */}
        <div className="mt-8 flex flex-col border-t border-[var(--border-section)] lg:mt-[50px]">
          {servicesPreview.map((service, idx) => (
            <div
              key={service.index}
              onClick={() => router.push(`/services/${service.slug}`)}
              className="group relative flex cursor-pointer flex-col gap-3 border-b border-[var(--border-section)] bg-white px-6 py-6 transition-colors duration-300 hover:bg-[var(--bg-hover)] active:bg-[var(--bg-hover)] lg:h-[164px] lg:flex-row lg:items-center lg:px-[50px] lg:py-0"
            >
              {/* Accent border — slides up from bottom on hover */}
              <span className="absolute left-0 bottom-0 w-[4px] h-0 bg-[var(--color-secondary)] transition-all duration-300 group-hover:h-full group-active:h-full" />

              {/* Index — left:50px */}
              <span className="w-5 text-sm font-medium tracking-[3px] text-[var(--text-dark)] lg:text-base">
                {service.index}
              </span>

              {/* Title — left:170px */}
              <h3 className="text-xl font-semibold leading-[26px] text-[var(--text-dark)] lg:ml-[100px] lg:w-[250px] lg:text-[28px] lg:leading-[35px]">
                {service.title}
              </h3>

              {/* Description — left:504px, flex-1 */}
              <p className="text-sm leading-snug text-[var(--text-dark)] lg:ml-[50px] lg:flex-1 lg:max-w-[674px] lg:text-lg lg:leading-[23px]">
                {service.description}
              </p>

{/* Tags — visible on mobile, hover-reveal on desktop */}
<div
  className="
    flex flex-wrap items-start gap-[10px]
    transition-opacity duration-300
    ml-[37px] mt-1
    lg:ml-[26px] lg:w-[344px] lg:shrink-0 lg:mt-0
    lg:opacity-0 lg:group-hover:opacity-100
  "
>
  {service.tags.map((tag) => (
    <span
      key={tag}
      className="
        inline-flex items-center
        bg-white
        px-[12px] py-[7px]
        text-[12px] font-normal
        leading-none
        tracking-normal
        text-[#222]
      "
    >
      {tag}
    </span>
  ))}
</div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-end">
  <button
    type="button"
    className="group mt-8 inline-flex cursor-pointer items-center gap-2 text-sm font-medium tracking-[3px] text-[var(--color-blue-accent)] transition-all duration-300 hover:text-[var(--color-secondary)] lg:mt-[50px] lg:text-base"
  >
    REQUEST A CONSULTATION
    <span className="transition-transform duration-300 group-hover:translate-x-[5px]">
      <ArrowRight size={24} />
    </span>
  </button>
</div>
      </div>
    </section>
  );
}
