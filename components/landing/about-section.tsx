"use client"

interface AboutSectionProps {
  darkMode: boolean
  onOpenModal: () => void
}

export default function AboutSection({ darkMode, onOpenModal }: AboutSectionProps) {
  return (
    <section id="about" className={`py-24 px-4 relative ${darkMode ? "bg-[#141414]/50" : "bg-white/50"}`}>
      {/* Slanted top separator */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg className="relative block w-full h-12" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M1200 120L0 16.48V0h1200v120z" className={darkMode ? "fill-[#0A0A0B]/50" : "fill-slate-50"} />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">
              Why Choose <span className="text-emerald-500">JPG Tech Solutions</span>
            </h2>
            <div className="space-y-6">
              <p className={`text-lg ${darkMode ? "text-slate-300" : "text-slate-700"}`}>
                We combine deep technical expertise with strategic business thinking to deliver software solutions that create
                real value.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Right-Sized Software Solutions</h4>
                    <p className={darkMode ? "text-slate-400" : "text-slate-600"}>
                      Every software solution is tailored to your specific business context and budget.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Flexible Engagement</h4>
                    <p className={darkMode ? "text-slate-400" : "text-slate-600"}>
                      Hourly, project-based, or value-based pricing - whatever fits your needs.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Proven Track Record</h4>
                    <p className={darkMode ? "text-slate-400" : "text-slate-600"}>
                      We build and maintain our own products, giving us real-world insights.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={`p-8 rounded-2xl ${darkMode ? "bg-[#262626]/50 backdrop-blur" : "bg-slate-50"}`}>
            <h3 className="text-2xl font-bold mb-6 text-center">Our Mission</h3>
            <p className={`text-lg text-center ${darkMode ? "text-slate-300" : "text-slate-700"}`}>
              To empower businesses of all sizes by providing expert technology consulting services that unlock new
              opportunities and drive sustainable growth.
            </p>
            <div className="mt-8 text-center">
              <button
                onClick={onOpenModal}
                className="bg-emerald-500 text-white px-8 py-3 rounded-lg hover:bg-emerald-600 transition-all hover:scale-105 cursor-pointer"
              >
                Start Your Project
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Slanted bottom separator */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg className="relative block w-full h-12" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M1200 120L0 16.48V0h1200v120z" className={darkMode ? "fill-[#141414]" : "fill-white"} />
        </svg>
      </div>
    </section>
  )
}
