"use client"

import { useState } from "react"

export default function Skills() {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null)

  const skillCategories = [
    {
      title: "Design",
      skills: ["UI/UX Design", "Wireframing", "Prototyping", "Design Systems", "User Research", "Interaction Design"],
      icon: "🎨",
    },
    {
      title: "Tools",
      skills: ["Figma", "Adobe XD", "Sketch", "Framer", "Webflow", "Protopie"],
      icon: "⚙️",
    },
    {
      title: "Soft Skills",
      skills: ["Leadership", "Communication", "Problem Solving", "Collaboration", "Strategic Thinking", "Mentoring"],
      icon: "💡",
    },
  ]

  return (
    <section id="skills" className="py-32 bg-gradient-to-b from-background to-secondary/5 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-20 slide-up">
          <p className="text-primary font-semibold tracking-widest text-xs uppercase mb-6 flex items-center gap-2">
            <span className="w-2 h-2 bg-primary rounded-full"></span>
            Expertise
          </p>
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-foreground text-balance mb-4">
            Skills & Tools
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            A comprehensive set of design capabilities and technical expertise
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="float-in group relative"
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredCategory(category.title)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative p-10 bg-card rounded-3xl border border-border hover:border-primary hover:shadow-2xl transition-all duration-500 group transform hover:scale-105 h-full flex flex-col">
                <div className="mb-8 flex items-center justify-between">
                  <h3 className="font-serif text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {category.title}
                  </h3>
                  <div className="text-3xl transform group-hover:scale-125 transition-transform duration-300">
                    {category.icon}
                  </div>
                </div>

                <div className="space-y-3 flex-1">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skill}
                      className="flex items-center gap-4 transform transition-all duration-300"
                      style={{
                        opacity: hoveredCategory === null || hoveredCategory === category.title ? 1 : 0.5,
                        transform:
                          hoveredCategory === category.title
                            ? `translateX(${Math.sin(skillIndex) * 2}px)`
                            : "translateX(0)",
                      }}
                    >
                      <div className="relative flex-shrink-0">
                        <div className="w-3 h-3 bg-primary rounded-full group-hover:bg-accent transition-all duration-300 group-hover:scale-150"></div>
                        <div className="absolute inset-0 w-3 h-3 bg-primary rounded-full animate-pulse opacity-0 group-hover:opacity-100"></div>
                      </div>
                      <p className="text-foreground font-medium text-sm md:text-base group-hover:text-primary transition-colors duration-300">
                        {skill}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-border/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">
                    Expertise Level
                  </p>
                  <div className="w-full h-1.5 bg-secondary rounded-full mt-3 overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-primary to-accent w-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
