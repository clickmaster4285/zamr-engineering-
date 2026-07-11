"use client";

import Image from "next/image";
import Link from "next/link";
import { featuredProjects } from "@/mockData/engineering-impact";

export default function FeaturedProjects() {
  return (
    <section className="w-full bg-white px-6 py-16 lg:p-[130px]">
      <div className="flex w-full flex-col gap-[60px]">
        {/* Header */}
        <div className="flex w-full flex-col gap-7">
          <div className="flex flex-row items-center gap-4">
            <span className="text-sm font-medium tracking-[3px] text-[var(--color-primary)] lg:text-base">06</span>
            <span className="h-px w-[104px] bg-black" />
            <span className="text-sm font-medium tracking-[3px] uppercase text-[#333333] lg:text-base">Projects</span>
          </div>
          <h2 className="w-full text-[36px] font-bold leading-[44px] text-[#090D15] sm:text-[44px] sm:leading-[55px]">
            Projects That Reflect Our Commitment
          </h2>
        </div>

        {/* Project cards — 3 columns */}
        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4">
          {featuredProjects.map((project) => (
            <Link
              key={project.title}
              href={project.href}
              className="group relative h-[280px] w-full overflow-hidden bg-[#090D15] sm:h-[320px] lg:h-[340px]"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[var(--overlay-image-default)]" />
              <h3 className="absolute bottom-[50px] left-[50px] text-lg font-semibold leading-[23px] text-white">
                {project.title}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
