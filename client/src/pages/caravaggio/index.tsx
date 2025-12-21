import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import HeroSection from "./components/HeroSection";
import ContentSection from "./components/ContentSection";
import SmoothScroll from "./components/SmoothScroll";
import { sections, navSections } from "./sections";
import { Link } from "wouter";

// Loading screen component
function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    const timer = setTimeout(onComplete, 2000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-[#0a0a0a] flex items-center justify-center"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <motion.div
          className="w-16 h-16 rounded-full border-2 border-white/20 border-t-white mx-auto mb-6"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
        <motion.p
          className="text-white/60 text-sm tracking-widest uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Loading
        </motion.p>
      </motion.div>
    </motion.div>
  );
}

export default function CaravaggioPage() {
  const [loading, setLoading] = useState(true);
  const heroSection = sections[0];

  // Add custom styles for this page
  useEffect(() => {
    // Add Google Fonts
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Inter:wght@300;400;500;600&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    // Override body styles for this page
    document.body.style.background = '#0a0a0a';
    document.body.style.color = '#ffffff';
    document.body.style.overflowX = 'hidden';

    // Add scroll snap styles
    document.documentElement.style.scrollBehavior = 'smooth';
    document.documentElement.style.scrollSnapType = 'y proximity';

    return () => {
      document.head.removeChild(link);
      document.body.style.background = '';
      document.body.style.color = '';
      document.body.style.overflowX = '';
      document.documentElement.style.scrollBehavior = '';
      document.documentElement.style.scrollSnapType = '';
    };
  }, []);

  return (
    <>
      <style>{`
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: #0a0a0a;
        }
        ::-webkit-scrollbar-thumb {
          background: #333;
          border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #555;
        }
      `}</style>

      <AnimatePresence mode="wait">
        {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      <SmoothScroll>
        <motion.main
          className="relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: loading ? 0 : 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Header />
          <Sidebar />

          {/* Hero Section */}
          <HeroSection
            title={heroSection.title}
            description={heroSection.description}
            image={heroSection.image}
            imageAlt={heroSection.imageAlt}
          />

          {/* Content Sections */}
          {navSections.map((section, index) => (
            <ContentSection key={section.id} section={section} index={index} />
          ))}

          {/* Footer CTA Section */}
          <section className="bg-[#0a0a0a] py-32 px-8 pl-[200px]">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h2
                className="text-5xl md:text-7xl font-['Playfair_Display',serif] mb-8"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                Start your <span className="italic">masterpiece</span>
              </motion.h2>
              <motion.p
                className="text-xl text-white/50 mb-12 max-w-2xl mx-auto leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                This is a design showcase by Edison Joao, demonstrating advanced scroll animations and premium web experiences.
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    href="/"
                    className="inline-block bg-white text-black px-8 py-4 rounded-full text-lg font-medium hover:bg-white/90 transition-all duration-300"
                  >
                    View Portfolio
                  </Link>
                </motion.div>
                <motion.a
                  href="#hero"
                  className="border border-white/20 px-8 py-4 rounded-full text-lg font-medium hover:bg-white/5 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Back to top
                </motion.a>
              </motion.div>
            </div>
          </section>

          {/* Final Footer */}
          <footer className="bg-[#0a0a0a] border-t border-white/5 py-12 px-8 pl-[200px]">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center">
                  <span className="text-black text-xs font-bold">E</span>
                </div>
                <span className="font-medium text-sm">Edison Joao</span>
              </div>
              <div className="flex gap-8 text-sm text-white/40">
                <Link href="/" className="hover:text-white/70 transition-colors duration-200">Portfolio</Link>
                <a href="#" className="hover:text-white/70 transition-colors duration-200">GitHub</a>
                <a href="#" className="hover:text-white/70 transition-colors duration-200">LinkedIn</a>
              </div>
              <p className="text-sm text-white/30">Design Showcase 2026</p>
            </div>
          </footer>
        </motion.main>
      </SmoothScroll>
    </>
  );
}
