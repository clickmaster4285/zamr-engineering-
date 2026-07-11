"use client";

import Link from "next/link";
import { careersContent } from "@/mockData/our-teams";

export default function Careers() {
  return (
    <section className="flex w-full flex-col items-center justify-center bg-white px-6 py-16 lg:p-[130px]">
      <div className="flex w-full max-w-[728px] flex-col items-center gap-[30px]">
        {/* Heading */}
        <h2 className="w-full text-[36px] font-bold leading-[44px] text-center text-[#333333] sm:text-[44px] sm:leading-[55px] lg:text-[56px] lg:leading-[71px]">
          {careersContent.heading}
        </h2>

        {/* Description */}
        <p className="w-full text-base leading-[23px] text-center text-[#333333] lg:text-lg">
          {careersContent.description}
        </p>

        {/* Buttons */}
        <div className="flex flex-row items-center justify-center gap-4">
          <Link
            href={careersContent.primaryButton.href}
            className="flex items-center justify-center bg-[var(--color-primary)] px-8 py-4 text-sm font-semibold uppercase text-white transition-colors hover:text-[var(--color-primary)] hover:bg-white border hover:border-[var(--color-primary)]"
          >
            {careersContent.primaryButton.label}
          </Link>
          <Link
            href={careersContent.secondaryButton.href}
            className="flex items-center justify-center border border-[var(--color-primary)] px-8 py-4 text-sm font-semibold uppercase text-[var(--color-primary)] transition-colors hover:bg-[var(--color-primary)] hover:text-white"
          >
            {careersContent.secondaryButton.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
