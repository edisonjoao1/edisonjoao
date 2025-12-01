import Layout from "@/components/layout";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { 
  Brain, 
  Smartphone, 
  Rocket, 
  Zap, 
  ArrowRight, 
  ArrowUpRight, 
  PenTool,
  Filter,
  CheckCircle2,
  Send,
  ExternalLink
} from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

import heroBg from "@assets/generated_images/abstract_liquid_chrome_metal_flowing_in_dark_void_with_iridescent_reflections.png";
import foxIcon from "@assets/generated_images/minimalist_orange_fox_head_icon_gradient_style.png";
import aiIcon from "@assets/generated_images/futuristic_ai_brain_chip_icon_blue_and_purple.png";
import lotusIcon from "@assets/generated_images/serene_lotus_flower_icon_teal_gradient.png";
import swirlIcon from "@assets/generated_images/abstract_colorful_swirl_icon_creative_art.png";
import robotIcon from "@assets/generated_images/cute_3d_robot_character_icon_for_accountability_app.png";
import paintIcon from "@assets/generated_images/artistic_digital_creation_icon_for_ai_image_app.png";
import sphereIcon from "@assets/generated_images/abstract_colorful_sphere_icon_for_general_ai_app.png";
import foxieScreen from "@assets/generated_images/foxie_app_screenshot.png";
import aiAmigoScreen from "@assets/generated_images/ai_amigo_app_screenshot.png";
import soberScreen from "@assets/generated_images/sober_ai_app_screenshot.png";

// Real App Store Data
const apps = [
  { 
    name: "Foxie.", 
    category: "Social", 
    desc: "Post. Connect. Engage. Go Out.",
    icon: foxIcon, 
    color: "from-amber-400 to-orange-500", 
    url: "https://apps.apple.com/us/app/foxie/id1369279200",
    rating: "4.9"
  },
  { 
    name: "ai amigo", 
    category: "Health", 
    desc: "AI Friend, Human Understanding",
    icon: aiIcon, 
    color: "from-amber-300 to-amber-500", 
    url: "https://apps.apple.com/us/app/ai-amigo/id6670725604",
    rating: "5.0"
  },
  { 
    name: "sober ai", 
    category: "Health", 
    desc: "Sobriety Tracking & AI Support",
    icon: lotusIcon, 
    color: "from-stone-200 to-stone-400", 
    url: "https://apps.apple.com/us/app/sober-ai/id6740759999",
    rating: "5.0"
  },
  { 
    name: "SheGPT", 
    category: "Health", 
    desc: "AI for women",
    icon: swirlIcon, 
    color: "from-orange-400 to-rose-500", 
    url: "https://apps.apple.com/us/app/shegpt/id6744063469",
    rating: null
  },
  { 
    name: "Accountability Buddie", 
    category: "Productivity", 
    desc: "AI-Powered Goal & Habit Coach",
    icon: robotIcon, 
    color: "from-teal-400 to-cyan-500", 
    url: "https://apps.apple.com/us/app/accountability-buddie/id6742691299",
    rating: null
  },
  { 
    name: "Ai Image Create", 
    category: "Creative", 
    desc: "AI Art & Image Creator",
    icon: paintIcon, 
    color: "from-blue-500 to-indigo-600", 
    url: "https://apps.apple.com/us/app/ai-image-create/id6744127405",
    rating: null
  },
  { 
    name: "Inteligencia Artificial", 
    category: "AI Assistant", 
    desc: "IA en Español",
    icon: sphereIcon, 
    color: "from-blue-500 to-blue-700", 
    url: "https://apps.apple.com/us/app/inteligencia-artificial-ia/id6743879085",
    rating: null
  },
];

