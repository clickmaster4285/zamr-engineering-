// components/DeliveryProcess.jsx
interface Props {
  number: string;
  heading: string;
  processSteps: { number: string; title: string; description: string }[];
}

export default function DeliveryProcess({ number, heading, processSteps }: Props) {
  return (
    <section className="w-full bg-[#0F172A] px-6 py-20 text-white md:px-30">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16">
          <div className="mb-4 flex items-center gap-3">
            <span className="text-xs font-bold tracking-widest text-white/70">
              {number}
            </span>
            <span className="h-px w-10 bg-white/40" />
            <span className="text-xs tracking-[0.25em] text-white/70">
              PROCESS
            </span>
          </div>

          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
            {heading}
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((item, index) => (
            <div
              key={index}
              className="group relative rounded-2xl border border-white/10 bg-white/5 p-8 transition-all duration-300 hover:border-white/20 hover:bg-white/10"
            >
              <div className="mb-6 text-5xl font-bold text-white/20 transition-colors group-hover:text-[#294098]">
                {item.number}
              </div>
              <h3 className="mb-4 text-xl font-bold leading-tight text-white">
                {item.title}
              </h3>
              <p className="text-[15px] leading-relaxed text-white/70">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}