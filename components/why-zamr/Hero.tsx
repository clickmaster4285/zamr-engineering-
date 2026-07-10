"use client";

import Image from "next/image";
import { heroContent } from "@/mockData/why-zamr";

export default function WhyZamrHero() {
  const { title, subtitle, image } = heroContent;

  return (
    <section className="relative h-[500px] w-full overflow-hidden sm:h-[600px] lg:h-[700px]">
      <Image
        src={image}
        alt="Engineering confidence"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-[var(--overlay-image-hero)]" />

      <div className="absolute left-1/2 top-1/2 flex w-full max-w-[1468px] -translate-x-1/2 -translate-y-1/2 flex-col gap-[20px] px-6 lg:left-[130px] lg:translate-x-0 lg:px-0">
        <h1 className="w-full text-[40px] font-bold leading-[48px] text-white sm:text-[50px] sm:leading-[60px] lg:text-[80px] lg:leading-[101px]">
          {title.split("\n").map((line, i) => (
            <span key={i}>
              {line}
              {i < title.split("\n").length - 1 && <br />}
            </span>
          ))}
        </h1>
        <p className="w-full text-sm font-medium leading-snug text-[var(--text-light-subtle)] sm:text-base lg:text-[18px] lg:leading-[23px]">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
