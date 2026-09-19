"use client";

import { useState, useEffect, useRef } from "react";
import {
  aboutSection,
  aboutStats,
  aboutParagraphs,
  aboutlastbottomparagraph,
} from "@/mockData/landing";

export default function About() {
  const [currentValues, setCurrentValues] = useState<number[]>(
    aboutStats.map(() => 0)
  );
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);
  const animationRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          startAnimation();
          setHasAnimated(true);
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, [hasAnimated]);

  const startAnimation = () => {
    const targets = aboutStats.map((s) => s.value);
    const duration = 2000;
    startTimeRef.current = performance.now();
    const animate = (currentTime: number) => {
      if (startTimeRef.current === null) return;
      const elapsed = currentTime - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const newValues = targets.map((target) => Math.round(target * eased));
      setCurrentValues(newValues);
      if (progress < 1) animationRef.current = requestAnimationFrame(animate);
    };
    animationRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  const { sectionNumber, sectionLabel, heading } = aboutSection;

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[var(--bg-section)] px-[30px] py-[30px] lg:px-[77px] lg:py-[77px] 2xl:p-[130px]"
    >
      {/* Frame 1321318991 — desktop: row + 135px gap | tablet/mobile: column */}
      <div className="flex w-full flex-col items-start gap-7 lg:gap-8 2xl:flex-row 2xl:gap-[135px]">
        {/* Frame 120 — left / top: label + heading */}
        <div className="flex w-full flex-col items-start gap-[7px] lg:gap-[18px] 2xl:w-[344px] 2xl:shrink-0 2xl:gap-[30px]">
          {/* Frame 118 — section label */}
          <div className="flex flex-row items-center gap-[4px] lg:gap-[9.5px] 2xl:gap-4">
            <span className="text-sm font-medium leading-[18px] tracking-[0.68px] text-[var(--color-contact-accent)] lg:text-[13px] lg:leading-4 lg:tracking-[1.78px] 2xl:text-base 2xl:leading-5 2xl:tracking-[3px]">
              {sectionNumber}
            </span>
            <span className="h-px w-[24px] bg-[var(--text-heading)] lg:w-[62px] 2xl:w-[104px]" />
            <span className="text-[12px] font-medium leading-[18px] tracking-[0.68px] uppercase text-[var(--text-section-label)] lg:leading-4 lg:tracking-[1.78px] 2xl:leading-5 2xl:tracking-[3px]">
              {sectionLabel}
            </span>
          </div>

          {/* Frame 119 — heading + red underline */}
          <div className="flex w-full flex-col items-start gap-[2px] lg:gap-[6px] 2xl:gap-2.5">
            <h2 className="w-full text-[36px] font-bold leading-[45px] text-[var(--text-heading)] lg:text-[33px] lg:leading-[42px] 2xl:text-[56px] 2xl:leading-[71px]">
              {heading}
            </h2>
            <span className="block h-px w-[30px] bg-[var(--color-alert-accent-line)] lg:w-[79px] 2xl:w-[133px]" />
          </div>
        </div>

        {/* Frame 1321318990 — right / bottom: copy + stats */}
        <div className="flex w-full flex-col items-start gap-[7px] lg:gap-[18px] 2xl:max-w-[989px] 2xl:gap-[30px]">
          {/* Frame 1321318989 — paragraphs */}
          <div className="flex w-full flex-col items-start gap-[4.5px] lg:gap-3 2xl:gap-5">
            {aboutParagraphs.map((p, i) => (
              <p
                key={i}
                className="w-full text-base leading-5 text-[var(--text-heading)] [font-feature-settings:'liga'_off] lg:text-[15px] lg:leading-[19px] 2xl:text-[20px] 2xl:leading-[25px]"
              >
                {p}
              </p>
            ))}
          </div>

          {/* Vector 23 — divider (partial width on tablet/mobile) */}
          <div className="h-px w-[225px] bg-[var(--text-heading)] lg:w-[586px] 2xl:w-full" />

          {/* Frame 1321318988 — stats */}
          <div className="flex w-full flex-row flex-wrap items-center justify-between gap-4 lg:flex-nowrap lg:gap-[110px] 2xl:gap-[185px]">
            {aboutStats.map((stat, index) => {
              const isCentered = stat.align === "center";
              return (
                <div
                  key={stat.label}
                  className={`flex min-w-0 flex-1 flex-col gap-[0.5px] lg:gap-[1px] 2xl:gap-0.5 ${
                    isCentered
                      ? "items-center lg:items-start"
                      : "items-start"
                  }`}
                >
                  <div className="flex flex-row items-start gap-[2px] lg:gap-[5px] 2xl:gap-2">
                    <span className="text-[36px] font-normal leading-[45px] text-[var(--color-primary)] lg:text-[43px] lg:leading-[54px] 2xl:text-[72px] 2xl:leading-[91px]">
                      {currentValues[index]}
                    </span>
                    <span className="text-[30px] font-light leading-9 text-[var(--color-primary)] lg:text-[25px] lg:leading-[30px] 2xl:text-[42px] 2xl:leading-[50px]">
                      {stat.suffix}
                    </span>
                  </div>
                  <span
                    className={`w-full text-sm font-light leading-[18px] text-[var(--text-heading)] lg:text-[13px] lg:leading-4 2xl:text-base 2xl:leading-5 ${
                      isCentered ? "text-center lg:text-left" : "text-left"
                    }`}
                  >
                    {stat.label}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Trusted line */}
          {aboutlastbottomparagraph.map((p, i) => (
            <p
              key={i}
              className="w-full text-base leading-5 text-[var(--text-heading)] [font-feature-settings:'liga'_off] lg:text-[15px] lg:leading-[19px] 2xl:text-[20px] 2xl:leading-[25px]"
            >
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
