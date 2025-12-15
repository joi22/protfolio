import React, { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import logo from './../../../assets/media/logo.png'

const Navebar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  const navItems = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Our Works', href: '#projects', id: 'ourworks' },
    { name: 'Reviews', href: '#testimonials', id: 'reviews' },
    { name: 'Contact Us', href: '#contact', id: 'contactus' }
  ]

  const handleNavClick = (id) => {
    setActiveSection(id)
  }

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 w-full z-50 flex justify-center pt-4 px-4"
    >
      {/* Pill-shaped Navigation Bar */}
      <motion.nav 
        className="max-w-6xl w-full bg-black/90 backdrop-blur-md border border-red-500/30 rounded-full px-4 md:px-8 py-3 md:py-4 flex items-center justify-between"
        style={{
          background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.95) 0%, rgba(20, 0, 0, 0.95) 100%)',
          boxShadow: '0 4px 20px rgba(220, 38, 38, 0.2)'
        }}
      >
        {/* Logo */}
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="flex-shrink-0"
        >
          <a href="/" className="flex items-center">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-red-500 flex items-center justify-center bg-black/50">
              <span className="text-red-500 text-xl md:text-2xl font-bold">8</span>
            </div>
          </a>
        </motion.div>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex items-center space-x-4 lg:space-x-6 text-white text-sm md:text-base font-medium flex-1 justify-center">
          {navItems.map((item, idx) => (
            <li key={idx}>
              <motion.a 
                href={item.href}
                onClick={() => handleNavClick(item.id)}
                whileHover={{ color: '#ef4444' }}
                className={`transition relative py-2 ${
                  activeSection === item.id 
                    ? 'text-red-500' 
                    : 'text-white hover:text-red-400'
                }`}
              >
                {item.name}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-red-500 rounded-full"
                    initial={false}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </motion.a>
            </li>
          ))}
        </ul>

        {/* Contact Us Button */}
        <div className="hidden md:block flex-shrink-0">
          <motion.a 
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-red-500 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-red-600 transition flex items-center gap-2"
            style={{
              boxShadow: '0 2px 10px rgba(220, 38, 38, 0.4)'
            }}
          >
            <span className="flex gap-1">
              <span className="w-1 h-1 bg-white rounded-full"></span>
              <span className="w-1 h-1 bg-white rounded-full"></span>
              <span className="w-1 h-1 bg-white rounded-full"></span>
            </span>
            Contact Us
          </motion.a>
        </div>

        {/* Mobile Menu Toggle */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          className="md:hidden text-white focus:outline-none ml-auto"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </motion.button>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-full mt-4 left-4 right-4 bg-black/95 backdrop-blur-md border border-red-500/30 rounded-2xl overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.95) 0%, rgba(20, 0, 0, 0.95) 100%)',
            }}
          >
            <div className="px-6 py-4 space-y-4">
              {navItems.map((item, idx) => (
                <motion.a
                  key={idx}
                  href={item.href}
                  onClick={() => {
                    setIsOpen(false)
                    handleNavClick(item.id)
                  }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className={`block py-2 transition ${
                    activeSection === item.id 
                      ? 'text-red-500' 
                      : 'text-white hover:text-red-400'
                  }`}
                >
                  {item.name}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                onClick={() => setIsOpen(false)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navItems.length * 0.1 }}
                className="block bg-red-500 text-white px-6 py-3 rounded-full font-semibold text-center hover:bg-red-600 transition"
              >
                Contact Us
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Navebar
