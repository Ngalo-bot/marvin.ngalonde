"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building, MapPin, TrendingUp, Award, BookOpen, ArrowRight } from "lucide-react"
import FadeIn from "./FadeIn"
import { useState } from "react"

export default function ExperienceSection() {
  const [expandedItems, setExpandedItems] = useState<number[]>([]);
  const [expandedCerts, setExpandedCerts] = useState<number[]>([]);

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
      color: "bg-[#000066]",
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
      color: "bg-[#000066]",
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
      color: "bg-[#000099]",
    },
    // {
    //   year: "",
    //   title: "Diploma, Networking",
    //   company: "Midlands State University",
    //   location: "Zimbabwe",
    //   period: "Diploma",
    //   type: "Education",
    //   current: false,
    //   description: "Completed diploma in Networking and PC Engineering.",
    //   achievements: [],
    //   technologies: [],
    //   color: "bg-[#666699]",
    // },
  ];

  const certifications = [
    {
      title: "Developing AI Applications with Python and Flask",
      issuer: "IBM",
      date: "Jul 2025",
      credentialId: "2O6VIK3OIILZ",
      description: "Demonstrated skills in building AI applications using Python and Flask framework.",
      skills: ["Python", "Flask", "AI Applications", "Machine Learning"],
      color: "bg-blue-600",
    },
    {
      title: "Developing Back-End Apps with Node.js and Express",
      issuer: "IBM",
      date: "Jul 2025",
      credentialId: "X0W6DU1FKK4H",
      description: "Proven ability to develop robust back-end applications using Node.js and Express.",
      skills: ["Node.js", "Express", "Backend Development", "API Design"],
      color: "bg-green-600",
    },
    {
      title: "Developing Front-End Apps with React",
      issuer: "IBM",
      date: "Jul 2025",
      credentialId: "1YKDI8N1FYSW",
      description: "Validated expertise in building modern front-end applications with React.",
      skills: ["React", "JavaScript", "Frontend Development", "UI/UX"],
      color: "bg-sky-600",
    },
    {
      title: "Django Application Development with SQL and Databases",
      issuer: "IBM",
      date: "Jul 2025",
      credentialId: "U1ABN2YHP2UW",
      description: "Demonstrated proficiency in Django development with database integration.",
      skills: ["Django", "Python", "SQL", "Database Design"],
      color: "bg-emerald-600",
    },
    {
      title: "Python for Data Science, AI & Development",
      issuer: "IBM",
      date: "Jul 2025",
      credentialId: "K2E8EKEQML4K",
      description: "Verified skills in Python programming for data science and AI applications.",
      skills: ["Python", "Data Science", "AI", "Pandas", "NumPy"],
      color: "bg-indigo-600",
    },
    {
      title: "AngularJS Course",
      issuer: "Udemy",
      date: "May 2024",
      credentialId: "UC-392314e9-6680-4629-b289-7c22c08d7d20",
      description: "Comprehensive training in AngularJS framework for web development.",
      skills: ["Angular", "JavaScript", "Frontend Development", "Single Page Applications"],
      color: "bg-red-600",
    },
    {
      title: "JAVA Programming Masterclass",
      issuer: "Udemy",
      date: "May 2024",
      credentialId: "UC-8ae7186b-d4ef-4909-937c-54ae1945833b",
      description: "Mastery of Java programming language and core concepts.",
      skills: ["Java", "OOP", "Algorithms", "Data Structures"],
      color: "bg-orange-600",
    }
  ];

  return (
    <section id="work" className="py-16 relative bg-[#000011]">
      <div className="absolute inset-0 bg-dot-pattern opacity-10" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Experience Header */}
          <FadeIn>
  <div className="mb-12">
    <div className="flex flex-col items-end">
      <Badge className="bg-[#000033] text-white px-3 py-1 text-xs mb-4">Experience</Badge>
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-right">
        <span className="bg-gradient-to-r from-white to-[#ccccff] bg-clip-text text-transparent">
          Experience & Growth
        </span>
      </h2>
      <p className="text-[#ccccff] max-w-2xl text-right ml-auto">
        My career progression through innovative companies and impactful projects.
      </p>
    </div>
  </div>
