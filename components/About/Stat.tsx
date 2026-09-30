"use client";

import { useEffect, useRef, useState } from "react";
import { stats, statsSection, type StatItem } from "@/mockData/about";

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

function StatCard({
  stat,
  shouldStart,
  className = "",
}: {
  stat: StatItem;
  shouldStart: boolean;
  className?: string;
}) {
  const count = useCountUp(stat.value, shouldStart);

  return (
    <div
      className={`flex flex-col items-start gap-1 lg:gap-[1.19px] 2xl:gap-0.5 ${className}`}
    >
      <div className="flex flex-row items-center gap-1 lg:items-start lg:gap-[4.74px] 2xl:gap-2">
        <span className="text-[40px] font-bold leading-[50px] text-white lg:text-[42.6667px] lg:font-normal lg:leading-[54px] 2xl:text-[72px] 2xl:leading-[91px]">
          {count}
        </span>
        <span className="text-[32px] font-light leading-[38px] text-white lg:text-[24.8889px] lg:leading-[30px] 2xl:text-[42px] 2xl:leading-[50px]">
          {stat.suffix}
        </span>
      </div>
      <span className="w-full text-[15px] font-light leading-[19px] text-white lg:text-[13px] lg:leading-4 2xl:text-base 2xl:leading-5">
        {stat.label}
      </span>
    </div>
  );
}

export default function StatsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);
  const { sectionNumber, sectionLabel, mobileSectionLabel, heading } =
    statsSection;

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
      className="flex w-full flex-col items-start gap-8 bg-[var(--color-contact-dark)] px-5 py-14 lg:gap-[35.56px] lg:px-[77.037px] lg:py-[77.037px] 2xl:gap-[60px] 2xl:p-[130px]"
    >
      {/* Mobile: short label + heading. Tablet/Desktop: full label only. */}
      <div className="flex w-full flex-col items-start gap-8 lg:gap-0">
        <div className="flex w-full flex-row items-center gap-3 lg:w-auto lg:gap-[9.48px] 2xl:gap-4">
          <span className="shrink-0 text-sm font-medium leading-[18px] text-white lg:text-[13px] lg:leading-4 lg:tracking-[1.77778px] 2xl:text-base 2xl:leading-5 2xl:tracking-[3px]">
            {sectionNumber}
          </span>
          <span className="h-px w-10 shrink-0 bg-white lg:w-[61.63px] 2xl:w-[104px]" />
          <span className="min-w-0 flex-1 text-sm font-medium leading-[18px] tracking-[3px] uppercase text-white lg:hidden">
            {mobileSectionLabel}
          </span>
          <span className="hidden text-[13px] font-medium leading-4 tracking-[1.77778px] uppercase text-white lg:inline 2xl:text-base 2xl:leading-5 2xl:tracking-[3px]">
            {sectionLabel}
          </span>
        </div>

        <h2 className="w-full text-[28px] font-semibold leading-[35px] text-white lg:hidden">
          {heading}
        </h2>
      </div>

      {/* Stats — full width; wraps to next line when items don't fit */}
      <div className="flex w-full flex-wrap items-start gap-x-6 gap-y-6 lg:gap-x-6 lg:gap-y-5 2xl:gap-x-12 2xl:gap-y-5">
        {stats.map((stat) => (
          <StatCard
            key={stat.label}
            stat={stat}
            shouldStart={inView}
            className="min-w-[163px] flex-1 basis-[163px] lg:min-w-[240px] lg:basis-[240px] 2xl:min-w-[200px] 2xl:basis-[200px]"
          />
        ))}
      </div>
    </section>
  );
}
