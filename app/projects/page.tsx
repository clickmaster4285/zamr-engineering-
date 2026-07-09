"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { Barlow } from "next/font/google";
import { projects } from "@/mockData/projects";
import Contact from "@/components/services/Contact";

const barlow = Barlow({
  weight: ["500", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});

const filters = [
  "ALL",
  "Urban Infrastructure",
  "Structural Engineering",
  "Transportation Projects",
  "Water & Irrigation Systems",
  "Industrial Development",
];

const stats = [
  { value: "$180M+", label: "TOTAL PROJECT VALUE DELIVERED" },
  { value: "150+", label: "PROJECTS COMPLETED" },
  { value: "3", label: "STATES OPERATING" },
  { value: "2012", label: "DELIVERING SINCE" },
];

const INITIAL_COUNT = 6;
const LOAD_MORE_COUNT = 3;

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
  noHover = false,
}: {
  project: (typeof projects)[number];
  isLarge?: boolean;
  noHover?: boolean;
}) {
  const { ref, inView } = useInView();
  const router = useRouter();

  return (
    <div
      ref={ref}
      onClick={() => router.push(`/project/${project.slug}`)}
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
          className={`object-cover transition-transform duration-500 ease-in-out ${!noHover && "group-hover:scale-135"}`}
        />

        <div
          className={`absolute inset-0 bg-[var(--overlay-image-default)] ${!isLarge && !noHover ? " transition-colors duration-500 hover:bg-[var(--overlay-image-hover)]":"bg-[var(--overlay-image-default)]"}`}
        />

        <span
          className={`absolute left-5 top-5 font-[800] tracking-[0.06em] text-white sm:left-8 sm:top-8 md:left-[50px] md:top-[50px] ${
            isLarge ? "text-[36px] leading-[45px] sm:text-[44px] sm:leading-[56px] md:text-[54px] md:leading-[68px]" : "text-[24px] leading-[30px] sm:text-[28px] sm:leading-[35px] md:text-[34px] md:leading-[43px]"
          }`}
        >
          {project.index}
        </span>

        <h3 className={`absolute left-5 bottom-5 font-semibold text-white text-[20px] leading-[26px] sm:left-8 sm:bottom-8 sm:text-[24px] sm:leading-[30px] md:left-[50px] md:bottom-[50px] md:text-[28px] md:leading-[35px] ${isLarge && !noHover && " group-hover:translate-y-[-70px] transition-transform duration-500 ease-in-out"}`}>
          {project.title}
        </h3>

        {isLarge && !noHover && (
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

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("ALL");
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);
  const filteredProjects =
    activeFilter === "ALL"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

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
      <section className="relative w-full h-[520px] overflow-hidden sm:h-[620px] lg:h-[700px]">
        <Image
          src="/images/projectHero.svg"
          alt="Our Projects"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[var(--overlay-image-hero)]" />

        <div className="absolute left-6 right-6 top-[100px] flex flex-col gap-5 sm:left-10 sm:right-10 sm:top-[130px] lg:left-[130px] lg:right-auto lg:w-[933px] lg:top-[308px] lg:gap-[20px]">
          <h1 className="font-bold text-white text-[36px] leading-[42px] sm:text-[52px] sm:leading-[62px] lg:text-[80px] lg:leading-[101px]">
            Our Projects
          </h1>
          <p className="font-medium text-[var(--color-text-light-subtle)] text-[15px] leading-[20px] sm:text-[16px] sm:leading-[22px] lg:text-[18px] lg:leading-[23px]">
            A portfolio of precision-engineered infrastructure — from arterial
            road rehabilitations and renewable energy civil works to structural
            bridge rehabilitation and independent project verification.
          </p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 lg:left-[130px] lg:right-auto lg:w-[1468px] lg:top-[525px] lg:bottom-auto">
          <div className="flex flex-row items-stretch px-4 sm:px-6 lg:px-0">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`flex flex-col justify-center items-start flex-1 min-w-0 ${
                  i > 0 ? "border-l border-white/37" : ""
                } px-3 py-4 sm:px-4 sm:py-5 lg:px-[30px] lg:py-[30px] lg:h-[115px]`}
              >
                <span
                  className={`${barlow.className} font-black text-white text-[18px] leading-[22px] sm:text-[24px] sm:leading-[28px] lg:text-[34px] lg:leading-[34px]`}
                  style={{ letterSpacing: "-0.952px" }}
                >
                  {stat.value}
                </span>
                <span
                  className={`${barlow.className} font-medium text-white/32 pt-[3px] sm:pt-1 lg:pt-[6px] text-[7px] leading-[9px] sm:text-[8px] sm:leading-[11px] lg:text-[9.5px] lg:leading-[14px]`}
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
      <section className="w-full bg-[var(--bg-light)] px-4 py-12 sm:px-6 lg:px-[130px] lg:py-[130px]">
        <div className="mx-auto flex max-w-[1468px] flex-col gap-10 lg:gap-[60px]">
          <div className="flex flex-col gap-6 lg:gap-[30px]">
            {/* Title header */}
            <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
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
              <Link
                href="/projects"
                className="flex items-center gap-2 text-sm font-medium tracking-[3px] uppercase text-[var(--color-primary)] transition-opacity sm:text-base"
              >
                ALL PROJECTS <ArrowRight size={24} />
              </Link>
            </div>

            {/* Filter pills — matching landing page style */}
            <div className="flex w-full flex-nowrap gap-3 overflow-x-auto pb-2 lg:flex-wrap lg:overflow-visible lg:gap-4">
              {filters.map((filter) => {
                const isActive = filter === activeFilter;
                const isAll = filter === "ALL";
                return (
                  <button
                    key={filter}
                    type="button"
                    onClick={() => handleFilterChange(filter)}
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

            {/* Project grid — matching landing page layout */}
            {displayedProjects.length > 0 ? (
              <div className="flex flex-col gap-5 md:gap-[30px] md:flex-row md:items-stretch">
                {displayedProjects[0] && (
                  <div className="w-full md:w-[817px]">
                    <ProjectCard project={displayedProjects[0]} isLarge />
                  </div>
                )}
                <div className="flex w-full flex-col gap-5 md:gap-[30px] md:w-[621px]">
                  {displayedProjects.slice(1, 3).map((project) => (
                    <ProjectCard key={project.index} project={project} isLarge={false} />
                  ))}
                </div>
              </div>
            ) : (
              <div className="py-12 text-center text-lg text-[var(--text-muted)]">
                No projects found in this category.
              </div>
            )}

            {/* Additional projects — 3 equal cards (shown after Load More) */}
            {displayedProjects.length > 3 && (
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-[16px]">
                {displayedProjects.slice(3).map((project) => (
                  <ProjectCard key={project.index} project={project} isLarge={false} noHover />
                ))}
              </div>
            )}
          </div>

          {/* Load More button — always shown, disabled when all loaded */}
          <div className="flex justify-end">
            <button
              type="button"
              disabled={!hasMore}
              className={`w-[192px] py-[14px] tracking-[3px] text-[14px] font-bold uppercase transition-all bg-[var(--color-primary)] text-white`} 
            >
              Load More
            </button>
          </div>
        </div>
      </section>

      {/* ──────── HOW WE DELIVER ──────── */}
      <section className="w-full bg-[var(--bg-hero)] px-4 py-12 text-white sm:px-6 lg:px-[130px] lg:py-[130px]">
        <div className="mx-auto max-w-[1468px]">
          <div className="flex flex-col gap-6 lg:gap-7">
            <div className="flex items-center gap-4">
              <span className="text-[13px] font-medium leading-4 tracking-[3px] text-white sm:text-[14px] sm:leading-5 lg:text-[16px] lg:leading-5">
                OUR PROCESS
              </span>
              <span className="h-px w-[80px] bg-white sm:w-[104px]" />
            </div>
            <h2 className="text-[30px] font-bold leading-[38px] text-white sm:text-[36px] sm:leading-[45px] lg:text-[44px] lg:leading-[55px]">
              How We Deliver
            </h2>
            <p className="max-w-[720px] text-[14px] leading-[22px] text-[var(--color-text-light-subtle)] sm:text-[15px] sm:leading-[26px] lg:text-[17px] lg:leading-[31px]">
              Every project at ZAMR Engineering follows a proven delivery framework.
              From initial concept through to construction completion, we ensure
              quality, safety, and client satisfaction at every stage.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:mt-15 lg:grid-cols-4 lg:gap-6">
            {[
              {
                number: "01",
                title: "Discovery & Briefing",
                desc: "We engage with your team to understand project goals, constraints, and success criteria before defining scope and program.",
              },
              {
                number: "02",
                title: "Design & Development",
                desc: "Our engineers develop concept through to detailed design, iterating with stakeholders to refine and optimise the solution.",
              },
              {
                number: "03",
                title: "Approval & Procurement",
                desc: "We manage authority submissions, stakeholder approvals, and procurement documentation to enable construction readiness.",
              },
              {
                number: "04",
                title: "Delivery & Handover",
                desc: "On-site engineering support during construction, quality verification, and as-built documentation for seamless project handover.",
              },
            ].map((item) => (
              <div
                key={item.number}
                className="flex flex-col gap-2 border border-white/10 p-5 sm:gap-3 sm:p-6"
              >
                <span className="text-[28px] font-black leading-[36px] text-white/60 sm:text-[34px] sm:leading-[42px] lg:text-[40px] lg:leading-[50px]">
                  {item.number}
                </span>
                <h3 className="text-[16px] font-semibold leading-[20px] text-white sm:text-[17px] sm:leading-[22px] lg:text-[18px] lg:leading-[23px]">
                  {item.title}
                </h3>
                <p className="text-[11px] leading-[14px] text-[var(--color-text-light-subtle)] sm:text-[11.5px] sm:leading-[14.5px] lg:text-[12px] lg:leading-[15px]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────── CONTACT ──────── */}
      <Contact number="ENQUIRE" serviceTitle="Your Next" />
    </main>
  );
}
