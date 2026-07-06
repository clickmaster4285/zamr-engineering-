"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

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

const doubledLogos = [...clientLogos, ...clientLogos];

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
          isLarge ? "h-[484px] md:h-[652px]" : "h-[311px]"
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
    <section className="w-full bg-[var(--bg-light)] px-6 py-20 lg:px-32 lg:py-20">
      <div>
        <div className="mb-8 flex items-center justify-between">
          <div>
            <div className="mb-8 flex items-center gap-4">
              <span className="text-base font-medium tracking-[0.2em] text-[var(--color-primary)]">
                03
              </span>
              <span className="h-px w-24 bg-black" />
              <span className="text-base font-medium tracking-[0.2em] text-[var(--text-dark)]">
                PROJECTS
              </span>
            </div>
            <h2 className="text-[56px] font-bold leading-[71px] text-[var(--text-dark)]">
              Featured Work
            </h2>
          </div>
          <Link
            href="#all-projects"
            className="flex items-center gap-2 text-base font-medium tracking-[0.3em] text-[var(--color-primary)] transition-opacity hover:opacity-70"
          >
            ALL PROJECTS <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>

        {/* Filter tabs */}
        <div className="mb-10 flex w-full flex-wrap gap-3 lg:flex-nowrap lg:gap-2">
          {filters.map((filter) => {
            const isActive = filter === activeFilter;
            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`flex-none border px-6 py-4 text-sm font-medium tracking-[0.3em] transition-all duration-300 ${
                  filter === "ALL"
                    ? "w-[82px] border-[var(--color-primary)] bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-hover)] hover:border-[var(--color-primary-hover)]"
                    : `flex-1 ${
                        isActive
                          ? "border-[var(--color-primary)] bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-hover)] hover:border-[var(--color-primary-hover)]"
                          : "border-[var(--color-primary)] bg-white text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white"
                      }`
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>

        {/* Project grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-[1.3fr_1fr]">
            {filteredProjects[0] && (
              <ProjectCard project={filteredProjects[0]} isLarge={true} />
            )}
            <div className="flex flex-col gap-6">
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

        {/* Client logos */}
        <div className="mt-20 overflow-hidden">
          <div className="flex w-max animate-infinite-scroll items-center gap-8">
            {doubledLogos.map((logo, index) => (
              <div
                key={`${logo.alt}-${index}`}
                className="group relative h-[86px] w-[157px] flex-shrink-0 overflow-hidden bg-[var(--bg-light)]"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes infinite-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-infinite-scroll {
          animation: infinite-scroll 20s linear infinite;
        }
      `}</style>
    </section>
  );
}
