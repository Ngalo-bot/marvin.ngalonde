"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function ModernNav() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
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
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold bg-gradient-to-r from-navy-600 to-indigo-600 bg-clip-text text-transparent">
          Marvin Ngalonde
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => scrollToSection("about")}
            className="text-gray-700 hover:text-navy-600 transition-colors font-medium"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("work")}
            className="text-gray-700 hover:text-navy-600 transition-colors font-medium"
          >
            Work
          </button>
          <button
            onClick={() => scrollToSection("experience")}
            className="text-gray-700 hover:text-navy-600 transition-colors font-medium"
          >
            Experience
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-gray-700 hover:text-navy-600 transition-colors font-medium"
          >
            Contact
          </button>
          <Button onClick={() => scrollToSection("contact")} className="bg-navy-600 hover:bg-navy-700 text-white px-6">
            Let's Talk
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white border-b shadow-lg md:hidden">
            <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("about")}
                className="text-left text-gray-700 hover:text-navy-600 transition-colors font-medium"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("work")}
                className="text-left text-gray-700 hover:text-navy-600 transition-colors font-medium"
              >
                Work
              </button>
              <button
                onClick={() => scrollToSection("experience")}
                className="text-left text-gray-700 hover:text-navy-600 transition-colors font-medium"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-left text-gray-700 hover:text-navy-600 transition-colors font-medium"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
