import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Vision", href: "#vision" },
    { name: "Impact", href: "#work" },
    { name: "Ecosystem", href: "#ecosystem" },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans bg-background text-foreground overflow-x-hidden selection:bg-primary/30 selection:text-primary-foreground">
      
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
          scrolled ? "bg-background/80 backdrop-blur-xl border-white/5 py-4" : "bg-transparent border-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <Link href="/">
            <div className="flex items-center gap-2 cursor-pointer group">
              <div className="w-2 h-8 bg-primary rounded-sm group-hover:h-10 transition-all duration-300"></div>
              <div className="flex flex-col leading-none">
                <span className="font-display font-bold text-xl tracking-tight group-hover:text-white transition-colors">EDISON.</span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground group-hover:text-primary transition-colors">Visionary Builder</span>
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-white transition-colors relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary transition-all group-hover:w-full"></span>
              </a>
            ))}
            <div className="h-6 w-[1px] bg-white/10 mx-2"></div>
            <a 
              href="#contact"
              className="text-sm font-bold px-6 py-2 bg-white/5 hover:bg-primary hover:text-black border border-white/10 hover:border-primary rounded-full transition-all duration-300"
            >
              Connect
            </a>
          </nav>

          {/* Mobile Nav Toggle */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Nav Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed inset-0 z-40 bg-background pt-24 px-6 md:hidden overflow-hidden"
          >
            <div className="flex flex-col gap-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-4xl font-display font-bold hover:text-primary transition-colors"
                >
                  {item.name}
                </a>
              ))}
              <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="text-4xl font-display font-bold text-primary mt-4"
                >
                  Connect
                </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-grow pt-20">
        {children}
      </main>

      <footer className="py-12 border-t border-white/5 bg-black/20">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-muted-foreground">
          <div className="flex flex-col items-center md:items-start gap-1">
            <span className="font-display font-bold text-white">EDISON ESPINOSA</span>
            <span>Architecting Systems & Intelligence</span>
          </div>
          <div className="flex gap-8">
             <a href="#" className="hover:text-primary transition-colors">LinkedIn</a>
             <a href="#" className="hover:text-primary transition-colors">GitHub</a>
             <a href="#" className="hover:text-primary transition-colors">Twitter</a>
          </div>
          <p>© {new Date().getFullYear()} All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
