import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import { CreativeNav } from "@/components/creative-nav"
import FadeIn from "@/components/FadeIn"

export default function ProjectsPage() {
  const projects = [
    {
      title: "Gym Management System",
      subtitle: "Comprehensive Gym Operations Solution",
      description:
        "A robust system for managing gym operations, including member management, class scheduling, and billing, built for Kimtronix Global.",
      longDescription:
        "Developed a full-featured gym management system using PHP, Python, and MySQL. This system streamlined administrative tasks, improved member tracking, and enhanced overall operational efficiency for Kimtronix Global.",
      image: "/placeholder.svg?height=600&width=800",
      tech: ["PHP", "Python", "MySQL"],
      liveUrl: "https://example.com", // Placeholder URL
      githubUrl: "https://github.com/your-github", // Placeholder URL
      metrics: {
        users: "500+",
        features: "Core Modules",
        efficiency: "+30%",
        scalability: "High",
      },
      color: "bg-navy-600", // Solid color
      category: "Web App",
    },
    {
      title: "Mobile POS",
      subtitle: "Cross-Platform Point of Sale Application",
      description:
        "An intuitive mobile Point of Sale application designed for efficient transactions and inventory management, developed for CyberSeIp Incorporation.",
      longDescription:
        "Built a cross-platform mobile POS application using Flutter and FlutterFlow, integrated with Supabase and Firebase for backend services. This app provides seamless data synchronization and a smooth user experience for on-the-go sales operations.",
      image: "/placeholder.svg?height=600&width=800",
      tech: ["Flutter", "Supabase", "Firebase"],
      liveUrl: "https://example.com", // Placeholder URL
      githubUrl: "https://github.com/your-github", // Placeholder URL
      metrics: {
        transactions: "Real-time",
        compatibility: "Cross-platform",
        sync: "Optimized",
        deployment: "Seamless",
      },
      color: "bg-navy-600", // Solid color
      category: "Mobile",
    },
    {
      title: "Business Management and POS System",
      subtitle: "Integrated Business Operations Solution",
      description:
        "An integrated system for comprehensive business management and point of sale operations, developed for Verdsoft Pvt Ltd.",
      longDescription:
        "Designed and implemented a full-stack business management and POS system using ReactJs, NextJs, and MySQL. This solution provided Verdsoft Pvt Ltd with tools for inventory, sales, and customer relationship management, enhancing their overall business efficiency.",
      image: "/placeholder.svg?height=600&width=800",
      tech: ["ReactJs", "NextJs", "MySQL"],
      liveUrl: "https://example.com", // Placeholder URL
      githubUrl: "https://github.com/your-github", // Placeholder URL
      metrics: {
        modules: "Multiple",
        efficiency: "Improved",
        data: "Centralized",
        ux: "User-friendly",
      },
      color: "bg-navy-700", // Solid color
      category: "Web App",
    },
  ]

  return (
    <>
      <CreativeNav />
      <div className="min-h-screen bg-white text-gray-900 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <FadeIn>
              <div className="text-center mb-16">
                <h2 className="text-5xl md:text-6xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                    All My
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-navy-600 to-navy-600 bg-clip-text text-transparent">
                    Projects
                  </span>
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  A comprehensive overview of my work, showcasing diverse challenges and solutions.
                </p>
              </div>
            </FadeIn>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <FadeIn key={index} delay={index * 150 + 100}>
                  <Card className="bg-white/50 border-gray-200/50 overflow-hidden h-full">
                    <div className="relative">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
                      <div className="absolute top-4 left-4">
                        <Badge className={`${project.color} text-white`}>{project.category}</Badge>
                      </div>
                    </div>

                    <CardContent className="p-6">
                      <div className="mb-4">
                        <h3 className="text-xl font-bold text-gray-900 mb-1">{project.title}</h3>
                        <p className="text-md text-gray-600">{project.subtitle}</p>
                      </div>

                      <p className="text-gray-700 leading-relaxed mb-4">{project.description}</p>

                      {/* Metrics */}
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        {Object.entries(project.metrics).map(([key, value]) => (
                          <div
                            key={key}
                            className="text-center p-3 bg-gray-100/50 rounded-xl border border-gray-200/50"
                          >
                            <div className={`text-lg font-bold text-navy-600 mb-1`}>{value}</div>
                            <div className="text-xs text-gray-600 capitalize">{key.replace(/([A-Z])/g, " $1")}</div>
                          </div>
                        ))}
                      </div>

                      {/* Tech Stack */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-gray-700 mb-2">Technology Stack</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech, techIndex) => (
                            <Badge
                              key={techIndex}
                              variant="outline"
                              className="border-gray-300 text-gray-700 hover:bg-gray-100 transition-colors"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex gap-3">
                        <Button asChild className={`${project.color} hover:opacity-90 text-white flex-1`}>
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            View Live
                          </a>
                        </Button>
                        <Button
                          variant="outline"
                          asChild
                          className="border-gray-300 text-gray-700 hover:bg-gray-100 bg-transparent"
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
          </div>
        </div>
      </div>
    </>
  )
}
