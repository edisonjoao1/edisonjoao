import Layout from "@/components/layout";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  Brain, 
  Smartphone, 
  Rocket, 
  TrendingUp, 
  Users, 
  Zap,
  ArrowRight,
  Mail,
  ExternalLink,
  Target,
  Globe,
  Lightbulb,
  Anchor
} from "lucide-react";
import heroBg from "@assets/generated_images/ethereal_network_of_glowing_nodes_connecting_digital_and_physical_realms.png";
import foxIcon from "@assets/generated_images/minimalist_orange_fox_head_icon_gradient_style.png";
import aiIcon from "@assets/generated_images/futuristic_ai_brain_chip_icon_blue_and_purple.png";
import lotusIcon from "@assets/generated_images/serene_lotus_flower_icon_teal_gradient.png";
import swirlIcon from "@assets/generated_images/abstract_colorful_swirl_icon_creative_art.png";
import robotIcon from "@assets/generated_images/cute_3d_robot_character_icon_for_accountability_app.png";
import paintIcon from "@assets/generated_images/artistic_digital_creation_icon_for_ai_image_app.png";
import sphereIcon from "@assets/generated_images/abstract_colorful_sphere_icon_for_general_ai_app.png";

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
};

const apps = [
  { name: "Foxie", category: "Social Scale", icon: foxIcon, color: "from-orange-500/20 to-red-500/20" },
  { name: "AI Amigo", category: "AI Companion", icon: aiIcon, color: "from-blue-500/20 to-purple-500/20" },
  { name: "Sober AI", category: "Health Tech", icon: lotusIcon, color: "from-emerald-500/20 to-teal-500/20" },
  { name: "SheGPT", category: "Assistant", icon: swirlIcon, color: "from-pink-500/20 to-rose-500/20" },
  { name: "Accountability", category: "Productivity", icon: robotIcon, color: "from-amber-500/20 to-yellow-500/20" },
  { name: "Ai Image Gen", category: "Creative Tools", icon: paintIcon, color: "from-indigo-500/20 to-violet-500/20" },
  { name: "Global AI", category: "Intelligence", icon: sphereIcon, color: "from-cyan-500/20 to-blue-500/20" },
];

