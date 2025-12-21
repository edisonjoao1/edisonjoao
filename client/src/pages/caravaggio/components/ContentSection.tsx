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
                  className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col"
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + i * 0.15 }}
                  whileHover={{ y: -4 }}
                >
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-[#1a1a1a] transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-[#666] text-[15px] leading-relaxed mb-4 flex-grow">
                    {feature.description}
                  </p>

                  {feature.appUrl && (
                    <a
                      href={feature.appUrl}
                      target={feature.appUrl.startsWith('mailto:') ? undefined : '_blank'}
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full border border-[#1a1a1a]/20 hover:bg-[#1a1a1a] hover:text-white transition-all duration-300 group/link"
                    >
                      {feature.appUrl.includes('apps.apple.com') ? (
                        <>
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                          </svg>
                          App Store
                        </>
                      ) : feature.appUrl.includes('mailto:') ? (
                        <>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                          Get in Touch
                        </>
                      ) : (
                        <>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                          Visit Site
                        </>
                      )}
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
