"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { navLinks, logoImage } from "@/mockData/landing";

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const isActive = (href: string) => {
    if (!href) return false;
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  const linkClass = (href: string) =>
    `shrink-0 whitespace-nowrap font-medium uppercase transition-colors duration-300 ${
      isActive(href)
        ? "text-[var(--color-secondary)]"
        : "text-white hover:text-[var(--color-secondary)]"
    }`;

  return (
    <>
      <header
        className={`fixed top-0 left-0 z-50 w-full transition-[background-color,box-shadow] duration-300 ${
          scrolled ? "bg-primary shadow-md" : "bg-transparent"
        }`}
      >
        {/* ── Mobile (<1024): Figma 350×36 @ top 30px ── */}
        <div className="mx-auto flex h-[66px] w-full items-center justify-between  px-6  lg:hidden">
          <Link href="/" className="shrink-0" onClick={closeMenu}>
            <Image
              src={logoImage}
              alt="ZAMR Engineering"
              width={78}
              height={24}
              className="h-auto w-[78px] object-contain"
              priority
            />
          </Link>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="flex h-9 w-9 shrink-0 items-center justify-center p-2 text-[var(--color-secondary)]"
          >
            {menuOpen ? <X size={20} strokeWidth={2} /> : <Menu size={20} strokeWidth={2} />}
          </button>
        </div>

        {/* ── Tablet (lg) + Desktop (2xl): Figma 1024 / 1727 ── */}
        <div className="relative mx-auto hidden h-[72px] w-full max-w-[1727px] grid-cols-[auto_1fr_auto] items-center px-[77px] lg:grid 2xl:h-[100px] 2xl:px-[130px]">
          <Link href="/" className="shrink-0 justify-self-start">
            <Image
              src={logoImage}
              alt="ZAMR Engineering"
              width={111}
              height={49}
              className="h-auto w-[66px] object-contain 2xl:w-[111px]"
              priority
            />
          </Link>

          <nav className="flex items-center justify-center gap-2.5 2xl:gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`${linkClass(link.href)} text-[11px] leading-[14px] 2xl:text-sm 2xl:leading-[18px]`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => router.push("/contact")}
            className="flex h-[35px] w-[101px] shrink-0 items-center justify-center justify-self-end border-[0.6px] border-white px-[15px] text-[13px] font-medium leading-4 tracking-[1.78px] text-white uppercase transition-colors duration-300 hover:bg-[var(--bg-light)] hover:text-[var(--color-primary)] 2xl:h-[50px] 2xl:w-[133px] 2xl:border 2xl:px-[25px] 2xl:py-4 2xl:text-sm 2xl:leading-[18px] 2xl:tracking-[3px]"
          >
            CONTACT
          </button>
        </div>

        {/* Mobile menu drawer */}
        <div
          className={`absolute left-0 w-full border-t px-6 py-8 transition-all duration-300 lg:hidden ${
            menuOpen
              ? "translate-y-0 opacity-100 pointer-events-auto"
              : "-translate-y-2 opacity-0 pointer-events-none"
          } ${
            scrolled
              ? "bg-primary border-white/10"
              : "bg-[var(--bg-hero)] border-white/10"
          }`}
        >
          <div className="flex flex-col items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={closeMenu}
                className={`${linkClass(link.href)} text-sm leading-[18px]`}
              >
                {link.label}
              </Link>
            ))}
            <button
              type="button"
              onClick={() => {
                closeMenu();
                router.push("/contact");
              }}
              className="whitespace-nowrap border border-white px-[25px] py-4 text-sm font-medium uppercase tracking-[3px] text-white transition-colors duration-300 hover:bg-[var(--bg-light)] hover:text-[var(--color-primary)]"
            >
              CONTACT
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
