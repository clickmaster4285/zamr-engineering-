"use client";
import Image from "next/image";
import { Barlow } from "next/font/google";
import { defaultHeroImage } from "@/mockData/projects";
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
export default function ProjectHero({ image = defaultHeroImage, title, subtitle, stats }: Props) {
  return (
    <section className="relative w-full">
      {/* Figma: 1728 × 700px hero with overlay rgba(7, 24, 61, 0.8) */}
      <div className="relative w-full min-h-[500px] sm:min-h-[560px] lg:h-[700px] overflow-hidden flex flex-col">
        <Image
          src={image}
          alt={title}
          fill
          priority
          className="object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-[var(--overlay-image-hero)]" />

        {/* Mobile/tablet: normal flow flex column so title + stats never overlap.
            Desktop (lg+): switches back to the exact Figma absolute positions. */}
        <div className="relative z-10 flex flex-col flex-1 lg:block">
          {/* Title + subtitle */}
          <div
            className="flex-1 flex flex-col justify-center gap-5 px-6 py-14 sm:px-10
                       lg:absolute lg:flex-none lg:justify-start lg:gap-5 lg:py-0
                       lg:left-[130px] lg:top-[261px] lg:w-[933px] lg:px-0"
          >
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

          {stats && (
            <div className="bg-[var(--bg-hero)] lg:absolute lg:w-[82vw] lg:left-[130px] lg:top-140 lg:bg-[var(--bg-hero)]">
              {/* Desktop: 6 equal columns */}
              <div className="hidden lg:flex">
                {stats.map((stat, i) => (
                  <div
                    key={stat.label}
                    className={`flex flex-1 flex-col justify-center px-5 py-6 min-h-[103px] ${
                      i > 0 ? "border-l border-white/[0.07]" : ""
                    }`}
                  >
                    <span className={`${barlow.className} font-semibold text-[12px] leading-[14px] text-white/30`}>
                      {stat.label}
                    </span>
                    <span className={`${barlow.className} font-bold text-[14px] leading-[17px] text-white/82 pt-[7px]`}>
                      {stat.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Mobile/tablet: solid 3-column grid, wraps into rows automatically */}
              <div className="grid grid-cols-3 lg:hidden">
                {stats.map((stat, i) => (
                  <div
                    key={stat.label}
                    className={`flex flex-col justify-center px-3 py-4 min-h-[76px] ${
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
      </div>
    </section>
  );
}