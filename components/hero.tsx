"use client"

import { useEffect, useState } from "react"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      <div className="absolute top-20 right-10 w-96 h-96 bg-secondary rounded-full opacity-30 blur-3xl -z-10 animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary rounded-full opacity-15 blur-3xl -z-10"></div>
      <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-accent rounded-full opacity-10 blur-3xl -z-10"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className={`fade-in ${isVisible ? "opacity-100" : "opacity-0"} transition-opacity duration-1000`}>
            <p className="text-primary font-semibold tracking-widest text-xs uppercase mb-6 slide-up">Welcome</p>
            <h1 className="font-serif text-6xl md:text-7xl font-bold text-foreground mb-8 leading-tight tracking-tight text-balance">
              Dhuna Chavda
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed text-balance">
              Senior UI/UX Designer crafting intuitive, human-centered experiences that balance form and function.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-primary text-primary-foreground rounded-full hover:bg-accent transition-all transform hover:scale-105 hover:shadow-xl duration-300 shadow-lg active:scale-95 font-semibold text-base">
                View My Work
              </button>
              <button className="px-8 py-4 border-2 border-primary text-primary rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300 active:scale-95 font-semibold text-base transform hover:scale-105">
                Let's Talk
              </button>
            </div>
          </div>

          <div className={`scale-in ${isVisible ? "scale-100" : "scale-95"} transition-transform duration-1000`}>
            <div className="relative w-full aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-secondary to-primary/20 shadow-2xl hover:shadow-2xl transition-shadow duration-500 group">
              <img
                src="/professional-designer-portrait-modern-minimalist.jpg"
                alt="Dhuna Chavda"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent"></div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center gap-2 animate-bounce">
            <p className="text-xs text-muted-foreground uppercase tracking-widest font-semibold">Scroll to explore</p>
            <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
