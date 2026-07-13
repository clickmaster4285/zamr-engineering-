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
            <span className="h-px w-12 bg-[var(--text-heading)] sm:w-[104px]" />
            <span className="text-sm font-medium tracking-[3px] uppercase text-[var(--text-dark)] lg:text-base">Projects</span>
          </div>
          <h2 className="w-full text-[36px] font-bold leading-[44px] text-[var(--text-dark)] sm:text-[44px] sm:leading-[55px] lg:text-[56px] lg:leading-[71px]">
            Projects That Reflect Our Commitment
          </h2>
        </div>

        {/* Project cards — 3 columns */}
        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4">
          {featuredProjects.map((project) => (
            <Link
              key={project.title}
              href={project.href}
              className="group relative h-[250px] w-full overflow-hidden bg-[var(--text-heading)] sm:h-[320px] lg:h-[340px]"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[var(--overlay-image-default)] transition-colors duration-300 group-hover:bg-[var(--overlay-image-hover)]" />
              <h3 className="absolute bottom-6 left-6 text-base font-semibold leading-[23px] text-white sm:bottom-10 sm:left-10 sm:text-lg lg:bottom-[50px] lg:left-[50px] lg:text-xl">
                {project.title}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
