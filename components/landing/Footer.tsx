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
    <div className="flex items-center gap-[9.5px] 2xl:gap-4">
      {footerSocialLinks.map((link) => (
        <Link
          key={link.alt}
          href={link.href}
          aria-label={link.alt}
          target={link.href.startsWith("http") ? "_blank" : undefined}
          rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
          className="flex h-6 w-6 shrink-0 items-center justify-center border border-white transition-opacity hover:opacity-70 2xl:h-10 2xl:w-10"
        >
          <Image
            src={link.src}
            alt={link.alt}
            width={20}
            height={20}
            className="h-3 w-3 object-contain 2xl:h-5 2xl:w-5"
          />
        </Link>
      ))}
    </div>
  );
}

function QuickLinksColumn() {
  return (
    <div className="flex min-w-0 flex-1 flex-col gap-6">
      <h3 className="text-[13px] font-bold leading-4 text-white lg:text-[13px] lg:leading-4 2xl:text-lg 2xl:leading-[23px]">
        Quick Links
      </h3>
      <ul className="flex flex-col gap-3">
        {footerQuickLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-[13px] leading-6 uppercase text-white transition-opacity hover:opacity-80 2xl:text-base"
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
      <h3 className="text-[13px] font-bold leading-4 text-white lg:text-[13px] lg:leading-4 2xl:text-lg 2xl:leading-[23px]">
        Services
      </h3>
      <ul className="flex flex-col gap-3">
        {footerServiceLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-[13px] leading-6 text-white transition-opacity hover:opacity-80 2xl:text-base"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function MetaBar() {
  return (
    <div className="hidden w-full flex-row items-center gap-6 lg:flex">
      {footerMetaItems.map((item, i) => {
        const content = (
          <>
            <Image
              src={item.icon}
              alt={item.alt}
              width={20}
              height={20}
              className="h-3 w-3 shrink-0 2xl:h-5 2xl:w-5"
            />
            <span className="min-w-0 flex-1 whitespace-pre-line text-xs leading-6 text-white 2xl:text-base 2xl:leading-[26px]">
              {item.value}
            </span>
          </>
        );

        const className =
          "flex min-w-0 flex-1 flex-row items-center gap-3";

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
    <footer className="relative w-full overflow-hidden bg-[var(--bg-hero)] text-white">
      {/* Desktop / tablet video background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 hidden h-full w-full object-cover lg:block"
      >
        <source src={footerVideoSrc} type="video/mp4" />
      </video>

      {/* Soft dark overlay so white type stays readable */}
      <div className="pointer-events-none absolute inset-0 bg-[var(--overlay-image-hero)] lg:bg-[var(--overlay-image-default)]" />

      {/* ─── Desktop + Tablet ─── */}
      <div className="relative z-10 hidden w-full px-[77px] py-[77px] lg:block 2xl:p-[130px]">
        <div className="mx-auto flex w-full max-w-[1467px] flex-col gap-[18px] 2xl:gap-[30px]">
          {/* Top: brand + link columns */}
          <div className="flex w-full flex-row items-start gap-9 2xl:gap-[60px]">
            {/* Brand column */}
            <div className="flex w-[219px] shrink-0 flex-col gap-[30px] 2xl:w-[369px] 2xl:gap-[50px]">
              <Image
                src={logoImage}
                alt="ZAMR Engineering"
                width={218}
                height={124}
                className="h-[74px] w-[129px] object-contain 2xl:h-[124px] 2xl:w-[218px]"
                priority
              />
              <div className="flex w-full flex-col gap-[9.5px] 2xl:gap-4">
                <p className="max-w-[198px] text-[13px] leading-6 text-white 2xl:max-w-[334px] 2xl:text-base 2xl:leading-[29px]">
                  {footerDescription}
                </p>
                <SocialLinks />
              </div>
            </div>

            {/* Quick Links + Services */}
            <div className="flex min-w-0 flex-1 flex-row justify-between gap-7 2xl:gap-12">
              <QuickLinksColumn />
              <ServicesColumn />
            </div>
          </div>

          <div className="h-px w-full bg-white" />

          <MetaBar />

          <div className="h-px w-full bg-white" />

          <div className="flex w-full flex-row items-center justify-between gap-4">
            <p className="text-[13px] leading-4 text-white 2xl:text-base 2xl:leading-5">
              {footerCopyright}
            </p>
            <div className="flex flex-row items-center gap-3 2xl:gap-5">
              {footerLegalLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-right text-[13px] leading-4 text-white transition-opacity hover:opacity-80 2xl:text-base 2xl:leading-5"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ─── Mobile ─── */}
      <div className="relative z-10 flex w-full flex-col gap-5 px-5 py-[30px] lg:hidden">
        <div className="flex w-full flex-col gap-6">
          <Image
            src={logoImage}
            alt="ZAMR Engineering"
            width={78}
            height={44}
            className="h-6 w-[78px] object-contain object-left"
            priority
          />
          <p className="text-sm leading-[150%] text-white opacity-70">
            {footerDescription}
          </p>
        </div>

        <div className="h-px w-full bg-white opacity-10" />

        <div className="flex w-full flex-row justify-between gap-4">
          <QuickLinksColumn />
          <ServicesColumn />
        </div>

        <div className="h-px w-full bg-white opacity-10" />

        <div className="flex w-full flex-col gap-4">
          <p className="text-xs leading-[150%] text-white opacity-60">
            {footerCopyright}
          </p>
          <div className="flex flex-row items-start gap-4">
            {footerLegalLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-xs leading-[150%] text-white opacity-60 transition-opacity hover:opacity-100"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
