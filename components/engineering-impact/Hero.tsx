"use client";

import Image from "next/image";
import { heroContent } from "@/mockData/engineering-impact";

export default function ImpactHero() {
  const { title, subtitle, image } = heroContent;

  return (
    <section className="relative h-[450px] w-full overflow-hidden sm:h-[550px] lg:h-[700px]">
      <Image
        src={image}
        alt="ZAMR Engineering infrastructure"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-[var(--overlay-image-hero)]" />

      <div className="absolute bottom-8 left-1/2 flex w-full max-w-[1216px] -translate-x-1/2 flex-col gap-4 px-4 sm:bottom-10 sm:px-6 lg:bottom-[60px] lg:left-[130px] lg:translate-x-0 lg:gap-5 lg:px-0">
        <h1 className="w-full text-[28px] font-bold leading-[36px] text-white sm:text-[40px] sm:leading-[48px] md:text-[50px] md:leading-[60px] lg:text-[80px] lg:leading-[101px]">
          {title.split("\n").map((line, i) => (
            <span key={i}>
              {line}
              {i < title.split("\n").length - 1 && <br />}
            </span>
          ))}
        </h1>
        <p className="w-full text-xs font-medium leading-relaxed text-[var(--text-light-subtle)] sm:text-sm md:text-base lg:text-[18px] lg:leading-[23px]">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
