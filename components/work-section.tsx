"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { CardContent } from "@/components/ui/card"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, ArrowUpRight, Play } from "lucide-react"
import FadeIn from "./FadeIn"
import StarBorder from "./StarBorder"

const WorkSection = () => {
  const [activeProject, setActiveProject] = useState(0)

  const projects = [
       {
      title: "Business Management and POS System",
      subtitle: "Integrated Business Operations Solution",
      description:
        "An integrated system for comprehensive business management and point of sale operations, developed for Verdsoft Pvt Ltd.",
      longDescription:
        "Designed and implemented a full-stack business management and POS system using ReactJs, NextJs, and MySQL. This solution provided Verdsoft Pvt Ltd with tools for inventory, sales, and customer relationship management, enhancing their overall business efficiency.",
      image: "/posy.png?height=600&width=800",
      tech: ["ReactJs","TypeScript", "NextJs","Redux Toolkit", "MySQL"],
      liveUrl: "javascript:void()", 
      githubUrl: "javascript:void()", 
     
      color: "bg-[#000033]", // Solid color
      category: "Web App",
    },
     {
      title: "VOP Mobile App",
      subtitle: "Android Mobile Application",
      description:
        "An intuitive mobile app i built for a church to digitalize Discover Bible Study Guides", 
      longDescription:
        "This is based on the Java on the Android Studio IDE. It was one of my first projects and it was a great learning experience.",
      image: "/banvop.png?height=600&width=800",
      tech: ["Java", "Android Studio"],
      liveUrl: "https://ngalo-bot.github.io/vop-app/", // Placeholder URL
      githubUrl: "https://github.com/Ngalo-bot/vop-app", // Placeholder URL  
      color: "bg-[#000033]", // Solid color
      category: "Mobile App",
    },
     {
      title: "Basic Inerior Design Website",
      subtitle: "For A Client",
      description:
        "Website for Neocentric Interiors , an interior design start-up.",
      longDescription:
        "This was a simple website i built with NexJS and self hosted on  Cpanel. It was a great learning experience.",
      image: "/neo.png?height=600&width=800",
      tech: ["ReactJs","TypeScript", "NextJs"],
      liveUrl: "https://neocentricinteriors.co.zw/", 
      githubUrl: "javascript:void()", 
     
      color: "bg-[#000033]", // Solid color
      category: "Web App",
    },
     {
      title: "Mobile POS",
      subtitle: "Cross-Platform Point of Sale Application",
      description:
        "An intuitive mobile Point of Sale application designed for efficient transactions and inventory management, developed for CyberSeIp Incorporation.",
      longDescription:
        "Built a cross-platform mobile POS application using Flutter and FlutterFlow, integrated with Supabase and Firebase for backend services. This app provides seamless data synchronization and a smooth user experience for on-the-go sales operations.",
      image: "/flutter.png?height=600&width=800",
      tech: ["Flutter", "Supabase", "Firebase"],
      liveUrl: "", // Placeholder URL
      githubUrl: "https://github.com/your-github", // Placeholder URL
      metrics: {
        transactions: "Real-time",
        compatibility: "Cross-platform",
        sync: "Optimized",
        deployment: "Seamless",
      },
      color: "bg-[#000033]", // Solid color
      category: "Mobile",
    },
    
    {
      title: "Gym Management System",
      subtitle: "Comprehensive Gym Operations Solution",
      description:
        "A robust system for managing gym operations, including member management, class scheduling, and billing, built for Kimtronix Global.",
      longDescription:
        "Contributed in the development of a full-featured gym management system using PHP, Python, and MySQL. This system streamlined administrative tasks, improved member tracking, and enhanced overall operational efficiency for a Kimtronix Global Client.",
      image: "/gym.png?height=600&width=800",
      tech: ["PHP", "Python", "MySQL"],
      liveUrl: "", // Placeholder URL
      githubUrl: "https://github.com/your-github", // Placeholder URL
      metrics: {
        users: "500+",
        features: "Core Modules",
        efficiency: "+30%",
        scalability: "High",
      },
      color: "bg-[#000033]", // Solid color
      category: "Web App | Access Control",
    },
   
 
  ]

  return (
    <section id="work" className="py-20 relative overflow-hidden bg-white">
      {/* Background Elements (subtle, single color) */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-navy-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-navy-500/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <FadeIn>
            <div className="text-center mb-20">
              <div className="inline-block mb-4">
                <Badge className="bg-[#000033] text-white px-4 py-2 text-sm">Featured Work</Badge>{" "}
                {/* Solid navy badge */}
              </div>
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  Projects That
                </span>
                <br />
                <span className="bg-[#000033] bg-clip-text text-transparent">
                  Make Impact
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Each project represents a unique challenge solved with creativity, technical expertise, and attention to
                detail.
              </p>
            </div>
          </FadeIn>

          {/* Project Showcase */}
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {/* Project Navigation */}
           <FadeIn delay={100}>
  <div className="space-y-4 overflow-y-auto max-h-[80vh] scrollbar-hide"> {/* Adjust max-h as needed */}
    {projects.map((project, index) => (
      <Card
        key={index}
        className={`cursor-pointer transition-all duration-500 border-0 ${
          activeProject === index ? "bg-gray-100 shadow-2xl scale-105" : "bg-white/50 hover:bg-gray-50/70"
        }`}
        onClick={() => setActiveProject(index)}
      >
        <CardContent className="p-6">
          <div className="flex items-start justify-between mb-3">
            <Badge variant="secondary" className={`${project.color} text-white text-xs`}>
              {project.category}
            </Badge>
            {activeProject === index && <Play className="w-4 h-4 text-navy-600 animate-pulse" />}
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">{project.title}</h3>
          <p className="text-sm text-gray-600 mb-4">{project.subtitle}</p>
          <div className="flex flex-wrap gap-1">
            {project.tech.slice(0, 3).map((tech, techIndex) => (
              <Badge key={techIndex} variant="outline" className="text-xs border-gray-300 text-gray-700">
                {tech}
              </Badge>
            ))}
            {project.tech.length > 3 && (
              <Badge variant="outline" className="text-xs border-gray-300 text-gray-700">
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
                <Card className="bg-white/50 border-gray-200/50 overflow-hidden h-full">
                  <div className="relative">
                    <img
                      src={projects[activeProject].image || "/placeholder.svg"}
                      alt={projects[activeProject].title}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
                    <div className="absolute top-4 left-4">
                      <Badge className={`${projects[activeProject].color} text-white`}>
                        {/* Solid color badge */}
                        Featured Project
                      </Badge>
                    </div>
                  </div>

                  <CardContent className="p-8">
                    <div className="mb-6">
                      <h3 className="text-3xl font-bold text-gray-900 mb-2">{projects[activeProject].title}</h3>
                      <p className="text-lg text-gray-600 mb-4">{projects[activeProject].subtitle}</p>
                      <p className="text-gray-700 leading-relaxed mb-4">{projects[activeProject].description}</p>
                      <p className="text-gray-600 leading-relaxed">{projects[activeProject].longDescription}</p>
                    </div>


                    {/* Tech Stack */}
                    <div className="mb-8">
                      <h4 className="text-sm font-semibold text-gray-700 mb-3">Technology Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {projects[activeProject].tech.map((tech, index) => (
                          <Badge
                            key={index}
                            variant="outline"
                            className="border-gray-300 text-gray-700 hover:bg-gray-100 transition-colors"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-4">
                      <Button asChild className={`${projects[activeProject].color} hover:opacity-90 text-white flex-1`}>
                        {/* Solid color button */}
                        <a href={projects[activeProject].liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View Live Project
                        </a>
                      </Button>
                      {/* <Button
                        variant="outline"
                        asChild
                        className="border-gray-300 text-gray-700 hover:bg-gray-100 bg-transparent"
                      >
                        <a href={projects[activeProject].githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4" />
                        </a>
                      </Button> */}
                    </div>
                  </CardContent>
                </Card>
              </FadeIn>
            </div>
          </div>

          {/* View All Projects */}
          {/* <FadeIn delay={400}>
            <div className="text-center">
              <Button
                variant="outline"
                size="lg"
                asChild
                className="border-gray-300 text-gray-700 hover:bg-gray-100 bg-transparent group"
              >
                <a href="/projects">
                  View All Projects
                  <ArrowUpRight className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              </Button>
            </div>
          </FadeIn> */}
        </div>
      </div>
    </section>
  )
}

export default WorkSection
