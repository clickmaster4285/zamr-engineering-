import Image from "next/image";

interface Props {
  number: string;
  heading: string;
  projects: { title: string; image: string }[];
}

export default function RelatedWork({ number, heading, projects }: Props) {
  return (
    <section className="w-full bg-[#F6F8FC] px-6 py-16 lg:p-[130px]">
      <div className="mx-auto max-w-[1468px]">
        <div className="flex items-end justify-between">
          <div className="flex flex-col gap-7">
            <div className="flex items-center gap-4">
              <span className="text-[16px] font-medium leading-5 tracking-[3px] text-[#1945A7]">
                {number}
              </span>
              <span className="h-px w-[104px] bg-black" />
              <span className="text-[16px] font-medium leading-5 tracking-[3px] uppercase text-[#333333]">
                PROJECTS
              </span>
            </div>

            <h2 className="text-[44px] font-bold leading-[55px] text-[#090D15]">
              {heading}
            </h2>
          </div>

          <button className="hidden items-center gap-2 text-[12px] font-bold leading-4 tracking-[1.68px] text-[#22419E] sm:flex">
            ALL PROJECTS
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-[#22419E]">
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
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/50" />
              <h3 className="absolute bottom-12 left-[50px] text-[18px] font-semibold leading-[23px] text-white">
                {project.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
