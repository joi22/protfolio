
import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getProjectById } from '../../../services/ProjectService'
import { motion, AnimatePresence } from 'motion/react'
import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaCode, FaCheckCircle, FaRocket, FaClock, FaTools } from 'react-icons/fa'
import Button from '../../common/Button'
import Section from '../../common/Section'

const ProjectDetail = () => {
    const { id } = useParams()
    const [project, setProject] = useState(null)

    useEffect(() => {
        const p = getProjectById(id)
        if (p) {
            setProject(p)
        }
        window.scrollTo(0, 0)
    }, [id])

    if (!project) return (
        <div className="bg-background min-h-screen flex items-center justify-center">
            <div className="flex flex-col items-center gap-6">
                <div className="w-16 h-16 border-4 border-accent/20 border-t-accent rounded-full animate-spin"></div>
                <div className="text-xl text-accent font-black tracking-widest uppercase">Fetching Details...</div>
            </div>
        </div>
    )

    return (
        <div className="bg-background min-h-screen">
            {/* Header / Intro Section */}
            <Section
                id="project-intro"
                badge={project.category}
                title={project.title}
                subtitle={project.stack}
                className="pt-48 pb-10"
            >
                <Link to="/projects" className="absolute top-10 left-10 text-gray-500 hover:text-accent font-black text-xs uppercase tracking-widest flex items-center gap-3 transition group z-50">
                    <FaChevronLeft className="group-hover:-translate-x-2 transition" /> Back to Archive
                </Link>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="w-full h-[400px] md:h-[700px] rounded-[60px] overflow-hidden border border-white/5 shadow-2xl relative group"
                >
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
                </motion.div>
            </Section>

            {/* Content Section */}
            <Section id="project-overview" className="py-20">
                <div className="grid lg:grid-cols-3 gap-20">
                    <div className="lg:col-span-2 space-y-12">
                        <div>
                            <h2 className="text-4xl font-black text-text mb-8 flex items-center gap-4 tracking-tighter">
                                Overview Story
                                <span className="h-1 flex-1 bg-white/5 rounded-full"></span>
                            </h2>
                            <p className="text-gray-400 text-xl leading-relaxed font-medium">
                                {project.longDescription || project.description}
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-8 pt-10 border-t border-white/5">
                            <div className="space-y-4">
                                <h3 className="text-accent font-black tracking-widest text-[10px] uppercase flex items-center gap-2">
                                    <FaRocket /> Key Goal
                                </h3>
                                <p className="text-text font-bold text-lg">Scalable Architecture & Visual Perfection</p>
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-accent font-black tracking-widest text-[10px] uppercase flex items-center gap-2">
                                    <FaClock /> Timeline
                                </h3>
                                <p className="text-text font-bold text-lg">Completed in 4-6 Weeks</p>
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="pt-12 flex flex-col md:flex-row gap-6">
                            {project.demoLink && (
                                <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="flex-1">
                                    <Button className="w-full h-20 rounded-3xl text-lg font-black tracking-widest uppercase gap-4 shadow-accent/40">
                                        <FaExternalLinkAlt /> Launch Live
                                    </Button>
                                </a>
                            )}
                            {project.githubLink && (
                                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex-1">
                                    <Button variant="outline" className="w-full h-20 rounded-3xl text-lg font-black tracking-widest uppercase gap-4 border-white/10 text-white hover:border-accent">
                                        <FaGithub /> View Codebase
                                    </Button>
                                </a>
                            )}
                        </div>
                    </div>

                    {/* Sidebar */}
                    <aside className="space-y-10">
                        <div className="bg-card p-12 rounded-[50px] border border-white/5 shadow-2xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-10 bg-accent/5 rounded-bl-[100px] text-accent/10 group-hover:text-accent/20 transition duration-500">
                                <FaTools className="text-7xl" />
                            </div>
                            <h3 className="text-2xl font-black text-text mb-10 border-b border-white/5 pb-6 tracking-tighter">Architecture</h3>
                            <ul className="space-y-8">
                                {[
                                    "Custom Component Logic",
                                    "SEO Structured Data",
                                    "Responsive Fluid Design",
                                    "Global State Management",
                                    "Optimized Asset Pipeline"
                                ].map((feature, i) => (
                                    <li key={i} className="flex items-center gap-4 text-gray-400 font-bold group/item">
                                        <FaCheckCircle className="text-accent group-hover/item:scale-125 transition duration-300" />
                                        <span className="text-sm tracking-wide group-hover/item:text-text transition">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </aside>
                </div>
            </Section>
        </div>
    )
}

export default ProjectDetail
