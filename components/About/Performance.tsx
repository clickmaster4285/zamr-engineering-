"use client";

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

// ---- Types ----
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

// ---- Data ----
const revenueByService: ServiceDatum[] = [
  { name: "Civil Engineering", value: 9.2, color: "#1E3A8A" },
  { name: "Road Infrastructure", value: 6.4, color: "#2E4FA3" },
  { name: "Project Verification", value: 4.8, color: "#4A6BC0" },
  { name: "Renewable Energy", value: 3.1, color: "#7C93D6" },
  { name: "TfNSW Compliance", value: 1.8, color: "#AEBBE8" },
];

const growthTrend: TrendDatum[] = [
  { year: "FY21", value: 2.0 },
  { year: "FY22", value: 5.4 },
  { year: "FY23", value: 6.8 },
  { year: "FY24", value: 7.6 },
];

const growthStats: StatDatum[] = [
  { label: "FY22 GROWTH", value: "+23.5%" },
  { label: "FY23 GROWTH", value: "+20.2%" },
  { label: "FY24 GROWTH", value: "+9.9%" },
  { label: "4YR CAGR", value: "+17.9%" },
];

export default function RevenuePerformanceSection() {
  const maxValue = 10; // fixed axis max ($10M) to match reference gridlines

  return (
    <section className="w-full bg-[#F7F8FC] px-8 md:px-30 py-16">
      {/* Label */}
      <div className="flex items-center gap-3 mb-8">
        <span className="text-xs font-bold tracking-[0.2em] text-[#1D4ED8]">04</span>
        <span className="w-10 h-px bg-gray-400" />
        <span className="text-xs font-bold tracking-[0.2em] text-gray-700">PERFORMANCE</span>
      </div>

      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-12">
        Revenue &amp; Performance
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* ---- Left: Horizontal Bar Chart ---- */}
        <div>
          <p className="text-xs font-bold tracking-[0.15em] text-gray-500 mb-6">
            REVENUE BY SERVICE — FY2024 ($M)
          </p>

          <ResponsiveContainer width="100%" height={260}>
            <BarChart
              data={revenueByService}
              layout="vertical"
              margin={{ top: 0, right: 20, left: 0, bottom: 0 }}
              barCategoryGap={18}
            >
              <CartesianGrid horizontal={false} stroke="#E5E7EB" />
              <XAxis
                type="number"
                domain={[0, maxValue]}
                ticks={[0, 2.5, 5, 7.5, 10]}
                tickFormatter={(v) => `$${v}M`}
                tick={{ fontSize: 11, fill: "#9CA3AF" }}
                axisLine={{ stroke: "#E5E7EB" }}
                tickLine={false}
              />
              <YAxis
                type="category"
                dataKey="name"
                tick={{ fontSize: 12, fill: "#374151", fontWeight: 600 }}
                axisLine={false}
                tickLine={false}
                width={150} // ← increased from 130 to 150 so labels fit on one line
              />
              <Tooltip
                cursor={{ fill: "rgba(0,0,0,0.03)" }}
                formatter={(value) => [`$${value}M`, "Revenue"]}
                contentStyle={{
                  borderRadius: 8,
                  border: "1px solid #E5E7EB",
                  fontSize: 12,
                }}
              />
              <Bar dataKey="value" radius={[0, 4, 4, 0]} barSize={22}>
                {revenueByService.map((entry) => (
                  <Cell key={entry.name} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>

          {/* Legend */}
          <div className="flex flex-wrap gap-x-5 gap-y-2 mt-4">
            {revenueByService.map((s) => (
              <div key={s.name} className="flex items-center gap-1.5">
                <span
                  className="w-2.5 h-2.5 rounded-sm"
                  style={{ backgroundColor: s.color }}
                />
                <span className="text-[11px] text-gray-500">{s.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ---- Right: Area/Line Chart + Stat Boxes ---- */}
        <div>
          <p className="text-xs font-bold tracking-[0.15em] text-[#1D4ED8] mb-6">
            REVENUE GROWTH — 4-YEAR TREND ($M)
          </p>

          <ResponsiveContainer width="100%" height={220}>
            <AreaChart data={growthTrend} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="growthFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#1D4ED8" stopOpacity={0.18} />
                  <stop offset="100%" stopColor="#1D4ED8" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid vertical={false} stroke="#E5E7EB" />
              <XAxis
                dataKey="year"
                tick={{ fontSize: 11, fill: "#9CA3AF" }}
                axisLine={{ stroke: "#E5E7EB" }}
                tickLine={false}
              />
              <YAxis
                tickFormatter={(v) => `$${v}M`}
                tick={{ fontSize: 11, fill: "#9CA3AF" }}
                axisLine={false}
                tickLine={false}
                width={40}
              />
              <Tooltip
                formatter={(value) => [`$${value}M`, "Revenue"]}
                contentStyle={{
                  borderRadius: 8,
                  border: "1px solid #E5E7EB",
                  fontSize: 12,
                }}
              />
              <Area
                type="monotone"
                dataKey="value"
                stroke="#1D4ED8"
                strokeWidth={2.5}
                fill="url(#growthFill)"
                dot={{ r: 4, fill: "#1D4ED8", strokeWidth: 0 }}
                activeDot={{ r: 6 }}
              />
            </AreaChart>
          </ResponsiveContainer>

          {/* Stat boxes */}
          <div className="grid grid-cols-2 gap-3 mt-6">
            {growthStats.map((s) => (
              <div
                key={s.label}
                className="bg-white border border-gray-200 rounded-md px-4 py-3
                  transition-all duration-200 ease-out cursor-pointer
                  hover:shadow-md hover:-translate-y-0.5"
              >
                <p className="text-[10px] font-semibold tracking-[0.1em] text-gray-400 mb-1">
                  {s.label}
                </p>
                <p className="text-sm font-bold text-[#1D4ED8]">{s.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}