import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import CoreAreasSection from "@/components/CoreAreasSection";
import ServicesSection from "@/components/ServicesSection";
import HowWeWorkSection from "@/components/HowWeWorkSection";
import ProjectsSection from "@/components/ProjectsSection";
import ReadsSection from "@/components/ReadsSection";
import PartnersMarquee from "@/components/PartnersMarquee";
import Footer from "@/components/Footer";
import type { Metadata } from 'next';
import { supabase, normalizeProject, normalizePartner } from "@/lib/supabase";

export const metadata: Metadata = {
    title: 'Appropriate Technology Lab | Top Climate Firm in Nepal',
    description: 'Bridging global expertise with local ecosystems to engineer sustainable climate solutions in Nepal.',
};

export const revalidate = 60; // ISR for homepage

export default async function Home() {
  const { data: projectsData } = await supabase.from('projects').select('*').order('created_at', { ascending: false });
  const projects = (projectsData || []).map(normalizeProject).filter(Boolean);

  const { data: partnersData } = await supabase.from('partners').select('*').order('created_at', { ascending: false });
  const partners = (partnersData || []).map(normalizePartner).filter(Boolean);

  return (
    <main className="w-full">
      <HeroSection />
      <PartnersMarquee partners={partners} />
      <AboutSection />
      <CoreAreasSection />
      <ServicesSection />
      <HowWeWorkSection />
      {projects.length > 0 && <ProjectsSection projects={projects} />}
      <ReadsSection />
      <Footer />
    </main>
  );
}
