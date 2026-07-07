"use client";

import Image from "next/image";

export default function ServicesHero() {
  return (
    <section className="relative h-[400px] w-full overflow-hidden sm:h-[500px] lg:h-[700px]">
      <Image
        src="/images/image5.jpeg"
        alt="Engineers on site"
        fill
        priority
        className="object-cover"
      />

      {/* Navy overlay — rgba(7, 24, 61, 0.8) per Figma */}
      <div className="absolute inset-0" style={{ backgroundColor: "rgba(7, 24, 61, 0.8)" }} />

      {/* Frame 1321319043 — content */}
      <div className="absolute bottom-10 left-1/2 flex w-full max-w-[933px] -translate-x-1/2 flex-col gap-5 px-6 lg:bottom-[100px] lg:left-[130px] lg:translate-x-0 lg:px-0">
        <h1 className="w-full text-[40px] font-bold leading-[48px] text-white sm:text-[50px] sm:leading-[60px] lg:text-[80px] lg:leading-[101px]">
          Our Services
        </h1>
        <p className="w-full text-base font-medium leading-snug text-[#B0B0B0] sm:text-lg lg:text-[18px] lg:leading-[23px]">
          Five specialist engineering disciplines. One integrated consultancy.
          Delivering precision-led infrastructure outcomes across NSW, QLD, and
          Victoria.
        </p>
      </div>
    </section>
  );
}
