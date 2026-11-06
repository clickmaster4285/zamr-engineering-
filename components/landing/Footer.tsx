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
    <div className="flex min-w-0 w-full flex-col gap-4 2xl:gap-6">
      <h3 className="text-[13px] font-bold leading-4 text-white 2xl:text-lg 2xl:leading-[23px]">
        Quick Links
      </h3>
      <ul className="flex flex-col gap-[2px] 2xl:gap-3">
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
    <div className="flex min-w-0 w-full flex-col gap-4 2xl:gap-6">
      <h3 className="text-[13px] font-bold leading-4 text-white 2xl:text-lg 2xl:leading-[23px]">
        Services
      </h3>
      <ul className="flex flex-col gap-[2px] 2xl:gap-3">
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
        className="h-[36.88px] w-[121px] object-contain object-left lg:h-[27px] lg:w-[89px] 2xl:h-[36.88px] 2xl:w-[121px]"
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
        className="h-5 w-5 shrink-0 lg:h-4 lg:w-4 2xl:h-5 2xl:w-5"
      />
      <span
        className={
          stacked
            ? "min-w-0 flex-1 text-sm leading-[18px] text-white"
            : `min-w-0 flex-1 whitespace-pre-line text-xs leading-6 text-white 2xl:text-base 2xl:leading-[26px] items-center ${item.type === "location" ? item.value.startsWith("30 Smith") ? "max-w-[220px] 2xl:max-w-[270px]" : "max-w-[220px] 2xl:max-w-[334px]" : ""}`
        }
      >
        {item.value}
      </span>
    </>
  );

  const className = stacked
    ? ` flex w-full flex-row gap-4 items-center `
    : `flex min-w-0 w-full flex-row gap-[10px] items-center lg:gap-4`;

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

function ContactDetails() {
  const phone = footerMetaItems.find((item) => item.type === "phone");
  const email = footerMetaItems.find((item) => item.type === "email");
  const locations = footerMetaItems.filter((item) => item.type === "location");

  return (
    <div className="col-span-3 -mx-[5vw] grid w-[calc(100%+10vw)] grid-cols-[38.2%_37.8%_24%] items-center gap-x-0">
      <div className="flex min-w-0 flex-col gap-5">
        {phone && <MetaItem item={phone} />}
        {email && <MetaItem item={email} />}
      </div>
      {locations.map((item, index) => (
        <MetaItem key={`${item.type}-${index}`} item={item} />
      ))}
    </div>
  );
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
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src={footerVideoSrc} type="video/mp4" />
      </video>

      <div className="pointer-events-none absolute inset-0 bg-[var(--overlay-image-hero)] lg:bg-[var(--overlay-image-default)]" />

      <div className="relative z-10 w-full py-[30px] pl-[23.55vw] pr-0 lg:px-[7.55vw] lg:py-[7.55vw] 2xl:px-[7.22vw] 2xl:py-[7.22vw]">
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

        {/* Tablet + Desktop */}
        <div className="hidden w-full grid-cols-[38.8%_38.8%_22.4%] gap-x-0 gap-y-[14px] lg:grid 2xl:gap-y-[30px]">
          <div>
            <BrandBlock />
          </div>
          <QuickLinksColumn />
          <ServicesColumn />

          <div className="relative col-span-3 -mx-[5vw] h-px w-[calc(100%+10vw)] bg-white opacity-70" />

          <ContactDetails />

          <div className="relative col-span-3 -mx-[5vw] h-px w-[calc(100%+10vw)] bg-white opacity-70" />

          <div className="col-span-3">
            <LegalRow />
          </div>
        </div>
      </div>
    </footer>
  );
}
