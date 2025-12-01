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

// Data
const apps = [
  { name: "Foxie", category: "Social", icon: foxIcon, color: "from-cyan-400 to-purple-500", url: "https://foxie.cool" },
  { name: "AI Amigo", category: "Companion", icon: aiIcon, color: "from-blue-500 to-purple-500", url: null },
  { name: "Sober AI", category: "Health", icon: lotusIcon, color: "from-emerald-500 to-teal-500", url: null },
  { name: "SheGPT", category: "Assistant", icon: swirlIcon, color: "from-pink-500 to-rose-500", url: null },
  { name: "Accountability", category: "Productivity", icon: robotIcon, color: "from-amber-500 to-yellow-500", url: null },
  { name: "Ai Image", category: "Creative", icon: paintIcon, color: "from-indigo-500 to-violet-500", url: null },
  { name: "Global AI", category: "Intelligence", icon: sphereIcon, color: "from-cyan-500 to-blue-500", url: null },
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

  const categories = ["All", "Social", "Companion", "Health", "Productivity", "Creative"];
  
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

      {/* MANIFESTO - Light & Clean */}
      <section id="vision" className="py-32 md:py-48 relative z-10 bg-background text-foreground">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <h2 className="text-sm font-mono uppercase tracking-widest mb-8 text-muted-foreground">The Philosophy</h2>
            <p className="text-3xl md:text-6xl font-display font-bold leading-tight text-primary">
              "I lost $3M. I'm rebuilding with <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">absolute intent</span>. 
              Every product must solve a problem, create value, or build a legacy."
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mt-24 border-t border-black/10 pt-12">
             {[
               { icon: Brain, title: "Product Vision", desc: "Connecting AI to real user needs." },
               { icon: Smartphone, title: "iOS Scale", desc: "Building apps that reach millions." },
               { icon: Zap, title: "System Impact", desc: "Inputs, outputs, compounding value." },
               { icon: PenTool, title: "Range", desc: "From CAD to Code. No limits." },
             ].map((item, idx) => (
               <div key={idx} className="group p-6 rounded-2xl hover:bg-secondary transition-colors">
                 <item.icon className="w-8 h-8 mb-4 text-primary/50 group-hover:text-primary transition-colors" />
                 <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                 <p className="text-sm text-muted-foreground">{item.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* SELECTED WORK - Sticky Cards */}
      <section id="work" className="py-32 bg-secondary/30">
        <div className="container mx-auto px-6">
          <h2 className="text-[12vw] font-display font-black tracking-tighter leading-none mb-24 opacity-5 select-none text-black">
            IMPACT
          </h2>

          <div className="space-y-40">
            
            {/* Project 1 */}
            <div className="sticky top-32 group">
              <div className="bg-white border border-black/5 rounded-3xl overflow-hidden p-1 shadow-xl">
                <div className="grid lg:grid-cols-2 bg-white rounded-[1.3rem]">
                   <div className="p-12 flex flex-col justify-between h-full min-h-[500px]">
                      <div>
                        <div className="flex items-center gap-3 mb-6">
                          <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">01 / AI & Operations</span>
                        </div>
                        <h3 className="text-6xl font-display font-bold mb-6 text-black">Ai 4u</h3>
                        <p className="text-xl text-muted-foreground leading-relaxed max-w-md">
                          Operational efficiency engines powered by Multi-Agent Systems. 
                          Automating the impossible.
                        </p>
                      </div>
                      
                      <div>
                        <div className="grid grid-cols-2 gap-8 mb-12 border-t border-black/5 pt-8">
                          <div>
                            <div className="text-4xl font-display font-bold text-black mb-1">40%</div>
                            <div className="text-xs font-mono uppercase text-muted-foreground">Efficiency Gain</div>
                          </div>
                          <div>
                            <div className="text-4xl font-display font-bold text-black mb-1">$2M+</div>
                            <div className="text-xs font-mono uppercase text-muted-foreground">Client Savings</div>
                          </div>
                        </div>
                        <a href="#" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider hover:opacity-60 transition-opacity text-black">
                          View Case Study <ArrowUpRight size={16} />
                        </a>
                      </div>
                   </div>
                   <div className="relative min-h-[400px] lg:min-h-full bg-gradient-to-br from-blue-50 to-indigo-50 border-t lg:border-t-0 lg:border-l border-black/5">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-64 h-64 bg-blue-500/10 rounded-full blur-[80px]"></div>
                        <h4 className="relative z-10 text-[8vw] font-display font-black text-blue-900/10 mix-blend-multiply">AI4U</h4>
                      </div>
                   </div>
                </div>
              </div>
            </div>

             {/* Project 2 */}
             <div className="sticky top-36 group">
              <div className="bg-white border border-black/5 rounded-3xl overflow-hidden p-1 shadow-2xl">
                <div className="grid lg:grid-cols-2 bg-white rounded-[1.3rem]">
                   <div className="p-12 flex flex-col justify-between h-full min-h-[500px] order-2 lg:order-1">
                      <div>
                        <div className="flex items-center gap-3 mb-6">
                          <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">02 / Consumer Social</span>
                        </div>
                        <h3 className="text-6xl font-display font-bold mb-6 text-black">Foxie</h3>
                        <p className="text-xl text-muted-foreground leading-relaxed max-w-md">
                          Architected viral growth loops. 
                          Scaled from zero to massive adoption purely through product engineering.
                        </p>
                      </div>
                      
                      <div>
                        <div className="grid grid-cols-2 gap-8 mb-12 border-t border-black/5 pt-8">
                          <div>
                            <div className="text-4xl font-display font-bold text-black mb-1">500K</div>
                            <div className="text-xs font-mono uppercase text-muted-foreground">Active Users</div>
                          </div>
                          <div>
                            <div className="text-4xl font-display font-bold text-black mb-1">#10</div>
                            <div className="text-xs font-mono uppercase text-muted-foreground">App Store Rank</div>
                          </div>
                        </div>
                        <a href="#" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider hover:opacity-60 transition-opacity text-black">
                          View Case Study <ArrowUpRight size={16} />
                        </a>
                      </div>
                   </div>
                   <div className="order-1 lg:order-2 relative min-h-[400px] lg:min-h-full bg-gradient-to-bl from-orange-50 to-red-50 border-b lg:border-b-0 lg:border-l border-black/5">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-64 h-64 bg-orange-500/10 rounded-full blur-[80px]"></div>
                        <h4 className="relative z-10 text-[8vw] font-display font-black text-orange-900/10 mix-blend-multiply">FOXIE</h4>
                      </div>
                   </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ECOSYSTEM - Dynamic Filter */}
      <section id="ecosystem" className="py-32">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-4xl md:text-6xl font-display font-bold mb-4">The Ecosystem</h2>
              <div className="flex flex-wrap gap-2">
                {categories.map(cat => (
                  <button 
                    key={cat}
                    onClick={() => setFilter(cat)}
                    className={`px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide border transition-all ${
                      filter === cat 
                        ? "bg-black text-white border-black" 
                        : "bg-white text-muted-foreground border-black/10 hover:border-black"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
            <a href="https://appgallery.io/edison" target="_blank" className="text-sm font-mono uppercase tracking-widest hover:underline flex items-center gap-2">
              View All Apps <ExternalLink size={14} />
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-black/5 border border-black/5">
            <AnimatePresence mode="popLayout">
              {filteredApps.map((app) => (
                <motion.a 
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  href={app.url || "https://appgallery.io/edison"} 
                  target="_blank"
                  key={app.name}
                  className="aspect-square bg-white p-8 flex flex-col justify-between hover:bg-secondary/50 transition-colors group relative overflow-hidden"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${app.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                  
                  <div className="flex justify-between items-start">
                    <div className="w-2 h-2 bg-black/10 rounded-full group-hover:bg-black transition-colors"></div>
                    <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity -translate-y-2 group-hover:translate-y-0" />
                  </div>

                  <div className="relative z-10">
                     <img src={app.icon} alt={app.name} className="w-12 h-12 mb-4 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300" />
                     <h4 className="font-bold text-lg leading-none mb-1">{app.name}</h4>
                     <p className="text-[10px] uppercase tracking-wider opacity-50">{app.category}</p>
                  </div>
                </motion.a>
              ))}
            </AnimatePresence>
             
             {/* Stats Card */}
             <a 
                href="https://appgallery.io/edison" 
                target="_blank"
                className="aspect-square bg-black text-white p-8 flex flex-col justify-between hover:bg-black/90 transition-colors"
              >
                <div className="flex justify-between items-start">
                  <span className="font-mono text-[10px] opacity-50">TOTAL</span>
                  <ArrowUpRight size={14} />
                </div>
                <div>
                   <h4 className="font-display font-black text-3xl leading-none mb-1">10+</h4>
                   <p className="text-[10px] uppercase tracking-wider font-bold opacity-70">Apps Shipped</p>
                </div>
              </a>
          </div>
        </div>
      </section>

      {/* CONTACT - Functional Form UI */}
      <section id="contact" className="py-32 md:py-48 bg-secondary/30">
        <div className="container mx-auto px-6 max-w-2xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-4">Initiate Dialogue</h2>
            <p className="text-muted-foreground">Ready to build? Send me a secure transmission.</p>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-3xl border border-black/5 shadow-xl">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="uppercase text-xs font-bold tracking-widest">Email Address</FormLabel>
                      <FormControl>
                        <Input placeholder="you@company.com" {...field} className="bg-secondary/30 border-black/5 focus:border-black transition-colors" />
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
                      <FormLabel className="uppercase text-xs font-bold tracking-widest">Brief</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Describe your project scope..." 
                          className="min-h-[120px] bg-secondary/30 border-black/5 focus:border-black transition-colors resize-none" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <button 
                  type="submit" 
                  className="w-full py-4 bg-black text-white font-bold uppercase tracking-widest rounded-xl hover:bg-black/90 transition-all flex items-center justify-center gap-2 group"
                >
                  Send Message <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </Form>
          </div>
        </div>
      </section>

    </Layout>
  );
}
