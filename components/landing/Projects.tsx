"use client";
import React, { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { projects } from "@/mockData/projects";
import { projectFilters, clientLogos } from "@/mockData/landing";

function useInView(threshold = 0.15) {
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
        { threshold }
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
}: {
  project: (typeof projects)[number];
  isLarge?: boolean;
}) {
  const { ref, inView } = useInView();
  const router = useRouter();

  return (
    <div
      ref={ref}
      onClick={() => router.push(`/projects/${project.slug}`)}
      className={`group relative cursor-pointer overflow-hidden transition-all duration-700 ease-out ${
        inView
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 translate-y-10 scale-95"
      }`}
    >
      <div
        className={`relative w-full overflow-hidden ${
          isLarge ? "h-[300px] sm:h-[400px] md:h-[484px] lg:h-[652px]" : "h-[200px] sm:h-[250px] md:h-[311px]"
        }`}
      >
        <Image
          src={project.heroImage}
          alt={project.title}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-135"
        />

        {/* Gradient overlay */}
        <div
          className={`absolute inset-0 bg-[var(--overlay-image-default)] ${!isLarge && " transition-colors duration-500 hover:bg-[var(--overlay-image-hover)]"}`}  
        />

        {/* Project index */}
        <span
          className={`absolute left-5 top-5 font-[800] tracking-[0.06em] text-white sm:left-8 sm:top-8 md:left-[50px] md:top-[50px] ${
            isLarge ? "text-[36px] leading-[45px] sm:text-[44px] sm:leading-[56px] md:text-[54px] md:leading-[68px]" : "text-[24px] leading-[30px] sm:text-[28px] sm:leading-[35px] md:text-[34px] md:leading-[43px]"
          }`}
        >
          {project.index}
        </span>

        {/* Title */}
        <h3 className={`absolute left-5 bottom-5 font-semibold text-white text-[20px] leading-[26px] sm:left-8 sm:bottom-8 sm:text-[24px] sm:leading-[30px] md:left-[50px] md:bottom-[50px] md:text-[28px] md:leading-[35px] ${isLarge && " group-hover:translate-y-[-70px] transition-transform duration-500 ease-in-out"}`}>
          {project.title}
        </h3>

        {/* Description — large card only, slides up from below on hover */}
        {isLarge && (
          <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out px-5 pb-5 sm:px-8 sm:pb-8 md:px-[50px] md:pb-[50px]">
            <p className="max-w-[717px] text-[14px] leading-[18px] font-[400] text-white sm:text-[16px] sm:leading-[20px]">
              {project.shortDescription}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("ALL");
  const filteredProjects =
    activeFilter === "ALL"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section className="w-full bg-[var(--bg-light)] px-4 py-12 sm:px-6 lg:px-[130px] lg:py-[130px]">
      <div className="flex flex-col gap-10 lg:gap-[60px]">
        <div className="flex flex-col gap-6 lg:gap-[30px]">
          {/* Title header */}
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div className="flex flex-col gap-6 lg:gap-[30px]">
              <div className="flex items-center gap-4">
                <span className="text-base font-medium tracking-[3px] text-[var(--color-primary)]">
                  03
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
            <Link
  href="/projects"
  className="group flex items-center gap-2 text-sm font-medium tracking-[3px] uppercase text-[var(--color-primary)] transition-all duration-300 hover:text-[var(--color-secondary)] sm:text-base"
>
  ALL PROJECTS
  <span className="transition-transform duration-300 group-hover:translate-x-[5px]">
    <ArrowRight size={24} />
  </span>
</Link>
          </div>

          {/* Filter tabs */}
          <div className="flex w-full flex-nowrap gap-3 overflow-x-auto pb-2 lg:flex-wrap lg:overflow-visible lg:gap-4">
            {projectFilters.map((filter) => {
              const isActive = filter === activeFilter;
              const isAll = filter === "ALL";
              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={`whitespace-nowrap flex-none border px-4 py-3 text-center text-xs tracking-[0.15em] transition-all duration-300 sm:text-sm lg:flex-1 ${
                    isActive
                      ? "border-[var(--color-primary)] bg-[var(--color-primary)] text-white"
                      : "border-[var(--color-primary)] bg-white text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white"
                  } ${isAll ? "w-20 lg:flex-none" : ""}`}
                >
                  {filter}
                </button>
              );
            })}
          </div>

          {/* Project grid */}
          {filteredProjects.length > 0 ? (
            <div className="flex flex-col gap-5 md:gap-[30px] md:flex-row md:items-stretch">
              {filteredProjects[0] && (
                <div className="w-full md:w-[817px]">
                  <ProjectCard project={filteredProjects[0]} isLarge />
                </div>
              )}
              <div className="flex w-full flex-col gap-5 md:gap-[30px] md:w-[621px]">
                {filteredProjects.slice(1, 3).map((project) => (
                  <ProjectCard key={project.index} project={project} isLarge={false} />
                ))}
              </div>
            </div>
          ) : (
            <div className="py-12 text-center text-lg text-[var(--text-muted)]">
              No projects found in this category.
            </div>
          )}

          {/* Client logos — infinite scrolling marquee */}
          <div className="group/logo relative w-full overflow-hidden">
            <div className="flex w-fit animate-marquee group-hover/logo:[animation-play-state:paused]">
              {[...clientLogos, ...clientLogos].map((logo, i) => (
                <div
                  key={`${logo.alt}-${i}`}
                  className="relative mx-3 h-[50px] w-[140px] flex-none sm:h-[70px] sm:w-[180px] md:mx-4 md:h-[86px] md:w-[220px]"
                >
                  <Image src={logo.src} alt={logo.alt} fill sizes="220px" className="object-contain" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}