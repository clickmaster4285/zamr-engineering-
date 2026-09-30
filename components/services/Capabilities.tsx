"use client";

import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { services, servicesCapabilitiesSection } from "@/mockData/services";

export default function Capabilities() {
  const { sectionNumber, sectionLabel, heading, ctaLabel } =
    servicesCapabilitiesSection;
  const router = useRouter();

  return (
    <section className="flex w-full flex-col items-start gap-8 bg-white px-4 py-12 lg:gap-[35.56px] lg:px-[76.4444px] lg:py-[77.037px] 2xl:gap-[60px] 2xl:px-[129px] 2xl:py-[130px]">
      <div className="flex w-full flex-col items-start gap-4 lg:gap-[17.78px] 2xl:gap-[30px]">
        <div className="flex w-full flex-row items-center gap-3 lg:w-auto lg:gap-[9.48px] 2xl:gap-4">
          <span className="shrink-0 text-sm font-medium leading-[18px] text-[var(--color-contact-accent)] lg:text-[13px] lg:leading-4 lg:tracking-[1.77778px] 2xl:text-base 2xl:leading-5 2xl:tracking-[3px]">
            {sectionNumber}
          </span>
          <span className="h-px w-10 shrink-0 bg-[var(--text-heading)] lg:w-[61.63px] 2xl:w-[104px]" />
          <span className="text-sm font-medium leading-[18px] tracking-[3px] uppercase text-[var(--text-heading)] lg:text-[13px] lg:leading-4 lg:tracking-[1.77778px] 2xl:text-base 2xl:leading-5 2xl:tracking-[3px]">
            {sectionLabel}
          </span>
        </div>

        <h2 className="w-full text-[28px] font-semibold leading-[35px] text-[var(--text-heading)] lg:text-[26.0741px] lg:font-bold lg:leading-[33px] 2xl:text-[44px] 2xl:leading-[55px]">
          {heading}
        </h2>
      </div>

      <div className="flex w-full flex-col items-start gap-4 lg:flex-row lg:flex-wrap lg:justify-end lg:gap-6 2xl:gap-[30px]">
        <div className="grid w-full grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-6 2xl:grid-cols-3 2xl:gap-x-[31px] 2xl:gap-y-[30px]">
          {services.map((service) => (
            <button
              key={service.slug}
              type="button"
              onClick={() => router.push(`/services/${service.slug}`)}
              className="flex w-full cursor-pointer flex-col items-start gap-5 bg-[var(--bg-hover)] p-5 text-left lg:gap-[17.78px] lg:p-[17.7778px] 2xl:gap-[30px] 2xl:p-[30px]"
            >
              <div className="flex w-full flex-col items-start gap-2 lg:gap-[7.11px] 2xl:gap-3">
                <span className="text-sm font-medium leading-[18px] tracking-[2px] text-[var(--text-soft)] lg:text-[13px] lg:leading-4 lg:tracking-[1.77778px] lg:text-[var(--text-heading)] 2xl:text-base 2xl:leading-5 2xl:tracking-[3px]">
                  {service.index}
                </span>
                <h3 className="w-full text-[20px] font-semibold leading-[25px] text-[var(--text-heading)] underline lg:text-[18px] lg:leading-[23px] 2xl:text-[28px] 2xl:leading-[35px]">
                  {service.title}
                </h3>
              </div>

              <div className="flex flex-wrap items-start gap-2 lg:gap-[5.93px] 2xl:gap-2.5">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="border border-[color-mix(in_srgb,var(--color-contact-accent)_18%,transparent)] bg-white px-2.5 py-1 text-xs font-medium leading-[15px] text-[var(--text-heading)] lg:border-0 lg:px-[7.11111px] lg:py-[3.55556px] lg:text-[10px] lg:leading-[13px] 2xl:px-3 2xl:py-1.5 2xl:text-xs 2xl:leading-[15px]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={() => router.push("/contact")}
          className="inline-flex cursor-pointer items-center gap-2 text-xs font-medium uppercase leading-[15px] tracking-[0.02em] text-[var(--color-contact-accent)] lg:text-xs 2xl:text-base 2xl:leading-5 2xl:tracking-[0.03em]"
        >
          {ctaLabel}
          <ArrowRight className="h-[18px] w-[18px] lg:h-6 lg:w-6" strokeWidth={1.25} />
        </button>
      </div>
    </section>
  );
}
