"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Why ZAMR Engineering", href: "" },
  { label: "Our Team", href: "" },
  { label: "Trusted & Accredited", href: "" },
  { label: "Engineering For Impact", href: "" },
];

export default function Navbar() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const getHeroHeight = () => {
      const hero = document.querySelector("section");
      return hero ? hero.offsetHeight : window.innerHeight;
    };

    const handleScroll = () => {
      setScrolled(window.scrollY >= getHeroHeight());
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

  return (
    <>
      <header
        className={`fixed top-0 left-0 z-50 w-full transition-[background-color,box-shadow] duration-300 ${
          scrolled ? "bg-white shadow-md" : "bg-transparent"
        }`}
      >
        <div className="relative mx-auto flex w-full max-w-[1727px] items-center px-6 h-[73px] lg:px-[130px] lg:h-[100px]">
          {/* Logo */}
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

          {/* Nav links – centered */}
          <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-6 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`shrink-0 whitespace-nowrap text-sm font-medium uppercase tracking-normal transition-colors duration-300 ${
                  scrolled
                    ? "text-[var(--text-dark)] hover:text-[var(--color-primary)]"
                    : "text-[var(--text-light)] hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Contact button */}
          <button
            type="button"
            onClick={() => router.push("/")}
            className={`ml-auto hidden items-center justify-center border px-[25px] py-4 text-sm font-medium uppercase tracking-[0.3em] transition-colors duration-300 lg:flex ${
              scrolled
                ? "border-[var(--text-dark)] text-[var(--text-dark)] hover:bg-[var(--color-primary)] hover:text-white hover:border-[var(--color-primary)]"
                : "border-white text-white hover:bg-white hover:text-[var(--bg-hero)]"
            }`}
            style={{ height: "50px" }}
          >
            CONTACT
          </button>

          {/* Hamburger */}
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className={`ml-auto transition-colors duration-300 lg:hidden ${
              scrolled ? "text-[var(--text-dark)]" : "text-white"
            }`}
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile menu — positioned directly below header via top-full */}
        <div
          className={`absolute left-0 w-full border-t px-6 py-8 transition-all duration-300 lg:hidden ${
            menuOpen
              ? "translate-y-0 opacity-100 pointer-events-auto"
              : "-translate-y-2 opacity-0 pointer-events-none"
          } ${
            scrolled
              ? "bg-white border-[var(--border-light)]"
              : "bg-[var(--bg-hero)]/95 border-white/10"
          }`}
        >
          <div className="flex flex-col items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={closeMenu}
                className={`whitespace-nowrap text-sm font-medium uppercase transition-colors duration-300 ${
                  scrolled
                    ? "text-[var(--text-dark)] hover:text-[var(--color-primary)]"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <button
              type="button"
              onClick={() => {
                closeMenu();
                router.push("/");
              }}
              className={`whitespace-nowrap border px-[25px] py-4 text-sm font-medium uppercase tracking-[0.3em] transition-colors duration-300 ${
                scrolled
                  ? "border-[var(--text-dark)] text-[var(--text-dark)] hover:bg-[var(--color-primary)] hover:text-white hover:border-[var(--color-primary)]"
                  : "border-white text-white hover:bg-white hover:text-[var(--bg-hero)]"
              }`}
            >
              CONTACT
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
