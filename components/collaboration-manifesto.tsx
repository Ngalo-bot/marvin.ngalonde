"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Mail, MessageSquare, Calendar, Coffee, Zap, Users, Target } from "lucide-react"
import FadeIn from "./FadeIn"

export default function CollaborationManifesto() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
    message: "",
  })

  const collaborationTypes = [
    {
      icon: Zap,
      title: "Startup Ventures",
      description: "Early-stage startups looking to build their MVP or scale their tech stack",
      ideal: "Equity-based partnerships, technical co-founder roles",
    },
    {
      icon: Users,
      title: "Open Source",
      description: "Contributing to meaningful projects that impact the developer community",
      ideal: "React libraries, developer tools, educational resources",
    },
    {
      icon: Target,
      title: "Consulting",
      description: "Architecture reviews, performance optimization, team mentoring",
      ideal: "Short-term engagements, technical audits, code reviews",
    },
    {
      icon: Coffee,
      title: "Coffee Chats",
      description: "Casual conversations about tech, career advice, or just networking",
      ideal: "Fellow developers, career changers, students",
    },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setFormData({ name: "", email: "", project: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="collaboration" className="py-20 relative bg-navy-950">
      <div className="absolute inset-0 bg-dot-pattern opacity-10"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-navy-400 to-cyan-400 bg-clip-text text-transparent">
                Let's Build Something Amazing
              </h2>
              <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                I believe the best solutions come from collaboration. Here's how we can work together
              </p>
            </div>
          </FadeIn>

          {/* Collaboration Types */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {collaborationTypes.map((type, index) => (
              <FadeIn key={index} delay={index * 150 + 100}>
                <Card className="bg-navy-900/50 border-navy-700 hover:border-navy-500/50 transition-all duration-300 group">
                  <CardContent className="p-6 text-center">
                    <div className="p-3 bg-navy-600/20 rounded-lg inline-block mb-4 group-hover:bg-navy-600/30 transition-colors">
                      <type.icon className="w-6 h-6 text-navy-400" />
                    </div>
                    <h3 className="font-semibold text-slate-100 mb-2">{type.title}</h3>
                    <p className="text-slate-400 text-sm mb-3">{type.description}</p>
                    <Badge variant="secondary" className="bg-slate-800 text-slate-300 text-xs">
                      {type.ideal}
                    </Badge>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <FadeIn delay={100}>
              <Card className="bg-navy-900/50 border-navy-700">
                <CardHeader>
                  <CardTitle className="text-slate-100 flex items-center gap-2">
                    <MessageSquare className="w-5 h-5 text-navy-400" />
                    Start a Conversation
                  </CardTitle>
                  <p className="text-slate-400">
                    Tell me about your project, idea, or just say hello. I typically respond within 24 hours.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <Input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-slate-800 border-slate-600 text-slate-100 placeholder-slate-400"
                      />
                      <Input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-slate-800 border-slate-600 text-slate-100 placeholder-slate-400"
                      />
                    </div>
                    <Input
                      type="text"
                      name="project"
                      placeholder="Project/Company Name (Optional)"
                      value={formData.project}
                      onChange={handleChange}
                      className="bg-slate-800 border-slate-600 text-slate-100 placeholder-slate-400"
                    />
                    <Textarea
                      name="message"
                      placeholder="Tell me about your project, timeline, and how I can help..."
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="bg-slate-800 border-slate-600 text-slate-100 placeholder-slate-400"
                    />
                    <Button type="submit" className="w-full bg-navy-600 hover:bg-navy-700 text-white">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </FadeIn>

            {/* Contact Info & Availability */}
            <div className="space-y-6">
              <FadeIn delay={200}>
                <Card className="bg-navy-900/50 border-navy-700">
                  <CardHeader>
                    <CardTitle className="text-slate-100 flex items-center gap-2">
                      <Mail className="w-5 h-5 text-navy-400" />
                      Direct Contact
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Mail className="w-4 h-4 text-navy-400" />
                      <span className="text-slate-300">marvin.ngalonde@example.com</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Calendar className="w-4 h-4 text-navy-400" />
                      <span className="text-slate-300">Available for new projects</span>
                    </div>
                    <div className="bg-green-950/50 border border-green-800/30 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-green-300 font-medium">Currently Available</span>
                      </div>
                      <p className="text-green-200 text-sm">Open to new opportunities starting January 2025</p>
                    </div>
                  </CardContent>
                </Card>
              </FadeIn>

              <FadeIn delay={300}>
                <Card className="bg-navy-900/50 border-navy-700">
                  <CardHeader>
                    <CardTitle className="text-slate-100">My Collaboration Style</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4 text-slate-300">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-navy-400 rounded-full mt-2"></div>
                        <div>
                          <p className="font-medium mb-1">Transparent Communication</p>
                          <p className="text-sm text-slate-400">
                            Regular updates, honest feedback, and clear expectations
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-navy-400 rounded-full mt-2"></div>
                        <div>
                          <p className="font-medium mb-1">Quality-Focused</p>
                          <p className="text-sm text-slate-400">I prefer doing things right over doing them fast</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-navy-400 rounded-full mt-2"></div>
                        <div>
                          <p className="font-medium mb-1">Long-term Thinking</p>
                          <p className="text-sm text-slate-400">
                            Building sustainable solutions and lasting relationships
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </FadeIn>

              <FadeIn delay={400}>
                <div className="text-center">
                  <p className="text-slate-400 mb-4">Prefer a quick chat?</p>
                  <Button
                    variant="outline"
                    className="border-slate-600 text-slate-300 hover:bg-slate-800 bg-transparent"
                  >
                    <Calendar className="w-4 h-4 mr-2" />
                    Schedule a Call
                  </Button>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
