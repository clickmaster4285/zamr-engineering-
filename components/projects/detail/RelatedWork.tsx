import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { projects as allProjects, normalizeSlug } from "@/mockData/projects";
import ProjectImage from "@/components/projects/ProjectImage";

interface Props {
  number: string;
  heading: string;
  projects: { title: string; image: string; slug: string }[];
}

const availableProjectSlugs = new Set(allProjects.map((p) => normalizeSlug(p.slug)));

export default function RelatedWork({ number, heading, projects }: Props) {
  const router = useRouter();
  return (
    <section className="w-full bg-white px-5 py-5 lg:px-[77px] lg:py-[77px] 2xl:px-[130px] 2xl:py-[130px]">
      <div className="mx-auto flex w-full max-w-[1468px] flex-col gap-8 lg:gap-9 2xl:gap-[60px]">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex flex-col gap-4 2xl:gap-7">
            <div className="flex items-center gap-3 lg:gap-[9px] 2xl:gap-4">
              <span className="text-[14px] font-medium leading-[18px] text-[var(--color-primary)] lg:text-[13px] lg:leading-4 lg:tracking-[1.78px] 2xl:text-base 2xl:leading-5 2xl:tracking-[3px]">
                {number}
              </span>
              <span className="h-px w-10 bg-[var(--color-primary)] lg:w-[104px] lg:bg-[var(--text-dark)]" />
              <span className="text-[13px] font-semibold uppercase leading-4 text-[var(--text-dark)] lg:font-medium lg:tracking-[1.78px] 2xl:text-base 2xl:leading-5 2xl:tracking-[3px]">
                PROJECTS
              </span>
            </div>

            <h2 className="text-[28px] font-semibold leading-[35px] text-[var(--text-heading)] lg:text-[26px] lg:font-bold lg:leading-[33px] 2xl:text-[44px] 2xl:leading-[55px]">
              {heading}
            </h2>
          </div>

          <Link
            href="/projects"
            className="group inline-flex shrink-0 items-center gap-2 text-[13px] font-medium uppercase tracking-[2px] text-[var(--color-primary)] transition-colors duration-300 hover:text-[var(--color-secondary)] lg:tracking-[1.78px] 2xl:text-base 2xl:tracking-[3px]"
          >
            ALL PROJECTS
            <span className="transition-transform duration-300 group-hover:translate-x-[5px]">
              <ArrowRight className="h-5 w-5 2xl:h-6 2xl:w-6" />
            </span>
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-6 2xl:grid-cols-3 2xl:gap-4">
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
                className={`group relative h-[200px] w-full overflow-hidden lg:h-[280px] 2xl:h-[340px] ${
                  isAvailable ? "cursor-pointer" : "cursor-default"
                }`}
              >
                <ProjectImage
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(min-width: 1536px) 33vw, (min-width: 1024px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/50" />
                <h3 className="absolute bottom-5 left-5 right-5 text-[16px] font-semibold leading-5 text-white lg:bottom-6 lg:left-6 lg:right-6 2xl:bottom-auto 2xl:left-[50px] 2xl:right-[50px] 2xl:top-[269px] 2xl:text-[18px] 2xl:leading-[23px]">
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
