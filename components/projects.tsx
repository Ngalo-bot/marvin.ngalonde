"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import FadeIn from "./FadeIn"

export default function Projects() {
  const projects = [
    {
      title: "Neocentric Interior Site",
      subtitle: "Web app for an Interior Design Company",
      description:
        "A modern website for Neocentric Interiors, showcasing their portfolio and services with a sleek, responsive design.",
      image: "./public/neo.png",
      tech: ["ReactJS", "Typescript", "TailwindCSS"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/your-github",
      featured: true,
      gradient: "bg-gradient-to-b from-[#000011] via-white to-white"
    },
    {
      title: "Business Management System",
      subtitle: "Integrated Business Operations Solution",
      description:
        "An integrated system for comprehensive business management and point of sale operations, developed for Verdsoft Pvt Ltd.",
      image: "./public/posy.png",
      tech: ["ReactJs", "NextJs", "Redux Toolkit","MySQL"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/your-github",
      featured: true,
      gradient: "bg-gradient-to-b from-[#000011] via-white to-white"
    },
    
    
    {
      title: "Gym Management System",
      subtitle: "Comprehensive Gym Operations Solution",
      description:
        "A robust system for managing gym operations, including member management, class scheduling, and billing, built for Kimtronix Global.",
      image: "./public/gym.png",
      tech: ["PHP", "Python", "MySQL"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/your-github",
      featured: true,
      gradient: "bg-gradient-to-b from-[#000011] via-white to-white"
    },
    {
      title: "Shopbook Mobile App",
      subtitle: "Cross-Platform Point of Sale Application",
      description:
        "An intuitive mobile Point of Sale application designed for efficient transactions and inventory management, developed for CyberSeIp Incorporation.",
      image: "./public/shop.jpg",
      tech: ["Flutter", "Supabase", "Firebase"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/your-github",
      featured: true,
      gradient: "bg-gradient-to-b from-[#000011] via-white to-white"
    },
  //  {
  //     title: "Flutter Mobile App",
  //     subtitle: "Cross-Platform Mobile Application",
  //     description: "A modern mobile application built with Flutter for seamless cross-platform experience.",
  //     image: "/flutter.png",
  //     tech: ["Flutter", "Dart", "Firebase"],
  //     liveUrl: "https://example.com",
  //     githubUrl: "https://github.com/your-github",
  //     featured: false,
  //     gradient: "bg-gradient-to-b from-[#000011] via-white to-white"
  //   },
  ]

  return (
    <section id="projects" className="py-16 relative bg-white">
      <div className="absolute inset-0 bg-dot-pattern opacity-10" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="mb-12 text-center">
              <Badge className="bg-[#000033] text-white px-3 py-1 text-xs mb-4">Projects</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-gray-900 to-[#000033] bg-clip-text text-transparent">
                  Featured Projects
                </span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                A showcase of my recent work, demonstrating diverse technical skills and problem-solving approaches.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <FadeIn key={index} delay={index * 100}>
                <Card className={`group ${project.gradient} border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden h-full flex flex-col`}>
                  <div className="relative overflow-hidden h-48 m-5 border-none rounded-xl border border-gray-200">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover  transition-transform duration-500 group-hover:scale-105"
                    />
                    {project.featured && (
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-[#000033] text-white shadow-md">
                          Featured
                        </Badge>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  <CardContent className="p-6 flex-1 flex flex-col">
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{project.title}</h3>
                      <p className="text-sm text-gray-600 font-medium">{project.subtitle}</p>
                    </div>

                    <p className="text-gray-700 mb-4 leading-relaxed flex-1">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.tech.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex} 
                          variant="outline" 
                          className="border-gray-300 text-gray-700 hover:bg-[#000033]/10 hover:border-[#000033]/30"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    {/* <div className="flex gap-3 mt-auto">
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex-1 bg-[#1a234e] hover:bg-[#000033] text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-10 flex items-center justify-center border border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-[#000033]/30 rounded-lg transition-colors"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    </div> */}
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}