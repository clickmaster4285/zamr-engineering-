"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type TeamType = "technical" | "operational" | "external";

const COLORS: Record<TeamType, string> = {
  technical: "#2C70B9",
  operational: "#4CAFEA",
  external: "#B7C5E4",
};

const LINE = "#007CD9";

const legend = [
  { label: "Technical Team", color: COLORS.technical },
  { label: "Operational Team", color: COLORS.operational },
  { label: "External Team", color: COLORS.external },
];

// --- Figma absolute-position data ---

interface BoxData {
  left: number; top: number; width: number; height: number;
  title: string; subtitle?: string; type: TeamType;
  fontSize?: number; fontWeight?: number;
}

const md: BoxData = {
  left: 754, top: 267, width: 271.8, height: 112.25,
  title: "Managing Director", subtitle: "Khalid Javed", type: "operational",
};

const externalBoxes: BoxData[] = [
  { left: 1259.12, top: 175, width: 264, height: 87, title: "Quality Support", subtitle: "Insaf Khan", type: "external" },
  { left: 1259.12, top: 280, width: 264, height: 86, title: "Cost Estimating", subtitle: "Natesh Natraj", type: "external" },
  { left: 1259.12, top: 386, width: 264, height: 85, title: "Contract Administration", subtitle: "Franca Bucci", type: "external" },
];

const dm: BoxData = {
  left: 293, top: 607, width: 261.37, height: 116.26,
  title: "Design Manager", subtitle: "Omar Faruqi", type: "technical",
};

const od: BoxData = {
  left: 1199.03, top: 606.3, width: 274.2, height: 116.26,
  title: "Operational Director", subtitle: "Khalid Javed", type: "operational",
};

interface SubHeaderData {
  left: number; top: number; width: number; title: string; type: TeamType;
}

const subHeaders: SubHeaderData[] = [
  { left: 106, top: 782, width: 196.43, title: "Structure Design", type: "technical" },
  { left: 329, top: 782, width: 188.64, title: "Civil Design", type: "technical" },
  { left: 554.54, top: 787.31, width: 196.43, title: "Traffic Management", type: "technical" },
  { left: 791.78, top: 787.98, width: 196.43, title: "Asset Management", type: "technical" },
  { left: 1016.2, top: 787.98, width: 198.04, title: "Operational - Quality", type: "operational" },
  { left: 1237.48, top: 787.98, width: 197.23, title: "Operation Safety", type: "operational" },
  { left: 1467, top: 786, width: 198.04, title: "Project Management", type: "operational" },
];

const subH = 44.9;

interface NameCardData {
  left: number; top: number; width: number; height: number; names: string[]; type: TeamType;
}

const nameCards: NameCardData[] = [
  { left: 98, top: 894, width: 211, height: 151, names: ["Kashif JKhan", "Yashwant Dyall", "Roland Ng"], type: "technical" },
  { left: 318, top: 894, width: 209, height: 151, names: ["Faraz Ahmed", "Thomas Chew", "Mark Shamoun"], type: "technical" },
  { left: 542, top: 894, width: 220, height: 151, names: ["Charles Waife", "Manhur Rahman", "Kirk Martinez"], type: "technical" },
  { left: 791, top: 894, width: 197, height: 151, names: ["Moeen Rayyaan", "Saad Malik"], type: "technical" },
  { left: 1007, top: 894, width: 217, height: 151, names: ["Yashwant Dyall", "Janaka Bandara"], type: "operational" },
  { left: 1237, top: 894, width: 198, height: 151, names: ["Kah Yong Yan"], type: "operational" },
  { left: 1456, top: 894, width: 220, height: 151, names: ["Dante Vinces", "Arshad Mahmood", "Tanuj Kakkar"], type: "operational" },
];

const subc = { left: 1099.38, top: 1111.84, width: 236.77, height: 61.25 };

// --- Canvas dimensions (design size, in px) ---
const DESIGN_WIDTH = 1728;
const DESIGN_HEIGHT = 1273;

