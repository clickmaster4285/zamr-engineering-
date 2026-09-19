"use client";

import { useState, useEffect, useRef } from "react";
import { aboutStats, aboutParagraphs ,aboutlastbottomparagraph} from "@/mockData/landing";

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

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[var(--bg-light)] px-6 py-16 lg:p-[130px]"
    >
      {/* Frame 1321318991 — inner row */}
      <div className="flex flex-col items-start gap-10 lg:flex-row lg:gap-[135px]">
        {/* Frame 120 — left column */}
        <div className="flex w-full flex-col items-start gap-6 lg:w-[344px] lg:gap-[30px]">
          {/* Frame 118 — section label */}
          <div className="flex flex-row items-center gap-4">
            <span className="text-base font-medium tracking-[3px] text-[var(--color-primary)]">
              01
            </span>
            <span className="h-px w-[104px] bg-[var(--text-dark)]" />
            <span className="text-base font-medium tracking-[3px] uppercase text-[var(--text-dark)]">
              ABOUT US
            </span>
          </div>

          {/* Frame 119 — heading */}
          <div className="flex w-full flex-col items-start gap-[10px]">
            <h2 className="w-full text-[40px] font-bold leading-[50px] text-[var(--text-heading)] sm:text-[48px] sm:leading-[60px] lg:w-[344px] lg:text-[56px] lg:leading-[71px]">
              Built on
              <br />
              Precision
              <br />
              &amp; Reliability
            </h2>
            <span className=" w-[133px] border-1 border-[var(--color-accent)]" />
          </div>
        </div>

        {/* Frame 1321318990 — right column */}
        <div className="flex w-full flex-col gap-6 lg:w-[989px] lg:gap-[30px]">
          {/* Frame 1321318989 — paragraphs */}
          <div className="flex w-full flex-col gap-5">
            {aboutParagraphs.map((p, i) => (
              <p key={i} className="w-full text-base leading-relaxed text-[var(--text-dark)] lg:text-[20px] lg:leading-[25px]">
                {p}
              </p>
            ))}
          </div>

          {/* Divider */}
          <div className="h-px w-full border-t border-[var(--text-dark)]" />

          {/* Frame 1321318988 — stats row */}
          <div className="grid w-full grid-cols-2 gap-x-12">
            {aboutStats.map((stat, index) => (
              <div key={stat.label} className="flex flex-col">
                {/* Number */}
                <div className="flex items-start">
                  <span className="text-5xl font-normal leading-none text-[var(--color-primary)] sm:text-[60px]">
                    {currentValues[index]}
                  </span>

                  <span className="ml-1 text-2xl font-light leading-none text-[var(--color-primary)] sm:text-[30px]">
                    {stat.suffix}
                  </span>
                </div>

                {/* Label */}
                <span className="mt-3 text-sm font-light leading-5 text-[var(--text-dark)] sm:text-base">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {aboutlastbottomparagraph.map((p, i) => (
              <p key={i} className="w-full text-base leading-relaxed text-[var(--text-dark)] lg:text-[20px] lg:leading-[25px]">
                {p}
              </p>
            ))}
        </div>
      </div>
    </section>
  );
}