</FadeIn>

          {/* Horizontal Timeline */}
          <div className="flex overflow-x-auto pb-6 -mx-4 px-4">
            <div className="flex space-x-4">
              {timeline.map((item, index) => (
                <FadeIn key={index} delay={index * 100}>
                  <div className="flex items-center">
                    <div className="w-72 flex-shrink-0">
                      <Card className={`bg-[#000033]/50 border border-[#000066] h-full transition-all ${expandedItems.includes(index) ? 'pb-0' : ''}`}>
                        <CardContent className="p-0">
                          <div 
                            className="p-4 cursor-pointer"
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
                                <p className="text-xs text-[#ccccff]">{item.company}</p>
                              </div>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-xs text-[#ccccff]">{item.period}</span>
                              {expandedItems.includes(index) ? (
                                <span className="text-xs text-[#ccccff]">Show Less</span>
                              ) : (
                                <span className="text-xs text-[#ccccff]">Show More</span>
                              )}
                            </div>
                          </div>

                          {expandedItems.includes(index) && (
                            <div className="px-4 pb-4 pt-2 border-t border-[#000066]">
                              <p className="text-[#ccccff] mb-3 text-xs">{item.description}</p>
                              
                              {item.achievements.length > 0 && (
                                <div className="mb-3">
                                  <h4 className="text-xs font-semibold text-[#ccccff] mb-1">Achievements</h4>
                                  <ul className="space-y-1">
                                    {item.achievements.map((achievement, achIndex) => (
                                      <li key={achIndex} className="flex items-start gap-2 text-xs text-[#ccccff]">
                                        <span className={`w-1.5 h-1.5 rounded-full ${item.color} mt-1 flex-shrink-0`} />
                                        {achievement}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )}

                              {item.technologies.length > 0 && (
                                <div>
                                  <h4 className="text-xs font-semibold text-[#ccccff] mb-1">Technologies</h4>
                                  <div className="flex flex-wrap gap-1">
                                    {item.technologies.map((tech, techIndex) => (
                                      <Badge
                                        key={techIndex}
                                        variant="outline"
                                        className="border-[#000066] text-[#ccccff] text-xs px-2 py-0.5"
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
                      <div className="px-2">
                        <ArrowRight className="w-6 h-6 text-[#666699]" />
                      </div>
                    )}
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* Certifications Header */}
          <FadeIn>
            <div className="mt-20 mb-8">
              <Badge className="bg-[#000033] text-white px-3 py-1 text-xs mb-4">Certifications</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-white to-[#ccccff] bg-clip-text text-transparent">
                  Licenses & Certifications
                </span>
              </h2>
              <p className="text-[#ccccff] max-w-2xl">
                Validated expertise through industry-recognized certifications.
              </p>
            </div>
          </FadeIn>

          {/* Certifications Grid */}
          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <FadeIn key={index} delay={index * 100}>
                <Card className={`bg-[#000033]/50 border border-[#000066] transition-all ${expandedCerts.includes(index) ? 'pb-0' : ''}`}>
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
                          <div className="flex items-center gap-2 text-xs text-[#ccccff]">
                            <span>{cert.issuer}</span>
                            <span>•</span>
                            <span>{cert.date}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-[#ccccff]">Credential ID: {cert.credentialId}</span>
                        {expandedCerts.includes(index) ? (
                          <span className="text-xs text-[#ccccff]">Show Less</span>
                        ) : (
                          <span className="text-xs text-[#ccccff]">Show More</span>
                        )}
                      </div>
                    </div>

                    {expandedCerts.includes(index) && (
                      <div className="px-4 pb-4 pt-2 border-t border-[#000066]">
                        <p className="text-[#ccccff] mb-3 text-xs">{cert.description}</p>
                        
                        {cert.skills.length > 0 && (
                          <div>
                            <h4 className="text-xs font-semibold text-[#ccccff] mb-1">Skills Validated</h4>
                            <div className="flex flex-wrap gap-1">
                              {cert.skills.map((skill, skillIndex) => (
                                <Badge
                                  key={skillIndex}
                                  variant="outline"
                                  className="border-[#000066] text-[#ccccff] text-xs px-2 py-0.5"
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