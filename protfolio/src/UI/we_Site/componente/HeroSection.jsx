import React from 'react'
import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import {
    FaGithub, FaLinkedin, FaTwitter,
    FaReact, FaNodeJs, FaShopify,
    FaArrowRight, FaDownload, FaPlay
} from 'react-icons/fa'
import { SiMongodb, SiExpress, SiTailwindcss } from 'react-icons/si'

/* ═══════════════════════════════════════
   FLOATING TECH ICON
═══════════════════════════════════════ */
const FloatingIcon = ({ icon, style, delay = 0, label, glowColor = '#10b981' }) => (
    <motion.div
        style={style}
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: 3 + delay * 0.4, repeat: Infinity, ease: 'easeInOut', delay }}
        className="absolute z-30 flex flex-col items-center gap-2"
    >
        <motion.div
            animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay }}
            style={{ boxShadow: `0 0 22px 6px ${glowColor}40` }}
            className="absolute inset-0 rounded-2xl pointer-events-none"
        />
        <motion.div
            whileHover={{ scale: 1.15, rotate: [0, -5, 5, 0] }}
            transition={{ type: 'spring', stiffness: 300 }}
            style={{
                border: `1px solid ${glowColor}30`,
                boxShadow: `0 8px 32px ${glowColor}25, inset 0 1px 0 rgba(255,255,255,0.08)`,
                background: 'rgba(19,19,26,0.85)',
            }}
            className="w-13 h-13 md:w-16 md:h-16 rounded-2xl backdrop-blur-xl flex items-center justify-center cursor-pointer relative overflow-hidden"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.06] to-transparent pointer-events-none" />
            <div className="relative z-10">{icon}</div>
        </motion.div>
        <span
            style={{ color: glowColor, borderColor: `${glowColor}30`, background: `${glowColor}10` }}
            className="text-[9px] font-black tracking-[0.2em] uppercase px-2 py-0.5 rounded-full border"
        >
            {label}
        </span>
    </motion.div>
)

/* ─── Stats pill ─── */
const StatPill = ({ value, label }) => (
    <motion.div
        whileHover={{ y: -4, borderColor: 'rgba(16,185,129,0.4)' }}
        className="flex flex-col items-start px-6 py-4 bg-card/60 backdrop-blur-md rounded-2xl border border-white/5 shadow-xl transition cursor-default"
        style={{ boxShadow: '0 4px 24px rgba(16,185,129,0.08)' }}
    >
        <span className="text-3xl md:text-4xl font-black text-accent tracking-tighter leading-none">{value}</span>
        <span className="text-gray-500 text-[10px] font-black tracking-[0.2em] uppercase mt-1">{label}</span>
    </motion.div>
)

