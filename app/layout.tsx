import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "Marvin Ngalonde - Full Stack & Mobile Developer",
  description:
    "Highly passionate and driven tech enthusiast with a strong foundation in mobile and web development, specializing in React, Node.js, and low-code platforms like FlutterFlow. Proficient in full-stack development, with hands-on experience in building cross-platform web applications, designing front-end and back-end logic, and creating real-world business challenges. Eager to leverage expertise in dynamic environments to embrace challenges and continuously explore emerging technologies.",

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} ${jetbrainsMono.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          {" "}
          {/* Default theme set to light for white background */}
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
