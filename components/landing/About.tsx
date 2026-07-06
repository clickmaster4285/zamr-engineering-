"use client";

import { useState, useEffect, useRef } from "react";

type Stat = {
  value: number;
  suffix: string;
  label: string;
};

const statsData: Stat[] = [
  { value: 150, suffix: "+", label: "PROJECTS DELIVERED" },
  { value: 12, suffix: "+", label: "YEARS OF EXPERIENCE" },
  { value: 98, suffix: "%", label: "COMPLIANCE RATE" },
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
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

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      }
    };

    animationRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[var(--bg-light)] px-6 py-24 lg:px-32 lg:py-32"
    >
      <div className="mx-auto grid grid-cols-1 gap-12 lg:grid-cols-[450px_1fr] lg:gap-32">
        {/* Left column */}
        <div>
          <div className="mb-8 flex items-center gap-4">
            <span className="text-base font-medium tracking-[0.2em] text-[var(--color-primary)]">
              01
            </span>
            <span className="h-px w-24 bg-black" />
            <span className="text-base font-medium tracking-[0.2em] text-[var(--text-dark)]">
              ABOUT US
            </span>
          </div>
          <h2 className="text-[56px] font-bold leading-[71px] text-[var(--text-dark)]">
            Built on
            <br />
            Precision
            <br />
            <span className="relative inline-block">
              &amp; Reliability
              <span className="absolute -bottom-2 left-0 h-[3px] w-32 bg-[var(--color-accent)]" />
            </span>
          </h2>
        </div>

        {/* Right column */}
        <div className="flex flex-col justify-center">
          <p className="text-lg leading-relaxed text-[var(--text-dark)]">
            ZAMR Engineering is a Sydney-based civil engineering consultancy
            delivering precision-led infrastructure solutions across New
            South Wales and beyond. Founded on a commitment to technical
            excellence, we partner with government bodies, developers, and
            industry leaders to engineer infrastructure that endures.
          </p>
          <p className="mt-5 text-lg leading-relaxed text-[var(--text-dark)]">
            Our approach integrates rigorous engineering methodology with
            forward-looking design thinking — producing outcomes that are
            structurally sound, environmentally considered, and technically
            innovative. Every project is an opportunity to advance what
            infrastructure can achieve.
          </p>

          {/* Line above stats */}
          <div className="mt-12 mb-14 h-px w-full bg-[var(--text-dark)]" />

          {/* Stats grid */}
          <div className="grid grid-cols-3 gap-8">
            {statsData.map((stat, index) => (
              <div key={stat.label}>
                <div
                  className={`flex items-start text-7xl leading-none text-[var(--color-primary)] font-normal ${
                    index === 0
                      ? "justify-start"
                      : index === 1
                      ? "justify-center"
                      : "justify-end"
                  }`}
                >
                  {currentValues[index]}
                  <span className="mt-2 text-[42px] font-light text-[var(--color-primary)]">
                    {stat.suffix}
                  </span>
                </div>
                <p
                  className={`mt-4 text-sm text-[var(--text-dark)] ${
                    index === 0
                      ? "text-left"
                      : index === 1
                      ? "text-center"
                      : "text-right"
                  }`}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
