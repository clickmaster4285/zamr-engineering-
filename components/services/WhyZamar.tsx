"use client";

interface Feature {
  number: string;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    number: "01",
    title: "Technical Excellence",
    description:
      "Every deliverable is produced by experienced, accredited engineers and subjected to rigorous internal review before issue. No shortcuts. No junior-only teams.",
  },
  {
    number: "02",
    title: "Independence & Integrity",
    description:
      "Our verification and compliance practices operate with complete independence from design. We report what we find — not what clients want to hear.",
  },
  {
    number: "03",
    title: "Government Expertise",
    description:
      "Deep experience working within TfNSW, RMS, and Infrastructure NSW frameworks. We know the standards, the approval processes, and the people.",
  },
  {
    number: "04",
    title: "End-to-End Delivery",
    description:
      "From initial feasibility to as-built certification, we can resource the full project lifecycle — eliminating the gaps between consultant handovers.",
  },
];

export default function WhyZamrSection() {
  return (
    <section className="w-full bg-[#F2F4F9] px-8 md:px-16 py-16">
      {/* Label */}
      <div className="flex items-center gap-3 mb-8">
        <span className="text-xs font-bold tracking-[0.2em] text-[#1D4ED8]">02</span>
        <span className="w-10 h-px bg-gray-400" />
        <span className="text-xs font-bold tracking-[0.2em] text-gray-700">WHY ZAMR</span>
      </div>

      {/* Headline */}
      <h2 className="text-3xl md:text-5xl font-bold text-[#111827] mb-12 max-w-3xl">
        What sets us apart from the competition.
      </h2>

      {/* Feature grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((f) => (
          <div
            key={f.number}
            className="bg-[#EBEEF5] rounded-md p-6
              transition-all duration-200 ease-out cursor-pointer
              hover:shadow-lg hover:-translate-y-1 hover:bg-[#E3E7F1]"
          >
            {/* Red dash */}
            <div className="w-6 h-[3px] bg-[#C54A33] mb-4" />

            {/* Number */}
            <p className="text-[11px] font-semibold tracking-[0.15em] text-gray-400 mb-2">
              {f.number}
            </p>

            {/* Title */}
            <h3 className="text-lg font-bold text-[#111827] mb-3">
              {f.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-gray-600 leading-relaxed">
              {f.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}