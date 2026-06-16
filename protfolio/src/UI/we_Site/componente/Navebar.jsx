import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const Navebar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const location = useLocation()
  const navigate = useNavigate()

  const [isAdmin, setIsAdmin] = useState(false)

  useEffect(() => {
    const checkAdmin = () => {
      setIsAdmin(localStorage.getItem('adminAuth') === 'true')
    }
    checkAdmin()
    // Listen for changes (in case of login/logout on the same page)
    window.addEventListener('storage', checkAdmin)
    return () => window.removeEventListener('storage', checkAdmin)
  }, [])

  useEffect(() => {
    if (location.pathname === '/') {
      setActiveSection('home')
    } else if (location.pathname === '/projects') {
      setActiveSection('ourworks')
    } else {
      setActiveSection('')
    }
  }, [location])

  const navItems = [
    { name: 'Home', href: '/#home', id: 'home', path: '/' },
    { name: 'Services', href: '/#services', id: 'services', path: '/' },
    { name: 'Projects', href: '/projects', id: 'ourworks', path: '/projects' },
    { name: 'Reviews', href: '/#testimonials', id: 'reviews', path: '/' },
    { name: 'Admin', href: '/admin', id: 'admin', path: '/admin' }
  ]

  const handleNavClick = (item) => {
    setActiveSection(item.id)
    if (location.pathname !== '/' && item.path === '/') {
      navigate('/')
      // Wait for navigation and then scroll
      setTimeout(() => {
        const element = document.getElementById(item.id)
        if (element) element.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    }
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 w-full z-50 flex justify-center pt-8 px-4"
    >
      {/* Pill-shaped Navigation Bar */}
      <motion.nav
        className="max-w-6xl w-full bg-card/80 backdrop-blur-2xl border border-white/5 rounded-[32px] px-6 md:px-10 py-4 flex items-center justify-between shadow-2xl"
      >
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="flex-shrink-0"
        >
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative w-11 h-11">
              {/* Glowing ring */}
              <div className="absolute inset-0 rounded-full bg-accent/20 blur-md group-hover:bg-accent/40 transition-all duration-300"></div>
              <div className="absolute inset-0 rounded-full border-2 border-accent/50 group-hover:border-accent transition-all duration-300"></div>
              {/* Logo image */}
              <img
                src="/logo.png"
                alt="White Tiger Logo"
                className="relative z-10 w-full h-full rounded-full object-contain p-0.5 drop-shadow-[0_0_8px_rgba(16,185,129,0.8)]"
              />
            </div>
            <span className="hidden sm:block text-text font-bold text-base tracking-wide group-hover:text-accent transition-colors duration-300">
              Muhammad Uzair
            </span>
          </Link>
        </motion.div>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex items-center space-x-2 lg:space-x-4 text-text text-sm font-bold flex-1 justify-center">
          {navItems.map((item, idx) => (
            <li key={idx}>
              <Link
                to={item.href}
                onClick={() => handleNavClick(item)}
                className={`transition relative px-6 py-2.5 rounded-full hover:bg-white/5 flex items-center gap-2 ${activeSection === item.id
                  ? 'text-accent bg-accent/5'
                  : 'text-gray-400 hover:text-text'
                  }`}
              >
                {item.id === 'admin' && isAdmin ? 'Dashboard' : item.name}
                {item.id === 'admin' && isAdmin && (
                  <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
                )}
              </Link>
            </li>
          ))}
        </ul>

        {/* Contact Us Button */}
        <div className="hidden md:block flex-shrink-0">
          <motion.a
            href="/#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-accent text-white px-8 py-3 rounded-2xl font-bold hover:bg-hover transition shadow-xl shadow-accent/20"
          >
            Contact Us
          </motion.a>
        </div>

        {/* Mobile Menu Toggle */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          className="md:hidden text-text focus:outline-none ml-auto"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="space-y-1.5 p-2">
            <span className={`block w-6 h-0.5 bg-accent rounded-full transition-transform ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-5 h-0.5 bg-accent rounded-full transition-opacity ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-accent rounded-full transition-transform ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
        </motion.button>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="md:hidden absolute top-full mt-6 left-4 right-4 bg-card/95 backdrop-blur-3xl border border-white/5 rounded-[40px] overflow-hidden shadow-2xl"
          >
            <div className="px-8 py-10 space-y-6">
              {navItems.map((item, idx) => (
                <Link
                  key={idx}
                  to={item.href}
                  onClick={() => {
                    setIsOpen(false)
                    handleNavClick(item)
                  }}
                  className={`block text-2xl font-bold transition ${activeSection === item.id
                    ? 'text-accent'
                    : 'text-gray-400 hover:text-text'
                    }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/#contact"
                onClick={() => setIsOpen(false)}
                className="block bg-accent text-white px-8 py-5 rounded-[24px] font-bold text-center text-xl shadow-xl shadow-accent/20"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Navebar
