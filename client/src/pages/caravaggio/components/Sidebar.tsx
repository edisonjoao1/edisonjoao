import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { navSections } from "../sections";

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-40% 0px -40% 0px",
        threshold: 0,
      }
    );

    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <motion.aside
      className="fixed left-0 top-0 h-screen w-[200px] z-40 flex flex-col justify-between py-20 px-6"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
    >
      {/* Top: Edition Title */}
      <div>
        <a href="#hero" className="block group">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <h2 className="text-[13px] font-medium leading-[1.3] tracking-tight">
              <span className="block text-white/90">The</span>
              <span className="block text-white/90">
                <span className="font-['Playfair_Display',serif]">Ren</span>
                <span className="font-['Playfair_Display',serif] italic text-white">ai</span>
                <span className="font-['Playfair_Display',serif]">ssance</span>
              </span>
              <span className="block text-white/90">Edition</span>
            </h2>
          </motion.div>
        </a>
      </div>

      {/* Middle: Navigation - Vertically Centered */}
      <nav className="flex-1 flex items-center">
        <ul className="space-y-0.5 w-full">
          {navSections.map((section, index) => (
            <motion.li
              key={section.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.05 }}
            >
              <a
                href={`#${section.id}`}
                className={`flex items-center justify-between py-[3px] text-[13px] transition-all duration-300 group ${
                  activeSection === section.id
                    ? "text-white"
                    : "text-white/40 hover:text-white/70"
                }`}
              >
                <span className={`transition-all duration-300 ${
                  activeSection === section.id ? "font-medium" : "font-normal"
                }`}>
                  {section.title}
                </span>

                {/* Dotted leader line */}
                <span className="flex-1 mx-2 border-b border-dotted border-current opacity-40" />

                <span className="font-['Playfair_Display',serif] text-[11px] tracking-wide">
                  {section.roman}
                </span>
              </a>
            </motion.li>
          ))}
        </ul>
      </nav>

      {/* Bottom: Footer Links */}
      <motion.div
        className="text-[11px] text-white/30 space-y-0.5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <p className="font-medium text-white/40">Edison Joao</p>
        <p>
          <a href="#" className="hover:text-white/50 transition-colors">
            Design Showcase
          </a>
        </p>
        <p>
          <a href="/" className="hover:text-white/50 transition-colors">
            Back to Portfolio
          </a>
        </p>
      </motion.div>
    </motion.aside>
  );
}
