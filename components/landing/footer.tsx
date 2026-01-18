"use client"

interface FooterProps {
  darkMode: boolean
  onServiceExpand: (serviceName: string) => void
  onOpenModal: () => void
}

export default function Footer({ darkMode, onServiceExpand, onOpenModal }: FooterProps) {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }
  return (
    <footer
      className={`py-12 px-4 border-t ${darkMode ? "bg-[#0A0A0B] border-[#262626]" : "bg-white border-slate-200"}`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8 max-w-4xl mx-auto">
          <div>
            <div className="text-2xl font-bold mb-4">
              <span className="text-emerald-500">JPG</span> Tech Solutions
            </div>
            <p className={darkMode ? "text-slate-400" : "text-slate-600"}>
              Smart software solutions for growing businesses.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className={`space-y-2 ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
              <li>
                <button 
                  onClick={() => onServiceExpand('Custom Development')}
                  className="hover:text-emerald-500 transition cursor-pointer text-left"
                >
                  Custom Development
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onServiceExpand('Process Automation')}
                  className="hover:text-emerald-500 transition cursor-pointer text-left"
                >
                  Process Automation
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onServiceExpand('System Integration')}
                  className="hover:text-emerald-500 transition cursor-pointer text-left"
                >
                  System Integration
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onServiceExpand('Web Development')}
                  className="hover:text-emerald-500 transition cursor-pointer text-left"
                >
                  Web Development
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onServiceExpand('Ongoing Partnership')}
                  className="hover:text-emerald-500 transition cursor-pointer text-left"
                >
                  Ongoing Partnership
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className={`space-y-2 ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="hover:text-emerald-500 transition cursor-pointer text-left"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('process')}
                  className="hover:text-emerald-500 transition cursor-pointer text-left"
                >
                  Our Process
                </button>
              </li>
              <li>
                <button 
                  onClick={onOpenModal}
                  className="hover:text-emerald-500 transition cursor-pointer text-left"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div
          className={`pt-8 border-t text-center ${
            darkMode ? "border-[#262626] text-slate-400" : "border-slate-200 text-slate-600"
          }`}
        >
          <p>&copy; 2025 JPG Tech Solutions Ltd. Building smart software solutions that grow with you.</p>
          <p className="mt-2 text-xs opacity-80">
            This site uses Google Analytics to understand how visitors interact with our website. By using this site, you agree to our use of cookies for analytics purposes. For more information, please see our Privacy Policy.
          </p>
        </div>
      </div>
    </footer>
  )
}
