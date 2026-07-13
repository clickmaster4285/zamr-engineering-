import Image from "next/image";

interface Props {
  number: string;
  heading: string;
  subtext: string;
  deliverables: string[];
}

export default function Deliverables({ number, heading, subtext, deliverables }: Props) {
  return (
    <section className="w-full bg-white px-6 py-16 sm:px-10 sm:py-20 lg:p-[130px]">
      <div className="flex flex-col gap-12 lg:grid lg:grid-cols-2 lg:gap-[60px]">
        <div className="flex flex-col gap-6 sm:gap-8 lg:gap-[30px]">
          <div className="flex items-center gap-3 sm:gap-4">
            <span className="text-sm font-medium tracking-[3px] text-[var(--color-blue-accent)] lg:text-base">
              {number}
            </span>
            <span className="hidden h-px w-[104px] bg-[var(--text-dark)] sm:block" />
            <span className="text-sm font-medium tracking-[3px] uppercase text-[var(--text-dark)] lg:text-base">
              DELIVERABLES
            </span>
          </div>

          <h2 className="text-[28px] font-bold leading-[36px] text-[var(--text-dark)] sm:text-[36px] sm:leading-[44px] lg:text-[56px] lg:leading-[71px]">
            {heading}
          </h2>

          <p className="text-sm leading-relaxed text-[var(--text-paragraph)] sm:text-base lg:text-[18px] lg:leading-[23px]">
            {subtext}
          </p>
        </div>

        <div className="flex flex-col">
          {deliverables.map((item) => (
            <div
              key={item}
              className="flex items-center gap-3 border-b border-[var(--border-table)] py-4 sm:gap-4 sm:py-5"
            >
              <span className="flex shrink-0 items-center justify-center">
                <Image src="/icons/tick.svg" alt="" width={20} height={22} />
              </span>
              <span className="text-sm leading-[18px] text-[var(--text-paragraph)] sm:text-[15px] lg:text-base">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
