"use client";

import Image from "next/image";
import { leadershipTeam } from "@/mockData/our-teams";

export default function LeadershipTeam() {
  return (
    <section className="w-full bg-white px-6 py-16 lg:p-[130px]">
      <div className="flex w-full flex-col gap-[60px]">
        {/* Header */}
        <div className="flex w-full flex-col gap-7">
          {/* Section label */}
          <div className="flex flex-row items-center gap-4">
            <span className="text-sm font-medium tracking-[3px] text-[var(--color-primary)] lg:text-base">
              01
            </span>
            <span className="h-px w-[104px] bg-black" />
            <span className="text-sm font-medium tracking-[3px] uppercase text-[#333333] lg:text-base">
              LEADERSHIP TEAM
            </span>
          </div>

          {/* Heading */}
          <h2 className="w-full text-[36px] font-bold leading-[44px] text-[#090D15] sm:text-[44px] sm:leading-[55px]">
            Meet the Experienced Professionals
          </h2>
        </div>

        {/* Cards grid */}
        <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {leadershipTeam.map((member) => (
            <div
              key={member.name}
              className="flex w-full flex-col gap-4 border-b border-[#E5E7EB] pb-5"
            >
              {/* Headshot */}
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-gray-100">
                <Image
                  src={member.headshot}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Info */}
              <div className="flex flex-col gap-1">
                <h3 className="w-full text-lg font-bold leading-[23px] text-[#333333]">
                  {member.name}
                </h3>
                <p className="w-full text-sm font-medium leading-[18px] text-[var(--color-primary)]">
                  {member.role}
                </p>
                <p className="w-full text-[13px] font-normal leading-4 text-[#787878]">
                  {member.department}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
