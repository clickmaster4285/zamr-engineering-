interface CapabilityItem {
  title: string;
  items: string[];
}

interface Props {
  number: string;
  heading: string;
  capabilities: CapabilityItem[];
}

export default function TechnicalCapabilities({
  number,
  heading,
  capabilities,
}: Props) {
  return (
    <section className="flex w-full flex-col items-start gap-8 bg-[var(--bg-section)] px-4 py-12 lg:gap-[28.44px] lg:px-[91.8519px] lg:pb-[59.2593px] lg:pt-[47.4074px] 2xl:gap-12 2xl:px-[155px] 2xl:pb-[100px] 2xl:pt-20">
      <div className="flex w-full flex-col items-start gap-3 lg:gap-[7.11px] 2xl:gap-3">
        <div className="flex w-full flex-row items-center gap-3 lg:w-auto lg:gap-[9.48px] 2xl:gap-4">
          <span className="shrink-0 text-sm font-medium leading-[18px] text-[var(--color-contact-accent)] lg:text-[13px] lg:leading-4 lg:tracking-[1.77778px] 2xl:text-base 2xl:leading-5 2xl:tracking-[3px]">
            {number}
          </span>
          <span className="h-px w-[60px] shrink-0 bg-[var(--text-heading)] lg:w-[61.63px] 2xl:w-[104px]" />
          <span className="text-sm font-medium leading-[18px] tracking-[3px] uppercase text-[var(--text-heading)] lg:text-[13px] lg:leading-4 lg:tracking-[1.77778px] 2xl:text-base 2xl:leading-5 2xl:tracking-[3px]">
            Core Capabilities
          </span>
        </div>

        <h2 className="w-full text-[28px] font-semibold leading-[35px] text-[var(--text-heading)] lg:text-[26.0741px] lg:leading-[33px] 2xl:text-[44px] 2xl:leading-[55px]">
          {heading}
        </h2>
      </div>

      <div className="flex w-full flex-col items-start gap-5 lg:flex-row lg:flex-wrap lg:gap-6 2xl:grid 2xl:grid-cols-3 2xl:gap-[30px]">
        {capabilities.map((group) => (
          <article
            key={group.title}
            className="flex w-full flex-col items-start gap-5 bg-white p-6 lg:w-[calc(50%-12px)] lg:gap-[14.22px] lg:p-[17.7778px] 2xl:w-auto 2xl:gap-6 2xl:p-[30px]"
          >
            <h3 className="w-full text-[20px] font-semibold leading-[25px] text-[var(--text-heading)] lg:text-[15px] lg:leading-[19px] 2xl:text-[22px] 2xl:leading-7">
              {group.title}
            </h3>
            <ul className="flex w-full flex-col items-start gap-2.5 lg:gap-[7.11px] 2xl:gap-3">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="flex w-full flex-row items-start gap-2.5 lg:items-center lg:gap-[7.11px] 2xl:gap-3"
                >
                  <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 bg-[var(--color-secondary)] lg:mt-0 lg:h-[3.56px] lg:w-[3.56px] lg:bg-[var(--text-heading)] 2xl:h-1.5 2xl:w-1.5" />
                  <span className="min-w-0 flex-1 text-sm font-normal leading-[1.4] text-[var(--text-muted)] lg:text-[13px] 2xl:text-[15px]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
