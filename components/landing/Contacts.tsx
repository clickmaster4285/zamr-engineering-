"use client";

import React, { useState, ChangeEvent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGlobe, faEnvelope } from "@fortawesome/free-solid-svg-icons";

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
              {/* Exact match: 16px (like Services' section number) */}
              <span className="text-sm font-bold tracking-[0.1em] text-[#405BAD]">05</span>
              <span className="h-px w-12 bg-[#B7B7B7]" />
              {/* Exact match: 14px (like Services' label) */}
              <span className="text-sm tracking-[0.25em] text-[#4C4C4C]">CONTACT</span>
            </div>
            {/* Exact match: 44/50px (like Services' heading) */}
            <h2 className="mb-10 text-sm font-bold leading-tight text-[#333333] sm:text-[50px]">
              Let&apos;s Build Something<br />Exceptional.
            </h2>

            {/* Exact match: 17px (like Services' description mobile) */}
            <div className="space-y-5 text-md text-[#4C4C4C]">
              <p className="transition-colors hover:text-[#2544A1]">
                <span className="font-semibold text-[#405BAD]">Company Name:</span> ZAMR Engineering Pty Ltd
              </p>
              <p className="transition-colors hover:text-[#2544A1]">
                <span className="font-semibold text-[#405BAD]">Address 1:</span> 30 Smith Street Wentworthville NSW, 2145
              </p>
              <p className="transition-colors hover:text-[#2544A1]">
                <span className="font-semibold text-[#405BAD]">Address 2:</span> L14, 3 Parramatta Square, 153 Macquarie St, Parramatta, NSW 2150
              </p>
              <p className="transition-colors hover:text-[#2544A1]">
                <span className="font-semibold text-[#405BAD]">Email:</span>{" "}
                <a
                  href="mailto:admin@zamrengineering.com.au"
                  className="transition-all hover:underline hover:text-[#2544A1]"
                >
                  admin@zamrengineering.com.au
                </a>
              </p>
              <p className="transition-colors hover:text-[#2544A1]">
                <span className="font-semibold text-[#405BAD]">Email:</span>{" "}
                <a
                  href="mailto:khalid.javed@zamrengineering.com.au"
                  className="transition-all hover:underline hover:text-[#2544A1]"
                >
                  khalid.javed@zamrengineering.com.au
                </a>
              </p>
            </div>

            <div className="mt-8 flex items-center gap-4">
  <a href="#" aria-label="Instagram" className="flex h-7 w-7 items-center justify-center rounded-full border border-[#405BAD]/30 text-[#405BAD] transition-all hover:border-[#2544A1] hover:text-[#2544A1] hover:shadow-md">
    <FontAwesomeIcon icon={faInstagram} size="lg" />
  </a>
  <a href="#" aria-label="LinkedIn" className="flex h-7 w-7 items-center justify-center rounded-full border border-[#405BAD]/30 text-[#405BAD] transition-all hover:border-[#2544A1] hover:text-[#2544A1] hover:shadow-md">
    <FontAwesomeIcon icon={faLinkedin} size="lg" />
  </a>
  <a href="#" aria-label="Website" className="flex h-7 w-7 items-center justify-center rounded-full border border-[#405BAD]/30 text-[#405BAD] transition-all hover:border-[#2544A1] hover:text-[#2544A1] hover:shadow-md">
    <FontAwesomeIcon icon={faGlobe} size="lg" />
  </a>
  <a href="mailto:admin@zamrengineering.com.au" aria-label="Email" className="flex h-7 w-7 items-center justify-center rounded-full border border-[#405BAD]/30 text-[#405BAD] transition-all hover:border-[#2544A1] hover:text-[#2544A1] hover:shadow-md">
    <FontAwesomeIcon icon={faEnvelope} size="lg" />
  </a>
</div>
          </div>

          {/* Right column – Form */}
          <form onSubmit={handleSubmit} className="flex flex-col">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              <div>
                {/* Exact match: 14px (like Services' label) */}
                <label htmlFor="name" className="mb-2 block text-sm font-bold tracking-[0.15em] text-gray-400">NAME</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="John Smith"
                  className="w-full border-0 border-b border-[#D5D9E3] bg-transparent pb-2 text-sm text-[#333333] placeholder:text-[#B0B4BE] transition-colors focus:border-[#405BAD] focus:outline-none hover:border-[#405BAD]/50"
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
                  className="w-full border-0 border-b border-[#D5D9E3] bg-transparent pb-2 text-sm text-[#333333] placeholder:text-[#B0B4BE] transition-colors focus:border-[#405BAD] focus:outline-none hover:border-[#405BAD]/50"
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
            {/* Exact match: 15px (like Services' CTA) */}
            <button
              type="submit"
              className="mt-10 w-full bg-[#2544A1] py-4 text-sm font-bold tracking-[0.2em] text-white transition-all hover:bg-[#1c3480] hover:shadow-lg active:scale-95"
            >
              SUBMIT ENQUIRY
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}