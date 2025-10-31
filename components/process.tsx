"use client"

import { useState } from "react"
import { CheckCircle2 } from "lucide-react"

export default function Process() {
  const [activeStep, setActiveStep] = useState<number | null>(null)

  const steps = [
    {
      number: "01",
      title: "Discovery",
      description:
        "Understanding user needs, business goals, and market landscape through research and stakeholder interviews.",
    },
    {
      number: "02",
      title: "Strategy",
      description:
        "Defining clear objectives, creating user personas, and establishing the design direction and framework.",
    },
    {
      number: "03",
      title: "Design",
      description: "Crafting high-fidelity designs, creating prototypes, and building comprehensive design systems.",
    },
    {
      number: "04",
      title: "Testing",
      description: "Conducting user testing, gathering feedback, and iterating on designs based on real user insights.",
    },
  ]

  return (
    <section className="py-32 bg-gradient-to-b from-background to-secondary/5 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-20 slide-up">
          <p className="text-primary font-semibold tracking-widest text-xs uppercase mb-6 flex items-center gap-2">
            <span className="w-2 h-2 bg-primary rounded-full"></span>
            My Approach
          </p>
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-foreground text-balance">Design Process</h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-2xl">
            A proven methodology combining research, strategy, and iteration for exceptional results
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent -translate-y-1/2 -z-10"></div>

          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="float-in group relative"
                style={{ animationDelay: `${index * 0.1}s` }}
                onMouseEnter={() => setActiveStep(index)}
                onMouseLeave={() => setActiveStep(null)}
              >
                <div className="absolute -inset-2 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative p-10 bg-card rounded-3xl border border-border hover:border-primary transition-all duration-500 h-full flex flex-col hover:shadow-2xl hover:scale-105 transform">
                  <div className="flex items-start justify-between mb-6">
                    <div className="text-6xl font-serif font-bold text-primary/20 group-hover:text-primary/60 transition-colors duration-300">
                      {step.number}
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:scale-110">
                      <CheckCircle2 className="w-6 h-6 text-primary" />
                    </div>
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                    {step.title}
                  </h3>

                  <p className="text-muted-foreground text-base leading-relaxed flex-grow text-sm md:text-base">
                    {step.description}
                  </p>

                  <div className="mt-6 pt-6 border-t border-border/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                      <span className="text-xs font-semibold text-primary uppercase tracking-widest">
                        Step {index + 1} of 4
                      </span>
                    </div>
                  </div>
                </div>

                {index < steps.length - 1 && (
                  <div className="hidden md:flex absolute top-1/2 -right-4 w-8 h-0.5 items-center justify-center -translate-y-1/2">
                    <div className="w-full h-0.5 bg-gradient-to-r from-primary/40 to-transparent group-hover:from-primary transition-all duration-500"></div>
                    <div className="absolute w-2.5 h-2.5 bg-primary/20 rounded-full group-hover:bg-primary/60 transition-all duration-500 right-0 transform group-hover:translate-x-1"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 pt-16 border-t border-border/30">
          <p className="text-center text-muted-foreground text-sm md:text-base">
            This iterative approach ensures every project delivers measurable results and exceeds expectations
          </p>
        </div>
      </div>
    </section>
  )
}
