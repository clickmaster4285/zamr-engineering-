"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { projects } from "@/mockData/projects";
import Contact from "@/components/services/Contact";

const filters = [
  "ALL",
  "Urban Infrastructure",
  "Structural Engineering",
  "Transportation Projects",
  "Water & Irrigation Systems",
  "Industrial Development",
];

const stats = [
  { value: "$4.1 B+", label: "Total Project Value" },
  { value: "80+", label: "Projects Completed" },
  { value: "3", label: "States Operating" },
  { value: "2009", label: "Delivering Since" },
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
  project: (typeof projects)[number];
  isLarge?: boolean;
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
          isLarge ? "h-[484px] md:h-[542px]" : "h-[200px] sm:h-[250px] md:h-[260px]"
        }`}
      >
        <Image
          src={project.heroImage}
          alt={project.title}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-135"
        />

        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(0deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.5) 100%)",
          }}
        />

        <span
          className={`absolute left-[50px] top-[50px] font-[800] tracking-[0.06em] text-white ${
            isLarge ? "text-[54px] leading-[68px]" : "text-[34px] leading-[43px]"
          }`}
        >
          {project.index}
        </span>

        <h3
          className={`absolute left-[50px] bottom-[50px] font-semibold text-white ${
            isLarge
              ? "text-[28px] leading-[35px] group-hover:translate-y-[-70px] transition-transform duration-500 ease-in-out"
              : "text-[22px] leading-[28px]"
          }`}
        >
          {project.title}
        </h3>

        {isLarge && (
          <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out px-[50px] pb-[50px]">
            <p className="max-w-[717px] text-[16px] leading-[20px] font-[400] text-white">
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
  const filteredProjects =
    activeFilter === "ALL"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <main className="w-full flex flex-col items-center">
      {/* Hero */}
      <section className="relative w-full h-[500px] overflow-hidden sm:h-[600px] lg:h-[700px]">
        <Image
          src="/images/image1.jpeg"
          alt="Our Projects"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#07183D]/80" />

        <div className="absolute bottom-0 left-0 right-0 px-6 pb-10 sm:pb-12 lg:bottom-auto lg:left-[130px] lg:right-auto lg:w-[933px] lg:px-0 lg:pb-0 lg:top-1/2 lg:-translate-y-1/2 lg:translate-y-[94.5px]">
          <div className="flex flex-col gap-3 sm:gap-4 lg:gap-5">
            <h1 className="font-bold uppercase text-white text-[32px] leading-[38px] sm:text-[48px] sm:leading-[56px] lg:text-[80px] lg:leading-[101px]">
              OUR PROJECTS
            </h1>
            <p className="font-medium text-[#B0B0B0] text-sm sm:text-base lg:text-lg lg:leading-[23px]">
              Delivering engineering excellence across Australia
            </p>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="w-full bg-[#07183D]">
        <div className="mx-auto flex max-w-[1468px] flex-wrap items-stretch px-6 lg:px-[130px]">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-1 flex-col items-center justify-center gap-1 border-r border-[rgba(255,255,255,0.12)] px-4 py-6 last:border-r-0 min-w-[120px]"
            >
              <span className="text-[24px] font-black leading-[30px] text-white sm:text-[28px] lg:text-[32px] lg:leading-[40px]">
                {stat.value}
              </span>
              <span className="text-[10px] font-semibold leading-[13px] tracking-[0.06em] text-[#B0B0B0] uppercase text-center">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Filter + Projects Grid */}
      <section className="w-full bg-[var(--bg-light)] px-6 py-16 lg:p-[130px]">
        <div className="mx-auto flex max-w-[1468px] flex-col gap-10 lg:gap-[60px]">
          {/* Title header */}
          <div className="flex flex-col gap-6 lg:gap-[30px]">
            <div className="flex items-center gap-4">
              <span className="text-base font-medium tracking-[3px] text-[var(--color-primary)]">
                ALL
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

          {/* Filter pills */}
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

          {/* Project grid */}
          {filteredProjects.length > 0 ? (
            <div className="flex flex-col gap-[30px] md:flex-row md:items-stretch">
              {filteredProjects[0] && (
                <div className="md:w-[817px]">
                  <ProjectCard project={filteredProjects[0]} isLarge />
                </div>
              )}
              <div className="flex flex-col gap-[30px] md:w-[621px]">
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
        </div>
      </section>

      {/* How We Deliver */}
      <section className="w-full bg-[#07183D] px-6 py-16 text-white lg:p-[130px]">
        <div className="mx-auto max-w-[1468px]">
          <div className="flex flex-col gap-7">
            <div className="flex items-center gap-4">
              <span className="text-[16px] font-medium leading-5 tracking-[3px] text-white">
                OUR PROCESS
              </span>
              <span className="h-px w-[104px] bg-white" />
            </div>
            <h2 className="text-[44px] font-bold leading-[55px] text-white">
              How We Deliver
            </h2>
            <p className="max-w-[720px] text-[17px] leading-[31px] text-[#B3B3B3]">
              Every project at ZAMR Engineering follows a proven delivery framework.
              From initial concept through to construction completion, we ensure
              quality, safety, and client satisfaction at every stage.
            </p>
          </div>

          <div className="mt-15 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
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
                className="flex flex-col gap-3 border border-[rgba(255,255,255,0.1)] p-6"
              >
                <span className="text-[40px] font-black leading-[50px] text-[rgba(255,255,255,0.6)]">
                  {item.number}
                </span>
                <h3 className="text-[18px] font-semibold leading-[23px] text-white">
                  {item.title}
                </h3>
                <p className="text-[12px] leading-[15px] text-[#B3B3B3]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <Contact number="ENQUIRE" serviceTitle="Your Next" />
    </main>
  );
}
