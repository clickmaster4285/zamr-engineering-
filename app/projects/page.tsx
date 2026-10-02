"use client";

import { useState } from "react";
import Image from "next/image";
import { Barlow } from "next/font/google";
import {
  projects,
  projectFilters,
  projectFilterCategoryMap,
  projectsHeroStats,
  projectsHowWeDeliver,
} from "@/mockData/projects";
import Contacts from "@/components/Contacts";
import {
  FeaturedProjectsGrid,
  ProjectFilterPills,
  type FeaturedProjectItem,
} from "@/components/projects/FeaturedProjectsGrid";

const barlow = Barlow({
  weight: ["500", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});

const INITIAL_COUNT = 6;
const LOAD_MORE_COUNT = 3;

function toFeaturedItems(
  items: typeof projects,
): FeaturedProjectItem[] {
  return items.map((p) => ({
    slug: p.slug,
    index: p.index,
    title: p.title,
    category: p.category,
    shortDescription: p.shortDescription,
    image: p.heroImage,
  }));
}

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState(projectFilters[0]);
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => {
          const categories =
            projectFilterCategoryMap[activeFilter.toLowerCase()];
          return categories?.some(
            (c) => c.toLowerCase() === p.category.toLowerCase(),
          );
        });

  const displayedProjects = filteredProjects.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProjects.length;

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + LOAD_MORE_COUNT);
  };

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
    setVisibleCount(INITIAL_COUNT);
  };

  return (
    <main className="w-full flex flex-col items-center">
      {/* ──────── HERO ──────── */}
      <section className="relative w-full h-[400px] overflow-hidden sm:h-[620px] lg:h-[700px]">
        <Image
          src="/images/projectHero.svg"
          alt="Our Projects"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[var(--overlay-image-hero)]" />

        <div className="absolute bottom-0 left-0 right-0 pb-24 sm:top-[130px] sm:bottom-auto sm:pb-0 lg:left-[130px] lg:right-auto lg:top-[286.5px] lg:w-[933px]">
          <div className="flex flex-col gap-3 px-6 sm:gap-5 lg:px-0">
            <h1 className="font-bold text-white text-[32px] leading-[38px] sm:text-[52px] sm:leading-[62px] lg:text-[80px] lg:leading-[101px]">
              Our Projects
            </h1>
            <p className="font-medium text-[var(--color-text-light-subtle)] text-[14px] leading-[19px] sm:text-[16px] sm:leading-[22px] lg:text-[18px] lg:leading-[23px]">
              From complex transport upgrades to structural rehabilitation,
              civil engineering, and independent project verification, ZAMR
              Engineering has delivered practical, high-quality engineering
              solutions across Australia.
            </p>
            <p className="font-medium text-[var(--color-text-light-subtle)] text-[14px] leading-[19px] sm:text-[16px] sm:leading-[22px] lg:text-[18px] lg:leading-[23px]">
              Every project reflects the same commitment to technical
              excellence, collaboration, and long-term asset performance
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 sm:bottom-auto sm:top-[525px] lg:left-[130px] lg:right-auto lg:w-[1468px]">
          <div className="flex flex-row items-stretch px-4 sm:px-6 lg:px-0">
            {projectsHeroStats.map((stat, i) => (
              <div
                key={stat.label}
                className={`flex flex-col justify-center items-start flex-1 min-w-0 ${
                  i > 0 ? "border-l border-white/37" : ""
                } px-3 py-4 sm:px-4 sm:py-5 lg:px-[30px] lg:py-[30px] lg:h-[115px]`}
              >
                <span
                  className={`${barlow.className} font-black text-white text-[16px] leading-[20px] sm:text-[24px] sm:leading-[28px] lg:text-[34px] lg:leading-[34px]`}
                  style={{ letterSpacing: "-0.952px" }}
                >
                  {stat.value}
                </span>
                <span
                  className={`${barlow.className} font-medium text-white/32 pt-[2px] sm:pt-1 lg:pt-[6px] text-[6px] leading-[8px] sm:text-[8px] sm:leading-[11px] lg:text-[9.5px] lg:leading-[14px]`}
                  style={{ letterSpacing: "1.33px" }}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────── PROJECTS SECTION ──────── */}
      <section className="w-full bg-[var(--bg-light)] px-4 py-12 sm:px-6 lg:px-[77px] lg:py-[77px] 2xl:px-[130px] 2xl:py-[130px]">
        <div className="flex w-full flex-col gap-10 lg:gap-[60px]">
          <div className="flex flex-col gap-6 lg:gap-[30px]">
            <div className="flex flex-col gap-6 lg:gap-[30px]">
              <div className="flex items-center gap-4">
                <span className="text-base font-medium tracking-[3px] text-[var(--color-primary)]">
                  01
                </span>
                <span className="h-px w-[104px] bg-[var(--bg-hero)]" />
                <span className="text-base font-medium tracking-[3px] uppercase text-[var(--text-dark)]">
                  PROJECTS
                </span>
              </div>
              <h2 className="text-3xl font-bold leading-tight text-[var(--text-dark)] sm:text-4xl md:text-[56px] md:leading-[71px]">
                Featured Work
              </h2>
            </div>

            <ProjectFilterPills
              filters={projectFilters}
              activeFilter={activeFilter}
              onFilterChange={handleFilterChange}
            />

            <FeaturedProjectsGrid
              projects={toFeaturedItems(displayedProjects)}
              showAdditionalGrid
              priorityFirst
            />
          </div>

          <div className="flex justify-end">
            <button
              type="button"
              onClick={handleLoadMore}
              disabled={!hasMore}
              className="group w-[192px] cursor-pointer border border-[var(--color-primary)] bg-[var(--bg-light)] py-[14px] text-[14px] font-bold uppercase tracking-[3px] text-[var(--color-primary)] transition-all duration-300 hover:bg-[var(--color-primary)] hover:text-white active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-[var(--bg-light)] disabled:hover:text-[var(--color-primary)] disabled:active:scale-100"
            >
              Load More
            </button>
          </div>
        </div>
      </section>

      {/* ──────── HOW WE DELIVER ──────── */}
      <section className="w-full bg-[var(--bg-hero)] px-4 py-12 sm:px-6 lg:px-[130px] lg:py-[130px]">
        <div className="mx-auto flex max-w-[1468px] flex-col gap-7 lg:gap-[60px]">
          <div className="flex flex-col gap-7 lg:gap-[28px]">
            <div className="flex items-center gap-4">
              <span className="text-[16px] font-medium leading-5 tracking-[3px] text-white">
                02
              </span>
              <span className="h-px w-[104px] bg-white" />
              <span className="text-[16px] font-medium leading-5 tracking-[3px] uppercase text-white">
                HOW WE DELIVER
              </span>
            </div>
            <h2 className="text-[30px] font-bold leading-[38px] text-white sm:text-[36px] sm:leading-[45px] lg:text-[44px] lg:leading-[55px]">
              Every project, the same standard.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2">
            {projectsHowWeDeliver.map((item) => (
              <div
                key={item.title}
                className="flex flex-col gap-3 border-b border-l border-white/[0.08] p-4 sm:p-6"
              >
                <h3 className="text-[18px] font-semibold leading-[23px] text-white">
                  {item.title}
                </h3>
                <p className="text-[12px] leading-[15px] text-[var(--color-text-light-subtle)]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Contacts sectionNumber="03" />
    </main>
  );
}
