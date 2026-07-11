"use client";

import Link from "next/link";
import { ctaContent } from "@/mockData/trusted-accredited";

export default function CTASection() {
  return (
    <section className="flex w-full flex-col items-center justify-center bg-[#F6F8FC] px-6 py-16 lg:p-[130px]">
      <div className="flex w-full max-w-[728px] flex-col items-center gap-[30px]">
        {/* Heading */}
        <h2 className="w-full text-[36px] font-bold leading-[44px] text-center text-[#333333] sm:text-[44px] sm:leading-[55px] lg:text-[56px] lg:leading-[71px]">
          {ctaContent.heading}
        </h2>

        {/* Description */}
        <p className="w-full text-base leading-[23px] text-center text-[#333333] lg:text-lg">
          {ctaContent.description}
        </p>

        {/* Buttons */}
        <div className="flex flex-row items-center justify-center gap-4">
  <Link
    href={ctaContent.primaryButton.href}
    className="flex items-center justify-center border border-[var(--color-primary)] bg-[var(--color-primary)] px-8 py-4 text-sm font-semibold uppercase text-white transition-all duration-300 hover:bg-[var(--bg-light)] hover:text-[var(--color-primary)] active:scale-[0.98] sm:px-[32px]"
  >
    {ctaContent.primaryButton.label}
  </Link>

  <Link
    href={ctaContent.secondaryButton.href}
    className="flex items-center justify-center border border-[var(--color-primary)] bg-[var(--bg-light)] px-8 py-4 text-sm font-semibold uppercase text-[var(--color-primary)] transition-all duration-300 hover:bg-[var(--color-primary)] hover:text-white active:scale-[0.98] sm:px-[32px]"
  >
    {ctaContent.secondaryButton.label}
  </Link>
</div>
      </div>
    </section>
  );
}
