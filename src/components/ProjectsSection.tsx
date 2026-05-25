"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function ProjectsSection({ projects }: { projects: any[] }) {
    const [activeIndex, setActiveIndex] = useState(0);
    const activeProject = projects[activeIndex];

    if (!activeProject) return null;

    return (
        <section className="relative w-full min-h-[100vh] lg:min-h-[800px] flex flex-col justify-center overflow-hidden bg-black py-24">

            {/* Full Viewport Background Imagery */}
            {projects.map((project, index) => (
                <div
                    key={project.id}
                    className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${activeIndex === index ? "opacity-100 z-0" : "opacity-0 z-0 pointer-events-none"
                        }`}
                >
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover opacity-60"
                        unoptimized
                        priority={index === 0}
                    />
                </div>
            ))}

            {/* Gradient Overlays for Text Legibility */}
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/90 via-black/40 to-black/20 pointer-events-none" />
            <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/80 via-transparent to-black/40 pointer-events-none" />

            {/* Main Content Container in Standard Flow */}
            <div className="relative z-20 w-full max-w-[1400px] mx-auto px-6 sm:px-12 flex flex-col">

                {/* Top Title */}
                <div className="w-full text-center mb-16 sm:mb-24">
                    <h2 className="text-white text-[40px] sm:text-[56px] font-bold tracking-tight">
                        Our Projects
                    </h2>
                </div>

                {/* Center Content Row */}
                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between w-full gap-12">

                    {/* Left Typography Focus */}
                    <div className="w-full lg:w-[60%] flex flex-col items-start min-h-[200px]">
                        <div
                            key={activeProject.id}
                            className="animate-fade-in-up w-full"
                        >
                            <span className="inline-block px-4 py-1.5 border border-white/20 rounded-full text-white text-[11px] font-bold tracking-[0.2em] uppercase mb-6 backdrop-blur-sm bg-black/20">
                                {activeProject.category}
                            </span>
                            <h3 className="text-white text-[48px] sm:text-[64px] lg:text-[72px] font-bold leading-[1.05] mb-6 tracking-tight drop-shadow-[0_0_30px_rgba(255,255,255,0.15)]">
                                {activeProject.title}
                            </h3>
                            <p className="text-[16px] sm:text-[18px] text-white/90 font-light leading-relaxed max-w-lg mb-10">
                                {activeProject.description}
                            </p>

                            {/* Embedded Thumbnails Navigation */}
                            <div className="w-full flex gap-4 overflow-x-auto pb-4 scrollbar-hide pointer-events-auto">
                                {projects.map((project, index) => (
                                    <button
                                        key={project.id}
                                        onClick={() => setActiveIndex(index)}
                                        className={`relative w-[180px] h-[120px] rounded-[16px] overflow-hidden flex-shrink-0 transition-all duration-300 focus:outline-none text-left flex flex-col justify-end p-3 ${activeIndex === index
                                            ? "border-2 border-[#D4A017] ring-4 ring-[#D4A017]/30 scale-100 z-10 opacity-100 shadow-[0_0_20px_rgba(212,160,23,0.3)]"
                                            : "border border-white/10 opacity-60 scale-95 hover:opacity-100 hover:scale-100 hover:ring-2 hover:ring-white/20"
                                            }`}
                                    >
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover -z-10"
                                            unoptimized
                                        />
                                        <div className={`absolute inset-0 -z-10 transition-colors ${activeIndex === index ? "bg-black/30" : "bg-black/60"}`} />

                                        <span className="text-white/80 text-[9px] font-bold tracking-wider uppercase drop-shadow-md relative z-10">
                                            {project.title}
                                        </span>
                                        <span className="text-white font-medium text-[12px] drop-shadow-md truncate w-full relative z-10">
                                            {project.location}
                                        </span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Metrics Stack */}
                    <div className="w-full lg:w-[30%] flex flex-row lg:flex-col gap-8 lg:gap-16 justify-end items-start lg:items-end min-h-[200px]">
                        {activeProject.metrics.map((metric, i) => (
                            <div key={i} className="flex flex-col items-start lg:items-end animate-fade-in-up" style={{ animationDelay: `${i * 100}ms` }}>
                                <div className="text-[#D4A017] text-[40px] lg:text-[56px] font-semibold leading-none mb-2">
                                    {metric.value}
                                </div>
                                <div className="text-white text-[12px] lg:text-[14px] font-bold tracking-[0.2em] text-center lg:text-right">
                                    {metric.label}
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>

            {/* Global animation style block for the fade-in-up effect across layout swaps */}
            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in-up {
                    animation: fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                }
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}} />
        </section>
    );
}
