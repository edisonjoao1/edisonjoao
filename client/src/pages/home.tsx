import Layout from "@/components/layout";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  Brain, 
  Smartphone, 
  Rocket, 
  Zap,
  ArrowRight,
  ArrowUpRight,
  Globe,
  PenTool,
  Layers
} from "lucide-react";
import heroBg from "@assets/generated_images/abstract_liquid_chrome_metal_flowing_in_dark_void_with_iridescent_reflections.png";
import foxIcon from "@assets/generated_images/minimalist_orange_fox_head_icon_gradient_style.png";
import aiIcon from "@assets/generated_images/futuristic_ai_brain_chip_icon_blue_and_purple.png";
import lotusIcon from "@assets/generated_images/serene_lotus_flower_icon_teal_gradient.png";
import swirlIcon from "@assets/generated_images/abstract_colorful_swirl_icon_creative_art.png";
import robotIcon from "@assets/generated_images/cute_3d_robot_character_icon_for_accountability_app.png";
import paintIcon from "@assets/generated_images/artistic_digital_creation_icon_for_ai_image_app.png";
import sphereIcon from "@assets/generated_images/abstract_colorful_sphere_icon_for_general_ai_app.png";

const apps = [
  { name: "Foxie", category: "Social", icon: foxIcon, color: "from-orange-500 to-red-500" },
  { name: "AI Amigo", category: "Companion", icon: aiIcon, color: "from-blue-500 to-purple-500" },
  { name: "Sober AI", category: "Health", icon: lotusIcon, color: "from-emerald-500 to-teal-500" },
  { name: "SheGPT", category: "Assistant", icon: swirlIcon, color: "from-pink-500 to-rose-500" },
  { name: "Accountability", category: "Productivity", icon: robotIcon, color: "from-amber-500 to-yellow-500" },
  { name: "Ai Image", category: "Creative", icon: paintIcon, color: "from-indigo-500 to-violet-500" },
  { name: "Global AI", category: "Intelligence", icon: sphereIcon, color: "from-cyan-500 to-blue-500" },
];

