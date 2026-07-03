"use client";

import React, { useState, useEffect } from "react";
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

    return (
        <>
            <header
                className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
                    scrolled
                        ? "bg-white/95 shadow-md border-b border-gray-200"
                        : "bg-transparent"
                }`}
            >
                <div className="flex w-full items-center justify-between px-10 lg:px-30 py-5 md:px-16">
                    {/* Logo – left margin ml-12 as original */}
                    <Link href="/" className="flex items-center ">
                        <Image
                            src="/images/zamr-logo.png"
                            alt="ZAMR Engineering"
                            width={120}
                            height={45}
                            className="object-contain"
                            priority
                        />
                    </Link>

                    {/* Nav links – centered */}
                    <nav className="hidden items-center gap-4 lg:flex">
                        {navLinks.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                className={`text-sm tracking-[0.12em] transition-colors hover:text-gray-800 uppercase ${
                                    scrolled ? "text-gray-700" : "text-[#B0B0B0]"
                                }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Contact button – right margin mr-12 as original */}
                    <Link
                        href="#contact"
                        className={`hidden border px-6 py-2.5 text-[13px] tracking-[0.12em] transition-colors lg:inline-block uppercase ${
                            scrolled
                                ? "border-gray-700 text-gray-700 hover:bg-white hover:text-[#050b1f]"
                                : "border-white/70 text-white hover:bg-white hover:text-[#050b1f]"
                        }`}
                    >
                        CONTACT
                    </Link>

                    {/* Hamburger – appears on small screens */}
                    <button
                        type="button"
                        onClick={() => setMenuOpen((open) => !open)}
                        aria-label={menuOpen ? "Close menu" : "Open menu"}
                        aria-expanded={menuOpen}
                        className={`transition-colors lg:hidden ${
                            scrolled ? "text-gray-700" : "text-white"
                        }`}
                    >
                        {menuOpen ? <X size={26} /> : <Menu size={26} />}
                    </button>
                </div>
            </header>

            {/* Mobile menu */}
            {menuOpen && (
                <div
                    className={`fixed top-[73px] left-0 z-40 flex w-full flex-col items-center gap-6 border-t px-6 py-8 lg:hidden ${
                        scrolled
                            ? "bg-white/95 border-gray-200"
                            : "bg-[#050b1f]/95 border-white/10"
                    }`}
                >
                    {navLinks.map((link) => (
                        <Link
                            key={link.label}
                            href={link.href}
                            onClick={() => setMenuOpen(false)}
                            className={`font-sans text-sm tracking-[0.12em] transition-colors hover:text-gray-200 uppercase ${
                                scrolled ? "text-gray-700" : "text-white/90"
                            }`}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Link
                        href="#contact"
                        onClick={() => setMenuOpen(false)}
                        className={`border px-6 py-2.5 text-[12px] tracking-[0.12em] transition-colors uppercase ${
                            scrolled
                                ? "border-gray-700 text-gray-700 hover:bg-white hover:text-[#050b1f]"
                                : "border-white/70 text-white hover:bg-white hover:text-[#050b1f]"
                        }`}
                    >
                        CONTACT
                    </Link>
                </div>
            )}
        </>
    );
}