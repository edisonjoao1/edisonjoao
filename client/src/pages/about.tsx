import Layout from "@/components/layout";
import { motion } from "framer-motion";
import { Brain, Smartphone, Rocket } from "lucide-react";

export default function About() {
  return (
    <Layout>
      {/* Hero */}
      <section className="min-h-[60vh] flex items-center bg-zinc-950 text-white pt-32">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm uppercase tracking-widest text-white/40 mb-6">About</p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-black leading-[0.95] tracking-tight">
              Building with
              <br />
              <span className="italic font-light">absolute </span>
              intent.
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 bg-zinc-950 text-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl"
          >
            <h2 className="text-4xl md:text-6xl font-display font-black leading-[0.9] tracking-tight mb-12">
              I lost <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">$3M</span>.
              <br />
              I'm rebuilding with
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">purpose</span>.
            </h2>
            <p className="text-xl text-white/60 leading-relaxed max-w-2xl">
              Every product must solve a problem, create value, or build a legacy.
              No vanity metrics. No features without function. Just compounding outcomes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-24 bg-white text-black">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <p className="text-sm uppercase tracking-widest text-muted-foreground mb-6">What I Do</p>
            <h2 className="text-5xl md:text-7xl font-display font-black leading-[0.95] tracking-tight">
              Full-Stack
              <span className="italic font-light"> Product </span>
              Development
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { 
                num: "01",
                title: "AI Products", 
                desc: "GPT apps, MCP servers, voice AI, and intelligent systems that ship to millions of users.",
                details: "OpenAI, Anthropic, Google integrations. From idea to App Store in days, not months.",
                icon: Brain
              },
              { 
                num: "02",
                title: "iOS Engineering", 
                desc: "Native Swift apps with flawless UX. App Store optimization that drives downloads.",
                details: "20+ apps shipped. 1M+ total users. Swift, SwiftUI, React Native expertise.",
                icon: Smartphone
              },
              { 
                num: "03",
                title: "Product Strategy", 
                desc: "Strategic thinking that creates compounding value. Every input designed for maximum output.",
                details: "Roadmapping, prioritization, user research, growth strategy, and go-to-market.",
                icon: Rocket
              },
            ].map((item, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group"
              >
                <div className="bg-zinc-50 hover:bg-black hover:text-white rounded-3xl p-8 md:p-10 transition-all duration-500 min-h-[320px] flex flex-col">
                  <div className="flex justify-between items-start mb-8">
                    <span className="text-xs font-mono text-muted-foreground group-hover:text-white/60">{item.num}</span>
                    <item.icon className="w-6 h-6 opacity-40 group-hover:opacity-100" />
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-display font-bold mb-4">
                    {item.title}
                  </h3>
                  
                  <p className="text-muted-foreground group-hover:text-white/70 leading-relaxed flex-grow">
                    {item.desc}
                  </p>
                  
                  <div className="mt-6 pt-6 border-t border-black/5 group-hover:border-white/10">
                    <p className="text-sm text-muted-foreground group-hover:text-white/50">
                      {item.details}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-24 flex flex-wrap justify-between items-center gap-8 pb-12 border-b border-black/10"
          >
            {[
              { value: "7+", label: "Years Building" },
              { value: "20+", label: "Apps Shipped" },
              { value: "1M+", label: "Users Reached" },
              { value: "6 Days", label: "Fastest MVP" },
            ].map((stat, idx) => (
              <div key={idx}>
                <div className="text-4xl md:text-5xl font-display font-black">{stat.value}</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
