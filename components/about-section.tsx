"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Lightbulb, Rocket, Zap, Code, Palette, Brain, Heart } from "lucide-react"
import FadeIn from "./FadeIn"

export default function AboutSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const principles = [
    {
      icon: Brain,
      title: "Strategic Thinking",
      description: "Every project starts with understanding the 'why' before diving into the 'how'",
      color: "bg-[#000033]",
    },
    {
      icon: Palette,
      title: "Design-First Approach",
      description: "Beautiful interfaces that users love, backed by solid user experience principles",
      color: "bg-[#000066]",
    },
    {
      icon: Code,
      title: "Clean Architecture",
      description: "Scalable, maintainable code that stands the test of time and team changes",
      color: "bg-[#000099]",
    },
    {
      icon: Heart,
      title: "User Empathy",
      description: "Technology should serve people, making their lives easier and more enjoyable",
      color: "bg-[#0000cc]",
    },
  ]

  const stats = [
    { number: "4+", label: "Years Experience", icon: Rocket },    
    { number: "8+", label: "Technologies Mastered", icon: Code },
    { number: "∞", label: "Passion for Tech", icon: Lightbulb },
  ]

  return (
    <section id="about" className="py-20 relative bg-[#000011]">
      <div className="absolute inset-0 bg-dot-pattern opacity-10" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <FadeIn>
            <div className="text-center mb-20">
              <div className="inline-block mb-4">
                <Badge className="bg-[#000033] text-white px-4 py-2 text-sm">About Me</Badge>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                  Crafting Digital
                </span>
                <br />
                <span className="bg-gradient-to-r from-[#666699] to-[#9999cc] bg-clip-text text-transparent">
                  Experiences
                </span>
              </h2>
              <p className="text-xl text-[#ccccff] max-w-3xl mx-auto leading-relaxed">
                I'm a highly passionate and driven tech enthusiast with a strong foundation in mobile and web
                development, specializing in React, Node.js, and low-code platforms like FlutterFlow.
              </p>
            </div>
          </FadeIn>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Story Side */}
            <FadeIn delay={100}>
              <div className="space-y-8">
                <div className="relative">
                  <div className="absolute -left-4 top-0 w-1 h-full bg-[#000033] rounded-full" />
                  <div className="pl-8">
                    <h3 className="text-2xl font-semibold text-white mb-4">My Journey</h3>
                    <p className="text-[#ccccff] text-lg leading-relaxed mb-6">
                      My path has taken me through various roles in web and mobile development, from building responsive
                      interfaces with PHP and Python to architecting full-stack solutions with React and Node.js.
                    </p>
                    <p className="text-[#ccccff] text-lg leading-relaxed">
                      What drives me isn't just writing code—it's solving real problems for real people.
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Stats Side - Replacing the visual */}
            <FadeIn delay={200}>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <Card
                    key={index}
                    className="bg-[#000033]/50 border-[#000066] hover:bg-[#000033]/70 transition-all duration-300 h-full"
                  >
                    <CardContent className="p-6 flex flex-col items-center justify-center h-full">
                      <stat.icon className="w-10 h-10 text-[#9999cc] mb-4" />
                      <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                      <div className="text-[#ccccff] text-lg text-center">{stat.label}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Principles Grid */}
          {/* <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {principles.map((principle, index) => (
              <FadeIn key={index} delay={index * 150 + 300}>
                <Card
                  className="group bg-[#000033]/30 border-[#666699]/30 hover:border-[#9999cc] transition-all duration-500 cursor-pointer overflow-hidden"
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <CardContent className="p-8 relative">
                    <div
                      className={`absolute inset-0 ${principle.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                    />

                    <div
                      className={`w-16 h-16 rounded-2xl ${principle.color} p-0.5 mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <div className="w-full h-full bg-[#000011] rounded-2xl flex items-center justify-center">
                        <principle.icon className="w-8 h-8 text-[#ccccff]" />
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#ccccff] transition-all duration-300">
                      {principle.title}
                    </h3>

                    <p className="text-[#9999cc] leading-relaxed group-hover:text-[#ccccff] transition-colors duration-300">
                      {principle.description}
                    </p>

                    {hoveredCard === index && (
                      <div className="absolute bottom-4 right-4">
                        <div className={`w-2 h-2 rounded-full ${principle.color} animate-pulse`} />
                      </div>
                    )}
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div> */}
        </div>
      </div>
    </section>
  )
}