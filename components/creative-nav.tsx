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
    { id: "projects", label: "Projects", icon: Briefcase },
    { id: "work", label: "Experience", icon: Briefcase },
    { id: "skills", label: "Skills", icon: Briefcase },
    { id: "contact", label: "Contact", icon: Mail },
  ]

  // Define which sections have dark backgrounds
  const darkSections = ["hero"] // Only hero section is dark now
  const isOnDarkSection = darkSections.includes(activeSection)

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

  // Dynamic background and text colors based on section
  const getNavStyles = () => {
    if (isOnDarkSection) {
      return {
        nav: "bg-white/10 backdrop-blur-xl border-white/20",
        text: "text-white",
        textHover: "hover:text-white/80",
        active: "bg-white/20 text-white",
        mobile: "bg-white/10 backdrop-blur-xl border-white/20",
        mobileText: "text-white",
        mobileTextHover: "hover:text-white/80"
      }
    } else {
      return {
        nav: "bg-gray-900/10 backdrop-blur-xl border-gray-200/20",
        text: "text-gray-900",
        textHover: "hover:text-gray-700",
        active: "bg-gray-900/20 text-gray-900",
        mobile: "bg-gray-900/10 backdrop-blur-xl border-gray-200/20",
        mobileText: "text-gray-900",
        mobileTextHover: "hover:text-gray-700"
      }
    }
  }

  const styles = getNavStyles()

  return (
    <>
      {/* Main Navigation with Dynamic Background */}
      <header
        className={`fixed top-4 left-1/2 -translate-x-1/2 w-full z-50 transition-all duration-500 max-w-7xl px-4 md:px-6`}
      >
        <nav
          className={`
            relative flex items-center justify-center
            ${styles.nav}
            border
            rounded-full px-6 py-2
            w-full transition-all duration-300
            ${isScrolled ? "scale-95 shadow-lg" : "scale-100"}
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
                    ? styles.active
                    : `${styles.text} ${styles.textHover}`
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
            className={`md:hidden absolute right-4 ${styles.text} hover:bg-white/10`}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-md z-40 md:hidden" onClick={() => setIsMobileMenuOpen(false)}>
          <div className={`absolute top-6 right-6 ${styles.mobile} border rounded-lg p-6`} onClick={(e) => e.stopPropagation()}>
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center gap-3 ${styles.mobileText} text-lg ${styles.mobileTextHover} transition-colors`}
                >
                  <item.icon className="w-5 h-5" />
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Floating Progress Indicator */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
        <div className={`${isOnDarkSection ? 'bg-white/80' : 'bg-gray-900/80'} backdrop-blur-md border border-gray-200/50 rounded-full p-2`}>
          {navItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`block w-3 h-3 rounded-full mb-3 last:mb-0 transition-all duration-300 ${activeSection === item.id
                ? "bg-[#000033] scale-125" // Navy blue for active
                : isOnDarkSection ? "bg-white/60 hover:bg-white/80" : "bg-gray-400 hover:bg-gray-600"
                }`}
              title={item.label}
            />
          ))}
        </div>
      </div>
    </>
  )
}