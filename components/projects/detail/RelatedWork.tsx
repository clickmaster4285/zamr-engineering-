import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { projects as allProjects, normalizeSlug } from "@/mockData/projects";

interface Props {
  number: string;
  heading: string;
  projects: { title: string; image: string; slug: string }[];
}

const availableProjectSlugs = new Set(allProjects.map((p) => normalizeSlug(p.slug)));

export default function RelatedWork({ number, heading, projects }: Props) {
  const router = useRouter();
  return (
    <section className="w-full bg-[var(--bg-section)] px-5 py-14 sm:px-8 md:px-10 md:py-16 xl:px-[130px] xl:py-[130px]">
      <div className="mx-auto flex w-full max-w-[1468px] flex-col gap-8 md:gap-12 xl:gap-[60px]">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="flex flex-col gap-6 xl:gap-[30px]">
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium tracking-[3px] text-[var(--color-primary)] md:text-base">
                {number}
              </span>
              <span className="h-px w-16 bg-[var(--text-dark)] md:w-[104px]" />
              <span className="text-sm font-medium tracking-[3px] uppercase text-[var(--text-dark)] md:text-base">
                PROJECTS
              </span>
            </div>

            <h2 className="text-[32px] font-bold leading-[40px] text-[var(--text-dark)] sm:text-[40px] sm:leading-[50px] xl:text-[56px] xl:leading-[71px]">
              {heading}
            </h2>
          </div>

          <Link
            href="/projects"
            className="group inline-flex shrink-0 items-center gap-2 text-sm font-medium tracking-[2px] uppercase text-[var(--color-primary)] transition-colors duration-300 hover:text-[var(--color-secondary)] md:text-base md:tracking-[3px]"
          >
            ALL PROJECTS
            <span className="transition-transform duration-300 group-hover:translate-x-[5px]">
              <ArrowRight className="h-5 w-5 md:h-6 md:w-6" />
            </span>
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => {
            const isAvailable = availableProjectSlugs.has(
              normalizeSlug(project.slug),
            );
            return (
              <div
                key={project.title}
                onClick={() => {
                  if (isAvailable) router.push(`/projects/${project.slug}`);
                }}
                className={`group relative h-[240px] w-full overflow-hidden sm:h-[280px] xl:h-[340px] ${
                  isAvailable ? "cursor-pointer" : "cursor-default"
                }`}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(min-width: 1280px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[var(--overlay-image-default)]" />
                <h3 className="absolute bottom-5 left-5 right-5 text-sm font-semibold leading-snug text-white sm:bottom-6 sm:left-6 sm:right-6 sm:text-base xl:text-[18px] xl:leading-[23px]">
                  {project.title}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
