"use client";
import Image from "next/image";
import { defaultHeroImage } from "@/mockData/services";

interface Props {
  image?: string;
  title: string;
  subtitle: string;
}

export default function ServicesHero({ image = defaultHeroImage, title, subtitle }: Props) {
  return (
    <section className="relative w-full h-[400px] overflow-hidden sm:h-[500px] lg:h-[700px]">
      <Image
        src={image}
        alt={title}
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-[var(--overlay-image-hero)]" />

      {/* Content wrapper — anchored to the bottom of the hero so that when
          the title wraps to a new line or the subtitle is long, the block
          grows upward and never clips past the bottom of the section. */}
      <div className="absolute inset-x-0 bottom-0 flex flex-col justify-end
                      px-6 pb-10 sm:pb-12
                      lg:left-[130px] lg:right-auto lg:w-[933px] lg:px-0 lg:pb-0
                      lg:bottom-[80px] lg:max-h-[calc(100%-160px)] lg:overflow-hidden">
        <div className="flex flex-col gap-3 sm:gap-4 lg:gap-5">
          <h1 className="font-bold uppercase text-white
                         text-[32px] leading-[38px]
                         sm:text-[48px] sm:leading-[56px]
                         lg:text-[80px] lg:leading-[101px]">
            {title}
          </h1>
          <p className="font-medium text-[var(--color-text-light-subtle)]
                        text-sm
                        sm:text-base
                        lg:text-lg lg:leading-[23px]">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
}
