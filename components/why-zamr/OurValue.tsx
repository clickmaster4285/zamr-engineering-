"use client";

import { Users, Layers, MapPin } from "lucide-react";
import { ourValueCards, ourValueContent } from "@/mockData/why-zamr";

const iconMap = {
  users: Users,
  layers: Layers,
  "map-pin": MapPin,
} as const;

export default function OurValue() {
  return (
    <section className="flex w-full flex-col items-start bg-[var(--bg-section)] px-5 py-[60px] lg:p-[77.037px] 2xl:p-[130px]">
      <div className="flex w-full flex-col items-start gap-8 lg:gap-[35.56px] 2xl:gap-[60px]">
        <div className="flex w-full flex-col items-start gap-3 lg:gap-[16.59px] 2xl:gap-7">
          <div className="flex flex-row items-center gap-3 lg:gap-[9.48px] 2xl:gap-4">
            <span className="shrink-0 text-sm font-medium leading-[18px] lg:text-[13px] lg:leading-4 lg:tracking-[1.77778px] 2xl:text-base 2xl:leading-5 2xl:tracking-[3px]">
              {ourValueContent.number}
            </span>
            <span className="h-px w-10 shrink-0 bg-[var(--text-heading)] lg:w-[61.63px] 2xl:w-[104px]" />
            <span className="text-sm font-medium leading-[18px] tracking-[3px] uppercase text-[var(--text-heading)] lg:text-[13px] lg:leading-4 lg:tracking-[1.77778px] lg:2xl:text-base 2xl:leading-5 2xl:tracking-[3px]">
              {ourValueContent.label}
            </span>
          </div>

          <h2 className="w-full text-[28px] font-semibold leading-[35px] text-[var(--text-heading)] lg:text-[26.0741px] lg:font-bold lg:leading-[33px] 2xl:text-[44px] 2xl:leading-[55px]">
            {ourValueContent.heading}
          </h2>

          <p className="w-full text-[15px] font-normal leading-[22px] text-[var(--text-muted)] lg:text-[13px] lg:leading-4 lg:text-[var(--text-light-subtle)] 2xl:text-[18px] 2xl:leading-[23px]">
            {ourValueContent.subtitle}
          </p>
        </div>

        <div className="grid w-full grid-cols-1 items-stretch gap-6 lg:grid-cols-2 2xl:grid-cols-3">
          {ourValueCards.map((card, index) => {
            const Icon = iconMap[card.icon];
            return (
              <article
                key={card.title}
                className={`flex h-full w-full flex-col items-start gap-4 border-2 border-[var(--color-primary)] bg-[var(--color-primary)] p-6 shadow-[0px_12px_24px_rgba(0,0,0,0.101961)] lg:gap-[9.48px] lg:border-[1.18519px] lg:p-[18.963px] lg:shadow-[0px_7.11111px_14.2222px_rgba(0,0,0,0.101961)] 2xl:gap-4 2xl:border-2 2xl:p-8 2xl:shadow-[0px_12px_24px_rgba(0,0,0,0.101961)] ${
                  index === ourValueCards.length - 1
                    ? "lg:col-span-2 2xl:col-span-1"
                    : ""
                }`}
              >
                <div className="flex h-12 w-12 items-center justify-center bg-white/20 lg:h-[33.19px] lg:w-[33.19px] lg:bg-white/30 2xl:h-14 2xl:w-14">
                  <Icon
                    className="h-6 w-6 text-white lg:h-[16.59px] lg:w-[16.59px] 2xl:h-7 2xl:w-7"
                    strokeWidth={2}
                  />
                </div>

                <h3 className="w-full text-[20px] font-bold leading-[25px] text-white lg:text-lg lg:leading-[23px] 2xl:text-2xl 2xl:leading-[30px]">
                  {card.title}
                </h3>

                <p className="w-full text-sm font-normal leading-[22px] text-white/90 lg:text-[13px] lg:leading-[21px] 2xl:text-base 2xl:leading-[26px]">
                  {card.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
