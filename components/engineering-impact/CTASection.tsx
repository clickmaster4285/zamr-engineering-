"use client";

import Link from "next/link";
import { ctaContent } from "@/mockData/engineering-impact";

export default function CTASection() {
  const { heading, description, primaryButton, secondaryButton } = ctaContent;

  return (
    <section className="flex w-full flex-col items-stretch justify-center bg-[var(--bg-section)] px-4 py-14 lg:items-center lg:px-[77.037px] lg:py-[77.037px] 2xl:p-[130px]">
      <div className="flex w-full flex-col items-stretch gap-6 lg:items-center lg:gap-[17.78px] 2xl:max-w-[728px] 2xl:gap-[30px]">
        <h2 className="w-full text-center text-[28px] font-semibold leading-[35px] text-[var(--text-heading)] lg:text-[33.1852px] lg:font-bold lg:leading-[42px] 2xl:text-[56px] 2xl:leading-[71px]">
          {heading}
        </h2>

        <p className="w-full text-center text-base font-normal leading-6 text-[var(--text-heading)] [font-feature-settings:'liga'_off] lg:text-[13px] lg:leading-4 2xl:text-[18px] 2xl:leading-[23px]">
          {description}
        </p>

        <div className="flex w-full flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href={ctaContent.primaryButton.href}
            className="flex w-full items-center justify-center border border-[var(--color-primary)] bg-[var(--color-primary)] px-8 py-4 text-sm font-semibold uppercase text-white transition-all duration-300 hover:bg-[var(--bg-light)] hover:text-[var(--color-primary)] active:scale-[0.98] sm:w-auto sm:px-[32px]"
          >
            {ctaContent.primaryButton.label}
          </Link>

          <Link
            href={ctaContent.secondaryButton.href}
            className="flex w-full items-center justify-center border border-[var(--color-primary)] bg-[var(--bg-light)] px-8 py-4 text-sm font-semibold uppercase text-[var(--color-primary)] transition-all duration-300 hover:bg-[var(--color-primary)] hover:text-white active:scale-[0.98] sm:w-auto sm:px-[32px]"
          >
            {ctaContent.secondaryButton.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
