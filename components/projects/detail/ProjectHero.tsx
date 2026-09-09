"use client";
import Image from "next/image";
import { Barlow } from "next/font/google";
import { defaultHeroImage } from "@/mockData/projects";
const barlow = Barlow({
  weight: ["600", "700"],
  subsets: ["latin"],
  display: "swap",
});
interface Props {
  image?: string;
  title: string;
  subtitle: string;
}
export default function ProjectHero({ image = defaultHeroImage, title, subtitle }: Props) {
  const stats = [
    {
      label: "Client",
      value: "Transport for NSW",
    },
    {
      label: "Value",
      value: "$45 Million",
    },
    {
      label: "Duration",
      value: "March 2022–March 2025",
    },
    {
      label: "Location",
      value: "Bathurst, NSW",
    },
    {
      label: "Scope",
      value: "Civil Works",
    },
  ];

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
                       lg:left-[130px] lg:top-[261px] lg:w-[1100px] lg:px-0"
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
            <div
              className="
      bg-[var(--bg-project-detail-stats)]
      lg:absolute lg:left-[130px] lg:top-[536px]
      lg:w-[82vw]
    "
            >
              {/* Desktop */}
              <div className="hidden min-h-[147px] lg:flex">
                {/* Client logo */}
                <div className="flex w-[294px] flex-col justify-center px-5">
                  <span
                    className={`${barlow.className} mb-2 text-[12px] font-semibold leading-[14px] text-white/30`}
                  >
                    CLIENT
                  </span>

                  <Image
                    src="/images/image15.png"
                    alt="Transport for NSW"
                    width={210}
                    height={80}
                    className="h-auto max-h-[80px] w-auto object-contain object-left"
                  />
                </div>

                {/* Other statistics */}
                {stats
                  .filter((stat) => stat.label.toLowerCase() !== "client")
                  .map((stat) => (
                    <div
                      key={stat.label}
                      className="flex flex-1 flex-col justify-center  px-5"
                    >
                      <span
                        className={`${barlow.className} text-[12px] font-semibold leading-[14px] text-white/30`}
                      >
                        {stat.label}
                      </span>
                      <span
                        className={`${barlow.className} pt-[7px] text-[14px] font-bold leading-[17px] text-white/80`}
                      >
                        {stat.value}
                      </span>
                    </div>
                  ))}
              </div>

              {/* Mobile and tablet */}
              <div className="grid grid-cols-3 lg:hidden">
                {/* Client logo */}
                <div className="col-span-3 flex min-h-[90px] flex-col justify-center px-4 py-4">
                  <span
                    className={`${barlow.className} mb-2 text-[10px] font-semibold leading-[12px] text-white/30`}
                  >
                    CLIENT
                  </span>

                  <Image
                    src="/images/image15.png"
                    alt="Transport for NSW"
                    width={207}
                    height={79}
                    className="h-auto max-h-[68px] w-auto object-contain object-left"
                  />
                </div>

                {/* Other statistics */}
                {stats
                  .filter((stat) => stat.label.toLowerCase() !== "client")
                  .map((stat, i) => (
                    <div
                      key={stat.label}
                      className={`flex min-h-[76px] flex-col justify-center px-3 py-4 ${i % 3 !== 0 ? "border-l border-white/[0.07]" : ""
                        } ${i >= 3 ? "border-t border-white/[0.07]" : ""}`}
                    >
                      <span
                        className={`${barlow.className} text-[10px] font-semibold leading-[12px] text-white/30`}
                      >
                        {stat.label}
                      </span>

                      <span
                        className={`${barlow.className} pt-1 text-[12px] font-bold leading-[15px] text-white/80`}
                      >
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