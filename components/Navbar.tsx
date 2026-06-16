'use client'
import { MenuIcon, XIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { usePathname } from "next/navigation";
import { navlinks } from "@/data/navlinks";
import { INavLink } from "@/types";
import MagneticButton from "@/components/MagneticButton";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <>
            <motion.nav className="fixed top-0 z-50 flex items-center justify-between w-full py-4 px-6 md:px-16 lg:px-24 xl:px-32 bg-bg-main/80 backdrop-blur-md border-b border-slate-800/40"
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1 }}
            >
                <motion.div 
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary to-accent origin-left z-50"
                    style={{ scaleX }}
                />

                <Link href="/">
                    <div className="flex items-center gap-2 cursor-pointer">
                        <span className="text-xl font-bold tracking-wider text-text-light">UZAIR.DEV</span>
                        <span className="size-2 bg-accent rounded-full animate-pulse" />
                    </div>
                </Link>

                <div className="hidden md:flex items-center gap-8 transition duration-500">
                    {navlinks.map((link: INavLink) => {
                        const isActive = pathname === link.href || (link.href !== "/" && pathname?.startsWith(link.href));
                        return (
                            <Link 
                                key={link.name} 
                                href={link.href} 
                                className={`relative text-sm font-medium transition duration-300 py-1 hover:text-accent ${isActive ? "text-accent" : "text-slate-300"}`}
                            >
                                {link.name}
                                {isActive && (
                                    <motion.div 
                                        layoutId="activeNavIndicator"
                                        className="absolute -bottom-1 left-0 right-0 h-[1.5px] bg-accent"
                                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                    />
                                )}
                            </Link>
                        );
                    })}
                </div>

                <MagneticButton className="hidden md:block">
                    <Link href="/contact" className="px-6 py-2 bg-primary hover:bg-blue-700 active:scale-95 transition-all text-xs font-semibold text-white rounded-full block">
                        Get In Touch
                    </Link>
                </MagneticButton>

                <button onClick={() => setIsOpen(true)} className="md:hidden text-text-light">
                    <MenuIcon size={26} className="active:scale-90 transition" />
                </button>
            </motion.nav>

            <div className={`fixed inset-0 z-[100] bg-bg-main/95 backdrop-blur flex flex-col items-center justify-center text-lg gap-8 md:hidden transition-transform duration-400 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
                <button onClick={() => setIsOpen(false)} className="absolute top-6 right-6 text-text-light p-2 bg-slate-800 rounded-full">
                    <XIcon size={24} />
                </button>

                {navlinks.map((link: INavLink) => {
                    const isActive = pathname === link.href || (link.href !== "/" && pathname?.startsWith(link.href));
                    return (
                        <Link 
                            key={link.name} 
                            href={link.href} 
                            onClick={() => setIsOpen(false)}
                            className={`text-2xl font-semibold transition ${isActive ? "text-accent" : "text-slate-300"}`}
                        >
                            {link.name}
                        </Link>
                    );
                })}

                <Link 
                    href="/contact" 
                    onClick={() => setIsOpen(false)}
                    className="mt-4 px-8 py-3 bg-primary hover:bg-blue-700 text-white rounded-full text-base font-semibold transition"
                >
                    Get In Touch
                </Link>
            </div>
        </>
    );
}