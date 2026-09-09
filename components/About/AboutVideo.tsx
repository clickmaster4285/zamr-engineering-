"use client";

import Image from "next/image";
import { aboutVideoContent } from "@/mockData/about";

export default function AboutVideo() {
  const { posterImage, posterAlt } = aboutVideoContent;

  return (
    <section className="relative w-full h-[533px]">
      <Image
        src={posterImage}
        alt={posterAlt}
        fill
        priority
        className="object-cover"
      />
    </section>
  );
}