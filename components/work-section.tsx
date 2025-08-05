"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building, MapPin, TrendingUp, Award, BookOpen, ArrowRight } from "lucide-react"
import FadeIn from "./FadeIn"
import { useState } from "react"

export default function ExperienceSection() {
  const [expandedItems, setExpandedItems] = useState<number[]>([0, 1, 2]); // All items expanded by default
  const [expandedCerts, setExpandedCerts] = useState<number[]>([0, 1, 2, 3, 4, 5, 6]); // All certs expanded by default

  const toggleItem = (index: number) => {
    if (expandedItems.includes(index)) {
      setExpandedItems(expandedItems.filter(i => i !== index));
    } else {
      setExpandedItems([...expandedItems, index]);
    }
  };

  const toggleCert = (index: number) => {
    if (expandedCerts.includes(index)) {
      setExpandedCerts(expandedCerts.filter(i => i !== index));
    } else {
      setExpandedCerts([...expandedCerts, index]);
    }
  };

  const timeline = [
    {
      year: "2025",
      title: "Full Stack Developer",
      company: "Kimtronix Global",
      location: "Harare, Zimbabwe",
      period: "Jan 2023 – Present",
      type: "Full-time",
      current: true,
      description: "Develop cross-platform web apps with React, Node.js, and modern technologies.",
      achievements: [
        "Built full-featured apps addressing business challenges",
        "Implemented robust front-end and back-end logic",
        "Collaborated on high-quality software solutions",
      ],
      technologies: ["ReactJS", "Node.js", "NextJS", "PHP", "CI/CD", "Docker"],
      color: "bg-[#1a234e]",
    },
    {
      year: "2024",
      title: "Mobile App Developer",
      company: "CyberSeIp Incorporation",
      location: "Harare, Zimbabwe",
      period: "Oct 2024 – Present",
      type: "Full-time",
      current: true,
      description: "Develop cross-platform mobile apps with Flutter/FlutterFlow.",
      achievements: [
        "Integrated apps with Supabase backend",
        "Optimized data synchronization",
        "Full mobile app development lifecycle",
      ],
      technologies: ["Flutter", "FlutterFlow", "Supabase", "Firebase"],
      color: "bg-[#1a234e]",
    },
    {
      year: "2021",
      title: "Web Developer",
      company: "Verdsoft Private Limited",
      location: "Harare, Zimbabwe",
      period: "Jan 2021 – Dec 2023",
      type: "Full-time",
      current: false,
      description: "Developed web applications using PHP, Python, and JavaScript.",
      achievements: [
        "Created responsive web applications",
        "Implemented fundamental web technologies",
      ],
      technologies: ["PHP", "Python", "HTML", "CSS", "JavaScript"],
      color: "bg-[#1a234e]",
    },
  ];

  const certifications = [
    {
      title: "Developing AI Applications with Python and Flask",
      issuer: "IBM",
      date: "Jul 2025",
      credentialId: "2O6VIK3OIILZ",
      description: "Demonstrated skills in building AI applications using Python and Flask framework.",
      skills: ["Python", "Flask", "AI Applications", "Machine Learning"],
      color: "bg-[#1a234e]",
    },
    {
      title: "Developing Back-End Apps with Node.js and Express",
      issuer: "IBM",
      date: "Jul 2025",
      credentialId: "X0W6DU1FKK4H",
      description: "Proven ability to develop robust back-end applications using Node.js and Express.",
      skills: ["Node.js", "Express", "Backend Development", "API Design"],
      color: "bg-[#1a234e]",
    },
    {
      title: "Developing Front-End Apps with React",
      issuer: "IBM",
      date: "Jul 2025",
      credentialId: "1YKDI8N1FYSW",
      description: "Validated expertise in building modern front-end applications with React.",
      skills: ["React", "JavaScript", "Frontend Development", "UI/UX"],
      color: "bg-[#1a234e]",
    },
    {
      title: "Django Application Development with SQL and Databases",
      issuer: "IBM",
      date: "Jul 2025",
      credentialId: "U1ABN2YHP2UW",
      description: "Demonstrated proficiency in Django development with database integration.",
      skills: ["Django", "Python", "SQL", "Database Design"],
      color: "bg-[#1a234e]",
    },
    {
      title: "Python for Data Science, AI & Development",
      issuer: "IBM",
      date: "Jul 2025",
      credentialId: "K2E8EKEQML4K",
      description: "Verified skills in Python programming for data science and AI applications.",
      skills: ["Python", "Data Science", "AI", "Pandas", "NumPy"],
      color: "bg-[#1a234e]",
    },
    {
      title: "AngularJS Course",
      issuer: "Udemy",
      date: "May 2024",
      credentialId: "UC-392314e9-6680-4629-b289-7c22c08d7d20",
      description: "Comprehensive training in AngularJS framework for web development.",
      skills: ["Angular", "JavaScript", "Frontend Development", "Single Page Applications"],
      color: "bg-[#1a234e]",
    },
    {
      title: "JAVA Programming Masterclass",
      issuer: "Udemy",
      date: "May 2024",
      credentialId: "UC-8ae7186b-d4ef-4909-937c-54ae1945833b",
      description: "Mastery of Java programming language and core concepts.",
      skills: ["Java", "OOP", "Algorithms", "Data Structures"],
      color: "bg-[#1a234e]",
    }
  ];

  return (
    <section id="work" className="py-16 relative bg-white">
      <div className="absolute inset-0 bg-dot-pattern opacity-10" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Experience Header - Centered */}
          <FadeIn>
            <div className="mb-12 text-center">
              <Badge className="bg-[#1a234e] text-white px-3 py-1 text-xs mb-4">Experience</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-gray-900 to-[#1a234e] bg-clip-text text-transparent">
                  Experience & Growth
                </span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                My career progression through innovative companies and impactful projects.
              </p>
            </div>
          </FadeIn>

          {/* Horizontal Timeline */}
          <div className="w-full flex justify-center">
            <div className="flex overflow-x-auto pb-6 -mx-4 px-4 w-full justify-center">
              <div className="flex space-x-6 mx-auto">
                {timeline.map((item, index) => (
                  <FadeIn key={index} delay={index * 100}>
                    <div className="flex items-center">
                      {/* Adjust card size here: change w-80 to desired width (e.g., w-80, w-96, etc.) */}
                      <div className="w-80 flex-shrink-0">
                        <Card className={`bg-[#000011]  border border-gray-200 h-full transition-all shadow-sm rounded-2xl ${expandedItems.includes(index) ? 'pb-0' : ''}`}>
                          <CardContent className="p-0">
                            <div 
                              className="p-5 cursor-pointer"
                              onClick={() => toggleItem(index)}
                            >
                              <div className="flex items-center gap-3 mb-2">
                                <div className={`w-8 h-8 rounded-full ${item.color} flex items-center justify-center`}>
                                  {item.type.includes("Education") ? (
                                    <Award className="w-3 h-3 text-white" />
                                  ) : (
                                    <TrendingUp className="w-3 h-3 text-white" />
                                  )}
                                </div>
                                <div>
                                  <h3 className="text-sm font-semibold text-white">{item.title}</h3>
                                  <p className="text-xs text-white">{item.company}</p>
                                </div>
                              </div>
                              <div className="flex justify-between items-center">
                                <span className="text-xs text-gray-600">{item.period}</span>
                                {expandedItems.includes(index) ? (
                                  <span className="text-xs text-gray">Show Less</span>
                                ) : (
                                  <span className="text-xs text-[#1a234e]">Show More</span>
                                )}
                              </div>
                            </div>

                            {expandedItems.includes(index) && (
                              <div className="px-5 pb-5 pt-2 bg-white rounded-b-2xl">
                                <p className="text-gray-700 mb-3 text-xs">{item.description}</p>
                                
                                {item.achievements.length > 0 && (
                                  <div className="mb-3">
                                    <h4 className="text-xs font-semibold text-gray-900 mb-1">Achievements</h4>
                                    <ul className="space-y-1">
                                      {item.achievements.map((achievement, achIndex) => (
                                        <li key={achIndex} className="flex items-start gap-2 text-xs text-gray-700">
                                          <span className={`w-1.5 h-1.5 rounded-full ${item.color} mt-1 flex-shrink-0`} />
                                          {achievement}
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                )}

                                {item.technologies.length > 0 && (
                                  <div>
                                    <h4 className="text-xs font-semibold text-gray-900 mb-1">Technologies</h4>
                                    <div className="flex flex-wrap gap-1">
                                      {item.technologies.map((tech, techIndex) => (
                                        <Badge
                                          key={techIndex}
                                          variant="outline"
                                          className="border-gray-300 text-gray-700 text-xs px-2 py-0.5 rounded-lg"
                                        >
                                          {tech}
                                        </Badge>
                                      ))}
                                    </div>
                                  </div>
                                )}
                              </div>
                            )}
                          </CardContent>
                        </Card>
                      </div>
                      {index < timeline.length - 1 && (
                        <div className="px-3 flex items-center">
                          <ArrowRight className="w-6 h-6 text-[#1a234e]" />
                        </div>
                      )}
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>

          {/* Certifications Header - Centered */}
          <FadeIn>
            <div className="mt-20 mb-8 text-center">
              <Badge className="bg-[#1a234e] text-white px-3 py-1 text-xs mb-4">Certifications</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-gray-900 to-[#1a234e] bg-clip-text text-transparent">
                  Licenses & Certifications
                </span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Validated expertise through industry-recognized certifications.
              </p>
            </div>
          </FadeIn>

          {/* Certifications Grid - 3 per row */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <FadeIn key={index} delay={index * 100}>
                <Card className={`bg-[#000011]  border border-gray-200 transition-all shadow-sm rounded-2xl ${expandedCerts.includes(index) ? 'pb-0' : ''}`}>
                  <CardContent className="p-0">
                    <div 
                      className="p-4 cursor-pointer"
                      onClick={() => toggleCert(index)}
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div className={`w-8 h-8 rounded-full ${cert.color} flex items-center justify-center`}>
                          <BookOpen className="w-3 h-3 text-white" />
                        </div>
                        <div>
                          <h3 className="text-sm font-semibold text-white">{cert.title}</h3>
                          <div className="flex items-center gap-2 text-xs text-gray-600">
                            <span>{cert.issuer}</span>
                            <span>•</span>
                            <span>{cert.date}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-white">Credential ID: {cert.credentialId}</span>
                        {expandedCerts.includes(index) ? (
                          <span className="text-xs text-[#1a234e]">Show Less</span>
                        ) : (
                          <span className="text-xs text-[#1a234e]">Show More</span>
                        )}
                      </div>
                    </div>

                    {expandedCerts.includes(index) && (
                      <div className="px-4 pb-4 pt-2 bg-white rounded-b-2xl">
                        <p className="text-gray-700 mb-3 text-xs">{cert.description}</p>
                        
                        {cert.skills.length > 0 && (
                          <div>
                            <h4 className="text-xs font-semibold text-gray-900 mb-1">Skills Validated</h4>
                            <div className="flex flex-wrap gap-1">
                              {cert.skills.map((skill, skillIndex) => (
                                <Badge
                                  key={skillIndex}
                                  variant="outline"
                                  className="border-gray-300 text-gray-700 text-xs px-2 py-0.5 rounded-lg"
                                >
                                  {skill}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    )}
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