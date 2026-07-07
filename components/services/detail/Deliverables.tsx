interface Props {
  number: string;
  heading: string;
  subtext: string;
  deliverables: string[];
}

export default function Deliverables({ number, heading, subtext, deliverables }: Props) {
  return (
    <section className="w-full bg-white px-6 py-16 lg:p-[130px]">
      <div className="mx-auto grid max-w-[1468px] grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-[60px]">
        <div className="flex flex-col gap-[30px]">
          <div className="flex items-center gap-4">
            <span className="text-[16px] font-medium leading-5 tracking-[3px] text-[#1945A7]">
              {number}
            </span>
            <span className="h-px w-[104px] bg-black" />
            <span className="text-[16px] font-medium leading-5 tracking-[3px] uppercase text-[#333333]">
              DELIVERABLES
            </span>
          </div>

          <h2 className="text-[56px] font-bold leading-[71px] text-[#333333]">
            {heading}
          </h2>

          <p className="text-[18px] leading-[23px] text-[#333333]">
            {subtext}
          </p>
        </div>

        <div className="flex flex-col">
          {deliverables.map((item, i) => (
            <div
              key={item}
              className="flex items-center gap-4 border-b border-[#EEF0F8] py-5"
            >
              <span className="flex h-5 w-5 shrink-0 items-center justify-center border border-[rgba(206,26,0,0.35)] bg-[rgba(206,26,0,0.06)]">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
                  <path d="M20 6L9 17L4 12" stroke="#CE1A00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span className="text-[15px] leading-[18px] text-[#333333]">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
