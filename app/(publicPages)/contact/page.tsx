'use client';
import { useState } from "react";
import SectionTitle from "@/components/SectionTitle";
import { Mail, Instagram, Linkedin, Calendar, CheckCircle, ArrowRight, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import MagneticButton from "@/components/MagneticButton";

export default function ContactPage() {
    const [formState, setFormState] = useState({ name: "", email: "", projectType: "Shopify Store", message: "", budget: "$5k - $10k" });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Mock API lag
        await new Promise((resolve) => setTimeout(resolve, 1200));
        setIsSubmitting(false);
        setIsSuccess(true);
        setFormState({ name: "", email: "", projectType: "Shopify Store", message: "", budget: "$5k - $10k" });
    };

    const projectOptions = [
        "Shopify Store Development",
        "Shopify Custom App",
        "Shopify Theme Customization",
        "Next.js Headless Store",
        "API & Custom Integration",
        "Performance Optimization"
    ];

    const budgetOptions = [
        "Under $5,000",
        "$5,000 - $10,000",
        "$10,000 - $25,000",
        "$25,000+"
    ];

    return (
        <main className="min-h-screen pt-32 pb-24 px-6 md:px-16 lg:px-24 xl:px-32 relative text-slate-300">
            {/* Background Atmosphere Blobs */}
            <div className="absolute top-1/4 left-1/4 -z-10 size-[500px] bg-primary/5 blur-[150px] rounded-full pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 -z-10 size-[450px] bg-accent/5 blur-[130px] rounded-full pointer-events-none" />

            <SectionTitle
                text1="Get In Touch"
                text2="Start Your E-Commerce Build"
                text3="Have a project in mind? Let's discuss your specs or book a quick strategy session directly."
            />

            <div className="mt-16 max-w-5xl mx-auto flex flex-col lg:flex-row gap-12 z-10 relative">
                {/* Left Column: Contact Links & Calendly Booking Card */}
                <div className="w-full lg:w-5/12 space-y-8">
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-text-light">Contact Information</h3>
                        <p className="text-sm text-slate-400 leading-relaxed">
                            Have questions or need to send specs? Reach out on our social channels or email. We typically respond within 12 hours.
                        </p>
                    </div>

                    {/* Contact Quicklinks */}
                    <div className="space-y-4">
                        <a
                            href="mailto:contact@pixels.studio"
                            className="flex items-center gap-4 p-4 rounded-xl border border-slate-850 bg-slate-900/10 hover:border-accent/30 hover:bg-slate-900/30 transition-all duration-300 group"
                        >
                            <div className="size-10 rounded-lg bg-slate-850 flex items-center justify-center border border-slate-800 text-slate-400 group-hover:text-accent transition">
                                <Mail size={18} />
                            </div>

                            <div>
                                <span className="text-[10px] text-slate-500 font-semibold uppercase block">Mail Address</span>
                                <span className="text-sm font-semibold text-text-light group-hover:text-accent transition">contact@pixels.studio</span>
                            </div>
                        </a>

                        <a
                            href="https://www.instagram.com/uzair.mohmmad.315/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-4 p-4 rounded-xl border border-slate-850 bg-slate-900/10 hover:border-accent/30 hover:bg-slate-900/30 transition-all duration-300 group"
                        >
                            <div className="size-10 rounded-lg bg-slate-850 flex items-center justify-center border border-slate-800 text-slate-400 group-hover:text-accent transition">
                                <Instagram size={18} />
                            </div>
                            <div>
                                <span className="text-[10px] text-slate-500 font-semibold uppercase block">Instagram Connect</span>
                                <span className="text-sm font-semibold text-text-light group-hover:text-accent transition">@uzair.mohmmad.315</span>
                            </div>
                        </a>

                        <a
                            href="https://www.linkedin.com/in/muhammad-uzair-b96379263/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-4 p-4 rounded-xl border border-slate-850 bg-slate-900/10 hover:border-accent/30 hover:bg-slate-900/30 transition-all duration-300 group"
                        >
                            <div className="size-10 rounded-lg bg-slate-850 flex items-center justify-center border border-slate-800 text-slate-400 group-hover:text-accent transition">
                                <Linkedin size={18} />
                            </div>
                            <div>
                                <span className="text-[10px] text-slate-500 font-semibold uppercase block">LinkedIn Profile</span>
                                <span className="text-sm font-semibold text-text-light group-hover:text-accent transition">Uzair Muhammad</span>
                            </div>
                        </a>
                    </div>

                    {/* Calendly Booking Card */}
                    <div className="p-6 rounded-2xl border border-slate-850 bg-gradient-to-br from-slate-900/40 via-slate-950/20 to-slate-900/40 glow-border space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="size-8 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center">
                                <Calendar size={16} className="text-accent" />
                            </div>
                            <h4 className="text-sm font-bold text-text-light uppercase tracking-wider">Book Strategy Consultation</h4>
                        </div>
                        <p className="text-xs text-slate-400 leading-relaxed">
                            Schedule a direct 30-minute e-commerce evaluation call on Calendly. We will walk through your codebase, check Lighthouse metrics, and outline a project design plan.
                        </p>
                        <ul className="space-y-1.5 text-[10px] text-slate-500 font-semibold">
                            <li>⏱️ DURATION: 30 minutes</li>
                            <li>🌍 LOCATION: Google Meet video</li>
                            <li>💵 PRICE: Free consult</li>
                        </ul>

                        <a
                            href="https://calendly.com/placeholder"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full text-center block bg-slate-800 hover:bg-slate-700 text-text-light font-semibold text-xs py-2.5 rounded-lg border border-slate-700/80 transition-all"
                        >
                            Select Booking Date
                        </a>
                    </div>
                </div>

                {/* Right Column: Contact Form */}
                <div className="w-full lg:w-7/12">
                    <div className="p-8 rounded-2xl border border-slate-850 bg-slate-900/10 space-y-6 relative overflow-hidden">
                        <h3 className="text-xl font-bold text-text-light">Send an Inquiry</h3>

                        <AnimatePresence mode="wait">
                            {isSuccess ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="p-8 border border-green-900/60 bg-green-950/10 rounded-xl text-center space-y-4 py-16"
                                >
                                    <div className="size-16 rounded-full border border-green-500/20 bg-green-500/5 flex items-center justify-center mx-auto">
                                        <CheckCircle size={28} className="text-green-500" />
                                    </div>
                                    <h4 className="text-lg font-bold text-text-light">Message Sent Successfully!</h4>
                                    <p className="text-xs text-slate-400 max-w-sm mx-auto leading-relaxed">
                                        Thank you for reaching out. A developer will review your project details and get back to you at your email address within 12 hours.
                                    </p>
                                    <button
                                        onClick={() => setIsSuccess(false)}
                                        className="text-xs font-semibold text-accent hover:underline mt-4 cursor-pointer"
                                    >
                                        Send another inquiry
                                    </button>
                                </motion.div>
                            ) : (
                                <motion.form
                                    onSubmit={handleSubmit}
                                    className="space-y-5"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                >
                                    {/* Name Input */}
                                    <div className="space-y-2">
                                        <label className="text-xs font-semibold text-slate-450 uppercase tracking-wider block">Your Name</label>
                                        <input
                                            type="text"
                                            required
                                            value={formState.name}
                                            onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                            placeholder="Enter your name"
                                            className="w-full px-4 py-3 bg-slate-950/40 border border-slate-800/80 rounded-xl focus:border-accent text-slate-350 placeholder-slate-600 text-xs outline-none transition"
                                        />
                                    </div>

                                    {/* Email Input */}
                                    <div className="space-y-2">
                                        <label className="text-xs font-semibold text-slate-450 uppercase tracking-wider block">Email Address</label>
                                        <input
                                            type="email"
                                            required
                                            value={formState.email}
                                            onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                            placeholder="Enter your email address"
                                            className="w-full px-4 py-3 bg-slate-950/40 border border-slate-800/80 rounded-xl focus:border-accent text-slate-350 placeholder-slate-600 text-xs outline-none transition"
                                        />
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {/* Project Type Selector */}
                                        <div className="space-y-2">
                                            <label className="text-xs font-semibold text-slate-450 uppercase tracking-wider block">Project Type</label>
                                            <select
                                                value={formState.projectType}
                                                onChange={(e) => setFormState({ ...formState, projectType: e.target.value })}
                                                className="w-full px-4 py-3 bg-slate-950/40 border border-slate-800/80 rounded-xl focus:border-accent text-slate-350 text-xs outline-none transition cursor-pointer"
                                            >
                                                {projectOptions.map((opt) => (
                                                    <option key={opt} value={opt} className="bg-slate-950 text-slate-300">
                                                        {opt}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>

                                        {/* Budget Tier Selector */}
                                        <div className="space-y-2">
                                            <label className="text-xs font-semibold text-slate-450 uppercase tracking-wider block">Budget Tier</label>
                                            <select
                                                value={formState.budget}
                                                onChange={(e) => setFormState({ ...formState, budget: e.target.value })}
                                                className="w-full px-4 py-3 bg-slate-950/40 border border-slate-800/80 rounded-xl focus:border-accent text-slate-350 text-xs outline-none transition cursor-pointer"
                                            >
                                                {budgetOptions.map((opt) => (
                                                    <option key={opt} value={opt} className="bg-slate-950 text-slate-300">
                                                        {opt}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>

                                    {/* Message Textarea */}
                                    <div className="space-y-2">
                                        <label className="text-xs font-semibold text-slate-450 uppercase tracking-wider block">Project Requirements</label>
                                        <textarea
                                            rows={5}
                                            required
                                            value={formState.message}
                                            onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                            placeholder="Outline your store requirements, timelines, or performance goals..."
                                            className="w-full px-4 py-3 bg-slate-950/40 border border-slate-800/80 rounded-xl focus:border-accent text-slate-350 placeholder-slate-600 text-xs outline-none transition resize-none"
                                        />
                                    </div>

                                    {/* Submit Button */}
                                    <div className="pt-2">
                                        <MagneticButton className="w-full sm:w-auto">
                                            <button
                                                type="submit"
                                                disabled={isSubmitting}
                                                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-primary hover:bg-blue-700 text-white font-semibold text-xs px-8 py-3.5 rounded-full transition cursor-pointer disabled:opacity-50"
                                            >
                                                {isSubmitting ? (
                                                    <>
                                                        <Loader2 size={16} className="animate-spin" />
                                                        <span>Submitting Spec...</span>
                                                    </>
                                                ) : (
                                                    <>
                                                        <span>Submit Specification</span>
                                                        <ArrowRight size={14} />
                                                    </>
                                                )}
                                            </button>
                                        </MagneticButton>
                                    </div>
                                </motion.form>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </main>
    );
}
