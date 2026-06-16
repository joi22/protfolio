
import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { getProjects } from '../../../services/ProjectService'
import Section from '../../common/Section'
import ProjectCard from '../../common/ProjectCard'

const Projects = () => {
    const [allProjects, setAllProjects] = useState([])
    const [filteredProjects, setFilteredProjects] = useState([])
    const [activeCategory, setActiveCategory] = useState('All')

    useEffect(() => {
        const data = getProjects()
        setAllProjects(data)
        setFilteredProjects(data)
        window.scrollTo(0, 0)
    }, [])

    const categories = ['All', ...new Set(allProjects.map(p => p.category))]

    const handleFilter = (category) => {
        setActiveCategory(category)
        if (category === 'All') {
            setFilteredProjects(allProjects)
        } else {
            setFilteredProjects(allProjects.filter(p => p.category === category))
        }
    }

    return (
        <div className="bg-background min-h-screen">
            <Section
                id="projects-list"
                badge="Portfolio"
                title="Complete Archive"
                subtitle="Explore my journey through various technological landscapes and creative challenges."
            >
                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-4 mb-20">
                    {categories.map((cat, idx) => (
                        <button
                            key={idx}
                            onClick={() => handleFilter(cat)}
                            className={`px-8 py-3 rounded-2xl text-xs font-black uppercase tracking-[0.2em] transition-all duration-300 border ${activeCategory === cat
                                    ? 'bg-accent border-accent text-white shadow-xl shadow-accent/20'
                                    : 'bg-card border-white/5 text-gray-500 hover:border-accent/30 hover:text-text'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <motion.div
                    layout
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
                >
                    <AnimatePresence mode='popLayout'>
                        {filteredProjects.map((project, idx) => (
                            <ProjectCard key={project.id} project={project} idx={idx} />
                        ))}
                    </AnimatePresence>
                </motion.div>

                {filteredProjects.length === 0 && (
                    <div className="text-center py-40 border-2 border-dashed border-white/5 rounded-[40px]">
                        <p className="text-gray-500 font-black tracking-widest uppercase">No projects found in this category.</p>
                    </div>
                )}
            </Section>
        </div>
    )
}

export default Projects
