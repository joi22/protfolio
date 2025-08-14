import React, { useState } from 'react'
import logo from './../../../../public/media/logo.png'
import TopHeader from './TopHeader';

const Navebar = () => {

      const [isOpen, setIsOpen] = useState(false);

  return (

 <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/10 border-b border-white/10 dark:bg-gray-900/20 dark:border-gray-800/40">
    <TopHeader/>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="text-xl font-bold text-white">
          <a href="/"><img src={logo} width={170} alt="" /></a>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center space-x-8 text-white text-sm font-medium">
          <li><a href="#home" className="hover:text-blue-400 transition">Home</a></li>
          <li><a href="#services" className="hover:text-blue-400 transition">Services</a></li>
          <li><a href="#projects" className="hover:text-blue-400 transition">Projects</a></li>
          <li><a href="#about" className="hover:text-blue-400 transition">About</a></li>
        </ul>

        {/* Contact (Right-aligned) */}
        <div className="hidden md:block">
          <a href="#contact" className="text-white font-medium hover:text-blue-400 transition">
            Contact
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/70 backdrop-blur-md py-4 px-6 space-y-4 text-white">
          <a href="#home" className="block hover:text-blue-400">Home</a>
          <a href="#services" className="block hover:text-blue-400">Services</a>
          <a href="#projects" className="block hover:text-blue-400">Projects</a>
          <a href="#about" className="block hover:text-blue-400">About</a>
          <a href="#contact" className="block hover:text-blue-400">Contact</a>
        </div>
      )}
    </header>  )
}

export default Navebar