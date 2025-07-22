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
      color: "bg-[#000033]", // Solid color
      skills: [
        { name: "ReactJS", level: 95, experience: "3+ years" },
        { name: "NextJS", level: 90, experience: "3+ years" },
        { name: "TypeScript", level: 92, experience: "3+ years" },
        { name: "HTML", level: 98, experience: "3+ years" },
        { name: "CSS", level: 96, experience: "3+ years" },
        { name: "JavaScript", level: 97, experience: "3+ years" },
        { name: "ReduxToolkit", level: 88, experience: "3+ years" },
        { name: "FlutterFlow", level: 85, experience: "2+ years" },
      ],
    },
    backend: {
      title: "Back-End",
      color: "bg-[#000033]", // Solid color
      skills: [
        { name: "Node.js", level: 93, experience: "3+ years" },
        { name: "Python", level: 87, experience: "3+ years" },
        { name: "Flask", level: 80, experience: "3+ years" },
        { name: "PHP", level: 85, experience: "3+ years" },
        { name: "Laravel", level: 78, experience: "2+ years" },
        { name: "RESTful APIs", level: 90, experience: "3+ years" },
      ],
    },
    databases: {
      title: "Databases",
      color: "bg-[#000033]", // Solid color
      skills: [
        { name: "MySQL", level: 90, experience: "3+ years" },
        { name: "PostgreSQL", level: 88, experience: "3+ years" },
        { name: "MongoDB", level: 85, experience: "3+ years" },
        { name: "Supabase", level: 82, experience: "2+ years" },
        { name: "Firebase", level: 80, experience: "3+ years" },
      ],
    },
    tools: {
      title: "Tools & Methodologies",
      color: "bg-[#000033]", // Solid color
      skills: [
        { name: "Docker", level: 80, experience: "3+ years" },
        { name: "Vercel", level: 90, experience: "3+ years" },
        { name: "CI/CD", level: 88, experience: "3+ years" },
        { name: "GitHub Actions", level: 85, experience: "3+ years" },
        { name: "Jest", level: 75, experience: "2+ years" },
        { name: "Testing Library", level: 70, experience: "2+ years" },
        { name: "Agile", level: 95, experience: "3+ years" },
        { name: "Responsive Design", level: 98, experience: "3+ years" },
        { name: "Version Control (Git)", level: 99, experience: "3+ years" },
      ],
    },
  }

  const tools = [
    { name: "VS Code", category: "Editor" },
    { name: "GitHub", category: "Version Control" },
    { name: "Vercel", category: "Deployment" },
    { name: "Docker", category: "Containerization" },
    { name: "Postman", category: "API Testing" },
    { name: "Figma", category: "Design" },
    { name: "Jest", category: "Testing" },
    { name: "FlutterFlow", category: "Low-Code" },
    { name: "Supabase", category: "Backend as a Service" },
    { name: "Firebase", category: "Backend as a Service" },
  ]

  return (
    <section id="skills" className="py-20 relative bg-white">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <FadeIn>
            <div className="text-center mb-20">
              <div className="inline-block mb-4">
                <Badge className="bg-[#000033] text-white px-4 py-2 text-sm">Technical Expertise</Badge>{" "}
                {/* Solid navy badge */}
              </div>
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  Skills &
                </span>
                <br />
                <span className="bg-gradient-to-r from-navy-600 to-[#000033] bg-clip-text text-transparent">
                  Technologies
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                A comprehensive toolkit built through years of hands-on experience and continuous learning.
              </p>
            </div>
          </FadeIn>

          {/* Category Selector */}
          <FadeIn delay={100}>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {Object.entries(skillCategories).map(([key, category]) => (
                <Button
                  key={key}
                  onClick={() => setActiveCategory(key)}
                  className={`px-6 py-3 rounded-full transition-all duration-300 ${
                    activeCategory === key
                      ? `${category.color} text-white shadow-lg` // Solid color button
                      : "bg-gray-100/50 text-gray-700 hover:bg-gray-50/50 border border-gray-200"
                  }`}
                >
                  {category.title}
                </Button>
              ))}
            </div>
          </FadeIn>

          {/* Skills Display */}
          <FadeIn delay={200}>
            <Card className="bg-white/50 border-gray-200/50 mb-16">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h3
                    className={`text-3xl font-bold bg-clip-text text-transparent ${
                      activeCategory === "frontend"
                        ? "bg-[#000033]"
                        : activeCategory === "backend"
                          ? "bg-[#000033]"
                          : activeCategory === "databases"
                            ? "bg-[#000033]"
                            : "bg-[#000033]"
                    } mb-2`}
                  >
                    {skillCategories[activeCategory as keyof typeof skillCategories].title}
                  </h3>
                  <div
                    className={`h-1 w-24 ${
                      activeCategory === "frontend"
                        ? "bg-navy-500"
                        : activeCategory === "backend"
                          ? "bg-navy-500"
                          : activeCategory === "databases"
                            ? "bg-navy-600"
                            : "bg-navy-600"
                    } mx-auto rounded-full`}
                  />
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {skillCategories[activeCategory as keyof typeof skillCategories].skills.map((skill, index) => (
                    <div key={index} className="group">
                      <div className="flex justify-between items-center mb-3">
                        <span className="font-semibold text-gray-900 group-hover:text-gray-800 transition-all duration-300">
                          {skill.name}
                        </span>
                        <div className="text-right">
                          <div className="text-sm font-bold text-gray-700">{skill.level}%</div>
                          {/* <div className="text-xs text-gray-500">{skill.experience}</div> */}
                        </div>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                        <div
                          className={`h-full ${
                            activeCategory === "frontend"
                              ? "bg-[#000033]"
                              : activeCategory === "backend"
                                ? "bg-[#000033]"
                                : activeCategory === "databases"
                                  ? "bg-[#000033]0"
                                  : "bg-[#000033]"
                          } rounded-full transition-all duration-1000 ease-out relative`}
                          style={{ width: `${skill.level}%` }}
                        >
                          <div className="absolute inset-0 bg-white/20 animate-pulse" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </FadeIn>

          {/* Tools & Software */}
          <FadeIn delay={300}>
            <Card className="bg-white/50 border-gray-200/50">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Tools & Software</h3>
                  <p className="text-gray-600">Daily drivers that power my development workflow</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  {tools.map((tool, index) => (
                    <div
                      key={index}
                      className="group bg-gray-100/50 hover:bg-gray-50/50 border border-gray-200 hover:border-gray-300 rounded-xl p-4 text-center transition-all duration-300 cursor-pointer"
                    >
                      <div className="text-lg font-semibold text-gray-900 group-hover:text-navy-600 transition-all duration-300">
                        {/* Solid navy text on hover */}
                        {tool.name}
                      </div>
                      <div className="text-xs text-gray-600">{tool.category}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