export default function Home() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 400]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);
  const scale = useTransform(scrollY, [0, 500], [1, 1.1]);

  return (
    <Layout>
      <div className="noise-bg"></div>

      {/* HERO SECTION - ICONIC & MASSIVE */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ y, scale, opacity }}
          className="absolute inset-0 z-0"
        >
          <img 
            src={heroBg} 
            alt="Liquid Chrome Abstract" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent"></div>
        </motion.div>

        <div className="container relative z-10 px-6 pt-32 md:pt-0">
          <div className="flex flex-col items-center text-center">
            
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1 className="text-[15vw] leading-[0.8] font-display font-black tracking-tighter mix-blend-screen select-none">
                VISIONARY
              </h1>
              <h1 className="text-[15vw] leading-[0.8] font-display font-black tracking-tighter text-transparent text-stroke-white select-none" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.5)" }}>
                BUILDER
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="mt-12 max-w-xl mx-auto space-y-8"
            >
              <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed">
                <span className="text-white font-medium">Tested by loss. Driven by outcome.</span><br/>
                Architecting systems that bridge AI, mobile, and reality.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="#work" 
                  className="group px-8 py-4 bg-white text-black rounded-full font-bold uppercase tracking-wider hover:bg-white/90 transition-all flex items-center justify-center gap-2"
                >
                  View Selected Work <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.3em] opacity-50 animate-bounce">
          Scroll to Explore
        </div>
      </section>

      {/* MANIFESTO / VISION */}
      <section id="vision" className="py-32 md:py-48 relative z-10 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <h2 className="text-sm font-mono uppercase tracking-widest mb-8 opacity-50">The Philosophy</h2>
            <p className="text-3xl md:text-6xl font-display font-bold leading-tight">
              "I lost $3M. I'm rebuilding with <span className="text-white text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">absolute intent</span>. 
              Every product must solve a problem, create value, or build a legacy."
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mt-24 border-t border-white/10 pt-12">
             {[
               { icon: Brain, title: "Product Vision", desc: "Connecting AI to real user needs." },
               { icon: Smartphone, title: "iOS Scale", desc: "Building apps that reach millions." },
               { icon: Zap, title: "System Impact", desc: "Inputs, outputs, compounding value." },
               { icon: PenTool, title: "Range", desc: "From CAD to Code. No limits." },
             ].map((item, idx) => (
               <div key={idx} className="group">
                 <item.icon className="w-8 h-8 mb-4 text-white/50 group-hover:text-white transition-colors" />
                 <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                 <p className="text-sm text-muted-foreground">{item.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* SELECTED WORK - PARALLAX / STICKY FEEL */}
      <section id="work" className="py-32 bg-white/[0.02]">
        <div className="container mx-auto px-6">
          <h2 className="text-[12vw] font-display font-black tracking-tighter leading-none mb-24 opacity-10 select-none">
            IMPACT
          </h2>

          <div className="space-y-40">
            
            {/* Project 1 */}
            <div className="sticky top-32 group">
              <div className="bg-card border border-white/10 rounded-3xl overflow-hidden p-1">
                <div className="grid lg:grid-cols-2 bg-black rounded-[1.3rem]">
                   <div className="p-12 flex flex-col justify-between h-full min-h-[500px]">
                      <div>
                        <div className="flex items-center gap-3 mb-6">
                          <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                          <span className="font-mono text-xs uppercase tracking-widest opacity-60">01 / AI & Operations</span>
                        </div>
                        <h3 className="text-6xl font-display font-bold mb-6">Ai 4u</h3>
                        <p className="text-xl text-muted-foreground leading-relaxed max-w-md">
                          Operational efficiency engines powered by Multi-Agent Systems. 
                          Automating the impossible.
                        </p>
                      </div>
                      
                      <div>
                        <div className="grid grid-cols-2 gap-8 mb-12 border-t border-white/10 pt-8">
                          <div>
                            <div className="text-4xl font-display font-bold text-white mb-1">40%</div>
                            <div className="text-xs font-mono uppercase opacity-50">Efficiency Gain</div>
                          </div>
                          <div>
                            <div className="text-4xl font-display font-bold text-white mb-1">$2M+</div>
                            <div className="text-xs font-mono uppercase opacity-50">Client Savings</div>
                          </div>
                        </div>
                        <a href="#" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider hover:text-white/70 transition-colors">
                          View Case Study <ArrowUpRight size={16} />
                        </a>
                      </div>
                   </div>
                   <div className="relative min-h-[400px] lg:min-h-full bg-gradient-to-br from-blue-900/20 to-indigo-900/20 border-t lg:border-t-0 lg:border-l border-white/10">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-64 h-64 bg-blue-500/20 rounded-full blur-[100px]"></div>
                        <h4 className="relative z-10 text-[8vw] font-display font-black text-white/10 mix-blend-overlay">AI4U</h4>
                      </div>
                   </div>
                </div>
              </div>
            </div>

             {/* Project 2 */}
             <div className="sticky top-36 group">
              <div className="bg-card border border-white/10 rounded-3xl overflow-hidden p-1 shadow-2xl shadow-black">
                <div className="grid lg:grid-cols-2 bg-black rounded-[1.3rem]">
                   <div className="p-12 flex flex-col justify-between h-full min-h-[500px] order-2 lg:order-1">
                      <div>
                        <div className="flex items-center gap-3 mb-6">
                          <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                          <span className="font-mono text-xs uppercase tracking-widest opacity-60">02 / Consumer Social</span>
                        </div>
                        <h3 className="text-6xl font-display font-bold mb-6">Foxie</h3>
                        <p className="text-xl text-muted-foreground leading-relaxed max-w-md">
                          Architected viral growth loops. 
                          Scaled from zero to massive adoption purely through product engineering.
                        </p>
                      </div>
                      
                      <div>
                        <div className="grid grid-cols-2 gap-8 mb-12 border-t border-white/10 pt-8">
                          <div>
                            <div className="text-4xl font-display font-bold text-white mb-1">500K</div>
                            <div className="text-xs font-mono uppercase opacity-50">Active Users</div>
                          </div>
                          <div>
                            <div className="text-4xl font-display font-bold text-white mb-1">#10</div>
                            <div className="text-xs font-mono uppercase opacity-50">App Store Rank</div>
                          </div>
                        </div>
                        <a href="#" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider hover:text-white/70 transition-colors">
                          View Case Study <ArrowUpRight size={16} />
                        </a>
                      </div>
                   </div>
                   <div className="order-1 lg:order-2 relative min-h-[400px] lg:min-h-full bg-gradient-to-bl from-orange-900/20 to-red-900/20 border-b lg:border-b-0 lg:border-l border-white/10">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-64 h-64 bg-orange-500/20 rounded-full blur-[100px]"></div>
                        <h4 className="relative z-10 text-[8vw] font-display font-black text-white/10 mix-blend-overlay">FOXIE</h4>
                      </div>
                   </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ECOSYSTEM WALL */}
      <section id="ecosystem" className="py-32">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-16">
            <h2 className="text-4xl md:text-6xl font-display font-bold">The Ecosystem</h2>
            <a href="https://appgallery.io/edison" target="_blank" className="text-sm font-mono uppercase tracking-widest hover:underline">
              View All Apps ↗
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-white/10 border border-white/10">
            {apps.map((app, idx) => (
              <a 
                href="https://appgallery.io/edison" 
                target="_blank"
                key={idx}
                className="aspect-square bg-black p-8 flex flex-col justify-between hover:bg-white/5 transition-colors group relative overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${app.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                <div className="flex justify-between items-start">
                  <span className="font-mono text-[10px] opacity-50">0{idx + 1}</span>
                  <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity -translate-y-2 group-hover:translate-y-0" />
                </div>

                <div className="relative z-10">
                   <img src={app.icon} alt={app.name} className="w-12 h-12 mb-4 rounded-xl shadow-2xl group-hover:scale-110 transition-transform duration-300" />
                   <h4 className="font-bold text-lg leading-none mb-1">{app.name}</h4>
                   <p className="text-[10px] uppercase tracking-wider opacity-50">{app.category}</p>
                </div>
              </a>
            ))}
             {/* 'More' Card */}
             <a 
                href="https://appgallery.io/edison" 
                target="_blank"
                className="aspect-square bg-white text-black p-8 flex flex-col justify-between hover:bg-white/90 transition-colors"
              >
                <div className="flex justify-between items-start">
                  <span className="font-mono text-[10px] opacity-50">ALL</span>
                  <ArrowUpRight size={14} />
                </div>
                <div>
                   <h4 className="font-display font-black text-3xl leading-none mb-1">10+</h4>
                   <p className="text-[10px] uppercase tracking-wider font-bold">Total Apps Shipped</p>
                </div>
              </a>
          </div>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section id="contact" className="py-32 md:py-48 text-center">
        <div className="container px-6">
          <h2 className="text-5xl md:text-8xl font-display font-black tracking-tighter mb-8">
            READY TO <br className="md:hidden"/>
            <span className="text-transparent text-stroke-white hover:text-white transition-colors duration-500 cursor-pointer" style={{ WebkitTextStroke: "1px white" }}>BUILD LEGACY?</span>
          </h2>
          <div className="flex justify-center">
            <a href="mailto:hello@edison.ai" className="relative group overflow-hidden rounded-full bg-white text-black px-10 py-4 font-bold uppercase tracking-wider">
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">Initiate Contact</span>
              <div className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-[0.22,1,0.36,1]"></div>
            </a>
          </div>
        </div>
      </section>

    </Layout>
  );
}
