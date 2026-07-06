// app/page.tsx
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Image from "next/image";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Organizational Structure — ZAMR Engineering",
  description:
    "ZAMR Engineering organizational structure chart showing technical, operational and external teams.",
  openGraph: {
    title: "Organizational Structure — ZAMR Engineering",
    description:
      "ZAMR Engineering organizational structure chart showing technical, operational and external teams.",
  },
};

type NodeType = "technical" | "operational" | "external";

const COLORS: Record<NodeType, { bg: string; text: string }> = {
  technical: { bg: "#3F6FB4", text: "#ffffff" },
  operational: { bg: "#67ADE5", text: "#ffffff" },
  external: { bg: "#BAC5E1", text: "#ffffff" },
};
const LINE = "#1580D6";

function Box({
  x,
  y,
  w,
  h,
  title,
  subtitle,
  type,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  title: string;
  subtitle?: string;
  type: NodeType;
}) {
  const c = COLORS[type];
  return (
    <div
      className="absolute rounded-md flex flex-col items-center justify-center text-center px-2"
      style={{
        left: x,
        top: y,
        width: w,
        height: h,
        background: c.bg,
        color: c.text,
      }}
    >
      <div className="text-[11px] font-semibold leading-tight">{title}</div>
      {subtitle && (
        <div className="text-[10px] font-medium leading-tight mt-0.5">
          {subtitle}
        </div>
      )}
    </div>
  );
}

function SubHeader({
  x,
  y,
  w,
  title,
  type,
}: {
  x: number;
  y: number;
  w: number;
  title: string;
  type: NodeType;
}) {
  const c = COLORS[type];
  return (
    <div
      className="absolute rounded-[3px] text-[8.5px] font-semibold text-center px-1 flex items-center justify-center whitespace-nowrap"
      style={{
        left: x,
        top: y,
        width: w,
        height: 24,
        background: c.bg,
        color: c.text,
      }}
    >
      {title}
    </div>
  );
}

