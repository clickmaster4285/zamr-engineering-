"use client";

import { Barlow } from "next/font/google";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  AreaChart,
  Area,
  Tooltip,
} from "recharts";

const barlow = Barlow({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
});

interface ServiceDatum {
  name: string;
  value: number;
  color: string;
}

interface TrendDatum {
  year: string;
  value: number;
}

interface StatDatum {
  label: string;
  value: string;
}

const revenueByService: ServiceDatum[] = [
  { name: "Civil Engineering", value: 4.27, color: "#22419E" },
  { name: "Road Infrastructure", value: 3.17, color: "#3157CB" },
  { name: "Project Verification", value: 2.17, color: "#3E70DB" },
  { name: "Renewable Energy", value: 1.18, color: "#517BEB" },
  { name: "TfNSW Compliance", value: 0.68, color: "#6791EF" },
];

const growthTrend: TrendDatum[] = [
  { year: "FY21", value: 5.0 },
  { year: "FY22", value: 7.0 },
  { year: "FY23", value: 9.0 },
  { year: "FY24", value: 11.0 },
];

const growthStats: StatDatum[] = [
  { label: "FY22 GROWTH", value: "+23.5%" },
  { label: "FY23 GROWTH", value: "+20.2%" },
  { label: "FY24 GROWTH", value: "+9.9%" },
  { label: "CAGR (3Y)", value: "+17.9%" },
];

