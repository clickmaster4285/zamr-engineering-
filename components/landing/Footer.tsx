"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  footerQuickLinks,
  footerServiceLinks,
  footerMetaItems,
  footerSocialLinks,
  footerLegalLinks,
  footerDescription,
  footerCopyright,
  footerVideoSrc,
  logoImage,
} from "@/mockData/landing";

function SocialLinks() {
  return (
    <div className="flex items-center gap-4">
      {footerSocialLinks.map((link) => (
        <Link
          key={link.alt}
          href={link.href}
          aria-label={link.alt}
          target={link.href.startsWith("http") ? "_blank" : undefined}
          rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
          className="flex h-[30px] w-[30px] shrink-0 items-center justify-center transition-opacity hover:opacity-70 2xl:h-10 2xl:w-10"
        >
          <Image
            src={link.src}
            alt={link.alt}
            width={40}
            height={40}
            className="h-full w-full object-contain"
          />
        </Link>
      ))}
    </div>
  );
}

function QuickLinksColumn() {
  return (
    <div className="flex min-w-0 flex-1 flex-col gap-6">
      <h3 className="text-[13px] font-bold leading-4 text-white 2xl:text-lg 2xl:leading-[23px]">
        Quick Links
      </h3>
      <ul className="flex flex-col gap-3">
        {footerQuickLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="block text-[13px] leading-6 capitalize text-white transition-opacity hover:opacity-80 2xl:text-base 2xl:leading-6"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ServicesColumn() {
  return (
    <div className="flex min-w-0 flex-1 flex-col gap-6">
      <h3 className="text-[13px] font-bold leading-4 text-white 2xl:text-lg 2xl:leading-[23px]">
        Services
      </h3>
      <ul className="flex flex-col gap-3">
        {footerServiceLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="block text-[13px] leading-6 text-white transition-opacity hover:opacity-80 2xl:text-base 2xl:leading-6"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function MetaBar({ stacked }: { stacked?: boolean }) {
  return (
    <div
      className={
        stacked
          ? "flex w-full flex-col items-start gap-5"
          : "flex w-full flex-row items-center gap-6"
      }
    >
      {footerMetaItems.map((item, i) => {
        const content = (
          <>
            <Image
              src={item.icon}
              alt={item.alt}
              width={20}
              height={20}
              className={
                stacked
                  ? "h-5 w-5 shrink-0"
                  : "h-3 w-3 shrink-0 2xl:h-5 2xl:w-5"
              }
            />
            <span
              className={
                stacked
                  ? "min-w-0 flex-1 text-sm leading-[18px] text-white"
                  : "min-w-0 flex-1 whitespace-pre-line text-xs leading-6 text-white 2xl:text-base 2xl:leading-[26px]"
              }
            >
              {item.value}
            </span>
          </>
        );

        const className = stacked
          ? `flex w-full flex-row gap-3 ${
              item.type === "location" ? "items-start" : "items-center"
            }`
          : "flex min-w-0 flex-1 flex-row items-center gap-3";

        if (item.href) {
          return (
            <a
              key={`${item.type}-${i}`}
              href={item.href}
              className={`${className} transition-opacity hover:opacity-80`}
            >
              {content}
            </a>
          );
        }

        return (
          <div key={`${item.type}-${i}`} className={className}>
            {content}
          </div>
        );
      })}
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="relative max-w-full overflow-hidden bg-[var(--bg-hero)] text-white">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 hidden h-full w-full object-cover lg:block"
      >
        <source src={footerVideoSrc} type="video/mp4" />
      </video>

      <div className="pointer-events-none absolute inset-0 bg-[var(--overlay-image-hero)] lg:bg-[var(--overlay-image-default)]" />

      <div className="relative z-10 w-full px-5 py-[30px] lg:px-[77.037px] lg:py-[77.037px] 2xl:p-[130px]">
        <div className="flex w-full flex-col gap-5 lg:gap-[17.78px] 2xl:gap-[30px]">
          {/* Brand + link columns (desktop/tablet) | Brand only (mobile) */}
          <div className="flex w-full flex-col gap-3 lg:flex-row lg:items-start lg:gap-9 2xl:gap-[60px]">
            {/* Brand */}
            <div className="flex w-full flex-col items-start gap-3 lg:w-[218.67px] lg:shrink-0 2xl:w-[369px]">
              <Image
                src={logoImage}
                alt="ZAMR Engineering"
                width={121}
                height={37}
                className="h-[36.88px] w-[121px] object-contain object-left"
                priority
              />
              <div className="flex w-full flex-col items-start gap-4 lg:gap-[9.48px] 2xl:gap-4">
                <p className="w-full text-sm leading-[150%] text-white opacity-70 lg:max-w-[197.93px] lg:text-[13px] lg:leading-6 lg:opacity-100 2xl:max-w-[334px] 2xl:text-base 2xl:leading-[29px]">
                  {footerDescription}
                </p>
                <SocialLinks />
              </div>
            </div>

            {/* Quick Links + Services — desktop/tablet */}
            <div className="hidden min-w-0 flex-1 flex-row justify-between gap-7 lg:flex 2xl:gap-12">
              <QuickLinksColumn />
              <ServicesColumn />
            </div>
          </div>

          {/* Mobile divider after brand */}
          <div className="h-px w-full bg-white opacity-10 lg:hidden" />

          {/* Quick Links + Services — mobile */}
          <div className="flex w-full flex-row justify-between lg:hidden">
            <QuickLinksColumn />
            <ServicesColumn />
          </div>

          {/* Divider */}
          <div className="h-px w-full bg-white opacity-10 lg:opacity-100 lg:border-0" />

          {/* Contact meta */}
          <div className="lg:hidden">
            <MetaBar stacked />
          </div>
          <div className="hidden lg:block">
            <MetaBar />
          </div>

          {/* Divider */}
          <div className="h-px w-full bg-white opacity-10 lg:opacity-100" />

          {/* Copyright + legal */}
          <div className="flex w-full flex-col items-start gap-4 lg:flex-row lg:items-center lg:justify-between lg:gap-4">
            <p className="text-xs leading-[150%] text-white opacity-60 lg:text-[13px] lg:leading-4 lg:opacity-100 2xl:text-base 2xl:leading-5">
              {footerCopyright}
            </p>
            <div className="flex flex-row items-center gap-4 lg:gap-3 2xl:gap-5">
              {footerLegalLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-xs leading-[150%] text-white opacity-60 transition-opacity hover:opacity-100 lg:text-right lg:text-[13px] lg:leading-4 lg:opacity-100 2xl:text-base 2xl:leading-5"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
