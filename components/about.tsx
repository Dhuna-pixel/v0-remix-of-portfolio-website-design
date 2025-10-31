"use client"

import { useEffect, useState } from "react"

export default function About() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const stats = [
    { number: "50+", label: "Projects Completed" },
    { number: "8+", label: "Years Experience" },
    { number: "100%", label: "Client Satisfaction" },
    { number: "25+", label: "Happy Clients" },
  ]

  return (
    <section id="about" className="py-32 bg-gradient-to-b from-background to-secondary/10 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div className="order-2 md:order-1">
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-2xl"></div>
              <div className="rounded-3xl overflow-hidden bg-muted shadow-2xl hover:shadow-3xl transition-shadow duration-500 group relative">
                <img
                  src="/workspace-design-process-sketches.jpg"
                  alt="Design workspace"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2 slide-up">
            <p className="text-primary font-semibold tracking-widest text-xs uppercase mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              About Me
            </p>
            <h2 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-8 leading-tight text-balance">
              Designing with Purpose
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              With over 8 years of experience in UI/UX design, I've dedicated my career to creating digital experiences
              that resonate with users. My approach combines meticulous research, thoughtful design, and a deep
              understanding of human behavior.
            </p>
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
              I believe great design is invisible—it feels natural and intuitive. Every pixel, interaction, and
              transition is purposeful, creating experiences that delight users while solving real problems.
            </p>

            <div
              className={`grid grid-cols-2 gap-4 transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}
            >
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="p-6 bg-card rounded-2xl border border-border hover:border-primary hover:shadow-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 group"
                  style={{
                    transitionDelay: isVisible ? `${index * 100}ms` : "0ms",
                  }}
                >
                  <p className="text-3xl md:text-4xl font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                    {stat.number}
                  </p>
                  <p className="text-sm md:text-base text-muted-foreground font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
