'use client';
import { motion } from "motion/react";
import { statsData } from "@/data/about";

export default function StatsSection() {
    return (
        <section className="px-6 md:px-16 lg:px-24 xl:px-32 py-16 bg-slate-950/30 border-y border-slate-800/40 relative">
            <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
                {statsData.map((stat, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, type: "spring", stiffness: 100, damping: 15 }}
                        className="text-center group"
                    >
                        <h3 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent mb-2 group-hover:scale-105 transition-transform duration-300">
                            {stat.value}
                        </h3>
                        <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-slate-500">
                            {stat.label}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
