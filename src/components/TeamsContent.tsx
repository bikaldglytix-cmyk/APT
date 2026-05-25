"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* ─── Scroll-reveal hook ─── */
function useReveal(threshold = 0.15) {
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const obs = new IntersectionObserver(
            ([e]) => { if (e.isIntersecting) { setVisible(true); obs.unobserve(el); } },
            { threshold }
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, [threshold]);
    return { ref, visible };
}

/* ─── Component ─── */
export default function TeamsContent({ leadership, coreTeam }: { leadership: any[], coreTeam: any[] }) {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <main className="w-full min-h-screen font-sans flex flex-col overflow-x-hidden">

            {/* ═══════════════════ CINEMATIC HERO ═══════════════════ */}
            <section className="relative w-full min-h-[85vh] flex flex-col items-center overflow-hidden">
                {/* Parallax Background */}
                <div
                    className="absolute inset-0 w-full h-[130%] z-0 will-change-transform"
                    style={{ transform: `translateY(${scrollY * 0.3}px)` }}
                >
                    <Image
                        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1600&q=80"
                        alt="Team collaboration"
                        fill
                        priority
                        className="object-cover"
                        unoptimized
                    />
                    <div
                        className="absolute inset-0"
                        style={{
                            background: `
                                radial-gradient(ellipse at left center, rgba(5,25,10,0.6) 0%, transparent 60%),
                                linear-gradient(to bottom, rgba(10, 40, 20, 0.75) 0%, rgba(10, 40, 20, 0.55) 50%, rgba(10, 40, 20, 0.80) 100%)
                            `
                        }}
                    />
                </div>

                {/* Ambient glows */}
                <div className="absolute top-[30%] left-[15%] w-[400px] h-[400px] bg-[#3A5A40] rounded-full mix-blend-screen filter blur-[160px] opacity-[0.07] animate-pulse" />
                <div className="absolute bottom-[20%] right-[10%] w-[350px] h-[350px] bg-[#D4A017] rounded-full mix-blend-screen filter blur-[140px] opacity-[0.05] animate-pulse" style={{ animationDelay: "1.5s" }} />

                {/* Navbar */}
                <div className="relative z-50 w-full">
                    <Navbar />
                </div>

                {/* Hero Content */}
                <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 sm:px-12 flex flex-col items-center justify-center text-center flex-1 pb-28 pt-8">
                    <span className="text-[#D4A017] text-[12px] font-[700] tracking-[0.35em] uppercase mb-8 flex items-center gap-4">
                        <span className="w-10 h-[1px] bg-[#D4A017]/50" />
                        Our People
                        <span className="w-10 h-[1px] bg-[#D4A017]/50" />
                    </span>

                    <h1 className="text-white font-[800] tracking-[-0.03em] leading-[1.05] mb-8" style={{ fontSize: "clamp(2.5rem, 6vw, 5.5rem)" }}>
                        The Minds Behind{" "}
                        <br className="hidden sm:block" />
                        <span className="relative inline-block">
                            <span className="italic font-[300] bg-gradient-to-r from-[#D4A017] via-[#e8c547] to-[#D4A017] bg-clip-text text-transparent">
                                the Mission
                            </span>
                            <span className="absolute -bottom-2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#D4A017]/60 to-transparent" />
                        </span>
                    </h1>

                    <p className="text-white/50 text-[18px] sm:text-[20px] max-w-2xl font-[300] leading-relaxed">
                        A multidisciplinary team of community leaders
                        <br className="hidden sm:block" />
                        united by the belief that climate action must be rooted in local reality.
                    </p>
                </div>

                {/* Scroll indicator */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3 opacity-50">
                    <span className="text-[10px] tracking-[0.3em] uppercase text-white/40 font-[500]">Scroll</span>
                    <div className="w-[1px] h-8 bg-gradient-to-b from-white/40 to-transparent animate-bounce" />
                </div>
            </section>

            {/* ═══════════════════ LEADERSHIP ═══════════════════ */}
            <section className="relative w-full bg-[#F4F7F5] text-[#111111] py-28 sm:py-40 px-6 sm:px-8 overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#EBF0ED] rounded-full blur-[120px] opacity-60 -translate-y-1/2 translate-x-1/3 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#D4A017] rounded-full blur-[150px] opacity-10 translate-y-1/3 -translate-x-1/4 pointer-events-none" />

                <div className="max-w-[1400px] mx-auto relative z-10">
                    <div className="mb-20 sm:mb-24">
                        <div className="flex items-center gap-4 mb-8">
                            <span className="w-12 h-[2px] bg-[#D4A017]" />
                            <span className="text-[#3A5A40] text-[13px] font-[700] tracking-[0.25em] uppercase">
                                Leadership
                            </span>
                        </div>
                        <h2 className="text-[36px] sm:text-[48px] lg:text-[60px] font-[500] leading-[1.1] tracking-[-0.03em] text-[#1a1a1a]">
                            Visionaries driving{" "}
                            <span className="text-[#3A5A40] italic font-light relative">
                                systemic change
                                <svg className="absolute w-full h-[6px] -bottom-1 left-0 text-[#D4A017] opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
                                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="transparent" />
                                </svg>
                            </span>.
                        </h2>
                    </div>

                    <div className="flex w-full max-w-4xl mx-auto flex-col gap-10">
                        {leadership.map((person: any, idx: number) => (
                            <LeaderCard key={person.id || person.name} person={person} index={idx} />
                        ))}
                    </div>
                </div>
            </section>


            {/* ═══════════════════ CORE TEAM ═══════════════════ */}
            <section className="relative w-full bg-[#112419] text-white py-28 sm:py-40 px-6 sm:px-8 border-y border-[rgba(255,255,255,0.05)] overflow-hidden">
                <div className="absolute top-0 right-1/4 w-[800px] h-[800px] bg-[#D4A017] rounded-full blur-[200px] opacity-[0.03] -translate-y-1/2 pointer-events-none" />
                <div className="absolute bottom-[20%] left-0 w-[400px] h-[400px] bg-[#3A5A40] rounded-full blur-[200px] opacity-[0.05] pointer-events-none" />

                <div className="max-w-[1400px] mx-auto relative z-10">
                    <div className="text-center mb-20 sm:mb-28">
                        <h2 className="text-[#D4A017] text-[13px] font-[700] tracking-[0.2em] uppercase mb-4">
                            The Team
                        </h2>
                        <h3 className="text-[32px] sm:text-[44px] lg:text-[52px] font-[500] tracking-[-0.02em] leading-tight max-w-3xl mx-auto mb-6">
                            Specialists in{" "}
                            <span className="italic font-light text-[rgba(255,255,255,0.7)]">every domain</span>.
                        </h3>
                        <p className="text-[17px] text-white/40 font-[300] max-w-xl mx-auto leading-relaxed">
                            From carbon markets to community mobilization — our team covers the full spectrum of climate infrastructure.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl mx-auto">
                        {coreTeam.map((member: any, idx: number) => (
                            <TeamCard key={member.id || member.name} member={member} index={idx} />
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════ JOIN CTA ═══════════════════ */}
            <section className="relative w-full overflow-hidden bg-black">
                <div className="absolute inset-0">
                    <Image
                        src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&q=80"
                        alt="Team working together"
                        fill
                        className="object-cover opacity-60"
                        unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/40" />
                </div>

                <div className="relative z-10 max-w-[900px] mx-auto px-6 sm:px-12 py-28 sm:py-40 text-center">
                    <span className="inline-block text-[#D4A017] text-[12px] font-[700] tracking-[0.3em] uppercase mb-8">Join Our Mission</span>
                    <h2 className="text-[36px] sm:text-[48px] lg:text-[56px] font-[700] tracking-[-0.02em] leading-tight mb-8 text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.15)]">
                        Build your career where{" "}
                        <span className="italic font-[300] text-white/70">purpose meets impact</span>.
                    </h2>
                    <p className="text-[17px] text-white/45 font-[300] max-w-lg mx-auto leading-relaxed mb-12">
                        We&apos;re always looking for passionate individuals who want to make a measurable difference in the fight against climate change.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link href="/careers" className="group bg-[#D4960A] text-[#1A1A1A] font-[600] text-[16px] px-10 py-4 rounded-[8px] hover:bg-[#B8820A] hover:scale-[1.03] hover:shadow-[0_0_25px_rgba(212,150,10,0.5)] transition-all transform flex items-center gap-2">
                            View Open Positions <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                        </Link>
                        <Link href="/" className="bg-transparent border-[1.5px] border-[rgba(255,255,255,0.7)] text-white font-[600] text-[16px] rounded-[8px] px-8 py-4 hover:bg-[rgba(255,255,255,0.1)] hover:border-white transition-colors">
                            Back to Home
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

/* ═══════════════════ LEADER CARD ═══════════════════ */
function LeaderCard({ person, index }: { person: any; index: number }) {
    const { ref, visible } = useReveal(0.1);

    return (
        <div
            ref={ref}
            className={`group relative flex flex-col md:flex-row bg-white rounded-[24px] overflow-hidden shadow-[0_15px_50px_rgba(0,0,0,0.05)] border border-[#EAE6DF] hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(212,160,23,0.1)] transition-all duration-500 w-full ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}`}
            style={{ transitionDelay: `${index * 200}ms` }}
        >
            <div className="relative w-full md:w-[320px] shrink-0 h-[380px] overflow-hidden">
                <Image
                    src={person.image}
                    alt={person.name}
                    fill
                    className="object-cover object-center transform transition-transform duration-[1.5s] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-white/90 hidden md:block" />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent md:hidden" />
                <div className="absolute bottom-0 left-0 top-0 w-[4px] bg-gradient-to-b from-transparent via-[#D4A017]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 hidden md:block" />
            </div>

            <div className="relative p-8 sm:p-10 md:p-14 flex flex-col flex-1 text-left items-start justify-center">
                <span className="text-[12px] font-[700] tracking-[0.2em] uppercase text-[#3A5A40] mb-3">{person.role}</span>
                <h3 className="text-[28px] sm:text-[34px] font-[600] leading-tight tracking-[-0.02em] mb-4 text-[#1a1a1a]">{person.name}</h3>
                <div className="w-12 h-[2px] bg-[#DCEAE0] mb-5"></div>
                <p className="text-[14px] sm:text-[15px] font-[300] text-[#555555] leading-relaxed flex-1 max-w-md">{person.bio}</p>

                {person.linkedin && person.linkedin !== '#' && (
                    <div className="mt-8 pt-6 border-t border-[#EAE6DF] w-full flex justify-start">
                        <a href={person.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 text-[13px] font-[500] text-[#777] hover:text-[#3A5A40] transition-colors duration-300 group/link">
                            <svg className="w-5 h-5 text-[#888] group-hover/link:text-[#0a66c2] transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                            Connect on LinkedIn
                        </a>
                    </div>
                )}
            </div>
        </div>
    );
}

/* ═══════════════════ TEAM CARD ═══════════════════ */
function TeamCard({ member, index }: { member: any; index: number }) {
    const { ref, visible } = useReveal(0.15);

    return (
        <div
            ref={ref}
            className={`group flex flex-col p-0 rounded-[20px] bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)] hover:bg-[rgba(255,255,255,0.04)] hover:border-[rgba(212,160,23,0.4)] hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(212,160,23,0.12)] transition-all duration-500 ease-out overflow-hidden ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
            style={{ transitionDelay: `${index * 120}ms` }}
        >
            <div className="relative w-full aspect-[4/5] overflow-hidden">
                <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top transform transition-transform duration-[1.2s] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#112419] via-[#112419]/20 to-transparent" />
            </div>

            <div className="p-4 sm:p-6 flex flex-col items-center text-center">
                <span className="text-[#D4A017] text-[10px] font-[700] tracking-[0.2em] uppercase mb-1 block">{member.role}</span>
                <h4 className="text-[18px] sm:text-[20px] font-[600] tracking-tight text-white mb-3">{member.name}</h4>
                {member.linkedin && member.linkedin !== '#' && (
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[12px] font-[500] text-white/50 hover:text-[#D4A017] transition-colors duration-300">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                        LinkedIn
                    </a>
                )}
            </div>
        </div>
    );
}
