import { Barlow } from "next/font/google";

const barlow = Barlow({
  weight: ["600"],
  subsets: ["latin"],
  display: "swap",
});

interface Props {
  number: string;
  heading: string;
  description: string;
  location: string;
  paragraphs: string[];
}

export default function Challenge({
  number,
  heading,
  description,
  location,
  paragraphs,
}: Props) {
  return (
    <section className="w-full bg-white px-5 py-14 sm:px-8 md:px-10 md:py-16 xl:px-[130px] xl:py-[130px]">
      <div className="mx-auto flex w-full max-w-[1468px] flex-col items-start gap-8 md:gap-10 xl:flex-row xl:gap-[80px] 2xl:gap-[135px]">
        <div className="flex w-full flex-col items-start gap-6 xl:w-[344px] xl:shrink-0 xl:gap-[30px]">
          <div className="flex flex-row items-center gap-4">
            <span className="text-sm font-medium tracking-[3px] text-[var(--color-primary)] md:text-base">
              {number}
            </span>
            <span className="h-px w-16 bg-[var(--text-dark)] md:w-[104px]" />
            <span className="text-sm font-medium tracking-[3px] uppercase text-[var(--text-dark)] md:text-base">
              THE CHALLENGE
            </span>
          </div>

          <div className="flex w-full flex-col items-start gap-[10px]">
            <h2 className="w-full text-[32px] font-bold leading-[40px] text-[var(--text-dark)] sm:text-[36px] sm:leading-[44px] md:text-[40px] md:leading-[50px] xl:text-[44px] xl:leading-[55px]">
              {heading}
            </h2>
            <span className="h-px w-[100px] border-t border-[var(--color-secondary)] md:w-[133px]" />
          </div>

          <div
            className="flex flex-row items-center gap-3 border px-4 py-3"
            style={{
              background: "var(--bg-light)",
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

        <div className="flex w-full min-w-0 flex-col gap-5 xl:flex-1">
          <p
            className="w-full text-base leading-relaxed text-[var(--text-dark)] xl:text-[20px] xl:leading-[25px]"
            style={{ fontFeatureSettings: "'liga' off" }}
          >
            {description}
          </p>

          {paragraphs.map((p, i) => (
            <p
              key={i}
              className="w-full text-base leading-relaxed text-[var(--text-dark)] xl:text-[20px] xl:leading-[25px]"
              style={{ fontFeatureSettings: "'liga' off" }}
            >
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
