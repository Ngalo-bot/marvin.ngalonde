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

      // Update active section
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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      {/* Main Navigation */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? "bg-white/95 backdrop-blur-xl border-b border-gray-200/50" : "bg-transparent"
          }`}
      >
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold">
            <span className="bg-[#000033] bg-clip-text text-transparent">
              {isScrolled ? "Marvin Ngalonde" : ""}
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-4 py-2 rounded-full transition-all duration-300 ${activeSection === item.id
                    ? isScrolled
                      ? "text-white bg-[#000033]"  // Active + scrolled
                      : "text-[#000033] bg-white"  // Active + not scrolled
                    : isScrolled
                      ? "text-[#000033] hover:text-[#000066]" // Not active + scrolled
                      : "text-white hover:bg-white/10"        // Not active + not scrolled
                  }`}
              >
                {item.label}
              </button>
            ))}
          </div>


          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-gray-700 hover:bg-gray-100"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-xl border-b border-gray-200">
            <div className="container mx-auto px-6 py-4 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="flex items-center gap-3 w-full text-left text-gray-700 hover:text-navy-600 transition-colors"
                >
                  <item.icon className="w-4 h-4" />
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Floating Progress Indicator */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
        <div className="bg-white/80 backdrop-blur-md border border-gray-200/50 rounded-full p-2">
          {navItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`block w-3 h-3 rounded-full mb-3 last:mb-0 transition-all duration-300 ${activeSection === item.id
                ? "bg-navy-500 scale-125" // Solid navy for active
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
