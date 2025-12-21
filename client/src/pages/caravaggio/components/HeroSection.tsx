import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Sparkles from "./Sparkles";
import Particles from "./Particles";

interface HeroSectionProps {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

export default function HeroSection({
  title,
  description,
  image,
  imageAlt,
}: HeroSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden"
      style={{ scrollSnapAlign: "start" }}
    >
      {/* Background Image with Parallax */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y, scale }}
      >
        <div className="relative w-full h-full">
          <img
            src={image}
            alt={imageAlt}
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          {/* Subtle vignette overlay */}
          <div
            className="absolute inset-0"
            style={{
              background: "radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.3) 100%)"
            }}
          />
        </div>
      </motion.div>

      {/* Sparkle Effects */}
      <Sparkles count={40} />

      {/* Floating Particles */}
      <Particles />

      {/* Title Card - Positioned upper center like Shopify */}
      <motion.div
        className="absolute z-20 top-[15%] left-1/2 -translate-x-1/2 ml-[100px]"
        style={{ opacity }}
      >
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        >
          {/* Main Title */}
          <h1 className="text-[3.5rem] md:text-[4.5rem] lg:text-[5rem] font-['Playfair_Display',serif] font-normal leading-[1.1] tracking-tight">
            <motion.span
              className="block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              The
            </motion.span>
            <motion.span
              className="block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <span>Ren</span>
              <span className="italic">/ai/</span>
              <span>ssance</span>
            </motion.span>
            <motion.span
              className="block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Edition
            </motion.span>
          </h1>
        </motion.div>
      </motion.div>

      {/* Description - Below title */}
      <motion.div
        className="absolute z-20 top-[45%] left-[200px] max-w-[280px]"
        style={{ opacity }}
      >
        <motion.p
          className="text-[13px] text-white/70 leading-relaxed mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          {description}
        </motion.p>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 ml-[100px] z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[11px] text-white/50 uppercase tracking-widest">Scroll</span>
          <svg
            className="w-5 h-5 text-white/50"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>

      {/* Gradient overlay at bottom for smooth transition */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black/60 to-transparent z-10" />
    </section>
  );
}
