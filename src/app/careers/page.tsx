import React from 'react';
import CareersHero from '@/components/CareersHero';
import CareersValues from '@/components/CareersValues';
import CareersPositions from '@/components/CareersPositions';
import Footer from '@/components/Footer';
import { supabase, normalizeCareer } from '@/lib/supabase';

import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Careers',
    description: 'Join Appropriate Technology Lab to build regenerative agriculture and climate tech solutions in Nepal. We are hiring passionate individuals to fight climate change.',
};

export const revalidate = 60;

export default async function CareersPage() {
    const { data } = await supabase.from('careers').select('*').order('created_at', { ascending: false });
    const positions = (data || []).map(normalizeCareer).filter(Boolean);

    return (
        <main className="min-h-screen bg-black w-full text-white overflow-hidden flex flex-col">
            <CareersHero />
            <CareersValues />
            <CareersPositions positions={positions} />
            <Footer />
        </main>
    );
}
