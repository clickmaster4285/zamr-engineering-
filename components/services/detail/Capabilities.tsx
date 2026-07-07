// components/TechnicalCapabilities.jsx
interface Props {
  number: string;
  heading: string;
  capabilities: { title: string; description: string }[];
}

export default function TechnicalCapabilities({ number, heading, capabilities }: Props) {
  return (
    <section className="w-full bg-white px-6 py-16 md:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <div className="mb-4 flex items-center gap-3">
            <span className="text-sm font-bold tracking-widest text-[var(--color-primary)]">
              {number}
            </span>
            <span className="h-px w-12 bg-[var(--color-primary)]" />
            <span className="text-sm font-semibold tracking-[0.25em] text-[#4C4C4C]">
              CAPABILITIES
            </span>
          </div>

          <h2 className="text-[44px] font-bold leading-tight tracking-tight text-[var(--color-primary)] sm:text-[50px]">
            {heading}
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((item, index) => (
            <div
              key={index}
              className="group rounded-xl border border-gray-100 bg-white p-8 transition-all duration-300 hover:border-[var(--color-primary)]/30 hover:shadow-lg hover:shadow-[var(--color-primary)]/10"
            >
              <h3 className="mb-4 text-[23px] font-bold text-[var(--color-primary)] transition-colors group-hover:text-[var(--color-secondary)]">
                {item.title}
              </h3>
              <p className="text-[17px] leading-relaxed text-gray-600 md:text-[19px]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}