export default function Home() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <Layout>
      {/* Hero Section - The Visionary */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ y, opacity }}
          className="absolute inset-0 z-0"
        >
          <img 
            src={heroBg} 
            alt="Visionary Network Background" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background"></div>
        </motion.div>

        <div className="container relative z-10 px-6 pt-20">
          <motion.div 
            variants={fadeIn}
            initial="initial"
            animate="animate"
            className="max-w-4xl"
          >
            <div className="flex items-center gap-3 mb-8 text-primary font-mono uppercase tracking-widest text-sm">
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              Product Leader & Founder
            </div>
            
            <h1 className="text-6xl md:text-8xl font-display font-bold leading-[1.1] tracking-tight mb-10">
              Building Systems.<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/40">Shipping Impact.</span><br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-primary/40">Compounding Value.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed font-light mb-12 border-l-4 border-primary pl-8">
              I connect AI, mobile, and real-world systems to solve hard problems. 
              Tested by loss, driven by outcome. Rebuilding with intent.
            </p>

            <div className="flex flex-wrap gap-6">
              <a 
                href="#work" 
                className="px-10 py-4 bg-primary text-black font-bold rounded-full hover:bg-white transition-all duration-300 transform hover:-translate-y-1 shadow-[0_0_30px_-5px_hsl(var(--primary)_/_0.4)]"
              >
                View Impact
              </a>
              <a 
                href="#vision" 
                className="px-10 py-4 border border-white/10 bg-white/5 rounded-full font-medium hover:bg-white/10 transition-all backdrop-blur-sm"
              >
                My Philosophy
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy / Vision Section */}
      <section id="vision" className="py-32 relative">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4">
              <h2 className="text-sm font-mono uppercase tracking-widest text-primary mb-4">The Mindset</h2>
              <h3 className="text-4xl font-display font-bold mb-6">Tested & Trusted.</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                I lost $3M in the past. That experience stripped away the fluff. 
                Now, I build with absolute clarity: everything must create value, solve a real need, or build a lasting asset.
              </p>
              <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
                <div className="text-3xl font-bold text-white mb-2">10+</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wide">Apps Shipped</div>
              </div>
            </div>

            <div className="lg:col-span-8 grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: Brain,
                  title: "Product Visionary",
                  desc: "I don't just build features; I design ecosystems. Connecting AI, behavior, and business goals into cohesive products."
                },
                {
                  icon: Smartphone,
                  title: "Mobile Architect",
                  desc: "Deep expertise in iOS and app building. From code to user flow to App Store growth."
                },
                {
                  icon: Target,
                  title: "Systems Thinker",
                  desc: "Inputs, outputs, feedback loops. I see how software affects real-world behavior and operations."
                },
                {
                  icon: Anchor,
                  title: "Range & Grit",
                  desc: "From CAD to code, from failure to scale. I learn fast and adapt to any domain to get the job done."
                }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-8 rounded-3xl bg-card border border-white/5 hover:border-primary/30 transition-all group"
                >
                  <item.icon className="w-10 h-10 text-primary mb-6 group-hover:scale-110 transition-transform" />
                  <h4 className="text-xl font-bold mb-3 text-white">{item.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Signature Work Section */}
      <section id="work" className="py-32 bg-white/[0.02]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
            <div>
              <h2 className="text-sm font-mono uppercase tracking-widest text-primary mb-4">Signature Work</h2>
              <h3 className="text-4xl md:text-5xl font-display font-bold">Building at Scale</h3>
            </div>
            <p className="max-w-md text-muted-foreground text-right md:text-left">
              A history of shipping products that drive revenue, engagement, and efficiency.
            </p>
          </div>

          <div className="space-y-32">
            {/* Case Study 1 - AI & Ops */}
            <div className="group">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-wide border border-blue-500/20">AI Efficiency</span>
                    <span className="px-3 py-1 rounded-full bg-white/5 text-white/60 text-xs font-bold uppercase tracking-wide border border-white/10">Operations</span>
                  </div>
                  <h4 className="text-4xl md:text-6xl font-bold mb-6 group-hover:text-primary transition-colors">Ai 4u</h4>
                  <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                    Designed and deployed AI agents to automate complex business workflows. 
                    Moved beyond "chatbots" to build systems that actually do the work.
                  </p>
                  <ul className="space-y-4 mb-10">
                    <li className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white font-bold">40%</div>
                      <span className="text-muted-foreground">Increase in operational efficiency</span>
                    </li>
                    <li className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white font-bold">$2M</div>
                      <span className="text-muted-foreground">Annual client savings achieved</span>
                    </li>
                  </ul>
                  <a href="#" className="inline-flex items-center gap-2 text-white font-bold hover:text-primary transition-colors">
                    Read Case Study <ArrowRight size={16} />
                  </a>
                </div>
                <div className="order-1 lg:order-2 relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 bg-card">
                   <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 opacity-60 group-hover:opacity-80 transition-opacity"></div>
                   <div className="absolute inset-0 flex items-center justify-center">
                     <Zap className="w-32 h-32 text-white/10" />
                   </div>
                   <div className="absolute bottom-8 left-8 right-8 p-6 bg-black/40 backdrop-blur-md rounded-2xl border border-white/10">
                     <div className="text-xs font-mono text-blue-300 mb-1">SYSTEM ARCHITECTURE</div>
                     <div className="text-white font-bold">Multi-Agent Workflow Automation</div>
                   </div>
                </div>
              </div>
            </div>

            {/* Case Study 2 - Mobile Scale */}
            <div className="group">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="order-1 relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 bg-card">
                   <div className="absolute inset-0 bg-gradient-to-bl from-orange-600/20 to-red-600/20 opacity-60 group-hover:opacity-80 transition-opacity"></div>
                   <div className="absolute inset-0 flex items-center justify-center">
                     <Users className="w-32 h-32 text-white/10" />
                   </div>
                   <div className="absolute bottom-8 left-8 right-8 p-6 bg-black/40 backdrop-blur-md rounded-2xl border border-white/10">
                     <div className="text-xs font-mono text-orange-300 mb-1">GROWTH ENGINE</div>
                     <div className="text-white font-bold">Social Viral Loops & Retention</div>
                   </div>
                </div>
                <div className="order-2">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 text-xs font-bold uppercase tracking-wide border border-orange-500/20">Consumer Social</span>
                    <span className="px-3 py-1 rounded-full bg-white/5 text-white/60 text-xs font-bold uppercase tracking-wide border border-white/10">iOS Scale</span>
                  </div>
                  <h4 className="text-4xl md:text-6xl font-bold mb-6 group-hover:text-primary transition-colors">Foxie</h4>
                  <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                    Founded, engineered, and scaled a social app from line 1 of code to mass adoption.
                    Handled the full stack: product, Swift code, and growth strategy.
                  </p>
                  <ul className="space-y-4 mb-10">
                    <li className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white font-bold">500k</div>
                      <span className="text-muted-foreground">Active users reached organically</span>
                    </li>
                    <li className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white font-bold">Top 10</div>
                      <span className="text-muted-foreground">App Store Category Ranking</span>
                    </li>
                  </ul>
                  <a href="#" className="inline-flex items-center gap-2 text-white font-bold hover:text-primary transition-colors">
                    Read Case Study <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ecosystem Section */}
      <section id="ecosystem" className="py-32 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
             <div className="max-w-2xl">
               <h2 className="text-sm font-mono uppercase tracking-widest text-primary mb-4">The Ecosystem</h2>
               <h3 className="text-4xl font-display font-bold mb-6">Portfolio of Products</h3>
               <p className="text-muted-foreground">
                 I don't just build one thing. I build portfolios of products that compound in value.
                 From social to AI utilities.
               </p>
             </div>
             <a 
               href="https://appgallery.io/edison" 
               target="_blank" 
               className="flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 rounded-full transition-all border border-white/10"
             >
               View All on AppGallery <ExternalLink size={16} />
             </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {apps.map((app, idx) => (
              <a 
                href="https://appgallery.io/edison" 
                target="_blank"
                key={idx} 
                className="group relative aspect-[4/5] bg-card border border-white/5 rounded-2xl overflow-hidden hover:border-primary/30 transition-all p-4 flex flex-col items-center justify-center text-center"
              >
                <div className={`absolute inset-0 bg-gradient-to-b ${app.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                <img 
                  src={app.icon} 
                  alt={app.name} 
                  className="w-16 h-16 mb-4 drop-shadow-2xl group-hover:scale-110 transition-transform duration-300" 
                />
                <span className="text-sm font-bold text-white group-hover:text-primary transition-colors">{app.name}</span>
                <span className="text-[10px] text-muted-foreground mt-1 uppercase tracking-wide">{app.category}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / CTA */}
      <section id="contact" className="py-40 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-display font-bold mb-8">
            Let's Build <span className="text-primary">Legacy.</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
            I bring the vision, the engineering, and the grit to get it done.
            Ready to solve hard problems and ship real value.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a href="mailto:hello@edison.ai" className="px-10 py-5 bg-primary text-black font-bold rounded-full hover:bg-white transition-all">
              Start Conversation
            </a>
            <div className="flex gap-4 justify-center">
              <a href="#" className="p-5 bg-white/5 rounded-full hover:bg-white/10 transition-all border border-white/10">
                <Globe size={20} />
              </a>
              <a href="#" className="p-5 bg-white/5 rounded-full hover:bg-white/10 transition-all border border-white/10">
                <Lightbulb size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
