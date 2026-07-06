"use client";
// components/ProjectHero.jsx
import Image from "next/image";

export default function ProjectHero() {
  return (
    <section className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/image5.jpeg"
        alt="Civil engineers on site"
        fill
        priority
        className="object-cover"
      />

      {/* Solid blue overlay – uniform colour across the whole image */}
      <div className="absolute inset-0 bg-[#0A1628]/80" />

      {/* Content pinned to bottom-left */}
      <div className="absolute bottom-0 left-0 right-0 px-6 md:px-30 py-16 pb-12">
        <h1 className="text-white text-4xl md:text-6xl font-extrabold tracking-wider uppercase">
          CIVIL ENGINEERING
        </h1>
        <p className="text-gray-200 text-sm md:text-base mt-3 italic font-light tracking-wide">
          "Structurally sound. Technically precise. Built to last."
        </p>
      </div>
    </section>
  );
}