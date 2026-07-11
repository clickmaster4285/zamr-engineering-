"use client";

import Link from "next/link";
import { ctaContent } from "@/mockData/engineering-impact";

export default function CTASection() {
  return (
    <section className="flex w-full flex-col items-center justify-center bg-[var(--bg-section)] px-6 py-16 sm:px-10 sm:py-20 lg:p-[130px]">
      <div className="flex w-full max-w-[728px] flex-col items-center gap-8 sm:gap-10 lg:gap-[30px]">
        <h2 className="w-full text-[28px] font-bold leading-[36px] text-center text-[var(--text-heading)] sm:text-[36px] sm:leading-[44px] lg:text-[56px] lg:leading-[71px]">
          {ctaContent.heading.split("\n").map((line, i) => (
            <span key={i}>
              {line}
              {i < ctaContent.heading.split("\n").length - 1 && <br />}
            </span>
          ))}
        </h2>

        <p className="w-full text-sm leading-[23px] text-center text-[var(--text-paragraph)] sm:text-base lg:text-lg">
          {ctaContent.description}
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
