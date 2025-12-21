import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import type { Section } from "../sections";
import Sparkles from "./Sparkles";

interface ContentSectionProps {
  section: Section;
  index: number;
}

export default function ContentSection({ section, index }: ContentSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(contentRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.05]);
  const titleY = useTransform(scrollYProgress, [0.2, 0.5], ["20%", "0%"]);
  const titleOpacity = useTransform(scrollYProgress, [0.2, 0.4], [0, 1]);

  return (
    <section
      id={section.id}
      ref={containerRef}
      className="relative min-h-screen"
      style={{ scrollSnapAlign: "start" }}
    >
      {/* Dark Hero Part with Caravaggio-style painting */}
      <div className="relative h-screen overflow-hidden">
        <motion.div className="absolute inset-0" style={{ scale: imageScale }}>
          <img
            src={section.image}
            alt={section.imageAlt}
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Dramatic vignette for Caravaggio chiaroscuro effect */}
          <div
            className="absolute inset-0"
            style={{
              background: `
                radial-gradient(ellipse at center, transparent 20%, rgba(0,0,0,0.5) 100%),
                linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, transparent 30%, transparent 70%, rgba(0,0,0,0.4) 100%)
              `
            }}
          />
        </motion.div>

        {/* Sparkles for this section */}
        <Sparkles count={20} />

        {/* Section Title - Large and centered */}
        <div className="relative z-10 h-full flex items-center justify-center pl-[200px]">
          <motion.div
            className="text-center"
            style={{ y: titleY, opacity: titleOpacity }}
          >
            <motion.h2
              className="text-[6rem] md:text-[8rem] lg:text-[10rem] font-['Playfair_Display',serif] font-normal leading-none tracking-tight"
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
            >
              {section.title}
            </motion.h2>
            {section.tagline && (
              <motion.p
                className="text-lg md:text-xl text-white/60 mt-4 font-light tracking-wide"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                {section.tagline}
              </motion.p>
            )}
          </motion.div>
        </div>

        {/* Gradient overlay at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[#f5f1eb] to-transparent z-10" />
      </div>

      {/* Cream Content Part */}
      <div
        ref={contentRef}
        className="bg-[#f5f1eb] text-[#1a1a1a] py-20 md:py-32 px-6 md:px-12 pl-[200px]"
      >
        <div className="max-w-4xl mx-auto">
          {/* Large Description with elegant drop cap */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Decorative large first letter */}
            <p className="text-[2rem] md:text-[2.5rem] lg:text-[3rem] font-['Playfair_Display',serif] leading-[1.3] tracking-tight">
              <span className="float-left text-[5rem] md:text-[6rem] leading-[0.8] mr-3 mt-1 font-['Playfair_Display',serif]">
                {section.description.charAt(0)}
              </span>
              {section.description.slice(1)}
            </p>

            <motion.a
              href="#"
              className="inline-flex items-center gap-2 mt-8 text-sm border border-[#1a1a1a]/30 px-5 py-2.5 rounded hover:bg-[#1a1a1a] hover:text-white transition-all duration-300"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Read help doc
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </motion.a>
          </motion.div>

          {/* Features Grid */}
          {section.features && (
            <div className="grid md:grid-cols-2 gap-8">
              {section.features.map((feature, i) => (
                <motion.article
                  key={i}
                  className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-500"
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + i * 0.15 }}
                  whileHover={{ y: -4 }}
                >
                  {/* Feature Image/App Link */}
                  {feature.appUrl && (
                    <a
                      href={feature.appUrl}
                      target={feature.appUrl.startsWith('mailto:') ? undefined : '_blank'}
                      rel="noopener noreferrer"
                      className="block aspect-[4/3] bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] rounded-lg mb-6 overflow-hidden relative group/img"
                    >
                      <motion.div
                        className="absolute inset-0 flex items-center justify-center"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.4 }}
                      >
                        <div className="text-center">
                          <div className="text-white/80 mb-2">
                            <svg className="w-10 h-10 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                            </svg>
                          </div>
                          <span className="text-white/60 text-sm font-medium group-hover/img:text-white transition-colors">
                            {feature.appUrl.includes('apps.apple.com') ? 'View on App Store' :
                             feature.appUrl.includes('mailto:') ? 'Send Email' : 'Visit Site'}
                          </span>
                        </div>
                      </motion.div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity" />
                    </a>
                  )}
                  {!feature.appUrl && (
                    <div className="aspect-[4/3] bg-gradient-to-br from-[#e8e4dc] to-[#d4cfc4] rounded-lg mb-6 overflow-hidden relative">
                      <motion.div
                        className="absolute inset-0 flex items-center justify-center"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.4 }}
                      >
                        <div className="text-[#1a1a1a]/20">
                          <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                      </motion.div>
                    </div>
                  )}

                  <h3 className="text-xl font-semibold mb-3 group-hover:text-[#1a1a1a] transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-[#666] text-[15px] leading-relaxed mb-4">
                    {feature.description}
                  </p>

                  {feature.appUrl && (
                    <a
                      href={feature.appUrl}
                      target={feature.appUrl.startsWith('mailto:') ? undefined : '_blank'}
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-[#1a1a1a] font-medium group/link"
                    >
                      <span className="relative">
                        {feature.appUrl.includes('apps.apple.com') ? 'View on App Store' :
                         feature.appUrl.includes('mailto:') ? 'Get in Touch' : 'Learn More'}
                        <span className="absolute bottom-0 left-0 w-0 h-px bg-current transition-all duration-300 group-hover/link:w-full" />
                      </span>
                      <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover/link:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  )}
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
