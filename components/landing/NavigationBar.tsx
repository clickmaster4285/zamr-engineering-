"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Why ZAMR Engineering", href: "/why-zamr" },
  { label: "Our Team", href: "/team" },
  { label: "Trusted & Accredited", href: "/accredited" },
  { label: "Engineering For Impact", href: "/impact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 z-50 py-3 w-full overflow-hidden transition-all duration-300 ${
          scrolled ? "bg-primary shadow-md" : "bg-transparent"
        }`}
      >
        <div className="relative mx-auto flex h-full w-full max-w-[1727px] items-center px-6 lg:px-[130px]">
          {/* Logo – absolute left per Figma */}
          <Link href="/" className="shrink-0">
            <Image
              src="/images/zamr-logo.png"
              alt="ZAMR Engineering"
              width={111}
              height={49}
              className="object-contain"
              priority
            />
          </Link>

          {/* Nav links – centered in remaining space */}
          <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-6 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`shrink-0 whitespace-nowrap text-sm font-medium uppercase tracking-normal transition-colors ${
                  scrolled
                    ? "text-white/80 hover:text-white"
                    : "text-[var(--text-light)] hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Contact button – absolute right per Figma */}
          <Link
            href="#contact"
            className={`ml-auto hidden items-center justify-center border px-[25px] py-4 text-sm font-medium uppercase tracking-[0.3em] transition-colors lg:flex ${
              scrolled
                ? "border-white text-white hover:bg-white hover:text-[var(--color-primary)]"
                : "border-white text-white hover:bg-white hover:text-[var(--bg-hero)]"
            }`}
            style={{ height: "50px" }}
          >
            CONTACT
          </Link>

          {/* Hamburger – visible on mobile only */}
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className={`ml-auto text-white transition-colors lg:hidden`}
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className={`fixed top-[100px] left-0 z-40 flex w-full flex-col items-center gap-6 border-t px-6 py-8 lg:hidden ${
            scrolled
              ? "bg-[var(--color-primary)] border-white/20"
              : "bg-[var(--bg-hero)]/95 border-white/10"
          }`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={closeMenu}
              className={`whitespace-nowrap text-sm font-medium uppercase tracking-normal transition-colors ${
                scrolled
                  ? "text-white/80 hover:text-white"
                  : "text-white/90 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#contact"
            onClick={closeMenu}
            className={`whitespace-nowrap border px-[25px] py-4 text-sm font-medium uppercase tracking-[0.3em] transition-colors ${
              scrolled
                ? "border-white text-white hover:bg-white hover:text-[var(--color-primary)]"
                : "border-white text-white hover:bg-white hover:text-[var(--bg-hero)]"
            }`}
          >
            CONTACT
          </Link>
        </div>
      )}
    </>
  );
}
