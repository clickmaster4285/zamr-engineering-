interface Props {
  number: string;
  heading: string;
  paragraphs: string[];
  serviceDetails: { label: string; value: string }[];
}

export default function CivilEngineeringOverview({ number, heading, paragraphs, serviceDetails }: Props) {
  return (
    <section className="w-full bg-white px-6 py-16 lg:p-[130px]">
      <div className="mx-auto grid max-w-[1468px] grid-cols-1 gap-12 lg:grid-cols-[1fr_436px] lg:gap-[60px]">
        <div className="flex flex-col">
          <div className="flex items-center gap-4">
            <span className="text-[16px] font-medium leading-5 tracking-[3px] text-[#1945A7]">
              {number}
            </span>
            <span className="h-px w-[104px] bg-black" />
            <span className="text-[16px] font-medium leading-5 tracking-[3px] uppercase text-[#333333]">
              OVERVIEW
            </span>
          </div>

          <h2 className="pt-7 text-[44px] font-bold leading-[55px] text-[#090D15]">
            {heading}
          </h2>

          <div className="pt-8">
            {paragraphs.map((p, i) => (
              <p
                key={i}
                className={`text-[17px] leading-[31px] ${
                  i === 0 ? "text-[#344153]" : "pt-5 text-[#697281]"
                }`}
              >
                {p}
              </p>
            ))}
          </div>
        </div>

        <div className="flex flex-col overflow-hidden border border-[rgba(34,65,158,0.12)] bg-[#F6F8FC]">
          <div className="flex items-center justify-between bg-[#22419E] px-6 py-4">
            <span className="text-[10px] font-bold leading-[15px] tracking-[2px] text-white">
              SERVICE DETAILS
            </span>
            <span className="font-black leading-[33px] tracking-[-0.44px] text-[rgba(255,255,255,0.18)]"
              style={{ fontSize: "22px" }}>
              {number}
            </span>
          </div>

          {serviceDetails.map((item, i) => (
            <div
              key={item.label}
              className="flex items-center justify-between px-6 py-4 border-b border-[rgba(34,65,158,0.08)] last:border-b-0"
            >
              <span className="text-[9.5px] font-semibold leading-[14px] tracking-[1.33px] text-[#9AA3B0]">
                {item.label}
              </span>
              <span className="text-right text-[12.5px] font-bold leading-[19px] tracking-[-0.0625px] text-[#090D15]">
                {item.value}
              </span>
            </div>
          ))}

          <div className="border-t border-[rgba(34,65,158,0.1)] px-6 py-4">
            <button className="flex w-full items-center justify-center gap-2 bg-[#22419E] py-[14px] text-[10px] font-bold leading-[15px] tracking-[2px] uppercase text-white transition-opacity hover:opacity-90">
              GET IN TOUCH
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" className="text-white">
                <path d="M5 12H19" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
