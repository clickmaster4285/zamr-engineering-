"use client";
import Image from "next/image";

interface Props {
  image?: string;
  title: string;
  subtitle: string;
}

export default function ProjectHero({ image = "/images/image5.jpeg", title, subtitle }: Props) {
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

      <div className="absolute bottom-0 left-0 right-0 px-6 pb-10 sm:pb-12
                      lg:bottom-auto lg:left-[130px] lg:right-auto lg:w-[933px] lg:px-0 lg:pb-0
                      lg:top-1/2 lg:-translate-y-1/2 lg:translate-y-[94.5px]">
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
            &ldquo;{subtitle}&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}
