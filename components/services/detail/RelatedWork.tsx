import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface Props {
  number: string;
  heading: string;
  projects: { title: string; image: string; slug: string }[];
}

export default function RelatedWork({ number, heading, projects }: Props) {
  const router = useRouter();
  return (
    <section className="w-full bg-[var(--bg-section)] px-4 py-12 sm:px-6 lg:p-[130px]">
      <div className="flex flex-col gap-10 lg:gap-[60px]">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between lg:gap-[30px]">
          <div className="flex flex-col gap-6 lg:gap-[30px]">
            <div className="flex items-center gap-4">
              <span className="text-base font-medium tracking-[3px] text-[var(--color-blue-accent)]">
                {number}
              </span>
              <span className="h-px w-[104px] bg-[var(--text-dark)]" />
              <span className="text-base font-medium tracking-[3px] uppercase text-[var(--text-dark)]">
                PROJECTS
              </span>
            </div>

            <h2 className="text-xl font-bold leading-tight text-[var(--text-heading)] sm:text-2xl lg:text-4xl lg:leading-[71px]">
              {heading}
            </h2>
          </div>

          <Link
            href="/projects"
            className="group flex items-center gap-2 text-sm font-medium tracking-[3px] uppercase text-[var(--color-primary)] transition-all duration-300 hover:text-[var(--color-secondary)] sm:text-base"
          >
            ALL PROJECTS
            <span className="transition-transform duration-300 group-hover:translate-x-[5px]">
              <ArrowRight size={24} />
            </span>
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              onClick={() => router.push(`/projects/${project.slug}`)}
              className="group relative h-[250px] w-full cursor-pointer overflow-hidden sm:h-[300px] lg:h-[340px]"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-[var(--overlay-image-default)] transition-colors duration-500 group-hover:bg-[var(--overlay-image-hover)]" />
              <h3 className="absolute bottom-6 left-6 text-sm font-semibold leading-snug text-white sm:bottom-8 sm:left-8 sm:text-lg lg:text-[18px] lg:leading-[23px]">
                {project.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
