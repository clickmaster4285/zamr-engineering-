import { Barlow } from "next/font/google";
import { highlightTerms } from "@/lib/highlightTerms";

const barlow = Barlow({
  weight: ["600"],
  subsets: ["latin"],
  display: "swap",
});

interface Props {
  number: string;
  heading: string;
  location: string;
  paragraphs: string[];
  highlightTermsList?: string[];
}

export default function Challenge({
  number,
  heading,
  location,
  paragraphs,
  highlightTermsList = [],
}: Props) {
  return (
    <section className="w-full bg-white px-5 py-5 lg:px-[77px] lg:py-[77px] 2xl:px-[130px] 2xl:py-[130px]">
      <div className="mx-auto flex w-full max-w-[1468px] flex-col items-start gap-8 lg:gap-8 2xl:flex-row 2xl:gap-[135px]">
        <div className="flex w-full flex-col items-start gap-4 lg:gap-[18px] 2xl:w-[344px] 2xl:shrink-0 2xl:gap-[30px]">
          <div className="flex flex-row items-center gap-3 lg:gap-[9px] 2xl:gap-4">
            <span className="text-[14px] font-medium leading-[18px] text-[var(--color-primary)] lg:text-[13px] lg:leading-4 lg:tracking-[1.78px] 2xl:text-base 2xl:leading-5 2xl:tracking-[3px]">
              {number}
            </span>
            <span className="h-px w-10 bg-[var(--color-primary)] lg:w-[104px] lg:bg-[var(--text-dark)]" />
            <span className="text-[13px] font-semibold uppercase leading-4 text-[var(--text-dark)] lg:text-[13px] lg:font-medium lg:tracking-[1.78px] 2xl:text-base 2xl:leading-5 2xl:tracking-[3px]">
              THE CHALLENGE
            </span>
          </div>

          <div className="flex w-full flex-col items-start gap-4 2xl:gap-[10px]">
            <h2 className="w-full text-[28px] font-semibold leading-[35px] text-[var(--text-dark)] lg:text-[26px] lg:font-bold lg:leading-[33px] 2xl:text-[44px] 2xl:leading-[55px]">
              {heading}
            </h2>
            <span className="h-px w-[79px] border-t border-[var(--color-secondary)] 2xl:w-[133px]" />
          </div>

          <div
            className="flex flex-row items-center gap-3 border px-4 py-3"
            style={{
              background: "var(--bg-section)",
              borderColor: "color-mix(in srgb, var(--color-primary) 15%, transparent)",
            }}
          >
            <span className="h-[6px] w-[6px] shrink-0 rounded-full bg-[var(--color-secondary)]" />
            <span
              className={`${barlow.className} text-[10px] font-semibold leading-[15px] tracking-[1.6px] text-[var(--color-text-soft)]`}
            >
              {location}
            </span>
          </div>
        </div>

        <div className="flex w-full min-w-0 flex-col gap-5 2xl:flex-1 2xl:gap-5">
          
          {paragraphs.map((p, i) => (
            <p
              key={i}
              className="w-full text-[15px] font-normal leading-[22px] text-[var(--text-dark)] 2xl:text-[20px] 2xl:leading-[25px]"
            >
              {highlightTerms(p, highlightTermsList)}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
