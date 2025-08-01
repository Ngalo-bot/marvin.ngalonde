"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin } from "lucide-react"
import FadeIn from "./FadeIn"

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 relative bg-[#000011]">
      <div className="absolute inset-0 bg-dot-pattern opacity-10" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header - Right Aligned */}
        <FadeIn>
          <div className="mb-12 text-right">
            <div className="flex flex-col items-end">
              <Badge className="bg-[#000033] text-white px-3 py-1 text-xs mb-4">Let's Connect</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-white to-[#ccccff] bg-clip-text text-transparent">
                  Ready to Build Something Amazing?
                </span>
              </h2>
              <p className="text-[#ccccff] max-w-2xl ml-auto">
                Whether you have a project in mind or just want to chat about tech, I'd love to hear from you.
              </p>
            </div>
          </div>
        </FadeIn>

        {/* Full Width Contact Info */}
        <FadeIn delay={100}>
          <div className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Contact Card - Full Width */}
              <Card className="bg-[#000033]/50 border border-[#000066] w-full">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                    <Mail className="w-5 h-5 text-[#666699]" />
                    Direct Contact
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-[#000033]/30 rounded-full flex items-center justify-center">
                        <Mail className="w-4 h-4 text-[#666699]" />
                      </div>
                      <div>
                        <p className="font-medium text-white">Email</p>
                        <p className="text-[#ccccff]">ngalondemarvin@gmail.com</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-[#000033]/30 rounded-full flex items-center justify-center">
                        <Phone className="w-4 h-4 text-[#666699]" />
                      </div>
                      <div>
                        <p className="font-medium text-white">Phone</p>
                        <p className="text-[#ccccff]">+263 787 062 575</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-[#000033]/30 rounded-full flex items-center justify-center">
                        <MapPin className="w-4 h-4 text-[#666699]" />
                      </div>
                      <div>
                        <p className="font-medium text-white">Location</p>
                        <p className="text-[#ccccff]">Harare, Zimbabwe</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Availability Status - Full Width */}
              <div className="bg-[#000033]/30 border border-[#000066] rounded-xl p-6 w-full">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-2 h-2 bg-[#666699] rounded-full animate-pulse" />
                  <span className="text-[#ccccff] font-semibold">Currently Available</span>
                </div>
                <p className="text-[#ccccff] text-sm mb-4">I'm accepting new projects. Let's discuss your ideas!</p>
                <div className="flex items-center gap-2 text-[#ccccff] text-sm">
                  <span>Response time: Within 24 hours</span>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}