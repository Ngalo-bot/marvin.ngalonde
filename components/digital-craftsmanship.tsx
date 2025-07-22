"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import FadeIn from "./FadeIn"

export default function DigitalCraftsmanship() {
  const [activeProject, setActiveProject] = useState(0)

  const projects = [
    {
      title: "Neural Commerce",
      subtitle: "AI-Powered E-commerce Revolution",
      description:
        "Built an e-commerce platform that learns from user behavior to personalize shopping experiences. Features real-time inventory prediction, dynamic pricing, and conversational AI shopping assistant.",
      longDescription:
        "This project challenged me to integrate machine learning with traditional e-commerce. The AI analyzes browsing patterns, purchase history, and even time-of-day preferences to create unique shopping experiences for each user.",
      tech: ["Next.js", "TensorFlow.js", "PostgreSQL", "Redis", "Stripe", "OpenAI"],
      metrics: ["40% increase in conversion", "60% reduction in cart abandonment", "2.3s average load time"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      image: "/placeholder.svg?height=400&width=600",
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "DevFlow",
      subtitle: "Developer Productivity Suite",
      description:
        "A comprehensive development environment that combines code editing, project management, and team collaboration. Built with micro-frontend architecture for maximum flexibility.",
      longDescription:
        "Created to solve my own pain points in development workflow. This tool integrates seamlessly with existing dev tools while providing unique features like AI-powered code suggestions and real-time collaboration.",
      tech: ["React", "Node.js", "WebSockets", "Docker", "Kubernetes", "MongoDB"],
      metrics: ["500+ active developers", "35% faster development cycles", "99.9% uptime"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      image: "/placeholder.svg?height=400&width=600",
      color: "from-navy-500 to-cyan-500",
    },
    {
      title: "EcoTracker",
      subtitle: "Sustainability Impact Platform",
      description:
        "Mobile-first application that gamifies environmental consciousness. Users track their carbon footprint, compete with friends, and discover eco-friendly alternatives.",
      longDescription:
        "Passionate about environmental issues, I built this to make sustainability engaging and social. The app uses IoT integrations and machine learning to provide accurate impact measurements.",
      tech: ["React Native", "Python", "FastAPI", "PostgreSQL", "AWS IoT", "Chart.js"],
      metrics: ["10K+ active users", "2M+ actions tracked", "15% average carbon reduction"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      image: "/placeholder.svg?height=400&width=600",
      color: "from-green-500 to-emerald-500",
    },
  ]

  return (
    <section id="craftsmanship" className="py-20 relative bg-navy-900">
      <div className="absolute inset-0 bg-dot-pattern opacity-10"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-navy-400 to-cyan-400 bg-clip-text text-transparent">
                Digital Craftsmanship
              </h2>
              <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                Each project is a journey of problem-solving, learning, and creating something meaningful
              </p>
            </div>
          </FadeIn>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Project Navigation */}
            <FadeIn delay={100}>
              <div className="space-y-4">
                {projects.map((project, index) => (
                  <Card
                    key={index}
                    className={`cursor-pointer transition-all duration-300 ${
                      activeProject === index
                        ? "bg-slate-800 border-navy-500"
                        : "bg-navy-900/50 border-navy-700 hover:border-navy-600"
                    }`}
                    onClick={() => setActiveProject(index)}
                  >
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-slate-100 mb-2">{project.title}</h3>
                      <p className="text-sm text-slate-400 mb-3">{project.subtitle}</p>
                      <div className="flex flex-wrap gap-1">
                        {project.tech.slice(0, 3).map((tech, techIndex) => (
                          <Badge key={techIndex} variant="secondary" className="text-xs bg-slate-700 text-slate-300">
                            {tech}
                          </Badge>
                        ))}
                        {project.tech.length > 3 && (
                          <Badge variant="secondary" className="text-xs bg-slate-700 text-slate-300">
                            +{project.tech.length - 3}
                          </Badge>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </FadeIn>

            {/* Project Details */}
            <div className="lg:col-span-2">
              <FadeIn delay={200}>
                <Card className="bg-navy-900/50 border-navy-700 h-full">
                  <CardContent className="p-8">
                    <div className="mb-6">
                      <div
                        className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${projects[activeProject].color} text-white text-sm font-medium mb-4`}
                      >
                        Featured Project
                      </div>
                      <h3 className="text-3xl font-bold text-slate-100 mb-2">{projects[activeProject].title}</h3>
                      <p className="text-lg text-navy-400 mb-4">{projects[activeProject].subtitle}</p>
                    </div>

                    <div className="mb-6">
                      <img
                        src={projects[activeProject].image || "/placeholder.svg"}
                        alt={projects[activeProject].title}
                        className="w-full h-48 object-cover rounded-lg border border-navy-700"
                      />
                    </div>

                    <p className="text-slate-300 mb-4 leading-relaxed">{projects[activeProject].description}</p>

                    <p className="text-slate-400 mb-6 leading-relaxed">{projects[activeProject].longDescription}</p>

                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {projects[activeProject].metrics.map((metric, index) => (
                        <div key={index} className="text-center p-3 bg-slate-800/50 rounded-lg">
                          <div className="text-lg font-semibold text-navy-400">{metric}</div>
                        </div>
                      ))}
                    </div>

                    {/* Tech Stack */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-slate-300 mb-3">Tech Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {projects[activeProject].tech.map((tech, index) => (
                          <Badge key={index} variant="outline" className="border-slate-600 text-slate-300">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-4">
                      <Button asChild className="bg-navy-600 hover:bg-navy-700">
                        <a href={projects[activeProject].liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                      <Button
                        variant="outline"
                        asChild
                        className="border-slate-600 text-slate-300 hover:bg-slate-800 bg-transparent"
                      >
                        <a href={projects[activeProject].githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          Source Code
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </FadeIn>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
