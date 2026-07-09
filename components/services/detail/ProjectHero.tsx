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
      <div className="relative w-full h-[500px] sm:h-[560px] lg:h-[700px] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-[var(--bg-hero)]/80" />

        <div className="absolute bottom-28 left-0 right-0 px-6 sm:px-10
                        lg:bottom-auto lg:left-[130px] lg:right-auto lg:w-[933px] lg:px-0
                        lg:top-[265px]">
          <div className="flex flex-col gap-5">
            <h1 className="font-bold text-white
                           text-[32px] leading-[40px]
                           sm:text-[48px] sm:leading-[60px]
                           lg:text-[80px] lg:leading-[101px]">
              {title}
            </h1>
            <p className="font-medium text-[var(--text-light-subtle)]
                          text-[14px] leading-[19px]
                          sm:text-[16px] sm:leading-[22px]
                          lg:text-[18px] lg:leading-[23px]">
              {subtitle}
            </p>
          </div>
        </div>
      </div>

      {stats && (
        <div className="w-full bg-[#08142A] mb-12">
          {/* Desktop: 6 columns in a row */}
          <div className="hidden lg:flex mx-auto max-w-[1468px]">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`flex-1 flex flex-col justify-start px-5 py-6 min-h-[103px] ${
                  i > 0 ? "border-l border-white/[0.07]" : ""
                }`}
              >
                <span className={`${barlow.className} font-semibold text-[12px] leading-[14px] text-white/30`}>
                  {stat.label}
                </span>
                <span className={`${barlow.className} font-bold text-[14px] leading-[17px] text-white/82 mt-[7px]`}>
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
                <span className={`${barlow.className} font-bold text-[12px] leading-[15px] text-white/82 mt-1`}>
                  {stat.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
