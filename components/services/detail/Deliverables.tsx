import Image from "next/image";

interface Props {
  number: string;
  heading: string;
  subtext: string;
  deliverables: string[];
}

export default function Deliverables({ number, heading, subtext, deliverables }: Props) {
  return (
    <section className="w-full bg-white px-6 py-16 lg:p-[130px]">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-[60px]">
        <div className="flex flex-col gap-[30px]">
          <div className="flex items-center gap-4">
            <span className="text-[16px] font-medium leading-5 tracking-[3px] text-[var(--color-blue-accent)]">
              {number}
            </span>
            <span className="h-px w-[104px] bg-[var(--text-dark)]" />
            <span className="text-[16px] font-medium leading-5 tracking-[3px] uppercase text-[var(--text-dark)]">
              DELIVERABLES
            </span>
          </div>

          <h2 className="text-[56px] font-bold leading-[71px] text-[var(--text-dark)]">
            {heading}
          </h2>

          <p className="text-[18px] leading-[23px] text-[var(--text-dark)]">
            {subtext}
          </p>
        </div>

        <div className="flex flex-col">
          {deliverables.map((item, i) => (
            <div
              key={item}
              className="flex items-center gap-4 border-b border-[var(--color-border-table)] py-5"
            >
              <span className="flex shrink-0 items-center justify-center ">
                <Image src="/icons/tick.svg" alt="" width={20} height={22} />
              </span>
              <span className="text-[15px] leading-[18px] text-[var(--text-dark)]">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
