import Image from "next/image";
import { MapPin } from "lucide-react";
import { findUsContent } from "@/mockData/contact";

export default function FindUs() {
  const { heading, description, companyName, address, mapLabel, mapQuery, socialLinks } =
    findUsContent;
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(mapQuery)}&output=embed`;

  return (
    <section className="w-full bg-[var(--bg-section)] px-6 py-16 sm:px-10 sm:py-20 lg:p-[130px]">
      <div className="flex w-full flex-col items-center justify-between gap-12 lg:flex-row lg:items-center ">
        {/* Left — office details */}
        <div className="flex w-full flex-col items-start gap-[30px] lg:flex-1">
          <div className="flex w-full flex-col items-start gap-5">
            <h2 className="w-full text-[28px] font-bold leading-[36px] text-[var(--text-dark)] sm:text-[36px] sm:leading-[44px] lg:text-[56px] lg:leading-[71px]">
              {heading}
            </h2>
            <p className="w-full text-[16px] leading-[23px] text-[var(--text-soft)] sm:text-[18px]">
              {description}
            </p>
          </div>

          <div className="flex w-full flex-col items-start gap-2">
            <p className="text-[20px] font-semibold leading-[25px] text-[var(--text-dark)]">
              {companyName}
            </p>
            <p className="text-[16px] leading-[29px] text-[var(--text-soft)] sm:text-[18px]">
              {address}
            </p>
          </div>

          <div className="flex items-center gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.alt}
                href={link.href}
                aria-label={link.alt}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-7 w-7 items-center justify-center transition-opacity hover:opacity-70"
              >
                <Image src={link.src} alt={link.alt} width={28} height={28} />
              </a>
            ))}
          </div>
        </div>

        {/* Right — map */}
        <div className="relative h-[300px] w-full overflow-hidden rounded-[12px] bg-[var(--color-contact-dark)] sm:h-[350px] lg:h-[400px] lg:flex-1">
          <iframe
            src={mapSrc}
            title={mapLabel}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
            className="absolute inset-0 h-full w-full border-0 [filter:invert(90%)_hue-rotate(180deg)_grayscale(0.25)_contrast(0.9)]"
          />
          <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center gap-3 bg-black/30">
            <MapPin size={36} strokeWidth={2} className="text-white" />
            <span className="text-[14px] font-semibold leading-[18px] text-white">{mapLabel}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
