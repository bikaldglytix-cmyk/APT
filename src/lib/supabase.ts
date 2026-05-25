import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export function normalizeArticle(row: any) {
    if (!row) return null;
    return {
        id: row.id?.toString(),
        slug: row.slug || '',
        title: row.title || '',
        category: row.category || 'Updates',
        readTime: row.read_time || '5 min read',
        excerpt: row.excerpt || '',
        content: row.content || '',
        image: row.image_url || '/works/biochar.jpg',
        author: {
            name: 'Admin', // default since not in table
            avatar: '/logo/atl-logo.png'
        },
        date: row.created_at ? new Date(row.created_at).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) : 'Recent',
        featured: row.featured || false
    };
}

export function normalizeNews(row: any) {
    if (!row) return null;
    return {
        id: row.id?.toString(),
        slug: row.slug || '',
        title: row.title || '',
        excerpt: row.excerpt || '',
        content: row.content || '',
        image: row.image_url || '/works/nature.jpg',
        date: row.date ? new Date(row.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) : 'Recent'
    };
}

export function normalizeProject(row: any) {
    if (!row) return null;
    return {
        id: row.id?.toString(),
        slug: row.slug || '',
        title: row.title || '',
        category: row.category || 'PROJECT',
        description: row.description || '',
        image: row.image_url || '/works/nature.jpg',
        location: row.location || 'Nepal',
        metrics: row.metrics || [],
        content: row.content || '',
        youtube_url: row.youtube_url || '',
        additional_images: row.additional_images || []
    };
}

export function normalizeService(row: any) {
    if (!row) return null;
    return {
        id: row.id?.toString(),
        num: row.num || '01',
        title: row.title || '',
        description: row.description || ''
    };
}

export function normalizeTeamMember(row: any) {
    if (!row) return null;
    return {
        id: row.id?.toString(),
        name: row.name || '',
        role: row.role || '',
        bio: row.bio || '',
        image: row.image_url || '/logo/atl-logo.png',
        linkedin: row.linkedin || '#',
        isLeadership: row.is_leadership || false
    };
}

export function normalizeCareer(row: any) {
    if (!row) return null;
    return {
        id: row.id?.toString(),
        title: row.title || '',
        team: row.team || '',
        location: row.location || '',
        type: row.type || ''
    };
}

export function normalizePartner(row: any) {
    if (!row) return null;
    return {
        id: row.id?.toString(),
        name: row.name || '',
        logo_url: row.logo_url || '',
        website_url: row.website_url || '#'
    };
}
