import Image from "next/image";
import { MapPin } from "lucide-react";
import { findUsContent } from "@/mockData/contact";

export default function FindUs() {
  const {
    heading,
    description,
    companyName,
    address,
    mapLabel,
    mapQuery,
    socialLinks,
    sectionNumber,
    sectionLabel,
  } = findUsContent;
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(mapQuery)}&output=embed`;

  return (
    <section className="w-full bg-[var(--bg-section)] px-5 py-12 lg:px-[77.037px] lg:py-[77.037px] 2xl:p-[130px]">
      <div className="flex w-full flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-[136.89px] 2xl:gap-[231px]">
        {/* Left — office details */}
        <div className="flex w-full flex-col items-start gap-6 lg:w-auto lg:flex-1 lg:gap-[17.78px] 2xl:gap-[30px]">
          <div className="flex w-full flex-col items-start gap-3 lg:gap-[11.85px] 2xl:gap-5">
            <div className="flex flex-row items-center gap-3">
              <span className="text-sm font-medium leading-[18px] text-[var(--color-blue-accent)]">
                {sectionNumber}
              </span>
              <span className="h-px w-10 bg-[var(--color-contact-dark)]" />
              <span className="text-[13px] font-medium leading-4 tracking-[1.78px] uppercase text-[var(--text-heading)]">
                {sectionLabel}
              </span>
            </div>

            <h2 className="w-full text-[28px] font-semibold leading-[35px] text-[var(--text-heading)] lg:text-[33.1852px] lg:font-bold lg:leading-[42px] 2xl:text-[56px] 2xl:leading-[71px]">
              {heading}
            </h2>

            <p className="w-full text-base font-normal leading-5 text-[var(--text-soft)] lg:text-[13px] lg:leading-4 2xl:text-lg 2xl:leading-[23px]">
              {description}
            </p>
          </div>

          <div className="flex w-full flex-col items-start gap-2 lg:gap-[4.74px] 2xl:gap-2">
            <p className="text-lg font-semibold leading-[23px] text-[var(--text-heading)] lg:text-[15px] lg:leading-[19px] 2xl:text-xl 2xl:leading-[25px]">
              {companyName}
            </p>
            <p className="w-full text-base font-normal leading-[160%] text-[var(--text-soft)] lg:text-[13px] 2xl:text-lg">
              {address}
            </p>
          </div>

          <div className="flex flex-row items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.alt}
                href={link.href}
                aria-label={link.alt}
                target="_blank"
                rel="noopener noreferrer"
                className="flex  shrink-0 items-center justify-center  transition-opacity hover:opacity-70 "
              >
                <Image
            src={link.src}
            alt={link.alt}
            width={40}
            height={40}
            className=" object-contain "
          />
              </a>
            ))}
          </div>
        </div>

        {/* Right — map */}
        <div className="relative h-[240px] w-full overflow-hidden rounded-none bg-[var(--color-contact-dark)] lg:h-[237.04px] lg:w-auto lg:flex-1 lg:rounded-[7.11111px] 2xl:h-[400px] 2xl:rounded-xl">
          <iframe
            src={mapSrc}
            title={mapLabel}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
            className="absolute inset-0 h-full w-full border-0 [filter:invert(90%)_hue-rotate(180deg)_grayscale(0.25)_contrast(0.9)]"
          />
          <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center gap-3 bg-black/70 lg:gap-[7.11px] 2xl:gap-3">
            <MapPin
              className="h-9 w-9 text-white lg:h-[21.33px] lg:w-[21.33px] 2xl:h-9 2xl:w-9"
              strokeWidth={2}
            />
            <span className="text-sm font-semibold leading-[18px] text-white lg:text-[13px] lg:leading-4 2xl:text-sm 2xl:leading-[18px]">
              {mapLabel}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
