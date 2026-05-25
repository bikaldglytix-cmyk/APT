"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Teams", href: "/teams" },
    { name: "Careers", href: "/careers" },
    { name: "Blogs", href: "/blogs" },
    { name: "News", href: "/news" },
];

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    const checkActive = (href: string) => {
        if (href === "/") return pathname === "/";
        if (href.includes("#")) return false;
        return pathname?.startsWith(href);
    };

    return (
        <nav className="relative z-50 w-full max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between h-24">
            {/* Logo */}
            <div className="flex items-center gap-3">
                <Link href="/">
                    <Image
                        src="/logo/atl-logo.png"
                        alt="Aptech Lab logo"
                        width={96}
                        height={96}
                        className="object-contain"
                    />
                </Link>
            </div>

            {/* Nav Links */}
            <div className="hidden lg:flex items-center justify-center gap-8">
                {NAV_LINKS.map((link) => (
                    <Link
                        key={link.name}
                        href={link.href}
                        className={`text-white text-[15px] font-normal pb-1 border-b-2 transition-colors ${checkActive(link.href)
                            ? "border-[#D4A017]"
                            : "border-transparent hover:border-[#D4A017]"
                            }`}
                    >
                        {link.name}
                    </Link>
                ))}
            </div>

            {/* CTA Button & Hamburger */}
            <div className="flex items-center gap-4">
                <button className="hidden sm:block bg-white text-[#1a1a1a] rounded-full px-7 py-[12px] font-bold text-[14px] hover:bg-gray-100 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] transition-all duration-300">
                    Get in touch
                </button>

                {/* Mobile Menu Button */}
                <button
                    className="block lg:hidden text-white p-2"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div className="absolute top-24 left-0 w-full bg-[#0a1f12]/95 backdrop-blur-xl border-t border-white/10 lg:hidden flex flex-col items-center py-10 gap-6 shadow-2xl transition-all animate-in fade-in slide-in-from-top-4">
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsMenuOpen(false)}
                            className={`text-[18px] font-semibold transition-colors ${checkActive(link.href)
                                ? "text-[#D4A017]"
                                : "text-white hover:text-[#D4A017]"
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <button className="mt-4 bg-[#D4A017] text-[#1a1a1a] rounded-full px-8 py-3 font-bold text-[16px] hover:bg-[#B8820A] transition-colors w-[80%] max-w-[300px]">
                        Get in touch
                    </button>
                </div>
            )}
        </nav>
    );
}
