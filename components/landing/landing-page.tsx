"use client"

import { useState, useRef, useEffect } from "react"
import Navigation from "./navigation"
import HeroSection from "./hero-section"
import ServicesSection from "./services-section"
import ProcessSection from "./process-section"
import AboutSection from "./about-section"
import CTASection from "./cta-section"
import Footer from "./footer"
import ConsultationModal from "../ConsultationModal"

export default function LandingPage() {
  const [darkMode, setDarkMode] = useState(true) // Default to dark mode to prevent hydration mismatch
  const [isHydrated, setIsHydrated] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const servicesRef = useRef<{ expandService: (serviceIndex: number) => void }>(null)

  // Handle initial dark mode after hydration
  useEffect(() => {
    setIsHydrated(true)
    if (typeof window !== "undefined") {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
      setDarkMode(prefersDark)
    }
  }, [])

  const handleServiceExpand = (serviceName: string) => {
    const serviceMap: { [key: string]: number } = {
      'Custom Development': 0,
      'Process Automation': 1,
      'System Integration': 2,
      'Web Development': 3,
      'Ongoing Partnership': 4
    }
    
    const serviceIndex = serviceMap[serviceName]
    if (serviceIndex !== undefined && servicesRef.current) {
      // First scroll to services section
      const element = document.getElementById('services')
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
        // Delay the expansion slightly to allow scroll to complete
        setTimeout(() => {
          servicesRef.current?.expandService(serviceIndex)
        }, 600)
      }
    }
  }

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode
          ? "bg-gradient-to-b from-[#0A0A0B] via-[#141414] to-[#0A0A0B] text-slate-100"
          : "bg-gradient-to-b from-slate-50 via-white to-slate-50 text-slate-900"
      }`}
    >
      <Navigation
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        onOpenModal={() => setModalOpen(true)}
        isHydrated={isHydrated}
      />
      <HeroSection darkMode={darkMode} onOpenModal={() => setModalOpen(true)} />
      <ServicesSection darkMode={darkMode} ref={servicesRef} />
      <ProcessSection darkMode={darkMode} />
      <AboutSection darkMode={darkMode} onOpenModal={() => setModalOpen(true)} />
      <CTASection darkMode={darkMode} onOpenModal={() => setModalOpen(true)} />
      <Footer darkMode={darkMode} onServiceExpand={handleServiceExpand} onOpenModal={() => setModalOpen(true)} />
      <ConsultationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  )
}
