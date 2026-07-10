"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { Barlow } from "next/font/google";
import { projects } from "@/mockData/projects";

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
      <section className="relative w-full h-[400px] overflow-hidden sm:h-[620px] lg:h-[700px]">
        <Image
          src="/images/projectHero.svg"
          alt="Our Projects"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[var(--overlay-image-hero)]" />

        <div className="absolute bottom-0 left-0 right-0 px-6 lg:px-0 pb-24  sm:top-[130px] sm:bottom-auto sm:pb-0 lg:left-[130px] lg:right-auto lg:w-[933px] lg:top-[308px] lg:gap-[20px]">
          <div className="flex flex-col gap-3 sm:gap-5">
            <h1 className="font-bold text-white text-[32px] leading-[38px] sm:text-[52px] sm:leading-[62px] lg:text-[80px] lg:leading-[101px]">
              Our Projects
            </h1>
            <p className="font-medium text-[var(--color-text-light-subtle)] text-[14px] leading-[19px] sm:text-[16px] sm:leading-[22px] lg:text-[18px] lg:leading-[23px]">
              A portfolio of precision-engineered infrastructure — from arterial
              road rehabilitations and renewable energy civil works to structural
              bridge rehabilitation and independent project verification.
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 sm:bottom-auto sm:top-[525px] lg:left-[130px] lg:right-auto lg:w-[1468px]">
          <div className="flex flex-row items-stretch px-4 sm:px-6 lg:px-0">
            {stats.map((stat, i) => (
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

          <div className="grid grid-cols-1  md:grid-cols-2">
            {[
              {
                title: "Senior-Led Teams",
                desc: "Every project is led by a registered senior engineer — not delegated to juniors after sign-off.",
              },
              {
                title: "Independent Review",
                desc: "All deliverables pass internal peer review before issue. No exceptions.",
              },
              {
                title: "Full Lifecycle",
                desc: "We can resource from feasibility through to as-built certification on a single appointment.",
              },
              {
                title: "On-Program Delivery",
                desc: "98% of our projects are delivered on the agreed program. We own our commitments.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex flex-col gap-3 border-b border-l border-white/[0.08]  p-4 sm:p-6"
              >
                <h3 className="text-[18px] font-semibold leading-[23px] text-white">
                  {item.title}
                </h3>
                <p className="text-[12px] leading-[15px] text-[var(--color-text-light-subtle)]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────── CONTACT ──────── */}
      <section className="w-full bg-white px-4 py-12 sm:px-6 lg:px-[130px] lg:py-[130px]">
        <div className="mx-auto flex max-w-[1468px] flex-col gap-12 lg:flex-row lg:items-start lg:gap-[231px]">
          {/* Left — info */}
          <div className="flex w-full flex-col gap-[30px] lg:w-[555px]">
            <div className="flex flex-col gap-[30px]">
              <div className="flex items-center gap-4">
                <span className="text-[16px] font-medium leading-5 tracking-[3px] text-[var(--color-blue-accent)]">
                  03
                </span>
                <span className="h-px w-[104px] bg-[var(--text-dark)]" />
                <span className="text-[16px] font-medium leading-5 tracking-[3px] uppercase text-[var(--text-dark)]">
                  HOW WE DELIVER
                </span>
              </div>
              <h2 className="text-[36px] font-bold leading-[45px] text-[var(--text-dark)] sm:text-[44px] sm:leading-[55px] lg:text-[56px] lg:leading-[71px]">
                Start Your Project
              </h2>
            </div>

            <div className="flex flex-col justify-end gap-5">
              <p className="text-[16px] leading-[22px] text-[var(--text-dark)] sm:text-[18px] sm:leading-[23px]">
                Tell us about your infrastructure challenge. We&apos;ll match you with the
                right engineering specialist and respond within 1&ndash;2 business days.
              </p>
              <p className="text-[16px] leading-[22px] text-[var(--text-dark)] sm:text-[18px] sm:leading-[23px]">
                <span className="text-[var(--color-blue-label)]">Office:</span>{" "}
                Level 5, 123 Pitt Street, Sydney NSW 2000
              </p>
              <p className="text-[16px] leading-[22px] text-[var(--text-dark)] sm:text-[18px] sm:leading-[23px]">
                <span className="text-[var(--color-blue-label)]">Phone:</span>{" "}
                +61 2 9000 0000
              </p>
              <p className="text-[16px] leading-[22px] text-[var(--text-dark)] sm:text-[18px] sm:leading-[23px]">
                <span className="text-[var(--color-blue-label)]">Email:</span>{" "}
                enquiries@zamrengineering.com.au
              </p>
            </div>
          </div>

          {/* Right — form */}
          <form className="flex w-full flex-col gap-7 lg:w-[682px]">
            <div className="flex flex-col gap-7 sm:flex-row sm:gap-6">
              <div className="flex flex-1 flex-col gap-2">
                <label
                  htmlFor="name"
                  className="text-[12px] font-bold leading-[14px] tracking-[3px] text-[var(--text-label)]"
                >
                  NAME
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="John Smith"
                  className="w-full border-0 border-b bg-transparent py-[10px] text-[12px] leading-[15px] text-[var(--text-dark)] placeholder-[var(--text-soft)]/50 focus:outline-none"
                  style={{ borderBottom: "1px solid var(--border-input)" }}
                />
              </div>
              <div className="flex flex-1 flex-col gap-2">
                <label
                  htmlFor="email"
                  className="text-[12px] font-bold leading-[14px] tracking-[3px] text-[var(--text-label)]"
                >
                  EMAIL
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@company.com.au"
                  className="w-full border-0 border-b bg-transparent py-[10px] text-[12px] leading-[15px] text-[var(--text-dark)] placeholder-[var(--text-soft)]/50 focus:outline-none"
                  style={{ borderBottom: "1px solid var(--border-input)" }}
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="subject"
                className="text-[12px] font-bold leading-[14px] tracking-[3px] text-[var(--text-label)]"
              >
                SUBJECT
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                placeholder="Project enquiry"
                className="w-full border-0 border-b bg-transparent py-[10px] text-[12px] leading-[15px] text-[var(--text-dark)] placeholder-[var(--text-soft)]/50 focus:outline-none"
                style={{ borderBottom: "1px solid var(--border-input)" }}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="projectDetails"
                className="text-[12px] font-bold leading-[14px] tracking-[3px] text-[var(--text-label)]"
              >
                PROJECT DETAILS
              </label>
              <textarea
                id="projectDetails"
                name="projectDetails"
                rows={4}
                placeholder="Tell us about your project..."
                className="w-full resize-none border-0 border-b bg-transparent py-[10px] text-[12px] leading-[15px] text-[var(--text-dark)] placeholder-[var(--text-soft)]/50 focus:outline-none"
                style={{ borderBottom: "1px solid var(--border-input)" }}
              />
            </div>

            <button
            type="submit"
            className="mt-2 w-full hover:bg-[var(--color-primary)] text-[var(--color-primary)] hover:text-white border border-[var(--color-primary)]  py-4 text-sm font-bold tracking-[0.3em] transition-all bg-[var(--bg-light)] text-[var(--color-primary) sm:mt-4 sm:text-base"
          >
            SUBMIT ENQUIRY
          </button>
          </form>
        </div>
      </section>
    </main>
  );
}
