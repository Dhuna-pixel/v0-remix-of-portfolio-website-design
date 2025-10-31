import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import About from "@/components/about"
import FeaturedWork from "@/components/featured-work"
import Skills from "@/components/skills"
import Process from "@/components/process"
import Testimonials from "@/components/testimonials"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="w-full bg-background text-foreground">
      <Navigation />
      <Hero />
      <About />
      <FeaturedWork />
      <Skills />
      <Process />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}
