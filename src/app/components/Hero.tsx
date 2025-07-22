'use client'

import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 bg-black overflow-hidden pt-24 md:pt-32">
      {/* Subtle radial gradient background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-orange-500/8 via-orange-500/3 to-transparent rounded-full"></div>
      </div>

      {/* Minimal floating orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-orange-400 rounded-full animate-pulse opacity-40"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-orange-500 rounded-full animate-ping opacity-60"></div>
        <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-orange-600 rounded-full animate-pulse opacity-30" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto py-8 md:py-12">
        {/* Main content - Split layout */}
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left side - Text content */}
          <div className="space-y-6 md:space-y-8 text-center lg:text-left">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-4 md:mb-6">
                <span className="block text-white">CRAFT YOUR</span>
                <span className="block bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                  SUCCESS
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-lg mx-auto lg:mx-0">
                Transform your final year project ideas into 
                <span className="text-orange-400 font-medium"> award winning digital solutions</span>.
              </p>
            </div>

            {/* Clean features list */}
            <div className="space-y-3 md:space-y-4">
              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                <span className="text-gray-400 text-sm md:text-base">University-standard documentation</span>
              </div>
              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                <span className="text-gray-400 text-sm md:text-base">Modern tech implementation</span>
              </div>
              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                <span className="text-gray-400 text-sm md:text-base">Defense presentation coaching</span>
              </div>
            </div>

            {/* Single CTA Button */}
            <div className="pt-6 md:pt-8">
              <a href="#contact" className="group bg-orange-500 hover:bg-orange-600 text-black px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center gap-3 w-fit mx-auto lg:mx-0">
                <span>Start My Project</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* Right side - Minimal visual element */}
          <div className="relative order-first lg:order-last mb-8 lg:mb-0">
            {/* Clean central display */}
            <div className="relative w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 mx-auto">
              {/* Simple circle rings */}
              <div className="absolute inset-0 border border-orange-500/20 rounded-full"></div>
              <div className="absolute inset-6 md:inset-8 border border-orange-500/30 rounded-full"></div>
              
              {/* Center content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-2">50+</div>
                  <div className="text-orange-400 font-medium text-sm md:text-base">PROJECTS</div>
                  <div className="text-gray-500 text-xs md:text-sm">DELIVERED</div>
                </div>
              </div>

              {/* Minimal floating stats - responsive positioning */}
              <div className="absolute -top-3 md:-top-4 left-1/2 transform -translate-x-1/2 bg-black/80 border border-orange-500/20 rounded-lg px-2 md:px-3 py-1.5 md:py-2">
                <div className="text-center">
                  <div className="text-sm md:text-lg font-bold text-orange-400">100%</div>
                  <div className="text-xs text-gray-500">SUCCESS</div>
                </div>
              </div>
              
              <div className="absolute top-1/2 -right-8 md:-right-12 transform -translate-y-1/2 bg-black/80 border border-orange-500/20 rounded-lg px-2 md:px-3 py-1.5 md:py-2">
                <div className="text-center">
                  <div className="text-sm md:text-lg font-bold text-orange-400">24/7</div>
                  <div className="text-xs text-gray-500">SUPPORT</div>
                </div>
              </div>
              
              <div className="absolute -bottom-3 md:-bottom-4 left-1/2 transform -translate-x-1/2 bg-black/80 border border-orange-500/20 rounded-lg px-2 md:px-3 py-1.5 md:py-2">
                <div className="text-center">
                  <div className="text-sm md:text-lg font-bold text-orange-400">A+</div>
                  <div className="text-xs text-gray-500">GRADE</div>
                </div>
              </div>
              
              <div className="absolute top-1/2 -left-8 md:-left-12 transform -translate-y-1/2 bg-black/80 border border-orange-500/20 rounded-lg px-2 md:px-3 py-1.5 md:py-2">
                <div className="text-center">
                  <div className="text-sm md:text-lg font-bold text-orange-400">FAST</div>
                  <div className="text-xs text-gray-500">DELIVERY</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Minimal trust indicators - updated universities with better spacing */}
        <div className="text-center mt-16 md:mt-20 pt-8 md:pt-12 border-t border-gray-800/50 pb-8 md:pb-12">
          <p className="text-gray-600 text-xs mb-4 md:mb-6">TRUSTED BY STUDENTS FROM</p>
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 text-gray-700 text-sm md:text-base">
            <span>ULK</span>
            <div className="w-1 h-1 bg-orange-500/50 rounded-full"></div>
            <span>MKUR</span>
            <div className="w-1 h-1 bg-orange-500/50 rounded-full"></div>
            <span>University of Rwanda</span>
            <div className="w-1 h-1 bg-orange-500/50 rounded-full"></div>
            <span>UTB</span>
            <div className="w-1 h-1 bg-orange-500/50 rounded-full"></div>
            <span>University of Kigali</span>
          </div>
        </div>
      </div>
    </section>
  )
}