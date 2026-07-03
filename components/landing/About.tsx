// app/about/page.tsx
"use client";

import { useState, useEffect, useRef } from "react";
import { Outfit } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

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
      className="w-full bg-[#EEF1F6] px-6 py-36 sm:px-6 lg:px-30 lg:py-30"
    >
      <div className="mx-auto grid grid-cols-1 gap-12 lg:grid-cols-[560px_1fr] lg:gap-0">
        {/* Left column */}
        <div>
          <div className="mb-6 flex items-center gap-3">
            <span className="text-[14px] font-bold tracking-[0.05em] text-[#1E40AF]">
              01
            </span>
            <span className="h-px w-12 bg-black" />
            <span className="text-sm  tracking-[0.2em] text-gray-900">
              ABOUT US
            </span>
          </div>
          <h2 className="text-sm font-bold leading-[1.05] tracking-[-0.01em] text-[#1C1F26] sm:text-[54px]">
            Built on
            <br />
            Precision
            <br />
            <span className="relative inline-block">
              &amp; Reliability
              <span className="absolute -bottom-3 font-medium left-0.5 h-px w-48 bg-[#D32F2F]" />
            </span>
          </h2>
        </div>

        {/* Right column */}
        <div className="flex flex-col justify-center">
          <p
            className={`${outfit.className} text-[16px] md:text-[20px] leading-[1.75] text-black`}
          >
            ZAMR Engineering is a Sydney-based civil engineering consultancy
            delivering precision-led infrastructure solutions across New
            South Wales and beyond. Founded on a commitment to technical
            excellence, we partner with government bodies, developers, and
            industry leaders to engineer infrastructure that endures.
          </p>
          <p
            className={`${outfit.className} mt-5 text-[16px] md:text-[20px] leading-[1.75] text-black`}
          >
            Our approach integrates rigorous engineering methodology with
            forward-looking design thinking — producing outcomes that are
            structurally sound, environmentally considered, and technically
            innovative. Every project is an opportunity to advance what
            infrastructure can achieve.
          </p>

          {/* Line above stats – BLACK */}
          <div className="mt-12 mb-14 h-px w-full bg-black" />

          {/* Stats grid – full width, with left/center/right alignment */}
          <div className="grid grid-cols-3 gap-x-6 gap-y-8">
            {statsData.map((stat, index) => (
              <div key={stat.label}>
                <div
                  className={`flex items-start text-[64px] leading-none text-[#1E40AF] ${
                    index === 0
                      ? "justify-start"
                      : index === 1
                      ? "justify-center"
                      : "justify-end"
                  }`}
                >
                  {currentValues[index]}
                  <span className="mt-1 text-[24px] text-[#1E40AF]">
                    {stat.suffix}
                  </span>
                </div>
                <p
                  className={`mt-4 text-[12px] tracking-[0.1em] text-gray-700 ${
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