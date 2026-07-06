"use client";

import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="relative h-[480px] w-full overflow-hidden sm:h-[560px] md:h-[620px]">
      {/* Background image */}
      <Image
        src="/images/image4.jpeg"
        alt="Engineer overlooking transmission towers"
        fill
        priority
        className="object-cover"
      />

      {/* Dark overlay for text contrast */}
      <div className="absolute inset-0 bg-black/80" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col justify-end px-6 pb-16 sm:px-10 sm:pb-20 lg:px-30 lg:py-16">
        <h1 className="text-[36px] font-bold leading-tight text-white sm:text-[46px] md:text-[52px]">
          About ZAMR Engineering
        </h1>
        <p className="mt-3 max-w-2xl text-[14px] leading-relaxed text-white/85 sm:text-[15px]">
          A Sydney-based civil engineering consultancy built on precision,
          technical excellence, and a commitment to enduring infrastructure.
        </p>
      </div>
    </section>
  );
}