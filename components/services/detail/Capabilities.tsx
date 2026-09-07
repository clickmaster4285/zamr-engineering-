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
    <section
      className="w-full px-6 py-12 lg:px-[155px] lg:pt-20 lg:pb-[100px]"
      style={{ background: "var(--bg-section)" }}
    >
      <div className="flex flex-col gap-12">
        {/* Section Header */}
        <div className="flex w-full max-w-full flex-col gap-3">
          <div className="flex items-center gap-4">
            <span className="text-[16px] font-medium leading-5 tracking-[3px] text-[var(--color-blue-accent)]">
              {number}
            </span>
            <span className="h-px w-[104px] bg-[var(--text-dark)]" />
            <span className="text-[16px] font-medium leading-5 tracking-[3px] uppercase text-[var(--text-dark)]">
              CORE CAPABILITIES
            </span>
          </div>

          <h2 className="w-full text-[36px] font-semibold leading-[44px] text-[var(--text-dark)] sm:text-[40px] sm:leading-[50px] lg:text-[44px] lg:leading-[55px]">
            {heading}
          </h2>
        </div>

        {/* Grid — 3 columns × 2 rows */}
        <div className="flex flex-col gap-[30px]">
          {Array.from({
            length: Math.ceil(capabilities.length / 3),
          }).map((_, rowIdx) => {
            const rowItems = capabilities.slice(rowIdx * 3, rowIdx * 3 + 3);
            return (
              <div
                key={rowIdx}
                className="grid grid-cols-1 gap-[30px] sm:grid-cols-2 lg:grid-cols-3"
              >
                {rowItems.map((group, idx) => (
                  <div
                    key={`${rowIdx}-${idx}`}
                    className="flex flex-col items-start gap-6 bg-white p-[30px]"
                    style={{ border: "1px solid #E1E8F1" }}
                  >
                    <h3 className="w-full text-[22px] font-semibold leading-[28px] text-[var(--text-dark)]">
                      {group.title}
                    </h3>
                    <ul className="flex w-full flex-col gap-3">
                      {group.items.map((item, itemIdx) => (
                        <li
                          key={itemIdx}
                          className="flex flex-row items-start gap-3"
                        >
                          <span
                            className="mt-[7px] block h-[6px] w-[6px] shrink-0"
                            style={{ background: "#333333" }}
                          />
                          <span className="text-[15px] leading-[21px] text-[#666666]">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}