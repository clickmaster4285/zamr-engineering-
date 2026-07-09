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
    <section className="w-full bg-[var(--bg-section)] px-6 py-16 lg:p-[130px]">
      <div className="">
        <div className="flex items-end justify-between">
          <div className="flex flex-col gap-7">
            <div className="flex items-center gap-4">
              <span className="text-[16px] font-medium leading-5 tracking-[3px] text-[var(--color-blue-accent)]">
                {number}
              </span>
              <span className="h-px w-[104px] bg-[var(--text-dark)]" />
              <span className="text-[16px] font-medium leading-5 tracking-[3px] uppercase text-[var(--text-dark)]">
                PROJECTS
              </span>
            </div>

            <h2 className="text-[44px] font-bold leading-[55px] text-[var(--text-heading)]">
              {heading}
            </h2>
          </div>

          <Link
            href="/projects"
            className="group flex items-center gap-2 text-[12px]  tracking-[2px] uppercase text-[var(--color-primary)] transition-all duration-300 hover:text-[var(--color-secondary)] "
          >
            <span className="font-bold">ALL PROJECTS</span>
            <span className="transition-transform duration-300 group-hover:translate-x-[5px] ">
              <ArrowRight size={24} />
            </span>
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              onClick={() => router.push(`/project/${project.slug}`)}
              className="group relative h-[340px] w-full cursor-pointer overflow-hidden"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[var(--overlay-image-default)]" />
              <h3 className="absolute bottom-12 left-8 text-[18px] font-semibold leading-[23px] text-white">
                {project.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
