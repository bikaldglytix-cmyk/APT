import React from "react";
import type { Metadata } from 'next';
import ServicesContent from "@/components/ServicesContent";
import { supabase, normalizeService } from "@/lib/supabase";

export const metadata: Metadata = {
    title: 'Services | Aptech Lab',
    description: 'Our environmental infrastructure solutions and services.',
};

export const revalidate = 60;

export default async function ServicesPage() {
    const { data } = await supabase.from('services').select('*').order('num', { ascending: true });
    const services = (data || []).map(normalizeService).filter(Boolean) as any[];

    return <ServicesContent services={services} />;
}
