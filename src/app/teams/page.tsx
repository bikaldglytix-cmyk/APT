import React from "react";
import type { Metadata } from 'next';
import TeamsContent from "@/components/TeamsContent";
import { supabase, normalizeTeamMember } from "@/lib/supabase";

export const metadata: Metadata = {
    title: 'Teams | Aptech Lab',
    description: 'Meet the team behind Aptech Lab.',
};

export const revalidate = 60;

export default async function TeamsPage() {
    const { data } = await supabase.from('teams').select('*').order('created_at', { ascending: true });
    const members = (data || []).map(normalizeTeamMember).filter(Boolean) as any[];

    const leadership = members.filter(m => m.isLeadership);
    const coreTeam = members.filter(m => !m.isLeadership);

    return <TeamsContent leadership={leadership} coreTeam={coreTeam} />;
}
