"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Rocket, Code, Lightbulb, Sparkles } from "lucide-react"
import FadeIn from "./FadeIn"

export default function AboutSection() {
  const stats = [
    { number: "4+", label: "Years Experience", icon: Rocket },
    { number: "8+", label: "Tech Stack", icon: Code },
    { number: "∞", label: "Passion", icon: Lightbulb },
  ]

  return (
    <section id="about" className="py-16 relative bg-[#000011]">
      <div className="absolute inset-0 bg-dot-pattern opacity-10" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header - Left Aligned */}
          <FadeIn>
            <div className="mb-12">
              <Badge className="bg-[#000033] text-white px-3 py-1 text-xs mb-4">About Me</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-white to-[#ccccff] bg-clip-text text-transparent">
                  Full-Stack Developer
                </span>
                <Sparkles className="inline w-6 h-6 ml-2 text-[#9999cc]" />
              </h2>
              <p className="text-[#ccccff] max-w-2xl text-lg">
                I build seamless web & mobile experiences with React, Node.js, and FlutterFlow.
              </p>
            </div>
          </FadeIn>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Brief Story */}
            <FadeIn delay={100}>
              <div className="space-y-4">
                <p className="text-[#ccccff]">
                  With 4+ years in web and mobile development, I've evolved from PHP/Python to modern stacks, always focused on solving real problems through technology.
                </p>
                <p className="text-[#ccccff]">
                  My approach blends technical expertise with user-centric design to create impactful digital solutions.
                </p>
              </div>
            </FadeIn>

            {/* Modern Stats Cards */}
            <FadeIn delay={150}>
              <div className="grid grid-cols-3 gap-3">
                {stats.map((stat, index) => (
                  <div 
                    key={index}
                    className="bg-[#000033]/50 border border-[#000066] rounded-lg p-4 flex flex-col items-center transition-all hover:bg-[#000033]/70 hover:border-[#9999cc]"
                  >
                    <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
                    <div className="text-xs text-[#ccccff] text-center">{stat.label}</div>
                    <stat.icon className="w-4 h-4 text-[#9999cc] mt-2" />
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}