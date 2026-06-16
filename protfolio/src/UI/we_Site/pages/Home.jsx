import React, { useState, useEffect } from 'react'
import { motion } from 'motion/react'
import {
  FaShoppingCart, FaStore, FaPalette, FaWindowMaximize,
  FaReact, FaNodeJs, FaShopify, FaChevronRight,
  FaBolt, FaShieldAlt, FaPlug, FaExternalLinkAlt
} from 'react-icons/fa'
import { SiMongodb, SiExpress, SiRemix, SiGraphql } from 'react-icons/si'
import ContactForm from '../componente/ContactForm'
import HeroSection from '../componente/HeroSection'
import { getProjects } from '../../../services/ProjectService'
import { Link } from 'react-router-dom'
import Section from '../../common/Section'
import ProjectCard from '../../common/ProjectCard'
import Button from '../../common/Button'

const Home = () => {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    setProjects(getProjects().slice(0, 3))
    window.scrollTo(0, 0)
  }, [])

  const services = [
    {
      icon: <FaShopify className="text-4xl" />,
      title: "Public App Development",
      description: "Building scalable, high-performance public Shopify apps for the official App Store with optimized user experiences."
    },
    {
      icon: <FaPlug className="text-4xl" />,
      title: "Custom Integrations",
      description: "Seamlessly connecting Shopify with ERPs, CRMs, and 3rd-party APIs to automate your business workflows."
    },
    {
      icon: <FaBolt className="text-4xl" />,
      title: "Checkout Extensions",
      description: "Customizing the Shopify checkout flow with the latest UI Extensions to boost AOV and customer trust."
    },
    {
      icon: <FaStore className="text-4xl" />,
      title: "Plus Store Optimization",
      description: "Optimizing Shopify Plus stores for speed, conversions, and advanced theme customization using Liquid."
    }
  ]

  const skills = [
    { name: "Remix", icon: <SiRemix className="text-3xl text-white" /> },
    { name: "GraphQL", icon: <SiGraphql className="text-3xl text-[#e535ab]" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-3xl text-green-400" /> },
    { name: "Shopify", icon: <FaShopify className="text-3xl text-[#96BF48]" /> },
    { name: "Polaris", icon: <FaShopify className="text-3xl text-[#10b981]" /> },
    { name: "Liquid", icon: <FaShopify className="text-3xl text-[#96BF48]" /> }
  ]

  const testimonials = [
    {
      id: 1,
      text: "Uzair's expertise in Shopify API integrations saved us weeks of manual work. The app he built for our Plus store is flawless.",
      name: "Marcus Chen",
      role: "E-commerce Director"
    },
    {
      id: 2,
      text: "Exceptional Shopify developer. He transformed our complex checkout requirements into a beautiful, high-converting experience.",
      name: "Elena Rodriguez",
      role: "DTC Brand Founder"
    }
  ]

  return (
    <div className="bg-background text-text font-sans">

      {/* ── Hero ── */}
      <HeroSection />

      {/* ── Shopify Tech Stack Marquee ── */}
      <div className="bg-card/50 py-10 border-y border-white/5 overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee group">
          {[...skills, ...skills].map((skill, idx) => (
            <div key={idx} className="inline-flex items-center gap-4 mx-12">
              <span className="opacity-70 group-hover:opacity-100 transition duration-300">{skill.icon}</span>
              <span className="text-2xl font-black text-gray-500 uppercase tracking-widest group-hover:text-text transition duration-300">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── About ── */}
      <Section
        id="about"
        badge="Shopify Authority"
        title="Engineering E-commerce Success"
        subtitle="I transform complex Shopify requirements into seamless, high-performance digital ecosystems that drive revenue and scale."
      >
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="flex-1 w-full max-w-lg">
            <div className="relative group">
              <div className="absolute -inset-4 bg-accent/5 rounded-[60px] blur-2xl group-hover:bg-accent/10 transition-all duration-1000" />
              <div className="relative bg-card rounded-[40px] p-8 md:p-12 border border-white/5 shadow-2xl overflow-hidden">
                <div className="relative mb-12 flex justify-center">
                  {/* Background Glows */}
                  <div className="absolute inset-0 bg-accent/20 blur-[60px] rounded-full" />
                  <div className="relative w-48 h-48 sm:w-64 sm:h-64 rounded-full p-[3px] bg-gradient-to-tr from-accent to-sky-400/50 shadow-2xl">
                    <div className="w-full h-full rounded-full overflow-hidden border-2 border-background/80">
                      <img
                        src="/profile.png"
                        alt="Muhammad Uzair"
                        className="w-full h-full object-cover object-top scale-110"
                      />
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 sm:gap-6">
                  <div className="p-8 bg-background border border-white/5 rounded-3xl text-center group-hover:border-accent/20 transition">
                    <h4 className="text-4xl font-black text-accent mb-2 tracking-tighter">03+</h4>
                    <span className="text-gray-500 text-[10px] font-black uppercase tracking-[0.2em]">Years XP</span>
                  </div>
                  <div className="p-8 bg-background border border-white/5 rounded-3xl text-center group-hover:border-accent/20 transition">
                    <h4 className="text-4xl font-black text-accent mb-2 tracking-tighter">50+</h4>
                    <span className="text-gray-500 text-[10px] font-black uppercase tracking-[0.2em]">Optimized</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 text-center lg:text-left">
            <h3 className="text-3xl font-black text-text mb-8 leading-tight">CERTIFIED SHOPIFY APP EXPERT & MERN ARCHITECT</h3>
            <p className="text-gray-400 text-xl mb-12 leading-relaxed">
              I specialize in building mission-critical Shopify apps and bespoke MERN stack applications.
              From Shopify Plus migrations to custom GraphQL API integrations, I focus on maximum scalability
              and zero-downtime performance.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              {skills.map((skill, idx) => (
                <div key={idx} className="group relative">
                  <div className="absolute inset-0 bg-accent/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition" />
                  <div className="relative w-20 h-20 md:w-24 md:h-24 bg-card border border-white/5 rounded-3xl flex items-center justify-center hover:border-accent/30 transition group shadow-xl">
                    <span className="group-hover:scale-110 transition duration-300">{skill.icon}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ── Trust Section ── */}
      <Section
        id="trust"
        badge="Reliability"
        title="Why Shopify Merchants Trust Me"
        subtitle="I follow industry best practices to ensure your e-commerce ecosystem is secure, fast, and scalable."
        className="bg-card/20"
      >
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <FaBolt />,
              title: "Storefront Speed",
              description: "Optimized for Core Web Vitals to ensure lightning-fast load times and higher search rankings."
            },
            {
              icon: <FaShieldAlt />,
              title: "Secure Code",
              description: "Shopify App Store review-ready standards with rigorous security and privacy compliance."
            },
            {
              icon: <FaPlug />,
              title: "Seamless Integration",
              description: "Expert in connecting ERP/CRM via Shopify Admin & Storefront APIs for automated efficiency."
            }
          ].map((item, idx) => (
            <div key={idx} className="p-10 bg-card border border-white/5 rounded-[40px] text-center group hover:border-accent/30 transition shadow-2xl">
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center text-accent text-3xl mx-auto mb-8 group-hover:bg-accent group-hover:text-white transition duration-500">
                {item.icon}
              </div>
              <h4 className="text-text text-xl font-black mb-4">{item.title}</h4>
              <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Services ── */}
      <Section
        id="services"
        badge="Expertise"
        title="High-Ticket Solutions"
        subtitle="Focused on delivering maximum ROI for high-scale e-commerce brands."
        className="bg-card/30"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-card p-12 rounded-[40px] border border-white/5 hover:border-accent/40 shadow-2xl transition group hover:-translate-y-4"
            >
              <div className="w-20 h-20 bg-accent/5 rounded-2xl flex items-center justify-center text-accent mb-10 group-hover:bg-accent group-hover:text-white transition duration-500 shadow-inner">
                {service.icon}
              </div>
              <h3 className="text-text text-xl font-black mb-6 tracking-tight leading-tight">{service.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed font-medium">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ── Featured Projects ── */}
      <Section
        id="projects"
        badge="Curated"
        title="Recent Works"
        subtitle="A glimpse into some of my most challenging and rewarding projects."
      >
        <div className="flex justify-end mb-12">
          <Link to="/projects">
            <Button variant="ghost" className="gap-4 font-black tracking-[0.2em] text-xs uppercase">
              Explore Full Archive <FaChevronRight className="text-xs" />
            </Button>
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-10">
          {projects.map((project, idx) => (
            <ProjectCard key={project.id} project={project} idx={idx} />
          ))}
        </div>
      </Section>

      {/* ── Testimonials ── */}
      <Section
        id="testimonials"
        badge="Reviews"
        title="Client Testimonials"
        subtitle="Words from people I've had the pleasure to work with."
        className="bg-card/20"
      >
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((t) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-card border border-white/5 rounded-[32px] p-10 shadow-2xl relative overflow-hidden"
            >
              <div className="text-8xl text-accent/10 absolute -top-4 -left-4 font-serif">"</div>
              <p className="text-gray-300 mb-8 text-lg italic relative z-10 leading-relaxed">{t.text}</p>
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-accent/20">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-text font-bold">{t.name}</h4>
                  <p className="text-gray-500 text-sm uppercase tracking-wider">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ── Contact ── */}
      <div id="contact">
        <ContactForm />
      </div>

      {/* ── Floating Fiverr Button ── */}
      <motion.a
        href="https://www.fiverr.com/sellers/webteconwebteco/"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 z-[100] w-14 h-14 bg-[#1dbf73] rounded-full flex items-center justify-center text-white shadow-2xl shadow-[#1dbf73]/40 border-2 border-white/10"
      >
        <FaExternalLinkAlt className="text-xl" />
        <span className="absolute -top-10 right-0 bg-[#1dbf73] text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg shadow-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
          Hire me on Fiverr
        </span>
      </motion.a>
    </div>
  )
}

export default Home
