interface Props {
  number: string;
  heading: string;
  processSteps: { number: string; title: string; description: string }[];
}

export default function DeliveryProcess({ number, heading, processSteps }: Props) {
  return (
    <section className="w-full bg-[#07183D] px-6 py-16 text-white lg:p-[130px]">
      <div className="mx-auto max-w-[1468px]">
        <div className="flex w-[441px] max-w-full flex-col gap-7">
          <div className="flex items-center gap-4">
            <span className="text-[16px] font-medium leading-5 tracking-[3px] text-white">
              {number}
            </span>
            <span className="h-px w-[104px] bg-white" />
            <span className="text-[16px] font-medium leading-5 tracking-[3px] uppercase text-white">
              PROCESS
            </span>
          </div>

          <h2 className="text-[44px] font-bold leading-[55px] text-white">
            {heading}
          </h2>
        </div>

        <div className="mt-15 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((item, index) => (
            <div
              key={index}
              className="flex flex-col gap-3 border-b border-l border-[rgba(255,255,255,0.08)] p-6"
            >
              <span className="text-[40px] font-black leading-[50px] text-[rgba(255,255,255,0.6)]">
                {item.number}
              </span>
              <h3 className="text-[18px] font-semibold leading-[23px] text-white">
                {item.title}
              </h3>
              <p className="text-[12px] leading-[15px] text-[#B3B3B3]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
