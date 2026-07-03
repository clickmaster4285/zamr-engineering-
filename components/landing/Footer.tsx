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
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Insights", href: "#insights" },
  { label: "Careers", href: "#careers" },
  { label: "Contact", href: "#contact" },
];

const serviceLinks = [
  { label: "Planning & Design", href: "#" },
  { label: "Project Management", href: "#" },
  { label: "Project Verification", href: "#" },
  { label: "Buildings Services", href: "#" },
  { label: "Others  Services", href: "#" },
];

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden bg-[#050b1f] text-white">
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
      <div className="pointer-events-none absolute inset-0 bg-[#050b1f]/80" />

      {/* Glow lines */}
      <div className="pointer-events-none absolute left-0 top-1/3 h-[2px] w-[40%] bg-gradient-to-r from-transparent via-sky-400/60 to-transparent blur-[1px]" />
      <div className="pointer-events-none absolute left-0 top-1/3 h-20 w-[40%] bg-gradient-to-r from-sky-500/20 via-sky-400/5 to-transparent blur-2xl" />

      {/* Content container – aligned under logo with ml-12 */}
      <div className="relative z-10 w-full px-6 pb-8 pt-16 sm:px-10 lg:px-16">
        <div className="ml-12">
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

              <div className="mt-6 flex items-center gap-4">
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="flex h-10 w-10 items-center justify-center border border-white/25 text-white transition-colors hover:border-sky-400 hover:text-sky-400"
                >
                  <FontAwesomeIcon icon={faLinkedin} width={18} height={18} />
                </a>
                <a
                  href="#"
                  aria-label="Facebook"
                  className="flex h-10 w-10 items-center justify-center border border-white/25 text-white transition-colors hover:border-sky-400 hover:text-sky-400"
                >
                  <FontAwesomeIcon icon={faFacebook} width={18} height={18} />
                </a>
                <a
                  href="#"
                  aria-label="Twitter"
                  className="flex h-10 w-10 items-center justify-center border border-white/25 text-white transition-colors hover:border-sky-400 hover:text-sky-400"
                >
                  <FontAwesomeIcon icon={faTwitter} width={18} height={18} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="mb-5 text-sm font-bold text-white">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-300 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="mb-5 text-sm font-bold text-white">Services</h3>
              <ul className="space-y-3">
                {serviceLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-300 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="mb-5 text-sm font-bold text-white">Contact Info</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-2.5 text-sm text-slate-300">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="mt-0.5 shrink-0 text-primary" width={18} height={18} />
                  Sydney, New South Wales Australia
                </li>
                <li className="flex items-start gap-2.5 text-sm text-slate-300">
                  <FontAwesomeIcon icon={faEnvelope} className="mt-0.5 shrink-0 text-primary" width={18} height={18} />
                  info@zamreng.com.au
                </li>
                <li className="flex items-start gap-2.5 text-sm text-slate-300">
                  <FontAwesomeIcon icon={faPhone} className="mt-0.5 shrink-0 text-primary" width={18} height={18} />
                  +61 2 3456 7890
                </li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="mt-14 h-px w-full bg-white/15" />

          {/* Bottom row */}
          <div className="mt-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <p className="text-sm text-slate-400">
              © 2026 ZAMR Engineering. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="#privacy"
                className="text-sm text-slate-400 transition-colors hover:text-white"
              >
                Privacy Policy
              </Link>
              <Link
                href="#terms"
                className="text-sm text-slate-400 transition-colors hover:text-white"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}