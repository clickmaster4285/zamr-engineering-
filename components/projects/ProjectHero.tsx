"use client";
// components/ProjectHero.jsx
import Image from "next/image";

interface Props {
  image?: string;
  title: string;
  subtitle: string;
}

export default function ProjectHero({ image = "/images/image5.jpeg", title, subtitle }: Props) {
  return (
    <section className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
      <Image
        src={image}
        alt={title}
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-[#0A1628]/80" />

      <div className="absolute bottom-0 left-0 right-0 px-6 md:px-30 py-16 pb-12">
        <h1 className="text-white text-4xl md:text-6xl font-extrabold tracking-wider uppercase">
          {title}
        </h1>
        <p className="text-gray-200 text-sm md:text-base mt-3 italic font-light tracking-wide">
          &ldquo;{subtitle}&rdquo;
        </p>
      </div>
    </section>
  );
}