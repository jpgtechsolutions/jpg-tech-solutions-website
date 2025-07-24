"use client"

import * as gtag from '@/lib/gtag'

interface CTASectionProps {
  darkMode: boolean
  onOpenModal: () => void
}

export default function CTASection({ darkMode, onOpenModal }: CTASectionProps) {
  return (
    <section
      id="contact"
      className={`py-20 px-4 relative overflow-hidden ${
        darkMode ? "bg-gradient-to-b from-[#141414] to-[#0A0A0B]" : "bg-gradient-to-b from-white to-slate-50"
      }`}
    >
      {/* Mountain decoration */}
      <div className="absolute inset-0 opacity-10">
        <svg className="absolute bottom-0 w-full h-48" viewBox="0 0 1440 400" preserveAspectRatio="none">
          <path
            fill="currentColor"
            d="M0,340 L180,280 L420,320 L660,260 L900,300 L1140,270 L1380,310 L1440,290 L1440,400 L0,400 Z"
          />
        </svg>
      </div>
      <div className="relative max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Build Something Great?</h2>
        <p className={`text-lg md:text-xl mb-8 ${darkMode ? "text-slate-300" : "text-slate-700"}`}>
          Let's discuss how the right software solutions can transform your business.
        </p>
        <div className="flex justify-center">
          <button
            onClick={() => {
              gtag.event({
                action: 'click',
                category: 'CTA',
                label: 'Schedule Consultation - CTA Section',
              });
              onOpenModal();
            }}
            className="bg-emerald-500 text-white px-10 py-4 rounded-lg text-lg hover:bg-emerald-600 transition-all hover:scale-105 shadow-lg hover:shadow-emerald-500/25 cursor-pointer"
          >
            Schedule a Consultation
          </button>
        </div>
      </div>
    </section>
  )
}
