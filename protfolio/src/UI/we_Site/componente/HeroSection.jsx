import React from 'react'
import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import {
    FaGithub, FaLinkedin, FaTwitter,
    FaReact, FaNodeJs, FaShopify,
    FaArrowRight
} from 'react-icons/fa'
import { SiMongodb, SiExpress, SiTailwindcss } from 'react-icons/si'

/* ═══════════════════════════════════════
   FLOATING TECH ICON
   - Animated float + subtle spin on hover
   - Glowing border matches icon color
   - Individual glow shadow per tech
═══════════════════════════════════════ */
const FloatingIcon = ({ icon, style, delay = 0, label, glowColor = '#3B82F6' }) => (
    <motion.div
        style={style}
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: 3 + delay * 0.4, repeat: Infinity, ease: 'easeInOut', delay }}
        className="absolute z-30 flex flex-col items-center gap-2"
    >
        {/* Outer glow ring */}
        <motion.div
            animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay }}
            style={{ boxShadow: `0 0 22px 6px ${glowColor}40` }}
            className="absolute inset-0 rounded-2xl pointer-events-none"
        />

        {/* Card */}
        <motion.div
            whileHover={{ scale: 1.15, rotate: [0, -5, 5, 0] }}
            transition={{ type: 'spring', stiffness: 300 }}
            style={{
                border: `1px solid ${glowColor}30`,
                boxShadow: `0 8px 32px ${glowColor}25, inset 0 1px 0 rgba(255,255,255,0.08)`,
                background: 'rgba(30,41,59,0.85)',
            }}
            className="w-13 h-13 md:w-16 md:h-16 rounded-2xl backdrop-blur-xl
                 flex items-center justify-center cursor-pointer relative overflow-hidden"
        >
            {/* Shimmer overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.06] to-transparent pointer-events-none" />
            <div className="relative z-10">
                {icon}
            </div>
        </motion.div>

        {/* Label chip */}
        <span
            style={{ color: glowColor, borderColor: `${glowColor}30`, background: `${glowColor}10` }}
            className="text-[9px] font-black tracking-[0.2em] uppercase px-2 py-0.5 rounded-full border"
        >
            {label}
        </span>
    </motion.div>
)

/* ─── Stats pill ─── */
const StatPill = ({ value, label, icon }) => (
    <motion.div
        whileHover={{ y: -4, borderColor: 'rgba(59,130,246,0.3)' }}
        className="flex flex-col items-center md:items-start px-6 py-5 bg-card/60 backdrop-blur-md
                rounded-2xl border border-white/5 shadow-xl transition cursor-default"
    >
        <span className="text-3xl md:text-4xl font-black text-accent tracking-tighter leading-none">{value}</span>
        <span className="text-gray-500 text-[10px] font-black tracking-[0.2em] uppercase mt-1">{label}</span>
    </motion.div>
)

