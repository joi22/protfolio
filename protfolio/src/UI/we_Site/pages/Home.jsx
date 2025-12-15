import React, { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook, FaDownload, FaCode, FaDatabase, FaServer, FaMobile, FaGlobe, FaLaptopCode, FaLaptop, FaPaintBrush, FaMobileAlt, FaSitemap, FaChevronLeft, FaChevronRight, FaShoppingCart, FaStore, FaPalette, FaWindowMaximize, FaTshirt } from 'react-icons/fa'
import ContactForm from '../componente/ContactForm'
import gymImage from '../../../assets/media/Gym.png'

const Home = () => {
  const [activeService, setActiveService] = useState(1) // Start with Shopify Website Developer highlighted

  const services = [
    {
      icon: <FaShoppingCart className="text-6xl" />,
      title: "Shopify App Developer",
      description: "Building custom Shopify apps to extend store functionality and integrate business workflows."
    },
    {
      icon: <FaStore className="text-6xl" />,
      title: "Shopify Website Developer",
      description: "Creating and customizing Shopify stores optimized for performance, sales, and branding."
    },
    {
      icon: <FaPalette className="text-6xl" />,
      title: "Custom Web Design",
      description: "Designing unique and responsive websites tailored to your brand and business needs."
    },
    {
      icon: <FaWindowMaximize className="text-6xl" />,
      title: "Web Application",
      description: "Developing scalable web applications using modern technologies and best practices."
    }
  ]

  const nextService = () => {
    setActiveService((prev) => (prev + 1) % services.length)
  }

  const prevService = () => {
    setActiveService((prev) => (prev - 1 + services.length) % services.length)
  }

  const goToService = (index) => {
    setActiveService(index)
  }

  const projects = [
    {
      id: 1,
      title: "Shopify Gym Clothing Store",
      stack: "Shopify + Liquid",
      description: "Complete Shopify e-commerce website for gym clothing and activewear. Features Black Friday promotions, product catalog, and modern design.",
      image: gymImage,
      category: "Web Design",
      icon: <FaTshirt />
    },
    {
      id: 2,
      title: "E-Commerce Platform",
      stack: "MERN Stack",
      description: "Full-featured e-commerce platform with payment integration and admin dashboard.",
      image: "/sample-project.png",
      category: "App Design",
      icon: <FaCode />
    },
    {
      id: 3,
      title: "Task Management App",
      stack: "React + Node.js",
      description: "Collaborative task management application with real-time updates.",
      image: "/sample-project.png",
      category: "App Design",
      icon: <FaCode />
    },
    {
      id: 4,
      title: "Social Media Dashboard",
      stack: "MERN Stack",
      description: "Analytics dashboard for social media management with data visualization.",
      image: "/sample-project.png",
      category: "App Design",
      icon: <FaCode />
    }
  ]

  const testimonials = [
    {
      id: 1,
      text: "Muhammad Uzair delivered an exceptional full-stack application. His attention to detail and clean code made a huge difference!",
      name: "John Smith",
      role: "Project Manager"
    },
    {
      id: 2,
      text: "Working with Uzair was a great experience. He transformed our ideas into a beautiful and functional web application.",
      name: "Sarah Johnson",
      role: "CEO"
    }
  ]

  const skills = [
    { name: "MongoDB", icon: "🍃" },
    { name: "Express.js", icon: "⚡" },
    { name: "React", icon: "⚛️" },
    { name: "Node.js", icon: "🟢" }
  ]

  return (
    <>
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(220, 38, 38, 0.15) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex-1 text-center md:text-left"
            >
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-white text-sm md:text-base mb-4 tracking-wider"
              >
                WELCOME TO MY WORLD ✨
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4"
              >
                Hi, I'm <br />
                <span className="text-white">
                  Muhammad Uzair
                </span>
              </motion.h1>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent mb-6"
              >
                MERN Stack Developer
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-gray-300 text-lg md:text-xl mb-8 max-w-2xl"
              >
                Passionate MERN Stack Developer. I create scalable and efficient web applications.
                I transform ideas into seamless digital experiences that meet users' expectations.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="flex flex-wrap gap-4 justify-center md:justify-start mb-8"
              >
                <motion.a
                  href="#projects"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-black px-6 py-3 rounded-lg font-semibold flex items-center gap-2 hover:bg-gray-200 transition"
                >
                  <span>My Projects</span>
                  <span>✨</span>
                </motion.a>

                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-red-500 text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 hover:bg-red-500 transition"
                >
                  <FaDownload className="text-sm" />
                  <span>Download CV</span>
                </motion.a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="flex gap-4 justify-center md:justify-start"
              >
                {[
                  { icon: <FaGithub />, href: "#" },
                  { icon: <FaLinkedin />, href: "#" },
                  { icon: <FaTwitter />, href: "#" },
                  { icon: <FaFacebook />, href: "#" }
                ].map((social, idx) => (
                  <motion.a
                    key={idx}
                    href={social.href}
                    whileHover={{ scale: 1.2, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 rounded-full border-2 border-red-500 flex items-center justify-center text-white hover:bg-red-500 transition"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Image/Illustration */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex-1 flex justify-center"
            >
              <motion.div
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative"
              >
                <div className="w-64 h-64 md:w-96 md:h-96 bg-gradient-to-br from-red-500/20 to-red-900/20 rounded-full blur-3xl absolute inset-0"></div>
                <div className="relative bg-black/50 border-2 border-red-500 rounded-2xl p-8 backdrop-blur-sm">
                  <FaLaptopCode className="text-8xl md:text-9xl text-red-500" />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-20 px-4 relative">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex-1"
            >
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-red-500/30 to-red-900/30 rounded-full blur-3xl absolute -z-10"></div>
                <div className="bg-black/50 border-2 border-red-500 rounded-2xl p-8 backdrop-blur-sm">
                  <div className="text-8xl text-red-500 text-center">👨‍💻</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex-1"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">About me</h2>
              <p className="text-gray-300 text-lg mb-4">
                I'm Muhammad Uzair, a passionate MERN Stack Developer with expertise in building
                modern web applications. I specialize in creating intuitive interfaces and robust
                backend systems that deliver exceptional user experiences.
              </p>
              <p className="text-gray-300 text-lg mb-4">
                With experience in MongoDB, Express.js, React, and Node.js, I've worked on various
                projects including e-commerce platforms, social media applications, and business
                management tools. My focus is on writing clean, maintainable code and implementing
                user-centered solutions.
              </p>
              <p className="text-gray-300 text-lg flex items-start gap-2">
                <span className="text-red-500">★</span>
                I'm committed to creativity and precision, ensuring every project delivers unique
                and engaging user experiences.
              </p>

             <div className='max-w-7xl mx-auto'>
             <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 mb-6"
              >
                <motion.h2
                  className="text-sm md:text-base font-semibold text-white px-4 py-2 inline-block"
                >
                  Skills
                </motion.h2>
              </motion.div>

              <div className="flex flex-wrap gap-3 md:gap-4">
                {skills.map((skill, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                    whileHover={{ scale: 1.05 }}
                    className="w-16 h-16 md:w-20 md:h-20 bg-black/70 border-2 border-red-500/50 rounded-xl flex flex-col items-center justify-center backdrop-blur-sm hover:border-red-500 transition"
                  >
                    <div className="text-2xl md:text-3xl mb-1">{skill.icon}</div>
                    <h3 className="text-white font-semibold text-xs md:text-sm text-center leading-tight">{skill.name}</h3>
                  </motion.div>
                ))}
              </div>
             </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* Skills Section */}
      {/* <section id="skills" className="py-10 px-4">
        <div className="container mx-auto max-w-7xl">

        </div>
      </section> */}

      {/* Services Section */}
      <section id="services" className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white text-center mb-4"
          >
            Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gray-300 text-center mb-12 text-lg"
          >
            Transforming ideas into scalable digital solutions
          </motion.p>

          {/* Carousel Container */}
          <div className="relative max-w-6xl mx-auto">
            {/* Navigation Arrows */}
            {/* <motion.button
              onClick={prevService}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 bg-black/70 border-2 border-red-500/50 rounded-lg p-3 text-white hover:bg-black/90 hover:border-red-500 transition hidden md:flex items-center justify-center"
            >
              <FaChevronLeft className="text-xl" />
            </motion.button>

            <motion.button
              onClick={nextService}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 bg-black/70 border-2 border-red-500/50 rounded-lg p-3 text-white hover:bg-black/90 hover:border-red-500 transition hidden md:flex items-center justify-center"
            >
              <FaChevronRight className="text-xl" />
            </motion.button> */}

            {/* Services Cards - Show all cards */}
            <div className="overflow-x-auto pb-4 scrollbar-hide">
              <div className="flex gap-4 md:gap-6 min-w-max md:min-w-0">
                {services.map((service, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                    whileHover={{ scale: activeService === idx ? 1.02 : 1.05 }}
                    onClick={() => goToService(idx)}
                    className={`flex-shrink-0 w-72 md:w-auto md:flex-1 rounded-3xl p-6 md:p-8 backdrop-blur-sm transition-all duration-300 cursor-pointer ${
                      activeService === idx
                        ? 'bg-gradient-to-br from-red-500/40 to-red-900/40 border-2 border-red-500 shadow-lg shadow-red-500/20'
                        : 'bg-black/50 border-2 border-red-500/30 hover:border-red-500/50'
                    }`}
                  >
                    <div className="flex flex-col items-center text-center h-full">
                      <div className={`mb-6 ${activeService === idx ? 'text-white' : 'text-white/80'}`}>
                        {service.icon}
                      </div>
                      <h3 className="text-white text-xl md:text-2xl font-bold mb-4">{service.title}</h3>
                      <p className="text-gray-300 text-sm md:text-base leading-relaxed">{service.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center items-center gap-3 mt-8">
              {services.map((_, idx) => (
                <motion.button
                  key={idx}
                  onClick={() => goToService(idx)}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className={`rounded-full transition-all ${
                    activeService === idx
                      ? 'bg-red-500 w-8 h-3'
                      : 'bg-gray-600 hover:bg-gray-500 w-3 h-3'
                  }`}
                  aria-label={`Go to service ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white text-center mb-4"
          >
            My Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gray-300 text-center mb-12 text-lg"
          >
            Discover the projects that showcase my passion for development and innovation
          </motion.p>

          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="bg-black/50 border-2 border-red-500/50 rounded-xl overflow-hidden backdrop-blur-sm hover:border-red-500 transition"
              >
                <div className="h-48 bg-gradient-to-br from-red-500/20 to-red-900/20 flex items-center justify-center overflow-hidden">
                  {project.image && typeof project.image === 'string' && project.image.includes('Gym.png') ? (
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  ) : project.image && typeof project.image !== 'string' ? (
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  ) : project.icon ? (
                    <div className="text-6xl text-red-500">{project.icon}</div>
                  ) : (
                    <FaCode className="text-6xl text-red-500" />
                  )}
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-white text-xl font-bold">{project.title}</h3>
                    <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">
                      {project.category || "App Design"}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm mb-4">{project.stack}</p>
                  <p className="text-gray-300 text-sm">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-8"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-red-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-600 transition"
            >
              See All &gt;
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white text-center mb-12"
          >
            Testimonials
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.02 }}
                className="bg-black/50 border-2 border-red-500/50 rounded-xl p-6 backdrop-blur-sm hover:border-red-500 transition"
              >
                <div className="text-6xl text-red-500 mb-4">"</div>
                <p className="text-gray-300 mb-6 text-lg">{testimonial.text}</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-red-500 flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <div id="contact">
        <ContactForm />
      </div>
    </>
  )
}

export default Home
