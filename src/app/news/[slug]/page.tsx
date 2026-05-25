import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { supabase, normalizeNews } from "@/lib/supabase";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const revalidate = 60; // ISR: revalidate every 60 seconds

// Generates dynamic metadata for SEO
export async function generateMetadata({ params }: { params: { slug: string } }) {
    const { data } = await supabase.from('news').select('*').eq('slug', params.slug).single();
    const news = normalizeNews(data);
    if (!news) return {};

    return {
        title: news.title,
        description: news.excerpt,
        openGraph: {
            title: news.title,
            description: news.excerpt,
            images: [
                {
                    url: news.image,
                    width: 800,
                    height: 600,
                    alt: news.title,
                }
            ],
            type: 'article',
            publishedTime: new Date(news.date).toISOString(),
        }
    };
}

export default async function NewsPostPage({ params }: { params: { slug: string } }) {
    const { data } = await supabase.from('news').select('*').eq('slug', params.slug).single();
    const news = normalizeNews(data);

    if (!news) {
        notFound();
    }

    return (
        <main className="w-full min-h-screen font-sans flex flex-col overflow-x-hidden bg-[#112419]">
            <div className="relative z-50 w-full bg-[#112419]">
                <Navbar />
            </div>

            <article className="max-w-[800px] mx-auto px-6 sm:px-8 py-24 sm:py-32 w-full text-white">
                <Link href="/news" className="inline-flex items-center gap-2 text-[#D4A017] hover:text-white transition-colors mb-12">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                    Back to all news
                </Link>

                <div className="mb-10">
                    <span className="inline-block px-3 py-1.5 rounded-full bg-[#D4A017]/10 text-[#D4A017] text-[11px] font-bold tracking-[0.15em] uppercase border border-[#D4A017]/20 mb-6">
                        News Update
                    </span>
                    <h1 className="text-[36px] sm:text-[48px] lg:text-[56px] font-bold leading-tight mb-8">
                        {news.title}
                    </h1>
                    
                    <div className="flex items-center gap-4 py-6 border-y border-white/10 mb-10">
                        <div>
                            <p className="text-white/50 text-[14px]">{news.date}</p>
                        </div>
                    </div>
                </div>

                <div className="relative w-full h-[300px] sm:h-[450px] rounded-[24px] overflow-hidden mb-16 border border-white/10">
                    <Image src={news.image} alt={news.title} fill className="object-cover" unoptimized priority />
                </div>

                <div className="prose prose-invert prose-lg max-w-none prose-headings:text-[#D4A017] prose-a:text-[#D4A017] hover:prose-a:text-white prose-img:rounded-2xl">
                    {news.content.split('\n').map((paragraph, idx) => {
                        if (paragraph.startsWith('###')) {
                            return <h3 key={idx} className="text-[24px] font-bold mt-10 mb-4">{paragraph.replace('### ', '')}</h3>;
                        } else if (paragraph.startsWith('-')) {
                            return <li key={idx} className="ml-4 mb-2 text-white/80">{paragraph.replace('- ', '')}</li>;
                        } else if (paragraph.trim()) {
                            return <p key={idx} className="mb-6 text-white/80 leading-relaxed font-light">{paragraph}</p>;
                        }
                        return null;
                    })}
                </div>
            </article>

            <Footer />
        </main>
    );
}
