export default function Footer() {
    return (
      <footer className="py-16 px-6 border-t border-gray-800/50 bg-black">
        <div className="max-w-6xl mx-auto">
          {/* Main footer content */}
          <div className="grid lg:grid-cols-3 gap-12 mb-12">
            {/* Brand section */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-orange-500 rounded-md flex items-center justify-center">
                  <div className="w-3 h-3 bg-black rounded-sm"></div>
                </div>
                <span className="text-lg font-bold text-white">
                  GradientAscend
                </span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                Transforming student ideas into award winning digital solutions.
              </p>
            </div>
  
            {/* Quick links */}
            <div className="lg:col-span-1">
              <h4 className="text-white font-semibold mb-4 text-sm">Quick Links</h4>
              <div className="space-y-3">
                <a href="#services" className="block text-gray-400 hover:text-white transition-colors text-sm">
                  Services
                </a>
                <a href="#projects" className="block text-gray-400 hover:text-white transition-colors text-sm">
                  Projects
                </a>
                <a href="#about" className="block text-gray-400 hover:text-white transition-colors text-sm">
                  About
                </a>
                <a href="#contact" className="block text-gray-400 hover:text-white transition-colors text-sm">
                  Contact
                </a>
              </div>
            </div>
  
            {/* Contact info */}
            <div className="lg:col-span-1">
              <h4 className="text-white font-semibold mb-4 text-sm">Get Started</h4>
              <div className="space-y-3">
                <div className="text-gray-400 text-sm">
                  Ready to begin your project?
                </div>
                <a href="#contact" className="inline-block bg-orange-500 hover:bg-orange-600 text-black px-4 py-2 rounded-lg font-semibold transition-all duration-300 text-sm">
                    Start Today
                </a>
              </div>
            </div>
          </div>
  
          {/* Bottom section */}
          <div className="pt-8 border-t border-gray-800/50">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-gray-500 text-xs">
                © 2025 GradientAscend. Elevating final year projects to new heights.
              </p>
              
              <div className="flex items-center gap-6 text-xs">
                <a href="#" className="text-gray-500 hover:text-gray-400 transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-400 transition-colors">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }