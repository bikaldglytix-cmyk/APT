"use client";

import React from "react";
import Link from "next/link";

export default function CareersPositions({ positions }: { positions: any[] }) {
    return (
        <section id="open-positions" className="relative w-full py-28 sm:py-40 bg-[#112419] overflow-hidden">
            {/* Ambient glows */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-40 bg-gradient-to-b from-[#D4A017]/40 to-transparent" />
            <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#D4A017] rounded-full blur-[200px] opacity-[0.04] pointer-events-none" />

            <div className="max-w-[1400px] mx-auto px-6 sm:px-12 relative z-10">
                <div className="text-center mb-20 sm:mb-28">
                    <span className="text-[#D4A017] text-[13px] font-[700] tracking-[0.2em] uppercase mb-4 block">Open Roles</span>
                    <h2 className="text-[32px] sm:text-[44px] lg:text-[52px] font-[500] tracking-[-0.02em] mb-6 leading-tight text-white">
                        Current <span className="italic font-light text-[rgba(255,255,255,0.7)]">Openings</span>
                    </h2>
                    <p className="text-[17px] text-[rgba(255,255,255,0.5)] font-[300] max-w-xl mx-auto leading-relaxed">
                        Join our mission to build Nepal&apos;s integrated climate execution platform.
                    </p>
                </div>

                <div className="flex flex-col w-full border-t border-[rgba(255,255,255,0.1)]">
                    {positions.map((pos: any, idx: number) => (
                        <div
                            key={idx}
                            className="group flex flex-col md:flex-row items-start md:items-center justify-between py-8 border-b border-[rgba(255,255,255,0.06)] hover:bg-[rgba(255,255,255,0.02)] transition-colors px-6 -mx-6 rounded-lg cursor-pointer"
                        >
                            <div className="flex flex-col gap-2">
                                <h3 className="text-white text-[22px] sm:text-[26px] font-[500] tracking-tight group-hover:text-[#D4A017] transition-colors duration-300">
                                    {pos.title}
                                </h3>
                                <div className="flex items-center gap-4 text-[13px] text-[rgba(255,255,255,0.4)] font-[500] tracking-[0.1em] uppercase">
                                    <span>{pos.team}</span>
                                    <span className="w-1 h-1 bg-[rgba(255,255,255,0.2)] rounded-full"></span>
                                    <span>{pos.location}</span>
                                    <span className="w-1 h-1 bg-[rgba(255,255,255,0.2)] rounded-full"></span>
                                    <span>{pos.type}</span>
                                </div>
                            </div>

                            <div className="mt-6 md:mt-0 md:opacity-0 group-hover:opacity-100 transform translate-x-0 md:-translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                                <button className="bg-[#D4960A] text-[#1A1A1A] font-[600] px-6 py-3 rounded-[8px] flex items-center gap-2 hover:bg-[#B8820A] hover:shadow-[0_0_20px_rgba(212,150,10,0.4)] transition-all">
                                    Apply Now &rarr;
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* No openings fallback */}
                {positions.length === 0 && (
                    <div className="flex flex-col items-center justify-center min-h-[300px] rounded-[32px] border border-white/5 bg-white/[0.02] backdrop-blur-sm p-12 text-center">
                        <p className="text-white/40 text-[18px] font-medium tracking-wide">
                            No open positions currently
                        </p>
                    </div>
                )}
            </div>

            {/* CTA Section — light sage, alternating */}
            <div className="relative w-full mt-28 sm:mt-40">
                <div className="w-full bg-[#DCEAE0] py-28 sm:py-40">
                    <div className="max-w-[900px] mx-auto px-6 sm:px-12 text-center">
                        <div className="flex items-center justify-center gap-4 mb-8">
                            <span className="w-12 h-[2px] bg-[#3A5A40]" />
                            <span className="text-[#3A5A40] text-[13px] font-[700] tracking-[0.2em] uppercase">Don&apos;t see your role?</span>
                            <span className="w-12 h-[2px] bg-[#3A5A40]" />
                        </div>
                        <h2 className="text-[36px] sm:text-[48px] lg:text-[56px] font-[500] tracking-[-0.02em] leading-tight mb-6 text-[#111111]">
                            We&apos;re always looking for <span className="italic font-light text-[#648460]">great people</span>.
                        </h2>
                        <p className="text-[17px] text-[rgba(0,0,0,0.6)] font-[300] max-w-lg mx-auto leading-relaxed mb-12">
                            Send us your resume and tell us how you want to contribute to Nepal&apos;s climate future.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <a href="mailto:contact@aptechlab.com.np" className="bg-[#D4960A] text-[#1A1A1A] font-[600] text-[16px] rounded-[8px] px-10 py-4 hover:bg-[#B8820A] hover:scale-[1.03] hover:shadow-[0_0_25px_rgba(212,150,10,0.5)] transition-all transform flex items-center justify-center gap-2">
                                Send Your Resume <span>&rarr;</span>
                            </a>
                            <Link href="/" className="text-[#3A5A40] text-[15px] font-[600] hover:text-[#111111] transition-colors underline underline-offset-4 decoration-[#3A5A40]/30 hover:decoration-[#3A5A40]">
                                Back to Home
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
