interface CapabilityItem {
  title: string;
  items: string[];
}

interface Props {
  number: string;
  heading: string;
  capabilities: CapabilityItem[];
}

export default function TechnicalCapabilities({ number, heading, capabilities }: Props) {
  return (
    <section className="w-full bg-[var(--bg-section)] px-6 py-16 lg:p-[130px]">
      <div>
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

          <h2 className="text-[44px] font-bold leading-[55px] text-[var(--text-dark)]">
            {heading}
          </h2>
        </div>

        <div className="mt-15 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((group, index) => (
            <div
              key={index}
              className="flex flex-col items-start border border-[var(--color-primary)]/10 bg-[var(--bg-section)] p-7"
            >
              <div className="flex flex-col gap-3">
                <h3 className="text-[18px] font-semibold leading-[23px] text-[var(--text-dark)]">
                  {group.title}
                </h3>
                <ul className="flex flex-col gap-2">
                  {group.items.map((item, itemIdx) => (
                    <li
                      key={itemIdx}
                      className="flex items-start gap-2 text-[13px] leading-[20px] text-[var(--color-text-soft)]"
                    >
                      <span
                        className="mt-[7px] block h-[2px] w-3 shrink-0"
                        style={{ background: "var(--color-primary)" }}
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}