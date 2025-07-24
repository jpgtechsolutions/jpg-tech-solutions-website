"use client"

import { Sun, Moon, ImageIcon, Menu, X } from "lucide-react"

interface NavigationProps {
  darkMode: boolean
  setDarkMode: (value: boolean) => void
  mobileMenuOpen: boolean
  setMobileMenuOpen: (value: boolean) => void
  onOpenModal: () => void
  isHydrated?: boolean
}

export default function Navigation({ darkMode, setDarkMode, mobileMenuOpen, setMobileMenuOpen, onOpenModal, isHydrated = true }: NavigationProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setMobileMenuOpen(false)
  }

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        darkMode
          ? "bg-[#0A0A0B]/90 backdrop-blur-md border-b border-[#262626]/50"
          : "bg-white/90 backdrop-blur-md border-b border-slate-200"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            {/* Logo with enhanced JPG easter egg and click functionality */}
            <button 
              onClick={() => {
                if (mobileMenuOpen) {
                  setMobileMenuOpen(false)
                }
                scrollToTop()
              }}
              className="relative group cursor-pointer transition-transform hover:scale-105"
              aria-label="Back to top"
            >
              <div className={`text-2xl font-bold flex items-center transition-all duration-500 ease-in-out ${darkMode ? "text-white" : "text-slate-900"}`}>
                {/* Normal state - hide on desktop hover OR mobile menu open */}
                <span className={`text-emerald-500 text-2xl transition-all duration-500 ease-in-out transform ${
                  mobileMenuOpen ? 'md:opacity-100 md:scale-100 opacity-0 scale-75' : 'opacity-100 scale-100'
                } md:group-hover:opacity-0 md:group-hover:scale-75`}>JPG</span>
                <span className={`ml-1 text-2xl transition-all duration-500 ease-in-out transform ${
                  mobileMenuOpen ? 'md:opacity-100 md:scale-100 opacity-0 scale-75' : 'opacity-100 scale-100'
                } md:group-hover:opacity-0 md:group-hover:scale-75`}>Tech Solutions</span>
                
                {/* Easter egg state - show on desktop hover OR mobile menu open */}
                <span className={`absolute left-0 font-mono text-2xl text-emerald-400 flex items-center whitespace-nowrap transition-all duration-500 ease-in-out transform ${
                  mobileMenuOpen ? 'md:opacity-0 md:scale-75 opacity-100 scale-100' : 'opacity-0 scale-75'
                } md:group-hover:opacity-100 md:group-hover:scale-100`}>
                  <ImageIcon className="w-5 h-5 mr-1 transition-transform duration-500 flex-shrink-0" />
                  <span className="text-slate-600 dark:text-slate-400 transition-colors duration-500">tech-solutions</span>
                  <span className="text-emerald-500 transition-colors duration-500">.jpg</span>
                </span>
              </div>
            </button>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('services')}
              className={`hover:text-emerald-500 transition-colors cursor-pointer ${
                isHydrated ? (darkMode ? "text-white" : "text-slate-900") : "text-white"
              }`}
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('process')}
              className={`hover:text-emerald-500 transition-colors cursor-pointer ${
                isHydrated ? (darkMode ? "text-white" : "text-slate-900") : "text-white"
              }`}
            >
              Process
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className={`hover:text-emerald-500 transition-colors cursor-pointer ${
                isHydrated ? (darkMode ? "text-white" : "text-slate-900") : "text-white"
              }`}
            >
              About
            </button>
            <button
              onClick={onOpenModal}
              className={`hover:text-emerald-500 transition-colors cursor-pointer ${
                isHydrated ? (darkMode ? "text-white" : "text-slate-900") : "text-white"
              }`}
            >
              Contact
            </button>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-lg transition-all cursor-pointer ${
                darkMode
                  ? "hover:bg-[#262626] text-slate-400 hover:text-white"
                  : "hover:bg-slate-100 text-slate-600 hover:text-slate-900"
              }`}
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-lg transition-all cursor-pointer ${darkMode ? "hover:bg-[#262626]" : "hover:bg-slate-100"}`}
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="cursor-pointer">
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed top-16 left-0 w-full z-40 md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
        mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      } ${
        darkMode
          ? "bg-[#0A0A0B]/95 backdrop-blur-md border-b border-[#262626]/50"
          : "bg-white/95 backdrop-blur-md border-b border-slate-200"
      }`}>
          <div className="px-4 py-6">
            {/* Navigation Links */}
            <div className="space-y-4">
              <button
                onClick={() => scrollToSection('services')}
                className={`block w-full text-left py-3 px-4 rounded-lg transition-colors ${
                  darkMode ? "hover:bg-[#262626] hover:text-emerald-400" : "hover:bg-slate-100 hover:text-emerald-600"
                }`}
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('process')}
                className={`block w-full text-left py-3 px-4 rounded-lg transition-colors ${
                  darkMode ? "hover:bg-[#262626] hover:text-emerald-400" : "hover:bg-slate-100 hover:text-emerald-600"
                }`}
              >
                Process
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className={`block w-full text-left py-3 px-4 rounded-lg transition-colors ${
                  darkMode ? "hover:bg-[#262626] hover:text-emerald-400" : "hover:bg-slate-100 hover:text-emerald-600"
                }`}
              >
                About
              </button>
              <button
                onClick={() => {
                  onOpenModal()
                  setMobileMenuOpen(false)
                }}
                className={`block w-full text-left py-3 px-4 rounded-lg transition-colors ${
                  darkMode ? "hover:bg-[#262626] hover:text-emerald-400" : "hover:bg-slate-100 hover:text-emerald-600"
                }`}
              >
                Contact
              </button>
            </div>
          </div>
        </div>
    </nav>
  )
}