/* ═══════════════════════════════════════════════
   HeroSection — main component
═══════════════════════════════════════════════ */
const HeroSection = () => {
    /* tech icons config — each has exact orbital position + brand color */
    const techIcons = [
        {
            label: 'React',
            icon: <FaReact className="text-[28px] text-sky-400" />,
            glowColor: '#38BDF8',
            style: { top: '-2%', left: '10%' },
            delay: 0,
        },
        {
            label: 'Node.js',
            icon: <FaNodeJs className="text-[28px] text-green-400" />,
            glowColor: '#4ADE80',
            style: { top: '8%', right: '-2%' },
            delay: 0.7,
        },
        {
            label: 'MongoDB',
            icon: <SiMongodb className="text-[28px] text-emerald-400" />,
            glowColor: '#34D399',
            style: { bottom: '8%', left: '-2%' },
            delay: 1.4,
        },
        {
            label: 'Shopify',
            icon: <FaShopify className="text-[28px] text-[#96BF48]" />,
            glowColor: '#96BF48',
            style: { bottom: '-2%', right: '10%' },
            delay: 2.1,
        },
        {
            label: 'Express',
            icon: <SiExpress className="text-[28px] text-gray-300" />,
            glowColor: '#94A3B8',
            style: { top: '42%', left: '-6%' },
            delay: 2.8,
        },
        {
            label: 'Tailwind',
            icon: <SiTailwindcss className="text-[28px] text-cyan-400" />,
            glowColor: '#22D3EE',
            style: { top: '42%', right: '-6%' },
            delay: 3.5,
        },
    ]

    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center overflow-hidden bg-background pt-28 pb-20 px-4"
        >
            {/* ══ Background atmosphere ══ */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                {/* dot-grid */}
                <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle at 1.5px 1.5px, rgba(59,130,246,0.07) 1.5px, transparent 0)',
                    backgroundSize: '52px 52px',
                }} />
                {/* large soft glow blobs */}
                <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-accent/[0.05] rounded-full blur-[160px] animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-sky-400/[0.04] rounded-full blur-[140px] animate-pulse"
                    style={{ animationDelay: '1s' }} />
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-indigo-500/[0.03] rounded-full blur-[120px]" />
            </div>

            <div className="container mx-auto max-w-7xl relative z-10">
                <div className="flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-20 xl:gap-28">

                    {/* ════════════════════════
              LEFT — CONTENT
          ════════════════════════ */}
                    <div className="flex-1 w-full text-center lg:text-left">

                        {/* Availability badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center gap-3 px-5 py-2 rounded-full
                         bg-accent/5 border border-accent/15 mb-8"
                        >
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent" />
                            </span>
                            <span className="text-accent text-[11px] font-black tracking-[0.25em] uppercase">
                                Available for Hire
                            </span>
                        </motion.div>

                        {/* Greeting */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-gray-400 font-bold text-lg mb-3 tracking-wide"
                        >
                            Hello, I'm 👋
                        </motion.p>

                        {/* Name */}
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.15 }}
                            className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-black text-text
                         tracking-tighter leading-[0.9] mb-5"
                        >
                            Muhammad<br />
                            <span className="bg-gradient-to-r from-accent via-sky-300 to-blue-400 bg-clip-text text-transparent">
                                Uzair
                            </span>
                        </motion.h1>

                        {/* Role */}
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.22 }}
                            className="text-xl md:text-2xl font-black text-gray-400 tracking-widest uppercase mb-8"
                        >
                            Full-Stack Web Developer
                        </motion.h2>

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.3 }}
                            className="text-gray-400 text-base md:text-lg leading-relaxed max-w-lg mb-12 mx-auto lg:mx-0"
                        >
                            I build <span className="text-text font-bold">modern web applications</span>,
                            custom <span className="text-text font-bold">Shopify solutions</span>, and
                            scalable cloud-ready platforms — with a relentless focus on
                            performance and user experience.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.38 }}
                            className="flex flex-wrap gap-5 justify-center lg:justify-start mb-14"
                        >
                            <Link to="/projects">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.97 }}
                                    className="h-14 px-10 bg-accent hover:bg-hover text-white font-black text-sm tracking-widest
                             uppercase rounded-2xl shadow-xl shadow-accent/30 transition flex items-center gap-3"
                                >
                                    View Projects <FaArrowRight />
                                </motion.button>
                            </Link>
                            <a href="#contact">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.97 }}
                                    className="h-14 px-10 border-2 border-white/10 hover:border-accent hover:bg-accent/5
                             text-text font-black text-sm tracking-widest uppercase rounded-2xl transition
                             flex items-center gap-3"
                                >
                                    Contact Me
                                </motion.button>
                            </a>
                        </motion.div>

                        {/* Stats */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.46 }}
                            className="flex flex-wrap gap-5 justify-center lg:justify-start"
                        >
                            <StatPill value="2+" label="Years Experience" />
                            <StatPill value="25+" label="Projects Completed" />
                            <StatPill value="100%" label="Client Satisfaction" />
                        </motion.div>

                        {/* Social links */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.56 }}
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
                                    className="w-11 h-11 rounded-xl border border-white/10 flex items-center justify-center
                             text-gray-500 hover:text-accent hover:border-accent/50 bg-card/40
                             backdrop-blur-sm transition"
                                >
                                    {s.icon}
                                </motion.a>
                            ))}
                        </motion.div>
                    </div>

                    {/* ════════════════════════
              RIGHT — IMAGE + ICONS
          ════════════════════════ */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="flex-shrink-0 relative flex items-center justify-center
                       w-[320px] h-[320px] sm:w-[380px] sm:h-[380px]
                       md:w-[440px] md:h-[440px] lg:w-[500px] lg:h-[500px]"
                    >

                        {/* ── Layered gradient glow system ── */}
                        {/* 1. Outermost conic sweep */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
                            className="absolute inset-[-8px] rounded-full pointer-events-none"
                            style={{
                                background: 'conic-gradient(from 0deg, transparent 60%, rgba(59,130,246,0.18) 100%)',
                            }}
                        />
                        {/* 2. Large diffuse blue aura */}
                        <div
                            className="absolute inset-0 rounded-full pointer-events-none"
                            style={{
                                background: 'radial-gradient(circle, rgba(59,130,246,0.18) 0%, rgba(56,189,248,0.08) 45%, transparent 75%)',
                                filter: 'blur(24px)',
                            }}
                        />
                        {/* 3. Inner bright core glow */}
                        <div
                            className="absolute inset-[15%] rounded-full pointer-events-none animate-pulse"
                            style={{
                                background: 'radial-gradient(circle, rgba(96,165,250,0.22) 0%, transparent 70%)',
                                filter: 'blur(16px)',
                                animationDuration: '3s',
                            }}
                        />
                        {/* 4. Accent colored ring pulse */}
                        <motion.div
                            animate={{ scale: [1, 1.08, 1], opacity: [0.3, 0.55, 0.3] }}
                            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                            className="absolute inset-[8%] rounded-full pointer-events-none"
                            style={{
                                boxShadow: '0 0 60px 20px rgba(59,130,246,0.22), 0 0 120px 40px rgba(56,189,248,0.1)',
                            }}
                        />
                        {/* 5. Slow-spinning dashed orbit ring */}
                        <motion.div
                            animate={{ rotate: -360 }}
                            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                            className="absolute inset-0 rounded-full pointer-events-none"
                            style={{
                                border: '1.5px dashed rgba(59,130,246,0.18)',
                            }}
                        />
                        {/* 6. Fast-spinning solid thin ring */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
                            className="absolute inset-[12px] rounded-full pointer-events-none"
                            style={{
                                border: '1px solid rgba(96,165,250,0.12)',
                            }}
                        />

                        {/* ── Profile image ── */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                            className="relative z-10"
                        >
                            {/* Outer glowing ring on the image itself */}
                            <div
                                className="rounded-full p-[3px]"
                                style={{
                                    background: 'linear-gradient(135deg, rgba(59,130,246,0.6) 0%, rgba(56,189,248,0.3) 50%, rgba(99,102,241,0.4) 100%)',
                                    boxShadow: '0 0 40px rgba(59,130,246,0.35), 0 0 80px rgba(59,130,246,0.15)',
                                }}
                            >
                                <div
                                    className="w-[220px] h-[220px] sm:w-[260px] sm:h-[260px]
                              md:w-[300px] md:h-[300px] lg:w-[340px] lg:h-[340px]
                              rounded-full overflow-hidden border-2 border-background/80"
                                >
                                    <img
                                        src="/profile.png"
                                        alt="Muhammad Uzair — Full-Stack Developer"
                                        className="w-full h-full object-cover object-top scale-105"
                                    />
                                    {/* Subtle color overlay on image */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-accent/15 via-transparent to-sky-400/5 mix-blend-overlay" />
                                </div>
                            </div>
                        </motion.div>

                        {/* ── Floating tech icons (orbital) ── */}
                        {techIcons.map((t, i) => (
                            <FloatingIcon key={i} {...t} />
                        ))}

                        {/* ── Floating badge — Experience ── */}
                        <motion.div
                            animate={{ y: [0, -8, 0] }}
                            transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                            className="absolute bottom-[10%] -left-10 z-30 flex items-center gap-3
                         bg-card/90 backdrop-blur-xl border border-white/10 rounded-2xl
                         px-4 py-3 shadow-2xl"
                            style={{ boxShadow: '0 8px 30px rgba(0,0,0,0.5), 0 0 20px rgba(59,130,246,0.1)' }}
                        >
                            <div className="w-10 h-10 bg-accent/20 rounded-xl flex items-center justify-center
                              text-accent font-black text-sm border border-accent/20">
                                2+
                            </div>
                            <div>
                                <p className="text-text text-xs font-black leading-none">Years</p>
                                <p className="text-gray-500 text-[10px] uppercase tracking-widest">Experience</p>
                            </div>
                        </motion.div>

                        {/* ── Floating badge — Projects ── */}
                        <motion.div
                            animate={{ y: [0, -8, 0] }}
                            transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
                            className="absolute top-[10%] -right-10 z-30 flex items-center gap-3
                         bg-card/90 backdrop-blur-xl border border-white/10 rounded-2xl
                         px-4 py-3 shadow-2xl"
                            style={{ boxShadow: '0 8px 30px rgba(0,0,0,0.5), 0 0 20px rgba(59,130,246,0.1)' }}
                        >
                            <div className="w-10 h-10 bg-accent/20 rounded-xl flex items-center justify-center
                              text-accent font-black text-sm border border-accent/20">
                                25+
                            </div>
                            <div>
                                <p className="text-text text-xs font-black leading-none">Projects</p>
                                <p className="text-gray-500 text-[10px] uppercase tracking-widest">Completed</p>
                            </div>
                        </motion.div>

                    </motion.div>{/* end right */}
                </div>
            </div>
        </section>
    )
}

export default HeroSection
