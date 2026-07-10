"use client";

import Image from "next/image";

export default function WhyZamrHero() {
  return (
    <section className="relative h-[500px] w-full overflow-hidden sm:h-[600px] lg:h-[700px]">
      <Image
        src="/images/image6.jpeg"
        alt="Engineering confidence"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay — rgba(7, 24, 61, 0.8) per Figma */}
      <div className="absolute inset-0 bg-[var(--overlay-image-hero)]" />

      {/* Frame 1321319043 — centered content */}
      <div className="absolute left-1/2 top-1/2 flex w-full max-w-[1468px] -translate-x-1/2 -translate-y-1/2 flex-col gap-[20px] px-6 lg:left-[130px] lg:translate-x-0 lg:px-0">
        <h1 className="w-full text-[40px] font-bold leading-[48px] text-white sm:text-[50px] sm:leading-[60px] lg:text-[80px] lg:leading-[101px]">
          Engineering Confidence Through
          <br />
          Experience, Quality &amp; Precision
        </h1>
        <p className="w-full text-sm font-medium leading-snug text-[var(--text-light-subtle)] sm:text-base lg:text-[18px] lg:leading-[23px]">
          Choosing the right engineering partner is critical to every
          project&apos;s success. At ZAMR Engineering, we combine technical
          expertise, industry knowledge, and practical solutions to deliver
          reliable outcomes that exceed expectations.
        </p>
      </div>
    </section>
  );
}
