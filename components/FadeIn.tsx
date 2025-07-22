"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"

interface FadeInProps {
  children: React.ReactNode
  delay?: number
  duration?: number
  className?: string
  threshold?: number
}

export default function FadeIn({ children, delay = 0, duration = 700, className = "", threshold = 0.1 }: FadeInProps) {
  const [isVisible, setIsVisible] = useState(false)
  const domRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            observer.unobserve(entry.target) // Stop observing once visible
          }
        })
      },
      { threshold },
    )

    const currentRef = domRef.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [threshold])

  return (
    <div
      ref={domRef}
      className={`transition-all ease-out ${className} ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}