/* ═══════════════════════════════════════════════
   HeroSection — main component
═══════════════════════════════════════════════ */
const HeroSection = () => {
    const techIcons = [
        { label: 'Shopify', icon: <FaShopify className="text-[28px] text-[#96BF48]" />, glowColor: '#10b981', style: { top: '-2%', left: '10%' }, delay: 0 },
        { label: 'Remix', icon: <FaReact className="text-[28px] text-sky-400" />, glowColor: '#10b981', style: { top: '8%', right: '-2%' }, delay: 0.7 },
        { label: 'GraphQL', icon: <SiExpress className="text-[28px] text-[#e535ab]" />, glowColor: '#10b981', style: { bottom: '8%', left: '-2%' }, delay: 1.4 },
        { label: 'Liquid', icon: <FaShopify className="text-[28px] text-[#96BF48]" />, glowColor: '#10b981', style: { bottom: '-2%', right: '10%' }, delay: 2.1 },
        { label: 'Node.js', icon: <FaNodeJs className="text-[28px] text-green-400" />, glowColor: '#10b981', style: { top: '42%', left: '-6%' }, delay: 2.8 },
        { label: 'Polaris', icon: <SiTailwindcss className="text-[28px] text-cyan-400" />, glowColor: '#10b981', style: { top: '42%', right: '-6%' }, delay: 3.5 },
    ]

    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center overflow-hidden bg-background pt-28 pb-20 px-4"
        >
            {/* ══ Background atmosphere ══ */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle at 1.5px 1.5px, rgba(16,185,129,0.08) 1.5px, transparent 0)',
                    backgroundSize: '52px 52px',
                }} />
                <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-accent/[0.07] rounded-full blur-[160px] animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-emerald-600/[0.05] rounded-full blur-[140px] animate-pulse" style={{ animationDelay: '1s' }} />
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-emerald-700/[0.04] rounded-full blur-[120px]" />
                {/* Top-left green corner splash like reference */}
                <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-accent/[0.14] rounded-full blur-[90px]" />
            </div>

            <div className="container mx-auto max-w-7xl relative z-10">
                <div className="flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-20 xl:gap-28">

                    {/* ════════════════════════
                        LEFT — CONTENT
                    ════════════════════════ */}
                    <div className="flex-1 w-full text-center lg:text-left">

                        {/* Name badge — "Muhammad Uzair >" like "Betty Rosella >" in reference */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center gap-2 mb-6"
                        >
                            <span className="text-accent font-black text-lg md:text-xl tracking-wide">
                                Muhammad Uzair
                            </span>
                            <FaArrowRight className="text-accent text-sm" />
                        </motion.div>

                        {/* Main Heading — "Engineering High-Performance Shopify Apps & \n Scalable E-commerce Ecosystems." */}
                        <motion.h5
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.1 }}
                            className="text-4xl sm:text-5xl md:text-6xl xl:text-[4rem] font-black text-text tracking-tight leading-[1.08] mb-8"
                        >
                            Engineering High-Performance{' '}
                            <span className="text-accent italic">
                                Shopify Apps
                            </span>{' '}
                            &amp; Scalable E-commerce Ecosystems.
                        </motion.h5>

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="text-gray-400 text-base md:text-lg leading-relaxed max-w-xl mb-10 mx-auto lg:mx-0"
                        >
                            3+ Years of Agency Experience building Public & Custom Shopify Apps,
                            API Integrations, and Checkout Extensions.
                        </motion.p>

                        {/* CTA Buttons — View Shopify Work + Hire on Fiverr */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.3 }}
                            className="flex flex-wrap gap-5 justify-center lg:justify-start mb-12"
                        >
                            {/* View My Shopify Work */}
                            <motion.a
                                href="#projects"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.97 }}
                                className="flex items-center gap-3 px-7 py-3.5 bg-accent text-white font-bold text-sm
                                 tracking-widest uppercase rounded-2xl transition shadow-lg shadow-accent/20"
                            >
                                View My Shopify Work
                            </motion.a>

                            {/* Hire on Fiverr */}
                            <motion.a
                                href="https://www.fiverr.com/s/xXBKBAa"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.97 }}
                                className="flex items-center gap-3 px-7 py-3.5 bg-[#1dbf73] text-white font-bold text-sm
                                 tracking-widest uppercase rounded-2xl transition shadow-lg shadow-[#1dbf73]/20"
                            >
                                Hire me on Fiverr
                            </motion.a>
                        </motion.div>

                        {/* Stats */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.4 }}
                            className="flex flex-wrap gap-5 justify-center lg:justify-start"
                        >
                            <StatPill value="3+" label="Years Agency Experience" />
                            <StatPill value="50+" label="Stores Optimized" />
                            <StatPill value="15+" label="Public/Custom Apps" />
                        </motion.div>

                        {/* Social links */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className="flex gap-4 justify-center lg:justify-start mt-10"
                        >
                            {[
                                { icon: <FaGithub />, href: '#', label: 'GitHub' },
                                { icon: <FaLinkedin />, href: '#', label: 'LinkedIn' },
                                { icon: <FaTwitter />, href: '#', label: 'Twitter' },
                            ].map((s, i) => (
                                <motion.a
                                    key={i}
                                    href={s.href}
                                    aria-label={s.label}
                                    whileHover={{ scale: 1.2, y: -4 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="w-11 h-11 rounded-xl border border-white/10 flex items-center justify-center text-gray-500 hover:text-accent hover:border-accent/50 bg-card/40 backdrop-blur-sm transition"
                                >
                                    {s.icon}
                                </motion.a>
                            ))}
                        </motion.div>
                    </div>

                    {/* ════════════════════════
                        RIGHT — IMAGE + FLOATING ICONS
                    ════════════════════════ */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="flex-shrink-0 relative flex items-center justify-center
                           w-[320px] h-[320px] sm:w-[380px] sm:h-[380px]
                           md:w-[440px] md:h-[440px] lg:w-[500px] lg:h-[500px]"
                    >
                        {/* 1. Outermost conic sweep — emerald green */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
                            className="absolute inset-[-8px] rounded-full pointer-events-none"
                            style={{ background: 'conic-gradient(from 0deg, transparent 60%, rgba(16,185,129,0.22) 100%)' }}
                        />
                        {/* 2. Large diffuse emerald aura */}
                        <div className="absolute inset-0 rounded-full pointer-events-none" style={{
                            background: 'radial-gradient(circle, rgba(16,185,129,0.22) 0%, rgba(5,150,105,0.08) 45%, transparent 75%)',
                            filter: 'blur(24px)',
                        }} />
                        {/* 3. Inner core glow */}
                        <div className="absolute inset-[15%] rounded-full pointer-events-none animate-pulse" style={{
                            background: 'radial-gradient(circle, rgba(52,211,153,0.22) 0%, transparent 70%)',
                            filter: 'blur(16px)',
                            animationDuration: '3s',
                        }} />
                        {/* 4. Ring pulse */}
                        <motion.div
                            animate={{ scale: [1, 1.08, 1], opacity: [0.3, 0.55, 0.3] }}
                            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                            className="absolute inset-[8%] rounded-full pointer-events-none"
                            style={{ boxShadow: '0 0 60px 20px rgba(16,185,129,0.22), 0 0 120px 40px rgba(5,150,105,0.1)' }}
                        />
                        {/* 5. Slow dashed orbit ring */}
                        <motion.div
                            animate={{ rotate: -360 }}
                            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                            className="absolute inset-0 rounded-full pointer-events-none"
                            style={{ border: '1.5px dashed rgba(16,185,129,0.28)' }}
                        />
                        {/* 6. Fast thin ring */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
                            className="absolute inset-[12px] rounded-full pointer-events-none"
                            style={{ border: '1px solid rgba(16,185,129,0.15)' }}
                        />

                        {/* Profile image */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                            className="relative z-10"
                        >
                            <div className="rounded-full p-[3px]" style={{
                                background: 'linear-gradient(135deg, rgba(16,185,129,0.7) 0%, rgba(5,150,105,0.3) 50%, rgba(52,211,153,0.5) 100%)',
                                boxShadow: '0 0 40px rgba(16,185,129,0.4), 0 0 80px rgba(16,185,129,0.18)',
                            }}>
                                <div className="w-[220px] h-[220px] sm:w-[260px] sm:h-[260px] md:w-[300px] md:h-[300px] lg:w-[340px] lg:h-[340px] rounded-full overflow-hidden border-2 border-background/80">
                                    <img
                                        src="/profile.png"
                                        alt="Muhammad Uzair — Full-Stack Developer"
                                        className="w-full h-full object-cover object-top scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-accent/15 via-transparent to-purple-400/5 mix-blend-overlay" />
                                </div>
                            </div>
                        </motion.div>

                        {/* Floating tech icons */}
                        {techIcons.map((t, i) => (
                            <FloatingIcon key={i} {...t} />
                        ))}

                        {/* Floating badge — Experience */}
                        <motion.div
                            animate={{ y: [0, -8, 0] }}
                            transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                            className="absolute bottom-[10%] -left-10 z-30 flex items-center gap-3 bg-card/90 backdrop-blur-xl border border-white/10 rounded-2xl px-4 py-3 shadow-2xl"
                            style={{ boxShadow: '0 8px 30px rgba(0,0,0,0.5), 0 0 20px rgba(16,185,129,0.15)' }}
                        >
                            <div className="w-10 h-10 bg-accent/20 rounded-xl flex items-center justify-center text-accent font-black text-sm border border-accent/20">
                                3+
                            </div>
                            <div>
                                <p className="text-text text-xs font-black leading-none">Years</p>
                                <p className="text-gray-500 text-[10px] uppercase tracking-widest">Experience</p>
                            </div>
                        </motion.div>

                        {/* Floating badge — Projects */}
                        <motion.div
                            animate={{ y: [0, -8, 0] }}
                            transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
                            className="absolute top-[10%] -right-10 z-30 flex items-center gap-3 bg-card/90 backdrop-blur-xl border border-white/10 rounded-2xl px-4 py-3 shadow-2xl"
                            style={{ boxShadow: '0 8px 30px rgba(0,0,0,0.5), 0 0 20px rgba(16,185,129,0.15)' }}
                        >
                            <div className="w-10 h-10 bg-accent/20 rounded-xl flex items-center justify-center text-accent font-black text-sm border border-accent/20">
                                50+
                            </div>
                            <div>
                                <p className="text-text text-xs font-black leading-none">Projects</p>
                                <p className="text-gray-500 text-[10px] uppercase tracking-widest">Completed</p>
                            </div>
                        </motion.div>

                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection
