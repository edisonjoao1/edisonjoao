import Layout from "@/components/layout";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  Brain, 
  Smartphone, 
  Rocket, 
  Code, 
  TrendingUp, 
  Users, 
  Layers, 
  Zap,
  ArrowRight,
  Mail,
  Github,
  Linkedin,
  ExternalLink,
  Sparkles,
  Globe,
  Cpu
} from "lucide-react";
import heroImg from "@assets/generated_images/iridescent_holographic_glass_geometric_shape_floating_in_dark_void.png";
import foxIcon from "@assets/generated_images/minimalist_orange_fox_head_icon_gradient_style.png";
import aiIcon from "@assets/generated_images/futuristic_ai_brain_chip_icon_blue_and_purple.png";
import lotusIcon from "@assets/generated_images/serene_lotus_flower_icon_teal_gradient.png";
import swirlIcon from "@assets/generated_images/abstract_colorful_swirl_icon_creative_art.png";
import robotIcon from "@assets/generated_images/cute_3d_robot_character_icon_for_accountability_app.png";
import paintIcon from "@assets/generated_images/artistic_digital_creation_icon_for_ai_image_app.png";
import sphereIcon from "@assets/generated_images/abstract_colorful_sphere_icon_for_general_ai_app.png";

const apps = [
  { name: "Foxie", category: "Social", icon: foxIcon, color: "from-orange-500/20 to-red-500/20" },
  { name: "AI Amigo", category: "AI Companion", icon: aiIcon, color: "from-blue-500/20 to-purple-500/20" },
  { name: "Sober AI", category: "Health", icon: lotusIcon, color: "from-emerald-500/20 to-teal-500/20" },
  { name: "SheGPT", category: "Assistant", icon: swirlIcon, color: "from-pink-500/20 to-rose-500/20" },
  { name: "Accountability Buddie", category: "Productivity", icon: robotIcon, color: "from-amber-500/20 to-yellow-500/20" },
  { name: "Ai Image Create", category: "Creative Tools", icon: paintIcon, color: "from-indigo-500/20 to-violet-500/20" },
  { name: "Global AI", category: "Intelligence", icon: sphereIcon, color: "from-cyan-500/20 to-blue-500/20" },
];

