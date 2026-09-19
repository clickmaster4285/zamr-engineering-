"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import {
  projectFilters,
  clientLogos,
  projectsFeaturedWork,
  projectsSection,
} from "@/mockData/landing";

function useInView(threshold = 0.05) {
  const [inView, setInView] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const ref = useCallback(
    (node: HTMLElement | null) => {
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }
      if (!node) return;
      observerRef.current = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setInView(true);
            observerRef.current?.disconnect();
          }
        },
        { threshold, rootMargin: "100px 0px" }
      );
      observerRef.current.observe(node);
    },
    [threshold]
  );
  useEffect(() => {
    return () => observerRef.current?.disconnect();
  }, []);
  return { ref, inView };
}

function ProjectCard({
  project,
  isLarge = false,
  priority = false,
}: {
  project: (typeof projectsFeaturedWork)[number];
  isLarge?: boolean;
  priority?: boolean;
}) {
  const { ref, inView } = useInView();
  const router = useRouter();

  return (
    <div
      ref={ref}
      onClick={() => router.push(`/projects/${project.slug}`)}
      className={`group relative h-full min-w-0 w-full cursor-pointer overflow-hidden transition-all duration-700 ease-out ${
        inView ? "translate-y-0 scale-100" : "translate-y-10 scale-95"
      }`}
    >
      <div
        className={`relative w-full overflow-hidden ${
          isLarge
            ? "h-[320px] lg:h-[386px] 2xl:h-[652px]"
            : "h-[320px] lg:h-[184px] 2xl:h-[311px]"
        }`}
      >
        <Image
          src={project.featuredImage}
          alt={project.title}
          fill
          priority={priority}
          sizes="(min-width: 1536px) 817px, (min-width: 1024px) 484px, 100vw"
          className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-135"
        />

        <div className="absolute inset-0 bg-[var(--overlay-image-default)]" />
        <div
          className={`absolute inset-0 bg-[var(--overlay-image-default)] ${
            !isLarge
              ? "transition-colors duration-500 [@media(hover:hover)_and_(pointer:fine)]:group-hover:bg-[var(--overlay-image-hover)]"
              : ""
          }`}
        />

        {/* Mobile layout — stacked content */}
        <div className="absolute inset-0 flex flex-col justify-between p-6 lg:hidden">
          <span className="text-sm font-bold leading-[18px] tracking-[3px] text-white">
            {project.index}
          </span>
          <h3 className="text-xl font-semibold leading-[1.3] text-white">
            {project.title}
          </h3>
        </div>

        {/* Tablet + Desktop layout */}
        <span
          className={`absolute left-[30px] top-[30px] hidden font-extrabold tracking-[1.78px] text-white lg:block 2xl:left-[50px] 2xl:top-[50px] 2xl:tracking-[3px] ${
            isLarge
              ? "text-[32px] leading-10 2xl:text-[54px] 2xl:leading-[68px]"
              : "text-[20px] leading-[25px] 2xl:text-[34px] 2xl:leading-[43px]"
          }`}
        >
          {project.index}
        </span>

        <h3
          className={`absolute bottom-[30px] left-[30px] right-[30px] hidden font-semibold text-white lg:block 2xl:bottom-[50px] 2xl:left-[50px] 2xl:right-[50px] ${
            isLarge
              ? "max-w-[319px] text-lg leading-[23px] 2xl:max-w-[496px] 2xl:text-[28px] 2xl:leading-[35px]"
              : "max-w-[328px] text-lg leading-[23px] 2xl:max-w-[511px] 2xl:text-[28px] 2xl:leading-[35px]"
          }`}
        >
          {project.title}
        </h3>
      </div>
    </div>
  );
}

