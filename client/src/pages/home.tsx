import Layout from "@/components/layout";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

import heroBg from "@assets/generated_images/abstract_liquid_chrome_metal_flowing_in_dark_void_with_iridescent_reflections.png";

export default function Home() {
  return (
    <Layout>
      {/* HERO - Full Impact */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black">
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/80" />
        
        <div className="container mx-auto px-6 relative z-10 text-white text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="inline-block px-4 py-1 rounded-full border border-white/20 text-xs font-mono uppercase tracking-widest mb-8 text-white/60">
              Senior Product Manager • AI Specialist • iOS Engineer
            </div>
            
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-black leading-[0.85] tracking-tighter mb-8">
              EDISON
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
                ESPINOSA
              </span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-12 max-w-xl mx-auto space-y-8"
          >
            <p className="text-lg md:text-xl font-medium leading-relaxed text-white/80">
              Architecting systems that bridge AI, mobile, and reality.
              <br/>
              <span className="text-amber-400">Tested by loss. Driven by outcome.</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Navigation Cards */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-display font-black tracking-tight">
              Explore the <span className="italic font-light">Portfolio</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                num: "01",
                title: "About",
                desc: "Philosophy, capabilities, and the story behind the work.",
                href: "/about",
                bg: "bg-zinc-950",
                text: "text-white"
              },
              {
                num: "02",
                title: "Work",
                desc: "Case studies from AI 4U Labs, Foxie, and more.",
                href: "/work",
                bg: "bg-gradient-to-br from-indigo-500 to-purple-600",
                text: "text-white"
              },
              {
                num: "03",
                title: "Ecosystem",
                desc: "10+ apps across AI, health, social, and productivity.",
                href: "/ecosystem",
                bg: "bg-gradient-to-br from-emerald-400 to-teal-500",
                text: "text-white"
              },
              {
                num: "04",
                title: "Contact",
                desc: "Let's build something together.",
                href: "/contact",
                bg: "bg-zinc-100",
                text: "text-black"
              },
            ].map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Link href={item.href} className="block group">
                  <div className={`${item.bg} ${item.text} rounded-3xl p-10 md:p-14 min-h-[280px] flex flex-col justify-between transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl`}>
                    <div className="flex justify-between items-start">
                      <span className="text-xs font-mono opacity-50">{item.num}</span>
                      <ArrowRight className="w-6 h-6 opacity-50 group-hover:opacity-100 group-hover:translate-x-2 transition-all" />
                    </div>
                    <div>
                      <h3 className="text-3xl md:text-4xl font-display font-black mb-3">{item.title}</h3>
                      <p className="opacity-70">{item.desc}</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-24 bg-zinc-950 text-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-between gap-8">
            {[
              { value: "10+", label: "Years Building" },
              { value: "20+", label: "Apps Shipped" },
              { value: "1M+", label: "Users Reached" },
              { value: "6 Days", label: "Fastest MVP" },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center flex-1 min-w-[150px]"
              >
                <div className="text-4xl md:text-6xl font-display font-black">{stat.value}</div>
                <div className="text-xs uppercase tracking-widest text-white/40 mt-2">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-display font-black tracking-tight mb-8">
              Ready to build?
            </h2>
            <Link href="/contact" className="inline-flex items-center gap-2 px-10 py-5 bg-black text-white rounded-full font-bold text-lg hover:bg-black/90 transition-all group">
              Get in Touch <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
