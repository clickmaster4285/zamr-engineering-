"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  projects,
  projectFilters,
  projectFilterCategoryMap,
} from "@/mockData/projects";

const PAGE_SIZE = 9;

function AllProjectsCard({
  title,
  category,
  image,
  slug,
}: {
  title: string;
  category: string;
  image: string;
  slug: string;
}) {
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={() => router.push(`/projects/${slug}`)}
      className="group relative h-[340px] w-full overflow-hidden bg-[var(--text-heading)] text-left"
    >
      <Image
        src={image}
        alt={title}
        fill
        sizes="(min-width: 1536px) 479px, (min-width: 1024px) 33vw, 100vw"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/60" />

      <span className="absolute left-5 top-[30px] text-[10px] font-light leading-[13px] tracking-[3px] text-white lg:left-5 lg:text-[10px] 2xl:left-[50px] 2xl:text-[16px] 2xl:leading-5">
        {category}
      </span>

      <h3 className="absolute bottom-5 left-5 right-5 text-[16px] font-semibold leading-5 text-white lg:bottom-auto lg:left-5 lg:right-5 lg:top-[260px] lg:text-[16px] lg:leading-5 2xl:left-[50px] 2xl:right-[50px] 2xl:top-[260px] 2xl:text-[20px] 2xl:leading-[25px]">
        {title}
      </h3>
    </button>
  );
}

export default function AllProjectsFeaturedWork() {
  const [activeFilter, setActiveFilter] = useState(projectFilters[0]);
  const [page, setPage] = useState(1);

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return projects;
    return projects.filter((p) => {
      const categories = projectFilterCategoryMap[activeFilter.toLowerCase()];
      return categories?.some(
        (c) => c.toLowerCase() === p.category.toLowerCase(),
      );
    });
  }, [activeFilter]);

  const total = filteredProjects.length;
  const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const start = (currentPage - 1) * PAGE_SIZE;
  const end = Math.min(start + PAGE_SIZE, total);
  const pageItems = filteredProjects.slice(start, end);

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
    setPage(1);
  };

  const showingLabel =
    total === 0
      ? "Showing 0 of 0 projects"
      : `Showing ${start + 1} - ${String(end).padStart(2, "0")} of ${total} projects`;

  return (
    <section className="w-full bg-[var(--bg-section)] px-5 py-5 lg:px-16 lg:py-[72px] 2xl:px-[130px] 2xl:py-[130px]">
      <div className="mx-auto flex w-full max-w-[1468px] flex-col gap-8 lg:gap-10 2xl:gap-[60px]">
        <div className="flex w-full flex-col gap-6 lg:gap-6 2xl:gap-[30px]">
          <div className="flex flex-col gap-3 lg:gap-[18px] 2xl:gap-[30px]">
            <div className="flex items-center gap-2 lg:gap-[9px] 2xl:gap-4">
              <span className="text-[14px] font-medium leading-[18px] text-[var(--color-primary)] lg:text-[13px] lg:leading-4 lg:tracking-[1.78px] 2xl:text-base 2xl:leading-5 2xl:tracking-[3px]">
                01
              </span>
              <span className="h-px w-10 bg-[var(--text-dark)] lg:w-[62px] 2xl:w-[104px]" />
              <span className="text-[14px] font-medium uppercase leading-[18px] tracking-[3px] text-[var(--text-dark)] lg:text-[13px] lg:leading-4 lg:tracking-[1.78px] 2xl:text-base 2xl:leading-5">
                PROJECTS
              </span>
            </div>
            <h2 className="text-[28px] font-semibold leading-[35px] text-[var(--text-dark)] lg:text-[33px] lg:font-bold lg:leading-[42px] 2xl:text-[56px] 2xl:leading-[71px]">
              Featured Work
            </h2>
          </div>

          <div className="flex w-full min-w-0 flex-nowrap gap-2 overflow-x-auto pb-1 lg:gap-[9px] 2xl:gap-4">
            {projectFilters.map((filter) => {
              const isActive =
                filter.toLowerCase() === activeFilter.toLowerCase();
              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => handleFilterChange(filter)}
                  className={`flex-none whitespace-nowrap border px-4 py-3 text-center text-[11px] font-medium leading-[14px] tracking-[0.68px] transition-colors duration-300 lg:px-[15px] lg:py-[9px] lg:text-[13px] lg:leading-4 lg:tracking-[1.78px] 2xl:px-[25px] 2xl:py-4 2xl:text-[14px] 2xl:leading-[18px] 2xl:tracking-[3px] ${
                    isActive
                      ? "border-[var(--color-primary)] bg-[var(--color-primary)] text-white"
                      : "border-[var(--color-primary)] bg-transparent text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white"
                  }`}
                >
                  {filter === "All" ? "ALL" : filter}
                </button>
              );
            })}
          </div>

          {pageItems.length === 0 ? (
            <p className="py-12 text-center text-lg text-[var(--text-muted)]">
              No projects found in this category.
            </p>
          ) : (
            <div className="grid w-full grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-4">
              {pageItems.map((project) => (
                <AllProjectsCard
                  key={project.slug}
                  title={project.title}
                  category={project.category}
                  image={project.heroImage}
                  slug={project.slug}
                />
              ))}
            </div>
          )}
        </div>

        <div className="flex w-full flex-col items-center gap-5 lg:flex-row lg:items-center lg:justify-between lg:gap-[60px]">
          <p className="w-full text-center text-[16px] font-medium uppercase leading-5 tracking-[2px] text-[var(--text-dark)] lg:flex-1 lg:text-left">
            {showingLabel}
          </p>

          <div className="flex items-center gap-5">
            <button
              type="button"
              aria-label="Previous page"
              disabled={currentPage <= 1}
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              className="flex h-[50px] w-[50px] items-center justify-center border border-[var(--color-primary)] text-[var(--color-primary)] transition-opacity disabled:opacity-30"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div className="flex items-center gap-2.5">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (pageNum) => {
                  const isActive = pageNum === currentPage;
                  return (
                    <button
                      key={pageNum}
                      type="button"
                      onClick={() => setPage(pageNum)}
                      className={`flex h-[50px] w-[50px] items-center justify-center text-[14px] font-medium leading-[18px] tracking-[3px] transition-colors ${
                        isActive
                          ? "bg-[var(--color-primary)] text-white"
                          : "border border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white"
                      }`}
                    >
                      {pageNum}
                    </button>
                  );
                },
              )}
            </div>

            <button
              type="button"
              aria-label="Next page"
              disabled={currentPage >= totalPages}
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              className="flex h-[50px] w-[50px] items-center justify-center border border-[var(--color-primary)] text-[var(--color-primary)] transition-opacity disabled:opacity-30"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
