interface Props {
  number: string;
  heading: string;
  description: string;
}

export default function CivilEngineeringOverview({ number, heading, description }: Props) {
  return (
    <section className="w-full bg-white px-6 py-16 lg:p-[130px]">
      <div className="flex flex-col gap-7">
        <div className="flex items-center gap-4">
          <span className="text-[16px] font-medium leading-5 tracking-[3px] text-[var(--color-blue-accent)]">
            {number}
          </span>
          <span className="h-px w-[104px] bg-[var(--text-dark)]" />
          <span className="text-[16px] font-medium leading-5 tracking-[3px] uppercase text-[var(--text-dark)]">
            OVERVIEW
          </span>
        </div>

        <h2 className="text-[44px] font-bold leading-[55px] text-[var(--text-dark)]">
          {heading}
        </h2>

        <p className="max-w-[900px] text-[17px] leading-[31px] text-[var(--text-paragraph)]">
          {description}
        </p>
      </div>
    </section>
  );
}