"use client";

import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="relative h-[700px] w-full overflow-hidden">
      <Image
        src="/images/image4.jpeg"
        alt="Engineer overlooking transmission towers"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay — rgba(7, 24, 61, 0.8) per Figma */}
      <div className="absolute inset-0" style={{ backgroundColor: "rgba(7, 24, 61, 0.8)" }} />

      {/* Frame 1321319043 — centered content, left 130px */}
      <div className="absolute left-[130px] bottom-[100px] flex w-[933px]  flex-col gap-5">
        <h1 className="w-full text-[80px] font-bold leading-[101px] text-white">
          About ZAMR Engineering
        </h1>
        <p className="w-full text-[18px] font-medium leading-[23px] text-[#B0B0B0]">
          A Sydney-based civil engineering consultancy built on precision,
          technical excellence, and a commitment to enduring infrastructure.
        </p>
      </div>
    </section>
  );
}