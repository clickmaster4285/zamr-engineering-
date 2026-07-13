"use client";

import Link from "next/link";
import { ctaContent } from "@/mockData/why-zamr";

export default function CTASection() {
  const { heading, description, primaryButton, secondaryButton } = ctaContent;

  return (
    <section className="w-full bg-[var(--bg-section)] px-6 py-16 lg:p-[130px]">
      <div className="mx-auto flex w-full max-w-[728px] flex-col items-center justify-center gap-8 lg:gap-[30px]">
        <h2 className="w-full text-center text-[36px] font-bold leading-[44px] text-[var(--text-dark)] sm:text-[44px] sm:leading-[52px] lg:text-[56px] lg:leading-[71px]">
          {heading}
        </h2>

        <p className="w-full text-center text-sm leading-5 text-[var(--text-dark)] sm:text-base sm:leading-6 lg:text-[18px] lg:leading-[23px]">
          {description}
        </p>

        <div className="flex flex-row items-center justify-center gap-4">
  <Link
    href={primaryButton.href}
    className="flex items-center justify-center border border-[var(--color-blue-accent)] bg-[var(--color-blue-accent)] px-8 py-4 text-sm font-semibold uppercase tracking-[3px] text-white transition-all duration-300 hover:bg-[var(--bg-light)] hover:text-[var(--color-blue-accent)] active:scale-[0.98]"
  >
    {primaryButton.label}
  </Link>

  <Link
    href={secondaryButton.href}
    className="flex items-center justify-center border border-[var(--color-blue-accent)] bg-[var(--bg-light)] px-8 py-4 text-sm font-semibold uppercase tracking-[3px] text-[var(--color-blue-accent)] transition-all duration-300 hover:bg-[var(--color-blue-accent)] hover:text-white active:scale-[0.98]"
  >
    {secondaryButton.label}
  </Link>
</div>
      </div>
    </section>
  );
}
