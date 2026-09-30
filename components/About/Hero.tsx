import Image from "next/image";
import { heroContent } from "@/mockData/about";

export default function AboutHero() {
  const { title, subtitle, image } = heroContent;

  return (
    <section className="relative h-[540px] w-full overflow-hidden lg:h-[414.81px] 2xl:h-[700px]">
      <Image
        src={image}
        alt={title}
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-[var(--color-contact-dark)]/85 lg:bg-[var(--color-contact-dark)]/80" />

      <div className="absolute left-5 top-[342px] flex w-[350px] max-w-[calc(100%-40px)] flex-col items-start gap-4 lg:left-[77.04px] lg:top-[calc(50%-103.85px/2+98.67px)] lg:w-[552.89px] lg:max-w-none lg:gap-[11.85px] 2xl:left-[130px] 2xl:top-[calc(50%-167px/2+166.5px)] 2xl:w-[933px] 2xl:gap-5">
        <h1 className="w-full text-[40px] font-bold leading-[48px] text-white lg:text-[47.4074px] lg:leading-[60px] 2xl:text-[80px] 2xl:leading-[101px]">
          {title}
        </h1>
        <p className="w-full text-[15px] font-medium leading-[22px] text-[var(--text-light-subtle)] lg:text-[13px] lg:leading-4 2xl:text-[18px] 2xl:leading-[23px]">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