function BulletBox({
  x,
  y,
  w,
  h,
  items,
  type,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  items: string[];
  type: NodeType;
}) {
  const c = COLORS[type];
  return (
    <div
      className="absolute rounded-[4px] px-2 flex items-center"
      style={{
        left: x,
        top: y,
        width: w,
        height: h,
        background: c.bg,
        color: c.text,
      }}
    >
      <ul className="text-[9.5px] font-medium leading-snug list-disc pl-3 space-y-1">
        {items.map((i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>
    </div>
  );
}

function Chart() {
  // Coordinate system: 900 x 640
  // Managing Director
  const md = { x: 360, y: 55, w: 180, h: 60 };
  // External boxes — equal vertical spacing
  const extW = 220,
    extH = 44,
    extGap = 14,
    extX = 640;
  const extStartY = 5;
  const ext = [
    { title: "Quality Support", sub: "Insaaf Khan" },
    { title: "Cost Estimating", sub: "Nafeesh Nafraj" },
    { title: "Contract Administration", sub: "Franco Bucci" },
  ].map((e, i) => ({
    ...e,
    x: extX,
    y: extStartY + i * (extH + extGap),
    w: extW,
    h: extH,
  }));
  // Design Manager & Operational Director
  const dm = { x: 160, y: 175, w: 180, h: 54 };
  const od = { x: 560, y: 175, w: 200, h: 54 };

  // Sub-headers row (y=290) and bullet boxes (y=325)
  const subs = [
    {
      title: "Structure Design",
      items: ["Kashif JKhan", "Yashwant Dyall", "Raland Ng"],
      type: "technical" as NodeType,
    },
    {
      title: "Civil Design",
      items: ["Faraz Ahmed", "Thomas Chew", "Mark Shamoun"],
      type: "technical" as NodeType,
    },
    {
      title: "Traffic Management",
      items: ["Charles Waife", "Manhur Rahman", "Kirk Martinez"],
      type: "technical" as NodeType,
    },
    {
      title: "Asset Management",
      items: ["Moeen", "Rayyaan", "Saad Malik"],
      type: "technical" as NodeType,
    },
    {
      title: "Operational - Quality",
      items: ["Yashwant Dyall", "Janaka Bandara"],
      type: "operational" as NodeType,
    },
    {
      title: "Operation Safety",
      items: ["Kah Yong Yan"],
      type: "operational" as NodeType,
    },
    {
      title: "Project Management",
      items: ["Dante Vinces", "Arshad Mahmood", "Tanuj Kakkar"],
      type: "operational" as NodeType,
    },
  ];
  const subW = 115;
  const subGap = 8;
  const subStartX = 20;
  const subY = 290;
  const boxY = 348;
  const boxH = 100;

  const mdBottom = { x: md.x + md.w / 2, y: md.y + md.h };
  const dmTop = { x: dm.x + dm.w / 2, y: dm.y };
  const odTop = { x: od.x + od.w / 2, y: od.y };
  const dmBottom = { x: dm.x + dm.w / 2, y: dm.y + dm.h };
  const odBottom = { x: od.x + od.w / 2, y: od.y + od.h };
  const mdRight = { x: md.x + md.w, y: md.y + md.h / 2 };

  const busY = 145; // horizontal bus between MD and DM/OD
  const dmBusY = 275; // bus above DM sub-headers
  const odBusY = 275; // bus above OD sub-headers

  // Subcontractors position (under operational quality & safety area)
  const subc = { x: 555, y: 505, w: 140, h: 28 };

  const sub = (i: number) => ({
    x: subStartX + i * (subW + subGap),
    y: subY,
    w: subW,
  });

  // ---- Rounded-corner path helpers (radius R) ----
  const R = 10;
  const HVH = (
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    midX: number,
    r = R
  ) => {
    const dx1 = midX > x1 ? -r : r;
    const dy = y2 > y1 ? r : -r;
    const dx2 = x2 > midX ? r : -r;
    if (Math.abs(y2 - y1) < r * 2) return `M${x1},${y1} L${x2},${y2}`;
    return `M${x1},${y1} L${midX + dx1},${y1} Q${midX},${y1} ${midX},${
      y1 + dy
    } L${midX},${y2 - dy} Q${midX},${y2} ${midX + dx2},${y2} L${x2},${y2}`;
  };
  const VHV = (
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    midY: number,
    r = R
  ) => {
    if (Math.abs(x2 - x1) < 1) return `M${x1},${y1} L${x2},${y2}`;
    const dy1 = midY > y1 ? -r : r;
    const dx = x2 > x1 ? r : -r;
    const dy2 = y2 > midY ? r : -r;
    return `M${x1},${y1} L${x1},${midY + dy1} Q${x1},${midY} ${x1 + dx},${midY} L${
      x2 - dx
    },${midY} Q${x2},${midY} ${x2},${midY + dy2} L${x2},${y2}`;
  };

  return (
    <div className="relative mx-auto" style={{ width: 900, height: 560 }}>
      <svg
        className="absolute inset-0 pointer-events-none"
        width="900"
        height="560"
        fill="none"
        stroke={LINE}
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <defs>
          <marker
            id="arrow"
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="7"
            markerHeight="7"
            orient="auto-start-reverse"
          >
            <path d="M0,0 L10,5 L0,10 z" fill={LINE} />
          </marker>
        </defs>
        {/* MD -> external (right side) — rounded elbows with arrows */}
        {ext.map((e, i) => {
          const y2 = e.y + e.h / 2;
          return (
            <path
              key={`ext-${i}`}
              d={HVH(mdRight.x, mdRight.y, e.x - 4, y2, 600)}
              markerEnd="url(#arrow)"
            />
          );
        })}

        {/* MD -> DM & OD — rounded VHV branches sharing a horizontal bus, arrows into boxes */}
        <path
          d={VHV(mdBottom.x, mdBottom.y, dmTop.x, dmTop.y - 4, busY)}
          markerEnd="url(#arrow)"
        />
        <path
          d={VHV(mdBottom.x, mdBottom.y, odTop.x, odTop.y - 4, busY)}
          markerEnd="url(#arrow)"
        />

        {/* DM -> 4 sub headers */}
        {[0, 1, 2, 3].map((i) => {
          const s = sub(i);
          const cx = s.x + s.w / 2;
          return (
            <path
              key={`dmc-${i}`}
              d={VHV(dmBottom.x, dmBottom.y, cx, subY, dmBusY)}
            />
          );
        })}

        {/* OD -> 3 sub headers */}
        {[4, 5, 6].map((i) => {
          const s = sub(i);
          const cx = s.x + s.w / 2;
          return (
            <path
              key={`odc-${i}`}
              d={VHV(odBottom.x, odBottom.y, cx, subY, odBusY)}
            />
          );
        })}

        {/* Op-Quality & Op-Safety bullet boxes -> Subcontractors */}
        {[4, 5].map((i) => {
          const s = sub(i);
          const cx = s.x + s.w / 2;
          return (
            <path
              key={`sc-${i}`}
              d={VHV(cx, boxY + boxH, subc.x + subc.w / 2, subc.y, subc.y - 18)}
            />
          );
        })}

        {/* Short vertical connectors: sub-header pill -> bullet box */}
        {[0, 1, 2, 3, 4, 5, 6].map((i) => {
          const s = sub(i);
          const cx = s.x + s.w / 2;
          return <path key={`pb-${i}`} d={`M${cx},${subY + 24} L${cx},${boxY}`} />;
        })}
      </svg>

      <Box {...md} title="Managing Director" subtitle="Khalid Javed" type="operational" />
      {ext.map((e, i) => (
        <Box
          key={i}
          x={e.x}
          y={e.y}
          w={e.w}
          h={e.h}
          title={e.title}
          subtitle={e.sub}
          type="external"
        />
      ))}
      <Box {...dm} title="Design Manager" subtitle="Omar Faruqi" type="technical" />
      <Box {...od} title="Operational Director" subtitle="Khalid Javed" type="operational" />

      {subs.map((s, i) => {
        const p = sub(i);
        return (
          <div key={i}>
            <SubHeader x={p.x} y={subY} w={p.w} title={s.title} type={s.type} />
            <BulletBox x={p.x} y={boxY} w={p.w} h={boxH} items={s.items} type={s.type} />
          </div>
        );
      })}

      <div
        className="absolute rounded-[3px] text-[10px] font-semibold text-center flex items-center justify-center"
        style={{
          left: subc.x,
          top: subc.y,
          width: subc.w,
          height: subc.h,
          background: "#BAC5E1",
          color: "#ffffff",
        }}
      >
        Subcontractors
      </div>
    </div>
  );
}

export default function Structure() {
  return (
    <div
    className="w-full bg-white px-6 py-16 sm:px-10 lg:px-30 lg:py-16"
    >
     <div className="mb-5 flex items-center gap-3">
          {/* Slightly bigger: 15px → 16px */}
          <span className="text-sm tracking-[0.1em] font-bold text-[var(--color-primary)]">03</span>
          <span className="h-px w-12 bg-[#B7B7B7]" />
          {/* Slightly bigger: 13px → 14px */}
          <span className="text-sm tracking-[0.25em] text-[#4C4C4C]">STRUCTURE</span>
        </div>

      <div className="mt-6 flex items-start gap-8">
        <div className="w-56 shrink-0">



         <div className="mb-1">
  <Image
    src="/images/zamr-logo.png"
    alt="ZAMR Engineering"
    width={120}
    height={45}
    className="object-contain"
  />
</div>
<p className="text-[var(--color-secondary)] text-xs font-semibold tracking-widest mb-6">ENGINEERING</p>





          
          <h1 className="mt-6 text-[30px] font-semibold text-[var(--text-dark)] leading-tight">
            Organizational<br />Structure
          </h1>
          <div className="mt-6 space-y-2 text-[13px] text-[var(--text-dark)]">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-[#3F6FB4]" /> Technical Team
            </div>
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-[#67ADE5]" /> Operational Team
            </div>
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-[#BAC5E1]" /> External Team
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-x-auto">
          <Chart />
        </div>
      </div>
    </div>
  );
}