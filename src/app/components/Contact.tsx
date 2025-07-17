'use client'

import { useState } from 'react'
import { Phone, MapPin, ArrowRight, Send, CheckCircle, User, Mail, GraduationCap, Code, Clock, MessageSquare } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    university: '',
    projectType: '',
    timeline: '',
    budget: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Create form data for Netlify
      const form = new FormData()
      Object.entries(formData).forEach(([key, value]) => {
        form.append(key, value)
      })
      form.append('form-name', 'contact-form')

      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(form as FormData).toString()
      })

      if (response.ok) {
        setIsSubmitted(true)
        setFormData({
          name: '',
          email: '',
          university: '',
          projectType: '',
          timeline: '',
          budget: '',
          message: ''
        })
      }
    } catch (error) {
      console.error('Form submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-16 md:py-24 px-6 bg-gray-900/30">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 border border-orange-500/20 rounded-full bg-orange-500/5">
            <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
            <span className="text-orange-400 font-medium text-xs">GET IN TOUCH</span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">
            READY TO
            <span className="block bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              START?
            </span>
          </h2>
          
          <p className="text-gray-400 max-w-md mx-auto">
            Let&apos;s bring your project vision to life
          </p>
        </div>

        {/* Contact Information Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {/* WhatsApp */}
          <div className="group">
            <div className="p-6 border border-gray-800/50 hover:border-orange-500/30 bg-black/20 backdrop-blur-sm transition-all duration-300 rounded-lg">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-orange-500/10 border border-orange-500/20 rounded-lg flex items-center justify-center group-hover:bg-orange-500/20 group-hover:border-orange-500/40 transition-all duration-300">
                  <Phone className="w-5 h-5 text-orange-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1 group-hover:text-orange-100 transition-colors duration-300">
                    WhatsApp
                  </h3>
                  <p className="text-gray-400 text-sm">+1 343 882 2805</p>
                  <p className="text-orange-400 text-xs mt-1">Instant messaging</p>
                </div>
              </div>
            </div>
          </div>

          {/* Location */}
          <div className="group">
            <div className="p-6 border border-gray-800/50 hover:border-orange-500/30 bg-black/20 backdrop-blur-sm transition-all duration-300 rounded-lg">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-orange-500/10 border border-orange-500/20 rounded-lg flex items-center justify-center group-hover:bg-orange-500/20 group-hover:border-orange-500/40 transition-all duration-300">
                  <MapPin className="w-5 h-5 text-orange-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1 group-hover:text-orange-100 transition-colors duration-300">
                    Global Service
                  </h3>
                  <p className="text-gray-400 text-sm">Worldwide Remote</p>
                  <p className="text-orange-400 text-xs mt-1">Based in the Heart of Africa</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust indicators */}
        <div className="mb-16">
          <div className="grid grid-cols-3 gap-6 max-w-md mx-auto p-6 border border-gray-800/50 bg-black/20 backdrop-blur-sm rounded-lg">
            <div className="text-center">
              <div className="text-xl font-bold text-orange-400 mb-1">24H</div>
              <div className="text-xs text-gray-500">Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold text-orange-400 mb-1">100%</div>
              <div className="text-xs text-gray-500">Confidential</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold text-orange-400 mb-1">Free</div>
              <div className="text-xs text-gray-500">Consultation</div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto">
          {isSubmitted ? (
            <div className="bg-gradient-to-br from-green-500/10 to-green-600/5 border border-green-500/20 rounded-lg p-8 text-center backdrop-blur-sm">
              <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-white mb-3">Thank You!</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Your project inquiry has been submitted successfully. 
                We will review your requirements and get back to you within 24 hours with a detailed proposal.
              </p>
              <button 
                onClick={() => setIsSubmitted(false)}
                className="text-orange-400 hover:text-orange-300 font-medium transition-colors"
              >
                Submit Another Inquiry
              </button>
            </div>
          ) : (
            <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/20 border border-gray-800/50 rounded-lg p-8 backdrop-blur-sm">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">Start Your Project</h3>
                <p className="text-gray-400">Tell us about your final year project idea</p>
              </div>

              <form 
                name="contact-form" 
                method="POST" 
                data-netlify="true" 
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                {/* Hidden fields for Netlify */}
                <input type="hidden" name="form-name" value="contact-form" />
                <input type="hidden" name="bot-field" />

                {/* Name */}
                <div className="group">
                  <label className="flex items-center gap-2 text-white font-medium mb-3">
                    <User className="w-4 h-4 text-orange-400" />
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-400 focus:border-orange-500/50 focus:bg-gray-800/70 focus:outline-none transition-all duration-300"
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Email */}
                <div className="group">
                  <label className="flex items-center gap-2 text-white font-medium mb-3">
                    <Mail className="w-4 h-4 text-orange-400" />
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-400 focus:border-orange-500/50 focus:bg-gray-800/70 focus:outline-none transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>

                {/* University */}
                <div className="group">
                  <label className="flex items-center gap-2 text-white font-medium mb-3">
                    <GraduationCap className="w-4 h-4 text-orange-400" />
                    University *
                  </label>
                  <select
                    name="university"
                    value={formData.university}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white focus:border-orange-500/50 focus:bg-gray-800/70 focus:outline-none transition-all duration-300"
                  >
                    <option value="">Select your university</option>
                    <option value="University of Rwanda">University of Rwanda</option>
                    <option value="ULK">ULK (Université Libre de Kigali)</option>
                    <option value="MKUR">MKUR (Mount Kenya University Rwanda)</option>
                    <option value="UTB">UTB (University of Technology and Business)</option>
                    <option value="University of Kigali">University of Kigali</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* Project Type */}
                <div className="group">
                  <label className="flex items-center gap-2 text-white font-medium mb-3">
                    <Code className="w-4 h-4 text-orange-400" />
                    Project Type *
                  </label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white focus:border-orange-500/50 focus:bg-gray-800/70 focus:outline-none transition-all duration-300"
                  >
                    <option value="">Select project type</option>
                    <option value="Web Development">Web Development</option>
                    <option value="Mobile App">Mobile App</option>
                    <option value="AI/Machine Learning">AI/Machine Learning</option>
                    <option value="Data Analysis">Data Analysis</option>
                    <option value="Cybersecurity">Cybersecurity</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Timeline */}
                  <div className="group">
                    <label className="flex items-center gap-2 text-white font-medium mb-3">
                      <Clock className="w-4 h-4 text-orange-400" />
                      Timeline
                    </label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full px-4 py-4 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white focus:border-orange-500/50 focus:bg-gray-800/70 focus:outline-none transition-all duration-300"
                    >
                      <option value="">Select timeline</option>
                      <option value="1-2 weeks">1-2 weeks</option>
                      <option value="3-4 weeks">3-4 weeks</option>
                      <option value="1-2 months">1-2 months</option>
                      <option value="3+ months">3+ months</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="group">
                  <label className="flex items-center gap-2 text-white font-medium mb-3">
                    <MessageSquare className="w-4 h-4 text-orange-400" />
                    Project Description *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-4 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-400 focus:border-orange-500/50 focus:bg-gray-800/70 focus:outline-none transition-all duration-300 resize-none"
                    placeholder="Describe your project idea, requirements, specific features you need, and any challenges you're facing..."
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-orange-500/50 text-black px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin"></div>
                        <span>Submitting Your Inquiry...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Project Inquiry</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>

                {/* Privacy note */}
                <div className="text-center pt-4 border-t border-gray-800/50">
                  <p className="text-gray-500 text-xs">
                    By submitting this form, you agree to our privacy policy. 
                    We will only use your information to respond to your inquiry.
                  </p>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}