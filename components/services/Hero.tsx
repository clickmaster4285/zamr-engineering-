"use client";

import Image from "next/image";

export default function ServicesHero() {
  return (
    <section className="relative w-full h-[420px] md:h-[480px] overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/image5.jpeg" // replace with your actual image path
        alt="Engineers on site"
        fill
        priority
        className="object-cover"
      />

      {/* Navy overlay */}
      <div className="absolute inset-0 bg-[#050B1F]/70" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#050B1F]/90 via-[#050B1F]/30 to-transparent" />

      {/* Content – now at the bottom */}
      <div className="relative z-10 h-full flex flex-col justify-end px-8 md:px-16 pb-12 md:pb-16">
        <div className="ml-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Our Services
          </h1>
          <p className="text-sm md:text-base text-gray-200 max-w-xl leading-relaxed">
            Five specialist engineering disciplines. One integrated consultancy.
            Delivering precision-led infrastructure outcomes across NSW, QLD,
            and Victoria.
          </p>
        </div>
      </div>
    </section>
  );
}