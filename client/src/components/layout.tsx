import { Link } from "wouter";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [time, setTime] = useState("");
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

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
    { name: "Philosophy", href: "#vision" },
    { name: "Work", href: "#work" },
    { name: "Ecosystem", href: "#ecosystem" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans bg-background text-foreground overflow-x-hidden selection:bg-black selection:text-white">
      
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-[60] origin-left"
        style={{ scaleX }}
      />

      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6 flex justify-between items-start mix-blend-difference text-white pointer-events-none">
        <Link href="/" className="group cursor-pointer pointer-events-auto">
          <span className="text-xl font-display font-black tracking-tighter leading-none">EDISON©</span>
        </Link>

        <div className="hidden md:flex flex-col items-center gap-2 fixed left-1/2 -translate-x-1/2 top-6 pointer-events-auto">
          <div className="flex gap-8 bg-black/5 backdrop-blur-md px-6 py-2 rounded-full border border-black/5 text-black shadow-sm">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-xs font-medium uppercase tracking-wider hover:opacity-50 transition-opacity"
              >
                {item.name}
              </a>
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
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-5xl font-display font-black uppercase tracking-tighter hover:text-transparent hover:text-stroke-black transition-all"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-grow">
        {children}
      </main>
    </div>
  );
}