// Minimum scale before we let it scroll horizontally instead of shrinking further
const MIN_SCALE = 0.32;

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
      className="absolute flex flex-col items-center justify-center text-center px-4"
      style={{
        left: box.left,
        top: box.top,
        width: box.width,
        height: box.height,
        background: COLORS[box.type],
        color: "#FFFFFF",
      }}
    >
      <div
        className="font-bold leading-[150%]"
        style={{ fontSize: box.fontSize ?? 24, letterSpacing: "-0.019em" }}
      >
        {box.title}
      </div>
      {box.subtitle && (
        <div
          className="font-bold leading-[150%]"
          style={{ fontSize: box.subtitle ? (isLarge ? 16 : 14) : 0, letterSpacing: "-0.011em" }}
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
      className="absolute flex items-center justify-center text-center"
      style={{
        left: s.left,
        top: s.top,
        width: s.width,
        height: subH,
        background: COLORS[s.type],
        color: "#FFFFFF",
      }}
    >
      <span
        className="font-medium leading-[150%]"
        style={{ fontSize: 18, letterSpacing: "-0.019em" }}
      >
        {s.title}
      </span>
    </div>
  );
}

function NameCard({ card }: { card: NameCardData }) {
  return (
    <div
      className="absolute flex flex-col items-center justify-center text-center px-4"
      style={{
        left: card.left,
        top: card.top,
        width: card.width,
        height: card.height,
        background: COLORS[card.type],
        color: "#FFFFFF",
      }}
    >
      <div
        className="font-medium leading-[150%]"
        style={{ fontSize: 20, letterSpacing: "-0.019em" }}
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

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;

    const updateScale = (width: number) => {
      const raw = width / DESIGN_WIDTH;
      setScale(Math.max(raw, MIN_SCALE));
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
    <section className="relative w-full bg-white">
      {/* Scaling wrapper: reserves the correctly-scaled height so page layout doesn't jump */}
      <div
        ref={wrapperRef}
        className="relative w-full overflow-x-auto overflow-y-hidden"
        style={{ height: DESIGN_HEIGHT * scale }}
      >
        <div
          style={{
            width: DESIGN_WIDTH,
            height: DESIGN_HEIGHT,
            transform: `scale(${scale})`,
            transformOrigin: "top left",
          }}
        >
          {/* Frame 77 — left panel */}
          <div
            className="absolute flex flex-col items-start"
            style={{ left: 130, top: 100, width: 470, gap: 50 }}
          >
            <div className="flex w-full flex-col items-start" style={{ gap: 20 }}>
              <div className="flex flex-row items-center" style={{ gap: 16 }}>
                <span
                  className="font-medium leading-5 tracking-[3px]"
                  style={{ fontSize: 16, color: "var(--color-primary)" }}
                >
                  03
                </span>
                <span className="h-px w-[104px] bg-black" />
                <span
                  className="font-medium leading-5 tracking-[3px] uppercase"
                  style={{ fontSize: 16, color: "#333333" }}
                >
                  STRUCTURE
                </span>
              </div>

              <h2
                className="w-full font-bold leading-[55px]"
                style={{ fontSize: 44, color: "#333333", fontFeatureSettings: "'liga' off" }}
              >
                Organizational
                <br />
                Structure
              </h2>

              <Image
                src="/images/zamr-logo.png"
                alt="ZAMR Engineering"
                width={154}
                height={86}
                className="object-contain"
              />
            </div>

            <div className="flex flex-col items-start" style={{ gap: 16 }}>
              {legend.map((item) => (
                <div key={item.label} className="flex flex-row items-center" style={{ gap: 19 }}>
                  <span
                    className="rounded-full"
                    style={{ width: 28, height: 28, background: item.color }}
                  />
                  <span
                    className="font-normal leading-[30px]"
                    style={{ fontSize: 24, color: "#333333", fontFeatureSettings: "'liga' off" }}
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
              className="absolute flex items-center justify-center text-center"
              style={{
                left: subc.left,
                top: subc.top,
                width: subc.width,
                height: subc.height,
                background: COLORS.external,
                color: "#FFFFFF",
              }}
            >
              <span className="font-medium leading-[150%]" style={{ fontSize: 24, letterSpacing: "-0.019em" }}>
                Subcontractors
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}