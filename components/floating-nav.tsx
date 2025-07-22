"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Moon, Sun, Terminal, Code, User, Briefcase, MessageSquare } from "lucide-react"
import { useTheme } from "next-themes"

export default function FloatingNav() {
  const [activeSection, setActiveSection] = useState("hero")
  const { theme, setTheme } = useTheme()

  const navItems = [
    { id: "hero", icon: Terminal, label: "Terminal" },
    { id: "philosophy", icon: User, label: "Philosophy" },
    { id: "craftsmanship", icon: Code, label: "Craft" },
    { id: "journey", icon: Briefcase, label: "Journey" },
    { id: "collaboration", icon: MessageSquare, label: "Collaborate" },
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.id)
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-2">
      <div className="bg-slate-900/80 backdrop-blur-md border border-slate-700 rounded-2xl p-2">
        {navItems.map((item) => (
          <Button
            key={item.id}
            variant="ghost"
            size="icon"
            onClick={() => scrollToSection(item.id)}
            className={`relative group mb-1 last:mb-0 ${
              activeSection === item.id
                ? "bg-navy-600 text-white"
                : "text-slate-400 hover:text-navy-400 hover:bg-slate-800"
            }`}
          >
            <item.icon className="w-4 h-4" />
            <span className="absolute right-full mr-3 px-2 py-1 bg-slate-800 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              {item.label}
            </span>
          </Button>
        ))}
      </div>

      <Button
        variant="ghost"
        size="icon"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="bg-slate-900/80 backdrop-blur-md border border-slate-700 rounded-xl text-slate-400 hover:text-navy-400"
      >
        <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      </Button>
    </nav>
  )
}
