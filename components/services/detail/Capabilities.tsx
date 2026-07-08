interface Props {
  number: string;
  heading: string;
  capabilities: { title: string; description: string }[];
}

export default function TechnicalCapabilities({ number, heading, capabilities }: Props) {
  return (
    <section className="w-full bg-[var(--bg-section)] px-6 py-16 lg:p-[130px]">
      <div className="mx-auto max-w-[1468px]">
        <div className="flex w-[441px] max-w-full flex-col gap-[28px]">
          <div className="flex items-center gap-4">
            <span className="text-[16px] font-medium leading-5 tracking-[3px] text-[var(--color-blue-accent)]">
              {number}
            </span>
            <span className="h-px w-[104px] bg-[var(--text-dark)]" />
            <span className="text-[16px] font-medium leading-5 tracking-[3px] uppercase text-[var(--text-dark)]">
              CAPABILITIES
            </span>
          </div>

          <h2 className="text-[44px] font-bold leading-[55px] text-[var(--text-heading)]">
            {heading}
          </h2>
        </div>

        <div className="mt-15 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-start border border-[var(--color-primary)]/10 bg-[var(--bg-section)] p-7 lg:h-[123px]"
            >
              <span className="h-[2px] w-full shrink-0 bg-[var(--color-blue-header)]" />
              <div className="mt-3 flex flex-col gap-3">
                <h3 className="text-[18px] font-semibold leading-[23px] text-[var(--text-heading)]">
                  {item.title}
                </h3>
                <p className="text-[12px] leading-[14px] text-[var(--color-text-soft)]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
