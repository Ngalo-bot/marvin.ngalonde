"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Github, Linkedin, Calendar, Coffee, Briefcase } from "lucide-react"
import FadeIn from "./FadeIn"

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 relative bg-[#000033]">
      <div className="absolute inset-0 bg-dot-pattern opacity-10" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <FadeIn>
            <div className="text-center mb-20">
              <div className="inline-block mb-4">
                <Badge className="bg-navy-600 text-white px-4 py-2 text-sm">Let's Connect</Badge>{" "}
                {/* Solid navy badge */}
              </div>
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                  Ready to Build
                </span>
                <br />
                <span className="bg-gradient-to-r from-navy-400 to-navy-400 bg-clip-text text-transparent">
                  Something Amazing?
                </span>
              </h2>
              <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
                Whether you have a project in mind, need technical guidance, or just want to chat about technology, I'd
                love to hear from you.
              </p>
            </div>
          </FadeIn>

          <div className="grid lg:grid-cols-1 gap-12">
            {" "}
            {/* Adjusted grid to single column */}
            {/* Contact Info & Additional Options */}
            <div className="space-y-6">
              {/* Direct Contact */}
             <FadeIn delay={100}>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> {/* Responsive grid */}
    {/* Contact Card */}
    <Card className="bg-navy-900/50 border-navy-700/50 h-full"> {/* Added h-full */}
      <CardContent className="p-8">
        <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
          <Mail className="w-5 h-5 text-navy-400" />
          Direct Contact
        </h3>
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-navy-500/20 rounded-full flex items-center justify-center">
              <Mail className="w-5 h-5 text-navy-400" />
            </div>
            <div>
              <p className="font-medium text-white">Email</p>
              <p className="text-slate-400">ngalondemarvin@gmail.com</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-navy-500/20 rounded-full flex items-center justify-center">
              <Phone className="w-5 h-5 text-navy-400" />
            </div>
            <div>
              <p className="font-medium text-white">Phone</p>
              <p className="text-slate-400">+263 787 062 575</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-navy-500/20 rounded-full flex items-center justify-center">
              <MapPin className="w-5 h-5 text-navy-400" />
            </div>
            <div>
              <p className="font-medium text-white">Location</p>
              <p className="text-slate-400">Harare, Zimbabwe</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>

    {/* Availability Status - Now wrapped in FadeIn with the same delay */}
    <FadeIn delay={100}> {/* Same delay for simultaneous appearance */}
      <div className="bg-navy-500/10 border border-navy-500/20 rounded-xl p-6 h-full"> {/* Added h-full */}
        <div className="flex items-center gap-3 mb-3">
          <div className="w-3 h-3 bg-navy-400 rounded-full animate-pulse" />
          <span className="text-navy-300 font-semibold">Currently Available</span>
        </div>
        <p className="text-navy-200 text-sm mb-4">I'm accepting new projects. Let's discuss your ideas!</p>
        <div className="flex items-center gap-2 text-navy-300 text-sm">
          <Briefcase className="w-4 h-4" />
          <span>Response time: Within 24 hours</span>
        </div>
      </div>
    </FadeIn>
  </div>
</FadeIn>

              {/* Social Links */}
              {/* <FadeIn delay={200}>
                <Card className="bg-navy-900/50 border-navy-700/50">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-semibold text-white mb-6">Connect on Social</h3>
                    <div className="grid grid-cols-3 gap-4">
                      {[
                        {
                          icon: Github,
                          href: "https://github.com/your-github",
                          label: "GitHub",
                          color: "hover:bg-gray-600",
                        },
                        {
                          icon: Linkedin,
                          href: "https://linkedin.com/in/your-linkedin",
                          label: "LinkedIn",
                          color: "hover:bg-navy-600",
                        },
                      ].map((social, index) => (
                        <a
                          key={index}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`group p-4 bg-slate-800/50 border border-slate-700 rounded-xl text-center transition-all duration-300 ${social.color}`}
                        >
                          <social.icon className="w-6 h-6 text-slate-400 group-hover:text-white mx-auto mb-2 transition-colors" />
                          <div className="text-sm text-slate-400 group-hover:text-white transition-colors">
                            {social.label}
                          </div>
                        </a>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </FadeIn> */}

              {/* Quick Actions */}
              {/* <FadeIn delay={300}>
                <div className="grid grid-cols-2 gap-4">
                  <Button
                    variant="outline"
                    className="h-auto p-6 flex flex-col items-center gap-3 bg-slate-800/50 border-slate-700 text-slate-300 hover:bg-slate-700/50 hover:border-slate-600"
                  >
                    <Calendar className="w-6 h-6" />
                    <div className="text-center">
                      <div className="font-medium">Schedule Call</div>
                      <div className="text-xs opacity-75">30 min chat</div>
                    </div>
                  </Button>
                  <Button
                    variant="outline"
                    className="h-auto p-6 flex flex-col items-center gap-3 bg-slate-800/50 border-slate-700 text-slate-300 hover:bg-slate-700/50 hover:border-slate-600"
                  >
                    <Coffee className="w-6 h-6" />
                    <div className="text-center">
                      <div className="font-medium">Coffee Chat</div>
                      <div className="text-xs opacity-75">Casual meetup</div>
                    </div>
                  </Button>
                </div>
              </FadeIn> */}

              {/* Availability Status */}
             
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
