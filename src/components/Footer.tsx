"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="relative w-full bg-[#0a150e] text-white pt-28 pb-12 overflow-hidden border-t border-white/5">
            {/* Ambient Background Glows */}
            <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-[#D4A017] rounded-full mix-blend-screen filter blur-[150px] opacity-[0.04] pointer-events-none animate-pulse" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-[#3A5A40] rounded-full mix-blend-screen filter blur-[150px] opacity-[0.05] pointer-events-none" />

            {/* Massive Faint Typography Backdrop */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-center pointer-events-none z-0 overflow-hidden w-full">
                <h1 className="text-[12vw] font-[900] text-white/[0.015] tracking-tighter uppercase whitespace-nowrap select-none">
                    Aptech Lab
                </h1>
            </div>

            <div className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-12 flex flex-col">
                {/* Top Section: CTA + Newsletter */}
                <div className="flex flex-col lg:flex-row justify-between items-start gap-16 lg:gap-8 pb-20 border-b border-white/[0.05]">

                    {/* Left: Branding & Short Description */}
                    <div className="max-w-md flex flex-col items-start gap-6 relative z-10">
                        <div className="flex items-center gap-3 bg-white/[0.03] px-5 py-2.5 rounded-full border border-white/10 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.2)]">
                            <Image
                                src="/logo/atl-logo.png"
                                alt="Aptech Lab logo"
                                width={36}
                                height={36}
                                className="object-contain"
                            />
                            <span className="text-[15px] font-bold tracking-[0.2em] text-white/90">APTECH LAB</span>
                        </div>
                        <h3 className="text-[34px] font-[500] leading-tight tracking-tight mt-4 text-white/95">
                            Let's build climate solutions together.
                        </h3>
                        <p className="text-[16px] font-[500] leading-relaxed text-white/70 border-l-2 border-[#D4A017]/30 pl-5">
                            <a href="mailto:contact@aptechlab.com.np" className="hover:text-[#D4A017] transition-colors">contact@aptechlab.com.np</a><br />
                            977-9808771537<br />
                            <a href="https://www.aptechlab.com.np" target="_blank" className="hover:text-[#D4A017] transition-colors">www.aptechlab.com.np</a>
                        </p>
                    </div>

                    {/* Right: Premium Newsletter */}
                    <div className="w-full lg:max-w-[440px] flex flex-col gap-6 bg-gradient-to-br from-white/[0.04] to-black/20 border border-white/[0.08] p-10 rounded-[32px] backdrop-blur-xl relative z-10 shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:border-white/[0.15] hover:shadow-[0_20px_50px_rgba(212,160,23,0.05)] transition-all duration-700">
                        <div className="absolute inset-0 bg-gradient-to-tr from-[#D4A017] to-transparent opacity-[0.02] rounded-[32px] pointer-events-none" />
                        <div>
                            <h4 className="text-[20px] font-semibold text-white/95 mb-2">Subscribe to Insights</h4>
                            <p className="text-[14px] text-white/40 font-light leading-relaxed">Latest research and deployment updates directly to your inbox.</p>
                        </div>
                        <div className="flex w-full relative mt-3 shadow-[0_8px_30px_rgba(0,0,0,0.3)] group">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.1)] rounded-full py-[16px] pl-6 pr-[120px] text-white text-[15px] placeholder-[rgba(255,255,255,0.3)] focus:outline-none focus:border-[#D4A017]/70 focus:bg-[rgba(255,255,255,0.05)] transition-all shadow-inner"
                            />
                            <button className="absolute right-1.5 top-1.5 bottom-1.5 bg-gradient-to-r from-[#D4A017] to-[#e5b331] text-[#1A1A1A] font-[700] text-[13px] tracking-wide px-7 rounded-full hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(212,160,23,0.3)] transition-all duration-300 flex items-center justify-center">
                                Submit
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom Section: Links & Copyright */}
                <div className="pt-12 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 relative z-10">
                    {/* Minimal Internal Links */}
                    <div className="flex flex-wrap items-center gap-8 text-[14px] font-medium text-white/50 w-full lg:w-auto">
                        <Link href="#services" className="hover:text-white transition-colors">Services</Link>
                        <Link href="#about" className="hover:text-white transition-colors">Our Story</Link>
                        <Link href="/blogs" className="hover:text-white transition-colors">Journal</Link>
                        <Link href="/news" className="hover:text-white transition-colors">News</Link>
                        <a href="mailto:contact@aptechlab.com" className="hover:text-[#D4A017] transition-colors flex items-center gap-2">
                            Contact
                            <span className="w-1.5 h-1.5 rounded-full bg-[#D4A017] inline-block animate-pulse"></span>
                        </a>
                    </div>

                    {/* Copyright & Socials */}
                    <div className="flex flex-col-reverse sm:flex-row items-center gap-6 lg:gap-12 w-full lg:w-auto justify-between lg:justify-end">
                        <span className="text-[12px] text-white/30 font-light tracking-wide uppercase">
                            © {new Date().getFullYear()} Aptech Lab. All rights reserved.
                        </span>

                        {/* Social Icons Placeholder */}
                        <div className="flex items-center gap-4">
                            {[
                                "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z", // LinkedIn
                                "M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z", // Twitter
                            ].map((path, index) => (
                                <a key={index} href="#" className="w-10 h-10 rounded-full border border-white/5 bg-white/[0.02] flex items-center justify-center text-white/40 hover:text-[#1A1A1A] hover:bg-[#D4A017] hover:border-[#D4A017] hover:shadow-[0_0_20px_rgba(212,160,23,0.4)] transition-all duration-300 transform hover:-translate-y-1">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                        <path d={path} />
                                    </svg>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
