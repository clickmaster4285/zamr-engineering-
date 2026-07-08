"use client";

import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="relative h-[400px] w-full overflow-hidden sm:h-[500px] lg:h-[700px]">
      <Image
        src="/images/image4.jpeg"
        alt="Engineer overlooking transmission towers"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay — rgba(7, 24, 61, 0.8) per Figma */}
      <div className="absolute inset-0" style={{ backgroundColor: "color-mix(in srgb, var(--bg-hero) 80%, transparent)" }} />

      {/* Frame 1321319043 — centered content */}
      <div className="absolute bottom-10 left-1/2 flex w-full max-w-[933px] -translate-x-1/2 flex-col gap-4 px-6 lg:bottom-[100px] lg:left-[130px] lg:translate-x-0 lg:px-0 lg:gap-5">
        <h1 className="w-full text-[40px] font-bold leading-[48px] text-white sm:text-[50px] sm:leading-[60px] lg:text-[80px] lg:leading-[101px]">
          About ZAMR Engineering
        </h1>
        <p className="w-full text-base font-medium leading-snug text-[var(--color-text-light-subtle)] sm:text-lg lg:text-[18px] lg:leading-[23px]">
          A Sydney-based civil engineering consultancy built on precision,
          technical excellence, and a commitment to enduring infrastructure.
        </p>
      </div>
    </section>
  );
}