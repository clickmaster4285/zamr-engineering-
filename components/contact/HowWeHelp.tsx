import { Check } from "lucide-react";
import { helpContent } from "@/mockData/contact";

export default function HowWeHelp() {
  const { heading, subtitle, items } = helpContent;

  return (
    <section className="flex w-full flex-col items-center bg-[var(--color-contact-dark)] px-6 py-16 sm:px-10 sm:py-20 lg:p-[130px]">
      <div className="flex w-full max-w-[1468px] flex-col items-center gap-[50px]">
        <div className="flex w-full flex-col items-center gap-[30px]">
          <h2 className="w-full text-center text-[28px] font-bold leading-[36px] text-white sm:text-[36px] sm:leading-[44px] lg:text-[44px] lg:leading-[55px]">
            {heading}
          </h2>
          <p className="w-full text-center text-base leading-[30px] text-white sm:text-[20px] sm:leading-[30px] lg:text-[24px]">
            {subtitle}
          </p>
        </div>

        <div className="grid w-full grid-cols-1 gap-x-6 lg:gap-y-10 sm:grid-cols-2 lg:grid-cols-4 ">
          {items.map((item) => (
            <div key={item} className="flex items-center gap-4">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/10">
                <Check size={14} strokeWidth={2.5} className="text-white" />
              </span>
              <span className="text-[18px] font-medium leading-[23px] text-white">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
