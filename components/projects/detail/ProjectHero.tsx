"use client";

import Image from "next/image";
import Link from "next/link";
import { Barlow } from "next/font/google";
import { clientLogos } from "@/mockData/landing";
import { defaultHeroImage } from "@/mockData/projects";
import ProjectImage from "@/components/projects/ProjectImage";

const barlow = Barlow({
  weight: ["600", "700"],
  subsets: ["latin"],
  display: "swap",
});

interface Stat {
  label: string;
  value: string;
}

interface Props {
  image?: string;
  title: string;
  subtitle: string;
  category?: string;
  stats?: Stat[];
}

export default function ProjectHero({
  image = defaultHeroImage,
  title,
  subtitle,
  category,
  stats = [],
}: Props) {
  const visibleStats = stats.filter(
    (stat) => stat.label.toLowerCase() !== "status" && stat.value.trim() !== "",
  );
  const client = visibleStats.find((stat) => stat.label.toLowerCase() === "client");
  const otherStats = visibleStats.filter((stat) => stat.label.toLowerCase() !== "client");
  const clientLogo = category
    ? clientLogos.find((logo) => logo.category === category)
    : undefined;

  return (
    <section className="relative w-full">
      <div className="relative flex min-h-[866px] w-full flex-col overflow-hidden lg:min-h-[600px] 2xl:min-h-[732px]">
        <ProjectImage src={image} alt={title} fill priority className="object-cover" />
        <div className="absolute inset-0 bg-[var(--overlay-image-hero)]" />

        <div className="relative z-10 mx-auto flex w-full max-w-[1728px] flex-1 flex-col px-5 pb-5 pt-[165px] lg:px-[77px] lg:pb-8 lg:pt-[226px] 2xl:px-[130px] 2xl:pb-[49px] 2xl:pt-[246px]">
          <div className="mt-auto mb-4 flex max-w-[1174px] flex-col 2xl:mb-[30px]">
            <div className="flex items-center gap-3.5 text-[var(--text-light-subtle)]">
              <Link
                href="/projects"
                className="font-normal text-[12px] leading-[15px] tracking-[2px] lg:text-[14px] lg:leading-[18px] lg:tracking-[3px] 2xl:text-[18px] 2xl:leading-[23px]"
              >
                ALL PROJECTS
              </Link>
              <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-white/85" />
              {category && (
                <span className="font-normal text-[12px] uppercase leading-[15px] tracking-[2px] lg:text-[14px] lg:leading-[18px] lg:tracking-[3px] 2xl:text-[18px] 2xl:leading-[23px]">
                  {category}
                </span>
              )}
            </div>

            <div className="mt-4 flex flex-col gap-4 2xl:mt-[30px]">
              <h1 className="font-bold text-white text-[36px] leading-[41px] lg:text-[47px] lg:leading-[60px] 2xl:text-[80px] 2xl:leading-[101px]">
                {title}
              </h1>
              {subtitle && (
                <p className="font-medium text-[var(--text-light-subtle)] text-[16px] leading-5 lg:hidden">
                  {subtitle}
                </p>
              )}
            </div>
          </div>

          {visibleStats.length > 0 && (
            <div className="bg-[var(--bg-project-detail-stats)]">
              <div className="flex flex-col lg:hidden">
                {client && (
                  <div className="flex flex-col gap-3 border-b border-white/10 px-5 py-5">
                    <span className={`${barlow.className} text-[12px] font-semibold leading-[14px] text-white/30`}>
                      {client.label.toUpperCase()}
                    </span>
                    {clientLogo ? (
                      <Image
                        src={clientLogo.src}
                        alt={clientLogo.alt}
                        width={150}
                        height={57}
                        className="h-[57px] w-[150px] object-contain object-left"
                      />
                    ) : (
                      <span className={`${barlow.className} text-[18px] font-bold leading-[22px] text-white/[0.82]`}>
                        {client.value}
                      </span>
                    )}
                  </div>
                )}
                {otherStats.map((stat, index) => (
                  <div
                    key={stat.label}
                    className={`flex min-h-[82px] flex-col justify-center gap-1.5 px-5 py-5 ${
                      index < otherStats.length - 1 ? "border-b border-white/10" : ""
                    }`}
                  >
                    <span className={`${barlow.className} text-[12px] font-semibold leading-[14px] text-white/30`}>
                      {stat.label.toUpperCase()}
                    </span>
                    <span className={`${barlow.className} text-[18px] font-bold leading-[22px] text-white/[0.82]`}>
                      {stat.value}
                    </span>
                  </div>
                ))}
              </div>

              <div className="hidden h-[147px] items-stretch lg:flex">
                {client && (
                  <div className="flex h-full w-[266px] shrink-0 flex-col justify-center gap-1.5 px-5 py-6 2xl:w-auto 2xl:min-w-0 2xl:flex-1 2xl:shrink">
                    <span className={`${barlow.className} text-[12px] font-semibold leading-[14px] text-white/30`}>
                      {client.label.toUpperCase()}
                    </span>
                    {clientLogo ? (
                      <Image
                        src={clientLogo.src}
                        alt={clientLogo.alt}
                        width={207}
                        height={79}
                        className="h-[79px] w-[207px] max-w-full object-contain object-left"
                      />
                    ) : (
                      <span className={`${barlow.className} text-[14px] font-bold leading-[17px] text-white/[0.82]`}>
                        {client.value}
                      </span>
                    )}
                  </div>
                )}
                {otherStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="flex h-full min-w-0 flex-1 flex-col justify-center gap-[7px] border-l border-white/[0.07] px-5 py-6"
                  >
                    <span className={`${barlow.className} text-[12px] font-semibold leading-[14px] text-white/30`}>
                      {stat.label.toUpperCase()}
                    </span>
                    <span className={`${barlow.className} text-[14px] font-bold leading-[17px] text-white/[0.82]`}>
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
