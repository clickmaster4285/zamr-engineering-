import { Barlow } from "next/font/google";

interface Stat {
  label: string;
  value: string;
}

const barlow = Barlow({
  weight: ["500", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});

interface Props {
  stats: Stat[];
}

export default function StatsBar({ stats }: Props) {
  return (
    <section className="w-full bg-[var(--bg-hero)]">
      <div className="flex flex-wrap items-stretch px-6 lg:px-[130px]">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className={`flex flex-1 flex-col justify-center items-center gap-1 ${
              i > 0 ? "border-l border-white/37" : ""
            } px-3 py-5 min-w-[100px] sm:px-4 sm:py-6 lg:px-[30px] lg:py-[30px] lg:h-[115px] lg:items-start`}
          >
            <span
              className={`${barlow.className} font-black text-white text-center text-[16px] leading-[20px] sm:text-[20px] sm:leading-[24px] lg:text-left lg:text-[34px] lg:leading-[34px]`}
              style={{ letterSpacing: "-0.952px" }}
            >
              {stat.value}
            </span>
            <span
              className={`${barlow.className} font-medium text-white/32 text-center text-[7px] leading-[9px] sm:text-[8px] sm:leading-[11px] lg:text-left lg:text-[9.5px] lg:leading-[14px]`}
              style={{ letterSpacing: "1.33px" }}
            >
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
