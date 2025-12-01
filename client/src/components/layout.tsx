import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [time, setTime] = useState("");
  const [location] = useLocation();

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const navItems = [
    { name: "About", href: "/about" },
    { name: "Work", href: "/work" },
    { name: "Ecosystem", href: "/ecosystem" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans bg-background text-foreground overflow-x-hidden selection:bg-black selection:text-white">

      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6 flex justify-between items-start mix-blend-difference text-white pointer-events-none">
        <Link href="/" className="group flex flex-col gap-1 cursor-pointer pointer-events-auto">
          <span className="text-xl font-display font-black tracking-tighter leading-none">EDISON©</span>
          <span className="text-[10px] font-mono uppercase tracking-widest opacity-60 group-hover:opacity-100 transition-opacity">
            Est. 2025
          </span>
        </Link>

        <div className="hidden md:flex flex-col items-center gap-2 fixed left-1/2 -translate-x-1/2 top-6 pointer-events-auto">
          <div className="flex gap-8 bg-black/5 backdrop-blur-md px-6 py-2 rounded-full border border-black/5 text-black shadow-sm">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-xs font-medium uppercase tracking-wider transition-opacity ${
                  location === item.href ? "opacity-100" : "opacity-60 hover:opacity-100"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-6 pointer-events-auto">
          <div className="hidden md:block text-right">
             <div className="text-[10px] font-mono opacity-60 uppercase tracking-widest">Local Time</div>
             <div className="font-mono text-sm">{time}</div>
          </div>
          
          <button
            className="md:hidden p-2 bg-black text-white rounded-full"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed inset-0 z-40 bg-background flex flex-col justify-center items-center"
          >
            <div className="flex flex-col gap-8 text-center">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-5xl font-display font-black uppercase tracking-tighter hover:opacity-50 transition-all"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-zinc-950 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <h2 className="text-4xl font-display font-black tracking-tighter mb-4">EDISON©</h2>
              <p className="text-white/60 max-w-sm">
                Architecting systems that bridge AI, mobile, and reality.
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-white/40 mb-4">Navigate</p>
              <div className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <Link key={item.name} href={item.href} className="text-white/60 hover:text-white transition-colors">
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-white/40 mb-4">Connect</p>
              <div className="flex flex-col gap-2">
                <a href="#" className="text-white/60 hover:text-white transition-colors">Twitter</a>
                <a href="#" className="text-white/60 hover:text-white transition-colors">LinkedIn</a>
                <a href="#" className="text-white/60 hover:text-white transition-colors">GitHub</a>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between gap-4 text-[10px] font-mono uppercase text-white/40">
            <span>© 2025 Edison Espinosa</span>
            <span>Building with absolute intent</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
