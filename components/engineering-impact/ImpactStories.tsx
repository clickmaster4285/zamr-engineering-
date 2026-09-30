"use client";

import Image from "next/image";
import { Check } from "lucide-react";
import {
  impactStoriesContent,
  type ImpactStory,
} from "@/mockData/engineering-impact";

function StoryImage({
  story,
  fillRemaining,
}: {
  story: ImpactStory;
  fillRemaining: boolean;
}) {
  return (
    <div
      className={
        fillRemaining
          ? "relative mt-auto h-[180px] w-full shrink-0 overflow-hidden  lg:h-auto lg:min-h-0 lg:flex-1 lg:shrink  "
          : "relative h-[180px] w-full shrink-0 overflow-hidden  lg:h-[130.37px]  2xl:h-[220px] "
      }
    >
      <Image
        src={story.image}
        alt={story.imageAlt}
        fill
        className="object-cover"
        sizes="(max-width: 1023px) 100vw, (max-width: 1535px) 33vw, 473px"
      />
    </div>
  );
}

function StoryContent({ story }: { story: ImpactStory }) {
  return (
    <div className="flex w-full shrink-0 flex-col items-start gap-5 lg:gap-[11.85px] 2xl:gap-5">
      <div className="flex w-full flex-col items-start gap-3 lg:gap-[7.11px] 2xl:gap-3">
        <span className="text-sm font-semibold leading-[18px] uppercase text-[var(--color-blue-accent)] lg:text-[13px] lg:font-medium lg:leading-4 lg:tracking-[1.77778px] 2xl:text-base 2xl:leading-5 2xl:tracking-[3px]">
          {story.category}
        </span>

        <h3 className="w-full text-[22px] font-bold leading-7 text-[var(--text-heading)] lg:text-[18.963px] lg:leading-[23px] 2xl:text-[32px] 2xl:leading-[38px]">
          {story.title}
        </h3>

        <p className="w-full text-[15px] font-normal leading-[1.5] text-[var(--text-heading)] lg:text-[13px] lg:leading-[21px] 2xl:text-base 2xl:leading-[26px]">
          {story.description}
        </p>
      </div>

      <ul className="flex w-full flex-col items-start gap-4 lg:gap-[9.48px] 2xl:gap-4">
        {story.points.map((point) => (
          <li
            key={point}
            className="flex w-full flex-row items-start gap-3 lg:items-center lg:gap-[9.48px] 2xl:gap-4"
          >
            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center  bg-[var(--color-blue-accent)] lg:mt-0 lg:h-[14.22px] lg:w-[14.22px]  2xl:h-6 2xl:w-6 ">
              <Check
                className="h-3 w-3 text-white lg:h-[8.3px] lg:w-[8.3px] 2xl:h-3.5 2xl:w-3.5"
                strokeWidth={2}
              />
            </span>

            <span className="min-w-0 flex-1 text-sm font-medium leading-5 text-[var(--text-heading)] lg:text-[13px] lg:leading-5 2xl:text-base 2xl:leading-6">
              {point}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function StoryCard({ story }: { story: ImpactStory }) {
  const imageFirst = story.imagePosition === "top";

  return (
    <article className="flex h-full w-full min-w-0 flex-col items-start gap-5 overflow-hidden bg-white p-5 lg:gap-[11.85px] lg:border-[0.592593px] lg:border-[var(--border-impact-card)] lg:p-[14.2222px] lg:shadow-[0px_7.11111px_18.963px_-7.11111px_color-mix(in_srgb,var(--color-contact-dark)_7.84314%,transparent)] 2xl:gap-5 2xl:border 2xl:border-[var(--border-impact-card)] 2xl:p-6 2xl:shadow-[var(--shadow-impact-card)]">
      {imageFirst ? (
        <>
          <StoryImage story={story} fillRemaining={false} />
          <StoryContent story={story} />
        </>
      ) : (
        <>
          <StoryContent story={story} />
          <StoryImage story={story} fillRemaining />
        </>
      )}
    </article>
  );
}

export default function ImpactStories() {
  const { sectionNumber, sectionLabel, heading, stories } =
    impactStoriesContent;

  return (
    <section className="flex w-full flex-col items-start bg-[var(--color-contact-dark)] px-4 py-14 lg:gap-[28.44px] lg:px-[77.037px] lg:py-[77.037px] 2xl:gap-12 2xl:p-[130px]">
      <div className="flex w-full flex-col items-start gap-8 lg:gap-[18.96px] 2xl:gap-8">
        <div className="flex w-full flex-col items-start gap-8 lg:gap-[11.85px] 2xl:gap-5">
          <div className="flex w-full flex-row items-center gap-3 lg:gap-[9.48px] 2xl:gap-4">
            <span className="text-sm font-medium leading-[18px] text-white lg:text-[13px] lg:leading-4 lg:tracking-[1.77778px] 2xl:text-base 2xl:leading-5 2xl:tracking-[3px]">
              {sectionNumber}
            </span>

            <span className="h-px w-[60px] bg-white lg:w-[61.63px] 2xl:w-[104px]" />

            <span className="text-sm font-semibold leading-[18px] uppercase text-white lg:text-[13px] lg:font-medium lg:leading-4 lg:tracking-[1.77778px] 2xl:text-base 2xl:leading-5 2xl:tracking-[3px]">
              {sectionLabel}
            </span>
          </div>

          <h2 className="w-full text-[28px] font-semibold leading-[35px] text-white lg:text-[21.3333px] lg:font-bold lg:leading-[26px] 2xl:text-[36px] 2xl:leading-[44px]">
            {heading}
          </h2>
        </div>

        <div className="grid w-full grid-cols-1 items-stretch gap-6 lg:grid-cols-3">
          {stories.map((story) => (
            <StoryCard key={story.title} story={story} />
          ))}
        </div>
      </div>
    </section>
  );
}
