"use client";

import Image from "next/image";
import { trustedContactContent } from "@/mockData/trusted-accredited";

const iconMap: Record<string, string> = {
  instagram: "/icons/mynaui_instagram.svg",
  linkedin: "/icons/mynaui_linkedin.svg",
  global: "/icons/et_global.svg",
  email: "/icons/Vector.svg",
};

function splitKeyValue(text: string): { key: string; value: string } {
  const colonIndex = text.indexOf(": ");
  if (colonIndex === -1) return { key: "", value: text };
  return {
    key: text.substring(0, colonIndex + 1),
    value: text.substring(colonIndex + 2),
  };
}

export default function TrustedContact() {
  const { sectionNumber, sectionLabel, heading, companyName, address1, address2, emails, socialLinks } =
    trustedContactContent;

  const contactLines = [companyName, address1, address2];

  return (
    <section className="w-full bg-white px-6 py-16 sm:px-10 sm:py-20 lg:p-[130px]">
      <div className="flex w-full flex-col items-start gap-12 lg:flex-row lg:items-center lg:gap-[231px]">
        {/* Left column — Contact info */}
        <div className="flex w-full flex-col items-start gap-10 lg:w-[600px] lg:gap-[50px]">
          {/* Header */}
          <div className="flex w-full flex-col items-start gap-6 sm:gap-8 lg:gap-[30px]">
            <div className="flex flex-row items-center gap-3 sm:gap-4">
              <span className="text-sm font-medium tracking-[3px] text-[var(--color-primary)] lg:text-base">
                {sectionNumber}
              </span>
              <span className="hidden h-px w-[104px] bg-[var(--text-dark)] sm:block" />
              <span className="text-sm font-medium tracking-[3px] uppercase text-[var(--text-dark)] lg:text-base">
                {sectionLabel}
              </span>
            </div>

            <h2 className="w-full text-[28px] font-bold leading-[36px] text-[var(--text-dark)] sm:text-[36px] sm:leading-[44px] lg:text-[56px] lg:leading-[71px]">
              {heading}
            </h2>
          </div>

          {/* Contact details */}
          <div className="flex w-full flex-col items-start gap-4">
            {contactLines.map((line) => {
              const { key, value } = splitKeyValue(line);
              return (
                <p key={line} className="w-full text-sm leading-[23px] sm:text-base lg:text-[18px] lg:leading-[25px]">
                  <span className="font-medium text-[var(--color-blue-label)]">{key} </span>
                  <span className="text-[var(--text-dark)]">{value}</span>
                </p>
              );
            })}
            {emails.map((email) => (
              <p key={email.address} className="w-full text-sm leading-[23px] sm:text-base lg:text-[18px] lg:leading-[25px]">
                <span className="font-medium text-[var(--color-blue-label)]">{email.label}: </span>
                <span className="text-[var(--text-dark)]">{email.address}</span>
              </p>
            ))}

            {/* Social links */}
            <div className="flex flex-row items-center gap-6 pt-2">
              {socialLinks.map((link) => (
                <a
                  key={link.icon}
                  href={link.href}
                  className="transition-opacity hover:opacity-80"
                >
                  <Image
                    src={iconMap[link.icon] || ""}
                    alt={link.icon}
                    width={28}
                    height={28}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right column — Form */}
        <div className="flex w-full flex-col gap-7 lg:w-[682px]">
          {/* Name & Email row */}
          <div className="flex w-full flex-col gap-7 sm:flex-row sm:gap-6">
            <div className="flex w-full flex-col gap-2 sm:w-[calc(50%-12px)]">
              <label className="text-xs font-bold tracking-[3px] text-[var(--text-label)] uppercase">
                NAME
              </label>
              <input
                type="text"
                placeholder="John Smith"
                className="w-full border-0 border-b border-[var(--border-input)] py-[10px] text-xs text-[var(--text-paragraph)] outline-none placeholder:text-[var(--text-label)]"
              />
            </div>
            <div className="flex w-full flex-col gap-2 sm:w-[calc(50%-12px)]">
              <label className="text-xs font-bold tracking-[3px] text-[var(--text-label)] uppercase">
                EMAIL
              </label>
              <input
                type="email"
                placeholder="you@company.com.au"
                className="w-full border-0 border-b border-[var(--border-input)] py-[10px] text-xs text-[var(--text-paragraph)] outline-none placeholder:text-[var(--text-label)]"
              />
            </div>
          </div>

          {/* Subject */}
          <div className="flex w-full flex-col gap-2">
            <label className="text-xs font-bold tracking-[3px] text-[var(--text-label)] uppercase">
              SUBJECT
            </label>
            <input
              type="text"
              placeholder="Project enquiry"
              className="w-full border-0 border-b border-[var(--border-input)] py-[10px] text-xs text-[var(--text-paragraph)] outline-none placeholder:text-[var(--text-label)]"
            />
          </div>

          {/* Message */}
          <div className="flex w-full flex-col gap-2">
            <label className="text-xs font-bold tracking-[3px] text-[var(--text-label)] uppercase">
              MESSAGE
            </label>
            <textarea
              placeholder="Tell us about your project..."
              rows={5}
              className="w-full resize-none border-0 border-b border-[var(--border-input)] py-[10px] text-xs text-[var(--text-paragraph)] outline-none placeholder:text-[var(--text-label)]"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="flex w-full cursor-pointer items-center justify-center border border-[var(--color-primary)] bg-[var(--bg-light)] px-8 py-[14px] text-sm font-bold tracking-[3px] text-[var(--color-primary)] transition-all duration-300 hover:bg-[var(--color-primary)] hover:text-white active:scale-[0.98] sm:text-base"
          >
            SUBMIT ENQUIRY
          </button>
        </div>
      </div>
    </section>
  );
}
