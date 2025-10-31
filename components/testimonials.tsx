"use client"

import { useState } from "react"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "Dhuna transformed our product's user experience. Her strategic approach and attention to detail resulted in a 40% improvement in user satisfaction.",
    author: "Sarah Chen",
    role: "CEO, TechStart Inc.",
    image: "/professional-woman-portrait.png",
    metric: "40% satisfaction increase",
  },
  {
    quote:
      "Working with Dhuna was a game-changer. She brings both creative vision and practical problem-solving skills to every project.",
    author: "Michael Rodriguez",
    role: "Product Manager, Digital Solutions",
    image: "/professional-man-portrait.png",
    metric: "6-month project completed",
  },
  {
    quote:
      "The design system Dhuna created has become the backbone of our entire digital product suite. Truly exceptional work.",
    author: "Emma Watson",
    role: "Design Director, Creative Studios",
    image: "/creative-professional-woman.png",
    metric: "15+ product updates",
  },
]

export default function Testimonials() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="py-32 bg-gradient-to-b from-background to-secondary/5 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-20 slide-up">
          <p className="text-primary font-semibold tracking-widest text-xs uppercase mb-6 flex items-center gap-2">
            <span className="w-2 h-2 bg-primary rounded-full"></span>
            Social Proof
          </p>
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-foreground text-balance">What Others Say</h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-2xl">
            Trusted by industry leaders and innovative companies
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="float-in group relative"
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="absolute -inset-2 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative p-10 bg-card rounded-3xl border border-border hover:border-primary transition-all duration-500 hover:shadow-2xl flex flex-col group transform hover:scale-105 h-full">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex gap-1.5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-primary fill-primary group-hover:text-accent group-hover:fill-accent transition-all duration-300 transform group-hover:scale-110"
                        style={{ transitionDelay: `${i * 50}ms` }}
                      />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-primary/30 group-hover:text-primary/60 transition-colors duration-300 group-hover:rotate-12" />
                </div>

                <p className="text-muted-foreground mb-10 text-base leading-relaxed flex-grow italic font-medium">
                  "{testimonial.quote}"
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-4 pt-6 border-t border-border/50">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.author}
                      className="w-14 h-14 rounded-full object-cover ring-2 ring-primary/20 group-hover:ring-primary/60 transition-all duration-300 transform group-hover:scale-110"
                    />
                    <div className="flex-1">
                      <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {testimonial.author}
                      </p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>

                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 pt-4 border-t border-border/30">
                    <p className="text-xs font-bold text-primary uppercase tracking-widest">Key Result</p>
                    <p className="text-sm text-foreground font-semibold mt-1">{testimonial.metric}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 pt-16 border-t border-border/30 text-center">
          <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto">
            Join leading companies that have transformed their digital experiences with thoughtful, strategic design
          </p>
          <div className="flex items-center justify-center gap-8 mt-12 flex-wrap">
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-primary">50+</p>
              <p className="text-sm text-muted-foreground mt-1">Projects Delivered</p>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-primary">100%</p>
              <p className="text-sm text-muted-foreground mt-1">Client Satisfaction</p>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-primary">25+</p>
              <p className="text-sm text-muted-foreground mt-1">Happy Clients</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