export default function Home() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="container px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center gap-3 mb-8">
                <span className="w-12 h-[1px] bg-white/50"></span>
                <span className="text-sm font-mono tracking-widest uppercase text-white/70">Senior Product Manager</span>
              </div>
              <h1 className="text-6xl md:text-8xl font-display font-bold leading-[0.9] tracking-tighter mb-8">
                VISIONARY<br/>
                <span className="text-white/20">BUILDER</span><br/>
                SPECIALIST
              </h1>
              <p className="text-xl text-muted-foreground max-w-md leading-relaxed mb-10">
                I bridge the gap between complex AI technologies and intuitive user experiences. 
                6+ years scaling products, 8+ years shipping apps.
              </p>
              
              <div className="flex gap-4">
                <a 
                  href="#work"
                  className="px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-white/90 transition-colors"
                >
                  View Work
                </a>
                <a 
                  href="#contact"
                  className="px-8 py-4 border border-white/20 rounded-full font-medium hover:bg-white/10 transition-colors"
                >
                  Contact
                </a>
              </div>
            </motion.div>

            <motion.div 
              style={{ y: y2 }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <img 
                src={heroImg} 
                alt="Abstract Holographic Prism" 
                className="w-full max-w-2xl mx-auto drop-shadow-[0_0_100px_rgba(255,255,255,0.1)]"
              />
            </motion.div>
          </div>
        </div>
        
        {/* Background Gradient Mesh */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_50%,_rgba(255,255,255,0.03),transparent_70%)]"></div>
      </section>

      {/* Bento Grid Section */}
      <section id="about" className="py-32 relative">
        <div className="container px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[minmax(180px,auto)]">
            
            {/* Card 1: Large Intro */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-2 lg:col-span-2 row-span-2 bento-card flex flex-col justify-between bg-gradient-to-br from-white/5 to-transparent"
            >
              <div>
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mb-6">
                  <Brain className="w-5 h-5" />
                </div>
                <h3 className="text-3xl font-display font-bold mb-4">AI Product Specialist</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Specializing in LLM product thinking, RAG systems, and multi-agent design. 
                  I don't just integrate AI; I design workflows that solve real business problems.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-2">
                {["OpenAI", "Claude", "Llama", "Vector DBs", "Agents"].map(tag => (
                  <span key={tag} className="px-3 py-1 rounded-full bg-white/5 border border-white/5 text-xs font-mono">{tag}</span>
                ))}
              </div>
            </motion.div>

            {/* Card 2: iOS */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bento-card group"
            >
              <Smartphone className="w-8 h-8 mb-4 text-white/60 group-hover:text-white transition-colors" />
              <h3 className="text-xl font-bold mb-2">iOS Engineer</h3>
              <p className="text-sm text-muted-foreground">Swift, SwiftUI, App Store monetization & growth.</p>
            </motion.div>

            {/* Card 3: PM */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bento-card group"
            >
              <Rocket className="w-8 h-8 mb-4 text-white/60 group-hover:text-white transition-colors" />
              <h3 className="text-xl font-bold mb-2">Product Lead</h3>
              <p className="text-sm text-muted-foreground">Strategy, roadmapping, execution & user research.</p>
            </motion.div>

            {/* Card 4: Stats */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="md:col-span-2 bento-card flex items-center justify-between px-10 bg-white text-black"
            >
              <div className="text-center">
                <span className="block text-4xl font-bold font-display">500K+</span>
                <span className="text-xs font-mono uppercase tracking-wider opacity-60">Users Scaled</span>
              </div>
              <div className="h-12 w-[1px] bg-black/10"></div>
              <div className="text-center">
                <span className="block text-4xl font-bold font-display">$10M+</span>
                <span className="text-xs font-mono uppercase tracking-wider opacity-60">Revenue Driven</span>
              </div>
              <div className="h-12 w-[1px] bg-black/10"></div>
              <div className="text-center">
                <span className="block text-4xl font-bold font-display">10+</span>
                <span className="text-xs font-mono uppercase tracking-wider opacity-60">Apps Shipped</span>
              </div>
            </motion.div>

             {/* Card 5: UX */}
             <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bento-card group"
            >
              <Layers className="w-8 h-8 mb-4 text-white/60 group-hover:text-white transition-colors" />
              <h3 className="text-xl font-bold mb-2">UX Design</h3>
              <p className="text-sm text-muted-foreground">Figma expert, end-to-end flows & systems.</p>
            </motion.div>

             {/* Card 6: Founder */}
             <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="bento-card group bg-gradient-to-br from-purple-500/10 to-blue-500/10"
            >
              <Sparkles className="w-8 h-8 mb-4 text-white/60 group-hover:text-white transition-colors" />
              <h3 className="text-xl font-bold mb-2">Founder</h3>
              <p className="text-sm text-muted-foreground">Built Foxie from 0 to 500K users.</p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Work Carousel / List */}
      <section id="work" className="py-32">
        <div className="container px-6">
          <h2 className="text-sm font-mono uppercase tracking-widest mb-16 opacity-50">Selected Work</h2>
          
          <div className="space-y-32">
            {/* Project 1 */}
            <div className="group">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                 <div className="order-2 md:order-1">
                   <div className="flex items-center gap-4 mb-6">
                     <span className="text-6xl font-display font-bold text-white/10 group-hover:text-white/30 transition-colors">01</span>
                     <div className="h-[1px] flex-grow bg-white/10"></div>
                   </div>
                   <h3 className="text-4xl md:text-5xl font-bold mb-6">Foxie</h3>
                   <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                     A social app built from scratch that reached top 10 in the App Store. 
                     I handled everything from iOS engineering to growth hacking.
                   </p>
                   <ul className="space-y-4 font-mono text-sm text-white/70">
                     <li className="flex items-center gap-3">
                       <Users size={16} /> 500K+ Active Users
                     </li>
                     <li className="flex items-center gap-3">
                       <TrendingUp size={16} /> 20% Growth via Experiments
                     </li>
                   </ul>
                 </div>
                 <div className="order-1 md:order-2 relative aspect-[4/3] bg-white/5 rounded-xl border border-white/10 overflow-hidden p-8 group-hover:border-white/20 transition-all">
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-transparent opacity-50"></div>
                    <div className="relative h-full w-full flex items-center justify-center border border-white/10 rounded-lg backdrop-blur-sm bg-black/20">
                      <span className="font-display font-bold text-4xl tracking-widest">FOXIE APP</span>
                    </div>
                 </div>
              </div>
            </div>

             {/* Project 2 */}
             <div className="group">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                 <div className="order-1 relative aspect-[4/3] bg-white/5 rounded-xl border border-white/10 overflow-hidden p-8 group-hover:border-white/20 transition-all">
                    <div className="absolute inset-0 bg-gradient-to-bl from-blue-500/20 to-transparent opacity-50"></div>
                    <div className="relative h-full w-full flex items-center justify-center border border-white/10 rounded-lg backdrop-blur-sm bg-black/20">
                      <span className="font-display font-bold text-4xl tracking-widest">DELOITTE</span>
                    </div>
                 </div>
                 <div className="order-2">
                   <div className="flex items-center gap-4 mb-6">
                     <span className="text-6xl font-display font-bold text-white/10 group-hover:text-white/30 transition-colors">02</span>
                     <div className="h-[1px] flex-grow bg-white/10"></div>
                   </div>
                   <h3 className="text-4xl md:text-5xl font-bold mb-6">Deloitte Product</h3>
                   <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                     Led a cross-functional team scaling a B2B platform to 40K+ users and $10M+ revenue.
                     Focus on enterprise stability and release velocity.
                   </p>
                   <ul className="space-y-4 font-mono text-sm text-white/70">
                     <li className="flex items-center gap-3">
                       <Globe size={16} /> 40K+ Business Users
                     </li>
                     <li className="flex items-center gap-3">
                       <Zap size={16} /> 34% Faster Release Cycles
                     </li>
                   </ul>
                 </div>
              </div>
            </div>

             {/* Project 3 */}
             <div className="group">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                 <div className="order-2 md:order-1">
                   <div className="flex items-center gap-4 mb-6">
                     <span className="text-6xl font-display font-bold text-white/10 group-hover:text-white/30 transition-colors">03</span>
                     <div className="h-[1px] flex-grow bg-white/10"></div>
                   </div>
                   <h3 className="text-4xl md:text-5xl font-bold mb-6">Ai 4u</h3>
                   <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                     Operational efficiency tools powered by LLMs. Designed agents that reduced support load and automated complex workflows.
                   </p>
                   <ul className="space-y-4 font-mono text-sm text-white/70">
                     <li className="flex items-center gap-3">
                       <Cpu size={16} /> Multi-Agent Architecture
                     </li>
                     <li className="flex items-center gap-3">
                       <TrendingUp size={16} /> $2M+ Annual Savings
                     </li>
                   </ul>
                 </div>
                 <div className="order-1 md:order-2 relative aspect-[4/3] bg-white/5 rounded-xl border border-white/10 overflow-hidden p-8 group-hover:border-white/20 transition-all">
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-transparent opacity-50"></div>
                    <div className="relative h-full w-full flex items-center justify-center border border-white/10 rounded-lg backdrop-blur-sm bg-black/20">
                      <span className="font-display font-bold text-4xl tracking-widest">AI 4U</span>
                    </div>
                 </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* App Gallery Marquee / Grid */}
      <section id="apps" className="py-32 bg-white/5 border-y border-white/5">
        <div className="container px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
             <div>
               <h2 className="text-4xl font-display font-bold mb-2">App Ecosystem</h2>
               <p className="text-muted-foreground">10+ Apps shipped to the App Store.</p>
             </div>
             <a href="https://appgallery.io/edison" target="_blank" className="flex items-center gap-2 text-sm font-bold border-b border-white/30 pb-1 hover:text-white hover:border-white transition-all">
               View All on AppGallery <ExternalLink size={14} />
             </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {apps.map((app, idx) => (
              <a 
                href="https://appgallery.io/edison" 
                target="_blank"
                key={idx} 
                className="group relative aspect-square bg-black border border-white/10 rounded-2xl overflow-hidden hover:border-white/30 transition-all"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${app.color} opacity-20 group-hover:opacity-40 transition-opacity`}></div>
                <img src={app.icon} alt={app.name} className="absolute inset-0 w-full h-full object-cover p-4 group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 flex items-end p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-xs font-bold truncate w-full text-center">{app.name}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / Footer CTA */}
      <section id="contact" className="py-40 text-center">
        <div className="container px-6">
          <h2 className="text-5xl md:text-8xl font-display font-bold tracking-tighter mb-12">
            LET'S BUILD<br/><span className="text-white/20">THE FUTURE</span>
          </h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
             <a href="mailto:hello@edison.ai" className="text-xl hover:text-white/70 transition-colors flex items-center gap-2">
               <Mail className="inline" /> hello@edison.ai
             </a>
             <span className="hidden md:inline text-white/20">/</span>
             <div className="flex gap-6">
               <a href="#" className="text-xl hover:text-white/70 transition-colors">LinkedIn</a>
               <a href="#" className="text-xl hover:text-white/70 transition-colors">GitHub</a>
               <a href="#" className="text-xl hover:text-white/70 transition-colors">Twitter</a>
             </div>
          </div>
        </div>
      </section>

    </Layout>
  );
}
