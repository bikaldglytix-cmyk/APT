import React from "react";
import Image from "next/image";
import Link from "next/link";
import { supabase, normalizeArticle } from "@/lib/supabase";

export default async function ReadsSection() {
    const { data } = await supabase.from('blogs').select('*').order('created_at', { ascending: false }).limit(3);
    const articles = (data || []).map(normalizeArticle).filter(Boolean);

    const featuredArticle = articles[0];
    const sideArticles = articles.slice(1);

    return (
        <section
            id="reads"
            className="relative w-full py-28 sm:py-36 overflow-hidden bg-[#060d08]"
        >
            {/* Ambient Background Glows */}
            <div
                className="absolute top-[20%] left-[-10%] w-[800px] h-[800px] rounded-full pointer-events-none opacity-[0.15] blur-[120px]"
                style={{ background: "radial-gradient(circle, #D4A017 0%, transparent 70%)" }}
            />
            <div
                className="absolute bottom-[10%] right-[-10%] w-[600px] h-[600px] rounded-full pointer-events-none opacity-[0.1] blur-[100px]"
                style={{ background: "radial-gradient(circle, #D4A017 0%, transparent 70%)" }}
            />

            <div className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-12">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                    <div className="max-w-2xl">
                        <span className="inline-block px-4 py-1.5 rounded-full border border-[#D4A017]/30 text-[#D4A017] text-[10px] sm:text-[11px] font-bold tracking-[0.25em] uppercase mb-6 backdrop-blur-md bg-[#D4A017]/10">
                            INSIGHTS &amp; STORIES
                        </span>
                        <h2 className="text-white text-[48px] sm:text-[64px] lg:text-[72px] font-bold tracking-tight leading-[1.05]">
                            From Our Reads
                        </h2>
                    </div>
                    {articles.length > 0 && (
                        <div className="hidden md:block">
                            <Link
                                href="/blogs"
                                className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white text-[15px] font-medium tracking-wide overflow-hidden hover:border-[#D4A017]/50 hover:bg-white/10 hover:shadow-[0_0_20px_rgba(212,160,23,0.2)] transition-all duration-300"
                            >
                                <span className="relative z-10 transition-colors duration-300 group-hover:text-[#D4A017]">View All Articles</span>
                                {/* Inner glow on hover */}
                                <div className="absolute inset-0 bg-gradient-to-r from-[#D4A017]/0 via-[#D4A017]/20 to-[#D4A017]/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-[1.5s] ease-in-out" />
                                <svg
                                    className="relative z-10 w-5 h-5 text-white/50 group-hover:text-[#D4A017] transition-all duration-300 group-hover:translate-x-1"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Link>
                        </div>
                    )}
                </div>

                {articles.length > 0 ? (
                    /* Asymmetric Editable Grid: 1 Featured (Left 2-cols) + 2 Stacked (Right 1-col) */
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 min-h-[600px]">

                        {/* Left: Featured Large Article */}
                        <Link href={`/blogs/${featuredArticle.slug}`} className="lg:col-span-2 group relative rounded-[24px] overflow-hidden block h-full min-h-[500px] border border-white/[0.05] hover:border-[#D4A017]/50 transition-all duration-700 hover:shadow-[0_0_80px_-10px_rgba(212,160,23,0.3)]">
                            <Image
                                src={featuredArticle.image}
                                alt={featuredArticle.title}
                                fill
                                className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                                unoptimized
                                priority
                            />
                            {/* Cinematic Gradients for Featured Card */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />
                            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent opacity-80" />

                            <div className="absolute inset-0 p-8 sm:p-12 flex flex-col justify-end">
                                <div className="max-w-2xl transform transition-transform duration-500 group-hover:translate-y-[-8px]">
                                    <div className="flex items-center gap-3 mb-6">
                                        <span className="inline-block px-3.5 py-1.5 rounded-full bg-[#D4A017] text-[#1a1a1a] text-[11px] font-bold tracking-[0.15em] uppercase shadow-[0_0_20px_rgba(212,160,23,0.4)]">
                                            {featuredArticle.category}
                                        </span>
                                        <span className="text-white/70 text-[13px] font-medium tracking-wide flex items-center gap-1.5 backdrop-blur-sm bg-black/30 px-3 py-1 rounded-full">
                                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                            {featuredArticle.readTime}
                                        </span>
                                    </div>
                                    <h3 className="text-white text-[32px] sm:text-[48px] font-bold leading-tight mb-5 group-hover:text-[#D4A017] transition-colors duration-500">
                                        {featuredArticle.title}
                                    </h3>
                                    <p className="text-white/70 text-[16px] sm:text-[18px] leading-relaxed mb-8 max-w-xl opacity-80 group-hover:opacity-100 transition-opacity duration-500">
                                        {featuredArticle.excerpt}
                                    </p>

                                    {/* Author Row */}
                                    <div className="flex items-center justify-between pt-6 border-t border-white/10">
                                        <div className="flex items-center gap-4">
                                            <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-[#D4A017]/30 group-hover:ring-[#D4A017] transition-all duration-500">
                                                <Image src={featuredArticle.author.avatar} alt={featuredArticle.author.name} fill className="object-cover" unoptimized />
                                            </div>
                                            <div>
                                                <p className="text-white text-[15px] font-semibold">{featuredArticle.author.name}</p>
                                                <p className="text-white/40 text-[13px]">{featuredArticle.date}</p>
                                            </div>
                                        </div>
                                        <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#D4A017] group-hover:border-[#D4A017] group-hover:text-black text-white transition-all duration-500 transform group-hover:scale-110">
                                            <svg className="w-5 h-5 transition-transform duration-500 group-hover:-rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>

                        {/* Right: Stacked Articles */}
                        <div className="flex flex-col gap-6 lg:gap-8">
                            {sideArticles.map((article) => (
                                <Link href={`/blogs/${article.slug}`} key={article.id} className="group relative flex-1 rounded-[24px] overflow-hidden bg-white/[0.02] border border-white/[0.05] backdrop-blur-xl hover:border-[#D4A017]/50 transition-all duration-500 hover:shadow-[0_12px_40px_-10px_rgba(212,160,23,0.25)] hover:-translate-y-1 hover:bg-white/[0.04]">
                                    {/* Glass shine effect inner */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                                    <div className="flex flex-col h-full p-6 sm:p-8">
                                        <div className="flex items-center justify-between mb-5">
                                            <span className="inline-block px-3 py-1 rounded-full bg-[#D4A017]/10 border border-[#D4A017]/20 text-[#D4A017] text-[10px] font-bold tracking-[0.15em] uppercase group-hover:bg-[#D4A017] group-hover:text-[#1a1a1a] transition-all duration-300">
                                                {article.category}
                                            </span>
                                            <span className="text-white/40 text-[11px] font-medium tracking-wide flex items-center gap-1 group-hover:text-white/70 transition-colors">
                                                {article.readTime}
                                            </span>
                                        </div>
                                        <h3 className="text-white text-[22px] sm:text-[26px] font-bold leading-snug mb-3 group-hover:text-[#D4A017] transition-colors duration-300">
                                            {article.title}
                                        </h3>
                                        <p className="text-white/50 text-[14px] leading-relaxed mb-6 flex-1 line-clamp-3">
                                            {article.excerpt}
                                        </p>
                                        <div className="flex items-center gap-3 pt-5 border-t border-white/[0.05]">
                                            <div className="relative w-8 h-8 rounded-full overflow-hidden">
                                                <Image src={article.author.avatar} alt={article.author.name} fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500" unoptimized />
                                            </div>
                                            <div>
                                                <p className="text-white/90 text-[13px] font-medium">{article.author.name}</p>
                                            </div>
                                            <div className="ml-auto w-8 h-8 rounded-full border border-white/10 flex items-center justify-center opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 group-hover:bg-[#D4A017]/10 group-hover:border-[#D4A017]/30 transition-all duration-300">
                                                <svg className="w-4 h-4 text-[#D4A017]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center min-h-[400px] rounded-[32px] border border-white/5 bg-white/[0.02] backdrop-blur-sm p-12 text-center group">
                        <div className="w-20 h-20 rounded-full bg-[#D4A017]/10 flex items-center justify-center mb-8 ring-1 ring-[#D4A017]/20 group-hover:scale-110 transition-transform duration-500">
                            <svg className="w-8 h-8 text-[#D4A017]/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                            </svg>
                        </div>
                        <p className="text-white/40 text-[18px] font-medium tracking-wide">
                            No reads published currently
                        </p>
                        <div className="mt-8 flex gap-4">
                            <div className="w-1 h-1 rounded-full bg-[#D4A017]/20" />
                            <div className="w-1 h-1 rounded-full bg-[#D4A017]/40" />
                            <div className="w-1 h-1 rounded-full bg-[#D4A017]/20" />
                        </div>
                    </div>
                )}

                {/* Mobile View All CTA (Hidden on Desktop) */}
                {articles.length > 0 && (
                    <div className="mt-12 text-center md:hidden">
                        <Link
                            href="/blogs"
                            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#D4A017]/10 border border-[#D4A017]/30 text-[#D4A017] text-[14px] font-semibold tracking-wide"
                        >
                            View All Articles
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                        </Link>
                    </div>
                )}
            </div>
        </section>
    );
}
