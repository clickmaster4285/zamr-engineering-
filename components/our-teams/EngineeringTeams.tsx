"use client";

import { engineeringTeams } from "@/mockData/our-teams";

export default function EngineeringTeams() {
  return (
    <section className="w-full bg-[var(--bg-hero)] px-6 py-16 lg:p-[130px]">
      <div className="flex w-full flex-col gap-[60px]">
        {/* Header */}
        <div className="flex w-full flex-col gap-7">
          {/* Section label */}
          <div className="flex flex-row items-center gap-4">
            <span className="text-sm font-medium tracking-[3px] text-white lg:text-base">
              02
            </span>
            <span className="h-px w-[104px] bg-white" />
            <span className="text-sm font-medium tracking-[3px] uppercase text-white lg:text-base">
              OUR ENGINEERING TEAMS
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-[36px] font-bold leading-[44px] text-white sm:text-[44px] sm:leading-[55px]">
            Our Engineering Teams
          </h2>
        </div>

        {/* Teams grid — 2 rows of 4 */}
        <div className="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {engineeringTeams.map((team, index) => (
            <div
              key={team.title}
              className={`flex flex-col items-start gap-3 p-6 border-b border-[var(--border-dark)] lg:border-l lg:border-[var(--border-dark)] ${
                index % 4 === 0 ? "lg:border-l-0" : ""
              }`}
            >
              <h3 className="w-full text-lg font-semibold leading-[23px] text-white">
                {team.title}
              </h3>
              <p className="w-full text-xs font-normal leading-[15px] text-[var(--text-light-subtle)]">
                {team.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
