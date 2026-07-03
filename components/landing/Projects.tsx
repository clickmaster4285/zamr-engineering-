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

// ✅ FIX: Added missing descriptions for each project
const projectDescriptions: Record<string, string> = {
  "01": "Major bridge rehabilitation project spanning the metropolitan area, enhancing structural integrity and extending service life.",
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
      className={`group relative overflow-hidden rounded-sm transition-all duration-700 ease-out ${
        inView
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 translate-y-10 scale-95"
      }`}
    >
      <div
  className={`relative w-full ${
    isLarge ? "h-[484px] md:h-[564px]" : "h-[230px] md:h-[270px]"
  }`}
>
  <Image
    src={project.image}
    alt={project.title}
    fill
    sizes={isLarge ? "(min-width: 768px) 50vw, 100vw" : "(min-width: 768px) 25vw, 100vw"}
    className="object-cover transition-transform duration-700 group-hover:scale-105"
  />

        {/* Base gradient — always visible so title/index stay readable */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/20" />

        <span
          className={`absolute left-6 top-6 font-bold text-white ${
            isLarge ? "text-sm md:text-[56px]" : "text-[32px]"
          }`}
        >
          {project.index}
        </span>

        <span
          className={`absolute bottom-6 right-6 font-medium tracking-[0.1em] text-white/70 ${
            isLarge ? "text-sm" : "text-[12px]"
          }`}
        >
          {/* {project.category} */}
        </span>

        {/* Bottom text block — title always visible, description fades in beneath it on hover */}
        <div className="absolute inset-x-0 bottom-0 flex flex-col gap-2 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-6 pt-14">
          <h3
            className={`font-bold text-white ${
              isLarge ? "text-sm md:text-[28px]" : "text-[18px]"
            }`}
          >
            {project.title}
          </h3>
          <p
            className={`max-h-0 overflow-hidden font-medium leading-relaxed text-white/85 opacity-0 transition-all duration-500 ease-out group-hover:max-h-24 group-hover:opacity-100 ${
              isLarge ? "text-sm md:text-[18px]" : "text-[13px] md:text-[14px]"
            }`}
          >
            {/* ✅ FIX: Now references the defined projectDescriptions */}
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
    <section className="w-full bg-[#F6F8FC] px-6 py-16 sm:px-10 lg:px-30 lg:py-16">
      <div className="">
        <div className="mb-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-sm font-bold tracking-[0.1em] text-[#405BAD]">03</span>
            <span className="h-px w-12 bg-[#B7B7B7]" />
            <span className="text-sm tracking-[0.25em] text-[#4C4C4C]">PROJECTS</span>
          </div>
          <Link
            href="#all-projects"
            className="flex items-center gap-2 text-[11px] font-bold tracking-[0.15em] text-[#405BAD] transition-opacity hover:opacity-70"
          >
            ALL PROJECTS <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>

        <h2 className="mb-8 text-[36px] font-bold leading-tight text-[#333333] sm:text-[42px]">
          Featured Work
        </h2>

        <div className="mb-8 flex w-full flex-wrap gap-3 lg:flex-nowrap lg:gap-2">
          {filters.map((filter) => {
            const isActive = filter === activeFilter;
            return (
             <button
  key={filter}
  type="button"
  onClick={() => setActiveFilter(filter)}
  className={`rounded-[3px] border px-3 py-2 text-[12px] font-semibold transition-all duration-300 lg:px-4 ${
    filter === "ALL"
      ? "flex-none w-[80px] border-[#405BAD] bg-[#405BAD] text-white hover:bg-[#2544A1] hover:border-[#2544A1]" // ← adjust width here
      : `flex-1 ${
          isActive
            ? "border-[#405BAD] bg-[#405BAD] text-white hover:bg-[#2544A1] hover:border-[#2544A1]"
            : "border-[#405BAD]/50 bg-white text-[#405BAD] hover:border-[#405BAD] hover:bg-[#405BAD] hover:text-white"
        }`
  }`}
>
  {filter}
</button>
            );
          })}
        </div>

        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-[1.4fr_1fr]">
            {filteredProjects[0] && (
              <ProjectCard project={filteredProjects[0]} isLarge={true} />
            )}
            <div className="grid grid-cols-1 gap-6">
              {filteredProjects.slice(1, 3).map((project) => (
                <ProjectCard key={project.index} project={project} isLarge={false} />
              ))}
            </div>
          </div>
        ) : (
          <div className="py-12 text-center text-[16px] text-[#4C4C4C]">
            No projects found in this category.
          </div>
        )}

        <div className="mt-16 overflow-hidden">
          <div className="flex w-max animate-infinite-scroll items-center gap-8">
            {doubledLogos.map((logo, index) => (
             <div
  key={`${logo.alt}-${index}`}
  className="group relative h-14 w-36 flex-shrink-0 overflow-hidden"
>
  <Image
    src={logo.src}
    alt={logo.alt}
    fill
    className="object-contain transition-transform duration-300 group-hover:scale-105"
  />
  <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
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