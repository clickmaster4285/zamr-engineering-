import Image from "next/image";
import { keyDirectorsContent } from "@/mockData/about";

export default function KeyDirectors() {
  const { sectionNumber, sectionLabel, heading, directors } = keyDirectorsContent;

  return (
    <section className="flex w-full flex-col items-start gap-8 bg-white px-5 py-14 lg:gap-[35.56px] lg:px-[77.037px] lg:py-[77.037px] 2xl:gap-[60px] 2xl:p-[130px]">
      {/* Header — label + heading */}
      <div className="flex w-full flex-col items-start gap-8 lg:gap-[16.59px] 2xl:gap-7">
        <div className="flex w-full flex-row items-center gap-3 lg:w-auto lg:gap-[9.48px] 2xl:gap-4">
          <span className="shrink-0 text-sm font-medium leading-[18px] text-[var(--color-primary)] lg:text-[13px] lg:leading-4 lg:tracking-[1.77778px] 2xl:text-base 2xl:leading-5 2xl:tracking-[3px]">
            {sectionNumber}
          </span>
          <span className="h-px w-10 shrink-0 bg-[var(--text-heading)] lg:w-[61.63px] 2xl:w-[104px]" />
          <span className="min-w-0 flex-1 text-sm font-medium leading-[18px] tracking-[3px] uppercase text-[var(--text-heading)] lg:flex-none lg:text-[13px] lg:leading-4 lg:tracking-[1.77778px] 2xl:text-base 2xl:leading-5 2xl:tracking-[3px]">
            {sectionLabel}
          </span>
        </div>

        <h2 className="w-full text-[28px] font-semibold leading-[35px] text-[var(--text-heading)] lg:text-[26.0741px] lg:font-bold lg:leading-[33px] 2xl:text-[44px] 2xl:leading-[55px]">
          {heading}
        </h2>
      </div>

      {/* Cards — mobile stack; tablet 2-col wrap; desktop 4 equal */}
      <div className="flex w-full flex-col items-start gap-8 lg:flex-row lg:flex-wrap lg:gap-6 2xl:flex-nowrap 2xl:gap-8">
        {directors.map((director) => (
          <article
            key={director.name}
            className="flex w-full flex-col items-start gap-4 border-b border-[var(--border-light)] lg:w-[calc(50%-12px)] lg:gap-[9.48px] lg:pb-[11.8519px] 2xl:w-auto 2xl:min-w-0 2xl:flex-1 2xl:gap-4 2xl:pb-5"
          >
            <div className="relative h-[360px] w-full overflow-hidden bg-[var(--muted)] lg:h-[254.07px] 2xl:h-[428.75px]">
              <Image
                src={director.headshot}
                alt={director.name}
                fill
                className="object-cover"
                sizes="(max-width: 1023px) 100vw, (max-width: 1535px) 50vw, 343px"
              />
            </div>

            <div className="flex w-full flex-col items-start gap-1 pb-4 lg:gap-[2.37px] lg:pb-0 2xl:gap-1">
              <h3 className="w-full text-lg font-bold leading-[23px] text-[var(--text-heading)] lg:text-[13px] lg:leading-4 2xl:text-lg 2xl:leading-[23px]">
                {director.name}
              </h3>
              <p className="w-full text-sm font-medium leading-[18px] text-[var(--color-contact-dark)] lg:text-[13px] lg:leading-4 lg:text-[var(--color-primary)] 2xl:text-sm 2xl:leading-[18px]">
                {director.role}
              </p>
              <p className="w-full text-[13px] font-normal leading-4 text-[var(--text-soft)] lg:text-[10px] lg:leading-[13px] 2xl:text-[13px] 2xl:leading-4">
                {director.department}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
