"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Download, Github, Linkedin, Mail, Sparkles } from "lucide-react"
import TextType from "./TextType"
import DarkVeil from "./DarkVeil"
import FadeIn from "./FadeIn"
import Image from "next/image"
import Orb from "./Orb"


export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })

      // 3D rotation effect for profile image
      if (imageRef.current) {
        const { clientX, clientY } = e
        const { innerWidth, innerHeight } = window
        const x = (clientX / innerWidth) * 2 - 1
        const y = (clientY / innerHeight) * 2 - 1
        imageRef.current.style.transform = `rotateY(${x * 10}deg) rotateX(${y * -10}deg)`
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const subtitleTexts = [
    "Highly passionate and driven tech enthusiast.",   
    "Ready for new challenges and collaborations ",
  ]

  return (
    <section id="hero" className="min-h-screen relative overflow-hidden bg-white">
      {/* DarkVeil Background - full screen */}
      <div className="absolute w-full h-full top-0 left-0 z-0">
        <DarkVeil
          // Blue hue shift
          hueShift={360}
          noiseIntensity={0}
          scanlineIntensity={0.1}
          speed={0.5}
          scanlineFrequency={0}
          warpAmount={0.02}
          resolutionScale={1}
        />
      </div>

      {/* Content container */}
      <div className="container mt-12 mx-auto px-6 h-full flex items-center justify-center">
        <div className="relative z-10 flex flex-col lg:flex-row-reverse items-center lg:items-start justify-between gap-12 py-20 w-full pr-8 lg:pr-12">
          {/* 3D Rotating Profile Image - Right Side */}
          <div style={{ width: '100%', height: '600px', position: 'relative' }} className="flex items-center justify-center">
            <Orb
              hoverIntensity={0.5}
              rotateOnHover={true}
              hue={0}
              forceHoverState={false}
              className="w-[320px] h-[320px] lg:w-[400px] lg:h-[400px]" // Match your image sizes
            >
              <FadeIn delay={100} className="absolute inset-0 flex items-center justify-center">
                <div
                  ref={imageRef}
                  className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden transition-transform duration-300 ease-out"
                  style={{
                    transformStyle: 'preserve-3d',
                    border: '0px solid hsl(240, 100%, 10%)', // #000033 equivalent
                  }}
                >
                  <Image
                    src="/my.png"
                    alt="Marvin Ngalonde"
                    fill
                    className="object-cover"
                    style={{ transformStyle: 'preserve-3d' }}
                  />
                  <Sparkles className="absolute -top-2 -left-2 w-10 h-10 text-yellow-400 animate-pulse dark:text-yellow-300" />
                </div>
              </FadeIn>
            </Orb>
          </div>


          {/* Main Content - Left Side */}
          <div className="max-w-3xl lg:w-2/3 text-center lg:text-left">
            {/* Main Heading */}
            <FadeIn delay={200}>
              <div className="mb-8">
                <h1 className="text-6xl md:text-8xl font-bold mb-4 leading-[1.1]"> {/* Adjusted line-height */}
                  <span className="block bg-gradient-to-r from-white via-slate-300 to-white bg-clip-text text-transparent pb-1"> {/* Added padding-bottom */}
                    Marvin
                  </span>
                 <span className="block bg-gradient-to-r from-[#000033] via-[#000066] to-[#000099] bg-clip-text text-transparent pt-1 pb-2 [text-shadow:_0_0_2px_rgba(255,255,255,0.7)]">
    Ngalonde
</span>
                </h1>
                <div className="h-1 w-32 bg-[#000033] dark:bg-[#666699] mx-auto lg:mx-0 rounded-full" />
              </div>
            </FadeIn>

            {/* Subtitle with TextType */}
            <FadeIn delay={300}>
              <TextType
                as="p"
                text={subtitleTexts}
                typingSpeed={50}
                initialDelay={1000}
                pauseDuration={2000}
                deletingSpeed={30}
                loop={true}
                className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto lg:mx-0 leading-relaxed"
                textColors={["#a6a6ecff", "#bebef3ff", "#ccccff"]}
                showCursor={true}
                hideCursorWhileTyping={true}
              />
            </FadeIn>

            {/* CTA Buttons */}
            <FadeIn delay={400}>
              <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start items-center mb-16">
                <Button
                  size="lg"
                  onClick={() => scrollToSection("work")}
                  className="group bg-gradient-to-r from-[#000033] to-[#000066] hover:from-[#000066] hover:to-[#000033] text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Explore My Work
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-2 border-[#fff] dark:border-[#666699] text-[#fff] dark:text-[#ccccff] hover:bg-[#000066]/10 dark:hover:bg-[#666699]/10 px-8 py-4 text-lg rounded-full bg-transparent backdrop-blur-sm"
                >
                  <a
                    href="/Marvin-Ngalonde-Resume.pdf"
                    download="Marvin-Ngalonde-Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Download className="mr-2 w-5 h-5" />
                    Download Resume
                  </a>
                </Button>
              </div>
            </FadeIn>

            {/* Social Links */}
            <FadeIn delay={500}>
              <div className="flex justify-center lg:justify-start space-x-6 mb-16">
                {[
                  { icon: Github, href: "https://github.com/Ngalo-bot", label: "GitHub" },
                  { icon: Linkedin, href: "https://www.linkedin.com/in/ngalonde-marvin-393555331/", label: "LinkedIn" },
                  { icon: Mail, href: "mailto:ngalondemarvin@gmail.com", label: "Email" },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-12 h-12 bg-[#000033]/50 backdrop-blur-sm border border-[#000066] rounded-full flex items-center justify-center hover:bg-[#000066] transition-all duration-300"
                    title={social.label}
                  >
                    <social.icon className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
                  </a>
                ))}
              </div>
            </FadeIn>

            {/* Scroll Indicator */}
            <FadeIn delay={600}>
              <div className="animate-bounce flex justify-center lg:justify-start">
                <div className="w-6 h-10 border-2 border-[#000033] dark:border-[#666699] rounded-full flex justify-center">
                  <div className="w-1 h-3 bg-[#000033] dark:bg-[#666699] rounded-full mt-2 animate-pulse" />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}