export default function RevenuePerformanceSection() {
  return (
    <section className="w-full bg-[var(--bg-light)] p-[130px]">
      <div className="mx-auto flex max-w-[1468px] flex-col gap-[60px]">
        {/* Frame 120 — header */}
        <div className="flex w-[489px] flex-col gap-[30px]">
          {/* Frame 118 — section label */}
          <div className="flex flex-row items-center gap-4">
            <span className="text-base font-medium tracking-[3px] text-[var(--color-primary)]">
              04
            </span>
            <span className="h-px w-[104px] bg-black" />
            <span className="text-base font-medium tracking-[3px] uppercase text-[#333333]">
              PERFORMANCE
            </span>
          </div>
          <h2 className="text-[44px] font-bold leading-[55px] text-[#333333]">
            Revenue &amp; Performance
          </h2>
        </div>

        {/* Frame 1321319046 — charts row */}
        <div className="flex flex-row items-center gap-[64px]">
          {/* Left — bar chart (855.5px) */}
          <div className="flex flex-1 flex-col">
            <p
              className="text-[10px] font-bold leading-[15px] tracking-[1.8px] text-[#22419E]"
              style={{ fontFamily: barlow.style.fontFamily }}
            >
              REVENUE BY SERVICE — FY2024 ($M)
            </p>

            <div className="w-full pt-6" style={{ height: 304 }}>
              <ResponsiveContainer width="100%" height={280}>
                <BarChart
                  data={revenueByService}
                  layout="vertical"
                  margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
                  barCategoryGap={24}
                >
                  <CartesianGrid
                    horizontal={false}
                    vertical={true}
                    stroke="rgba(34,65,158,0.08)"
                    strokeDasharray="1 4"
                  />
                  <XAxis
                    type="number"
                    domain={[0, 5]}
                    ticks={[0, 1, 2, 3, 4, 5]}
                    tickFormatter={(v) => `$${v}M`}
                    tick={{
                      fontSize: 10,
                      fill: "#9AA3B0",
                      fontFamily: barlow.style.fontFamily,
                    }}
                    axisLine={{ stroke: "rgba(34,65,158,0.08)" }}
                    tickLine={false}
                  />
                  <YAxis
                    type="category"
                    dataKey="name"
                    tick={{
                      fontSize: 14,
                      fill: "#344153",
                      fontWeight: 700,
                      fontFamily: barlow.style.fontFamily,
                    }}
                    axisLine={false}
                    tickLine={false}
                    width={130}
                  />
                  <Tooltip
                    cursor={{ fill: "rgba(0,0,0,0.03)" }}
                    formatter={(value: unknown) => [
                      `$${Number(value).toFixed(1)}M`,
                      "Revenue",
                    ]}
                  />
                  <Bar dataKey="value" radius={[0, 4, 4, 0]} barSize={22}>
                    {revenueByService.map((entry) => (
                      <Cell key={entry.name} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Legend */}
            <div className="flex flex-row items-center gap-2 pt-6">
              {revenueByService.map((s) => (
                <div key={s.name} className="flex flex-row items-center gap-2">
                  <span
                    className="h-2.5 w-2.5"
                    style={{ backgroundColor: s.color }}
                  />
                  <span
                    className="text-[10px] leading-[15px] tracking-[0.6px] text-[#697281]"
                    style={{ fontFamily: barlow.style.fontFamily }}
                  >
                    {s.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — area chart + stat boxes (548.5px) */}
          <div className="flex w-[548.5px] shrink-0 flex-col">
            <p
              className="text-[10px] font-bold leading-[15px] tracking-[1.8px] text-[#22419E]"
              style={{ fontFamily: barlow.style.fontFamily }}
            >
              REVENUE GROWTH — 4-YEAR TREND ($M)
            </p>

            <div className="w-full pt-6" style={{ height: 244 }}>
              <ResponsiveContainer width="100%" height={220}>
                <AreaChart
                  data={growthTrend}
                  margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
                >
                  <defs>
                    <linearGradient id="growthFill" x1="0" y1="0" x2="0" y2="1">
                      <stop
                        offset="0%"
                        stopColor="#22419E"
                        stopOpacity={0.108}
                      />
                      <stop
                        offset="100%"
                        stopColor="#22419E"
                        stopOpacity={0}
                      />
                    </linearGradient>
                  </defs>
                  <CartesianGrid
                    vertical={false}
                    stroke="rgba(34,65,158,0.08)"
                    strokeDasharray="1 4"
                  />
                  <XAxis
                    dataKey="year"
                    tick={{
                      fontSize: 10,
                      fill: "#9AA3B0",
                      fontFamily: barlow.style.fontFamily,
                    }}
                    axisLine={{ stroke: "rgba(34,65,158,0.08)" }}
                    tickLine={false}
                  />
                  <YAxis
                    domain={[5, 13]}
                    ticks={[5, 7, 9, 11, 13]}
                    tickFormatter={(v) => `$${v}M`}
                    tick={{
                      fontSize: 10,
                      fill: "#9AA3B0",
                      fontFamily: barlow.style.fontFamily,
                    }}
                    axisLine={false}
                    tickLine={false}
                    width={40}
                  />
                  <Tooltip
                    formatter={(value: unknown) => [
                      `$${value}M`,
                      "Revenue",
                    ]}
                  />
                  <Area
                    type="monotone"
                    dataKey="value"
                    stroke="#22419E"
                    strokeWidth={2}
                    fill="url(#growthFill)"
                    dot={{
                      r: 4,
                      fill: "rgba(34,65,158,0.6)",
                      strokeWidth: 0,
                    }}
                    activeDot={{ r: 6 }}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            {/* Stat boxes */}
            <div className="grid grid-cols-2 gap-3 pt-6">
              {growthStats.map((s) => (
                <div
                  key={s.label}
                  className="flex flex-col items-start px-4 py-3"
                  style={{
                    background: "var(--bg-light)",
                    border: "1px solid rgba(34,65,158,0.1)",
                  }}
                >
                  <span
                    className="text-[8.5px] leading-[13px] tracking-[1.275px] text-[#9AA3B0]"
                    style={{ fontFamily: barlow.style.fontFamily }}
                  >
                    {s.label}
                  </span>
                  <span
                    className="pt-[3px] text-[17px] font-extrabold leading-[26px] tracking-[-0.34px] text-[#22419E]"
                    style={{ fontFamily: barlow.style.fontFamily }}
                  >
                    {s.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
