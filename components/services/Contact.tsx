"use client";

import React, { useState, ChangeEvent } from "react";

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
    <section className="w-full bg-[#F6F8FC] px-6 py-16 sm:px-10 lg:px-30 lg:py-16">
      {/* Inner wrapper with ml-12 to align under logo */}
      <div className="">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_1fr] lg:gap-12">
          {/* Left column – Contact info */}
          <div>
            <div className="mb-6 flex items-center gap-3">
              {/* Updated to 06 */}
              <span className="text-sm font-bold tracking-[0.1em] text-[var(--color-primary)]">06</span>
              <span className="h-px w-12 bg-[#B7B7B7]" />
              {/* Updated label */}
              <span className="text-sm tracking-[0.25em] text-[#4C4C4C]">ENQUIRE ABOUT THIS SERVICE</span>
            </div>
            {/* Updated heading */}
            <h2 className="mb-10 text-sm font-bold leading-tight text-[var(--text-dark)] sm:text-[50px]">
              Start Your<br />Civil Engineering<br />Project
            </h2>

            {/* Descriptive text and contact details */}
            <div className="space-y-5 text-md text-[#4C4C4C]">
              <p>
                Tell us about your project or challenge. Our engineering team will
                review your enquiry and respond within 1-2 business days.
              </p>
              <p>
                <span className="font-semibold text-[var(--color-primary)]">Office:</span> Level 5, 123 Pitt Street, Sydney NSW 2000
              </p>
              <p>
                <span className="font-semibold text-[var(--color-primary)]">Phone:</span> +612 9000 0000
              </p>
              <p>
                <span className="font-semibold text-[var(--color-primary)]">Email:</span>{" "}
                <a
                  href="mailto:enquiries@zamrengineering.com.au"
                  className="transition-all hover:underline"
                >
                  enquiries@zamrengineering.com.au
                </a>
              </p>
            </div>

            {/* Social icons removed as requested */}
          </div>

          {/* Right column – Form (unchanged) */}
          <form onSubmit={handleSubmit} className="flex flex-col">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-bold tracking-[0.15em] text-gray-400">NAME</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="John Smith"
                  className="w-full border-0 border-b border-[#D5D9E3] bg-transparent pb-2 text-sm text-[var(--text-dark)] placeholder:text-[#B0B4BE] transition-colors focus:border-[var(--color-primary)] focus:outline-none hover:border-[var(--color-primary)]/50"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-bold tracking-[0.15em] text-gray-400">EMAIL</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@company.com.au"
                  className="w-full border-0 border-b border-[#D5D9E3] bg-transparent pb-2 text-sm text-[var(--text-dark)] placeholder:text-[#B0B4BE] transition-colors focus:border-[var(--color-primary)] focus:outline-none hover:border-[var(--color-primary)]/50"
                />
              </div>
            </div>
            <div className="mt-8">
              <label htmlFor="subject" className="mb-2 block text-sm font-bold tracking-[0.15em] text-gray-400">SUBJECT</label>
              <input
                id="subject"
                name="subject"
                type="text"
                value={form.subject}
                onChange={handleChange}
                placeholder="Project enquiry"
                className="w-full border-0 border-b border-[#D5D9E3] bg-transparent pb-2 text-sm text-[#333333] placeholder:text-[#B0B4BE] transition-colors focus:border-[#405BAD] focus:outline-none hover:border-[#405BAD]/50"
              />
            </div>
            <div className="mt-8">
              <label htmlFor="message" className="mb-2 block text-sm font-bold tracking-[0.15em] text-gray-400">MESSAGE</label>
              <textarea
                id="message"
                name="message"
                rows={3}
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us about your project..."
                className="w-full resize-none border-0 border-b border-[#D5D9E3] bg-transparent pb-2 text-sm text-[#333333] placeholder:text-[#B0B4BE] transition-colors focus:border-[#405BAD] focus:outline-none hover:border-[#405BAD]/50"
              />
            </div>
            <button
              type="submit"
              className="mt-10 w-full bg-[var(--color-primary)] py-4 text-sm font-bold tracking-[0.2em] text-white transition-all hover:bg-[var(--color-primary-hover)] hover:shadow-lg active:scale-95"
            >
              SUBMIT ENQUIRY
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}