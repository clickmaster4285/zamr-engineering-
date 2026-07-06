"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const filters = [
  "ALL",
  "Urban Infrastructure",
  "Structural Engineering",
  "Transportation Projects",
  "Water & Irrigation Systems",
  "Industrial Development",
];

type Project = {
  index: string;
  title: string;
  category: string;
  image: string;
};

const projects: Project[] = [
  {
    index: "01",
    title: "Metropolitan Bridge Rehabilitation",
    category: "Urban Infrastructure",
    image: "/images/image3.jpeg",
  },
  {
    index: "02",
    title: "Hunter Valley Renewable Energy Hub",
    category: "Urban Infrastructure",
    image: "/images/image2.jpeg",
  },
  {
    index: "03",
    title: "Western Sydney Infrastructure Corridor",
    category: "Urban Infrastructure",
    image: "/images/image1.jpeg",
  },
];

const projectDescriptions: Record<string, string> = {
  "01": "Metropolitan Bridge Rehabilitation involved delivering comprehensive engineering support to restore structural integrity, improve safety, and extend the operational lifespan of critical bridge infrastructure through effective planning, design, and project management.",
  "02": "Large-scale renewable energy hub in the Hunter Valley region, integrating solar and wind infrastructure at utility scale.",
  "03": "Comprehensive infrastructure corridor connecting Western Sydney's key growth areas with transport and utility networks.",
};

const clientLogos = [
  { src: "/images/logo1.jpeg", alt: "Transport for NSW" },
  { src: "/images/logo2.jpeg", alt: "VIDA" },
  { src: "/images/logo3.jpeg", alt: "Queensland Government" },
  { src: "/images/logo4.jpeg", alt: "The National Roads & Motorists' Association" },
  { src: "/images/logo5.jpeg", alt: "Ausbuild" },
  { src: "/images/logo6.jpeg", alt: "Melbourne Civil Works" },
  { src: "/images/logo7.jpeg", alt: "Sydney Structural & Civil" },
  { src: "/images/logo8.jpeg", alt: "Brisbane Growth Development Agency" },
];

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
  project: Project;
  isLarge?: boolean;
}) {
  const { ref, inView } = useInView();

  return (
    <div
      ref={ref}
      className={`group relative overflow-hidden transition-all duration-700 ease-out ${
        inView
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 translate-y-10 scale-95"
      }`}
    >
      <div
        className={`relative w-full ${
          isLarge ? "h-[484px] md:h-[652px]" : "h-[200px] sm:h-[250px] md:h-[311px]"
        }`}
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes={isLarge ? "(min-width: 768px) 50vw, 100vw" : "(min-width: 768px) 25vw, 100vw"}
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/20" />

        {/* Project index */}
        <span
          className={`absolute left-6 top-6 font-extrabold tracking-[0.3em] text-white ${
            isLarge ? "text-5xl md:text-[54px]" : "text-[34px]"
          }`}
        >
          {project.index}
        </span>

        {/* Bottom text block */}
        <div className="absolute inset-x-0 bottom-0 flex flex-col gap-2 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-6 pt-14">
          <h3
            className={`font-semibold text-white ${
              isLarge ? "text-base md:text-[28px]" : "text-[28px]"
            }`}
          >
            {project.title}
          </h3>
          <p
            className={`max-h-0 overflow-hidden font-normal leading-relaxed text-white/85 opacity-0 transition-all duration-500 ease-out group-hover:max-h-24 group-hover:opacity-100 ${
              isLarge ? "text-base md:text-[16px]" : "text-[16px]"
            }`}
          >
            {projectDescriptions[project.index]}
          </p>
        </div>
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
    <section className="w-screen bg-[var(--bg-light)] px-4 py-12 sm:px-6 lg:px-[130px] lg:py-[130px]">
      <div className="mx-auto flex max-w-[1468px] flex-col gap-10 lg:gap-[60px]">
        <div className="flex flex-col gap-6 lg:gap-[30px]">
          {/* Title header — Figma Frame 1321319002 */}
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div className="flex flex-col gap-6 lg:gap-[30px]">
              <div className="flex items-center gap-4">
                <span className="text-base font-medium tracking-[3px] text-[var(--color-primary)]">
                  03
                </span>
                <span className="h-px w-[104px] bg-black" />
                <span className="text-base font-medium tracking-[3px] uppercase text-[var(--text-dark)]">
                  PROJECTS
                </span>
              </div>
              <h2 className="text-3xl font-bold leading-tight text-[var(--text-dark)] sm:text-4xl md:text-[56px] md:leading-[71px]">
                Featured Work
              </h2>
            </div>
            <Link
              href="#all-projects"
              className="flex items-center gap-2 text-sm font-medium tracking-[3px] uppercase text-[var(--color-primary)] transition-opacity hover:opacity-70 sm:text-base"
            >
              ALL PROJECTS <ArrowRight size={24} />
            </Link>
          </div>

          {/* Filter tabs */}
          <div className="flex w-full gap-3 overflow-x-auto pb-2 lg:gap-4">
            {filters.map((filter) => {
              const isActive = filter === activeFilter;
              const isAll = filter === "ALL";
              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={`whitespace-nowrap border px-4 py-3 text-center text-xs tracking-[0.15em] transition-all duration-300 sm:text-sm ${
                    isActive
                      ? "border-[var(--color-primary)] bg-[var(--color-primary)] text-white"
                      : "border-[var(--color-primary)] bg-white text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white"
                  } ${isAll ? "w-20 flex-none" : "flex-1 min-w-[120px]"}`}
                >
                  {filter}
                </button>
              );
            })}
          </div>

          {/* Project grid — Figma Frame 1321319008 */}
          {filteredProjects.length > 0 ? (
            <div className="flex flex-col gap-6 md:flex-row">
              {filteredProjects[0] && (
                <div className="md:w-[55%]">
                  <ProjectCard project={filteredProjects[0]} isLarge={true} />
                </div>
              )}
              <div className="flex flex-col gap-6 md:w-[45%]">
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

          {/* Client logos — Figma Frame 1321319031 */}
          <div className="grid w-full grid-cols-2 gap-4 sm:grid-cols-4 lg:gap-[30px]">
            {clientLogos.map((logo) => (
              <div
                key={logo.alt}
                className="relative h-[60px] overflow-hidden bg-[var(--bg-light)] sm:h-[86px]"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  className="object-contain p-4"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
