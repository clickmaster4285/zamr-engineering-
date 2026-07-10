"use client";

import React, { useState, ChangeEvent } from "react";
import Image from "next/image";
import { contactInfo } from "@/mockData/landing";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Enquiry submitted:", form);
  };

  return (
    <section className="w-full bg-[var(--bg-light)] px-4 py-16 sm:px-6 sm:py-20 md:py-24 lg:px-32 lg:py-32.5">
      <div>
        <div className="grid grid-cols-1 gap-12 sm:gap-16 lg:grid-cols-[1fr_1fr] lg:gap-32">
          {/* Left column – Contact info */}
          <div>
            <div className="mb-6 flex flex-wrap items-center gap-3 sm:mb-8 sm:gap-4">
              <span className="text-sm font-medium tracking-[0.2em] text-[var(--color-primary)] sm:text-base">
                05
              </span>
              <span className="hidden h-px w-16 sm:block sm:w-24 bg-[var(--text-dark)]" />
              <span className="text-sm font-medium tracking-[0.2em] text-[var(--text-dark)] sm:text-base">
                CONTACT
              </span>
            </div>
            <h2 className="mb-8 text-[28px] font-bold leading-[36px] text-[var(--text-dark)] sm:mb-12 sm:text-[36px] sm:leading-[44px] md:text-[44px] md:leading-[52px] lg:text-[56px] lg:leading-[71px]">
              Let&apos;s Build Something
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>Exceptional.
            </h2>

            <div className="space-y-4 text-sm text-[var(--text-dark)] sm:space-y-5 sm:text-base lg:text-lg">
              <p>
                <span className="text-[var(--color-primary)]">Company Name: </span> {contactInfo.companyName}
              </p>
              <p>
                <span className="text-[var(--color-primary)]"> Address 1:</span> {contactInfo.address1}
              </p>
              <p>
                <span className="text-[var(--color-primary)]"> Address 2:</span> {contactInfo.address2}
              </p>
              {contactInfo.emails.map((email, i) => (
                <p key={i}>
                  <span className={i === 0 ? "text-[var(--color-primary)]" : "text-[var(--color-blue-label)]"}>
                    {email.label}:{" "}
                  </span>
                  <a
                    href={`mailto:${email.address}`}
                    className="break-all transition-all hover:underline sm:break-normal"
                  >
                    {email.address}
                  </a>
                </p>
              ))}
            </div>

            <div className="mt-5 flex items-center gap-5 sm:mt-[20px] sm:gap-6">
              {contactInfo.socialLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.href || undefined}
                  aria-label={link.alt}
                  className="flex h-6 w-6 items-center justify-center transition-all hover:opacity-70 sm:h-7 sm:w-7"
                >
                  <Image src={link.src} alt={link.alt} width={28} height={28} />
                </a>
              ))}
            </div>
          </div>

          {/* Right column – Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-6 sm:gap-7">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8">
              <div>
                <label htmlFor="name" className="mb-2 block text-[10px] font-bold tracking-[0.3em] text-[var(--color-text-label)] sm:text-xs">
                  NAME
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="John Smith"
                  className="w-full border-0 border-b border-[var(--border-input)] bg-transparent pb-3 text-sm text-[var(--text-dark)] placeholder:text-[var(--color-text-label)]/50 transition-colors focus:border-[var(--color-primary)] focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-[10px] font-bold tracking-[0.3em] text-[var(--color-text-label)] sm:text-xs">
                  EMAIL
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@company.com.au"
                  className="w-full border-0 border-b border-[var(--border-input)] bg-transparent pb-3 text-sm text-[var(--text-dark)] placeholder:text-[var(--color-text-label)]/50 transition-colors focus:border-[var(--color-primary)] focus:outline-none"
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="mb-2 block text-[10px] font-bold tracking-[0.3em] text-[var(--color-text-label)] sm:text-xs">
                SUBJECT
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                value={form.subject}
                onChange={handleChange}
                placeholder="Project enquiry"
                className="w-full border-0 border-b border-[var(--border-input)] bg-transparent pb-3 text-sm text-[var(--text-dark)] placeholder:text-[var(--color-text-label)]/50 transition-colors focus:border-[var(--color-primary)] focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="message" className="mb-2 block text-[10px] font-bold tracking-[0.3em] text-[var(--color-text-label)] sm:text-xs">
                MESSAGE
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us about your project..."
                className="w-full resize-none border-0 border-b border-[var(--border-input)] bg-transparent pb-3 text-sm text-[var(--text-dark)] placeholder:text-[var(--color-text-label)]/50 transition-colors focus:border-[var(--color-primary)] focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="mt-2 w-full hover:bg-[var(--color-primary)] text-[var(--color-primary)] hover:text-white border border-[var(--color-primary)]  py-4 text-sm font-bold tracking-[0.3em] transition-all bg-[var(--bg-light)] text-[var(--color-primary) sm:mt-4 sm:text-base"
            >
              SUBMIT ENQUIRY
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
