'use client';
import { useState, useMemo } from "react";
import SectionTitle from "@/components/SectionTitle";
import { projectsData } from "@/data/projects";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import { Search, ArrowUpRight, Grid, Filter } from "lucide-react";

// Expand projects local dataset to show a rich portfolio layout
const allPortfolioItems = [
    ...projectsData,
    {
        slug: "stripe-subscriptions",
        title: "Stripe Subscription Dashboard Bridge",
        client: "SaaS Ventures",
        summary: "Created a headless customer portal for managing multi-tier subscriptions and usage-based automated billing.",
        category: "Custom Apps" as const,
        techStack: ["React", "Node.js", "Stripe API", "Tailwind CSS"],
        metrics: [{ label: "Churn Reduction", value: "-15%" }],
        coverImage: ""
    },
    {
        slug: "dawn-cro-redesign",
        title: "Shopify Dawn Theme CRO Overhaul",
        client: "Vogue Boutique",
        summary: "Restructured the product detail pages and slide-out cart schemas using custom Liquid sections, boosting orders.",
        category: "Shopify" as const,
        techStack: ["Shopify Liquid", "Vanilla JS", "Tailwind CSS", "CRO"],
        metrics: [{ label: "Cart Completion", value: "+24%" }],
        coverImage: ""
    },
    {
        slug: "headless-cart-ui",
        title: "Micro Headless Cart UI Component",
        client: "Lux Watch Co",
        summary: "Designed a clean, minimalist checkout slider interface focusing on mobile swipe-to-buy micro-interactions.",
        category: "UI/UX" as const,
        techStack: ["Figma", "Tailwind CSS", "Framer Motion", "React"],
        metrics: [{ label: "Cart Loading Speed", value: "0.2s" }],
        coverImage: ""
    }
];

export default function PortfolioPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");

    const categories = ["All", "Shopify", "Next.js", "Custom Apps", "UI/UX"];

    const filteredItems = useMemo(() => {
        return allPortfolioItems.filter((item) => {
            const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
            const matchesSearch = 
                item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                item.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
                item.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
                item.techStack.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()));
            
            return matchesCategory && matchesSearch;
        });
    }, [searchQuery, selectedCategory]);

    return (
        <main className="min-h-screen pt-32 pb-24 px-6 md:px-16 lg:px-24 xl:px-32 relative text-slate-300">
            {/* Background Radial Glow */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -z-10 size-[600px] bg-primary/5 blur-[150px] rounded-full pointer-events-none" />

            <SectionTitle 
                text1="Portfolio" 
                text2="Visual Gallery of Work" 
                text3="A collection of specialized e-commerce setups, customized applications, and high-fidelity interfaces." 
            />

            {/* Filter and Search Bar */}
            <div className="mt-12 max-w-5xl mx-auto flex flex-col md:flex-row gap-6 items-center justify-between z-10 relative">
                {/* Category Tabs */}
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

                {/* Search Box */}
                <div className="relative w-full md:w-80">
                    <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500 size-4" />
                    <input 
                        type="text" 
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search portfolio items..."
                        className="w-full pl-10 pr-4 py-2 bg-slate-900/40 border border-slate-800/80 focus:border-accent text-slate-300 placeholder-slate-500 text-xs rounded-full outline-none transition"
                    />
                </div>
            </div>

            {/* Staggered Grid Catalog */}
            <div className="mt-16 max-w-5xl mx-auto">
                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <AnimatePresence mode="popLayout">
                        {filteredItems.map((item, index) => {
                            // Introduce staggered height classes for masonry feel
                            const heightClass = index % 3 === 0 ? "h-96" : index % 3 === 1 ? "h-80" : "h-[340px]";
                            
                            return (
                                <motion.div
                                    key={item.slug}
                                    layout
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.4 }}
                                    className={`group relative flex flex-col justify-between p-6 rounded-2xl border border-slate-850 bg-slate-900/10 hover:bg-slate-900/30 hover:border-accent/40 transition-all duration-500 overflow-hidden ${heightClass}`}
                                >
                                    {/* Subtle Ambient Background Blob */}
                                    <div className="absolute -right-10 -bottom-10 size-40 bg-accent/5 group-hover:bg-accent/10 blur-2xl rounded-full transition-all duration-500 pointer-events-none" />

                                    <div className="space-y-4">
                                        <div className="flex justify-between items-start">
                                            <span className="text-[9px] uppercase font-bold tracking-widest px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-accent">
                                                {item.category}
                                            </span>
                                            {item.slug.includes("cro") || item.slug.includes("subscriptions") || item.slug.includes("cart") ? (
                                                <div className="size-6 text-slate-500 flex items-center justify-center">
                                                    <Grid size={14} />
                                                </div>
                                            ) : (
                                                <Link 
                                                    href={`/projects/${item.slug}`} 
                                                    className="size-7 rounded-full bg-slate-900 flex items-center justify-center border border-slate-800 text-slate-400 group-hover:text-accent group-hover:border-accent/40 transition-colors"
                                                >
                                                    <ArrowUpRight size={14} />
                                                </Link>
                                            )}
                                        </div>

                                        <div className="space-y-1">
                                            <span className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider block">
                                                {item.client}
                                            </span>
                                            <h3 className="text-base font-bold text-text-light group-hover:text-accent transition-colors duration-300">
                                                {item.slug.includes("cro") || item.slug.includes("subscriptions") || item.slug.includes("cart") ? (
                                                    item.title
                                                ) : (
                                                    <Link href={`/projects/${item.slug}`}>
                                                        {item.title}
                                                    </Link>
                                                )}
                                            </h3>
                                        </div>

                                        <p className="text-slate-400 text-xs leading-relaxed line-clamp-4">
                                            {item.summary}
                                        </p>
                                    </div>

                                    <div className="pt-4 border-t border-slate-800/40 flex items-center justify-between z-10">
                                        <div className="flex flex-wrap gap-1">
                                            {item.techStack.slice(0, 3).map((tech, i) => (
                                                <span key={i} className="text-[8px] uppercase tracking-wider text-slate-400 font-medium px-1.5 py-0.5 rounded bg-slate-950/60 border border-slate-800/40">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                        
                                        <div className="text-right shrink-0 ml-2">
                                            <span className="text-[8px] uppercase font-semibold text-slate-500 tracking-wider block">Metric</span>
                                            <span className="text-xs font-bold text-accent">{item.metrics[0].value}</span>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </motion.div>

                {filteredItems.length === 0 && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-20 border border-dashed border-slate-800/60 rounded-2xl mt-12 bg-slate-900/10"
                    >
                        <p className="text-slate-500 text-sm">No items found matching your filters.</p>
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
