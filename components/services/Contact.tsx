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
    <section className="w-full bg-white px-6 py-16 lg:p-[130px]">
      <div className="mx-auto flex max-w-[1468px] flex-col gap-12 lg:flex-row lg:items-center lg:gap-[231px]">
        {/* Left column — 555px */}
        <div className="flex w-full flex-col gap-[50px] lg:w-[555px]">
          {/* Frame 120 */}
          <div className="flex w-full flex-col gap-[30px]">
            {/* Section label */}
            <div className="flex flex-row items-center gap-4">
              <span className="text-sm font-medium tracking-[3px] text-[var(--color-primary)] lg:text-base">
                03
              </span>
              <span className="h-px w-12 bg-black sm:w-[104px]" />
              <span className="text-sm font-medium tracking-[3px] uppercase text-[#333333] lg:text-base">
                ENQUIRE ABOUT THIS SERVICE
              </span>
            </div>

            {/* Heading */}
            <h2 className="w-full text-[36px] font-bold leading-[44px] text-[#333333] sm:text-[44px] sm:leading-[55px] lg:text-[56px] lg:leading-[71px]">
              Start Your
              <br />
              Civil Engineering
              <br />
              Project
            </h2>
          </div>

          {/* Frame 94 — contact body */}
          <div className="flex w-full flex-col justify-end gap-5">
            <p className="w-full text-base leading-snug text-[#333333] lg:text-[18px] lg:leading-[23px]">
              Tell us about your project or challenge. Our engineering team will
              review your enquiry and respond within 1&ndash;2 business days.
            </p>
            <p className="w-full text-[#333333] lg:text-[18px]">
              <span className="text-[#2B439B]"> Office:</span> Level 5, 123 Pitt Street, Sydney NSW 2000
            </p>
            <p className="w-full text-[#333333] lg:text-[18px]">
              <span className="text-[#2B439B]">Phone:</span>  +61 2 9000 0000
            </p>
            <p className="w-full text-[#333333] lg:text-[18px]">
              <span className="text-[#2B439B]">  Email:</span> enquiries@zamrengineering.com.au
            </p>
          </div>
        </div>

        {/* Right column — form (682px) */}
        <form
          onSubmit={handleSubmit}
          className="flex w-full flex-col gap-7 lg:w-[682px]"
        >
          {/* Name + Email row */}
          <div className="flex flex-col gap-7 sm:flex-row sm:gap-6">
            <div className="flex flex-1 flex-col gap-2">
              <label
                htmlFor="name"
                className="text-[12px] font-bold leading-[14px] tracking-[3px] text-[#9AA3B0]"
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
                className="w-full border-0 border-b bg-transparent py-[10px] text-[12px] leading-[15px] text-[#333333] placeholder-[rgba(105,114,129,0.5)] transition-colors focus:border-[rgba(34,65,158,0.18)] focus:outline-none"
                style={{ borderBottom: "1px solid rgba(34, 65, 158, 0.18)" }}
              />
            </div>
            <div className="flex flex-1 flex-col gap-2">
              <label
                htmlFor="email"
                className="text-[12px] font-bold leading-[14px] tracking-[3px] text-[#9AA3B0]"
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
                className="w-full border-0 border-b bg-transparent py-[10px] text-[12px] leading-[15px] text-[#333333] placeholder-[rgba(105,114,129,0.5)] transition-colors focus:border-[rgba(34,65,158,0.18)] focus:outline-none"
                style={{ borderBottom: "1px solid rgba(34, 65, 158, 0.18)" }}
              />
            </div>
          </div>

          {/* Subject */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="subject"
              className="text-[12px] font-bold leading-[14px] tracking-[3px] text-[#9AA3B0]"
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
              className="w-full border-0 border-b bg-transparent py-[10px] text-[12px] leading-[15px] text-[#333333] placeholder-[rgba(105,114,129,0.5)] transition-colors focus:border-[rgba(34,65,158,0.18)] focus:outline-none"
              style={{ borderBottom: "1px solid rgba(34, 65, 158, 0.18)" }}
            />
          </div>

          {/* Message */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="message"
              className="text-[12px] font-bold leading-[14px] tracking-[3px] text-[#9AA3B0]"
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
              className="w-full resize-none border-0 border-b bg-transparent py-[10px] text-[12px] leading-[15px] text-[#333333] placeholder-[rgba(105,114,129,0.5)] transition-colors focus:border-[rgba(34,65,158,0.18)] focus:outline-none"
              style={{ borderBottom: "1px solid rgba(34, 65, 158, 0.18)" }}
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="flex h-12 w-full items-center justify-center bg-[#1945A7] text-[16px] font-bold leading-5 tracking-[3px] text-white uppercase transition-all hover:bg-[var(--color-primary-hover)] active:scale-95"
          >
            SUBMIT ENQUIRY
          </button>
        </form>
      </div>
    </section>
  );
}
