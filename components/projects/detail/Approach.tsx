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
    <section className="w-full bg-[var(--bg-hero)] px-6 py-16 text-white lg:p-[130px]">
      <div className="">
        <div className="flex flex-col gap-7">
          <div className="flex items-center gap-4">
            <span className="text-[16px] font-medium leading-5 tracking-[3px] text-white">
              {number}
            </span>
            <span className="h-px w-[104px] bg-white" />
            <span className="text-[16px] font-medium leading-5 tracking-[3px] uppercase text-white">
              OUR APPROACH
            </span>
          </div>

          <h2 className="text-[44px] font-bold leading-[55px] text-white">
            {heading}
          </h2>
        </div>

        <div className="mt-15 grid grid-cols-1 md:grid-cols-2">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col gap-3 border-b border-white/8 p-6 even:border-l even:md:border-l"
            >
              <span className="text-[40px] font-black leading-[50px] text-white/60">
                {step.number}
              </span>
              <h3 className="text-[18px] font-semibold leading-[23px] text-white">
                {step.title}
              </h3>
              <p className="text-[12px] leading-[15px] text-[var(--color-text-light-subtle)]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
