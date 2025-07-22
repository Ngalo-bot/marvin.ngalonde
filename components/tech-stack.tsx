"use client"

import { Card, CardContent } from "@/components/ui/card"
import FadeIn from "./FadeIn"

export default function TechStack() {
  const technologies = [
    { name: "JavaScript", level: 95, category: "Frontend" },
    { name: "TypeScript", level: 90, category: "Frontend" },
    { name: "React", level: 95, category: "Frontend" },
    { name: "Next.js", level: 90, category: "Frontend" },
    { name: "Vue.js", level: 80, category: "Frontend" },
    { name: "Node.js", level: 90, category: "Backend" },
    { name: "Python", level: 85, category: "Backend" },
    { name: "PostgreSQL", level: 85, category: "Database" },
    { name: "MongoDB", level: 80, category: "Database" },
    { name: "AWS", level: 75, category: "DevOps" },
    { name: "Docker", level: 80, category: "DevOps" },
    { name: "Git", level: 95, category: "Tools" },
  ]

  const categories = ["Frontend", "Backend", "Database", "DevOps", "Tools"]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl font-bold text-center mb-12">Technologies & Tools</h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, catIndex) => (
              <FadeIn key={category} delay={catIndex * 150 + 100}>
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4 text-center">{category}</h3>
                    <div className="space-y-4">
                      {technologies
                        .filter((tech) => tech.category === category)
                        .map((tech, index) => (
                          <div key={index}>
                            <div className="flex justify-between items-center mb-2">
                              <span className="text-sm font-medium">{tech.name}</span>
                              <span className="text-sm text-muted-foreground">{tech.level}%</span>
                            </div>
                            <div className="w-full bg-muted rounded-full h-2">
                              <div
                                className="bg-gradient-to-r from-navy-600 to-navy-600 h-2 rounded-full transition-all duration-1000 ease-out"
                                style={{ width: `${tech.level}%` }}
                              />
                            </div>
                          </div>
                        ))}
                    </div>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
