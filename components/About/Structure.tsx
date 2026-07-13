"use client";
import Image from "next/image";
import { useLayoutEffect, useRef, useState } from "react";
import {
  orgChartColors as COLORS,
  orgChartLineColor as LINE,
  orgChartLegend,
  orgChartMd as md,
  orgChartExternalBoxes as externalBoxes,
  orgChartDm as dm,
  orgChartOd as od,
  orgChartSubHeaders as subHeaders,
  orgChartSubH as subH,
  orgChartNameCards as nameCards,
  orgChartSubc as subc,
  orgChartDesignWidth as DESIGN_WIDTH,
  orgChartDesignHeight as DESIGN_HEIGHT,
  logoFilledImage,
} from "@/mockData/about";

import type { BoxData, SubHeaderData, NameCardData, TeamType } from "@/mockData/about";


// --- Helpers ---
function cx(b: { left: number; width: number }) { return b.left + b.width / 2; }
function cy(b: { top: number; height: number }) { return b.top + b.height / 2; }
function bottom(b: { top: number; height: number }) { return b.top + b.height; }
function right(b: { left: number; width: number }) { return b.left + b.width; }

function VM(x: number, y1: number, y2: number) {
  return `M${x},${y1} L${x},${y2}`;
}
function VHV(x1: number, y1: number, x2: number, y2: number, midY: number, r = 12) {
  if (Math.abs(x2 - x1) < 1) return `M${x1},${y1} L${x2},${y2}`;
  const dy1 = midY > y1 ? r : -r;
  const dx = x2 > x1 ? r : -r;
  const dy2 = y2 > midY ? r : -r;
  return [
    `M${x1},${y1}`,
    `L${x1},${midY + dy1}`,
    `Q${x1},${midY} ${x1 + dx},${midY}`,
    `L${x2 - dx},${midY}`,
    `Q${x2},${midY} ${x2},${midY + dy2}`,
    `L${x2},${y2}`,
  ].join(" ");
}
function HVH(x1: number, y1: number, x2: number, y2: number, midX: number, r = 12) {
  const dx1 = midX > x1 ? r : -r;
  const dy = y2 > y1 ? r : -r;
  const dx2 = x2 > midX ? r : -r;
  if (Math.abs(y2 - y1) < r * 2) return `M${x1},${y1} L${x2},${y2}`;
  return [
    `M${x1},${y1}`,
    `L${midX + dx1},${y1}`,
    `Q${midX},${y1} ${midX},${y1 + dy}`,
    `L${midX},${y2 - dy}`,
    `Q${midX},${y2} ${midX + dx2},${y2}`,
    `L${x2},${y2}`,
  ].join(" ");
}

function OrgBox({ box }: { box: BoxData }) {
  const isLarge = (box.fontSize ?? 24) >= 24;
  return (
    <div
      className="absolute flex flex-col items-center justify-center text-center overflow-hidden"
      style={{
        left: box.left,
        top: box.top,
        width: box.width,
        height: box.height,
        background: COLORS[box.type],
        color: "white",
      }}
    >
      <div
        className="font-bold leading-tight px-2"
        style={{ fontSize: isLarge ? 20 : 16, letterSpacing: "-0.019em" }}
      >
        {box.title}
      </div>
      {box.subtitle && (
        <div
          className="font-bold leading-tight px-2"
          style={{ fontSize: isLarge ? 14 : 12, letterSpacing: "-0.011em" }}
        >
          {box.subtitle}
        </div>
      )}
    </div>
  );
}

function SubHeader({ s }: { s: SubHeaderData }) {
  return (
    <div
      className="absolute flex items-center justify-center text-center overflow-hidden"
      style={{
        left: s.left,
        top: s.top,
        width: s.width,
        height: subH,
        background: COLORS[s.type],
        color: "white",
      }}
    >
      <span
        className="font-medium leading-tight px-1"
        style={{ fontSize: 14, letterSpacing: "-0.019em" }}
      >
        {s.title}
      </span>
    </div>
  );
}

