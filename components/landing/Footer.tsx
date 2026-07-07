"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faMapMarkerAlt, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

const quickLinks = [
  { label: "About", href: "" },
  { label: "Projects", href: "" },
  { label: "Case Studies", href: "" },
  { label: "Insights", href: "" },
  { label: "Careers", href: "" },
  { label: "Contact", href: "" },
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
    <footer className="relative w-full overflow-hidden  text-white">
      {/* Video background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/videos/video1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark overlay */}
      <div className="pointer-events-none absolute inset-0 " />

      {/* Content container */}
      <div className="relative z-10 w-full px-6 pb-8 pt-20 lg:px-32">
        <div className="grid w-full grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-[1.1fr_0.8fr_0.8fr_1fr]">
          {/* Logo + socials */}
          <div>
            <Link href="/" className="flex items-center">
              <Image
                src="/images/zamr-logo.png"
                alt="ZAMR Engineering"
                width={160}
                height={70}
                className="object-contain"
                priority
              />
            </Link>
            <p className="mt-8 max-w-[334px] text-base leading-[29px] text-white/90">
              Specialist civil engineering consultancy delivering precision-led infrastructure solutions across New South Wales.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <button
                type="button"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center border border-white/25 text-white transition-colors hover:border-white hover:text-white"
              >
                <FontAwesomeIcon icon={faLinkedin} width={18} height={18} />
              </button>
              <button
                type="button"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center border border-white/25 text-white transition-colors hover:border-white hover:text-white"
              >
                <FontAwesomeIcon icon={faFacebook} width={18} height={18} />
              </button>
              <button
                type="button"
                aria-label="Twitter"
                className="flex h-10 w-10 items-center justify-center border border-white/25 text-white transition-colors hover:border-white hover:text-white"
              >
                <FontAwesomeIcon icon={faTwitter} width={18} height={18} />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-6 text-lg font-bold text-white">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-base text-white/80 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-6 text-lg font-bold text-white">Services</h3>
            <ul className="space-y-3">
              {serviceLinks.map((label) => (
                <li key={label}>
                  <span className="text-base text-white/80">
                    {label}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-6 text-lg font-bold text-white">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-base text-white/80">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="shrink-0" width={20} height={20} />
                Sydney, New South Wales Australia
              </li>
              <li className="flex items-center gap-3 text-base text-white/80">
                <FontAwesomeIcon icon={faEnvelope} className="shrink-0" width={20} height={20} />
                info@zamreng.com.au
              </li>
              <li className="flex items-center gap-3 text-base text-white/80">
                <FontAwesomeIcon icon={faPhone} className="shrink-0" width={20} height={20} />
                +61 2 3456 7890
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-14 h-px w-full bg-white" />

        {/* Bottom row */}
        <div className="mt-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <p className="text-base text-white/80">
            &copy; 2026 ZAMR Engineering. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href=""
              className="text-base text-white/80 transition-colors hover:text-white"
            >
              Privacy Policy
            </Link>
            <Link
              href=""
              className="text-base text-white/80 transition-colors hover:text-white"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
