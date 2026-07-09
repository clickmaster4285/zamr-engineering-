import Image from "next/image";

interface Props {
  number: string;
  heading: string;
  projects: { title: string; image: string }[];
}

export default function RelatedWork({ number, heading, projects }: Props) {
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

          <button className="hidden items-center gap-2 text-[12px] font-bold leading-4 tracking-[1.68px] text-[var(--color-blue-header)] sm:flex">
            ALL PROJECTS
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-[var(--color-blue-header)]">
              <path d="M5 12H19" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
              <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
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
