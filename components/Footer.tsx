'use client'
import { footerData } from "@/data/footer";
import { Github, Linkedin, Instagram } from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";
import { IFooterLink } from "@/types";

export default function Footer() {
    return (
        <footer className="flex flex-col-reverse md:flex-row justify-between overflow-hidden gap-10 md:gap-20 mt-40 py-12 px-6 md:px-16 lg:px-24 xl:px-32 text-[13px] text-gray-500 border-t border-slate-900 bg-slate-950/20">
            <motion.div className="flex flex-wrap items-start gap-10 md:gap-24"
                initial={{ x: -150, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 280, damping: 70, mass: 1 }}
            >
                <Link href="/">
                    <div className="flex items-center gap-1.5 cursor-pointer">
                        <span className="text-sm font-bold tracking-wider text-text-light">UZAIR.DEV</span>
                        <span className="size-1.5 bg-accent rounded-full animate-pulse" />
                    </div>
                </Link>
                
                {footerData.map((section, index) => (
                    <div key={index}>
                        <p className="text-slate-200 font-semibold">{section.title}</p>
                        <ul className="mt-2 space-y-2">
                            {section.links.map((link: IFooterLink, index: number) => (
                                <li key={index}>
                                    <Link href={link.href} className="hover:text-accent transition">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </motion.div>
            
            <motion.div className="flex flex-col max-md:items-center max-md:text-center gap-2 items-end"
                initial={{ x: 150, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 280, damping: 70, mass: 1 }}
            >
                <p className="max-w-60 text-slate-400">Engineering premium headless stores and custom Shopify integrations.</p>
                <div className="flex items-center gap-4 mt-3">
                    <a href="https://github.com/joi22" target="_blank" rel="noreferrer">
                        <Github className="size-5 hover:text-accent transition" />
                    </a>
                    <a href="https://www.linkedin.com/in/muhammad-uzair-b96379263/" target="_blank" rel="noreferrer">
                        <Linkedin className="size-5 hover:text-accent transition" />
                    </a>
                    <a href="https://www.instagram.com/uzair.mohmmad.315/" target="_blank" rel="noreferrer">
                        <Instagram className="size-5 hover:text-accent transition" />
                    </a>
                </div>
                <p className="mt-3 text-slate-500">&copy; {new Date().getFullYear()} UzairDR. All rights reserved.</p>
            </motion.div>
        </footer>
    );
}