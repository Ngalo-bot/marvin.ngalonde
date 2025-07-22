import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Award } from "lucide-react"
import FadeIn from "./FadeIn"

export default function Experience() {
  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "TechCorp Solutions",
      location: "San Francisco, CA",
      period: "2022 - Present",
      description:
        "Led development of microservices architecture serving 1M+ users. Mentored junior developers and implemented CI/CD pipelines.",
      achievements: ["Reduced API response time by 40%", "Led team of 5 developers", "Implemented automated testing"],
    },
    {
      title: "Full Stack Developer",
      company: "StartupXYZ",
      location: "Remote",
      period: "2020 - 2022",
      description:
        "Built scalable web applications from scratch. Collaborated with design and product teams to deliver user-centric solutions.",
      achievements: [
        "Launched 3 major product features",
        "Improved code coverage to 90%",
        "Reduced deployment time by 60%",
      ],
    },
    {
      title: "Frontend Developer",
      company: "Digital Agency",
      location: "New York, NY",
      period: "2019 - 2020",
      description:
        "Developed responsive websites and web applications for various clients. Focused on performance optimization and accessibility.",
      achievements: [
        "Delivered 15+ client projects",
        "Achieved 95+ Lighthouse scores",
        "Implemented accessibility standards",
      ],
    },
  ]

  const certifications = [
    "AWS Certified Solutions Architect",
    "Google Cloud Professional Developer",
    "MongoDB Certified Developer",
    "Certified Kubernetes Administrator",
  ]

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl font-bold text-center mb-12">Experience & Education</h2>
          </FadeIn>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <FadeIn delay={100}>
                <h3 className="text-2xl font-semibold mb-6">Work Experience</h3>
              </FadeIn>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <FadeIn key={index} delay={index * 150 + 200}>
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-xl">{exp.title}</CardTitle>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-muted-foreground">
                          <span className="font-medium">{exp.company}</span>
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              <span className="text-sm">{exp.location}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              <span className="text-sm">{exp.period}</span>
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground mb-4">{exp.description}</p>
                        <div className="space-y-2">
                          {exp.achievements.map((achievement, achIndex) => (
                            <div key={achIndex} className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-purple-600 rounded-full" />
                              <span className="text-sm">{achievement}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </FadeIn>
                ))}
              </div>
            </div>

            <div>
              <FadeIn delay={100}>
                <h3 className="text-2xl font-semibold mb-6">Education & Certifications</h3>
              </FadeIn>

              <FadeIn delay={200}>
                <Card className="mb-6">
                  <CardHeader>
                    <CardTitle className="text-lg">Computer Science Degree</CardTitle>
                    <p className="text-muted-foreground">University of California, Berkeley</p>
                    <p className="text-sm text-muted-foreground">2015 - 2019</p>
                  </CardHeader>
                </Card>
              </FadeIn>

              <FadeIn delay={300}>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Award className="w-5 h-5" />
                      Certifications
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {certifications.map((cert, index) => (
                        <Badge key={index} variant="secondary" className="block w-fit">
                          {cert}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </FadeIn>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
