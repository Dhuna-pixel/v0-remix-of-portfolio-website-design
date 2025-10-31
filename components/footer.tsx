export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-16 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="group">
            <h3 className="font-serif text-2xl font-bold mb-4 group-hover:text-accent transition-colors">
              Dhuna Chavda
            </h3>
            <p className="text-sm opacity-80 leading-relaxed">
              Crafting human-centered digital experiences with purpose and innovation.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-6 text-lg">Navigation</h4>
            <ul className="space-y-3 text-sm opacity-80">
              <li>
                <a href="#about" className="hover:opacity-100 hover:text-accent transition-all duration-300">
                  About
                </a>
              </li>
              <li>
                <a href="#work" className="hover:opacity-100 hover:text-accent transition-all duration-300">
                  Work
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:opacity-100 hover:text-accent transition-all duration-300">
                  Skills
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:opacity-100 hover:text-accent transition-all duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-6 text-lg">Resources</h4>
            <ul className="space-y-3 text-sm opacity-80">
              <li>
                <a href="#" className="hover:opacity-100 hover:text-accent transition-all duration-300">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 hover:text-accent transition-all duration-300">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 hover:text-accent transition-all duration-300">
                  Design Tips
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-6 text-lg">Connect</h4>
            <ul className="space-y-3 text-sm opacity-80">
              <li>
                <a href="#" className="hover:opacity-100 hover:text-accent transition-all duration-300">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 hover:text-accent transition-all duration-300">
                  Dribbble
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 hover:text-accent transition-all duration-300">
                  Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-background/30 pt-10 text-center text-sm opacity-75">
          <p>© 2025 Dhuna Chavda. All rights reserved. Crafted with care.</p>
        </div>
      </div>
    </footer>
  )
}
