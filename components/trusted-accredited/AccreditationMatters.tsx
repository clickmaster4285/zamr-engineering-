"use client";

import { accreditationItems } from "@/mockData/trusted-accredited";

function Icon({ type }: { type: "award" | "shield-check" }) {
  if (type === "award") {
    return (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 15C15.866 15 19 11.866 19 8C19 4.13401 15.866 1 12 1C8.13401 1 5 4.13401 5 8C5 11.866 8.13401 15 12 15Z"
          stroke="white"
          strokeWidth="2"
        />
        <path
          d="M8.21 13.89L7 23L12 20L17 23L15.79 13.89"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 12L11 14L15 10"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function AccreditationMatters() {
  return (
    <section className="w-full bg-[#07183D] px-6 py-16 lg:p-[130px]">
      <div className="flex w-full flex-col gap-[60px]">
        {/* Header */}
        <div className="flex w-full flex-col gap-7">
          <div className="flex flex-row items-center gap-4">
            <span className="text-sm font-medium tracking-[3px] text-white lg:text-base">
              03
            </span>
            <span className="h-px w-[104px] bg-white" />
            <span className="text-sm font-medium tracking-[3px] uppercase text-white lg:text-base">
              Why Accreditation Matters
            </span>
          </div>

          <h2 className="max-w-[441px] text-[36px] font-bold leading-[44px] text-white sm:text-[44px] sm:leading-[55px]">
            Why Accreditation Matters
          </h2>
        </div>

        {/* Accreditation items — 2x2 grid */}
        <div className="grid w-full grid-cols-1 sm:grid-cols-2">
          {accreditationItems.map((item, index) => (
            <div
              key={item.title}
              className={`flex flex-col items-start gap-3 border-0 border-b border-[rgba(255,255,255,0.08)] lg:border-l lg:border-[rgba(255,255,255,0.08)] ${
                index % 2 === 0 ? "lg:border-l-0" : ""
              } p-6`}
            >
              <Icon type={item.icon} />

              <h3 className="text-[20px] font-semibold leading-[30px] text-white sm:text-[24px]">
                {item.title}
              </h3>

              <p className="w-full text-sm leading-[20px] text-[#B3B3B3] sm:text-base">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
