import { Code, Database, Shield, Brain, FileText, Users, ArrowRight } from 'lucide-react'

const services = [
  { 
    icon: Code, 
    title: "Web & Mobile Development", 
    desc: "Full-stack applications built with modern frameworks",
    number: "01"
  },
  { 
    icon: Database, 
    title: "Data Analysis & Dashboards", 
    desc: "Interactive visualizations and business intelligence",
    number: "02"
  },
  { 
    icon: Shield, 
    title: "Cybersecurity Projects", 
    desc: "Security-focused solutions and vulnerability assessments",
    number: "03"
  },
  { 
    icon: Brain, 
    title: "AI & Machine Learning", 
    desc: "Intelligent systems and predictive analytics",
    number: "04"
  },
  { 
    icon: FileText, 
    title: "Documentation & Reports", 
    desc: "Professional documentation meeting university standards",
    number: "05"
  },
  { 
    icon: Users, 
    title: "Presentation Coaching", 
    desc: "Confident defense preparation and presentation skills",
    number: "06"
  }
]

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 relative">
      {/* Minimal background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-1 h-1 bg-orange-500 rounded-full animate-pulse opacity-40"></div>
        <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-orange-500 rounded-full animate-pulse opacity-30" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 border border-orange-500/20 rounded-full bg-orange-500/5">
            <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
            <span className="text-orange-400 font-medium text-xs">WHAT WE OFFER</span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">
            COMPREHENSIVE
            <span className="block bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              SOLUTIONS
            </span>
          </h2>
          
          <p className="text-gray-400 max-w-md mx-auto">
            End-to-end project development for academic excellence
          </p>
        </div>
        
        {/* Services grid */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group relative">
              {/* Card */}
              <div className="relative p-6 h-full border border-gray-800/50 hover:border-orange-500/30 bg-black/30 backdrop-blur-sm transition-all duration-300 rounded-lg overflow-hidden">
                {/* Subtle hover effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Header with number and icon */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-8 h-8 bg-orange-500/10 rounded-lg flex items-center justify-center group-hover:bg-orange-500/20 transition-colors duration-300">
                      <service.icon className="w-4 h-4 text-orange-400" />
                    </div>
                    <span className="text-2xl font-black text-gray-800 group-hover:text-gray-700 transition-colors duration-300">
                      {service.number}
                    </span>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-orange-100 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {service.desc}
                  </p>
                  
                  {/* Learn more link */}
                  <div className="flex items-center gap-2 text-orange-400 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="text-xs font-medium">Learn More</span>
                    <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  )
}