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

/** Shared 3-column track: tablet equal cols (Figma 290px), desktop 242px gaps. */
const columnsClass =
  "grid grid-cols-3 items-start gap-0 xl:gap-[242px]";

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
          className="flex h-[30px] w-[30px] shrink-0 items-center justify-center transition-opacity hover:opacity-70 xl:h-10 xl:w-10"
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
    <div className="flex min-w-0 flex-col gap-6">
      <h3 className="text-[13px] font-bold leading-4 text-white xl:text-lg xl:leading-[23px]">
        Quick Links
      </h3>
      <ul className="flex flex-col gap-3">
        {footerQuickLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="block text-[13px] leading-6 capitalize text-white transition-opacity hover:opacity-80 xl:text-base"
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
    <div className="flex min-w-0 flex-col gap-6">
      <h3 className="text-[13px] font-bold leading-4 text-white xl:text-lg xl:leading-[23px]">
        Services
      </h3>
      <ul className="flex flex-col gap-3">
        {footerServiceLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="block text-[13px] leading-6 text-white transition-opacity hover:opacity-80 xl:text-base"
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
        className="h-[37px] w-auto object-contain object-left"
        priority
      />
      <div className="flex w-full flex-col items-start gap-4">
        <p className="w-full max-w-[334px] text-sm leading-[22px] text-white lg:text-[13px] lg:leading-5 xl:text-base xl:leading-[29px]">
          {footerDescription}
        </p>
        <SocialLinks />
      </div>
    </div>
  );
}

function MetaItem({ item }: { item: (typeof footerMetaItems)[number] }) {
  const content = (
    <>
      <Image
        src={item.icon}
        alt={item.alt}
        width={20}
        height={20}
        className="mt-0.5 h-5 w-5 shrink-0 lg:mt-0 lg:h-3 lg:w-3 xl:h-5 xl:w-5"
      />
      <span className="min-w-0 flex-1 text-sm leading-[18px] text-white lg:text-xs lg:leading-[15px] xl:text-base xl:leading-[26px]">
        {item.value}
      </span>
    </>
  );

  const className =
    "flex min-w-0 items-start gap-3 lg:items-center lg:gap-1.5 xl:gap-3";

  if (item.href) {
    return (
      <a href={item.href} className={`${className} transition-opacity hover:opacity-80`}>
        {content}
      </a>
    );
  }

  return <div className={className}>{content}</div>;
}

function ContactColumns() {
  const phone = footerMetaItems.find((item) => item.type === "phone");
  const email = footerMetaItems.find((item) => item.type === "email");
  const locations = footerMetaItems.filter((item) => item.type === "location");

  return (
    <>
      <div className="flex min-w-0 flex-col gap-3 lg:gap-3 xl:gap-3">
        {phone && <MetaItem item={phone} />}
        {email && <MetaItem item={email} />}
      </div>
      {locations.map((item, index) => (
        <MetaItem key={`${item.type}-${index}`} item={item} />
      ))}
    </>
  );
}

function LegalLinks({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-row items-center gap-4 lg:gap-2.5 xl:gap-10 ${className}`}>
      {footerLegalLinks.map((link) => (
        <Link
          key={link.label}
          href={link.href}
          className="text-xs leading-[18px] text-white/60 transition-opacity hover:opacity-100 lg:text-[13px] lg:leading-4 lg:text-white xl:text-base xl:font-light xl:leading-5"
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}

function Divider({ soft = false }: { soft?: boolean }) {
  return (
    <div
      className={`h-px w-full ${soft ? "bg-white/10" : "bg-white"}`}
    />
  );
}

export default function Footer() {
  const phone = footerMetaItems.find((item) => item.type === "phone");
  const email = footerMetaItems.find((item) => item.type === "email");
  const locations = footerMetaItems.filter((item) => item.type === "location");

  return (
    <footer className="relative w-full overflow-hidden bg-[var(--bg-hero)] text-white">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src={footerVideoSrc} type="video/mp4" />
      </video>

      <div className="pointer-events-none absolute inset-0 bg-[var(--overlay-image-hero)]" />

      <div className="relative z-10 mx-auto flex w-full max-w-[1728px] flex-col px-5 py-[30px] lg:px-[77px] lg:py-20 xl:px-[130px] xl:py-[130px]">
        {/* —— Mobile (< lg) —— */}
        <div className="flex flex-col gap-5 lg:hidden">
          <BrandBlock />
          <Divider soft />
          <div className="grid grid-cols-2 justify-between gap-0">
            <QuickLinksColumn />
            <ServicesColumn />
          </div>
          <Divider soft />
          <div className="flex flex-col gap-5">
            {phone && <MetaItem item={phone} />}
            {email && <MetaItem item={email} />}
            {locations.map((item, index) => (
              <MetaItem key={`${item.type}-${index}`} item={item} />
            ))}
          </div>
          <Divider soft />
          <div className="flex flex-col items-start gap-4">
            <p className="text-xs leading-[18px] text-white/60">{footerCopyright}</p>
            <LegalLinks />
          </div>
        </div>

        {/* —— Tablet + Desktop (lg+) —— */}
        <div className="hidden flex-col gap-6 lg:flex">
          <div className={columnsClass}>
            <BrandBlock />
            <QuickLinksColumn />
            <ServicesColumn />
          </div>

          <Divider />

          <div className={`${columnsClass} items-center`}>
            <ContactColumns />
          </div>

          <Divider />

          <div className={`${columnsClass} items-center`}>
            <p className="col-span-2 text-[13px] leading-4 text-white xl:text-base xl:font-light xl:leading-5">
              {footerCopyright}
            </p>
            <LegalLinks className="justify-start" />
          </div>
        </div>
      </div>
    </footer>
  );
}
