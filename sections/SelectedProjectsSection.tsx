'use client';
import SectionTitle from "@/components/SectionTitle";
import { projectsData } from "@/data/projects";
import { motion } from "motion/react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function SelectedProjectsSection() {
    return (
        <section id="selected-projects" className="px-6 md:px-16 lg:px-24 xl:px-32 py-20 relative">
            <SectionTitle 
                text1="Work" 
                text2="Selected Case Studies" 
                text3="A detailed breakdown of our latest e-commerce developments and customized Shopify apps." 
            />

            <div className="mt-16 space-y-24 max-w-5xl mx-auto">
                {projectsData.map((project, index) => {
                    const isEven = index % 2 === 0;
                    return (
                        <motion.div
                            key={project.slug}
                            initial={{ y: 80, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", stiffness: 100, damping: 20 }}
                            className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
                        >
                            {/* Visual CSS Placeholder Mockup */}
                            <Link href={`/projects/${project.slug}`} className="w-full lg:w-1/2 group block">
                                <div className="aspect-video w-full rounded-2xl bg-gradient-to-tr from-slate-900 via-slate-950 to-slate-900 border border-slate-800/80 p-8 flex flex-col justify-between hover:border-accent/40 transition-all duration-500 relative overflow-hidden">
                                    {/* Ambient Glow */}
                                    <div className="absolute -right-10 -bottom-10 size-48 bg-primary/10 group-hover:bg-primary/20 blur-2xl rounded-full transition-all duration-500" />
                                    
                                    <div className="flex justify-between items-start">
                                        <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-900 text-accent border border-slate-800/80">
                                            {project.category}
                                        </span>
                                        <div className="size-10 rounded-full bg-slate-900 flex items-center justify-center border border-slate-800 group-hover:border-accent/40 group-hover:bg-accent/10 transition-colors duration-300 text-slate-400 group-hover:text-accent">
                                            <ArrowUpRight size={18} />
                                        </div>
                                    </div>

                                    {/* Central Graphic Watermark */}
                                    <div className="text-center py-6 select-none">
                                        <h4 className="text-2xl sm:text-3xl font-extrabold tracking-widest text-slate-800/50 group-hover:text-slate-700/60 transition-colors">
                                            {project.client.toUpperCase()}
                                        </h4>
                                    </div>

                                    <div className="flex flex-wrap gap-2 z-10">
                                        {project.techStack.slice(0, 4).map((tech, i) => (
                                            <span key={i} className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold px-2 py-0.5 rounded bg-slate-900/60 border border-slate-800/40">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </Link>

                            {/* Text Description Block */}
                            <div className="w-full lg:w-1/2 space-y-6">
                                <span className="text-xs uppercase tracking-widest text-slate-500 font-semibold">{project.client}</span>
                                <h3 className="text-2xl sm:text-3xl font-bold text-text-light hover:text-accent transition duration-300">
                                    <Link href={`/projects/${project.slug}`}>
                                        {project.title}
                                    </Link>
                                </h3>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    {project.summary}
                                </p>

                                {/* Key Metrics visual highlight */}
                                <div className="grid grid-cols-3 gap-4 py-4 border-t border-b border-slate-800/40">
                                    {project.metrics.map((metric, i) => (
                                        <div key={i}>
                                            <h4 className="text-xl sm:text-2xl font-bold text-accent">{metric.value}</h4>
                                            <p className="text-[10px] uppercase font-semibold text-slate-500 tracking-wider leading-tight">{metric.label}</p>
                                        </div>
                                    ))}
                                </div>

                                <Link href={`/projects/${project.slug}`} className="inline-flex items-center gap-1.5 text-accent hover:text-sky-300 font-semibold text-sm transition group">
                                    <span>Read Case Study</span>
                                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                                </Link>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}
