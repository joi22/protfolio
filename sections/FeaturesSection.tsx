'use client'
import SectionTitle from "@/components/SectionTitle";
import { ShoppingBag, Cpu, Layers, Zap, Link2, Gauge, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { servicesData } from "@/data/services";
import { IService } from "@/types";
import Link from "next/link";

export default function FeaturesSection() {
    const getIcon = (slug: string) => {
        switch (slug) {
            case "shopify-store-development":
                return <ShoppingBag className="size-6 text-accent" />;
            case "shopify-custom-apps":
                return <Cpu className="size-6 text-accent" />;
            case "shopify-theme-customization":
                return <Layers className="size-6 text-accent" />;
            case "next-js-development":
                return <Zap className="size-6 text-accent" />;
            case "api-integration":
                return <Link2 className="size-6 text-accent" />;
            case "performance-optimization":
                return <Gauge className="size-6 text-accent" />;
            default:
                return <Zap className="size-6 text-accent" />;
        }
    };

    return (
        <section id="features" className="px-6 md:px-16 lg:px-24 xl:px-32 py-20 relative">
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 size-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

            <SectionTitle 
                text1="Services" 
                text2="High-Performance Solutions" 
                text3="From responsive liquid stores to custom integrations, we build e-commerce solutions that scale with your growth." 
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 max-w-6xl mx-auto">
                {servicesData.map((service: IService, index: number) => (
                    <motion.div 
                        key={service.slug}
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, type: "spring", stiffness: 150, damping: 20 }}
                        className="group"
                    >
                        <div className="h-full p-8 rounded-2xl border border-slate-800/60 bg-slate-900/30 hover:bg-slate-900/60 transition-all duration-300 relative glow-border flex flex-col justify-between">
                            <div className="space-y-4">
                                <div className="size-12 rounded-xl bg-slate-800/50 flex items-center justify-center border border-slate-700/40 group-hover:scale-110 group-hover:border-accent/40 group-hover:bg-accent/5 transition-all duration-300">
                                    {getIcon(service.slug)}
                                </div>
                                <h3 className="text-lg font-semibold text-text-light group-hover:text-accent transition-colors duration-300">
                                    {service.title}
                                </h3>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    {service.description}
                                </p>
                            </div>

                            <div className="mt-6 pt-4 border-t border-slate-800/40 flex items-center justify-between text-xs font-semibold text-slate-500 group-hover:text-accent transition-colors duration-300">
                                <Link href={`/services#${service.slug}`} className="flex items-center gap-1.5 hover:underline">
                                    <span>Explore Details</span>
                                    <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Sub-Showcase Statement */}
            <div className="mt-32 max-w-4xl mx-auto text-center border-t border-slate-800/40 pt-16">
                <motion.h4 
                    className="text-xl sm:text-2xl font-semibold text-slate-300 mb-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    Need a custom headless store or specialized integration?
                </motion.h4>
                <p className="text-slate-400 text-sm max-w-xl mx-auto mb-6">
                    Our team works closely with Shopify Plus clients to decouple templates, improve speed scores, and automate custom financing portals.
                </p>
                <Link href="/contact" className="inline-flex items-center gap-1.5 text-accent hover:text-sky-300 font-semibold text-sm transition group">
                    <span>Discuss Your Project</span>
                    <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
                </Link>
            </div>
        </section>
    );
}