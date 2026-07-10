"use client";

import Image from "next/image";
import { ourStrengths, ourStrengthsImage } from "@/mockData/why-zamr";

export default function OurStrengths() {
  return (
    <section className="w-full bg-[var(--bg-section)] px-6 py-16 lg:p-[130px]">
      <div className="flex w-full flex-col items-start gap-10 lg:flex-row lg:items-center lg:gap-[264px]">
        {/* Left column */}
        <div className="flex w-full flex-col items-start gap-[50px] lg:w-[555px]">
          {/* Frame 120 — header */}
          <div className="flex w-full flex-col items-start gap-6 lg:gap-[30px]">
            {/* Frame 118 — section label */}
            <div className="flex flex-row items-center gap-4">
              <span className="text-sm font-medium tracking-[3px] text-[var(--color-blue-accent)] lg:text-base">
                02
              </span>
              <span className="h-px w-12 bg-[var(--text-dark)] sm:w-[104px]" />
              <span className="text-sm font-medium tracking-[3px] uppercase text-[var(--text-dark)] lg:text-base">
                Our Strengths
              </span>
            </div>

            {/* Heading */}
            <h2 className="w-full text-[36px] font-bold leading-[44px] text-[var(--text-dark)] sm:text-[44px] sm:leading-[52px] lg:text-[56px] lg:leading-[71px]">
              What Sets Us Apart
            </h2>
          </div>

          {/* Description + checklist */}
          <div className="flex w-full flex-col items-start gap-[20px]">
            <p className="w-full text-sm leading-5 text-[var(--text-dark)] sm:text-base lg:text-[18px] lg:leading-[23px]">
              Our multidisciplinary team brings deep-seated expertise to every
              project, ensuring that technical challenges are met with
              innovative, compliant, and durable solutions.
            </p>

            {/* Frame 1321319073 — checklist */}
            <div className="flex w-full flex-col items-start gap-4">
              {ourStrengths.map((item) => (
                <div
                  key={item}
                  className="flex w-full flex-row items-center gap-3"
                >
                  {/* Check icon */}
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="shrink-0"
                  >
                    <path
                      d="M3.33334 10.8333L7.5 15L16.6667 5"
                      stroke="var(--color-blue-accent)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-sm font-medium leading-[23px] text-[var(--text-dark)] sm:text-base lg:text-[18px]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right column — image */}
        <div className="relative h-[350px] w-full overflow-hidden lg:h-[478px] lg:w-[649px]">
          <Image
            src={ourStrengthsImage}
            alt="Engineers reviewing plans on construction site"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
