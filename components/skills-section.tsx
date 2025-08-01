"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import FadeIn from "./FadeIn"

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState("frontend")

  const skillCategories = {
    frontend: {
      title: "Front-End",
      color: "bg-[#000033]",
      skills: [
        { name: "ReactJS", level: 95, experience: "3+ years" },
        { name: "NextJS", level: 90, experience: "3+ years" },
        { name: "TypeScript", level: 92, experience: "3+ years" },
        { name: "HTML", level: 98, experience: "3+ years" },
        { name: "CSS", level: 96, experience: "3+ years" },
        { name: "JavaScript", level: 97, experience: "3+ years" },
      ],
    },
    backend: {
      title: "Back-End",
      color: "bg-[#000033]",
      skills: [
        { name: "Node.js", level: 93, experience: "3+ years" },
        { name: "Python", level: 87, experience: "3+ years" },
        { name: "PHP", level: 85, experience: "3+ years" },
        { name: "RESTful APIs", level: 90, experience: "3+ years" },
      ],
    },
    databases: {
      title: "Databases",
      color: "bg-[#000033]",
      skills: [
        { name: "MySQL", level: 90, experience: "3+ years" },
        { name: "PostgreSQL", level: 88, experience: "3+ years" },
        { name: "MongoDB", level: 85, experience: "3+ years" },
      ],
    },
  }

  const tools = [
    { name: "VS Code", category: "Editor" },
    { name: "GitHub", category: "Version Control" },
    { name: "Docker", category: "Containerization" },
    { name: "Postman", category: "API Testing" },
    { name: "Figma", category: "Design" },
  ]

  return (
    <section id="skills" className="py-16 relative bg-[#000011]">
      <div className="absolute inset-0 bg-dot-pattern opacity-10" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header - Left Aligned */}
     <FadeIn>
  <div className="mb-12 text-right">
    <div className="flex flex-col items-end">
      <Badge className="bg-[#000033] text-white px-3 py-1 text-xs mb-4">Technical Expertise</Badge>
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        <span className="bg-gradient-to-r from-white to-[#ccccff] bg-clip-text text-transparent">
          Skills & Technologies
        </span>
      </h2>
      <p className="text-[#ccccff] max-w-2xl ml-auto">
        A comprehensive toolkit built through years of hands-on experience.
      </p>
    </div>
  </div>
</FadeIn>

        {/* Category Selector - Left Aligned */}
        <FadeIn delay={100}>
          <div className="flex flex-wrap gap-3 mb-8 justify-start">
            {Object.entries(skillCategories).map(([key, category]) => (
              <Button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`px-4 py-2 rounded-full text-sm transition-all ${
                  activeCategory === key
                    ? `${category.color} text-white`
                    : "bg-[#000033]/30 text-[#ccccff] hover:bg-[#000033]/50"
                }`}
              >
                {category.title}
              </Button>
            ))}
          </div>
        </FadeIn>

        {/* Skills Grid - Left Aligned */}
        <FadeIn delay={150}>
          <div className="grid md:grid-cols-2 gap-4 mb-12">
            {skillCategories[activeCategory as keyof typeof skillCategories].skills.map((skill, index) => (
              <Card key={index} className="bg-[#000033]/50 border border-[#000066] text-left">
                <CardContent className="p-4">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-sm font-semibold text-white">{skill.name}</h3>
                    <span className="text-xs text-[#ccccff]">{skill.experience}</span>
                  </div>
                  <div className="w-full bg-[#000033]/30 rounded-full h-2 overflow-hidden">
                    <div
                      className="h-full bg-[#666699] rounded-full"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                  <div className="text-right mt-1">
                    <span className="text-xs text-[#ccccff]">{skill.level}% proficiency</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </FadeIn>

        {/* Tools Section - Left Aligned */}
        <FadeIn delay={200}>
          <div className="mb-8 text-left">
            <h3 className="text-xl font-semibold text-white mb-4">Tools & Software</h3>
            <p className="text-sm text-[#ccccff] mb-4">Daily drivers that power my development workflow</p>
            
            <div className="grid md:grid-cols-2 gap-4">
              {tools.map((tool, index) => (
                <Card key={index} className="bg-[#000033]/50 border border-[#000066] text-left">
                  <CardContent className="p-4">
                    <h4 className="text-sm font-medium text-white">{tool.name}</h4>
                    <p className="text-xs text-[#ccccff]">{tool.category}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}