function NameCard({ card }: { card: NameCardData }) {
  return (
    <div
      className="absolute flex flex-col items-center justify-center text-center overflow-hidden"
      style={{
        left: card.left,
        top: card.top,
        width: card.width,
        height: card.height,
        background: COLORS[card.type],
        color: "white",
      }}
    >
      <div
        className="font-medium leading-tight px-2"
        style={{ fontSize: 16, letterSpacing: "-0.019em" }}
      >
        {card.names.map((n, i) => (
          <span key={i}>
            {n}
            {i < card.names.length - 1 && <br />}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Structure() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useLayoutEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;

    const updateScale = (width: number) => {
      const raw = width / DESIGN_WIDTH;
      setScale(raw);
    };

    updateScale(el.getBoundingClientRect().width);

    const ro = new ResizeObserver((entries) => {
      updateScale(entries[0].contentRect.width);
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // Center points for SVG connectors
  const mdR = { x: right(md), y: cy(md) };
  const mdB = { x: cx(md), y: bottom(md) };
  const dmT = { x: cx(dm), y: dm.top };
  const dmB = { x: cx(dm), y: bottom(dm) };
  const odT = { x: cx(od), y: od.top };
  const odB = { x: cx(od), y: bottom(od) };

  const extElbows = externalBoxes.map((e) => {
    const midX = (right(md) + e.left) / 2;
    return { path: HVH(mdR.x, mdR.y, e.left, cy(e), midX), y2: cy(e) };
  });

  const subCenters = subHeaders.map((s) => cx(s));
  const subBottoms = subHeaders.map((s) => s.top + subH);
  const nameTops = nameCards.map((n) => n.top);
  const rightBusY = 695;

  return (
    <section className="relative w-full bg-white overflow-hidden">
      <div className="w-full">
        {/* Scaling wrapper: reserves the correctly-scaled height so page layout doesn't jump.
            overflow-hidden is unconditional now — the scaled inner div's layout box is still
            DESIGN_WIDTH px wide even after transform: scale(), so overflow-x-auto on mobile
            was creating a scrollable area ~3x the visible width with blank space. */}
        <div
          ref={wrapperRef}
          className="relative w-full overflow-hidden"
          style={{ height: DESIGN_HEIGHT * scale }}
        >
          <div
            style={{
              position: "relative",
              width: DESIGN_WIDTH,
              height: DESIGN_HEIGHT,
              transform: `scale(${scale})`,
              transformOrigin: "top left",
            }}
          >
            {/* Frame 77 — left panel */}
            <div
              className="absolute flex flex-col items-start"
              style={{ left: 130, top: 100, width: 700, gap: 50 }}
            >
              <div className="flex w-full flex-col items-start" style={{ gap: 20 }}>
                <div className="flex flex-row items-center" style={{ gap: 16 }}>
                  <span
                    className="font-medium leading-5 tracking-[3px]"
                    style={{ fontSize: 16, color: "var(--color-primary)" }}
                  >
                    03
                  </span>
                  <span className="h-px w-[104px] bg-[var(--text-dark)]" />
                  <span
                    className="font-medium leading-5 tracking-[3px] uppercase"
                    style={{ fontSize: 16, color: "var(--text-dark)" }}
                  >
                    STRUCTURE
                  </span>
                </div>
                 <Image
                  src={logoFilledImage}
                  alt="ZAMR Engineering"
                  width={300}
                  height={150}
                  className="object-contain"
                />
                <h2
                  className="w-full font-bold leading-[55px]"
                  style={{ fontSize: 44, color: "var(--text-dark)", fontFeatureSettings: "'liga' off" }}
                >
                  Organizational Structure
                </h2>
               
              </div>
              <div className="flex flex-col items-start" style={{ gap: 16 }}>
                {orgChartLegend.map((item) => (
                  <div key={item.label} className="flex flex-row items-center" style={{ gap: 19 }}>
                    <span
                      className="rounded-full"
                      style={{ width: 28, height: 28, background: item.color }}
                    />
                    <span
                      className="font-normal leading-[30px]"
                      style={{ fontSize: 24, color: "var(--text-dark)", fontFeatureSettings: "'liga' off" }}
                    >
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Chart layer */}
            <div className="absolute" style={{ left: 0, top: 0, width: DESIGN_WIDTH, height: DESIGN_HEIGHT }}>
              <svg
                className="absolute inset-0 pointer-events-none"
                width={DESIGN_WIDTH}
                height={DESIGN_HEIGHT}
                fill="none"
                stroke={LINE}
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {extElbows.map((e, i) => (
                  <path key={`ext-${i}`} d={e.path} />
                ))}
                <path d={VHV(mdB.x, mdB.y, dmT.x, dmT.y, 490)} />
                <path d={VHV(mdB.x, mdB.y, odT.x, odT.y, 490)} />
                {[0, 1, 2, 3].map((i) => (
                  <path
                    key={`dmc-${i}`}
                    d={VHV(dmB.x, dmB.y, subCenters[i], subHeaders[i].top, 695)}
                  />
                ))}
                {[4, 5, 6].map((i) => (
                  <path
                    key={`odc-${i}`}
                    d={VHV(odB.x, odB.y, subCenters[i], subHeaders[i].top, rightBusY)}
                  />
                ))}
                {[0, 1, 2, 3, 4, 5, 6].map((i) => (
                  <path key={`nc-${i}`} d={VM(subCenters[i], subBottoms[i], nameTops[i])} />
                ))}
                {[4, 5].map((i) => {
                  const bx = subCenters[i];
                  const by = bottom(nameCards[i]);
                  return <path key={`sc-${i}`} d={VHV(bx, by, cx(subc), subc.top, 1060)} />;
                })}
              </svg>

              <OrgBox box={md} />
              {externalBoxes.map((e, i) => (
                <OrgBox key={`ext-${i}`} box={e} />
              ))}
              <OrgBox box={dm} />
              <OrgBox box={od} />
              {subHeaders.map((s, i) => (
                <SubHeader key={`sh-${i}`} s={s} />
              ))}
              {nameCards.map((n, i) => (
                <NameCard key={`nc-${i}`} card={n} />
              ))}
              <div
                className="absolute flex items-center justify-center text-center overflow-hidden"
                style={{
                  left: subc.left,
                  top: subc.top,
                  width: subc.width,
                  height: subc.height,
                  background: COLORS.external,
                  color: "white",
                }}
              >
                <span className="font-medium leading-tight px-2" style={{ fontSize: 20, letterSpacing: "-0.019em" }}>
                  Subcontractors
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}