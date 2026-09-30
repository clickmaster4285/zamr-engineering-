"use client";

import Image from "next/image";
import { heroContent } from "@/mockData/why-zamr";

export default function WhyZamrHero() {
  const { title, subtitle, image } = heroContent;
  const titleLines = title.split("\n");

  return (
    <section className="relative h-[450px] w-full overflow-hidden sm:h-[550px] lg:h-[560px] 2xl:h-[700px]">
      <Image
        src={image}
        alt="Engineering confidence"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-[var(--overlay-image-hero)]" />

      <div className="absolute bottom-8 left-4 right-4 flex flex-col gap-4 sm:bottom-10 sm:left-6 sm:right-6 lg:bottom-12 lg:left-[77px] lg:right-auto lg:w-[calc(100%-154px)] lg:max-w-[900px] lg:gap-4 2xl:bottom-[60px] 2xl:left-[130px] 2xl:w-[calc(100%-260px)] 2xl:max-w-[1468px] 2xl:gap-5">
        <h1 className="w-full text-[28px] font-bold leading-[36px] text-white sm:text-[40px] sm:leading-[48px] lg:text-[47px] lg:leading-[60px] 2xl:text-[80px] 2xl:leading-[101px]">
          {titleLines.map((line, i) => (
            <span key={i}>
              {line}
              {i < titleLines.length - 1 && (
                <>
                  <br className="hidden 2xl:block" />
                  <span className="2xl:hidden"> </span>
                </>
              )}
            </span>
          ))}
        </h1>
        <p className="w-full text-xs font-medium leading-relaxed text-[var(--text-light-subtle)] sm:text-sm lg:text-base lg:leading-6 2xl:text-[18px] 2xl:leading-[23px]">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
