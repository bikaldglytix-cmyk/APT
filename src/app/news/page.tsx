import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { supabase, normalizeNews } from "@/lib/supabase";

export const revalidate = 60; // ISR: revalidate every 60 seconds

export default async function NewsPage() {
    const { data } = await supabase.from('news').select('*').order('date', { ascending: false });
    const allNews = (data || []).map(normalizeNews).filter(Boolean);

    const featuredNews = allNews[0];
    const regularNews = allNews.length > 0 && featuredNews ? allNews.slice(1) : [];

    return (
        <main className="w-full min-h-screen font-sans flex flex-col overflow-x-hidden bg-[#112419]">
            <div className="relative z-50 w-full bg-[#112419]">
                <Navbar />
            </div>

            <section className="relative w-full pt-32 pb-16 bg-[#112419]">
                <div className="max-w-[1400px] mx-auto px-6 sm:px-8 flex flex-col items-center text-center">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-[#D4A017]/10 text-[#D4A017] text-[11px] font-bold tracking-[0.2em] uppercase border border-[#D4A017]/20 mb-6">
                        LATEST UPDATES
                    </span>
                    <h1 className="text-[48px] sm:text-[64px] lg:text-[72px] font-bold tracking-tight text-white mb-6">
                        Company <span className="text-[#D4A017]">News</span>
                    </h1>
                    <p className="text-white/60 text-[18px] sm:text-[20px] max-w-2xl font-light leading-relaxed">
                        Stay up to date with our latest announcements, press releases, and milestones in our climate action journey.
                    </p>
                </div>
            </section>

            {featuredNews && (
                <section className="relative w-full bg-[#DCEAE0] py-20 sm:py-32 px-6 sm:px-8">
                    <div className="max-w-[1400px] mx-auto relative z-10">
                        <div className="w-full flex flex-col lg:flex-row gap-12 lg:gap-16 items-center bg-white border border-[#CDD8D1] rounded-[32px] overflow-hidden p-6 sm:p-10 group hover:shadow-[0_30px_60px_-15px_rgba(58,90,64,0.15)] hover:border-[#3A5A40]/30 transition-all duration-700">
                            <Link href={`/news/${featuredNews.slug}`} className="w-full lg:w-1/2 relative h-[350px] sm:h-[450px] rounded-[24px] overflow-hidden block">
                                <Image src={featuredNews.image} alt={featuredNews.title} fill className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105" unoptimized />
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
                                <div className="absolute top-6 left-6 px-4 py-2 rounded-full bg-white/90 backdrop-blur-md shadow-sm border border-[#CDD8D1] z-10">
                                    <span className="text-[#3A5A40] text-[11px] font-bold tracking-[0.15em] uppercase">Featured News</span>
                                </div>
                            </Link>

                            <div className="w-full lg:w-1/2 flex flex-col items-start py-4">
                                <div className="flex items-center gap-3 mb-6">
                                    <span className="text-[#3A5A40]/70 text-[14px] font-medium tracking-wide flex items-center gap-1.5 bg-[#3A5A40]/5 px-3 py-1 rounded-full">
                                        {featuredNews.date}
                                    </span>
                                </div>
                                <Link href={`/news/${featuredNews.slug}`} className="block w-full">
                                    <h2 className="text-[32px] sm:text-[44px] font-[600] tracking-tight text-[#111111] mb-6 leading-[1.1] hover:text-[#3A5A40] transition-colors duration-300">
                                        {featuredNews.title}
                                    </h2>
                                    <p className="text-[#111111]/60 text-[18px] leading-relaxed mb-8 max-w-xl font-light">
                                        {featuredNews.excerpt}
                                    </p>
                                </Link>

                                <Link href={`/news/${featuredNews.slug}`} className="inline-flex items-center gap-2 pb-1 border-b border-[#3A5A40]/30 text-[#3A5A40] font-semibold tracking-wide hover:border-[#3A5A40] transition-all duration-300 group/link">
                                    Read Full Story
                                    <svg className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {regularNews.length > 0 && (
                <section className="relative w-full bg-[#112419] py-24 sm:py-32 px-6 sm:px-8 border-t border-white/5">
                    <div className="max-w-[1400px] mx-auto relative z-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {regularNews.map((news) => (
                                <Link href={`/news/${news.slug}`} key={news.id} className="group relative flex flex-col rounded-[24px] overflow-hidden bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)] backdrop-blur-xl hover:border-[#D4A017]/40 transition-all duration-500 hover:shadow-[0_20px_50px_-15px_rgba(212,160,23,0.15)] hover:-translate-y-1">
                                    <div className="relative w-full h-[240px] overflow-hidden">
                                        <Image src={news.image} alt={news.title} fill className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105" unoptimized />
                                        <div className="absolute inset-0 bg-[#112419]/20 group-hover:bg-transparent transition-colors duration-500" />
                                    </div>

                                    <div className="flex flex-col flex-1 p-8">
                                        <div className="flex items-center gap-3 mb-5">
                                            <span className="text-white/40 text-[12px] font-medium tracking-wide flex items-center gap-1.5 group-hover:text-white/60 transition-colors">
                                                {news.date}
                                            </span>
                                        </div>
                                        <h3 className="text-white text-[24px] font-bold leading-snug mb-4 group-hover:text-[#D4A017] transition-colors duration-300">
                                            {news.title}
                                        </h3>
                                        <p className="text-white/50 text-[15px] leading-relaxed mb-8 flex-1 line-clamp-3 font-light">
                                            {news.excerpt}
                                        </p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            <Footer />
        </main>
    );
}
