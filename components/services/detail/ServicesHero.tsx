import Image from "next/image";
import { defaultHeroImage } from "@/mockData/services";

interface Props {
  image?: string;
  title: string;
  subtitle: string;
}

export default function ServicesHero({
  image = defaultHeroImage,
  title,
  subtitle,
}: Props) {
  return (
    <section className="relative flex w-full min-h-[317px] flex-col overflow-hidden lg:block lg:h-[414.81px] lg:min-h-0 2xl:h-[700px]">
      <Image src={image} alt={title} fill priority className="object-cover" />

      <div className="absolute inset-0 bg-[var(--color-contact-dark)]/85 lg:bg-[var(--color-contact-dark)]/80" />

      {/* Mobile: in-flow so tall copy grows the hero */}
      <div className="relative z-10 ml-4 flex w-[calc(100%-32px)] max-w-[358px] flex-col items-start gap-6 pt-[100px] pb-8 lg:hidden">
        <h1 className="w-full text-[36px] font-bold leading-[1.15] text-white">
          {title}
        </h1>
        <p className="w-full text-sm font-normal leading-[1.6] text-[var(--text-light-subtle)]">
          {subtitle}
        </p>
      </div>

      {/* Tablet / desktop: fixed Figma height, wider text column */}
      <div className="absolute left-[77.04px] top-[calc(50%-135.85px/2+98.67px)] hidden w-[780px] max-w-[calc(100%-154px)] flex-col items-start gap-[11.85px] lg:flex 2xl:left-[130px] 2xl:top-[calc(50%-190px/2+166.5px)] 2xl:w-[1200px] 2xl:max-w-[calc(100%-260px)] 2xl:gap-5">
        <h1 className="w-full text-[47.4074px] font-bold leading-[60px] text-white 2xl:text-[80px] 2xl:leading-[101px]">
          {title}
        </h1>
        <p className="w-full text-[13px] font-medium leading-4 text-[var(--text-light-subtle)] 2xl:text-[18px] 2xl:leading-[23px]">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
