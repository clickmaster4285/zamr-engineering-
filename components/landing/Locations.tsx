"use client";

import React, { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { locationsContent, type LocationArea } from "@/mockData/landing";

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

function SectionIntro({ compact }: { compact?: boolean }) {
  const { sectionNumber, sectionLabel, heading, description } = locationsContent;

  if (compact) {
    return (
      <div className="flex w-full flex-col gap-[7px] lg:gap-8">
        <div className="flex flex-col gap-[7px] lg:gap-[18px]">
          <div className="flex items-center gap-[4px] lg:gap-[9.5px]">
            <span className="text-sm font-medium leading-[18px] tracking-[0.68px] text-[var(--color-primary)] lg:text-[13px] lg:leading-4 lg:tracking-[1.78px]">
              {sectionNumber}
            </span>
            <span className="h-px w-[24px] bg-[var(--text-heading)] lg:w-[62px]" />
            <span className="text-[12px] font-medium leading-[18px] tracking-[0.68px] uppercase text-[var(--text-section-label)] lg:leading-4 lg:tracking-[1.78px]">
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
    );
  }

  return (
    <div className="flex w-[520px] shrink-0 flex-col gap-[30px]">
      <div className="flex items-center gap-4">
        <span className="text-base font-medium leading-5 tracking-[3px] text-[var(--color-primary)]">
          {sectionNumber}
        </span>
        <span className="h-px w-[104px] bg-[var(--text-heading)]" />
        <span className="text-[12px] font-medium leading-5 tracking-[3px] uppercase text-[var(--text-section-label)]">
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
  );
}

function createPinIcon(emphasized: boolean) {
  const opacity = emphasized ? 1 : 0.75;
  return L.divIcon({
    className: "zamr-map-pin",
    iconSize: [28, 40],
    iconAnchor: [14, 40],
    popupAnchor: [0, -36],
    html: `<svg width="28" height="40" viewBox="0 0 28 40" xmlns="http://www.w3.org/2000/svg" style="opacity:${opacity};filter:drop-shadow(0 1px 2px rgba(0,0,0,.35))">
      <path d="M14 0C6.268 0 0 6.268 0 14c0 10.5 14 26 14 26s14-15.5 14-26C28 6.268 21.732 0 14 0z" fill="var(--color-error)"/>
      <circle cx="14" cy="14" r="6" fill="white"/>
    </svg>`,
  });
}

function googleMapsSearchUrl(area: LocationArea) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${area.name}, ${area.address}`,
  )}`;
}

function MapPanel() {
  const { areas, mapCenter, mapZoom, mapLegendTitle, mapLegendItems } =
    locationsContent;
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;

    const map = L.map(containerRef.current, {
      center: [mapCenter.lat, mapCenter.lng],
      zoom: mapZoom,
      scrollWheelZoom: false,
    });

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      maxZoom: 18,
    }).addTo(map);

    const bounds = L.latLngBounds([]);

    areas.forEach((area) => {
      const marker = L.marker([area.lat, area.lng], {
        icon: createPinIcon(area.projectCount >= 2),
        title: area.name,
      }).addTo(map);

      const projectLabel =
        area.projectCount === 1
          ? "1 project"
          : `${area.projectCount} projects`;

      marker.bindPopup(
        `<div style="font-family:inherit;min-width:168px">
          <strong style="font-size:13px;color:var(--text-heading)">${area.name}</strong>
          <div style="margin-top:4px;font-size:11px;line-height:1.35;color:var(--text-soft)">${area.address}</div>
          <div style="margin-top:4px;font-size:11px;color:var(--color-primary)">${projectLabel}</div>
          <a href="${googleMapsSearchUrl(area)}" target="_blank" rel="noopener noreferrer" style="display:inline-block;margin-top:8px;font-size:11px;color:var(--color-primary);text-decoration:underline">Open in Google Maps</a>
        </div>`,
      );

      bounds.extend([area.lat, area.lng]);
    });

    if (bounds.isValid()) {
      map.fitBounds(bounds, { padding: [48, 48], maxZoom: 11 });
    }

    mapRef.current = map;

    const invalidate = () => map.invalidateSize();
    window.addEventListener("resize", invalidate);
    requestAnimationFrame(invalidate);

    return () => {
      window.removeEventListener("resize", invalidate);
      map.remove();
      mapRef.current = null;
    };
  }, [areas, mapCenter.lat, mapCenter.lng, mapZoom]);

  return (
    <div className="relative h-[420px] w-full min-w-0 overflow-hidden bg-[var(--bg-card)] sm:h-[520px] lg:h-[672px]">
      <div
        ref={containerRef}
        className="absolute inset-0 z-0 h-full w-full [&_.zamr-map-pin]:border-0 [&_.zamr-map-pin]:bg-transparent"
      />

      <div className="pointer-events-none absolute right-5 top-5 z-[1000] flex w-[112px] flex-col gap-[7px] rounded-lg border border-[var(--border-section)] bg-white/90 p-2.5 px-3 shadow-[0px_2px_8px_rgba(0,0,0,0.1)]">
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
    </div>
  );
}

export default function Locations() {
  return (
    <section className="w-full bg-[var(--bg-section)] px-[30px] py-[30px] lg:px-[77px] lg:py-[77px] 2xl:p-[130px]">
      <div className="flex w-full flex-col gap-6 lg:gap-8 2xl:flex-row 2xl:items-start 2xl:justify-between 2xl:gap-[249px]">
        <div className="w-full 2xl:hidden">
          <SectionIntro compact />
        </div>

        <div className="hidden 2xl:block">
          <SectionIntro />
        </div>

        <div className="w-full min-w-0 flex-1 overflow-hidden shadow-[0px_8px_32px_rgba(0,0,0,0.1)]">
          <MapPanel />
        </div>
      </div>
    </section>
  );
}
