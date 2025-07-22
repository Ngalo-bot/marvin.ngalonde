"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building, MapPin, TrendingUp, Award, Users } from "lucide-react"
import FadeIn from "./FadeIn"

export default function ExperienceSection() {
  const timeline = [
    {
      year: "2023",
      title: "Full Stack Developer",
      company: "Kimtronix Global",
      location: "Harare, Zimbabwe",
      period: "January 2023 – Present",
      type: "Full-time",
      current: true,
      description:
        "Developed and maintained cross-platform web applications using React, Node.js, and other modern web technologies. Designed and implemented robust front-end and back-end logic, ensuring seamless user experiences and efficient data flow.",
      achievements: [
        "Developed and maintained cross-platform web applications",
        "Designed and implemented robust front-end and back-end logic",
        "Contributed to creation of full-featured apps addressing business challenges",
        "Collaborated with teams to deliver high-quality software solutions on schedule",
      ],
      technologies: ["ReactJS", "Node.js", "NextJS", "PHP", "CI/CD", "Docker", "GitHub Actions", "Vercel", "Jest", "MySQL", "PostgreSQL"],
      impact: "Successfully addressed real-world business challenges",
      color: "bg-navy-600", // Solid color
    },
    {
      year: "2024",
      title: "Mobile App Developer",
      company: "CyberSeIp Incorporation",
      location: "Harare, Zimbabwe",
      period: "October 2024 – Present",
      type: "Full-time",
      current: true,
      description:
        "Developed mobile applications primarily using Flutter and FlutterFlow, ensuring cross-platform compatibility. Managed the integration and linking of applications with Supabase backend, optimizing data synchronization and user experience.",
      achievements: [
        "Developed cross-platform mobile applications with Flutter/FlutterFlow",
        "Integrated applications with Supabase backend",
        "Optimized data synchronization and user experience",
        "Contributed to full mobile app development lifecycle",
      ],
      technologies: ["Flutter", "FlutterFlow", "Supabase", "Firebase"],
      impact: "Optimized data synchronization and user experience",
      color: "bg-navy-600", // Solid color
    },
    {
      year: "2021",
      title: "Web Developer",
      company: "Verdsoft Private Limited",
      location: "Harare, Zimbabwe",
      period: "January 2021 – December 2023",
      type: "Full-time",
      current: false,
      description:
        "Developed web applications using PHP, Python,  and JavaScript. Implemented fundamental web technologies to create responsive and user-friendly interfaces.",
      achievements: [
        "Developed responsive web applications",
        "Implemented fundamental web technologies",
        "Contributed to design, development, and testing phases",
      ],
      technologies: ["PHP", "Python", "HTML", "CSS", "JavaScript","Boostrap"],
      impact: "Created responsive and user-friendly interfaces",
      color: "bg-navy-700", // Solid color
    },
    {
      year: "", // Assuming a start year for the diploma
      title: "Diploma, Networking and PC Engineering",
      company: "Midlands State University",
      location: "Zimbabwe",
      period: "Diploma",
      type: "Education",
      current: false,
      description: "Completed a diploma in Networking and PC Engineering.",
      achievements: [],
      technologies: [],
      impact: "",
      color: "bg-purple-600", // Solid color
    },
  ]

  return (
    <section className="py-20 relative bg-[#000033]">
      <div className="absolute inset-0 bg-dot-pattern opacity-10" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <FadeIn>
            <div className="text-center mb-20">
              <div className="inline-block mb-4">
                <Badge className="bg-navy-600 text-white px-4 py-2 text-sm">Professional Journey</Badge>{" "}
                {/* Solid navy badge */}
              </div>
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                  Experience &
                </span>
                <br />
                <span className="bg-gradient-to-r from-navy-400 to-navy-400 bg-clip-text text-transparent">Growth</span>
              </h2>
              <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
                A journey of continuous learning, impactful contributions, and technical leadership across innovative
                companies.
              </p>
            </div>
          </FadeIn>

          {/* Timeline */}
          <div className="relative mb-20">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-navy-500 hidden lg:block" /> {/* Solid navy line */}
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <FadeIn key={index} delay={index * 150 + 100}>
                  <div className="relative flex flex-col lg:flex-row items-start gap-8">
                    {/* Timeline Node */}
                    <div className="relative z-10 flex-shrink-0">
                      <div className={`w-16 h-16 rounded-full ${item.color} p-0.5 shadow-lg`}>
                        {/* Solid color */}
                        <div className="w-full h-full bg-navy-950 rounded-full flex items-center justify-center">
                          {item.type === "Education" ? (
                            <Award className="w-6 h-6 text-white" />
                          ) : (
                            <TrendingUp className="w-6 h-6 text-white" />
                          )}
                        </div>
                      </div>
                      {item.current && (
                        <div className="absolute -top-2 -right-2">
                          <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center animate-pulse">
                            <div className="w-2 h-2 bg-white rounded-full" />
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <Card className="flex-1 bg-navy-900/50 border-navy-700 hover:bg-navy-800/50 transition-all duration-500">
                      <CardContent className="p-8">
                        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <span className={`text-2xl font-bold text-navy-400`}>
                                {/* Solid navy text */}
                                {item.year}
                              </span>
                              <Badge className={`${item.color} text-white`}>{item.type}</Badge>{" "}
                              {/* Solid color badge */}
                              {item.current && <Badge className="bg-green-500 text-white animate-pulse">Current</Badge>}
                            </div>
                            <h3 className="text-2xl font-semibold text-white mb-2">{item.title}</h3>
                            <div className="flex flex-wrap items-center gap-4 text-slate-400 mb-4">
                              <div className="flex items-center gap-1">
                                <Building className="w-4 h-4" />
                                <span className="font-medium">{item.company}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <MapPin className="w-4 h-4" />
                                <span>{item.location}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <span>{item.period}</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <p className="text-slate-300 mb-6 leading-relaxed">{item.description}</p>

                        {/* Impact Highlight */}
                        {item.impact && (
                          <div className={`${item.color}/10 border border-navy-700 rounded-lg p-4 mb-6`}>
                            {/* Solid color transparent background */}
                            <div className="flex items-center gap-2 mb-2">
                              <Award className="w-4 h-4 text-white" />
                              <span className="text-sm font-semibold text-white">Key Impact</span>
                            </div>
                            <p className="text-slate-300">{item.impact}</p>
                          </div>
                        )}

                        {/* Achievements */}
                        {item.achievements.length > 0 && (
                          <div className="mb-6">
                            <h4 className="text-sm font-semibold text-slate-300 mb-3 flex items-center gap-2">
                              <Users className="w-4 h-4" />
                              Major Achievements
                            </h4>
                            <div className="grid md:grid-cols-2 gap-2">
                              {item.achievements.map((achievement, achIndex) => (
                                <div key={achIndex} className="flex items-start gap-2">
                                  <div className={`w-1.5 h-1.5 rounded-full ${item.color} mt-2 flex-shrink-0`} />{" "}
                                  {/* Solid color dot */}
                                  <span className="text-slate-400 text-sm">{achievement}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Technologies */}
                        {item.technologies.length > 0 && (
                          <div>
                            <h4 className="text-sm font-semibold text-slate-300 mb-3">Technologies Used</h4>
                            <div className="flex flex-wrap gap-2">
                              {item.technologies.map((tech, techIndex) => (
                                <Badge
                                  key={techIndex}
                                  variant="outline"
                                  className="border-slate-600 text-slate-300 hover:bg-slate-800 transition-colors"
                                >
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* Certifications - Removed as per resume */}
        </div>
      </div>
    </section>
  )
}
