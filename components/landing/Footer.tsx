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
    <div className="flex min-w-0 flex-col gap-4 xl:gap-6">
      <h3 className="text-[13px] font-bold leading-4 text-white xl:text-lg xl:leading-[23px]">
        Quick Links
      </h3>
      <ul className="flex flex-col gap-1 xl:gap-3">
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
    <div className="flex min-w-0 flex-col gap-4 xl:gap-6">
      <h3 className="text-[13px] font-bold leading-4 text-white xl:text-lg xl:leading-[23px]">
        Services
      </h3>
      <ul className="flex flex-col gap-1 xl:gap-3">
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
        className="h-[32px] w-auto object-contain object-left xl:h-[37px]"
        priority
      />
      <div className="flex w-full flex-col items-start gap-4">
        <p className="w-full max-w-[420px] text-sm leading-[22px] text-white/80 xl:max-w-[334px] xl:text-base xl:leading-[29px]">
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
        className="mt-0.5 h-4 w-4 shrink-0 xl:h-5 xl:w-5"
      />
      <span className="min-w-0 flex-1 text-[13px] leading-5 text-white xl:text-base xl:leading-[26px]">
        {item.value}
      </span>
    </>
  );

  const className = "flex min-w-0 items-start gap-3 xl:items-center xl:gap-4";

  if (item.href) {
    return (
      <a href={item.href} className={`${className} transition-opacity hover:opacity-80`}>
        {content}
      </a>
    );
  }

  return <div className={className}>{content}</div>;
}

function ContactRow() {
  const phone = footerMetaItems.find((item) => item.type === "phone");
  const email = footerMetaItems.find((item) => item.type === "email");
  const locations = footerMetaItems.filter((item) => item.type === "location");

  return (
    <>
      <div className="flex flex-col gap-5 xl:hidden">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {phone && <MetaItem item={phone} />}
          {email && <MetaItem item={email} />}
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {locations.map((item, index) => (
            <MetaItem key={`${item.type}-${index}`} item={item} />
          ))}
        </div>
      </div>

      <div className="hidden xl:grid xl:grid-cols-[1.1fr_1.15fr_0.9fr] xl:items-start xl:gap-8">
        <div className="flex min-w-0 flex-col gap-5">
          {phone && <MetaItem item={phone} />}
          {email && <MetaItem item={email} />}
        </div>
        {locations.map((item, index) => (
          <MetaItem key={`${item.type}-${index}`} item={item} />
        ))}
      </div>
    </>
  );
}

function LegalRow() {
  return (
    <div className="flex w-full flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
      <p className="text-xs leading-5 text-white/70 xl:text-base xl:leading-5">
        {footerCopyright}
      </p>
      <div className="flex flex-row items-center gap-4 xl:gap-5">
        {footerLegalLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="text-xs leading-5 text-white/70 transition-opacity hover:opacity-100 xl:text-base xl:leading-5"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

function Divider({ strong = false }: { strong?: boolean }) {
  return (
    <div
      className={`h-px w-full ${strong ? "bg-white/40" : "bg-white/15"}`}
    />
  );
}

export default function Footer() {
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

      <div className="relative z-10 mx-auto flex w-full max-w-[1728px] flex-col gap-6 px-5 py-10 sm:px-8 sm:py-12 md:gap-8 md:px-10 md:py-14 xl:gap-8 xl:px-[130px] xl:py-[100px]">
        <div className="flex flex-col gap-8 xl:grid xl:grid-cols-[1.15fr_1fr_1fr] xl:gap-10">
          <BrandBlock />
          <div className="grid grid-cols-2 gap-6 xl:contents">
            <QuickLinksColumn />
            <ServicesColumn />
          </div>
        </div>

        <Divider strong />
        <ContactRow />
        <Divider strong />
        <LegalRow />
      </div>
    </footer>
  );
}
