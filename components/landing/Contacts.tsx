"use client";

import React, { useState, ChangeEvent } from "react";
import Image from "next/image";

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
    <section className="w-full bg-[var(--bg-light)] px-6 py-32.5 lg:px-32">
      <div>
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_1fr] lg:gap-32">
          {/* Left column – Contact info */}
          <div>
            <div className="mb-8 flex items-center gap-4">
              <span className="text-base font-medium tracking-[0.2em] text-[var(--color-primary)]">
                05
              </span>
              <span className="h-px w-24 bg-[var(--text-dark)]" />
              <span className="text-base font-medium tracking-[0.2em] text-[var(--text-dark)]">
                CONTACT
              </span>
            </div>
            <h2 className="mb-12 text-[56px] font-bold leading-[71px] text-[var(--text-dark)]">
              Let&apos;s Build Something
              <br />
              Exceptional.
            </h2>

            <div className="space-y-5 text-lg text-[var(--text-dark)]">
              <p>
                <span className="text-[var(--color-primary)]">Company Name: </span> ZAMR Engineering Pty Ltd
              </p>
              <p>
                <span className="text-[var(--color-primary)]"> Address 1:</span> 30 Smith Street Wentworthville NSW, 2145
              </p>
              <p>
                <span className="text-[var(--color-primary)]"> Address 2:</span> L14, 3 Parramatta Square, 153 Macquarie St, Parramatta, NSW 2150
              </p>
              <p>
               <span className="text-[var(--color-primary)]">  Email:{" "}</span>
                <a
                  href="mailto:admin@zamrengineering.com.au"
                  className="transition-all hover:underline"
                >
                  admin@zamrengineering.com.au
                </a>
              </p>
              <p>
                <span className="text-[var(--color-blue-label)]"> Email:{" "}</span>
                <a
                  href="mailto:khalid.javed@zamrengineering.com.au"
                  className="transition-all hover:underline"
                >
                  khalid.javed@zamrengineering.com.au
                </a>
              </p>
            </div>

            <div className="mt-[20px] flex items-center gap-6">
              <button type="button" aria-label="Instagram" className="flex h-7 w-7 items-center justify-center transition-all hover:opacity-70">
                <Image src="/icons/mynaui_instagram.svg" alt="Instagram" width={28} height={28} />
              </button>
              <button type="button" aria-label="LinkedIn" className="flex h-7 w-7 items-center justify-center transition-all hover:opacity-70">
                <Image src="/icons/mynaui_linkedin.svg" alt="LinkedIn" width={28} height={28} />
              </button>
              <button type="button" aria-label="Website" className="flex h-7 w-7 items-center justify-center transition-all hover:opacity-70">
                <Image src="/icons/et_global.svg" alt="Website" width={28} height={28} />
              </button>
              <a href="mailto:admin@zamrengineering.com.au" aria-label="Email" className="flex h-7 w-7 items-center justify-center transition-all hover:opacity-70">
                <Image src="/icons/Vector.svg" alt="Email" width={25} height={19} />
              </a>
            </div>
          </div>

          {/* Right column – Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-7">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block text-xs font-bold tracking-[0.3em] text-[var(--color-text-label)]">
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
                <label htmlFor="email" className="mb-2 block text-xs font-bold tracking-[0.3em] text-[var(--color-text-label)]">
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
              <label htmlFor="subject" className="mb-2 block text-xs font-bold tracking-[0.3em] text-[var(--color-text-label)]">
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
              <label htmlFor="message" className="mb-2 block text-xs font-bold tracking-[0.3em] text-[var(--color-text-label)]">
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
              className="mt-4 w-full bg-[var(--color-primary)] py-4 text-base font-bold tracking-[0.3em] text-white transition-all hover:bg-[var(--color-primary-hover)] active:scale-[0.98]"
            >
              SUBMIT ENQUIRY
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
