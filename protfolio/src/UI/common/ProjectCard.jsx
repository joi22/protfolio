
import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import { FaChevronRight } from 'react-icons/fa'

const ProjectCard = ({ project, idx = 0 }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.6 }}
            whileHover={{ y: -15 }}
            className="bg-card rounded-[32px] overflow-hidden border border-white/5 group hover:border-accent/30 transition shadow-2xl h-full flex flex-col"
        >
            <Link to={`/project/${project.id}`} className="flex-1 flex flex-col">
                <div className="h-64 overflow-hidden relative">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition duration-1000 ease-in-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                    <div className="absolute bottom-6 left-6">
                        <span className="bg-accent text-white text-[10px] uppercase font-black tracking-[0.2em] px-4 py-2 rounded-full">
                            {project.category}
                        </span>
                    </div>
                </div>
                <div className="p-10 flex flex-col flex-1">
                    <h3 className="text-text text-2xl font-black mb-3 group-hover:text-accent transition duration-300">{project.title}</h3>
                    <p className="text-accent text-sm font-bold tracking-widest uppercase mb-4 opacity-80">{project.stack}</p>
                    <p className="text-gray-400 text-sm line-clamp-2 leading-relaxed mb-8 flex-1">{project.description}</p>
                    <div className="mt-auto pt-6 border-t border-white/5 flex items-center gap-2 text-accent font-black text-sm uppercase tracking-widest group-hover:gap-4 transition-all">
                        Experience Story <FaChevronRight className="text-xs" />
                    </div>
                </div>
            </Link>
        </motion.div>
    )
}

export default ProjectCard
