// components/RelatedWork.jsx
import Image from "next/image";

interface Props {
  number: string;
  heading: string;
  projects: { title: string; image: string }[];
}

export default function RelatedWork({ number, heading, projects }: Props) {
  return (
    <section className="w-full bg-[#EEF1F8] px-6 py-16 md:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="text-sm font-bold tracking-widest text-[var(--color-primary)]">
                {number}
              </span>
              <span className="h-px w-12 bg-gray-400" />
              <span className="text-sm tracking-[0.25em] text-[#4C4C4C]">
                PROJECTS
              </span>
            </div>
            <h2 className="text-5xl font-bold leading-tight text-gray-900">
              {heading}
            </h2>
          </div>

          <span className="hidden items-center gap-2 text-xs font-bold tracking-[0.15em] text-[var(--color-primary)] sm:flex">
            ALL PROJECTS
            <span aria-hidden="true">&rarr;</span>
          </span>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative h-[260px] w-full cursor-pointer overflow-hidden"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/50" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="text-[15px] font-semibold text-white">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}