"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, ArrowRight } from "lucide-react"
import FadeIn from "./FadeIn"

export default function WorkShowcase() {
  const [activeCategory, setActiveCategory] = useState("all")

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "web", name: "Web Apps" },
    { id: "mobile", name: "Mobile" },
    { id: "ecommerce", name: "E-commerce" },
  ]

  const projects = [
    {
      title: "EcoCommerce Platform",
      description: "Sustainable e-commerce platform connecting eco-friendly brands with conscious consumers",
      image: "/placeholder.svg?height=300&width=500",
      category: "ecommerce",
      tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: true,
      metrics: {
        users: "10K+",
        growth: "+150%",
        rating: "4.8/5",
      },
    },
    {
      title: "TaskFlow Mobile App",
      description: "Intuitive project management app designed for remote teams and freelancers",
      image: "/placeholder.svg?height=300&width=500",
      category: "mobile",
      tech: ["React Native", "Firebase", "Redux"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: true,
      metrics: {
        downloads: "25K+",
        rating: "4.9/5",
        retention: "85%",
      },
    },
    {
      title: "Analytics Dashboard",
      description: "Real-time business intelligence dashboard with interactive data visualizations",
      image: "/placeholder.svg?height=300&width=500",
      category: "web",
      tech: ["Vue.js", "D3.js", "Python", "MongoDB"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: false,
      metrics: {
        data: "1M+ points",
        speed: "< 2s load",
        accuracy: "99.9%",
      },
    },
    {
      title: "Learning Management System",
      description: "Modern LMS platform for online education with interactive course builder",
      image: "/placeholder.svg?height=300&width=500",
      category: "web",
      tech: ["Next.js", "Prisma", "AWS", "WebRTC"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: false,
      metrics: {
        students: "5K+",
        courses: "200+",
        completion: "92%",
      },
    },
  ]

  const filteredProjects = activeCategory === "all" ? projects : projects.filter((p) => p.category === activeCategory)

  return (
    <section id="work" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Work</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                A selection of projects that showcase my skills and passion for creating impactful digital solutions
              </p>
            </div>
          </FadeIn>

          {/* Category Filter */}
          <FadeIn delay={100}>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={activeCategory === category.id ? "default" : "outline"}
                  onClick={() => setActiveCategory(category.id)}
                  className={
                    activeCategory === category.id
                      ? "bg-navy-600 hover:bg-navy-700 text-white"
                      : "border-gray-300 text-gray-700 hover:bg-gray-50"
                  }
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </FadeIn>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {filteredProjects.map((project, index) => (
              <FadeIn key={index} delay={index * 150 + 200}>
                <Card
                  className={`group hover:shadow-2xl transition-all duration-300 border-0 overflow-hidden ${
                    project.featured ? "md:col-span-2 lg:col-span-1" : ""
                  }`}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {project.featured && (
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-navy-600 text-white">Featured</Badge>
                      </div>
                    )}
                  </div>

                  <CardContent className="p-8">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">{project.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>

                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {Object.entries(project.metrics).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="text-lg font-semibold text-navy-600">{value}</div>
                          <div className="text-sm text-gray-500 capitalize">{key}</div>
                        </div>
                      ))}
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="bg-gray-100 text-gray-700">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="flex gap-3">
                      <Button asChild className="bg-navy-600 hover:bg-navy-700 flex-1">
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View Live
                        </a>
                      </Button>
                      <Button
                        variant="outline"
                        asChild
                        className="border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent"
                      >
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4" />
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>

          {/* View More */}
          <FadeIn delay={400}>
            <div className="text-center">
              <Button
                variant="outline"
                size="lg"
                className="border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent"
              >
                View All Projects
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
