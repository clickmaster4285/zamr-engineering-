"use client";

import { trustedContactContent } from "@/mockData/trusted-accredited";

function SocialIcon({ type }: { type: string }) {
  const className = "h-7 w-7";
  if (type === "instagram") {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="2" width="20" height="20" rx="5" stroke="#2344A1" strokeWidth="1.75" />
        <circle cx="12" cy="12" r="5" stroke="#2344A1" strokeWidth="1.75" />
        <circle cx="17.5" cy="6.5" r="1.5" fill="#2344A1" />
      </svg>
    );
  }
  if (type === "linkedin") {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="2" width="20" height="20" rx="5" stroke="#2344A1" strokeWidth="1.75" />
        <path d="M8 11V16" stroke="#2344A1" strokeWidth="1.75" strokeLinecap="round" />
        <path d="M8 8V8.01" stroke="#2344A1" strokeWidth="1.75" strokeLinecap="round" />
        <path d="M12 16V13" stroke="#2344A1" strokeWidth="1.75" strokeLinecap="round" />
        <path d="M16 16V13C16 11.3431 14.6569 10 13 10C11.3431 10 10 11.3431 10 13" stroke="#2344A1" strokeWidth="1.75" strokeLinecap="round" />
      </svg>
    );
  }
  if (type === "global") {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" fill="#2344A1" />
      </svg>
    );
  }
  if (type === "email") {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="4" width="20" height="16" rx="2" fill="#2344A1" />
        <path d="M22 6L12 13L2 6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  return null;
}

export default function TrustedContact() {
  const { sectionNumber, sectionLabel, heading, companyName, address1, address2, emails, socialLinks } =
    trustedContactContent;

  return (
    <section className="w-full bg-white px-6 py-16 lg:p-[130px]">
      <div className="flex w-full flex-col items-start gap-12 lg:flex-row lg:items-center lg:gap-[231px]">
        {/* Left column — Contact info */}
        <div className="flex w-full flex-col items-start gap-[50px] lg:w-[555px]">
          {/* Header */}
          <div className="flex w-full flex-col items-start gap-6 sm:gap-8 lg:gap-[30px]">
            <div className="flex flex-row items-center gap-3 sm:gap-4">
              <span className="text-sm font-medium tracking-[3px] text-[var(--color-primary)] lg:text-base">
                {sectionNumber}
              </span>
              <span className="h-px w-[104px] bg-black" />
              <span className="text-sm font-medium tracking-[3px] uppercase text-[#333333] lg:text-base">
                {sectionLabel}
              </span>
            </div>

            <h2 className="w-full text-[28px] font-bold leading-[36px] text-[#333333] sm:text-[36px] sm:leading-[44px] lg:text-[56px] lg:leading-[71px]">
              {heading}
            </h2>
          </div>

          {/* Contact details */}
          <div className="flex w-full flex-col items-start gap-5">
            <p className="w-full text-sm leading-[23px] text-[#2344A1] sm:text-base lg:text-lg">
              {companyName}
            </p>
            <p className="w-full text-sm leading-[23px] text-[#2344A1] sm:text-base lg:text-lg">
              {address1}
            </p>
            <p className="w-full text-sm leading-[23px] text-[#2344A1] sm:text-base lg:text-lg">
              {address2}
            </p>
            {emails.map((email) => (
              <p
                key={email.address}
                className="w-full text-sm leading-[23px] text-[#2344A1] sm:text-base lg:text-lg"
              >
                {email.label}: {email.address}
              </p>
            ))}

            {/* Social links */}
            <div className="flex flex-row items-center gap-6">
              {socialLinks.map((link) => (
                <a
                  key={link.icon}
                  href={link.href}
                  className="transition-opacity hover:opacity-80"
                >
                  <SocialIcon type={link.icon} />
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
              <label className="text-[12px] font-bold leading-[14px] tracking-[3px] text-[#9AA3B0] uppercase">
                NAME
              </label>
              <input
                type="text"
                placeholder="John Smith"
                className="w-full border-0 border-b border-[var(--border-input)] py-[10px] text-[12px] font-normal leading-[15px] text-[var(--text-paragraph)] outline-none placeholder:text-[rgba(105,114,129,0.5)]"
              />
            </div>
            <div className="flex w-full flex-col gap-2 sm:w-[calc(50%-12px)]">
              <label className="text-[12px] font-bold leading-[14px] tracking-[3px] text-[#9AA3B0] uppercase">
                EMAIL
              </label>
              <input
                type="email"
                placeholder="you@company.com.au"
                className="w-full border-0 border-b border-[var(--border-input)] py-[10px] text-[12px] font-normal leading-[15px] text-[var(--text-paragraph)] outline-none placeholder:text-[rgba(105,114,129,0.5)]"
              />
            </div>
          </div>

          {/* Subject */}
          <div className="flex w-full flex-col gap-2">
            <label className="text-[12px] font-bold leading-[14px] tracking-[3px] text-[#9AA3B0] uppercase">
              SUBJECT
            </label>
            <input
              type="text"
              placeholder="Project enquiry"
              className="w-full border-0 border-b border-[var(--border-input)] py-[10px] text-[12px] font-normal leading-[15px] text-[var(--text-paragraph)] outline-none placeholder:text-[rgba(105,114,129,0.5)]"
            />
          </div>

          {/* Message */}
          <div className="flex w-full flex-col gap-2">
            <label className="text-[12px] font-bold leading-[14px] tracking-[3px] text-[#9AA3B0] uppercase">
              MESSAGE
            </label>
            <textarea
              placeholder="Tell us about your project..."
              rows={5}
              className="w-full resize-none border-0 border-b border-[var(--border-input)] py-[10px] text-[12px] font-normal leading-[15px] text-[var(--text-paragraph)] outline-none placeholder:text-[rgba(105,114,129,0.5)]"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="flex w-full items-center justify-center bg-[var(--color-primary)] px-8 py-[14px] text-sm font-bold tracking-[3px] text-white transition-colors hover:bg-[var(--color-primary-hover)] sm:text-base sm:px-[255px]"
          >
            SUBMIT ENQUIRY
          </button>
        </div>
      </div>
    </section>
  );
}
