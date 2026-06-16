'use client';
import { useState } from "react";
import SectionTitle from "@/components/SectionTitle";
import TiltCard from "@/components/TiltCard";
import { servicesData } from "@/data/services";
import { IService } from "@/types";
import { ShoppingBag, Cpu, Layers, Zap, Link2, Gauge, Check, HelpCircle, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";

export default function ServicesPage() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

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

    const faqs = [
        {
            q: "How long does it take to develop a headless Next.js Shopify store?",
            a: "Typically, a headless store setup takes 6 to 10 weeks depending on custom design specifications, checkout routing parameters, and API integration layers."
        },
        {
            q: "Do you build public or custom Shopify apps?",
            a: "We primarily build custom, private Shopify applications optimized for single stores, connecting internal ERP profiles, specific checkout features, or automated ledgers."
        },
        {
            q: "What is your process for Shopify store performance optimization?",
            a: "We audit render-blocking third-party scripts, optimize asset load pipelines, inline critical CSS, convert graphics to WebP/AVIF formats, and build modern script triggers. We target a 90+ Lighthouse Mobile Score."
        },
        {
            q: "Can you sync Shopify orders/inventory with my custom ERP?",
            a: "Yes! We build bespoke Node.js/Remix middleware bridges with BullMQ queuing systems and automatic retries to sync order, customer, and product databases in real-time."
        }
    ];

    return (
        <main className="min-h-screen pt-32 pb-24 px-6 md:px-16 lg:px-24 xl:px-32 relative text-slate-300">
            {/* Background Orbs */}
            <div className="absolute top-1/4 left-1/4 -z-10 size-[500px] bg-primary/5 blur-[140px] rounded-full pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 -z-10 size-[500px] bg-accent/5 blur-[160px] rounded-full pointer-events-none" />

            <SectionTitle 
                text1="Services Offered" 
                text2="Our Professional Expertise" 
                text3="Accelerate your e-commerce capability with custom Shopify solutions, headless checkouts, and system optimization." 
            />

            {/* Grid display of Services */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 max-w-5xl mx-auto">
                {servicesData.map((service: IService, index: number) => (
                    <motion.div
                        key={service.slug}
                        id={service.slug}
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, type: "spring", stiffness: 120, damping: 20 }}
                        className="scroll-mt-28"
                    >
                        <TiltCard className="h-full p-8 rounded-2xl border border-slate-800/60 bg-slate-900/20 hover:bg-slate-900/40 transition-colors duration-300 relative glow-border flex flex-col justify-between">
                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="size-12 rounded-xl bg-slate-800/50 flex items-center justify-center border border-slate-700/40">
                                        {getIcon(service.slug)}
                                    </div>
                                    <h3 className="text-xl font-bold text-text-light">{service.title}</h3>
                                </div>

                                <p className="text-slate-400 text-sm leading-relaxed">
                                    {service.description}
                                </p>

                                <ul className="space-y-2.5 pt-2">
                                    {service.features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                                            <div className="bg-accent/10 p-0.5 rounded-full mt-0.5 shrink-0">
                                                <Check size={12} className="text-accent" />
                                            </div>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="mt-8 pt-6 border-t border-slate-800/40 flex items-center justify-between">
                                <Link 
                                    href="/contact" 
                                    className="text-xs font-semibold text-accent hover:text-sky-300 transition-colors"
                                >
                                    Book Strategy Session →
                                </Link>
                                <span className="text-[10px] text-slate-500 font-mono">0{index + 1} / SERVICE</span>
                            </div>
                        </TiltCard>
                    </motion.div>
                ))}
            </div>

            {/* Collapsible FAQ Section */}
            <div className="mt-32 max-w-3xl mx-auto border-t border-slate-800/40 pt-20">
                <div className="text-center mb-12">
                    <span className="text-[10px] font-bold text-accent uppercase tracking-widest bg-slate-900/60 border border-slate-800 px-3 py-1 rounded-full">
                        FAQ
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-text-light mt-3">Frequently Asked Questions</h3>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, i) => {
                        const isOpen = openFaq === i;
                        return (
                            <div 
                                key={i} 
                                className="border border-slate-850 bg-slate-900/10 rounded-xl overflow-hidden transition-all duration-300"
                            >
                                <button 
                                    onClick={() => setOpenFaq(isOpen ? null : i)}
                                    className="w-full p-5 flex items-center justify-between text-left font-semibold text-slate-200 hover:text-text-light transition cursor-pointer"
                                >
                                    <span className="text-sm sm:text-base flex items-center gap-3">
                                        <HelpCircle size={16} className="text-accent shrink-0" />
                                        {faq.q}
                                    </span>
                                    <ChevronDown 
                                        size={18} 
                                        className={`text-slate-400 transition-transform duration-300 shrink-0 ml-4 ${isOpen ? "rotate-180 text-accent" : ""}`} 
                                    />
                                </button>
                                
                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                        >
                                            <div className="p-5 pt-0 border-t border-slate-850/40 text-xs sm:text-sm text-slate-400 leading-relaxed pl-12">
                                                {faq.a}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        );
                    })}
                </div>
            </div>
        </main>
    );
}
