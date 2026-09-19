"use client";

import React from "react";
import { MapPin, ArrowUp } from "lucide-react";
import { locationsContent } from "@/mockData/landing";

function LocationRow({
  name,
  projectCount,
}: {
  name: string;
  projectCount: number;
}) {
  const isMulti = projectCount >= 2;
  return (
    <div className="flex w-full items-center justify-between border-b border-[var(--border-section)] px-3.5 py-[7px] last:border-b-0">
      <div className="flex flex-col gap-0.5">
        <span className="text-[11px] font-semibold leading-[14px] text-[var(--text-heading)]">
          {name}
        </span>
        <span className="text-[9px] font-normal leading-[11px] text-[var(--text-soft)]">
          {projectCount} {projectCount === 1 ? "project" : "projects"}
        </span>
      </div>
      <span
        className={`inline-flex items-center rounded-[10px] px-[7px] py-[3px] text-[9px] font-semibold leading-[11px] text-[var(--color-primary)] ${
          isMulti ? "bg-[var(--bg-card)]" : "bg-[var(--bg-hover)]"
        }`}
      >
        {projectCount}
      </span>
    </div>
  );
}

function StatsRow({ className = "" }: { className?: string }) {
  const { stats } = locationsContent;
  return (
    <div className={`flex flex-row items-center gap-8 ${className}`}>
      {stats.map((stat, i) => (
        <React.Fragment key={stat.label}>
          {i > 0 && (
            <span className="h-[50px] w-px shrink-0 bg-[var(--border-section)]" />
          )}
          <div className="flex flex-col items-start gap-1">
            <span className="text-xl font-bold leading-[25px] text-[var(--color-primary)] lg:text-[40px] lg:leading-[50px]">
              {stat.value}
            </span>
            <span className="text-sm font-normal leading-[18px] text-[var(--text-soft)]">
              {stat.label}
            </span>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}

function MapPanel() {
  const { mapEmbedUrl, mapLegendTitle, mapLegendItems } = locationsContent;

  return (
    <div className="relative h-[672px] w-full min-w-0 flex-1 overflow-hidden bg-[var(--bg-card)]">
      <iframe
        src={mapEmbedUrl}
        title="ZAMR Engineering locations map"
        className="absolute inset-0 h-full w-full border-0"
        allowFullScreen
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
      />

      {/* Soft overlay for Figma map treatment */}
      <div className="pointer-events-none absolute inset-0 bg-[var(--overlay-image-default)]" />

      {/* Legend */}
      <div className="absolute right-5 top-5 z-10 flex w-[112px] flex-col gap-[7px] rounded-lg border border-[var(--border-section)] bg-white/80 p-2.5 px-3 shadow-[0px_2px_8px_rgba(0,0,0,0.1)]">
        <span className="text-[11px] font-bold leading-[14px] text-[var(--text-heading)]">
          {mapLegendTitle}
        </span>
        {mapLegendItems.map((item) => (
          <div key={item.label} className="flex items-center gap-[7px]">
            <span
              className={`h-[11px] w-[11px] shrink-0 rounded-full bg-[var(--color-primary)] ${
                item.emphasized ? "opacity-100" : "opacity-70"
              }`}
            />
            <span className="text-[9px] font-normal leading-[11px] text-[var(--text-muted)]">
              {item.label}
            </span>
          </div>
        ))}
      </div>

      {/* Compass */}
      <div className="absolute right-4 top-3.5 z-10 flex flex-col items-center gap-0.5">
        <span className="text-[9px] font-bold leading-[11px] text-[var(--text-soft)]">
          N
        </span>
        <ArrowUp className="h-3.5 w-3.5 text-[var(--text-soft)]" strokeWidth={2} />
      </div>

      {/* Decorative pins */}
      <MapPin
        className="pointer-events-none absolute left-[47%] top-11 z-10 h-9 w-[30px] text-[var(--color-primary)] drop-shadow sm:left-[200px]"
        fill="currentColor"
        strokeWidth={0}
      />
      <MapPin
        className="pointer-events-none absolute left-2 top-[366px] z-10 h-8 w-[26px] text-[var(--color-primary)] drop-shadow"
        fill="currentColor"
        strokeWidth={0}
      />
    </div>
  );
}

function LocationsSidebar({ className = "" }: { className?: string }) {
  const { sidebarTitle, sidebarCountLabel, areas } = locationsContent;

  return (
    <div
      className={`flex w-full flex-col overflow-hidden bg-white lg:h-[672px] lg:w-[200px] lg:shrink-0 ${className}`}
    >
      <div className="flex flex-col gap-0.5 bg-[var(--color-primary)] px-4 pb-3 pt-4">
        <span className="text-[11px] font-bold leading-[14px] tracking-[2px] uppercase text-white/80">
          {sidebarTitle}
        </span>
        <span className="text-[22px] font-bold leading-7 text-white">
          {sidebarCountLabel}
        </span>
      </div>

      {/* Desktop / tablet: single column scroll */}
      <div className="hidden flex-1 overflow-y-auto lg:block">
        {areas.map((area) => (
          <LocationRow
            key={area.name}
            name={area.name}
            projectCount={area.projectCount}
          />
        ))}
      </div>

      {/* Mobile: 2-column grid */}
      <div className="relative grid grid-cols-2 lg:hidden">
        {areas.map((area) => (
          <LocationRow
            key={area.name}
            name={area.name}
            projectCount={area.projectCount}
          />
        ))}
      </div>
    </div>
  );
}

export default function Locations() {
  const { sectionNumber, sectionLabel, heading, description } = locationsContent;

  return (
    <section className="w-full bg-[var(--bg-section)] px-[30px] py-[30px] lg:px-[77px] lg:py-[77px] 2xl:p-[130px]">
      <div className="flex w-full flex-col gap-6 lg:gap-8 2xl:gap-20">
        {/* Tablet + Mobile header */}
        <div className="flex w-full flex-col gap-[7px] lg:gap-8 2xl:hidden">
          <div className="flex flex-col gap-[7px] lg:gap-[18px]">
            <div className="flex items-center gap-[4px] lg:gap-[9.5px]">
              <span className="text-sm font-medium leading-[18px] tracking-[0.68px] text-[var(--color-primary)] lg:text-[13px] lg:leading-4 lg:tracking-[1.78px]">
                {sectionNumber}
              </span>
              <span className="h-px w-[24px] bg-[var(--text-heading)] lg:w-[62px]" />
              <span className="text-sm font-medium leading-[18px] tracking-[0.68px] uppercase text-[var(--text-heading)] lg:text-[13px] lg:leading-4 lg:tracking-[1.78px]">
                {sectionLabel}
              </span>
            </div>
            <h2 className="text-[36px] font-bold leading-[45px] text-[var(--text-heading)] lg:text-[33px] lg:leading-[42px]">
              {heading}
            </h2>
            <p className="text-sm leading-[18px] text-[var(--text-heading)] [font-feature-settings:'liga'_off] lg:text-[13px] lg:leading-4">
              {description}
            </p>
          </div>
          <StatsRow />
        </div>

        {/* Desktop: side-by-side text + map */}
        <div className="hidden w-full flex-row items-start justify-between gap-[60px] 2xl:flex 2xl:gap-[249px]">
          <div className="flex w-[520px] shrink-0 flex-col gap-[30px]">
            <div className="flex items-center gap-4">
              <span className="text-base font-medium leading-5 tracking-[3px] text-[var(--color-primary)]">
                {sectionNumber}
              </span>
              <span className="h-px w-[104px] bg-[var(--text-heading)]" />
              <span className="text-base font-medium leading-5 tracking-[3px] uppercase text-[var(--text-heading)]">
                {sectionLabel}
              </span>
            </div>
            <h2 className="text-[56px] font-bold leading-[71px] text-[var(--text-heading)]">
              {heading}
            </h2>
            <p className="text-lg leading-[23px] text-[var(--text-muted)] [font-feature-settings:'liga'_off]">
              {description}
            </p>
            <StatsRow />
          </div>

          <div className="flex h-[672px] min-w-0 flex-1 flex-row items-start overflow-hidden shadow-[0px_8px_32px_rgba(0,0,0,0.1)]">
            <MapPanel />
            <LocationsSidebar />
          </div>
        </div>

        {/* Tablet: map + sidebar side-by-side */}
        <div className="hidden w-full overflow-hidden shadow-[0px_8px_32px_rgba(0,0,0,0.1)] lg:flex lg:flex-row 2xl:hidden">
          <MapPanel />
          <LocationsSidebar />
        </div>

        {/* Mobile: map then 2-col list */}
        <div className="flex w-full flex-col lg:hidden">
          <div className="w-full overflow-hidden shadow-[0px_8px_32px_rgba(0,0,0,0.1)]">
            <MapPanel />
          </div>
          <LocationsSidebar />
        </div>
      </div>
    </section>
  );
}
