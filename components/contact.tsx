"use client"

import type React from "react"

import { useState } from "react"
import { Linkedin, Twitter, Dribbble, Bean as Behance, Send, Mail, Phone, ExternalLink } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [focusedField, setFocusedField] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const socialPlatforms = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com",
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: "https://twitter.com",
    },
    {
      name: "Dribbble",
      icon: Dribbble,
      url: "https://dribbble.com",
    },
    {
      name: "Behance",
      icon: Behance,
      url: "https://behance.net",
    },
  ]

  return (
    <section id="contact" className="py-32 bg-gradient-to-b from-background to-secondary/5 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-20 slide-up">
          <p className="text-primary font-semibold tracking-widest text-xs uppercase mb-6 flex items-center justify-center gap-2">
            <span className="w-2 h-2 bg-primary rounded-full"></span>
            Get In Touch
          </p>
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">
            Let's Create Something Amazing
          </h2>
          <p className="text-lg text-muted-foreground text-balance max-w-2xl mx-auto">
            I'm always interested in hearing about new projects and opportunities. Let's connect and bring your ideas to
            life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            {/* Email Card */}
            <div className="float-in p-10 bg-card rounded-3xl border border-border hover:border-primary transition-all duration-500 hover:shadow-2xl group transform hover:scale-105 hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-2xl group-hover:bg-primary/20 transition-all duration-300">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-2 text-lg group-hover:text-primary transition-colors">
                    Email
                  </h3>
                  <a
                    href="mailto:hello@dhuna.design"
                    className="text-primary hover:text-accent transition-colors font-medium flex items-center gap-2 group/link"
                  >
                    hello@dhuna.design
                    <ExternalLink className="w-4 h-4 opacity-0 group-hover/link:opacity-100 transition-opacity transform group-hover/link:translate-x-1" />
                  </a>
                </div>
              </div>
            </div>

            {/* Phone Card */}
            <div
              className="float-in p-10 bg-card rounded-3xl border border-border hover:border-primary transition-all duration-500 hover:shadow-2xl group transform hover:scale-105 hover:-translate-y-1"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-2xl group-hover:bg-primary/20 transition-all duration-300">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-2 text-lg group-hover:text-primary transition-colors">
                    Phone
                  </h3>
                  <a
                    href="tel:+1234567890"
                    className="text-primary hover:text-accent transition-colors font-medium flex items-center gap-2 group/link"
                  >
                    +1 (234) 567-890
                    <ExternalLink className="w-4 h-4 opacity-0 group-hover/link:opacity-100 transition-opacity transform group-hover/link:translate-x-1" />
                  </a>
                </div>
              </div>
            </div>

            {/* Social Links Card */}
            <div
              className="float-in p-10 bg-card rounded-3xl border border-border hover:border-primary transition-all duration-500 hover:shadow-2xl group"
              style={{ animationDelay: "0.2s" }}
            >
              <h3 className="font-semibold text-foreground mb-6 text-lg group-hover:text-primary transition-colors">
                Follow My Work
              </h3>
              <div className="flex gap-4 flex-wrap">
                {socialPlatforms.map((platform, index) => {
                  const Icon = platform.icon
                  return (
                    <a
                      key={platform.name}
                      href={platform.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={platform.name}
                      className="p-3 bg-secondary/50 hover:bg-primary hover:text-primary-foreground text-primary rounded-full transition-all duration-300 transform hover:scale-125 hover:-translate-y-1"
                      style={{ transitionDelay: `${index * 50}ms` }}
                    >
                      <Icon size={24} strokeWidth={1.5} />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            className="float-in space-y-6 bg-card p-12 rounded-3xl border border-border hover:border-primary/30 transition-all duration-500 hover:shadow-2xl"
            style={{ animationDelay: "0.1s" }}
          >
            <div>
              <label className="block text-sm font-semibold text-foreground mb-3">Name</label>
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("name")}
                  onBlur={() => setFocusedField(null)}
                  className="w-full px-6 py-4 bg-background border border-border rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-foreground placeholder-muted-foreground font-medium"
                  placeholder="Your name"
                />
                {focusedField === "name" && (
                  <div
                    className="absolute -bottom-2 left-0 w-0 h-1 bg-gradient-to-r from-primary to-accent rounded-full animate-pulse"
                    style={{ width: "100%" }}
                  ></div>
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-foreground mb-3">Email</label>
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("email")}
                  onBlur={() => setFocusedField(null)}
                  className="w-full px-6 py-4 bg-background border border-border rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-foreground placeholder-muted-foreground font-medium"
                  placeholder="your@email.com"
                />
                {focusedField === "email" && (
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-foreground mb-3">Message</label>
              <div className="relative">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => setFocusedField(null)}
                  rows={5}
                  className="w-full px-6 py-4 bg-background border border-border rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-foreground placeholder-muted-foreground resize-none font-medium"
                  placeholder="Tell me about your project..."
                ></textarea>
                {focusedField === "message" && (
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
                )}
              </div>
            </div>

            <button
              type="submit"
              className="w-full px-8 py-4 bg-primary hover:bg-accent text-primary-foreground rounded-full transition-all font-semibold text-lg flex items-center justify-center gap-2 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-2xl relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Send size={20} className="relative z-10" />
              <span className="relative z-10">Send Message</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
