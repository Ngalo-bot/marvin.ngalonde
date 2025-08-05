"use client"

import { Mail, Phone, FileText, Download } from "lucide-react"
import Image from "next/image"
import FadeIn from "./FadeIn"
import { Badge } from "@/components/ui/badge"

export default function AboutSection() {
  const stats = [
    { number: "4+", label: "Years Experience", icon: FileText },
    { number: "8+", label: "Tech Stack", icon: FileText },
    { number: "∞", label: "Passion", icon: FileText },
  ]

  return (
    <section id="about" className="py-16 relative bg-white">
      <div className="absolute inset-0 bg-dot-pattern opacity-10" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header - Centered */}
          <FadeIn>
            <div className="mb-12 text-center">
              <Badge className="bg-[#000033] text-white px-3 py-1 text-xs mb-4">About Me</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-gray-900 to-[#000033] bg-clip-text text-transparent">
                  Full-Stack Developer
                </span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                I build seamless web & mobile experiences with React, Node.js, and FlutterFlow.
              </p>
            </div>
          </FadeIn>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Story on the left */}
            <FadeIn delay={150}>
              <div className="space-y-4">
                <p className="text-gray-700 text-lg leading-relaxed">
                  With 4+ years in web and mobile development, I've evolved from PHP/Python to modern stacks, always focused on solving real problems through technology.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  My approach blends technical expertise with user-centric design to create impactful digital solutions.
                </p>
                
                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-4 pt-4">
                  {stats.map((stat, index) => (
                    <div 
                      key={index}
                      className="bg-white border border-gray-200 rounded-2xl p-4 flex flex-col items-center transition-all hover:bg-gray-50 hover:border-[#000033] shadow-sm"
                    >
                      <div className="text-2xl font-bold text-[#000033] mb-1">{stat.number}</div>
                      <div className="text-xs text-gray-600 text-center">{stat.label}</div>
                      <stat.icon className="w-4 h-4 text-[#000033] mt-2" />
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* Contact on the right */}
            <FadeIn delay={200}>
              <div className="space-y-6">
                {/* Contact Info */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900">Contact Information</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-2xl border border-gray-200">
                      <Mail className="w-5 h-5 text-[#000033]" />
                      <span className="text-gray-700">ngalondemarvin@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-2xl border border-gray-200">
                      <Phone className="w-5 h-5 text-[#000033]" />
                      <span className="text-gray-700">+263 787 062 575</span>
                    </div>
                  </div>
                </div>

                {/* Experience Badge */}
                <div className="flex justify-center pt-2">
                  <div className="bg-[#000011] text-white rounded-2xl p-6 text-center shadow-lg w-full max-w-xs">
                    <div className="text-4xl font-bold text-white mb-2">4+</div>
                    <div className="text-sm text-gray-200">Years Experience</div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}