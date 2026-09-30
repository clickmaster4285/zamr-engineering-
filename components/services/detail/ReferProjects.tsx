"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { projects } from "@/mockData/projects";

const SECTION = {
  number: "02",
  label: "PROJECTS",
  heading: "Refer Capability Statement",
  allProjectsLink: "/projects",
} as const;

export default function ReferProjects() {
  const router = useRouter();
  const cards = projects.slice(0, 3).map((project) => ({
    title: project.title,
    slug: project.slug,
    image: project.heroImage,
  }));

  return (
    <section className="flex w-full flex-col items-start gap-8 bg-white px-4 py-12 lg:gap-[35.56px] lg:p-[77.037px] 2xl:gap-[60px] 2xl:p-[130px]">
      <div className="flex w-full flex-col items-start gap-4 lg:flex-row lg:items-center lg:justify-between lg:gap-8 2xl:gap-[60px]">
        <div className="flex w-full flex-col items-start gap-4 lg:w-auto lg:gap-[16.59px] 2xl:gap-7">
          <div className="flex flex-row items-center gap-3 lg:gap-[9.48px] 2xl:gap-4">
            <span className="shrink-0 text-sm font-medium leading-[18px] lg:text-[13px] lg:leading-4 lg:tracking-[1.77778px] 2xl:text-base 2xl:leading-5 2xl:tracking-[3px]">
              {SECTION.number}
            </span>
            <span className="h-px w-[60px] shrink-0 bg-[var(--text-heading)] lg:w-[61.63px] 2xl:w-[104px]" />
            <span className="text-sm font-medium leading-[18px] tracking-[3px] uppercase text-[var(--text-heading)] lg:text-[13px] lg:leading-4 lg:tracking-[1.77778px] 2xl:text-base 2xl:leading-5 2xl:tracking-[3px]">
              {SECTION.label}
            </span>
          </div>

          <h2 className="w-full text-[28px] font-semibold leading-[35px] text-[var(--text-heading)] lg:text-[26.0741px] lg:font-bold lg:leading-[33px] 2xl:text-[44px] 2xl:leading-[55px]">
            {SECTION.heading}
          </h2>
        </div>

        <Link
          href={SECTION.allProjectsLink}
          className="inline-flex shrink-0 items-center gap-[4.74px] text-[var(--color-blue-header)] 2xl:gap-2"
        >
          <span className="text-xs font-medium uppercase leading-[13px] tracking-[0.02em] 2xl:text-base 2xl:leading-5 2xl:tracking-[0.03em]">
            ALL PROJECTS
          </span>
          <ArrowRight
            className="h-[14.22px] w-[14.22px] 2xl:h-6 2xl:w-6"
            strokeWidth={1.25}
          />
        </Link>
      </div>

      <div className="flex w-full flex-col items-start gap-4 lg:flex-row lg:flex-wrap lg:gap-6 2xl:flex-nowrap 2xl:gap-4">
        {cards.map((project, index) => (
          <button
            key={project.slug}
            type="button"
            onClick={() => router.push(`/projects/${project.slug}`)}
            className={`group relative h-[200px] w-full cursor-pointer overflow-hidden bg-[var(--color-primary)] text-left lg:h-[280px] 2xl:h-[340px] 2xl:min-w-0 2xl:flex-1 ${
              index === cards.length - 1
                ? "lg:w-full 2xl:w-auto"
                : "lg:w-[calc(50%-12px)] 2xl:w-auto"
            }`}
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(min-width: 1536px) 33vw, (min-width: 1024px) 50vw, 100vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/50" />
            <h3 className="absolute bottom-5 left-5 right-5 text-base font-semibold leading-5 text-white lg:bottom-[30px] lg:left-[29.63px] lg:right-auto lg:text-[13px] lg:leading-4 2xl:bottom-12 2xl:left-[50px] 2xl:text-lg 2xl:leading-[23px]">
              {project.title}
            </h3>
          </button>
        ))}
      </div>
    </section>
  );
}
