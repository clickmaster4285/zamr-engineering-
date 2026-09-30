"use client";

import Image from "next/image";
import { heroContent } from "@/mockData/engineering-impact";

export default function ImpactHero() {
  const { title, subtitle, image } = heroContent;

  return (
    <section className="relative h-[506px] w-full overflow-hidden lg:h-[414.81px] 2xl:h-[700px]">
      <Image
        src={image}
        alt="ZAMR Engineering infrastructure"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-[var(--overlay-image-hero)]" />

      <div className="absolute left-4 right-4 top-[142px] flex flex-col items-start gap-6 lg:left-[77.04px] lg:right-auto lg:top-[calc(50%-89.925px+92.44px)] lg:w-[720.59px] lg:gap-[11.85px] 2xl:left-[130px] 2xl:top-[calc(50%-134px+156px)] 2xl:w-[1216px] 2xl:gap-5">
        <h1 className="w-full text-[36px] font-bold leading-[44px] text-white lg:text-[47.4074px] lg:leading-[60px] 2xl:text-[80px] 2xl:leading-[101px]">
          {title.split("\n").map((line, i) => (
            <span key={i}>
              {line}
              {i < title.split("\n").length - 1 && <br />}
            </span>
          ))}
        </h1>
        <p className="w-full text-base font-normal leading-6 text-[var(--text-light-subtle)] lg:text-[13px] lg:font-medium lg:leading-4 2xl:text-[18px] 2xl:leading-[23px]">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
