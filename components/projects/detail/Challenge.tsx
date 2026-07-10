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
    <section className="w-full bg-white px-6 py-16 lg:p-[130px]">
      {/* Frame 1321318991 — inner row */}
      {/* Figma: flex row, gap: 135px, left:344px / right:989px */}
      <div className="flex flex-col items-start gap-10 lg:flex-row lg:gap-[135px]">
        {/* Frame 120 — left column (344px) */}
        <div className="flex w-full flex-col items-start gap-6 lg:w-[344px] lg:gap-[30px]">
          {/* Frame 118 — section label */}
          {/* Figma: "01" / 104px line / "THE CHALLENGE", 16px/500/20px, gap:16px */}
          <div className="flex flex-row items-center gap-4">
            <span className="text-base font-medium tracking-[3px] text-[var(--color-blue-accent)]">
              {number}
            </span>
            <span className="h-px w-[104px] bg-[var(--text-dark)]" />
            <span className="text-base font-medium tracking-[3px] uppercase text-[var(--text-dark)]">
              THE CHALLENGE
            </span>
          </div>

          {/* Frame 119 — heading + underline */}
          {/* Figma: 44px/700/55px, #333333 + 133px underline in #CE1A00 (→ var(--color-secondary)) */}
          <div className="flex w-full flex-col items-start gap-[10px]">
            <h2 className="w-full text-[36px] font-bold leading-[44px] text-[var(--text-dark)] sm:text-[40px] sm:leading-[50px] lg:w-[344px] lg:text-[44px] lg:leading-[55px]">
              {heading}
            </h2>
            <span className="h-px w-[133px] border-t border-[var(--color-secondary)]" />
          </div>

          {/* Container — location badge */}
          {/* Figma: padding:12px 16px, bg:#F6F8FC, border:rgba(34,65,158,0.15), gap:12px (no border-radius) */}
          <div className="flex flex-row items-center gap-3 border px-4 py-3"
            style={{
              background: "var(--bg-light)",
              borderColor: "color-mix(in srgb, var(--color-primary) 15%, transparent)",
            }}>
            {/* Red dot: 6×6px, #CE1A00 → var(--color-secondary) */}
            <span className="h-[6px] w-[6px] rounded-full bg-[var(--color-secondary)]" />
            {/* Figma: Barlow 600, 10px/15px, letter-spacing:1.6px, #697281 */}
            <span
              className={`${barlow.className} text-[10px] font-semibold leading-[15px] tracking-[1.6px] text-[var(--color-text-soft)]`}
            >
              {location}
            </span>
          </div>
        </div>

        {/* Frame 1321318989 — right column (989px) */}
        {/* Figma: flex column, gap: 20px, width: 989px */}
        <div className="flex w-full flex-col gap-5 lg:w-[989px] lg:gap-[20px]">
          {/* Figma: Outfit 400, 20px/25px, #333333, font-feature-settings: 'liga' off */}
          <p
            className="w-full text-base leading-relaxed text-[var(--text-dark)] lg:text-[20px] lg:leading-[25px]"
            style={{ fontFeatureSettings: "'liga' off" }}
          >
            {description}
          </p>

          {paragraphs.map((p, i) => (
            <p
              key={i}
              className="w-full text-base leading-relaxed text-[var(--text-dark)] lg:text-[20px] lg:leading-[25px]"
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