function AllProjectsLink({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/projects"
      className={`group inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-[3px] text-[var(--color-primary)] transition-colors duration-300 hover:text-[var(--color-secondary)] lg:gap-[5px] lg:text-[13px] lg:leading-4 lg:tracking-[1.78px] 2xl:gap-2 2xl:text-base 2xl:leading-5 2xl:tracking-[3px] ${className}`}
    >
      {projectsSection.ctaLabel}
      <span className="transition-transform duration-300 group-hover:translate-x-[5px]">
        <ArrowRight className="h-4 w-4 lg:h-[14px] lg:w-[14px] 2xl:h-6 2xl:w-6" strokeWidth={1.25} />
      </span>
    </Link>
  );
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState(projectFilters[1]);
  const { sectionNumber, sectionLabel, heading } = projectsSection;

  const filteredProjects =
    activeFilter === "ALL"
      ? projectsFeaturedWork
      : projectsFeaturedWork.filter(
          (p) => p.category.toLowerCase() === activeFilter.toLowerCase()
        );

  return (
    <section className="w-full max-w-full overflow-x-hidden bg-[var(--bg-light)] px-5 py-[30px] lg:px-[77px] lg:py-[77px] 2xl:p-[130px]">
      <div className="flex w-full min-w-0 flex-col gap-5 lg:gap-9 2xl:gap-[60px]">
        {/* Header */}
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

          <AllProjectsLink className="hidden lg:inline-flex" />
        </div>

        {/* Filters — scroll on mobile/tablet so chips never blow past parent width */}
        <div className="w-full min-w-0 max-w-full overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex w-max min-w-full flex-nowrap gap-2 lg:gap-[9.5px] 2xl:gap-4">
            {projectFilters.map((filter) => {
              const isActive = filter === activeFilter;
              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={`flex h-[38px] shrink-0 items-center justify-center whitespace-nowrap border px-4 py-3 text-[11px] font-medium leading-[14px] tracking-[0.68px] transition-all duration-300 lg:h-[35px] lg:px-[15px] lg:py-[9.5px] lg:text-[13px] lg:leading-4 lg:tracking-[1.78px] 2xl:h-[50px] 2xl:px-[25px] 2xl:py-4 2xl:text-sm 2xl:leading-[18px] 2xl:tracking-[3px] ${
                    isActive
                      ? "border-[var(--color-primary)] bg-[var(--color-primary)] text-white"
                      : "border-[var(--color-primary)] bg-transparent text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white"
                  }`}
                >
                  {filter}
                </button>
              );
            })}
          </div>
        </div>

        {/* Project grid — fluid on tablet, fixed Figma widths only at 2xl */}
        {filteredProjects.length > 0 ? (
          <div className="flex w-full min-w-0 flex-col gap-4 lg:flex-row lg:items-stretch lg:gap-[18px] 2xl:gap-[30px]">
            {filteredProjects[0] && (
              <div className="w-full min-w-0 lg:flex-[1.315] lg:basis-0 2xl:w-[817px] 2xl:flex-none 2xl:basis-auto">
                <ProjectCard
                  project={filteredProjects[0]}
                  isLarge
                  priority
                />
              </div>
            )}
            <div className="flex w-full min-w-0 flex-col gap-4 lg:flex-1 lg:basis-0 2xl:w-[621px] 2xl:flex-none 2xl:basis-auto 2xl:gap-[30px]">
              {filteredProjects.slice(1, 3).map((project) => (
                <ProjectCard
                  key={project.slug}
                  project={project}
                  isLarge={false}
                />
              ))}
            </div>
          </div>
        ) : (
          <div className="py-12 text-center text-lg text-[var(--text-muted)]">
            No projects found in this category.
          </div>
        )}

        {/* Client logos — static grid, no marquee */}
        <div className="w-full">
          {/* Mobile: label + 2-row bordered grid */}
          <div className="flex w-full flex-col gap-3 pt-4 lg:hidden">
            <p className="w-full text-center text-xs font-medium leading-[15px] tracking-[3px] text-[var(--text-soft)]">
              {projectsSection.logosLabel}
            </p>
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

          {/* Tablet + Desktop: equal flex row, no animation */}
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

        {/* Mobile CTA */}
        <div className="flex w-full justify-end lg:hidden">
          <AllProjectsLink />
        </div>
      </div>
    </section>
  );
}
