"use client";

import React from "react";

export default function PartnersMarquee({ partners }: { partners: any[] }) {
    // Fallback if no partners in DB yet
    const displayPartners = partners.length > 0 
        ? partners.map(p => p.name) 
        : [
            "CLIMATE ACTION NETWORK",
            "GLOBAL CARBON VERIFIED",
            "SUSTAINABLE AGRI ALLIANCE",
            "BIOCHAR INITIATIVES",
            "NEPAL RURAL DEV",
            "ENVIRONMENTAL RECOVERY",
        ];

    return (
        <section className="relative w-full py-12 bg-[#0A1810] overflow-hidden border-y border-white/5 flex items-center">
            {/* Subtle Gradient Overlays for Marquee edges */}
            <div className="absolute left-0 top-0 bottom-0 w-[100px] bg-gradient-to-r from-[#0A1810] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-[100px] bg-gradient-to-l from-[#0A1810] to-transparent z-10 pointer-events-none" />

            {/* Marquee Animation */}
            <div className="flex whitespace-nowrap animate-marquee items-center">
                {/* Duplicate the items multiple times for seamless scrolling */}
                {[...Array(3)].map((_, i) => (
                    <div key={i} className="flex items-center gap-12 sm:gap-24 px-6 sm:px-12">
                        {displayPartners.map((partner: any, index: number) => (
                            <div key={index} className="flex items-center gap-4 group">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#D4A017]/40 group-hover:bg-[#D4A017] transition-colors duration-300" />
                                <span className="text-white/40 text-[13px] sm:text-[15px] font-[700] tracking-[0.2em] uppercase group-hover:text-white/90 transition-colors duration-300 cursor-default">
                                    {partner}
                                </span>
                            </div>
                        ))}
                    </div>
                ))}
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-33.33%); } /* Translates exactly one set of the items */
                }
                .animate-marquee {
                    animation: marquee 30s linear infinite;
                    will-change: transform;
                }
                .animate-marquee:hover {
                    animation-play-state: paused;
                }
            `}} />
        </section>
    );
}
