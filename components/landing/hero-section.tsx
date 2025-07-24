"use client"

import { useState, useEffect } from "react"
import { ChevronRight, ArrowRight } from "lucide-react"

interface HeroSectionProps {
  darkMode: boolean
  onOpenModal: () => void
}

export default function HeroSection({ darkMode, onOpenModal }: HeroSectionProps) {
  const [typedText, setTypedText] = useState("")
  const fullText = "Smart Software Solutions That Make Sense"

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1))
        index++
      } else {
        clearInterval(timer)
      }
    }, 60)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative pt-32 pb-20 px-4 overflow-hidden min-h-[80vh] flex items-center">
      {/* Multi-layer mountain silhouettes */}
      <div className="absolute inset-0">
        {/* Back layer */}
        <svg className="absolute bottom-0 w-full h-96" viewBox="0 0 1440 400" preserveAspectRatio="none">
          <path
            fill={darkMode ? "#1A1A1A" : "#e2e8f0"}
            fillOpacity="0.3"
            d="M0,300 L240,200 L480,250 L720,150 L960,220 L1200,180 L1440,240 L1440,400 L0,400 Z"
          />
        </svg>
        {/* Middle layer */}
        <svg className="absolute bottom-0 w-full h-80" viewBox="0 0 1440 400" preserveAspectRatio="none">
          <path
            fill={darkMode ? "#2A2A2A" : "#cbd5e1"}
            fillOpacity="0.3"
            d="M0,320 L360,220 L600,280 L840,200 L1080,260 L1320,220 L1440,280 L1440,400 L0,400 Z"
          />
        </svg>
        {/* Front layer */}
        <svg className="absolute bottom-0 w-full h-64" viewBox="0 0 1440 400" preserveAspectRatio="none">
          <path
            fill={darkMode ? "#3A3A3A" : "#94a3b8"}
            fillOpacity="0.3"
            d="M0,340 L180,280 L420,320 L660,260 L900,300 L1140,270 L1380,310 L1440,290 L1440,400 L0,400 Z"
          />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            <span className="block">{typedText}</span>
          </h1>
          <p className={`mt-6 text-lg md:text-xl max-w-3xl mx-auto ${darkMode ? "text-slate-300" : "text-slate-700"}`}>
            We create professional software solutions that make sense for your business. Right-sized, fairly priced, and
            built to help you succeed.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => scrollToSection('services')}
              className="bg-emerald-500 text-white px-8 py-4 rounded-lg hover:bg-emerald-600 transition-all hover:scale-105 flex items-center justify-center group shadow-lg hover:shadow-emerald-500/25 cursor-pointer"
            >
              Explore Our Services
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollToSection('process')}
              className={`px-8 py-4 rounded-lg border-2 transition-all hover:scale-105 cursor-pointer ${
                darkMode
                  ? "border-[#333333] hover:border-[#3A3A3A] hover:bg-[#262626]/50"
                  : "border-slate-300 hover:border-slate-400 hover:bg-slate-50"
              }`}
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
