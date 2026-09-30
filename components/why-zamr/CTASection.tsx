"use client";

import Link from "next/link";
import { ctaContent } from "@/mockData/why-zamr";

export default function CTASection() {
  const { heading, description, primaryButton, secondaryButton } = ctaContent;

  return (
    <section className="flex w-full flex-col items-start bg-white px-5 py-[60px] lg:items-center lg:justify-center lg:p-[77.037px] 2xl:p-[130px]">
      <div className="flex w-full flex-col items-start gap-6 lg:max-w-none lg:items-center lg:justify-center lg:gap-[17.78px] 2xl:max-w-[728px] 2xl:gap-[30px]">
        <h2 className="w-full text-[28px] font-semibold leading-[35px] text-[var(--text-heading)] lg:text-center lg:text-[33.1852px] lg:font-bold lg:leading-[42px] 2xl:text-[56px] 2xl:leading-[71px]">
          {heading}
        </h2>

        <p className="w-full text-[15px] font-normal leading-[22px] text-[var(--text-muted)] lg:text-center lg:text-[13px] lg:leading-4 lg:text-[var(--text-heading)] 2xl:text-[18px] 2xl:leading-[23px]">
          {description}
        </p>

        <div className="flex w-full flex-col items-stretch gap-3 lg:w-auto lg:flex-row lg:items-center lg:justify-center lg:gap-[9.48px] 2xl:gap-4">
          <Link
            href={primaryButton.href}
            className="flex h-[46px] items-center justify-center border border-[var(--color-primary)] bg-[var(--color-primary)] px-6 py-3.5 text-sm font-semibold uppercase text-white transition-all duration-300 hover:bg-[var(--bg-light)] hover:text-[var(--color-primary)] active:scale-[0.98] lg:h-[34.96px] lg:px-[18.963px] lg:py-[9.48148px] lg:text-[13px] lg:leading-4 2xl:h-[50px] 2xl:px-8 2xl:py-4 2xl:text-sm 2xl:leading-[18px]"
          >
            {primaryButton.label}
          </Link>

          <Link
            href={secondaryButton.href}
            className="flex h-[46px] items-center justify-center border border-[var(--color-primary)] bg-[var(--bg-light)] px-6 py-3.5 text-sm font-semibold uppercase text-[var(--color-primary)] transition-all duration-300 hover:bg-[var(--color-primary)] hover:text-white active:scale-[0.98] lg:h-[34.96px] lg:px-[18.963px] lg:py-[9.48148px] lg:text-[13px] lg:leading-4 2xl:h-[50px] 2xl:px-8 2xl:py-4 2xl:text-sm 2xl:leading-[18px]"
          >
            {secondaryButton.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
