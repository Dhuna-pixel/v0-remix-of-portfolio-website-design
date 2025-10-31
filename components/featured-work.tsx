"use client"

import { useState } from "react"
import { ArrowUpRight, Star } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "SaasFlow Platform",
    description: "A comprehensive SaaS platform redesign focusing on user onboarding and data visualization",
    category: "Product Design",
    image: "/modern-saas-dashboard.png",
    tags: ["Design System", "UX Research", "Prototyping"],
    featured: true,
  },
  {
    id: 2,
    title: "Mobile Banking App",
    description: "End-to-end mobile banking experience with emphasis on security and simplicity",
    category: "Mobile Design",
    image: "/banking-app-mobile-interface.jpg",
    tags: ["Mobile UX", "Accessibility", "Animations"],
    featured: false,
  },
  {
    id: 3,
    title: "E-Commerce Transformation",
    description: "Complete e-commerce platform redesign resulting in 45% increase in conversion",
    category: "Web Design",
    image: "/e-commerce-store-interface.jpg",
    tags: ["Conversion Optimization", "User Testing", "Analytics"],
    featured: true,
  },
]

export default function FeaturedWork() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section id="work" className="py-32 bg-background relative overflow-hidden">
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-20 slide-up">
          <p className="text-primary font-semibold tracking-widest text-xs uppercase mb-6 flex items-center gap-2">
            <span className="w-2 h-2 bg-primary rounded-full"></span>
            Featured Work
          </p>
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-foreground text-balance">Selected Projects</h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-2xl">
            A selection of recent projects showcasing diverse design challenges and innovative solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group cursor-pointer float-in h-full transition-all duration-500 ${
                project.featured ? "md:col-span-1 lg:row-span-1" : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="h-full bg-card rounded-3xl overflow-hidden border border-border hover:border-primary transition-all duration-500 hover:shadow-xl flex flex-col hover:bg-card/80">
                <div className="relative overflow-hidden h-48 sm:h-56 md:h-64 bg-muted group">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="transform scale-75 group-hover:scale-100 transition-transform duration-500">
                      <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30">
                        <ArrowUpRight className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                  {project.featured && (
                    <div className="absolute top-4 right-4 bg-primary/90 backdrop-blur-sm text-primary-foreground px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Star className="w-3 h-3 fill-current" />
                      Featured
                    </div>
                  )}
                </div>

                <div className="flex-1 p-8 flex flex-col">
                  <p className="text-primary text-xs font-semibold uppercase tracking-widest mb-3 group-hover:translate-x-1 transition-transform duration-300 flex items-center gap-2">
                    <span className="w-1 h-1 bg-primary rounded-full"></span>
                    {project.category}
                  </p>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed flex-1 line-clamp-2 text-sm">
                    {project.description}
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1.5 bg-secondary/60 hover:bg-primary text-foreground hover:text-primary-foreground rounded-full transition-all duration-300 transform hover:scale-105 font-medium border border-border hover:border-primary"
                      >
                        {tag}
                      </span>
                    ))}
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
