'use client';
import SectionTitle from "@/components/SectionTitle";
import { timelineData, skillsData } from "@/data/about";
import { motion } from "motion/react";
import { Award, Code2, Users2, Briefcase } from "lucide-react";

export default function AboutPage() {
    return (
        <main className="min-h-screen pt-32 pb-24 px-6 md:px-16 lg:px-24 xl:px-32 relative text-slate-300">
            {/* Ambient Lighting */}
            <div className="absolute top-1/3 right-1/4 -z-10 size-[500px] bg-primary/5 blur-[150px] rounded-full pointer-events-none" />
            <div className="absolute bottom-1/4 left-1/4 -z-10 size-[450px] bg-accent/5 blur-[130px] rounded-full pointer-events-none" />

            <SectionTitle
                text1="About Us"
                text2="Uzair DR Story"
                text3="Bridging the gap between design studio aesthetics and robust backend Shopify architectures."
            />

            {/* Storytelling Segment */}
            <div className="mt-16 max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-center">
                <div className="w-full md:w-1/2 space-y-6">
                    <h3 className="text-2xl font-bold text-text-light">
                        We don't build basic pages. We engineer digital assets.
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                        Pixels was founded by e-commerce engineers who noticed that most portfolio pages and Shopify templates prioritize simple visual tricks over performance and custom logic. We believe your store should be beautiful, load in under 1 second, and automate operational tasks cleanly.
                    </p>
                    <p className="text-slate-400 text-sm leading-relaxed">
                        Whether it's wiring custom draft checkouts for BNPL financing, integrating warehouse APIs, or decoupling themes via headless commerce, our squad builds custom code that performs.
                    </p>

                    {/* Minor Highlight Boxes */}
                    <div className="grid grid-cols-2 gap-4 pt-4">
                        <div className="flex items-center gap-3 p-4 rounded-xl border border-slate-850 bg-slate-900/10">
                            <Code2 className="text-accent size-5 shrink-0" />
                            <span className="text-xs font-semibold text-text-light">Clean Code</span>
                        </div>
                        <div className="flex items-center gap-3 p-4 rounded-xl border border-slate-850 bg-slate-900/10">
                            <Award className="text-accent size-5 shrink-0" />
                            <span className="text-xs font-semibold text-text-light">Speed Optimized</span>
                        </div>
                    </div>
                </div>

                {/* Portrait Illustration Widget */}
                <div className="w-full md:w-1/2">
                    <div className="aspect-square w-full max-w-sm mx-auto rounded-3xl bg-gradient-to-tr from-slate-900 via-slate-950 to-slate-900 border border-slate-850 p-8 flex flex-col justify-between relative overflow-hidden group">
                        {/* Glow Blob */}
                        <div className="absolute -left-10 -bottom-10 size-48 bg-primary/10 group-hover:bg-primary/20 blur-2xl rounded-full transition-all duration-500" />

                        <div className="flex justify-between items-start">
                            <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest">
                                Lead Office
                            </span>
                            <span className="size-2 bg-green-500 rounded-full animate-pulse" />
                        </div>

                        {/* Visual portrait placeholder */}
                        <div className="flex flex-col items-center py-6">
                            <div className="size-24 rounded-2xl bg-gradient-to-tr from-primary/30 to-accent/30 border border-slate-700 flex items-center justify-center relative mb-4">
                                <Users2 size={36} className="text-accent" />
                            </div>
                            <h4 className="text-lg font-bold text-text-light">Pixels Squad</h4>
                            <p className="text-xs text-slate-500 mt-1">Shopify & React Specialists</p>
                        </div>

                        <div className="text-center text-[10px] text-slate-500 tracking-wider">
                            ESTABLISHED IN 2024
                        </div>
                    </div>
                </div>
            </div>

            {/* Skills & Experience Tags */}
            <div className="mt-32 max-w-5xl mx-auto border-t border-slate-800/40 pt-20">
                <div className="text-center mb-12">
                    <span className="text-[10px] font-bold text-accent uppercase tracking-widest bg-slate-900/60 border border-slate-800 px-3 py-1 rounded-full">
                        Expertise
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-text-light mt-3">Core Technology Stack</h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {skillsData.map((skillGroup, index) => (
                        <motion.div
                            key={skillGroup.category}
                            initial={{ y: 30, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="p-6 rounded-2xl border border-slate-850 bg-slate-900/10 flex flex-col justify-between"
                        >
                            <h4 className="text-sm font-bold text-text-light border-b border-slate-800 pb-3 mb-4 tracking-wide uppercase text-slate-400">
                                {skillGroup.category}
                            </h4>
                            <div className="flex flex-wrap gap-1.5">
                                {skillGroup.items.map((skill, i) => (
                                    <span
                                        key={i}
                                        className="text-[10px] text-slate-300 px-2 py-1 rounded bg-slate-900/40 border border-slate-800/60"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Vertical Timeline section */}
            <div className="mt-32 max-w-4xl mx-auto border-t border-slate-800/40 pt-20">
                <div className="text-center mb-16">
                    <span className="text-[10px] font-bold text-accent uppercase tracking-widest bg-slate-900/60 border border-slate-800 px-3 py-1 rounded-full">
                        Roadmap
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-text-light mt-3">Milestones Timeline</h3>
                </div>

                <div className="relative border-l border-slate-800/80 ml-4 md:ml-1/2 md:-translate-x-1/2 space-y-12">
                    {timelineData.map((item, index) => {
                        const isEven = index % 2 === 0;
                        return (
                            <motion.div
                                key={item.year}
                                initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ type: "spring", stiffness: 100, damping: 15 }}
                                className={`relative flex flex-col md:flex-row md:justify-between items-start md:items-center ${isEven ? "md:flex-row-reverse" : ""
                                    }`}
                            >
                                {/* Timeline Dot indicator */}
                                <div className="absolute -left-[5px] md:left-1/2 md:-translate-x-1/2 size-2.5 rounded-full bg-accent border-2 border-bg-main ring-4 ring-accent/15 z-10" />

                                {/* Milestone Content Card */}
                                <div className={`w-full md:w-[45%] ml-6 md:ml-0 p-6 rounded-2xl border border-slate-850 bg-slate-900/20 hover:border-slate-800 hover:bg-slate-900/40 transition duration-300 relative glow-border`}>
                                    <span className="text-xs font-bold text-accent font-mono block mb-1">
                                        {item.year}
                                    </span>
                                    <h4 className="text-base font-bold text-text-light mb-2">
                                        {item.title}
                                    </h4>
                                    <p className="text-xs text-slate-400 leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>

                                {/* Empty structural divider for spacing on desk layout */}
                                <div className="hidden md:block w-[45%]" />
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </main>
    );
}
