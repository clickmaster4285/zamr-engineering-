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
      <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[700px] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-[var(--overlay-image-hero)]" />

        <div className="absolute bottom-0 left-0 right-0 px-6 pb-10 sm:pb-12
                        lg:bottom-auto lg:left-[130px] lg:right-auto lg:w-[933px] lg:px-0 lg:pb-0
                        lg:top-1/2 lg:translate-y-[calc(-50%+33.5px)]">
          <div className="flex flex-col gap-3 sm:gap-4 lg:gap-5">
            <h1 className="font-bold uppercase text-white
                           text-[32px] leading-[38px]
                           sm:text-[48px] sm:leading-[56px]
                           lg:text-[80px] lg:leading-[101px]">
              {title}
            </h1>
            <p className="font-medium text-[var(--text-light-subtle)]
                          text-sm
                          sm:text-base
                          lg:text-lg lg:leading-[23px]">
              {subtitle}
            </p>
          </div>
        </div>

        {stats && (
          <div className="hidden lg:block absolute top-[536px] bg-[#08142A]">
            <div className="mx-auto flex max-w-[1468px]">
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`flex-1 flex flex-col justify-center px-[20px] py-[24px] min-h-[103px] ${
                    i > 0 ? "border-l border-[rgba(255,255,255,0.07)]" : ""
                  }`}
                >
                  <span className={`${barlow.className} font-semibold text-[12px] leading-[14px] text-white/30`}>
                    {stat.label}
                  </span>
                  <span className={`${barlow.className} font-bold text-[14px] leading-[17px] text-white/80 mt-[7px]`}>
                    {stat.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {stats && (
        <div className="lg:hidden w-full bg-[#08142A]">
          <div className="flex flex-wrap">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`flex-1 min-w-[33.333%] flex flex-col justify-center px-4 py-5 min-h-[80px] ${
                  i % 3 !== 0 ? "border-l border-[rgba(255,255,255,0.07)]" : ""
                } ${i >= 3 ? "border-t border-[rgba(255,255,255,0.07)]" : ""}`}
              >
                <span className={`${barlow.className} font-semibold text-[10px] leading-[12px] text-white/30`}>
                  {stat.label}
                </span>
                <span className={`${barlow.className} font-bold text-[12px] leading-[15px] text-white/80 mt-1`}>
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
