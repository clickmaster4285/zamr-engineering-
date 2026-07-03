"use client";

import { useEffect, useRef, useState } from "react";

interface Stat {
  value: number;
  suffix: string;
  label: string;
}

const stats: Stat[] = [
  { value: 150, suffix: "+", label: "PROJECTS DELIVERED" },
  { value: 12, suffix: "+", label: "YEARS OF EXPERIENCE" },
  { value: 98, suffix: "%", label: "COMPLIANCE RATE" },
];

function useCountUp(target: number, shouldStart: boolean, duration = 1500) {
  const [count, setCount] = useState(0);
  const startedRef = useRef(false);

  useEffect(() => {
    if (!shouldStart || startedRef.current) return;
    startedRef.current = true;

    let startTime: number | null = null;

    const step = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(step);
  }, [shouldStart, target, duration]);

  return count;
}

function StatItem({
  stat,
  shouldStart,
  align = "center",
}: {
  stat: Stat;
  shouldStart: boolean;
  align?: "left" | "center" | "right";
}) {
  const count = useCountUp(stat.value, shouldStart);

  const alignmentClasses = {
    left: "items-start text-left",
    center: "items-center text-center",
    right: "items-end text-right",
  };

  return (
    <div className={`flex flex-col ${alignmentClasses[align]}`}>
      <div className={`flex ${align === "left" ? "justify-start" : align === "right" ? "justify-end" : "justify-center"} text-white`}>
      <span className="text-6xl sm:text-7xl md:text-8xl font-light leading-none tracking-tight">
  {count}
</span>
<span className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-none ml-1 mt-1">
  {stat.suffix}
</span>
      </div>
      <p className={`mt-4 text-[11px] tracking-[0.2em] text-gray-400 uppercase font-semibold ${
        align === "left" ? "text-left" : align === "right" ? "text-right" : "text-center"
      }`}>
        {stat.label}
      </p>
    </div>
  );
}

export default function StatsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#0a0e1f] py-16"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Label */}
        <div className="flex items-center gap-3 mb-12">
          <span className="text-xs font-bold tracking-[0.2em] text-white">
            02
          </span>
          <span className="w-10 h-px bg-gray-500" />
          <span className="text-xs font-bold tracking-[0.2em] text-gray-300">
            STATS
          </span>
        </div>

        {/* Stats grid – left, center, right alignment */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {stats.map((stat, index) => {
            let align: "left" | "center" | "right" = "center";
            if (index === 0) align = "left";
            else if (index === 2) align = "right";
            return (
              <StatItem
                key={stat.label}
                stat={stat}
                shouldStart={inView}
                align={align}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}