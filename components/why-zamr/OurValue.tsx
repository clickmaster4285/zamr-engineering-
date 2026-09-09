"use client";

import { Users, Layers, MapPin } from "lucide-react";
import { ourValueCards, ourValueContent } from "@/mockData/why-zamr";

const iconMap = {
  users: Users,
  layers: Layers,
  "map-pin": MapPin,
};

export default function OurValue() {
  return (
    <section className="w-full bg-[var(--bg-section)] px-6 py-16 lg:p-[130px]">
      <div className="flex flex-col items-start gap-10 lg:gap-[60px]">
        {/* Frame — header */}
        <div className="flex w-full flex-col items-start gap-7 lg:gap-[28px]">
          {/* Frame 118 — section label */}
          <div className="flex flex-row items-center gap-4">
            <span className="text-sm font-medium tracking-[3px] text-[var(--color-contact-accent)] lg:text-base">
              05
            </span>
            <span className="h-px w-12 bg-[var(--color-contact-accent)] sm:w-[104px]" />
            <span className="text-sm font-medium tracking-[3px] uppercase text-[var(--color-contact-accent)] lg:text-base">
              Our Value
            </span>
          </div>

          {/* Heading */}
          <h2 className="w-full text-[32px] font-bold leading-[40px] text-[var(--text-dark)] sm:text-[38px] sm:leading-[46px] lg:text-[44px] lg:leading-[55px]">
            {ourValueContent.heading}
          </h2>

          {/* Subtitle */}
          <p className="w-full text-base font-normal leading-relaxed text-[var(--text-light-subtle)] lg:text-[18px] lg:leading-[23px]">
            {ourValueContent.subtitle}
          </p>
        </div>

        {/* Frame — cards row */}
        <div className="flex w-full flex-col items-stretch gap-6 lg:flex-row lg:gap-[24px]">
          {ourValueCards.map((card) => {
            const Icon = iconMap[card.icon];
            return (
              <div
                key={card.title}
                className="flex flex-1 flex-col items-start rounded-none border-2 border-[var(--color-contact-accent)] bg-[var(--color-contact-dark)] p-8 shadow-[0px_12px_24px_rgba(0,0,0,0.102)]"
                style={{ padding: "32px", gap: "16px" }}
              >
                {/* Icon Badge */}
                <div className="flex h-14 w-14 items-center justify-center bg-white/30">
                  <Icon size={28} className="text-white" strokeWidth={2} />
                </div>

                {/* Title */}
                <h3 className="w-full text-[24px] font-bold leading-[30px] text-white">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="w-full text-[16px] font-normal leading-[26px] text-white/90">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
