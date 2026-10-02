"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  projectFilters,
  clientLogos,
  projectsFeaturedWork,
  projectsSection,
} from "@/mockData/landing";
import {
  FeaturedProjectsGrid,
  ProjectFilterPills,
  type FeaturedProjectItem,
} from "@/components/projects/FeaturedProjectsGrid";

function toFeaturedItems(
  items: typeof projectsFeaturedWork,
): FeaturedProjectItem[] {
  return items.map((p) => ({
    slug: p.slug,
    index: p.index,
    title: p.title,
    category: p.category,
    shortDescription: p.shortDescription,
    image: p.featuredImage,
  }));
}

function AllProjectsLink({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/projects"
      className={`group inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-[3px] text-[var(--color-primary)] transition-colors duration-300 hover:text-[var(--color-secondary)] lg:gap-[5px] lg:text-[13px] lg:leading-4 lg:tracking-[1.78px] 2xl:gap-2 2xl:text-base 2xl:leading-5 2xl:tracking-[3px] ${className}`}
    >
      {projectsSection.ctaLabel}
      <span className="transition-transform duration-300 group-hover:translate-x-[5px]">
        <ArrowRight
          className="h-4 w-4 lg:h-[14px] lg:w-[14px] 2xl:h-6 2xl:w-6"
          strokeWidth={1.25}
        />
      </span>
    </Link>
  );
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState(projectFilters[0]);
  const { sectionNumber, sectionLabel, heading } = projectsSection;

  const filteredProjects =
    activeFilter === "All"
      ? projectsFeaturedWork
      : projectsFeaturedWork.filter(
          (p) => p.category.toLowerCase() === activeFilter.toLowerCase(),
        );

  return (
    <section className="w-full min-w-0 max-w-full overflow-x-hidden bg-[var(--bg-light)] px-5 py-[30px] lg:px-[77px] lg:py-[77px] 2xl:p-[130px]">
      <div className="flex w-full min-w-0 flex-col gap-5 lg:gap-9 2xl:gap-[60px]">
        <div className="flex w-full flex-col gap-3 lg:flex-row lg:items-start lg:justify-between lg:gap-8">
          <div className="flex flex-col gap-3 lg:gap-[18px] 2xl:gap-[30px]">
            <div className="flex items-center gap-3 lg:gap-[9.5px] 2xl:gap-4">
              <span className="text-xs font-bold leading-[15px] tracking-[3px] text-[var(--color-primary)] lg:text-[13px] lg:font-medium lg:leading-4 lg:tracking-[1.78px] 2xl:text-base 2xl:leading-5 2xl:tracking-[3px]">
                {sectionNumber}
              </span>
              <span className="h-px w-[60px] bg-[var(--text-heading)] lg:w-[62px] 2xl:w-[104px]" />
              <span className="text-[12px] font-medium leading-[15px] tracking-[3px] uppercase text-[var(--text-section-label)] lg:leading-4 lg:tracking-[1.78px] 2xl:leading-5 2xl:tracking-[3px]">
                {sectionLabel}
              </span>
            </div>
            <h2 className="text-[28px] font-bold leading-[1.2] text-[var(--text-heading)] lg:text-[33px] lg:leading-[42px] 2xl:text-[56px] 2xl:leading-[71px]">
              {heading}
            </h2>
          </div>
        </div>

        <ProjectFilterPills
          filters={projectFilters}
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
        />

        <FeaturedProjectsGrid
          projects={toFeaturedItems(filteredProjects)}
          priorityFirst
        />

        <div className="w-full">
          <div className="flex w-full flex-col gap-3 pt-4 lg:hidden">
            <div className="flex w-full flex-row flex-wrap justify-center gap-3">
              {clientLogos.slice(0, 6).map((logo) => (
                <div
                  key={logo.alt}
                  className="relative flex h-[50px] w-[110px] shrink-0 items-center justify-center border border-[var(--border-section)] bg-white"
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={96}
                    height={28}
                    className="max-h-[28px] w-auto max-w-[96px] object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="hidden w-full flex-row items-center gap-[18px] lg:flex 2xl:gap-[30px]">
            {clientLogos.map((logo) => (
              <div
                key={logo.alt}
                className="relative flex h-[51px] min-w-0 flex-1 items-center justify-center bg-[var(--bg-section)] 2xl:h-[86px]"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={157}
                  height={57}
                  className="max-h-[34px] w-auto max-w-[94px] object-contain 2xl:max-h-[57px] 2xl:max-w-[157px]"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex w-full justify-end">
          <AllProjectsLink />
        </div>
      </div>
    </section>
  );
}
