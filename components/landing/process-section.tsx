"use client"

import { ArrowRight, ChevronDown } from "lucide-react"

interface ProcessSectionProps {
  darkMode: boolean
}

export default function ProcessSection({ darkMode }: ProcessSectionProps) {
  const processSteps = [
    {
      number: "01",
      title: "Discovery",
      description:
        "We begin by understanding your business objectives, challenges, and workflow to identify opportunities.",
    },
    {
      number: "02",
      title: "Strategy",
      description: "Our team develops a comprehensive roadmap aligned with your business goals and budget.",
    },
    {
      number: "03",
      title: "Development",
      description: "We build, test, and refine your software solution using proven techniques and your feedback.",
    },
    {
      number: "04",
      title: "Deployment",
      description: "Smooth deployment with comprehensive testing and training for your team.",
    },
  ]

  return (
    <section id="process" className={`py-24 px-4 relative ${darkMode ? "bg-[#0A0A0B]/50" : "bg-slate-50"}`}>
      {/* Slanted top separator */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg className="relative block w-full h-12" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M1200 120L0 16.48V0h1200v120z" className={darkMode ? "fill-[#141414]/50" : "fill-white/50"} />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Process</h2>
          <p className={`text-lg md:text-xl max-w-3xl mx-auto ${darkMode ? "text-slate-300" : "text-slate-700"}`}>
            A systematic approach to delivering software solutions that create real business value.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {processSteps.map((step, index) => (
            <div key={step.number} className="relative flex flex-col items-center">
              <div
                className={`rounded-2xl p-8 h-full transition-all duration-300 hover:scale-105 text-center w-full max-w-sm ${
                  darkMode
                    ? "bg-[#262626]/50 backdrop-blur border border-[#333333]/50 hover:border-emerald-500/50"
                    : "bg-white border border-slate-200 hover:border-emerald-500 hover:shadow-lg"
                }`}
              >
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-emerald-500 text-white font-bold text-xl mb-6 mx-auto">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className={`${darkMode ? "text-slate-400" : "text-slate-600"} leading-relaxed`}>
                  {step.description}
                </p>
              </div>

              {/* Arrow connector - only show on desktop and not for last item */}
              {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-10 transform -translate-y-1/2 z-10">
                  <ArrowRight className={`w-6 h-6 ${darkMode ? "text-emerald-400" : "text-emerald-500"}`} />
                </div>
              )}

              {/* Downward arrow for mobile/tablet - only show for non-last items */}
              {index < processSteps.length - 1 && (
                <div className="lg:hidden flex justify-center mt-6 z-10">
                  <ChevronDown className={`w-6 h-6 ${darkMode ? "text-emerald-400" : "text-emerald-500"}`} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Slanted bottom separator */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg className="relative block w-full h-12" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M1200 120L0 16.48V0h1200v120z" className={darkMode ? "fill-[#141414]/50" : "fill-white/50"} />
        </svg>
      </div>
    </section>
  )
}
