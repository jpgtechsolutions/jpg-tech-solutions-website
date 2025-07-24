"use client"

import { useState, forwardRef, useImperativeHandle } from "react"
import { Code2, Zap, Link, Globe, Users } from "lucide-react"

interface ServicesSectionProps {
  darkMode: boolean
}

export interface ServicesSectionRef {
  expandService: (serviceIndex: number) => void
}

const ServicesSection = forwardRef<ServicesSectionRef, ServicesSectionProps>(({ darkMode }, ref) => {
  const [activeService, setActiveService] = useState<number | null>(null)

  useImperativeHandle(ref, () => ({
    expandService: (serviceIndex: number) => {
      setActiveService(serviceIndex)
    }
  }))

  const services = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Custom Development",
      description: "Software solutions built specifically for your unique business needs",
      details: "No cookie-cutter software solutions. We build exactly what you need to solve your specific challenges.",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Process Automation",
      description: "Save hours every week by automating repetitive tasks",
      details: "From simple workflows to complex integrations, we make your business run on autopilot.",
    },
    {
      icon: <Link className="w-6 h-6" />,
      title: "System Integration",
      description: "Connect all your tools and eliminate data silos",
      details: "Make your existing software solutions work together seamlessly.",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Web Development",
      description: "Modern websites that convert visitors into customers",
      details: "Fast, beautiful, and built to grow your business.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Ongoing Partnership",
      description: "Continuous support as your business evolves",
      details: "We're here for the long haul, adapting as your needs change.",
    },
  ]

  return (
    <section id="services" className={`py-20 px-4 relative ${darkMode ? "bg-[#141414]/50" : "bg-white/50"}`}>
      {/* Slanted top separator */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg className="relative block w-full h-12" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M1200 120L0 16.48V0h1200v120z" className={darkMode ? "fill-[#0A0A0B]" : "fill-slate-50"} />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">How We Help Your Business</h2>
          <p className={`text-lg md:text-xl max-w-3xl mx-auto ${darkMode ? "text-slate-300" : "text-slate-700"}`}>
            Every business is unique. We offer flexible software solutions that adapt to your specific needs and grow with you.
          </p>
        </div>

        {/* Service cards - vertical layout with staggered animations */}
        <div className="space-y-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group cursor-pointer transition-all duration-500 ease-out transform hover:scale-[1.02] hover:-translate-y-1`}
              style={{ 
                animationDelay: `${index * 100}ms`,
                animation: 'fadeInUp 0.6s ease-out forwards'
              }}
              onClick={() => setActiveService(activeService === index ? null : index)}
            >
              <div
                className={`p-6 rounded-xl transition-all duration-500 ease-out border-l-4 border-l-emerald-500/20 hover:border-l-emerald-500 transform ${
                  darkMode
                    ? "bg-[#262626]/30 backdrop-blur border border-[#333333]/30 hover:bg-[#262626]/60 hover:shadow-2xl hover:shadow-emerald-500/10"
                    : "bg-white/80 backdrop-blur border border-slate-200/50 hover:shadow-xl hover:shadow-emerald-500/10 hover:bg-white"
                } ${activeService === index ? "border-l-emerald-500 shadow-lg scale-[1.02] -translate-y-1" : ""}`}
              >
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-lg flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 ${darkMode ? "bg-emerald-500/10 group-hover:bg-emerald-500/20" : "bg-emerald-50 group-hover:bg-emerald-100"}`}>
                    <div className="text-emerald-500 transition-all duration-300 group-hover:text-emerald-400">{service.icon}</div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2 transition-colors duration-300 group-hover:text-emerald-500">{service.title}</h3>
                    <p className={`${darkMode ? "text-slate-400" : "text-slate-600"} leading-relaxed transition-colors duration-300 group-hover:text-slate-300`}>
                      {service.description}
                    </p>
                    {activeService === index && (
                      <div className="overflow-hidden">
                        <p
                          className={`mt-4 pt-4 border-t ${
                            darkMode ? "text-slate-300 border-[#333333]" : "text-slate-700 border-slate-200"
                          } leading-relaxed animate-slideDown`}
                        >
                          {service.details}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Slanted bottom separator */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg className="relative block w-full h-12" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M1200 120L0 16.48V0h1200v120z" className={darkMode ? "fill-[#0A0A0B]/50" : "fill-slate-50"} />
        </svg>
      </div>
    </section>
  )
})

ServicesSection.displayName = 'ServicesSection'

export default ServicesSection
