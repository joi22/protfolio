import { projectsData } from "@/data/projects";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Calendar, User, Cpu, BarChart2 } from "lucide-react";

export async function generateStaticParams() {
    return projectsData.map((p) => ({
        slug: p.slug,
    }));
}

interface PageProps {
    params: Promise<{ slug: string }>;
}

export default async function ProjectDetailPage({ params }: PageProps) {
    const { slug } = await params;
    const project = projectsData.find((p) => p.slug === slug);

    if (!project) {
        notFound();
    }

    return (
        <main className="min-h-screen pt-32 pb-24 px-6 md:px-16 lg:px-24 xl:px-32 relative text-slate-300">
            {/* Ambient Background Gradient */}
            <div className="absolute top-1/4 left-1/3 -z-10 size-[500px] bg-primary/10 blur-[140px] rounded-full pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 -z-10 size-[400px] bg-accent/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-4xl mx-auto space-y-12">
                {/* Back Button */}
                <div>
                    <Link 
                        href="/projects" 
                        className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-accent transition group"
                    >
                        <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
                        <span>Back to All Case Studies</span>
                    </Link>
                </div>

                {/* Hero Header */}
                <div className="space-y-6">
                    <span className="text-xs font-bold tracking-widest text-accent uppercase bg-slate-900/60 border border-slate-800/80 px-4 py-1.5 rounded-full w-max block">
                        {project.category} Case Study
                    </span>
                    <h1 className="text-3xl sm:text-5xl font-extrabold text-text-light leading-[1.1] tracking-tight">
                        {project.title}
                    </h1>
                    <p className="text-lg text-slate-400 leading-relaxed font-light">
                        {project.summary}
                    </p>
                </div>

                {/* Info Metadata Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8 rounded-2xl border border-slate-850 bg-slate-900/20 backdrop-blur-sm z-10 relative">
                    <div className="space-y-1">
                        <span className="text-[10px] uppercase font-semibold text-slate-500 tracking-wider flex items-center gap-1.5">
                            <User size={12} className="text-accent" /> Client
                        </span>
                        <p className="text-sm font-semibold text-text-light">{project.client}</p>
                    </div>
                    <div className="space-y-1">
                        <span className="text-[10px] uppercase font-semibold text-slate-500 tracking-wider flex items-center gap-1.5">
                            <Calendar size={12} className="text-accent" /> Timeline
                        </span>
                        <p className="text-sm font-semibold text-text-light">3-4 Months</p>
                    </div>
                    <div className="space-y-1">
                        <span className="text-[10px] uppercase font-semibold text-slate-500 tracking-wider flex items-center gap-1.5">
                            <Cpu size={12} className="text-accent" /> Role
                        </span>
                        <p className="text-sm font-semibold text-text-light">Lead Engineer</p>
                    </div>
                    <div className="space-y-1">
                        <span className="text-[10px] uppercase font-semibold text-slate-500 tracking-wider flex items-center gap-1.5">
                            <BarChart2 size={12} className="text-accent" /> Outcome
                        </span>
                        <p className="text-sm font-semibold text-accent">{project.metrics[0].value}</p>
                    </div>
                </div>

                {/* Challenge & Solution Side-by-Side */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
                    <div className="p-8 rounded-2xl border border-slate-850 bg-slate-900/10 space-y-4">
                        <h3 className="text-xl font-bold text-text-light flex items-center gap-2">
                            <span className="size-2 bg-red-500 rounded-full animate-ping" /> The Challenge
                        </h3>
                        <p className="text-sm leading-relaxed text-slate-400">
                            {project.challenge}
                        </p>
                    </div>

                    <div className="p-8 rounded-2xl border border-slate-850 bg-slate-900/10 space-y-4">
                        <h3 className="text-xl font-bold text-text-light flex items-center gap-2">
                            <span className="size-2 bg-green-500 rounded-full animate-pulse" /> The Solution
                        </h3>
                        <p className="text-sm leading-relaxed text-slate-400">
                            {project.solution}
                        </p>
                    </div>
                </div>

                {/* Tech Stack Chip Grid */}
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-text-light uppercase tracking-wider text-xs text-slate-500">Tech Stack Utilized</h3>
                    <div className="flex flex-wrap gap-2.5">
                        {project.techStack.map((tech, index) => (
                            <span 
                                key={index} 
                                className="px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-slate-900/60 border border-slate-800 text-slate-300"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Metric Outcome highlight circles */}
                <div className="py-12 border-t border-b border-slate-850 text-center">
                    <h3 className="text-xl font-bold text-text-light mb-8">Performance Deliverables</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                        {project.metrics.map((metric, i) => (
                            <div key={i} className="flex flex-col items-center space-y-2 p-6 rounded-2xl bg-slate-900/10 border border-slate-850/40">
                                <div className="size-16 rounded-full border-2 border-accent/20 flex items-center justify-center bg-accent/5 mb-2 relative">
                                    <div className="absolute inset-0.5 rounded-full border border-accent/10 animate-pulse" />
                                    <BarChart2 size={20} className="text-accent" />
                                </div>
                                <h4 className="text-3xl font-extrabold text-text-light">{metric.value}</h4>
                                <p className="text-[10px] uppercase font-semibold text-slate-500 tracking-wider text-center">{metric.label}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Dynamic CSS Mockup showcase card */}
                <div className="aspect-video w-full rounded-2xl bg-gradient-to-tr from-slate-900 via-slate-950 to-slate-900 border border-slate-850 p-8 flex flex-col justify-between relative overflow-hidden group select-none">
                    <div className="absolute -right-20 -bottom-20 size-64 bg-primary/10 group-hover:bg-primary/20 blur-3xl rounded-full transition-all duration-500" />
                    
                    <div className="flex justify-between items-start">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 bg-slate-950 border border-slate-800 px-3 py-1 rounded">
                            Client Build Workspace
                        </span>
                        <div className="flex items-center gap-1.5">
                            <span className="size-2 rounded-full bg-green-500" />
                            <span className="text-[10px] text-slate-400 font-medium tracking-wide">Live Server Active</span>
                        </div>
                    </div>

                    <div className="text-center py-8">
                        <h4 className="text-4xl sm:text-5xl font-black tracking-widest text-slate-800/80 group-hover:text-slate-700/60 transition-colors">
                            {project.client.toUpperCase()}
                        </h4>
                    </div>

                    <div className="text-xs text-slate-500 font-mono flex items-center gap-2">
                        <span>$ git log --oneline -n 1</span>
                        <span className="text-slate-400">c3bf9e2 [release] Shopify Plus checkout customization complete</span>
                    </div>
                </div>

                {/* Bottom Actions */}
                <div className="flex flex-wrap items-center justify-between pt-8 border-t border-slate-850">
                    <Link 
                        href="/projects" 
                        className="text-xs font-semibold text-slate-400 hover:text-accent transition flex items-center gap-1.5"
                    >
                        ← Back to all case studies
                    </Link>

                    {project.liveDemoUrl !== "#" ? (
                        <a 
                            href={project.liveDemoUrl} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="inline-flex items-center gap-2 bg-primary hover:bg-blue-700 text-white font-semibold text-xs px-6 py-3 rounded-full transition shadow-lg shadow-primary/20"
                        >
                            <span>Visit Live Website</span>
                            <ExternalLink size={12} />
                        </a>
                    ) : (
                        <span className="text-xs font-semibold text-slate-500 border border-slate-800 px-4 py-2.5 rounded-full bg-slate-900/40">
                            Internal App Deployment
                        </span>
                    )}
                </div>
            </div>
        </main>
    );
}
