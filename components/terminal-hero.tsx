"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Download } from "lucide-react"
import FadeIn from "./FadeIn"

export default function TerminalHero() {
  const [currentLine, setCurrentLine] = useState(0)
  const [currentChar, setCurrentChar] = useState(0)
  const [showCursor, setShowCursor] = useState(true)

  const terminalLines = [
    "$ whoami",
    "marvin-ngalonde",
    "$ cat about.txt",
    "Full Stack Developer | Problem Solver | Code Craftsman",
    "$ ls skills/",
    "frontend/  backend/  devops/  mobile/  ai-ml/",
    "$ echo $PASSION",
    "Building digital experiences that matter ✨",
    "$ status",
    "Ready for new challenges and collaborations 🚀",
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      if (currentLine < terminalLines.length) {
        if (currentChar < terminalLines[currentLine].length) {
          setCurrentChar((prev) => prev + 1)
        } else {
          setTimeout(() => {
            setCurrentLine((prev) => prev + 1)
            setCurrentChar(0)
          }, 500)
        }
      }
    }, 50)

    return () => clearInterval(timer)
  }, [currentLine, currentChar])

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)
    return () => clearInterval(cursorTimer)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-navy-950 to-slate-900"></div>
        <div className="absolute inset-0 bg-dot-pattern opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto">
          {/* Terminal Window */}
          <FadeIn delay={100}>
            <div className="bg-slate-900/90 backdrop-blur-sm border border-slate-700 rounded-lg shadow-2xl">
              {/* Terminal Header */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-700">
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="flex-1 text-center text-slate-400 text-sm">marvin@portfolio:~</div>
              </div>

              {/* Terminal Content */}
              <div className="p-6 font-mono text-sm">
                {terminalLines.slice(0, currentLine + 1).map((line, index) => (
                  <div key={index} className="mb-2">
                    {index === currentLine ? (
                      <span className="text-green-400">
                        {line.slice(0, currentChar)}
                        {showCursor && <span className="bg-green-400 text-slate-900">_</span>}
                      </span>
                    ) : (
                      <span className={line.startsWith("$") ? "text-green-400" : "text-slate-300"}>{line}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Action Buttons */}
          <FadeIn delay={200}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
              <Button
                size="lg"
                onClick={() => scrollToSection("craftsmanship")}
                className="bg-navy-600 hover:bg-navy-700 text-white px-8"
              >
                Explore My Craft
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("collaboration")}
                className="border-slate-600 text-slate-300 hover:bg-slate-800"
              >
                Let's Collaborate
              </Button>
            </div>
          </FadeIn>

          {/* Social Links */}
          <FadeIn delay={300}>
            <div className="flex justify-center space-x-6 mt-8">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-navy-400 transition-colors p-2"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-navy-400 transition-colors p-2"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:marvin.ngalonde@example.com"
                className="text-slate-400 hover:text-navy-400 transition-colors p-2"
              >
                <Mail className="w-6 h-6" />
              </a>
              <button className="text-slate-400 hover:text-navy-400 transition-colors p-2">
                <Download className="w-6 h-6" />
              </button>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
