import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/70 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent"
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <nav className="flex items-center justify-between px-6 py-4">
        {/* Left side */}
        <div className="flex items-center gap-6">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2 group">
            <motion.div
              className="w-7 h-7 rounded-full bg-white flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <span className="text-black text-xs font-bold">E</span>
            </motion.div>
            <span className="text-[13px] font-medium tracking-tight">
              Edison Design
            </span>
          </a>

          <span className="text-[13px] text-white/50 font-light">Portfolio '25</span>

          {/* Editions Dropdown */}
          <button
            className="flex items-center gap-1.5 text-[13px] text-white/70 hover:text-white transition-colors duration-200"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            Editions
            <motion.svg
              className="w-3.5 h-3.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              animate={{ rotate: menuOpen ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </motion.svg>
          </button>

          {/* Search */}
          <button className="flex items-center gap-2 text-[13px] text-white/70 hover:text-white transition-colors duration-200">
            Search
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-5">
          <Link
            href="/"
            className="text-[13px] text-white/70 hover:text-white transition-colors duration-200 hidden md:block"
          >
            Back to Portfolio
          </Link>
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <a
              href="mailto:edison@ai4u.space"
              className="bg-white text-black px-5 py-2 rounded-full text-[13px] font-medium hover:bg-white/90 transition-colors duration-200"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>
      </nav>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden bg-black/90 backdrop-blur-xl border-t border-white/5"
          >
            <div className="px-6 py-8">
              <div className="grid grid-cols-4 gap-8">
                <div>
                  <h3 className="text-white/40 text-[11px] uppercase tracking-wider mb-4 font-medium">
                    Previous Editions
                  </h3>
                  <ul className="space-y-2.5">
                    {["Summer '25", "Winter '25", "Summer '24", "Winter '24"].map((edition) => (
                      <li key={edition}>
                        <a
                          href="#"
                          className="text-[13px] text-white/70 hover:text-white transition-colors duration-200"
                        >
                          {edition}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
