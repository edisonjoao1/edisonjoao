import Layout from "@/components/layout";
import { motion } from "framer-motion";
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
  Linkedin
} from "lucide-react";
import heroBg from "@assets/generated_images/abstract_dark_tech_background_with_subtle_neon_data_lines.png";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBg} 
            alt="Abstract AI Background" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/90 to-background"></div>
        </div>

        <div className="container relative z-10 px-6 py-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary mb-8 backdrop-blur-sm">
              <Brain className="w-4 h-4" />
              <span className="text-sm font-mono font-medium">Senior Product Manager & AI Specialist</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-tight tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/50">
              Architecting <br/>
              <span className="text-primary">Intelligence</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              Bridging the gap between complex AI technologies and intuitive user experiences. 
              6+ years in product, 8+ years building apps, delivering scalable impact.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="#contact" 
                className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-all shadow-[0_0_20px_-5px_hsl(var(--primary))] hover:shadow-[0_0_30px_-5px_hsl(var(--primary))] flex items-center gap-2 group"
              >
                Get in Touch <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#work" 
                className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-full font-medium hover:bg-white/10 transition-all backdrop-blur-sm"
              >
                View Work
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Identities */}
      <section id="about" className="py-24 relative">
        <div className="container mx-auto px-6">
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { icon: Brain, title: "AI Specialist", desc: "LLM Product thinking, RAG systems, Multi-agent design" },
              { icon: Rocket, title: "Product Manager", desc: "Strategy, Roadmapping, Execution, & User Research" },
              { icon: Smartphone, title: "iOS Engineer", desc: "Swift, SwiftUI, App Store monetization & growth" },
              { icon: Layers, title: "UX Designer", desc: "End-to-end flows, Design Systems, Figma expert" },
            ].map((item, index) => (
              <motion.div 
                key={index}
                variants={fadeIn}
                className="p-8 rounded-2xl bg-card border border-white/5 hover:border-primary/20 hover:bg-white/5 transition-all group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-display font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Impact / Work Section */}
      <section id="work" className="py-24 bg-black/20">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Signature Impact</h2>
            <div className="h-1 w-20 bg-primary rounded-full"></div>
          </motion.div>

          <div className="space-y-24">
            {/* Project 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="grid md:grid-cols-12 gap-8 items-center"
            >
              <div className="md:col-span-5 order-2 md:order-1">
                <div className="space-y-6">
                  <div className="flex items-center gap-3 text-secondary font-mono text-sm">
                    <Users className="w-4 h-4" />
                    <span>Social App Scale</span>
                  </div>
                  <h3 className="text-4xl font-display font-bold">Foxie</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Founded and built a social app from scratch to 500K+ users. Led product, engineering, and growth.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5"></div>
                      <span className="text-foreground/80">Reached Top 10 in App Store category</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5"></div>
                      <span className="text-foreground/80">Increased weekly downloads by 20% via growth experiments</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5"></div>
                      <span className="text-foreground/80">Improved retention using rigorous A/B testing</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="md:col-span-7 order-1 md:order-2 pl-0 md:pl-10">
                <div className="aspect-video rounded-xl overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20 border border-white/10 p-1 relative group">
                  <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(0deg,transparent,black)]"></div>
                  <div className="h-full w-full bg-card/50 backdrop-blur-sm flex items-center justify-center relative z-10">
                     <span className="text-6xl font-display font-bold text-white/10 group-hover:text-primary/20 transition-colors">FOXIE</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Project 2 */}
            <motion.div 
               initial={{ opacity: 0, y: 40 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.7 }}
               className="grid md:grid-cols-12 gap-8 items-center"
             >
              <div className="md:col-span-7 pr-0 md:pr-10">
                <div className="aspect-video rounded-xl overflow-hidden bg-gradient-to-bl from-purple-500/20 to-blue-500/20 border border-white/10 p-1 relative group">
                  <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(0deg,transparent,black)]"></div>
                  <div className="h-full w-full bg-card/50 backdrop-blur-sm flex items-center justify-center relative z-10">
                     <span className="text-6xl font-display font-bold text-white/10 group-hover:text-secondary/20 transition-colors">B2B</span>
                  </div>
                </div>
              </div>
              <div className="md:col-span-5">
                <div className="space-y-6">
                  <div className="flex items-center gap-3 text-secondary font-mono text-sm">
                    <TrendingUp className="w-4 h-4" />
                    <span>Enterprise Growth</span>
                  </div>
                  <h3 className="text-4xl font-display font-bold">Deloitte Product</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Led a cross-functional team on a massive B2B platform, driving significant revenue and adoption.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5"></div>
                      <span className="text-foreground/80">Grew to 40K+ business users</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5"></div>
                      <span className="text-foreground/80">Generated $10M+ in revenue</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5"></div>
                      <span className="text-foreground/80">Improved release velocity by 34%</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

             {/* Project 3 */}
             <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="grid md:grid-cols-12 gap-8 items-center"
            >
              <div className="md:col-span-5 order-2 md:order-1">
                <div className="space-y-6">
                  <div className="flex items-center gap-3 text-secondary font-mono text-sm">
                    <Zap className="w-4 h-4" />
                    <span>AI Efficiency</span>
                  </div>
                  <h3 className="text-4xl font-display font-bold">Ai 4u</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Built AI tools focused on operational efficiency and decision support systems.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5"></div>
                      <span className="text-foreground/80">Saved clients over $2M per year</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5"></div>
                      <span className="text-foreground/80">Increased operational efficiency by 40%</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5"></div>
                      <span className="text-foreground/80">Boosted customer experience scores by 25%</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="md:col-span-7 order-1 md:order-2 pl-0 md:pl-10">
                <div className="aspect-video rounded-xl overflow-hidden bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 border border-white/10 p-1 relative group">
                  <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(0deg,transparent,black)]"></div>
                  <div className="h-full w-full bg-card/50 backdrop-blur-sm flex items-center justify-center relative z-10">
                     <span className="text-6xl font-display font-bold text-white/10 group-hover:text-emerald-500/20 transition-colors">AI4U</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Deep Dive */}
      <section id="skills" className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Technical & Product Arsenal</h2>
            <p className="text-muted-foreground">
              A unique blend of technical engineering depth and strategic product vision.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Skill Group 1 */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="p-6 bg-card border border-white/5 rounded-xl"
            >
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <Code className="text-primary" /> iOS Engineering
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Swift", "SwiftUI", "UIKit", "Xcode", "App Architecture", "MVVM", "In-App Purchases"].map(skill => (
                  <span key={skill} className="px-3 py-1 bg-white/5 text-xs rounded-full border border-white/5 font-mono text-muted-foreground">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

             {/* Skill Group 2 */}
             <motion.div 
              whileHover={{ y: -5 }}
              className="p-6 bg-card border border-white/5 rounded-xl"
            >
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <Brain className="text-primary" /> AI & LLMs
              </h3>
              <div className="flex flex-wrap gap-2">
                {["OpenAI", "Claude", "Llama", "RAG Systems", "Vector DBs", "Prompt Engineering", "Multi-agent Systems"].map(skill => (
                  <span key={skill} className="px-3 py-1 bg-white/5 text-xs rounded-full border border-white/5 font-mono text-muted-foreground">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

             {/* Skill Group 3 */}
             <motion.div 
              whileHover={{ y: -5 }}
              className="p-6 bg-card border border-white/5 rounded-xl"
            >
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <Rocket className="text-primary" /> Product Strategy
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Roadmapping", "PRDs", "User Research", "A/B Testing", "Data Analytics", "Growth", "Monetization"].map(skill => (
                  <span key={skill} className="px-3 py-1 bg-white/5 text-xs rounded-full border border-white/5 font-mono text-muted-foreground">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent pointer-events-none"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">Ready to build the future?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Whether it's scaling a product, integrating AI, or building an iOS app from scratch.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <a href="mailto:hello@edison.ai" className="flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-all">
              <Mail className="w-5 h-5" /> Contact Me
            </a>
            <div className="flex gap-4">
              <a href="#" className="p-4 bg-white/5 rounded-full hover:bg-white/10 transition-all border border-white/10">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="p-4 bg-white/5 rounded-full hover:bg-white/10 transition-all border border-white/10">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
