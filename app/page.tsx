import { CreativeNav } from "@/components/creative-nav"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import WorkSection from "@/components/work-section"
import ProjectsSection from "@/components/projects"

import SkillsSection from "@/components/skills-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"


export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-x-hidden">
      <CreativeNav />
      <main>
        {/* Hero Section - Dark background */}
        <HeroSection />
        
        {/* About Section - White background */}
        <AboutSection />
        
        {/* Projects Section - White background */}
        <ProjectsSection />
        
        {/* Work Section - White background */}
        <WorkSection />
        
        {/* Skills Section - White background */}
        <SkillsSection />
        
        {/* Contact Section - Dark background */}
        <ContactSection />
        
        {/* Footer - Dark background */}
        <Footer />
      </main>
    </div>
  )
}
