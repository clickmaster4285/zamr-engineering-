"use client";

import Image from "next/image";
import { heroContent } from "@/mockData/about";

export default function AboutHero() {
  const { title, subtitle, image } = heroContent;

  return (
    <section className="relative h-[400px] w-full overflow-hidden sm:h-[500px] lg:h-[700px]">
      <Image
        src={image}
        alt={title}
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-[var(--overlay-image-hero)]" />

      <div className="absolute bottom-10 left-1/2 flex w-full max-w-[933px] -translate-x-1/2 flex-col gap-4 px-6 lg:bottom-[100px] lg:left-[130px] lg:translate-x-0 lg:px-0 lg:gap-5">
        <h1 className="w-full text-[40px] font-bold leading-[48px] text-white sm:text-[50px] sm:leading-[60px] lg:text-[80px] lg:leading-[101px]">
          {title}
        </h1>
        <p className="w-full text-base font-medium leading-snug text-[var(--color-text-light-subtle)] sm:text-lg lg:text-[18px] lg:leading-[23px]">
          {subtitle}
        </p>
      </div>
    </section>
  );
}