"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border transition-all duration-300">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="font-serif text-2xl font-bold text-primary hover:text-accent transition-all duration-300 hover:scale-110 transform"
          >
            Dhuna
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center">
            <a href="#about" className="text-foreground hover:text-primary transition-all duration-300 relative group">
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#work" className="text-foreground hover:text-primary transition-all duration-300 relative group">
              Work
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#skills" className="text-foreground hover:text-primary transition-all duration-300 relative group">
              Skills
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
              href="#contact"
              className="px-6 py-2 bg-primary text-primary-foreground rounded-full hover:bg-accent transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg"
            >
              Get in Touch
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden transition-transform duration-300 hover:scale-110"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border pt-4 flex flex-col gap-4 animate-in fade-in slide-in-from-top-2 duration-300">
            <a href="#about" className="text-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="#work" className="text-foreground hover:text-primary transition-colors">
              Work
            </a>
            <a href="#skills" className="text-foreground hover:text-primary transition-colors">
              Skills
            </a>
            <button className="w-full px-6 py-2 bg-primary text-primary-foreground rounded-full hover:bg-accent transition-all duration-300 transform hover:scale-105">
              Get in Touch
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}
