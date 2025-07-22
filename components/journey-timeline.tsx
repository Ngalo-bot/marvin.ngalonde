"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Calendar, Award, TrendingUp } from "lucide-react"
import FadeIn from "./FadeIn"

export default function JourneyTimeline() {
  const journeySteps = [
    {
      year: "2024",
      title: "Senior Full Stack Architect",
      company: "TechVision Labs",
      location: "San Francisco, CA",
      type: "work",
      description:
        "Leading a team of 8 developers in building next-generation SaaS platforms. Architected microservices handling 10M+ requests daily.",
      achievements: [
        "Reduced system latency by 60%",
        "Mentored 5 junior developers",
        "Led migration to cloud-native architecture",
      ],
      technologies: ["React", "Node.js", "Kubernetes", "AWS", "PostgreSQL"],
      highlight: "Built the company's first AI-powered feature that increased user engagement by 40%",
    },
    {
      year: "2022",
      title: "Full Stack Developer",
      company: "InnovateCorp",
      location: "Remote",
      type: "work",
      description:
        "Developed customer-facing applications serving 100K+ users. Specialized in performance optimization and user experience.",
      achievements: [
        "Improved app performance by 45%",
        "Implemented CI/CD pipeline",
        "Launched 3 major product features",
      ],
      technologies: ["Vue.js", "Python", "Docker", "MongoDB", "Redis"],
      highlight: "Created a real-time collaboration feature that became the product's main selling point",
    },
    {
      year: "2021",
      title: "AWS Solutions Architect",
      company: "Amazon Web Services",
      location: "Certification",
      type: "certification",
      description: "Achieved professional-level certification in cloud architecture and solutions design.",
      achievements: [
        "Scored 890/1000",
        "Specialized in serverless architectures",
        "Expert in cost optimization strategies",
      ],
      technologies: ["AWS Lambda", "CloudFormation", "API Gateway", "DynamoDB"],
      highlight: "This certification transformed how I approach scalable system design",
    },
    {
      year: "2020",
      title: "Frontend Developer",
      company: "StartupXYZ",
      location: "New York, NY",
      type: "work",
      description:
        "Built responsive web applications with focus on accessibility and performance. Collaborated closely with design team.",
      achievements: ["Achieved 98+ Lighthouse scores", "Implemented design system", "Reduced bundle size by 40%"],
      technologies: ["React", "TypeScript", "Webpack", "Sass", "Jest"],
      highlight: "Fell in love with the intersection of design and code",
    },
    {
      year: "2019",
      title: "Computer Science Degree",
      company: "UC Berkeley",
      location: "Berkeley, CA",
      type: "education",
      description:
        "Graduated with honors, specializing in algorithms and distributed systems. Active in hackathons and open source.",
      achievements: ["Magna Cum Laude", "Won 3 hackathons", "Published research paper"],
      technologies: ["Java", "Python", "C++", "Machine Learning", "Databases"],
      highlight: "Built my first full-stack app - a campus food delivery service used by 2000+ students",
    },
  ]

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "work":
        return <TrendingUp className="w-4 h-4" />
      case "certification":
        return <Award className="w-4 h-4" />
      case "education":
        return <Award className="w-4 h-4" />
      default:
        return <Calendar className="w-4 h-4" />
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case "work":
        return "bg-navy-600"
      case "certification":
        return "bg-green-600"
      case "education":
        return "bg-purple-600"
      default:
        return "bg-slate-600"
    }
  }

  return (
    <section id="journey" className="py-20 relative bg-navy-900">
      <div className="absolute inset-0 bg-dot-pattern opacity-10"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-navy-400 to-cyan-400 bg-clip-text text-transparent">
                My Journey
              </h2>
              <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                Every step has been a learning experience, shaping me into the developer I am today
              </p>
            </div>
          </FadeIn>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-navy-600 via-cyan-500 to-purple-600"></div>

            <div className="space-y-8">
              {journeySteps.map((step, index) => (
                <FadeIn key={index} delay={index * 150 + 100}>
                  <div className="relative flex items-start gap-8">
                    {/* Timeline Node */}
                    <div
                      className={`relative z-10 flex items-center justify-center w-16 h-16 ${getTypeColor(step.type)} rounded-full border-4 border-navy-900`}
                    >
                      <div className="text-white">{getTypeIcon(step.type)}</div>
                    </div>

                    {/* Content */}
                    <Card className="flex-1 bg-navy-900/50 border-navy-700 hover:border-navy-500/50 transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                          <div>
                            <div className="flex items-center gap-2 mb-2">
                              <span className="text-2xl font-bold text-navy-400">{step.year}</span>
                              <Badge variant="secondary" className={`${getTypeColor(step.type)} text-white`}>
                                {step.type}
                              </Badge>
                            </div>
                            <h3 className="text-xl font-semibold text-slate-100 mb-1">{step.title}</h3>
                            <div className="flex items-center gap-4 text-slate-400 mb-3">
                              <span className="font-medium">{step.company}</span>
                              <div className="flex items-center gap-1">
                                <MapPin className="w-4 h-4" />
                                <span className="text-sm">{step.location}</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <p className="text-slate-300 mb-4 leading-relaxed">{step.description}</p>

                        {/* Highlight */}
                        <div className="bg-navy-950/50 border border-navy-800/30 rounded-lg p-4 mb-4">
                          <p className="text-navy-300 italic">💡 {step.highlight}</p>
                        </div>

                        {/* Achievements */}
                        <div className="mb-4">
                          <h4 className="text-sm font-semibold text-slate-300 mb-2">Key Achievements</h4>
                          <div className="space-y-1">
                            {step.achievements.map((achievement, achIndex) => (
                              <div key={achIndex} className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 bg-navy-400 rounded-full" />
                                <span className="text-sm text-slate-400">{achievement}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Technologies */}
                        <div>
                          <h4 className="text-sm font-semibold text-slate-300 mb-2">Technologies Used</h4>
                          <div className="flex flex-wrap gap-2">
                            {step.technologies.map((tech, techIndex) => (
                              <Badge
                                key={techIndex}
                                variant="outline"
                                className="border-slate-600 text-slate-300 text-xs"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
