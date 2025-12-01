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
    { name: "About", href: "#about" },
    { name: "Work", href: "#work" },
    { name: "Apps", href: "#apps" },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans bg-background text-foreground overflow-x-hidden selection:bg-white/20">
      <header 
        className={`fixed top-6 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "max-w-xl mx-auto" : "max-w-7xl mx-auto px-6"
        }`}
      >
        <div className={`
          flex items-center justify-between px-6 py-4 rounded-full border transition-all duration-300
          ${scrolled 
            ? "bg-black/50 backdrop-blur-xl border-white/10 shadow-2xl shadow-black/50" 
            : "bg-transparent border-transparent"
          }
        `}>
          <Link href="/">
            <span className="font-display font-bold text-lg tracking-tighter cursor-pointer mix-blend-difference">
              EDISON.
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-white transition-colors"
              >
                {item.name}
              </a>
            ))}
            <a 
              href="#contact"
              className="text-sm font-medium bg-white text-black px-4 py-1.5 rounded-full hover:bg-white/90 transition-colors"
            >
              Contact
            </a>
          </nav>

          {/* Mobile Nav Toggle */}
          <button
            className="md:hidden p-1 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Mobile Nav Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-4 z-40 bg-[#0A0A0A] border border-white/10 rounded-3xl p-8 md:hidden flex flex-col justify-center items-center"
          >
             <button
              className="absolute top-6 right-6 p-2 text-foreground/50 hover:text-foreground"
              onClick={() => setIsOpen(false)}
            >
              <X size={24} />
            </button>
            <nav className="flex flex-col gap-8 text-center">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-3xl font-display font-bold hover:text-white/50 transition-colors"
                >
                  {item.name}
                </a>
              ))}
               <a 
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="text-3xl font-display font-bold hover:text-white/50 transition-colors"
              >
                Contact
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-grow">{children}</main>

      <footer className="py-12 mt-20 border-t border-white/5">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-muted-foreground text-sm">
          <p>© {new Date().getFullYear()} Edison Espinosa.</p>
          <p className="font-mono">Architecting Intelligence.</p>
        </div>
      </footer>
    </div>
  );
}
