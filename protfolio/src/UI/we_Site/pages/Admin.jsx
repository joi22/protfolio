
import React, { useState, useEffect } from 'react'
import { getProjects, saveProject, deleteProject } from '../../../services/ProjectService'
import { motion, AnimatePresence } from 'motion/react'
import { FaTrash, FaEdit, FaPlus, FaSignOutAlt, FaLock, FaUserShield, FaGlobe, FaGithub } from 'react-icons/fa'

const Admin = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [password, setPassword] = useState('')
    const [projects, setProjects] = useState([])
    const [editingProject, setEditingProject] = useState(null)
    const [formData, setFormData] = useState({
        title: '',
        stack: '',
        description: '',
        longDescription: '',
        image: '',
        category: 'App Design',
        githubLink: '',
        demoLink: ''
    })

    useEffect(() => {
        const adminAuth = localStorage.getItem('adminAuth')
        if (adminAuth === 'true') {
            setIsLoggedIn(true)
            setProjects(getProjects())
        }
    }, [])

    const handleLogin = (e) => {
        e.preventDefault()
        if (password === 'admin123') { // Simple password for demo
            setIsLoggedIn(true)
            localStorage.setItem('adminAuth', 'true')
            setProjects(getProjects())
        } else {
            alert('Invalid Password')
        }
    }

    const handleLogout = () => {
        setIsLoggedIn(false)
        localStorage.removeItem('adminAuth')
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const updatedProjects = saveProject({ ...formData, id: editingProject ? editingProject.id : null })
        setProjects(updatedProjects)
        resetForm()
    }

    const handleDelete = (id) => {
        if (window.confirm('Are you sure you want to delete this project?')) {
            const updatedProjects = deleteProject(id)
            setProjects(updatedProjects)
        }
    }

    const handleEdit = (project) => {
        setEditingProject(project)
        setFormData(project)
        window.scrollTo(0, 0)
    }

    const resetForm = () => {
        setEditingProject(null)
        setFormData({
            title: '',
            stack: '',
            description: '',
            longDescription: '',
            image: '',
            category: 'App Design',
            githubLink: '',
            demoLink: ''
        })
    }

    if (!isLoggedIn) {
        return (
            <div className="bg-background min-h-screen flex items-center justify-center pt-32 px-4 shadow-inner">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-card p-12 rounded-[40px] border border-white/5 shadow-2xl w-full max-w-md text-center"
                >
                    <div className="w-24 h-24 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse shadow-xl shadow-accent/20 border border-accent/20">
                        <FaLock className="text-4xl text-accent" />
                    </div>
                    <h1 className="text-4xl font-bold text-text mb-2">Admin Panel</h1>
                    <p className="text-gray-500 mb-10 text-sm uppercase tracking-widest font-semibold">Restricted Access</p>
                    <form onSubmit={handleLogin} className="space-y-6">
                        <input
                            type="password"
                            placeholder="Enter password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="bg-background border-2 border-white/5 rounded-2xl w-full p-5 text-text focus:outline-none focus:border-accent transition-all duration-300"
                        />
                        <button className="w-full bg-accent hover:bg-hover text-white py-5 rounded-2xl font-bold text-lg transition shadow-xl shadow-accent/30 flex items-center justify-center gap-3">
                            <FaUserShield /> Authorize
                        </button>
                    </form>
                </motion.div>
            </div>
        )
    }

    return (
        <div className="bg-background min-h-screen pt-32 pb-20 px-4">
            <div className="container mx-auto max-w-7xl">
                <div className="flex justify-between items-center mb-16">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold text-text">Dashboard</h1>
                        <p className="text-accent font-semibold tracking-widest mt-2">PROJECT MANAGEMENT</p>
                    </div>
                    <button
                        onClick={handleLogout}
                        className="bg-white/5 hover:bg-white/10 text-text px-8 py-3.5 rounded-2xl font-bold transition flex items-center gap-3 border border-white/10"
                    >
                        <FaSignOutAlt /> Logout
                    </button>
                </div>

                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Form Section */}
                    <div className="bg-card p-12 rounded-[40px] border border-white/5 shadow-2xl h-fit">
                        <h2 className="text-3xl font-bold text-text mb-10 border-b border-white/5 pb-6 flex items-center gap-4">
                            {editingProject ? 'Edit Project' : 'Add New Project'}
                            {editingProject && <button onClick={resetForm} className="text-xs bg-accent/10 text-accent px-3 py-1.5 rounded-full hover:bg-accent/20">Cancel</button>}
                        </h2>
                        <form onSubmit={handleSubmit} className="space-y-8">
                            <div className="space-y-3">
                                <label className="text-gray-500 text-xs uppercase font-bold tracking-widest">Project Name</label>
                                <input
                                    type="text"
                                    placeholder="e.g. E-Commerce Platform"
                                    value={formData.title}
                                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                    className="bg-background border-2 border-white/5 rounded-2xl w-full p-4 text-text focus:outline-none focus:border-accent transition shadow-inner"
                                    required
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-3">
                                    <label className="text-gray-500 text-xs uppercase font-bold tracking-widest">Tech Stack</label>
                                    <input
                                        type="text"
                                        placeholder="e.g. MERN Stack"
                                        value={formData.stack}
                                        onChange={(e) => setFormData({ ...formData, stack: e.target.value })}
                                        className="bg-background border-2 border-white/5 rounded-2xl w-full p-4 text-text focus:outline-none focus:border-accent transition"
                                        required
                                    />
                                </div>
                                <div className="space-y-3">
                                    <label className="text-gray-500 text-xs uppercase font-bold tracking-widest">Category</label>
                                    <select
                                        value={formData.category}
                                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                        className="bg-background border-2 border-white/5 rounded-2xl w-full p-4 text-text focus:outline-none focus:border-accent transition"
                                    >
                                        <option value="App Design">App Design</option>
                                        <option value="Web Design">Web Design</option>
                                        <option value="UI/UX Design">UI/UX Design</option>
                                    </select>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-3">
                                    <label className="text-gray-500 text-xs uppercase font-bold tracking-widest">GitHub Link</label>
                                    <input
                                        type="text"
                                        placeholder="Repo URL"
                                        value={formData.githubLink}
                                        onChange={(e) => setFormData({ ...formData, githubLink: e.target.value })}
                                        className="bg-background border-2 border-white/5 rounded-2xl w-full p-4 text-text focus:outline-none focus:border-accent transition"
                                    />
                                </div>
                                <div className="space-y-3">
                                    <label className="text-gray-500 text-xs uppercase font-bold tracking-widest">Live Demo</label>
                                    <input
                                        type="text"
                                        placeholder="Site URL"
                                        value={formData.demoLink}
                                        onChange={(e) => setFormData({ ...formData, demoLink: e.target.value })}
                                        className="bg-background border-2 border-white/5 rounded-2xl w-full p-4 text-text focus:outline-none focus:border-accent transition"
                                    />
                                </div>
                            </div>
                            <div className="space-y-3">
                                <label className="text-gray-500 text-xs uppercase font-bold tracking-widest">Image URL</label>
                                <input
                                    type="text"
                                    placeholder="Image URL"
                                    value={formData.image}
                                    onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                                    className="bg-background border-2 border-white/5 rounded-2xl w-full p-4 text-text focus:outline-none focus:border-accent transition"
                                    required
                                />
                            </div>
                            <div className="space-y-3">
                                <label className="text-gray-500 text-xs uppercase font-bold tracking-widest">Short Description</label>
                                <textarea
                                    placeholder="Brief summary..."
                                    value={formData.description}
                                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                    className="bg-background border-2 border-white/5 rounded-2xl w-full p-4 text-text h-24 focus:outline-none focus:border-accent transition"
                                    required
                                />
                            </div>
                            <div className="space-y-3">
                                <label className="text-gray-500 text-xs uppercase font-bold tracking-widest">Full Case Study</label>
                                <textarea
                                    placeholder="Detailed long description..."
                                    value={formData.longDescription}
                                    onChange={(e) => setFormData({ ...formData, longDescription: e.target.value })}
                                    className="bg-background border-2 border-white/5 rounded-2xl w-full p-4 text-text h-40 focus:outline-none focus:border-accent transition"
                                />
                            </div>
                            <button className="w-full bg-accent hover:bg-hover text-white py-6 rounded-2xl font-bold text-xl uppercase tracking-widest transition flex items-center justify-center gap-4 shadow-xl shadow-accent/20">
                                {editingProject ? <><FaEdit /> Update Project</> : <><FaPlus /> Create Project</>}
                            </button>
                        </form>
                    </div>

                    {/* List Section */}
                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-text mb-10 flex items-center justify-between">
                            Existing Projects
                            <span className="text-xs bg-accent/10 text-accent px-4 py-2 rounded-full font-bold">{projects.length} TOTAL</span>
                        </h2>
                        <div className="grid gap-6">
                            {projects.map(project => (
                                <motion.div
                                    layout
                                    key={project.id}
                                    className="bg-card p-6 rounded-3xl border border-white/5 flex items-center gap-6 group hover:border-accent/30 transition shadow-xl"
                                >
                                    <div className="w-24 h-24 rounded-2xl overflow-hidden border border-white/5 flex-shrink-0">
                                        <img src={project.image} alt="" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h3 className="text-text font-bold text-xl truncate mb-1">{project.title}</h3>
                                        <p className="text-gray-500 text-sm font-semibold tracking-wide uppercase">{project.category}</p>
                                    </div>
                                    <div className="flex gap-3">
                                        <button
                                            onClick={() => handleEdit(project)}
                                            className="w-12 h-12 rounded-xl border border-white/10 hover:border-accent text-gray-500 hover:text-accent transition flex items-center justify-center bg-background/50"
                                        >
                                            <FaEdit />
                                        </button>
                                        <button
                                            onClick={() => handleDelete(project.id)}
                                            className="w-12 h-12 rounded-xl border border-white/10 hover:border-red-500 text-gray-500 hover:text-red-500 transition flex items-center justify-center bg-background/50"
                                        >
                                            <FaTrash />
                                        </button>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Admin
