"use client";
import { useRouter } from "next/navigation";
import { services, servicesCapabilitiesSection } from "@/mockData/services";

export default function Capabilities() {
  const { sectionNumber, sectionLabel, heading } = servicesCapabilitiesSection;
  const router = useRouter();
  return (
    <section className="w-full bg-white px-6 py-16 lg:px-[130px] lg:py-[130px]">
      <div className="flex w-full flex-col gap-[60px]">
        {/* Header */}
        <div className="flex w-full flex-col gap-[30px]">
          {/* Section label — Frame 118 */}
          <div className="flex flex-row items-center gap-4">
            <span className="text-base font-medium tracking-[3px] text-[var(--color-contact-accent)]">
              {sectionNumber}
            </span>
            <span className="h-px w-[104px] bg-[var(--text-dark)]" />
            <span className="text-base font-medium tracking-[3px] uppercase text-[var(--text-dark)]">
              {sectionLabel}
            </span>
          </div>

          {/* Heading */}
          <h2 className="w-full text-[32px] font-bold leading-[40px] text-[var(--text-heading)] sm:text-[40px] sm:leading-[50px] lg:text-[56px] lg:leading-[71px]">
            {heading}
          </h2>
        </div>

        {/* Capability cards grid — Frame 1321319114 + 1321319115 */}
        <div className="grid w-full grid-cols-1 gap-[30px] sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-[31px] lg:gap-y-[30px]">
          {services.map((service) => (
            <div
              key={service.slug}
              onClick={() => router.push(`/services/${service.slug}`)}
              className="group flex cursor-pointer flex-col gap-[30px] p-[30px]"
              style={{ background: "var(--bg-hover)" }}
            >
              {/* Number + title */}
              <div className="flex flex-col items-start gap-3">
                <span className="text-base font-medium tracking-[3px] text-[var(--text-dark)]">
                  {service.index}
                </span>

                <h3 className=" text-[28px] font-semibold  leading-[35px] text-[var(--text-dark)]   transition-colors                duration-200   group-hover:text-primary group-hover:underline   "
                >
                  {service.title}
                </h3>
              </div>

              {/* Tag rows */}
              <div className="flex flex-col gap-[20px]">
                {service.tags.map((row, ri) => (
                  <div
                    key={ri}
                    className="flex flex-wrap items-center gap-[10px]"
                  >
                    {row.map((tag) => (
                      <span
                        key={tag}
                        className="bg-white px-3 py-1.5 text-[12px] font-medium leading-[15px] text-[var(--text-dark)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}