import { CreativeNav } from "@/components/creative-nav"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import WorkSection from "@/components/work-section"
import ExperienceSection from "@/components/experience-section"
import SkillsSection from "@/components/skills-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"


export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-x-hidden">
      <CreativeNav />
      <main>
        <HeroSection />
        {/* Hero (dark) to About (dark) - no wavy divider needed */}
        <AboutSection />
        {/* About (dark) to Work (white) */}
        
        <WorkSection />
        {/* Work (white) to Experience (dark) */}
       
        {/* <ExperienceSection /> */}
        {/* Experience (dark) to Skills (white) */}
        
        <SkillsSection />
        {/* Skills (white) to Contact (dark) */}
       
        <ContactSection />
        {/* Contact (dark) to Footer (dark) - no wavy divider needed */}
        <Footer />
      </main>
    </div>
  )
}
