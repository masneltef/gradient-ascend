import { ArrowRight } from 'lucide-react'

const projects = [
  {
    title: "Inventory Management System",
    category: "Business Solution",
    complexity: "Medium"
  },
  {
    title: "Online Clinic Booking Platform",
    category: "Healthcare Tech",
    complexity: "High"
  },
  {
    title: "Student Performance Predictor",
    category: "AI/ML",
    complexity: "Advanced"
  },
  {
    title: "Campus Navigation App",
    category: "Mobile Development",
    complexity: "Medium"
  },
  {
    title: "Customer Feedback Analytics",
    category: "Data Science",
    complexity: "Advanced"
  },
  {
    title: "Sales Forecasting ML Model",
    category: "Machine Learning",
    complexity: "Advanced"
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-gray-900/30">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 border border-orange-500/20 rounded-full bg-orange-500/5">
            <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
            <span className="text-orange-400 font-medium text-xs">PROJECT IDEAS</span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">
            POPULAR
            <span className="block bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              PROJECTS
            </span>
          </h2>
          
          <p className="text-gray-400 max-w-md mx-auto">
            Proven concepts that impress academic panels
          </p>
        </div>
        
        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="group relative">
              {/* Card */}
              <div className="p-6 border border-gray-800/50 hover:border-orange-500/30 bg-black/20 backdrop-blur-sm transition-all duration-300 rounded-lg overflow-hidden">
                {/* Subtle hover effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-orange-100 transition-colors duration-300 leading-tight">
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs bg-orange-500/10 text-orange-400 px-2 py-1 rounded-full border border-orange-500/20">
                          {project.category}
                        </span>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-600 group-hover:text-orange-400 group-hover:translate-x-1 transition-all duration-300 flex-shrink-0 mt-1" />
                  </div>
                  
                  {/* Complexity indicator */}
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-500">Complexity:</span>
                    <span className={`text-xs font-medium ${
                      project.complexity === 'Advanced' ? 'text-red-400' :
                      project.complexity === 'High' ? 'text-orange-400' :
                      'text-green-400'
                    }`}>
                      {project.complexity}
                    </span>
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