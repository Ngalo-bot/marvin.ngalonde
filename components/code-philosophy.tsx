"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Code2, Lightbulb, Users, Zap } from "lucide-react"
import FadeIn from "./FadeIn"

export default function CodePhilosophy() {
  const philosophies = [
    {
      icon: Code2,
      title: "Clean Code Advocate",
      description:
        "Code should tell a story. Every function, every variable name should contribute to a narrative that future developers (including myself) can easily follow.",
      code: `// I believe in self-documenting code
const calculateUserEngagementScore = (user) => {
  return user.interactions
    .filter(isRecentActivity)
    .reduce(sumEngagementPoints, 0)
}`,
    },
    {
      icon: Lightbulb,
      title: "Problem-First Thinking",
      description:
        "Technology is just a tool. I start with understanding the human problem, then choose the right tech stack to solve it elegantly.",
      code: `// Problem: Users abandon forms
// Solution: Progressive disclosure
const FormStep = ({ isVisible, children }) => (
  <AnimatePresence>
    {isVisible && <motion.div>{children}</motion.div>}
  </AnimatePresence>
)`,
    },
    {
      icon: Users,
      title: "Collaborative Builder",
      description:
        "The best solutions emerge from diverse perspectives. I thrive in environments where ideas are challenged, refined, and improved collectively.",
      code: `// Code reviews are conversations
const reviewComment = {
  tone: 'constructive',
  focus: 'improvement',
  outcome: 'shared_learning'
}`,
    },
    {
      icon: Zap,
      title: "Performance Obsessed",
      description:
        "Every millisecond matters. I optimize not just for functionality, but for the user's time and device resources.",
      code: `// Lazy loading with intersection observer
const useInView = (threshold = 0.1) => {
  const [inView, setInView] = useState(false)
  // Implementation that respects user's data
}`,
    },
  ]

  return (
    <section id="philosophy" className="py-20 relative bg-navy-950">
      <div className="absolute inset-0 bg-dot-pattern opacity-10" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-navy-400 to-cyan-400 bg-clip-text text-transparent">
                My Code Philosophy
              </h2>
              <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                These principles guide every line of code I write and every solution I architect
              </p>
            </div>
          </FadeIn>

          <div className="grid lg:grid-cols-2 gap-8">
            {philosophies.map((philosophy, index) => (
              <FadeIn key={index} delay={index * 150 + 100}>
                <Card className="bg-navy-900/50 border-navy-700 hover:border-navy-500/50 transition-all duration-300 group">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="p-3 bg-navy-600/20 rounded-lg group-hover:bg-navy-600/30 transition-colors">
                        <philosophy.icon className="w-6 h-6 text-navy-400" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-slate-100 mb-2">{philosophy.title}</h3>
                        <p className="text-slate-400 leading-relaxed">{philosophy.description}</p>
                      </div>
                    </div>

                    <div className="bg-navy-950/80 rounded-lg p-4 border border-navy-800">
                      <pre className="text-sm text-slate-300 overflow-x-auto">
                        <code>{philosophy.code}</code>
                      </pre>
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
