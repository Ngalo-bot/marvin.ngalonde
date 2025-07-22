"use client"

import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import FadeIn from "./FadeIn"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative py-16 bg-navy-950 border-t border-navy-800">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Main Footer Content */}
          <FadeIn>
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-4">
                <span className="bg-gradient-to-r from-navy-400 via-navy-400 to-navy-600 bg-clip-text text-transparent">
                  Marvin Ngalonde
                </span>
              </h3>
              <p className="text-slate-400 text-lg mb-8">
                Full Stack Developer • Mobile App Developer • Problem Solver • Technology Enthusiast
              </p>

              {/* Social Links */}
              <div className="flex justify-center space-x-6 mb-8">
                {[
                  { icon: Github, href: "https://github.com/Ngalo-bot", label: "GitHub" },
                  { icon: Linkedin, href: "https://www.linkedin.com/in/ngalonde-marvin-393555331", label: "LinkedIn" },
                  { icon: Mail, href: "mailto:ngalondemarvin@gmail.com", label: "Email" },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-12 h-12 bg-slate-800/50 border border-slate-700 rounded-full flex items-center justify-center hover:bg-navy-600 hover:border-transparent transition-all duration-300"
                    title={social.label}
                  >
                    {/* Solid navy hover */}
                    <social.icon className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
                  </a>
                ))}
              </div>

              {/* Back to Top */}
              <Button
                onClick={scrollToTop}
                variant="outline"
                className="border-slate-700 text-slate-400 hover:bg-slate-800 hover:text-white bg-transparent mb-8"
              >
                <ArrowUp className="w-4 h-4 mr-2" />
                Back to Top
              </Button>
            </div>
          </FadeIn>

          {/* Bottom Bar */}
          <FadeIn delay={100}>
            <div className="border-t border-slate-800 pt-8 text-center">
              <p className="text-slate-500 mb-2">
                Built with <Heart className="w-4 h-4 inline text-red-400 mx-1" /> using Next.js, TypeScript, and
                Tailwind CSS
              </p>
              <p className="text-slate-600 text-sm">© 2025 Marvin Ngalonde. All rights reserved.</p>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Background Elements (subtle, single color) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-navy-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-navy-500/5 rounded-full blur-3xl" />
      </div>
    </footer>
  )
}
