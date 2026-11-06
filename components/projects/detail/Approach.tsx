interface Step {
  number: string;
  title: string;
  description: string;
}

interface Props {
  number: string;
  heading: string;
  steps: Step[];
}

export default function Approach({ number, heading, steps }: Props) {
  return (
    <section className="w-full bg-[var(--bg-hero)] px-5 py-5 text-white lg:px-[77px] lg:py-[77px] 2xl:px-[130px] 2xl:py-[130px]">
      <div className="mx-auto flex w-full max-w-[1468px] flex-col gap-8 lg:gap-9 2xl:gap-[60px]">
        <div className="flex flex-col gap-4 2xl:gap-7">
          <div className="flex items-center gap-3 lg:gap-[9px] 2xl:gap-4">
            <span className="text-[14px] font-medium leading-[18px] lg:text-[13px] lg:leading-4 lg:tracking-[1.78px] 2xl:text-base 2xl:leading-5 2xl:tracking-[3px]">
              {number}
            </span>
            <span className="h-px w-10 bg-white lg:w-[104px]" />
            <span className="text-[13px] font-semibold uppercase leading-4 lg:font-medium lg:tracking-[1.78px] 2xl:text-base 2xl:leading-5 2xl:tracking-[3px]">
              OUR APPROACH
            </span>
          </div>

          <h2 className="text-[28px] font-semibold leading-[35px] lg:text-[26px] lg:font-bold lg:leading-[33px] 2xl:text-[44px] 2xl:leading-[55px]">
            {heading}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex flex-col gap-3 border-b border-white/[0.08] p-5 lg:p-4 2xl:gap-3 2xl:p-6 ${
                index % 2 === 1 ? "lg:border-l" : ""
              }`}
            >
              <span className="text-[32px] font-black leading-10 text-white/60 lg:text-[24px] lg:leading-8 2xl:text-[40px] 2xl:leading-[50px]">
                {step.number}
              </span>
              <h3 className="text-[16px] font-semibold leading-5 2xl:text-[18px] 2xl:leading-[23px]">
                {step.title}
              </h3>
              <p className="text-[12px] font-normal leading-[15px] text-[var(--text-light-subtle)]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
