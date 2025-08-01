"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Home, User, Briefcase, Mail } from "lucide-react"

export function CreativeNav() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")

  const navItems = [
    { id: "hero", label: "Home", icon: Home },
    { id: "about", label: "About", icon: User },
    { id: "work", label: "Experience", icon: Briefcase },
    { id: "skills", label: "Skills", icon: Briefcase },
    { id: "contact", label: "Contact", icon: Mail },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

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
  }, [navItems])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      {/* Main Navigation with Frosted Glass Design and Centered Links */}
      <header
        className={`fixed top-4 left-1/2 -translate-x-1/2 w-full z-50 transition-all duration-500 max-w-7xl px-4 md:px-6`}
      >
        <nav
          className={`
            relative flex items-center justify-center
            bg-white/10 backdrop-filter backdrop-blur-xl
            border border-white/20
            rounded-full px-6 py-2
            w-full transition-all duration-300
            ${isScrolled ? "scale-95" : "scale-100"}
          `}
        >
          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`
                  relative text-lg transition-colors duration-200 px-4 py-2 rounded-full
                  ${activeSection === item.id
                    ? "bg-white/20 text-white" // Active
                    : "text-white/80 hover:text-white" // Not active
                  }
                `}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button - Positioned at the end */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden absolute right-4 text-white hover:bg-white/10"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-md z-40 md:hidden" onClick={() => setIsMobileMenuOpen(false)}>
          <div className="absolute top-6 right-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-lg p-6" onClick={(e) => e.stopPropagation()}>
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="flex items-center gap-3 text-white text-lg hover:text-white/80 transition-colors"
                >
                  <item.icon className="w-5 h-5" />
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Floating Progress Indicator (Your original code) */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
        <div className="bg-white/80 backdrop-blur-md border border-gray-200/50 rounded-full p-2">
          {navItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`block w-3 h-3 rounded-full mb-3 last:mb-0 transition-all duration-300 ${activeSection === item.id
                ? "bg-sky-500 scale-125" // Solid sky-blue for active
                : "bg-gray-400 hover:bg-gray-500"
                }`}
              title={item.label}
            />
          ))}
        </div>
      </div>
    </>
  )
}