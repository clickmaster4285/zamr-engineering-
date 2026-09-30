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
    <section className="w-full bg-white px-6 py-12 lg:px-[130px] lg:py-[130px]">
      <div className="flex flex-col gap-[60px]">
        <div className="flex w-full flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-1 flex-col gap-[28px]">
            <div className="flex items-center gap-4">
              <span className="text-[16px] font-medium leading-5 tracking-[3px] text-[var(--color-blue-accent)]">
                {SECTION.number}
              </span>
              <span className="h-px w-[104px] bg-[var(--text-dark)]" />
              <span className="text-[16px] font-medium leading-5 tracking-[3px] uppercase text-[var(--text-dark)]">
                {SECTION.label}
              </span>
            </div>

            <h2 className="text-[36px] font-bold leading-[44px] text-[var(--text-dark)] sm:text-[40px] sm:leading-[50px] lg:text-[44px] lg:leading-[55px]">
              {SECTION.heading}
            </h2>
          </div>

          <Link
            href={SECTION.allProjectsLink}
            className="group flex w-fit shrink-0 items-center gap-2 text-[var(--color-blue-header)] transition-colors duration-300 hover:text-[var(--color-secondary)]"
          >
            <span className="whitespace-nowrap text-[12px] font-medium uppercase leading-[13.12px] tracking-[0.02em] lg:text-[16px] lg:leading-none lg:tracking-[0.03em]">
              ALL PROJECTS
            </span>
            <span className="shrink-0 transition-transform duration-300 group-hover:translate-x-[5px]">
              <ArrowRight size={24} strokeWidth={1.25} />
            </span>
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((project) => (
            <div
              key={project.slug}
              onClick={() => router.push(`/projects/${project.slug}`)}
              className="group relative h-[260px] w-full cursor-pointer overflow-hidden bg-[var(--text-heading)] sm:h-[300px] lg:h-[340px]"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/50" />
              <h3 className="absolute bottom-[50px] left-[50px] right-[50px] text-[18px] font-semibold leading-[23px] text-white">
                {project.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
