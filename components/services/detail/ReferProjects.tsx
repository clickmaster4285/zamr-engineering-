"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Barlow } from "next/font/google";
import { getProjectBySlug } from "@/mockData/projects";

const barlow = Barlow({
  weight: ["700"],
  subsets: ["latin"],
  display: "swap",
});

interface Props {
  /** Optional slug — when provided, reads that project's `referProjects`
   *  from mockData. When omitted, defaults to the first project's data. */
  projectSlug?: string;
}

export default function ReferProjects({ projectSlug }: Props) {
  const project =
    getProjectBySlug(projectSlug ?? "Metropolitan-Bridge-Rehabilitation") ??
    getProjectBySlug("hunter-valley-renewable-energy-hub");

  const number = "02";
  const label = "PROJECTS";
  const heading = "Refer Capability Statement";
  const allProjectsLink = "/projects";
  const cards = project?.referProjects ?? [];

  return (
    <section className="w-full bg-white px-6 py-12 lg:px-[130px] lg:py-[130px]">
      <div className="flex flex-col gap-[60px]">
        {/* Header row — label/heading on left, ALL PROJECTS button on right */}
        <div className="flex w-full flex-col gap-7 lg:flex-row lg:items-center lg:justify-between lg:gap-[903px]">
          <div className="flex w-full max-w-[556px] flex-col gap-[28px]">
            <div className="flex items-center gap-4">
              <span className="text-[16px] font-medium leading-5 tracking-[3px] text-[var(--color-blue-accent)]">
                {number}
              </span>
              <span className="h-px w-[104px] bg-[var(--text-dark)]" />
              <span className="text-[16px] font-medium leading-5 tracking-[3px] uppercase text-[var(--text-dark)]">
                {label}
              </span>
            </div>

            <h2 className="text-[36px] font-bold leading-[44px] text-[var(--text-dark)] sm:text-[40px] sm:leading-[50px] lg:text-[44px] lg:leading-[55px]">
              {heading}
            </h2>
          </div>

          <Link
            href={allProjectsLink}
            className="group flex w-fit items-center gap-2 text-[var(--color-blue-header)] transition-colors duration-300 hover:text-[var(--color-secondary)]"
          >
            <span
              className="text-[12px] font-bold leading-4 tracking-[1.68px]"
              style={{ fontFamily: barlow.style.fontFamily }}
            >
              ALL PROJECTS
            </span>
            <span className="transition-transform duration-300 group-hover:translate-x-[5px]">
              <ArrowRight size={24} strokeWidth={1.25} />
            </span>
          </Link>
        </div>

        {/* Project cards row */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((project) => (
            <div
              key={project.slug}
              className="group relative h-[260px] w-full overflow-hidden sm:h-[300px] lg:h-[340px]"
              style={{ background: "var(--text-heading)" }}
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/50" />

              <h3 className="absolute bottom-[50px] left-[50px] right-[50px] text-[18px] font-semibold leading-[23px] text-white">
                {project.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}