"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin } from "lucide-react"
import FadeIn from "./FadeIn"

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 relative bg-white">
      <div className="absolute inset-0 bg-dot-pattern opacity-10" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header - Centered */}
        <FadeIn>
          <div className="mb-12 text-center">
            <Badge className="bg-[#000033] text-white px-3 py-1 text-xs mb-4">Let's Connect</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-gray-900 to-[#000033] bg-clip-text text-transparent">
                Ready to Build Something Amazing?
              </span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Whether you have a project in mind or just want to chat about tech, I'd love to hear from you.
            </p>
          </div>
        </FadeIn>

        {/* Full Width Contact Info */}
        <FadeIn delay={100}>
          <div className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Contact Card - Full Width */}
              <Card className="bg-white border border-gray-200 w-full rounded-2xl shadow-sm">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
                    <Mail className="w-5 h-5 text-[#000033]" />
                    Direct Contact
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl border border-gray-200">
                      <div className="w-10 h-10 bg-[#000033]/10 rounded-full flex items-center justify-center">
                        <Mail className="w-4 h-4 text-[#000033]" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Email</p>
                        <p className="text-gray-600">ngalondemarvin@gmail.com</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl border border-gray-200">
                      <div className="w-10 h-10 bg-[#000033]/10 rounded-full flex items-center justify-center">
                        <Phone className="w-4 h-4 text-[#000033]" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Phone</p>
                        <p className="text-gray-600">+263 787 062 575</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl border border-gray-200">
                      <div className="w-10 h-10 bg-[#000033]/10 rounded-full flex items-center justify-center">
                        <MapPin className="w-4 h-4 text-[#000033]" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Location</p>
                        <p className="text-gray-600">Harare, Zimbabwe</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Availability Status - Full Width */}
              <div className="bg-[#000011] rounded-2xl p-8 w-full text-white shadow-lg flex flex-col items-center justify-center text-center">
                <div className="flex flex-col items-center mb-6">
                  <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse mb-3 shadow-lg" />
                  <span className="text-2xl md:text-3xl font-bold tracking-tight bg-gradient-to-r from-white via-[#ccccff] to-[#1a234e] bg-clip-text text-transparent">
                    {/* Optionally use a TextType animation here if available */}
                    Currently <span className="text-blue-400">Available</span>
                  </span>
                </div>
                <p className="text-lg md:text-xl text-gray-200 font-medium mb-4 max-w-md mx-auto">
                  I'm accepting new projects.<br />
                  <span className="bg-gradient-to-r from-[#ccccff] to-white bg-clip-text text-transparent font-semibold">
                    Let's discuss your ideas!
                  </span>
                </p>
                <div className="flex items-center justify-center gap-2 text-base text-gray-300 font-medium">
                  <span className="inline-flex items-center gap-2">
                    <svg className="w-4 h-4 text-[#ccccff]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3" />
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
                    </svg>
                    Response time: <span className="font-bold text-white">Within 24 hours</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}