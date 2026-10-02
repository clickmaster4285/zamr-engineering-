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
    <div className="flex min-w-0 w-full flex-col gap-6">
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
    <div className="flex min-w-0 w-full flex-col gap-6">
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

function BrandBlock() {
  return (
    <div className="flex w-full flex-col items-start gap-3">
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
  );
}

function MetaItem({
  item,
  stacked,
}: {
  item: (typeof footerMetaItems)[number];
  stacked?: boolean;
}) {
  const content = (
    <>
      <Image
        src={item.icon}
        alt={item.alt}
        width={20}
        height={20}
      />
      <span
        className={
          stacked
            ? "min-w-0 flex-1 text-sm leading-[18px] text-white"
            : "min-w-0 flex-1 whitespace-pre-line text-xs leading-6 text-white 2xl:text-base 2xl:leading-[26px] items-center"
        }
      >
        {item.value}
      </span>
    </>
  );

  const className = stacked
    ? ` flex w-full flex-row gap-3 items-center `
    : `flex min-w-0 w-full flex-row gap-[6px] items-center`;

  if (item.href) {
    return (
      <a
        href={item.href}
        className={`${className} transition-opacity hover:opacity-80`}
      >
        {content}
      </a>
    );
  }

  return <div className={className}>{content}</div>;
}

function LegalRow() {
  return (
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
        {/* Mobile */}
        <div className="flex w-full flex-col gap-5 lg:hidden">
          <BrandBlock />
          <div className="h-px w-full bg-white opacity-10" />
          <div className="flex w-full flex-row justify-between gap-7">
            <QuickLinksColumn />
            <ServicesColumn />
          </div>
          <div className="h-px w-full bg-white opacity-10" />
          <div className="flex w-full flex-col items-start gap-5">
            {footerMetaItems.map((item, i) => (
              <MetaItem key={`${item.type}-${i}`} item={item} stacked />
            ))}
          </div>
          <div className="h-px w-full bg-white opacity-10" />
          <LegalRow />
        </div>

        {/* Tablet + Desktop — shared 4-col grid keeps Quick Links↔location1 and Services↔location2 aligned */}
        <div className="hidden w-full grid-cols-4 gap-x-6 gap-y-[17.78px] lg:grid 2xl:gap-x-12 2xl:gap-y-[30px]">
          <div className="col-span-2">
            <BrandBlock />
          </div>
          <QuickLinksColumn />
          <ServicesColumn />

          <div className="col-span-4 h-px w-full bg-white opacity-100" />

          {footerMetaItems.map((item, i) => (
            <MetaItem key={`${item.type}-${i}`} item={item} />
          ))}

          <div className="col-span-4 h-px w-full bg-white opacity-100" />

          <div className="col-span-4">
            <LegalRow />
          </div>
        </div>
      </div>
    </footer>
  );
}
