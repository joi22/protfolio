'use client';
import { useState, useMemo } from "react";
import SectionTitle from "@/components/SectionTitle";
import { projectsData } from "@/data/projects";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import { Search, ArrowRight, ArrowUpRight } from "lucide-react";

export default function ProjectsPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");

    const categories = ["All", "Shopify", "Next.js", "Custom Apps"];

    const filteredProjects = useMemo(() => {
        return projectsData.filter((project) => {
            const matchesCategory = selectedCategory === "All" || project.category === selectedCategory;
            const matchesSearch = 
                project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                project.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
                project.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
                project.techStack.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()));
            
            return matchesCategory && matchesSearch;
        });
    }, [searchQuery, selectedCategory]);

    return (
        <main className="min-h-screen pt-32 pb-24 px-6 md:px-16 lg:px-24 xl:px-32 relative">
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -z-10 size-[600px] bg-primary/5 blur-[160px] rounded-full pointer-events-none" />

            <SectionTitle 
                text1="Case Studies" 
                text2="E-Commerce Architectures" 
                text3="Explore detailed summaries of how we decoupled stores, built custom apps, and optimized page speed scores." 
            />

            {/* Filter and Search Bar */}
            <div className="mt-12 max-w-5xl mx-auto flex flex-col md:flex-row gap-6 items-center justify-between z-10 relative">
                {/* Category Pills */}
                <div className="flex flex-wrap gap-2 items-center justify-center">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-4 py-2 rounded-full text-xs font-semibold border transition-all duration-300 cursor-pointer ${
                                selectedCategory === category 
                                    ? "bg-primary border-primary text-white" 
                                    : "bg-slate-900/40 border-slate-800/80 text-slate-400 hover:text-text-light hover:border-slate-700"
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Search input */}
                <div className="relative w-full md:w-80">
                    <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500 size-4" />
                    <input 
                        type="text" 
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search by client, title, stack..."
                        className="w-full pl-10 pr-4 py-2 bg-slate-900/40 border border-slate-800/80 focus:border-accent text-slate-300 placeholder-slate-500 text-xs rounded-full outline-none transition"
                    />
                </div>
            </div>

            {/* Case Studies Catalog Grid */}
            <div className="mt-16 max-w-5xl mx-auto">
                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                key={project.slug}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4 }}
                                className="group flex flex-col h-full bg-slate-900/20 border border-slate-800/60 rounded-2xl overflow-hidden hover:border-accent/40 transition-all duration-500"
                            >
                                {/* Showcase Thumbnail */}
                                <Link href={`/projects/${project.slug}`} className="block relative aspect-video w-full overflow-hidden bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-8 flex flex-col justify-between border-b border-slate-800/60">
                                    <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl rounded-full -right-10 -bottom-10" />
                                    
                                    <div className="flex justify-between items-start z-10">
                                        <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-slate-955 border border-slate-800 text-accent">
                                            {project.category}
                                        </span>
                                        <div className="size-8 rounded-full bg-slate-955 flex items-center justify-center border border-slate-800 group-hover:border-accent/40 text-slate-400 group-hover:text-accent transition duration-300">
                                            <ArrowUpRight size={14} />
                                        </div>
                                    </div>

                                    {/* Large client name watermark */}
                                    <h4 className="text-xl font-black text-slate-800/30 tracking-widest text-center my-4 select-none group-hover:scale-105 transition duration-500">
                                        {project.client.toUpperCase()}
                                    </h4>

                                    <div className="flex flex-wrap gap-1.5 z-10">
                                        {project.techStack.slice(0, 3).map((tech, i) => (
                                            <span key={i} className="text-[9px] uppercase tracking-wider text-slate-400 px-2 py-0.5 rounded bg-slate-955 border border-slate-800">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </Link>

                                {/* Case Study info */}
                                <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                                    <div className="space-y-2">
                                        <div className="flex justify-between items-center">
                                            <span className="text-[10px] uppercase font-semibold text-slate-500 tracking-wider">
                                                Client: {project.client}
                                            </span>
                                        </div>
                                        <h3 className="text-lg font-bold text-text-light group-hover:text-accent transition-colors duration-300">
                                            <Link href={`/projects/${project.slug}`}>
                                                {project.title}
                                            </Link>
                                        </h3>
                                        <p className="text-slate-400 text-xs leading-relaxed line-clamp-2">
                                            {project.summary}
                                        </p>
                                    </div>

                                    {/* Metric preview */}
                                    <div className="flex items-center justify-between pt-4 border-t border-slate-800/40">
                                        <div>
                                            <span className="text-xs font-semibold text-slate-500 block uppercase tracking-widest text-[9px]">Key Metric</span>
                                            <span className="text-sm font-bold text-accent">{project.metrics[0].value} {project.metrics[0].label}</span>
                                        </div>
                                        <Link href={`/projects/${project.slug}`} className="inline-flex items-center gap-1.5 text-accent group-hover:text-sky-300 font-semibold text-xs transition">
                                            <span>Read Case Study</span>
                                            <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {filteredProjects.length === 0 && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-20 border border-dashed border-slate-800/60 rounded-2xl mt-12 bg-slate-900/10"
                    >
                        <p className="text-slate-500 text-sm">No case studies found matching your filters.</p>
                        <button 
                            onClick={() => { setSearchQuery(""); setSelectedCategory("All"); }}
                            className="text-accent text-xs font-semibold mt-2 hover:underline cursor-pointer"
                        >
                            Reset filters
                        </button>
                    </motion.div>
                )}
            </div>
        </main>
    );
}
