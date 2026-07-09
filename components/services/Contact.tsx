"use client";

import React, { useState, ChangeEvent } from "react";

interface Props {
  number?: string;
  serviceTitle?: string;
}

export default function Contact({ number = "06", serviceTitle = "Civil Engineering" }: Props) {
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
    <section className="w-full bg-white px-6 py-16 lg:p-[130px]">
      <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-[231px]">
        <div className="flex w-full flex-col gap-[50px] lg:w-[555px]">
          <div className="flex w-full flex-col gap-[30px]">
            <div className="flex flex-row items-center gap-4">
              <span className="text-[16px] font-medium leading-5 tracking-[3px] text-[var(--color-blue-accent)]">
                {number}
              </span>
              <span className="h-px w-[104px] bg-[var(--text-dark)]" />
              <span className="text-[16px] font-medium leading-5 tracking-[3px] uppercase text-[var(--text-dark)]">
                ENQUIRE ABOUT THIS SERVICE
              </span>
            </div>

            <h2 className="w-full text-[32px] font-bold leading-[40px] text-[var(--text-dark)] sm:text-[44px] sm:leading-[55px] lg:text-[56px] lg:leading-[71px]">
              Have a project like this one?
            </h2>
          </div>

          <div className="flex w-full flex-col text-base justify-end gap-5">
            <p className="w-full text-[18px] leading-[23px]">
              Tell us about your project or challenge. Our engineering team will
              review your enquiry and respond within 1&ndash;2 business days.
            </p>
            <p className="w-full text-[18px] leading-[23px] ">
              <span className="text-primary">Office:</span>  Level 5, 123 Pitt Street, Sydney NSW 2000
            </p>
            <p className="w-full text-[18px] leading-[23px] ">
              <span className="text-primary">Phone:</span> +61 2 9000 0000
            </p>
            <p className="w-full text-[18px] leading-[23px] ">
              <span className="text-primary">Email:</span> enquiries@zamrengineering.com.au
            </p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex w-full flex-col gap-7 lg:w-[682px]"
        >
          <div className="flex flex-col gap-7 sm:flex-row sm:gap-6">
            <div className="flex flex-1 flex-col gap-2">
              <label
                htmlFor="name"
                className="text-[12px] font-bold leading-[14px] tracking-[3px] text-[var(--color-text-label)]"
              >
                NAME
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                placeholder="John Smith"
                className="w-full border-0 border-b bg-transparent py-[10px] text-[12px] leading-[15px] text-[var(--text-dark)] placeholder-[var(--color-text-soft)]/50 transition-colors focus:outline-none"
                style={{ borderBottom: "1px solid var(--color-border-input)" }}
              />
            </div>
            <div className="flex flex-1 flex-col gap-2">
              <label
                htmlFor="email"
                className="text-[12px] font-bold leading-[14px] tracking-[3px] text-[var(--color-text-label)]"
              >
                EMAIL
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@company.com.au"
                className="w-full border-0 border-b bg-transparent py-[10px] text-[12px] leading-[15px] text-[var(--text-dark)] placeholder-[var(--color-text-soft)]/50 transition-colors focus:outline-none"
                style={{ borderBottom: "1px solid var(--color-border-input)" }}
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="subject"
              className="text-[12px] font-bold leading-[14px] tracking-[3px] text-[var(--color-text-label)]"
            >
              SUBJECT
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              value={form.subject}
              onChange={handleChange}
              placeholder="Project enquiry"
              className="w-full border-0 border-b bg-transparent py-[10px] text-[12px] leading-[15px] text-[var(--text-dark)] placeholder-[var(--color-text-soft)]/50 transition-colors focus:outline-none"
              style={{ borderBottom: "1px solid var(--color-border-input)" }}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="message"
              className="text-[12px] font-bold leading-[14px] tracking-[3px] text-[var(--color-text-label)]"
            >
              PROJECT DETAILS
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={form.message}
              onChange={handleChange}
              placeholder="Tell us about your project..."
              className="w-full resize-none border-0 border-b bg-transparent py-[10px] text-[12px] leading-[15px] text-[var(--text-dark)] placeholder-[var(--color-text-soft)]/50 transition-colors focus:outline-none"
              style={{ borderBottom: "1px solid var(--color-border-input)" }}
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
    </section>
  );
}
