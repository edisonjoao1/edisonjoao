import { Link } from "wouter";
import { Menu, X, Square, Circle, Triangle } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Specs", href: "#specs" },
    { name: "Blueprints", href: "#work" },
    { name: "Systems", href: "#systems" },
  ];

  return (
    <div className="min-h-screen flex flex-col font-mono bg-background text-foreground overflow-x-hidden selection:bg-primary/30 selection:text-primary-foreground">
      
      {/* Technical Header */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-background/90 backdrop-blur-md">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          
          <Link href="/">
            <div className="flex items-center gap-2 cursor-pointer group">
              <div className="w-8 h-8 border border-primary flex items-center justify-center bg-primary/10 group-hover:bg-primary group-hover:text-black transition-colors">
                <span className="font-bold text-lg">E</span>
              </div>
              <div className="flex flex-col text-[10px] uppercase leading-none tracking-widest">
                <span className="font-bold">Edison.CAD</span>
                <span className="text-primary">System.v2.0</span>
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item, idx) => (
              <a
                key={item.name}
                href={item.href}
                className="text-xs uppercase tracking-widest hover:text-primary transition-colors flex items-center gap-2 group"
              >
                <span className="text-[10px] text-muted-foreground group-hover:text-primary">0{idx + 1}</span>
                {item.name}
              </a>
            ))}
            <div className="h-4 w-[1px] bg-white/20 mx-2"></div>
            <a 
              href="#status"
              className="text-xs uppercase tracking-widest text-primary animate-pulse"
            >
              ● Online
            </a>
          </nav>

          {/* Mobile Nav Toggle */}
          <button
            className="md:hidden p-2 text-foreground border border-white/10"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
        
        {/* Measurement Markers */}
        <div className="absolute bottom-0 left-0 w-full flex justify-between px-2 opacity-20 pointer-events-none">
           {[...Array(20)].map((_, i) => (
             <div key={i} className="h-1 w-[1px] bg-white"></div>
           ))}
        </div>
      </header>

      {/* Mobile Nav Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 20 }}
            className="fixed inset-0 z-40 bg-background border-l border-white/10 pt-20 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6">
              {navItems.map((item, idx) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl uppercase font-bold hover:text-primary transition-colors border-b border-white/5 pb-4 flex justify-between items-center"
                >
                  {item.name}
                  <span className="text-xs text-muted-foreground">0{idx + 1}</span>
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-grow pt-16 relative">
        {/* Background Grid Overlay */}
        <div className="absolute inset-0 pointer-events-none blueprint-grid opacity-30 fixed"></div>
        {children}
      </main>

      <footer className="border-t border-white/10 bg-background relative z-10">
        <div className="container mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest text-muted-foreground">
          <div className="flex gap-4">
            <span>Fig. 1.0 - Portfolio</span>
            <span>Scale: 1:1</span>
          </div>
          <div className="flex gap-4">
             <span>© {new Date().getFullYear()} Edison Espinosa</span>
             <span className="text-primary">Approved for Construction</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
