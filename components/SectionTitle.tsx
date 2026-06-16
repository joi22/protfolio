'use client'
import { SectionTitleProps } from "@/types";
import { motion } from "motion/react";

export default function SectionTitle({ text1, text2, text3 }: SectionTitleProps) {
    return (
        <>
            <motion.p className="text-center font-medium text-accent mt-28 px-6 py-1.5 rounded-full bg-slate-900/70 border border-slate-800/80 w-max mx-auto text-xs uppercase tracking-widest"
                initial={{ y: 120, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 320, damping: 70, mass: 1 }}
            >
                {text1}
            </motion.p>
            <motion.h3 className="text-3xl sm:text-4xl font-bold text-center mx-auto mt-4 text-text-light"
                initial={{ y: 120, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 280, damping: 70, mass: 1 }}
            >
                {text2}
            </motion.h3>
            <motion.p className="text-slate-400 text-center mt-3 max-w-xl mx-auto text-sm leading-relaxed"
                initial={{ y: 120, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 240, damping: 70, mass: 1 }}
            >
                {text3}
            </motion.p>
        </>
    );
}