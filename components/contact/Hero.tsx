import Image from "next/image";
import { heroContent } from "@/mockData/contact";

export default function ContactHero() {
  const { title, subtitle, image } = heroContent;

  return (
    <section className="relative h-[364px] w-full overflow-hidden lg:h-[414.81px] 2xl:h-[700px]">
      <Image
        src={image}
        alt="ZAMR Engineering contact"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-[var(--overlay-image-hero)]" />

      <div className="absolute left-5 right-5 top-[141.48px] flex flex-col items-start justify-center gap-5 lg:left-[77.04px] lg:right-auto lg:top-[calc(50%-81.925px+92.44px)] lg:w-[540.44px] lg:gap-[11.85px] 2xl:left-[130px] 2xl:top-[calc(50%-134px+156px)] 2xl:w-[912px] 2xl:gap-5">
        <h1 className="w-full text-[34px] font-bold leading-[43px] text-white lg:text-[47.4074px] lg:leading-[60px] 2xl:text-[80px] 2xl:leading-[101px]">
          {title}
        </h1>
        <p className="w-full text-base font-normal leading-[1.5] text-[var(--text-light-subtle)] lg:text-[13px] lg:font-medium lg:leading-4 2xl:text-[18px] 2xl:leading-[23px]">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
