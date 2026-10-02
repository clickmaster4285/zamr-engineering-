"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export interface FeaturedProjectItem {
  slug: string;
  index: string;
  title: string;
  category: string;
  shortDescription: string;
  image: string;
}

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
        { threshold, rootMargin: "100px 0px" },
      );
      observerRef.current.observe(node);
    },
    [threshold],
  );
  useEffect(() => {
    return () => observerRef.current?.disconnect();
  }, []);
  return { ref, inView };
}

type ProjectCardProps = {
  project: FeaturedProjectItem;
  isLarge?: boolean;
  priority?: boolean;
};

export function FeaturedProjectCard({
  project,
  isLarge = false,
  priority = false,
}: ProjectCardProps) {
  const { ref, inView } = useInView();
  const router = useRouter();

  return (
    <div
      ref={ref}
      onClick={() => router.push(`/projects/${project.slug}`)}
      className={`group relative h-full min-w-0 w-full cursor-pointer overflow-hidden transition-all duration-700 ease-out ${
        inView ? "translate-y-0 scale-100 opacity-100" : "translate-y-10 scale-95 opacity-0"
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
          src={project.image}
          alt={project.title}
          fill
          priority={priority}
          sizes="(min-width: 1536px) 817px, (min-width: 1024px) 484px, 100vw"
          className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-135"
        />

        <div className="absolute inset-0 bg-[var(--overlay-image-default)]" />
        <div className="absolute inset-0 bg-[var(--overlay-image-default)] transition-colors duration-500 [@media(hover:hover)_and_(pointer:fine)]:group-hover:bg-[var(--overlay-image-hover)]" />

        {/* Mobile layout */}
        <div className="absolute inset-0 flex flex-col justify-between p-6 lg:hidden">
          <span className="text-sm font-bold leading-[18px] tracking-[3px] text-white">
            {project.index}
          </span>
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-semibold leading-[1.3] text-white">
              {project.title}
            </h3>
            <p className="line-clamp-2 text-sm leading-5 text-white/90">
              {project.shortDescription}
            </p>
          </div>
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

        <div className="absolute bottom-[20px] left-[24px] right-[30px] hidden flex-col lg:bottom-[30px] lg:left-[30px] lg:flex 2xl:bottom-[30px] 2xl:left-[50px] 2xl:right-[50px]">
          <h3
            className={`font-semibold text-white transition-[margin] duration-500 [@media(hover:hover)_and_(pointer:fine)]:group-hover:mb-[30px] ${
              isLarge
                ? "max-w-[319px] text-lg leading-[23px] 2xl:max-w-[496px] 2xl:text-[28px] 2xl:leading-[35px]"
                : "max-w-[328px] text-lg leading-[23px] 2xl:max-w-[511px] 2xl:text-[28px] 2xl:leading-[35px]"
            }`}
          >
            {project.title}
          </h3>
          <div className="grid grid-rows-[0fr] opacity-0 transition-all duration-500 [@media(hover:hover)_and_(pointer:fine)]:group-hover:grid-rows-[1fr] [@media(hover:hover)_and_(pointer:fine)]:group-hover:opacity-100">
            <p
              className={`overflow-hidden text-white/90 line-clamp-2 ${
                isLarge
                  ? "max-w-[319px] text-sm leading-5 2xl:max-w-[496px] 2xl:text-base 2xl:leading-[23px]"
                  : "max-w-[328px] text-sm leading-5 2xl:max-w-[511px] 2xl:text-base 2xl:leading-[23px]"
              }`}
            >
              {project.shortDescription}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

type FilterPillsProps = {
  filters: string[];
  activeFilter: string;
  onFilterChange: (filter: string) => void;
  allLabel?: string;
};

export function ProjectFilterPills({
  filters,
  activeFilter,
  onFilterChange,
  allLabel = "All",
}: FilterPillsProps) {
  return (
    <div className="flex w-full min-w-0 flex-nowrap gap-3 overflow-x-auto pb-1">
      {filters.map((filter) => {
        const isActive = filter.toLowerCase() === activeFilter.toLowerCase();
        const isAll = filter.toLowerCase() === allLabel.toLowerCase();
        return (
          <button
            key={filter}
            type="button"
            onClick={() => onFilterChange(filter)}
            className={`flex-none whitespace-nowrap border px-4 py-3 text-center text-xs tracking-[0.15em] transition-all duration-300 sm:text-sm min-[1440px]:flex-1 ${
              isActive
                ? "border-[var(--color-primary)] bg-[var(--color-primary)] text-white"
                : "border-[var(--color-primary)] bg-white text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white"
            } ${isAll ? "w-20 min-[1440px]:flex-none" : ""}`}
          >
            {filter}
          </button>
        );
      })}
    </div>
  );
}

type FeaturedProjectsGridProps = {
  projects: FeaturedProjectItem[];
  /** When true, projects after the first 3 render in an equal 3-col grid */
  showAdditionalGrid?: boolean;
  priorityFirst?: boolean;
  emptyMessage?: string;
};

export function FeaturedProjectsGrid({
  projects,
  showAdditionalGrid = false,
  priorityFirst = false,
  emptyMessage = "No projects found in this category.",
}: FeaturedProjectsGridProps) {
  if (projects.length === 0) {
    return (
      <div className="py-12 text-center text-lg text-[var(--text-muted)]">
        {emptyMessage}
      </div>
    );
  }

  const featured = projects.slice(0, 3);
  const additional = showAdditionalGrid ? projects.slice(3) : [];

  return (
    <div className="flex w-full min-w-0 flex-col gap-4 lg:gap-[18px] 2xl:gap-[30px]">
      <div className="flex w-full min-w-0 flex-col gap-4 lg:flex-row lg:items-stretch lg:gap-[18px] 2xl:gap-[30px]">
        {featured[0] && (
          <div className="w-full min-w-0 lg:flex-[1.315] lg:basis-0">
            <FeaturedProjectCard
              project={featured[0]}
              isLarge
              priority={priorityFirst}
            />
          </div>
        )}
        {featured.length > 1 && (
          <div className="flex w-full min-w-0 flex-col gap-4 lg:flex-1 lg:basis-0 2xl:gap-[30px]">
            {featured.slice(1).map((project) => (
              <FeaturedProjectCard
                key={project.slug}
                project={project}
                isLarge={false}
              />
            ))}
          </div>
        )}
      </div>

      {additional.length > 0 && (
        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-[18px] 2xl:gap-[30px]">
          {additional.map((project) => (
            <FeaturedProjectCard
              key={project.slug}
              project={project}
              isLarge={false}
            />
          ))}
        </div>
      )}
    </div>
  );
}
