"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { leadershipTeam, type TeamMember } from "@/mockData/our-teams";

export default function LeadershipTeam() {
  const [selected, setSelected] = useState<TeamMember | null>(null);

  useEffect(() => {
    if (!selected) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelected(null);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [selected]);

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
            <span className="h-px w-[104px] bg-[var(--text-dark)]" />
            <span className="text-sm font-medium tracking-[3px] uppercase text-[var(--text-dark)] lg:text-base">
              LEADERSHIP TEAM
            </span>
          </div>

          {/* Heading */}
          <h2 className="w-full text-[36px] font-bold leading-[44px] text-[var(--text-dark)] sm:text-[44px] sm:leading-[55px]">
            Meet the Experienced Professionals
          </h2>
        </div>

        {/* Cards grid */}
        <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {leadershipTeam.map((member) => (
            <button
              key={member.name}
              type="button"
              onClick={() => setSelected(member)}
              className="group flex w-full cursor-pointer flex-col gap-4 border-b border-[var(--border-light)] pb-5 text-left"
            >
              {/* Headshot */}
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-[var(--bg-card)]">
                <Image
                  src={member.headshot}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Info */}
              <div className="flex flex-col gap-1">
                <h3 className="w-full text-lg font-bold leading-[23px] text-[var(--text-dark)]">
                  {member.name}
                </h3>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Member photo modal */}
      {selected && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={selected.name}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[var(--overlay-modal)] p-6"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative aspect-[4/5] w-full max-w-[320px] overflow-hidden shadow-2xl sm:max-w-[380px]"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={selected.headshot}
              alt={selected.name}
              fill
              className="object-cover"
              sizes="380px"
              priority
            />
            <p className="absolute bottom-5 left-5 text-xl font-bold leading-none text-white sm:text-2xl">
              {selected.name}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
