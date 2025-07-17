import { Star, CheckCircle, Users, FileText } from 'lucide-react'

const features = [
  { 
    icon: Star, 
    text: "Real-World Projects",
    desc: "Industry-standard solutions"
  },
  { 
    icon: CheckCircle, 
    text: "Fast Turnaround",
    desc: "Full Stack delivery guarantee"
  },
  { 
    icon: Users, 
    text: "Constant Feedback",
    desc: "24/7 communication"
  },
  { 
    icon: FileText, 
    text: "University Standards",
    desc: "Academic format expertise"
  }
]

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 border border-orange-500/20 rounded-full bg-orange-500/5">
            <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
            <span className="text-orange-400 font-medium text-xs">WHY CHOOSE US</span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">
            WHY CHOOSE
            <span className="block bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              GRADIENTASCEND
            </span>
          </h2>
          
          <p className="text-gray-400 max-w-md mx-auto">
            Experience the difference of working with project specialists
          </p>
        </div>
        
        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              {/* Icon container */}
              <div className="w-16 h-16 bg-orange-500/10 border border-orange-500/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-500/20 group-hover:border-orange-500/40 transition-all duration-300">
                <feature.icon className="w-6 h-6 text-orange-400" />
              </div>
              
              {/* Content */}
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-orange-100 transition-colors duration-300">
                {feature.text}
              </h3>
              
              <p className="text-gray-400 text-sm">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Stats section */}
        <div className="mt-20 pt-16 border-t border-gray-800/50">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-black text-white mb-1">50+</div>
              <div className="text-orange-400 font-medium text-sm mb-1">Projects</div>
              <div className="text-gray-500 text-xs">Successfully Delivered</div>
            </div>
            
            <div>
              <div className="text-3xl font-black text-white mb-1">100%</div>
              <div className="text-orange-400 font-medium text-sm mb-1">Success Rate</div>
              <div className="text-gray-500 text-xs">Client Satisfaction</div>
            </div>
            
            <div>
              <div className="text-3xl font-black text-white mb-1">A+</div>
              <div className="text-orange-400 font-medium text-sm mb-1">Average Grade</div>
              <div className="text-gray-500 text-xs">Student Achievement</div>
            </div>
            
            <div>
              <div className="text-3xl font-black text-white mb-1">24/7</div>
              <div className="text-orange-400 font-medium text-sm mb-1">Support</div>
              <div className="text-gray-500 text-xs">Always Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}