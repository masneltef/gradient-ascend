'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrollY > 50 ? 'bg-black/80 backdrop-blur-xl border-b border-gray-800/50' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo - Minimalistic */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-orange-500 rounded-md flex items-center justify-center">
              <div className="w-3 h-3 bg-black rounded-sm"></div>
            </div>
            <span className="text-lg font-bold text-white">
              GradientAscend
            </span>
          </div>
          
          {/* Desktop Menu - Clean */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">
              Services
            </a>
            <a href="#projects" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">
              Projects
            </a>
            <a href="#about" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">
              About
            </a>
            <a href="#contact" className="bg-orange-500 hover:bg-orange-600 text-black px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 hover:scale-105">
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-gray-400 hover:text-white transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Minimalistic */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-gray-800/50">
          <div className="max-w-6xl mx-auto px-6 py-6 space-y-4">
            <a 
              href="#services" 
              className="block text-gray-300 hover:text-white transition-colors py-2 text-sm font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </a>
            <a 
              href="#projects" 
              className="block text-gray-300 hover:text-white transition-colors py-2 text-sm font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </a>
            <a 
              href="#about" 
              className="block text-gray-300 hover:text-white transition-colors py-2 text-sm font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <div className="pt-4 border-t border-gray-800/50">
              <a 
                href="#contact" 
                className="block bg-orange-500 hover:bg-orange-600 text-black px-4 py-3 rounded-lg text-sm font-semibold text-center transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}