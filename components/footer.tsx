"use client"

import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import FadeIn from "./FadeIn"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative py-12 bg-[#000011] border-t border-[#000033]">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <FadeIn>
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-3">
              <span className="bg-gradient-to-r from-white to-[#ccccff] bg-clip-text text-transparent">
                Marvin Ngalonde
              </span>
            </h3>
            <p className="text-[#ccccff] mb-6">
              Full Stack Developer • Mobile App Developer • Problem Solver • Technology Enthusiast
            </p>

            {/* Social Links */}
            <div className="flex space-x-4 mb-6">
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
                  className="w-10 h-10 bg-[#000033]/50 border border-[#000066] rounded-full flex items-center justify-center hover:bg-[#666699] transition-all"
                  title={social.label}
                >
                  <social.icon className="w-4 h-4 text-[#ccccff]" />
                </a>
              ))}
            </div>

            {/* Back to Top */}
            <Button
              onClick={scrollToTop}
              variant="outline"
              className="border-[#000066] text-[#ccccff] hover:bg-[#000033]/50 hover:text-white bg-transparent mb-6"
            >
              <ArrowUp className="w-4 h-4 mr-2" />
              Back to Top
            </Button>
          </div>
        </FadeIn>

        {/* Bottom Bar */}
        <FadeIn delay={100}>
          <div className="border-t border-[#000033] pt-6">
            <p className="text-[#ccccff]/80 mb-2 text-sm">
              Built with <Heart className="w-4 h-4 inline text-red-400 mx-1" /> using Next.js, TypeScript, and Tailwind CSS
            </p>
            <p className="text-[#ccccff]/60 text-xs">© 2025 Marvin Ngalonde. All rights reserved.</p>
          </div>
        </FadeIn>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#666699]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#666699]/5 rounded-full blur-3xl" />
      </div>
    </footer>
  )
}