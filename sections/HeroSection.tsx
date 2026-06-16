'use client'
import { useRef, useState, useEffect } from "react";
import { CheckIcon, SparklesIcon, ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import { motion, useMotionValue, useSpring } from "motion/react";
import Marquee from "react-fast-marquee";
import MagneticButton from "@/components/MagneticButton";

export default function HeroSection() {
    const heroRef = useRef<HTMLDivElement>(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 40, stiffness: 150 };
    const blobX = useSpring(mouseX, springConfig);
    const blobY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!heroRef.current) return;
            const rect = heroRef.current.getBoundingClientRect();
            // Calculate relative offset from center
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            mouseX.set(x * 0.15); // subtle motion
            mouseY.set(y * 0.15);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    const valueProps = [
        "Headless Next.js Speed",
        "Shopify Custom Apps",
        "Direct API Syncing",
    ];

    const brandLogos = [
        "QistBazaar",
        "Renewed PC",
        "Shopify Plus",
        "Stripe",
        "QuickBooks ERP",
        "HubSpot",
        "Algolia Search",
        "Next.js Commerce"
    ];

    return (
        <div ref={heroRef} className="relative min-h-screen flex flex-col justify-between pt-36 pb-12 overflow-hidden px-6 md:px-16 lg:px-24 xl:px-32">
            {/* Interactive Glow Blobs */}
            <motion.div 
                className="absolute top-1/4 left-1/3 -z-10 size-96 bg-primary/20 blur-[140px] rounded-full pointer-events-none"
                style={{ x: blobX, y: blobY }}
            />
            <motion.div 
                className="absolute bottom-1/3 right-1/4 -z-10 size-80 bg-accent/15 blur-[160px] rounded-full pointer-events-none"
                style={{ x: blobY, y: blobX }} // inverted for opposite parallax
            />

            <div className="flex flex-col items-center justify-center flex-grow text-center max-w-4xl mx-auto z-10">
                {/* Floating Badge */}
                <motion.div
                    className="flex items-center gap-2 rounded-full px-4 py-1.5 mb-6 text-xs font-semibold bg-slate-900 border border-slate-800 text-accent"
                    initial={{ y: -30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1, type: "spring" }}
                >
                    <SparklesIcon size={12} className="text-accent animate-pulse" />
                    <span>Premium Shopify & Full Stack Engineering</span>
                </motion.div>

                {/* Main Heading */}
                <motion.h1 
                    className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-text-light leading-[1.1] mb-6"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 100, damping: 20 }}
                >
                    Shopify Developer &<br />
                    <span className="move-gradient bg-clip-text text-transparent pb-2">Full Stack Engineer</span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p 
                    className="text-base sm:text-lg md:text-xl text-slate-400 max-w-2xl mb-8 leading-relaxed"
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1, type: "spring" }}
                >
                    We design, build, and scale ultra-fast headless storefronts, complex custom Shopify application integrations, and robust payment structures that drive sales.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div 
                    className="flex flex-wrap items-center justify-center gap-4 mb-12"
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, type: "spring" }}
                >
                    <MagneticButton>
                        <Link href="/projects" className="flex items-center gap-2 bg-primary hover:bg-blue-700 text-white font-semibold px-8 py-3.5 rounded-full transition shadow-lg shadow-primary/20">
                            <span>View My Work</span>
                            <ArrowRightIcon size={16} />
                        </Link>
                    </MagneticButton>

                    <MagneticButton>
                        <Link href="/contact" className="flex items-center gap-2 border border-slate-800 bg-slate-900/60 hover:bg-slate-900 text-slate-300 font-semibold px-8 py-3.5 rounded-full transition backdrop-blur-sm">
                            Book a Strategy Call
                        </Link>
                    </MagneticButton>
                </motion.div>

                {/* Value Propositions */}
                <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12">
                    {valueProps.map((item, index) => (
                        <motion.div 
                            className="flex items-center gap-2" 
                            key={index}
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.3 + index * 0.1, type: "spring" }}
                        >
                            <div className="bg-accent/10 p-1 rounded-full border border-accent/20">
                                <CheckIcon className="size-3.5 text-accent" />
                            </div>
                            <span className="text-sm text-slate-300 font-medium">{item}</span>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Trusted By / Brands Marquee */}
            <motion.div 
                className="w-full mt-24 border-t border-b border-slate-800/40 py-6 bg-slate-900/20 backdrop-blur-sm"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
            >
                <p className="text-center text-xs font-semibold text-slate-500 uppercase tracking-widest mb-4">
                    Trusted by scale e-commerce brands worldwide
                </p>
                <Marquee gradient={true} gradientColor="rgba(17, 24, 39, 0.95)" speed={40}>
                    {brandLogos.map((brand, i) => (
                        <div key={i} className="mx-12 text-slate-400 hover:text-accent font-bold text-lg tracking-wider transition-colors duration-300 cursor-default">
                            {brand}
                        </div>
                    ))}
                </Marquee>
            </motion.div>
        </div>
    );
}