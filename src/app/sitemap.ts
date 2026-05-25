import { MetadataRoute } from 'next';
import { supabase, normalizeArticle } from '@/lib/supabase';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = 'https://aptechlab.com.np';

    // Static routes
    const staticRoutes = ['', '/about', '/blogs', '/careers', '/services', '/teams'].map(
        (route) => ({
            url: `${baseUrl}${route}`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: route === '' ? 1 : 0.8,
        })
    );

    // Fetch articles from Supabase
    const { data: blogData } = await supabase.from('blogs').select('slug, created_at');
    const articles = (blogData || []).map(normalizeArticle).filter(Boolean);

    // Fetch news from Supabase
    const { data: newsData } = await supabase.from('news').select('slug, date');
    const newsList = (newsData || []).map(row => ({
        slug: row.slug || '',
        date: row.date ? new Date(row.date) : new Date()
    })).filter(Boolean);

    // Dynamic blog routes
    const blogRoutes = articles.map((article) => ({
        url: `${baseUrl}/blogs/${article.slug}`,
        lastModified: new Date(article.date),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
    }));

    // Dynamic news routes
    const newsRoutes = newsList.map((news) => ({
        url: `${baseUrl}/news/${news.slug}`,
        lastModified: news.date,
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

    return [...staticRoutes, ...blogRoutes, ...newsRoutes, {
        url: `${baseUrl}/news`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }];
}
