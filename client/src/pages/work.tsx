import Layout from "@/components/layout";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import foxieScreen from "@assets/foxie_iphoneimg.png";
import foxieLogo from "@assets/foxie_logo.png";

export default function Work() {
  return (
    <Layout>
      {/* Hero */}
      <section className="min-h-[50vh] flex items-center bg-white pt-32">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm uppercase tracking-widest text-muted-foreground mb-6">Selected Work</p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-black leading-[0.95] tracking-tight">
              Case
              <span className="italic font-light"> Studies</span>
            </h1>
            <p className="text-xl text-muted-foreground mt-8 max-w-xl">
              Deep dives into products that moved metrics, solved problems, and created real value.
            </p>
          </motion.div>
        </div>
      </section>

      {/* AI 4U Case Study */}
      <section className="bg-white text-black py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-1 bg-gradient-to-r from-indigo-500 to-purple-500"></div>
                <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">AI 4U Labs</span>
              </div>
              <p className="text-sm uppercase tracking-widest text-muted-foreground mb-6">AI Development Studio</p>
              
              <h2 className="text-5xl md:text-7xl font-display font-black leading-[0.95] tracking-tight mb-8">
                We Build<br/>
                <span className="italic font-light">Anything</span><br/>
                with AI
              </h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-12 max-w-lg">
                From mobile apps to payment systems to customer support—we ship AI products fast. 
                For startups, Fortune 500s, and everyone in between.
              </p>

              <div className="flex flex-wrap gap-8 mb-12 pb-8 border-b border-black/10">
                <div>
                  <div className="text-4xl font-display font-black">1M+</div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">Users</div>
                </div>
                <div className="w-px bg-black/10"></div>
                <div>
                  <div className="text-4xl font-display font-black">20+</div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">Apps</div>
                </div>
                <div className="w-px bg-black/10"></div>
                <div>
                  <div className="text-4xl font-display font-black">6 Days</div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">Record</div>
                </div>
              </div>

              <a href="https://ai4u.space" target="_blank" className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white rounded-full font-bold hover:bg-black/90 transition-all group">
                Visit ai4u.space <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-zinc-100 rounded-3xl p-12 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full blur-3xl opacity-50"></div>
                <div className="relative z-10">
                  <div className="text-[12vw] md:text-[8vw] font-display font-black leading-none text-black/10">AI</div>
                  <p className="text-sm uppercase tracking-widest text-muted-foreground mt-4">In Production</p>
                  <div className="mt-8 grid grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-xl">
                      <div className="text-3xl font-display font-black">2-4</div>
                      <div className="text-xs uppercase tracking-widest text-muted-foreground">Weeks to MVP</div>
                    </div>
                    <div className="bg-white p-4 rounded-xl">
                      <div className="text-3xl font-display font-black">$500K+</div>
                      <div className="text-xs uppercase tracking-widest text-muted-foreground">Annual Savings</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-black/10"></div>

      {/* Foxie Case Study */}
      <section className="bg-gradient-to-b from-emerald-50 via-green-50 to-white text-black py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative order-2 lg:order-1"
            >
              <div className="absolute -top-20 -left-20 w-96 h-96 bg-emerald-200/50 rounded-full blur-3xl"></div>
              <div className="relative max-w-md mx-auto">
                <img 
                  src={foxieScreen} 
                  alt="Foxie App Screenshot" 
                  className="w-full h-auto rounded-[2.5rem] shadow-2xl"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2"
            >
              <div className="flex items-center gap-4 mb-8">
                <img src={foxieLogo} alt="Foxie" className="w-12 h-12" />
                <span className="text-xs font-mono uppercase tracking-widest text-emerald-600">Consumer Social App</span>
              </div>
              
              <h2 className="text-5xl md:text-7xl font-display font-black leading-[0.95] tracking-tight mb-8" style={{ color: '#3EBF82' }}>
                Connect with the world around you
              </h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-12 max-w-lg">
                Foxie was created to connect you to the world around you through activities in a simple way. 
                Discover new friends, places and things.
              </p>

              <div className="flex flex-wrap gap-8 mb-12 pb-8 border-b border-black/10">
                <div>
                  <div className="text-4xl font-display font-black text-emerald-600">500K+</div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">Users</div>
                </div>
                <div className="w-px bg-black/10"></div>
                <div>
                  <div className="text-4xl font-display font-black text-emerald-600">4.9★</div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">App Store</div>
                </div>
                <div className="w-px bg-black/10"></div>
                <div>
                  <div className="text-4xl font-display font-black text-emerald-600">#10</div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">Top Social</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <a href="https://apps.apple.com/us/app/foxie/id1369279200" target="_blank" className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-500 text-white rounded-full font-bold hover:bg-emerald-600 transition-all group">
                  App Store <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
                <a href="https://foxie.cool" target="_blank" className="inline-flex items-center gap-2 px-8 py-4 border border-emerald-200 rounded-full font-bold hover:bg-emerald-50 transition-all">
                  foxie.cool
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AI Partnerships */}
      <section className="py-24 bg-white border-t border-black/5">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">AI Partnerships</p>
            <h3 className="text-3xl md:text-5xl font-display font-black">
              Every major <span className="italic font-light">AI lab</span>
            </h3>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { name: "OpenAI", tech: "GPT-4, Realtime API" },
              { name: "Anthropic", tech: "Claude, MCP" },
              { name: "Google", tech: "Gemini Pro" },
              { name: "Meta", tech: "Llama 3.2" },
              { name: "Mistral", tech: "Large, EU" },
            ].map((partner, idx) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group bg-zinc-50 hover:bg-black hover:text-white p-6 rounded-2xl transition-all duration-300 cursor-default"
              >
                <div className="font-bold text-lg mb-1">{partner.name}</div>
                <div className="text-xs text-muted-foreground group-hover:text-white/60">{partner.tech}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
