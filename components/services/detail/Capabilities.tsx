interface Props {
  number: string;
  heading: string;
  capabilities: { title: string; description: string }[];
}

export default function TechnicalCapabilities({ number, heading, capabilities }: Props) {
  return (
    <section className="w-full bg-[#F6F8FC] px-6 py-16 lg:p-[130px]">
      <div className="mx-auto max-w-[1468px]">
        <div className="flex w-[441px] max-w-full flex-col gap-[28px]">
          <div className="flex items-center gap-4">
            <span className="text-[16px] font-medium leading-5 tracking-[3px] text-[#1945A7]">
              {number}
            </span>
            <span className="h-px w-[104px] bg-black" />
            <span className="text-[16px] font-medium leading-5 tracking-[3px] uppercase text-[#333333]">
              CAPABILITIES
            </span>
          </div>

          <h2 className="text-[44px] font-bold leading-[55px] text-[#090D15]">
            {heading}
          </h2>
        </div>

        <div className="mt-15 flex flex-col gap-4">
          {/* Row 1 */}
          <div className="flex flex-row gap-4">
            {capabilities.slice(0, 3).map((item, index) => (
              <div
                key={index}
                className="flex flex-1 flex-col  items-center border border-[rgba(34,65,158,0.1)] bg-[#F6F8FC] p-7 "
              >
                <div className="flex flex-col gap-3">
                  <h3 className="text-[18px] font-semibold leading-[23px] text-[#090D15]">
                    {item.title}
                  </h3>
                  <p className="text-[12px] leading-[14px] text-[#697281]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          {/* Row 2 */}
          <div className="flex flex-row gap-4">
            {capabilities.slice(3, 6).map((item, index) => (
              <div
                key={index}
                className="flex flex-1 flex-col items-start border border-[rgba(34,65,158,0.1)] bg-[#F6F8FC] p-7 lg:h-[123px]"
              >
                <span className="h-[2px] w-full bg-[#22419E]" />
                <div className="mt-3 flex flex-col gap-3">
                  <h3 className="text-[18px] font-semibold leading-[23px] text-[#090D15]">
                    {item.title}
                  </h3>
                  <p className="text-[12px] leading-[14px] text-[#697281]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
