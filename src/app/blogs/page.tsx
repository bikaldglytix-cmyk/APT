import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { supabase, normalizeArticle } from "@/lib/supabase";

export const revalidate = 60; // ISR: revalidate every 60 seconds

export default async function BlogPage() {
    const { data } = await supabase.from('blogs').select('*').order('created_at', { ascending: false });
    const articles = (data || []).map(normalizeArticle).filter(Boolean);

    const featuredArticle = articles.find(a => a?.featured) || articles[0];
    const regularArticles = articles.length > 0 && featuredArticle ? articles.filter(a => a?.id !== featuredArticle.id) : [];

    return (
        <main className="w-full min-h-screen font-sans flex flex-col overflow-x-hidden bg-[#112419]">
            {/* ═══════════════════ HERO ═══════════════════ */}
            <section className="relative min-h-[70vh] lg:min-h-[500px] w-full flex flex-col items-center overflow-hidden">
                <div className="absolute inset-0 w-full h-full z-[0]">
                    <img
                        src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=2800"
                        alt="Blog background nature"
                        className="object-cover object-center w-full h-full"
                    />
                    <div
                        className="absolute inset-0"
                        style={{
                            background: `
                                radial-gradient(ellipse at left center, rgba(5,25,10,0.6) 0%, transparent 60%),
                                linear-gradient(to bottom, rgba(10, 40, 20, 0.75) 0%, rgba(10, 40, 20, 0.55) 50%, rgba(10, 40, 20, 0.90) 100%)
                            `
                        }}
                    />
                </div>

                <div className="relative z-50 w-full">
                    <Navbar />
                </div>

                <div className="relative z-[10] flex-1 flex flex-col items-center justify-center text-center px-4 w-full max-w-[1100px] mx-auto pt-[40px] pb-10 animate-in fade-in slide-in-from-bottom-8 duration-1000">
                    <span className="text-[#D4A017] text-[13px] font-[700] tracking-[0.25em] uppercase mb-6 flex items-center gap-4">
                        <span className="w-8 h-[1px] bg-[#D4A017]"></span>
                        Insights & Reporting
                        <span className="w-8 h-[1px] bg-[#D4A017]"></span>
                    </span>
                    <h1
                        className="text-white font-[800] leading-tight w-full drop-shadow-2xl"
                        style={{ fontSize: 'clamp(2rem, 5vw, 4.5rem)' }}
                    >
                        Notes from the Field
                    </h1>

                    <p className="mt-6 text-[rgba(255,255,255,0.65)] text-[16px] sm:text-[18px] max-w-2xl font-[300] leading-relaxed">
                        In-depth articles, case studies, and field notes detailing our execution of climate technologies across Nepal.
                    </p>
                </div>
            </section>

            {/* ═══════════════════ ARTICLES CONTENT ═══════════════════ */}
            {articles.length > 0 ? (
                <>
                    {/* Featured Article */}
                    {featuredArticle && (
                        <section className="relative w-full bg-[#DCEAE0] py-20 sm:py-32 px-6 sm:px-8">
                            <div className="max-w-[1400px] mx-auto relative z-10">
                                <div className="w-full flex flex-col lg:flex-row gap-12 lg:gap-16 items-center bg-white border border-[#CDD8D1] rounded-[32px] overflow-hidden p-6 sm:p-10 group hover:shadow-[0_30px_60px_-15px_rgba(58,90,64,0.15)] hover:border-[#3A5A40]/30 transition-all duration-700">
                                    <Link href={`/blogs/${featuredArticle.slug}`} className="w-full lg:w-1/2 relative h-[350px] sm:h-[450px] rounded-[24px] overflow-hidden block">
                                        <Image src={featuredArticle.image} alt={featuredArticle.title} fill className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105" unoptimized />
                                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
                                        <div className="absolute top-6 left-6 px-4 py-2 rounded-full bg-white/90 backdrop-blur-md shadow-sm border border-[#CDD8D1] z-10">
                                            <span className="text-[11px] font-[700] tracking-[0.15em] uppercase text-[#3A5A40]">Featured</span>
                                        </div>
                                    </Link>
                                    <div className="w-full lg:w-1/2 flex flex-col justify-center">
                                        <div className="flex items-center gap-3 mb-6">
                                            <span className="inline-block px-3 py-1.5 rounded-full bg-[#F4F8F5] border border-[#CDD8D1] text-[#3A5A40] text-[11px] font-bold tracking-[0.15em] uppercase">
                                                {featuredArticle.category}
                                            </span>
                                            <span className="text-[#3A5A40]/60 text-[13px] font-medium flex items-center gap-1.5">
                                                {featuredArticle.readTime}
                                            </span>
                                        </div>
                                        <Link href={`/blogs/${featuredArticle.slug}`} className="block w-full">
                                            <h2 className="text-[32px] sm:text-[44px] font-[600] tracking-tight text-[#111111] mb-6 leading-[1.1] hover:text-[#3A5A40] transition-colors duration-300">
                                                {featuredArticle.title}
                                            </h2>
                                            <p className="text-[17px] text-[#4A5D50] leading-relaxed font-light mb-10 max-w-2xl">{featuredArticle.excerpt}</p>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </section>
                    )}

                    {/* Latest Articles */}
                    {regularArticles.length > 0 && (
                        <section className="relative w-full bg-[#112419] py-28 sm:py-40 px-6 sm:px-8">
                            <div className="max-w-[1400px] mx-auto relative z-10">
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {regularArticles.map((article) => (
                                        <Link href={`/blogs/${article.slug}`} key={article.id} className="group relative flex flex-col rounded-[24px] overflow-hidden bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)] backdrop-blur-xl hover:border-[#D4A017]/40 transition-all duration-500 hover:shadow-[0_20px_50px_-15px_rgba(212,160,23,0.15)] hover:-translate-y-1">
                                            <div className="relative w-full h-[240px] overflow-hidden">
                                                <Image src={article.image} alt={article.title} fill className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105" unoptimized />
                                                <div className="absolute inset-0 bg-[#112419]/20 group-hover:bg-transparent transition-colors duration-500" />
                                            </div>
                                            <div className="flex flex-col flex-1 p-8">
                                                <h4 className="text-white text-[22px] font-[500] tracking-tight leading-snug mb-4 group-hover:text-[#D4A017] transition-colors duration-300">{article.title}</h4>
                                                <p className="text-white/50 text-[15px] font-light leading-relaxed flex-1">{article.excerpt}</p>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </section>
                    )}
                </>
            ) : (
                /* EMPTY STATE */
                <section className="relative w-full bg-[#112419] py-32 sm:py-48 px-6 sm:px-8 flex items-center justify-center border-t border-[rgba(255,255,255,0.05)]">
                    <div className="text-center flex flex-col items-center max-w-lg">
                        <div className="w-16 h-16 rounded-full bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.05)] flex items-center justify-center mb-6">
                            <svg className="w-6 h-6 text-[#D4A017]/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                            </svg>
                        </div>
                        <h3 className="text-white text-[28px] font-[500] tracking-tight mb-4">No content available</h3>
                        <p className="text-[rgba(255,255,255,0.5)] font-light text-[17px] leading-relaxed">
                            We are currently compiling our latest field notes and research. Check back soon for updates from our climate projects.
                        </p>
                    </div>
                </section>
            )}

            {/* ═══════════════════ NEWSLETTER CTA — Light theme ═══════════════════ */}
            <section className="relative w-full py-28 sm:py-32 px-6 sm:px-8 bg-[#EBF0ED]">
                <div className="max-w-[800px] mx-auto text-center flex flex-col items-center">
                    <h2 className="text-[32px] sm:text-[40px] font-[500] leading-tight tracking-tight text-[#111111] mb-6">
                        Stay informed on Nepal&apos;s climate actions.
                    </h2>
                    <p className="text-[17px] text-[#4A5D50] leading-relaxed font-[300] max-w-xl mb-10">
                        Join our newsletter to receive the latest case studies, field reports, and environmental updates straight to your inbox.
                    </p>
                    <div className="w-full flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <input
                            type="email"
                            placeholder="Your email address"
                            className="w-full max-w-[320px] bg-white border border-[#CDD8D1] text-[#111111] px-6 py-4 rounded-[8px] focus:outline-none focus:border-[#3A5A40]/50"
                        />
                        <button className="w-full sm:w-auto bg-[#3A5A40] text-white font-[600] text-[15px] rounded-[8px] px-8 py-4 hover:bg-[#2A422F] transition-all whitespace-nowrap">
                            Subscribe
                        </button>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
