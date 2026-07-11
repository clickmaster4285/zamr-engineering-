"use client";

import Image from "next/image";
import { heroContent } from "@/mockData/our-teams";

export default function OurTeamsHero() {
  return (
    <section className="relative w-full h-[700px] overflow-hidden">
      {/* Background image with dark overlay */}
      <div className="absolute inset-0">
        <Image
          src={heroContent.image}
          alt="ZAMR Engineering Team"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[rgba(7,24,61,0.8)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col justify-end pb-[156px] px-6 lg:px-[130px]">
        <div className="flex w-full max-w-[1057px] flex-col gap-5">
          <h1 className="text-[56px] font-bold leading-[67px] text-white sm:text-[64px] sm:leading-[81px] lg:text-[80px] lg:leading-[101px]">
            {heroContent.title}
          </h1>
          <p className="max-w-[1057px] text-base font-medium leading-[23px] text-[#B0B0B0] sm:text-lg">
            {heroContent.subtitle}
          </p>
        </div>
      </div>
    </section>
  );
}
