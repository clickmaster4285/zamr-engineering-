"use client";

import { useState, useEffect, useRef } from "react";

type Stat = {
  value: number;
  suffix: string;
  label: string;
  align: "start" | "center" | "end";
};

const statsData: Stat[] = [
  { value: 150, suffix: "+", label: "PROJECTS DELIVERED", align: "start" },
  { value: 12, suffix: "+", label: "YEARS OF EXPERIENCE", align: "center" },
  { value: 98, suffix: "%", label: "COMPLIANCE RATE", align: "end" },
];

export default function About() {
  const [currentValues, setCurrentValues] = useState<number[]>(
    statsData.map(() => 0)
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
    const targets = statsData.map((s) => s.value);
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
      className="w-full bg-[var(--bg-light)] p-[130px]"
    >
      {/* Frame 1321318991 — inner row */}
      <div className="mx-auto flex max-w-[1468px] flex-row items-start gap-[135px]">
        {/* Frame 120 — left column */}
        <div className="flex w-[344px] flex-col items-start gap-[30px]">
          {/* Frame 118 — section label */}
          <div className="flex flex-row items-center gap-4">
            <span className="text-base font-medium tracking-[3px] text-[var(--color-primary)]">
              01
            </span>
            <span className="h-px w-[104px] bg-black" />
            <span className="text-base font-medium tracking-[3px] uppercase text-[#333333]">
              ABOUT US
            </span>
          </div>

          {/* Frame 119 — heading */}
          <div className="flex w-full flex-col items-start gap-[10px]">
            <h2 className="w-[344px] text-[56px] font-bold leading-[71px] text-[#333333]">
              Built on
              <br />
              Precision
              <br />
              &amp; Reliability
            </h2>
            <span className="h-px w-[133px] border-t border-[var(--color-accent)]" />
          </div>
        </div>

        {/* Frame 1321318990 — right column */}
        <div className="flex w-[989px] flex-col gap-[30px]">
          {/* Frame 1321318989 — paragraphs */}
          <div className="flex w-full flex-col gap-5">
            <p className="w-full text-[20px] leading-[25px] text-[#333333]">
              ZAMR Engineering is a Sydney-based civil engineering consultancy
              delivering precision-led infrastructure solutions across New
              South Wales and beyond. Founded on a commitment to technical
              excellence, we partner with government bodies, developers, and
              industry leaders to engineer infrastructure that endures.
            </p>
            <p className="w-full text-[20px] leading-[25px] text-[#333333]">
              Our approach integrates rigorous engineering methodology with
              forward-looking design thinking — producing outcomes that are
              structurally sound, environmentally considered, and technically
              innovative. Every project is an opportunity to advance what
              infrastructure can achieve.
            </p>
          </div>

          {/* Divider */}
          <div className="h-px w-full border-t border-[#333333]" />

          {/* Frame 1321318988 — stats row */}
          <div className="flex w-full flex-row items-center justify-between gap-x-[185px]">
            {statsData.map((stat, index) => (
              <div
                key={stat.label}
                className="flex flex-1 flex-col gap-[2px]"
                style={{ alignItems: stat.align }}
              >
                <div
                  className="flex flex-row items-start gap-2"
                  style={{
                    width:
                      index === 0 ? "145px" : index === 1 ? "97px" : "113px",
                  }}
                >
                  <span className="text-[72px] font-normal leading-[91px] text-[var(--color-primary)]">
                    {currentValues[index]}
                  </span>
                  <span className="text-[42px] font-light leading-[50px] text-[var(--color-primary)]">
                    {stat.suffix}
                  </span>
                </div>
                <span className="text-base font-light leading-5 text-[#333333]">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
