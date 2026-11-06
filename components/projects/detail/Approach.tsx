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
    <section className="w-full bg-[var(--bg-hero)] px-5 py-14 text-white sm:px-8 md:px-10 md:py-16 xl:px-[130px] xl:py-[130px]">
      <div className="mx-auto flex w-full max-w-[1468px] flex-col gap-10 md:gap-12 xl:gap-[60px]">
        <div className="flex flex-col gap-6 md:gap-7">
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium leading-5 tracking-[3px] text-white md:text-[16px]">
              {number}
            </span>
            <span className="h-px w-16 bg-white md:w-[104px]" />
            <span className="text-sm font-medium leading-5 tracking-[3px] uppercase text-white md:text-[16px]">
              OUR APPROACH
            </span>
          </div>

          <h2 className="max-w-[900px] text-[32px] font-bold leading-[40px] text-white sm:text-[36px] sm:leading-[44px] md:text-[40px] md:leading-[50px] xl:text-[44px] xl:leading-[55px]">
            {heading}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col gap-3 border-b border-l border-white/10 p-5 sm:p-6"
            >
              <span className="text-[32px] font-black leading-[40px] text-white/60 md:text-[40px] md:leading-[50px]">
                {step.number}
              </span>
              <h3 className="text-[16px] font-semibold leading-[22px] text-white md:text-[18px] md:leading-[23px]">
                {step.title}
              </h3>
              <p className="text-[13px] leading-[18px] text-[var(--color-text-light-subtle)] md:text-[12px] md:leading-[15px]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
