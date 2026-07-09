"use client";

import Image from "next/image";
import { Barlow } from "next/font/google";

const barlow = Barlow({
  weight: ["600", "700"],
  subsets: ["latin"],
  display: "swap",
});

interface StatItem {
  label: string;
  value: string;
}

interface Props {
  image?: string;
  title: string;
  subtitle: string;
  stats?: StatItem[];
}

export default function ProjectHero({ image = "/images/image5.jpeg", title, subtitle, stats }: Props) {
  return (
    <section className="relative w-full">
      {/* Figma: 1728 × 700px hero with overlay rgba(7, 24, 61, 0.8) */}
      <div className="relative w-full h-[500px] sm:h-[560px] lg:h-[700px] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          priority
          className="object-cover"
        />

        {/* Overlay — exact Figma: linear-gradient(0deg, rgba(7,24,61,0.8), rgba(7,24,61,0.8)) */}
        <div className="absolute inset-0 bg-[var(--bg-hero)]/80" />

        {/* Frame 1321319043 — title + subtitle */}
        {/* Figma: left:130px, top:calc(50% - 245px/2 + 33.5px) → 261px for 700px container */}
        <div
          className="absolute bottom-28 left-0 right-0 px-6 sm:px-10
                        lg:bottom-auto lg:left-[130px] lg:right-auto lg:w-[933px] lg:px-0
                        lg:top-[261px]"
        >
          {/* Figma: gap: 20px between title and subtitle */}
          <div className="flex flex-col gap-5">
            <h1 className="font-bold text-white
                           text-[32px] leading-[40px]
                           sm:text-[48px] sm:leading-[60px]
                           lg:text-[80px] lg:leading-[101px]">
              {title}
            </h1>
            <p className="font-medium text-[var(--color-text-light-subtle)]
                          text-[14px] leading-[19px]
                          sm:text-[16px] sm:leading-[22px]
                          lg:text-[18px] lg:leading-[23px]">
              {subtitle}
            </p>
          </div>
        </div>

        {/* Frame 1321319076 — stats bar */}
        {/* Figma: absolute, left:calc(50% - 1468px/2), top:536px, 1468×103px, bg:#08142A */}
        {stats && (
          <div className="absolute left-0 right-0 bottom-0 lg:bottom-auto lg:left-1/2 lg:-translate-x-1/2 lg:w-[1468px] lg:top-[536px] bg-[#08142A]">
            {/* Desktop: 6 equal columns */}
            <div className="hidden lg:flex">
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`flex flex-1 flex-col justify-start px-5 py-6 min-h-[103px] ${
                    i > 0 ? "border-l border-white/[0.07]" : ""
                  }`}
                >
                  {/* Figma: Barlow 600, 12px/14px, rgba(255,255,255,0.3) */}
                  <span className={`${barlow.className} font-semibold text-[12px] leading-[14px] text-white/30`}>
                    {stat.label}
                  </span>
                  {/* Figma: Barlow 700, 14px/17px, rgba(255,255,255,0.82), padding-top:7px */}
                  <span className={`${barlow.className} font-bold text-[14px] leading-[17px] text-white/82 pt-[7px]`}>
                    {stat.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Mobile: 3 columns, 2 rows */}
            <div className="lg:hidden flex flex-wrap">
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`flex-1 min-w-[33.333%] flex flex-col justify-start px-5 py-6 min-h-[80px] ${
                    i % 3 !== 0 ? "border-l border-white/[0.07]" : ""
                  } ${i >= 3 ? "border-t border-white/[0.07]" : ""}`}
                >
                  <span className={`${barlow.className} font-semibold text-[10px] leading-[12px] text-white/30`}>
                    {stat.label}
                  </span>
                  <span className={`${barlow.className} font-bold text-[12px] leading-[15px] text-white/82 pt-1`}>
                    {stat.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
