import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import FadeIn from "./FadeIn"

export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard.",
      image: "/placeholder.svg?height=300&width=500",
      tech: ["Next.js", "TypeScript", "PostgreSQL", "Stripe", "Tailwind CSS"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: true,
    },
    {
      title: "Task Management App",
      description:
        "Collaborative project management tool with real-time updates, file sharing, and team communication features.",
      image: "/placeholder.svg?height=300&width=500",
      tech: ["React", "Node.js", "Socket.io", "MongoDB", "Express"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: true,
    },
    {
      title: "Weather Dashboard",
      description: "Beautiful weather application with location-based forecasts, interactive maps, and weather alerts.",
      image: "/placeholder.svg?height=300&width=500",
      tech: ["Vue.js", "Python", "FastAPI", "Redis", "Chart.js"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: false,
    },
    {
      title: "Social Media Analytics",
      description: "Analytics dashboard for social media managers with data visualization and automated reporting.",
      image: "/placeholder.svg?height=300&width=500",
      tech: ["React", "D3.js", "Node.js", "PostgreSQL", "Docker"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: false,
    },
  ]

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl font-bold text-center mb-12">Featured Projects</h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <FadeIn key={index} delay={index * 150 + 100}>
                <Card
                  className={`group hover:shadow-xl transition-all duration-300 ${project.featured ? "md:col-span-2 lg:col-span-1" : ""}`}
                >
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      {project.title}
                      {project.featured && (
                        <Badge variant="secondary" className="bg-gradient-to-r from-navy-600 to-navy-600 text-white">
                          Featured
                        </Badge>
                      )}
                    </CardTitle>
                  </CardHeader>

                  <CardContent>
                    <p className="text-muted-foreground mb-4">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-2">
                      <Button size="sm" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                      <Button size="sm" variant="outline" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          Code
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
    </section>
  )
}
