"use client";

import { useEffect, useRef, useState } from "react";
import { stats, type StatItem } from "@/mockData/about";

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
}: {
  stat: StatItem;
  shouldStart: boolean;
}) {
  const count = useCountUp(stat.value, shouldStart);

  const alignClass = {
    start: "sm:items-start",
    center: "sm:items-center",
    end: "sm:items-end",
  }[stat.align];

  return (
    <div
      className={`flex flex-1 flex-col items-center gap-[2px] ${alignClass}`}
    >
      <div className="flex flex-row items-start gap-2">
        <span className="text-[48px] font-normal leading-[60px] text-white sm:text-[60px] sm:leading-[76px] lg:text-[72px] lg:leading-[91px]">
          {count}
        </span>
        <span className="text-[28px] font-light leading-[34px] text-white sm:text-[36px] sm:leading-[42px] lg:text-[42px] lg:leading-[50px]">
          {stat.suffix}
        </span>
      </div>
      <span className="text-sm font-light leading-5 text-white lg:text-base">
        {stat.label}
      </span>
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
      className="w-full bg-[var(--bg-hero)] px-6 py-16 lg:p-[130px]"
    >
      <div className="flex flex-col gap-[10px]">
        {/* Section label */}
        <div className="flex items-center gap-4">
          <span className="text-sm font-medium tracking-[3px] text-white lg:text-base">
            02
          </span>
          <span className="h-px w-12 bg-white sm:w-[104px]" />
          <span className="text-sm font-medium tracking-[3px] uppercase text-white lg:text-base">
            STATS
          </span>
        </div>

        {/* Stats row */}
        <div className="flex w-full flex-col items-center gap-8 sm:flex-row sm:items-center sm:justify-between sm:gap-x-[185px] mt-[60px]">
          {stats.map((stat) => (
            <StatItem key={stat.label} stat={stat} shouldStart={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
