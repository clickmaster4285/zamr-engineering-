"use client";

import Link from "next/link";

export default function CTASection() {
  return (
    <section className="w-full bg-[var(--bg-section)] px-6 py-16 lg:p-[130px]">
      <div className="mx-auto flex w-full max-w-[728px] flex-col items-center justify-center gap-8 lg:gap-[30px]">
        {/* Heading */}
        <h2 className="w-full text-center text-[36px] font-bold leading-[44px] text-[var(--text-dark)] sm:text-[44px] sm:leading-[52px] lg:text-[56px] lg:leading-[71px]">
          Partner with a Team You Can Trust
        </h2>

        {/* Description */}
        <p className="w-full text-center text-sm leading-5 text-[var(--text-dark)] sm:text-base sm:leading-6 lg:text-[18px] lg:leading-[23px]">
          Whether you&apos;re planning new infrastructure, managing complex
          engineering challenges, or seeking reliable technical expertise, ZAMR
          Engineering is ready to support your next project.
        </p>

        {/* Buttons */}
        <div className="flex flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="flex items-center justify-center bg-[var(--color-blue-accent)] px-8 py-4 text-sm font-semibold uppercase tracking-[3px] text-white transition-colors duration-300 hover:bg-[var(--color-primary-hover)]"
          >
            Get In Touch
          </Link>
          <Link
            href="/services"
            className="flex items-center justify-center border border-[var(--color-blue-accent)] px-8 py-4 text-sm font-semibold uppercase tracking-[3px] text-[var(--color-blue-accent)] transition-colors duration-300 hover:bg-[var(--color-blue-accent)] hover:text-white"
          >
            Explore Services
          </Link>
        </div>
      </div>
    </section>
  );
}
