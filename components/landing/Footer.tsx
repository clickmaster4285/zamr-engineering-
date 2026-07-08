"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const quickLinks = [
  "About",
  "Projects",
  "Case Studies",
  "Insights",
  "Careers",
  "Contact",
];

const serviceLinks = [
  "Planning & Design",
  "Project Management",
  "Project Verification",
  "Buildings Services",
  "Others Services",
];

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden text-white">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/videos/video1.mp4" type="video/mp4" />
      </video>

      <div className="pointer-events-none absolute inset-0" />

      <div className="relative z-10 w-full px-6 py-12 lg:p-[130px]">
        <div className="flex flex-col gap-8 lg:gap-[30px]">
          {/* Frame 60 — top row */}
          <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-[60px]">
            {/* Frame 55 — Logo + Description + Social */}
            <div className="flex w-full flex-col items-start gap-8 lg:w-[369px] lg:gap-[50px]">
              <Image
                src="/images/zamarlogoTransparant.png"
                alt="ZAMR Engineering"
                width={250}
                height={150}
                className="object-contain"
                priority
              />
              {/* Frame 54 */}
              <div className="flex w-full flex-col items-start gap-4">
                <p className="max-w-[330px] text-base leading-[29px] text-white">
                  Specialist civil engineering consultancy delivering precision-led infrastructure solutions across New South Wales.
                </p>
                {/* Frame 53 — social icons */}
                <div className="flex items-center gap-4">
                  <Link href="" aria-label="LinkedIn" className="flex h-10 w-10 items-center justify-center border border-white/25 transition-colors hover:border-white">
                    <Image src="/icons/Linkdinsq.svg" alt="LinkedIn" width={40} height={40} />
                  </Link>
                  <Link href="" aria-label="Facebook" className="flex h-10 w-10 items-center justify-center border border-white/25 transition-colors hover:border-white">
                    <Image src="/icons/facebookSq.svg" alt="Facebook" width={40} height={40} />
                  </Link>
                  <Link href="" aria-label="Twitter" className="flex h-10 w-10 items-center justify-center border border-white/25 transition-colors hover:border-white">
                    <Image src="/icons/tweetersq.svg" alt="Twitter" width={40} height={40} />
                  </Link>
                </div>
              </div>
            </div>

            {/* Frame 56 — Quick Links + Services + Contact Info */}
            <div className="flex w-full flex-col gap-8 lg:flex-1 lg:flex-row lg:items-start lg:gap-12">
              {/* Quick Links */}
              <div className="flex flex-1 flex-col gap-6">
                <h3 className="text-lg font-bold leading-[23px] text-white">Quick Links</h3>
                <ul className="flex flex-col gap-3">
                  {quickLinks.map((label) => (
                    <li key={label}>
                      <Link href="" className="text-base leading-6 text-white transition-colors hover:text-white/80">
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Services */}
              <div className="flex flex-1 flex-col gap-6">
                <h3 className="text-lg font-bold leading-[23px] text-white">Services</h3>
                <ul className="flex flex-col gap-3">
                  {serviceLinks.map((label) => (
                    <li key={label}>
                      <span className="text-base leading-6 text-white">{label}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Info */}
              <div className="flex flex-1 flex-col gap-6">
                <h3 className="text-lg font-bold leading-[23px] text-white">Contact Info</h3>
                <ul className="flex flex-col gap-4">
                  <li className="flex flex-row items-center gap-3">
                    <Image src="/icons/location.svg" alt="Location" width={20} height={20} />
                    <span className="text-base leading-[26px] text-white">Sydney, New South Wales Australia</span>
                  </li>
                  <li className="flex flex-row items-end gap-3">
                    <Image src="/icons/gamilwhite.svg" alt="Email" width={20} height={20} />
                    <span className="text-base leading-6 text-white">info@zamreng.com.au</span>
                  </li>
                  <li className="flex flex-row items-center gap-3">
                    <Image src="/icons/phonewhite.svg" alt="Phone" width={20} height={20} />
                    <span className="text-base leading-6 text-white">+61 2 3456 7890</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px w-full bg-white" />

          {/* Bottom row */}
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
            <p className="text-sm leading-5 text-white sm:text-base">
              &copy; 2026 ZAMR Engineering. All rights reserved.
            </p>
            <div className="flex flex-row items-center gap-5">
              <Link href="" className="text-sm leading-5 text-right text-white transition-colors hover:text-white/80 sm:text-base">
                Privacy Policy
              </Link>
              <Link href="" className="text-sm leading-5 text-right text-white transition-colors hover:text-white/80 sm:text-base">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