// Form Schema
const contactSchema = z.object({
  email: z.string().email(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export default function Home() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 400]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);
  const [filter, setFilter] = useState("All");
  const { toast } = useToast();

  const categories = ["All", "Social", "Health", "Productivity", "Creative", "AI Assistant"];
  
  const filteredApps = filter === "All" 
    ? apps 
    : apps.filter(app => app.category === filter);

  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: { email: "", message: "" },
  });

  function onSubmit(data: z.infer<typeof contactSchema>) {
    console.log(data);
    toast({
      title: "Message Sent",
      description: "I'll get back to you as soon as possible.",
    });
    form.reset();
  }

  return (
    <Layout>
      <div className="noise-bg"></div>

      {/* HERO SECTION - Dark to Light Contrast */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black text-white">
        <motion.div 
          style={{ y, opacity }}
          className="absolute inset-0 z-0"
        >
          <img 
            src={heroBg} 
            alt="Liquid Chrome Abstract" 
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-background"></div>
        </motion.div>

        <div className="container relative z-10 px-6 pt-32 md:pt-0">
          <div className="flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1 className="text-[15vw] leading-[0.8] font-display font-black tracking-tighter mix-blend-overlay select-none text-white">
                VISIONARY
              </h1>
              <h1 className="text-[15vw] leading-[0.8] font-display font-black tracking-tighter text-transparent text-stroke-white select-none opacity-80" style={{ WebkitTextStroke: "1px white" }}>
                BUILDER
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="mt-12 max-w-xl mx-auto space-y-8"
            >
              <p className="text-lg md:text-xl font-medium leading-relaxed text-white">
                Architecting systems that bridge AI, mobile, and reality.
                <br/>
                <span className="text-amber-400">Tested by loss. Driven by outcome.</span>
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
      </section>

      {/* MANIFESTO - Bold & Dramatic */}
      <section id="vision" className="relative z-10 overflow-hidden">
        {/* Giant Quote Section */}
        <div className="min-h-screen flex items-center justify-center bg-zinc-950 text-white relative py-32">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            <div className="absolute top-1/3 right-0 w-72 h-72 bg-indigo-500/10 rounded-full blur-[100px]"></div>
            <div className="absolute bottom-1/3 left-0 w-72 h-72 bg-purple-500/10 rounded-full blur-[100px]"></div>
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="max-w-5xl mx-auto text-center"
            >
              <div className="inline-block px-4 py-1 rounded-full border border-white/20 text-xs font-mono uppercase tracking-widest mb-12 text-white/60">
                The Philosophy
              </div>
              <h2 className="text-4xl md:text-7xl lg:text-8xl font-display font-black leading-[0.9] tracking-tight">
                I lost <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">$3M</span>.
              </h2>
              <h2 className="text-4xl md:text-7xl lg:text-8xl font-display font-black leading-[0.9] tracking-tight mt-2">
                I'm rebuilding with
              </h2>
              <h2 className="text-4xl md:text-7xl lg:text-8xl font-display font-black leading-[0.9] tracking-tight mt-2">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">absolute intent</span>.
              </h2>
              <p className="text-xl md:text-2xl text-white/50 mt-12 max-w-2xl mx-auto font-light">
                Every product must solve a problem, create value, or build a legacy.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Expertise Grid */}
        <div className="bg-white py-24">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-0 border border-black/10">
              {[
                { icon: Brain, title: "AI Product", desc: "Building intelligent systems that understand and serve real human needs.", gradient: "from-blue-500 to-indigo-600" },
                { icon: Smartphone, title: "iOS at Scale", desc: "Engineering apps that reach millions with flawless user experience.", gradient: "from-purple-500 to-pink-500" },
                { icon: Zap, title: "System Impact", desc: "Creating compounding value through strategic product architecture.", gradient: "from-amber-500 to-orange-500" },
                { icon: PenTool, title: "Full Range", desc: "From CAD drafting to Swift code. No creative limits.", gradient: "from-emerald-500 to-teal-500" },
              ].map((item, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="group p-10 border-r border-b border-black/10 last:border-r-0 hover:bg-zinc-50 transition-all duration-500 relative overflow-hidden"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* THE BUILT UNIVERSE - Immersive Showcase */}
      <section className="py-32 md:py-48 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px]"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-24"
          >
            <h2 className="text-[8vw] md:text-[6vw] font-display font-black tracking-tighter leading-none mb-6">
              THE BUILT <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">UNIVERSE</span>
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              From concept to App Store. A portfolio of products that solve real problems, 
              generate real revenue, and touch real lives.
            </p>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-32">
            {[
              { value: "10+", label: "Apps Shipped", sub: "iOS & Web" },
              { value: "500K+", label: "Total Users", sub: "And Growing" },
              { value: "#10", label: "App Store Rank", sub: "Category Peak" },
              { value: "$2M+", label: "Client Value", sub: "Delivered" },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="text-center p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-white/30 transition-colors group"
              >
                <div className="text-4xl md:text-5xl font-display font-black mb-2 bg-gradient-to-r from-white to-white/70 text-transparent bg-clip-text group-hover:from-cyan-400 group-hover:to-purple-400 transition-all duration-500">
                  {stat.value}
                </div>
                <div className="text-sm font-bold uppercase tracking-widest mb-1">{stat.label}</div>
                <div className="text-xs text-white/40">{stat.sub}</div>
              </motion.div>
            ))}
          </div>

          {/* Phone Mockup Showcase */}
          <div className="relative">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex justify-center items-end gap-4 md:gap-8 perspective-1000"
            >
              {/* Left Phone - Sober AI */}
              <motion.div
                initial={{ opacity: 0, x: -100, rotateY: 15 }}
                whileInView={{ opacity: 1, x: 0, rotateY: 5 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="hidden md:block relative group"
              >
                <div className="w-48 lg:w-56 rounded-[2.5rem] bg-gradient-to-b from-zinc-800 to-zinc-900 p-2 shadow-2xl transform hover:scale-105 hover:rotate-0 transition-all duration-500" style={{ transform: "rotateY(5deg) rotateX(2deg)" }}>
                  <div className="rounded-[2rem] overflow-hidden bg-black aspect-[9/19.5]">
                    <img src={soberScreen} alt="Sober AI" className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="font-bold text-sm">Sober AI</div>
                  <div className="text-xs text-white/50">Health & Wellness</div>
                </div>
              </motion.div>

              {/* Center Phone - Foxie (Hero) */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative group z-10"
              >
                <div className="absolute -inset-8 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="w-64 md:w-72 lg:w-80 rounded-[3rem] bg-gradient-to-b from-zinc-700 to-zinc-900 p-2 shadow-2xl transform hover:scale-105 transition-all duration-500 relative">
                  <div className="rounded-[2.5rem] overflow-hidden bg-black aspect-[9/19.5]">
                    <img src={foxieScreen} alt="Foxie" className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full"></div>
                </div>
                <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 text-center">
                  <div className="font-bold text-lg">Foxie</div>
                  <div className="text-xs text-white/50">Social • 500K Users</div>
                  <a href="https://foxie.cool" target="_blank" className="inline-flex items-center gap-1 text-xs text-cyan-400 hover:text-cyan-300 mt-1 transition-colors">
                    Visit Site <ArrowUpRight size={12} />
                  </a>
                </div>
              </motion.div>

              {/* Right Phone - AI Amigo */}
              <motion.div
                initial={{ opacity: 0, x: 100, rotateY: -15 }}
                whileInView={{ opacity: 1, x: 0, rotateY: -5 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="hidden md:block relative group"
              >
                <div className="w-48 lg:w-56 rounded-[2.5rem] bg-gradient-to-b from-zinc-800 to-zinc-900 p-2 shadow-2xl transform hover:scale-105 hover:rotate-0 transition-all duration-500" style={{ transform: "rotateY(-5deg) rotateX(2deg)" }}>
                  <div className="rounded-[2rem] overflow-hidden bg-black aspect-[9/19.5]">
                    <img src={aiAmigoScreen} alt="AI Amigo" className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="font-bold text-sm">AI Amigo</div>
                  <div className="text-xs text-white/50">AI Companion</div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Tech Stack Pills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-32 text-center"
          >
            <p className="text-xs uppercase tracking-widest text-white/40 mb-6">Built With</p>
            <div className="flex flex-wrap justify-center gap-3">
              {["Swift", "React Native", "Node.js", "OpenAI", "Firebase", "PostgreSQL", "AWS", "Figma"].map((tech) => (
                <span key={tech} className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm font-medium hover:bg-white/10 hover:border-white/20 transition-colors cursor-default">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* SELECTED WORK - Full Width Impact */}
      <section id="work" className="relative">
        {/* Section Header */}
        <div className="bg-white py-24 border-b border-black/5">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6"
            >
              <div>
                <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4">Selected Work</div>
                <h2 className="text-5xl md:text-7xl font-display font-black tracking-tight">Case Studies</h2>
              </div>
              <p className="text-lg text-muted-foreground max-w-md">
                Deep dives into products that moved metrics, solved problems, and created real value.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Project 1 - AI4U Full Width */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="min-h-screen bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 text-white relative overflow-hidden"
        >
          <div className="absolute inset-0">
            <div className="absolute top-20 right-20 w-96 h-96 bg-white/10 rounded-full blur-[100px]"></div>
            <div className="absolute bottom-20 left-20 w-72 h-72 bg-blue-400/20 rounded-full blur-[80px]"></div>
          </div>
          
          <div className="container mx-auto px-6 py-32 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-3 mb-8">
                  <span className="w-3 h-3 bg-white rounded-full"></span>
                  <span className="font-mono text-sm uppercase tracking-widest opacity-80">01 / AI & Operations</span>
                </div>
                <h3 className="text-6xl md:text-8xl font-display font-black mb-8 leading-none">Ai 4u</h3>
                <p className="text-xl md:text-2xl opacity-80 leading-relaxed mb-12 max-w-lg">
                  Multi-Agent AI systems that automate complex operational workflows. 
                  Enterprise-grade intelligence for real business outcomes.
                </p>
                
                <div className="grid grid-cols-2 gap-8 mb-12">
                  <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
                    <div className="text-5xl font-display font-black mb-2">40%</div>
                    <div className="text-sm uppercase tracking-widest opacity-70">Efficiency Gain</div>
                  </div>
                  <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
                    <div className="text-5xl font-display font-black mb-2">$2M+</div>
                    <div className="text-sm uppercase tracking-widest opacity-70">Client Savings</div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="aspect-square bg-white/5 rounded-3xl backdrop-blur-sm border border-white/10 flex items-center justify-center">
                  <div className="text-[20vw] font-display font-black opacity-20 select-none">AI</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Project 2 - Foxie Full Width */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="min-h-screen bg-gradient-to-br from-cyan-500 via-teal-500 to-purple-600 text-white relative overflow-hidden"
        >
          <div className="absolute inset-0">
            <div className="absolute top-40 left-20 w-96 h-96 bg-white/10 rounded-full blur-[100px]"></div>
            <div className="absolute bottom-40 right-20 w-72 h-72 bg-purple-400/20 rounded-full blur-[80px]"></div>
          </div>
          
          <div className="container mx-auto px-6 py-32 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1 relative">
                <div className="aspect-[3/4] max-w-sm mx-auto">
                  <div className="w-full h-full rounded-[3rem] bg-gradient-to-b from-zinc-800 to-zinc-900 p-3 shadow-2xl">
                    <div className="w-full h-full rounded-[2.5rem] overflow-hidden bg-black">
                      <img src={foxieScreen} alt="Foxie App" className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center gap-3 mb-8">
                  <span className="w-3 h-3 bg-white rounded-full"></span>
                  <span className="font-mono text-sm uppercase tracking-widest opacity-80">02 / Consumer Social</span>
                </div>
                <h3 className="text-6xl md:text-8xl font-display font-black mb-8 leading-none">Foxie</h3>
                <p className="text-xl md:text-2xl opacity-80 leading-relaxed mb-12 max-w-lg">
                  Social discovery reimagined. Connecting people through activities and shared experiences in the real world.
                </p>
                
                <div className="grid grid-cols-2 gap-8 mb-12">
                  <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
                    <div className="text-5xl font-display font-black mb-2">500K</div>
                    <div className="text-sm uppercase tracking-widest opacity-70">Active Users</div>
                  </div>
                  <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
                    <div className="text-5xl font-display font-black mb-2">#10</div>
                    <div className="text-sm uppercase tracking-widest opacity-70">App Store Rank</div>
                  </div>
                </div>
                
                <a href="https://foxie.cool" target="_blank" className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-bold uppercase tracking-wider hover:bg-white/90 transition-all group">
                  Visit Foxie <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ECOSYSTEM - Bold Grid */}
      <section id="ecosystem" className="py-32 bg-zinc-950 text-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-7xl font-display font-black tracking-tight mb-6">The Ecosystem</h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto mb-12">
              A growing portfolio of products across AI, health, social, and productivity.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map(cat => (
                <button 
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wide border transition-all ${
                    filter === cat 
                      ? "bg-white text-black border-white" 
                      : "bg-transparent text-white/70 border-white/20 hover:border-white/50 hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <AnimatePresence mode="popLayout">
              {filteredApps.map((app, idx) => (
                <motion.a 
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: idx * 0.05 }}
                  href={app.url} 
                  target="_blank"
                  key={app.name}
                  className="rounded-3xl p-6 flex flex-col justify-between group relative overflow-hidden bg-white/5 border border-white/10 hover:border-white/30 transition-all duration-500 min-h-[280px]"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${app.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                  
                  <div className="flex justify-between items-start">
                    {app.rating && (
                      <span className="px-2 py-1 rounded-full bg-white/10 text-xs font-bold">{app.rating} ★</span>
                    )}
                    <ArrowUpRight size={18} className="opacity-0 group-hover:opacity-100 transition-all -translate-y-2 translate-x-2 group-hover:translate-y-0 group-hover:translate-x-0 ml-auto" />
                  </div>

                  <div className="relative z-10">
                    <img src={app.icon} alt={app.name} className="w-16 h-16 mb-4 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-500" />
                    <h4 className="font-bold text-lg leading-tight mb-1">{app.name}</h4>
                    <p className="text-xs text-white/70 mb-2 line-clamp-2">{app.desc}</p>
                    <p className="text-[10px] uppercase tracking-wider text-white/40">{app.category}</p>
                  </div>
                </motion.a>
              ))}
            </AnimatePresence>
             
            {/* Stats Card */}
            <motion.a 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              href="https://apps.apple.com/us/developer/edison-espinosa/id1368707952" 
              target="_blank"
              className="rounded-3xl bg-gradient-to-br from-indigo-600 to-purple-600 p-6 flex flex-col justify-between hover:scale-105 transition-all duration-500 group min-h-[280px]"
            >
              <div className="flex justify-between items-start">
                <span className="font-mono text-xs opacity-70">APP STORE</span>
                <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
              <div>
                <h4 className="font-display font-black text-5xl leading-none mb-2">10+</h4>
                <p className="text-sm uppercase tracking-wider font-bold opacity-80">Live on iOS</p>
                <p className="text-xs opacity-60 mt-2">View all on App Store</p>
              </div>
            </motion.a>
          </div>
        </div>
      </section>

      {/* CONTACT - Premium & Bold */}
      <section id="contact" className="relative overflow-hidden">
        <div className="min-h-screen flex items-center justify-center bg-white py-32">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-black/10 to-transparent"></div>
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-indigo-100 rounded-full blur-[120px] opacity-50"></div>
            <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-purple-100 rounded-full blur-[120px] opacity-50"></div>
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-6">Get In Touch</div>
                <h2 className="text-5xl md:text-7xl font-display font-black tracking-tight mb-8">
                  Let's Build<br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Something Great</span>
                </h2>
                <p className="text-xl text-muted-foreground max-w-md mb-12">
                  Have a project in mind? I'm always open to discussing product design work, consulting opportunities, or partnerships.
                </p>
                <div className="flex flex-wrap gap-4 text-sm">
                  <a href="mailto:hello@edison.dev" className="px-6 py-3 rounded-full border border-black/10 hover:border-black hover:bg-black hover:text-white transition-all">
                    hello@edison.dev
                  </a>
                  <a href="#" className="px-6 py-3 rounded-full border border-black/10 hover:border-black hover:bg-black hover:text-white transition-all">
                    LinkedIn
                  </a>
                  <a href="#" className="px-6 py-3 rounded-full border border-black/10 hover:border-black hover:bg-black hover:text-white transition-all">
                    Twitter
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-zinc-950 text-white p-10 md:p-12 rounded-3xl shadow-2xl"
              >
                <h3 className="text-2xl font-display font-bold mb-8">Send a Message</h3>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="uppercase text-xs font-bold tracking-widest text-white/60">Email Address</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="you@company.com" 
                              {...field} 
                              className="bg-white/10 border-white/10 focus:border-white/30 text-white placeholder:text-white/30 h-12 rounded-xl" 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="uppercase text-xs font-bold tracking-widest text-white/60">Your Message</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Tell me about your project..." 
                              className="min-h-[140px] bg-white/10 border-white/10 focus:border-white/30 text-white placeholder:text-white/30 rounded-xl resize-none" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <button 
                      type="submit" 
                      className="w-full py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold uppercase tracking-widest rounded-xl hover:opacity-90 transition-all flex items-center justify-center gap-3 group"
                    >
                      Send Message <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </form>
                </Form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

    </Layout>
  );
}
