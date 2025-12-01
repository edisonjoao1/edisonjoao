import Layout from "@/components/layout";
import { motion } from "framer-motion";
import { 
  Ruler, 
  PenTool, 
  Cpu, 
  Database, 
  Layers, 
  ArrowRight,
  Terminal,
  DraftingCompass,
  Scale,
  Box,
  Grid,
  ExternalLink,
  Download
} from "lucide-react";
import blueprintImg from "@assets/generated_images/architectural_blueprint_wireframe_of_a_digital_interface_8k.png";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export default function Home() {
  return (
    <Layout>
      {/* Section 1: The Technical Hero */}
      <section className="min-h-[90vh] flex flex-col justify-center relative border-b border-white/10">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          
          <div className="order-2 lg:order-1">
            <div className="mb-6 flex items-center gap-2 text-primary text-xs uppercase tracking-widest font-bold">
              <DraftingCompass size={14} />
              <span>Technical Design & Engineering</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold uppercase leading-none tracking-tighter mb-6">
              BUILDING<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">SYSTEMS</span><br/>
              THAT WORK.
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-xl mb-10 leading-relaxed font-light border-l-2 border-primary pl-6">
              I don't just code. I draft, plan, and engineer. 
              Combining AI product leadership with deep CAD expertise and real-world grit.
              <br/><br/>
              Lost $3M. Rebuilding with precision.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#work" className="group relative px-8 py-4 bg-primary text-black font-bold uppercase tracking-wider text-xs hover:bg-white transition-colors">
                <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-black"></span>
                <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-black"></span>
                View Blueprints
              </a>
              <a href="mailto:hello@edison.ai" className="px-8 py-4 border border-white/20 uppercase tracking-wider text-xs hover:bg-white/5 transition-colors flex items-center gap-2">
                <Terminal size={14} /> Initiate Contact
              </a>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="absolute top-0 right-0 text-[10px] text-primary font-mono">
              DWG. NO. 2025-01
            </div>
            <div className="relative border border-white/10 p-2 bg-blue-900/20 backdrop-blur-sm">
              <img 
                src={blueprintImg} 
                alt="Technical Blueprint" 
                className="w-full h-auto opacity-80 mix-blend-screen grayscale contrast-125"
              />
              <div className="absolute inset-0 bg-grid-white/5"></div>
              
              {/* Overlay Annotations */}
              <div className="absolute top-1/4 left-1/4 w-20 h-[1px] bg-primary"></div>
              <div className="absolute top-1/4 left-[calc(25%+80px)] text-[10px] text-primary bg-black/50 px-1">INTERFACE LAYER</div>
              
              <div className="absolute bottom-1/3 right-1/4 w-20 h-[1px] bg-primary"></div>
              <div className="absolute bottom-1/3 right-[calc(25%+80px)] text-[10px] text-primary bg-black/50 px-1">CORE LOGIC</div>
            </div>
          </div>

        </div>
      </section>

      {/* Section 2: The Specifications (Skills) */}
      <section id="specs" className="py-24 border-b border-white/10">
        <div className="container mx-auto px-6">
          <div className="flex items-baseline justify-between mb-16 border-b border-white/10 pb-4">
            <h2 className="text-2xl font-bold uppercase tracking-widest flex items-center gap-2">
              <Scale size={20} className="text-primary" /> 
              Technical Specifications
            </h2>
            <span className="text-xs text-muted-foreground font-mono hidden sm:block">REV 2.0</span>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
            {[
              {
                icon: PenTool,
                title: "CAD & Drafting",
                desc: "Expert in technical drawings, constraints, and tolerances. I think in 2D/3D and translate rough ideas into buildable plans."
              },
              {
                icon: Cpu,
                title: "AI & Systems",
                desc: "LLM product specialist. Designing multi-agent workflows and RAG systems with engineering precision."
              },
              {
                icon: Layers,
                title: "Product & iOS",
                desc: "Shipped 10+ apps. Full stack capability from Swift/SwiftUI code to monetization strategy."
              },
              {
                icon: Box,
                title: "Real World Design",
                desc: "Understanding physical constraints. Bridging the gap between digital software and physical environments."
              },
              {
                icon: Database,
                title: "Data Architecture",
                desc: "Structured planning. Inputs, outputs, and trade-offs. Designing systems that scale."
              },
              {
                icon: Ruler,
                title: "Execution",
                desc: "Direct and practical. No fluff. Building with intent and speed to market."
              }
            ].map((skill, idx) => (
              <div key={idx} className="bg-background p-8 hover:bg-white/5 transition-colors group">
                <skill.icon className="text-primary mb-4 w-8 h-8 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-bold uppercase mb-2">{skill.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: The Blueprints (Work) */}
      <section id="work" className="py-24">
        <div className="container mx-auto px-6">
          <div className="flex items-baseline justify-between mb-16 border-b border-white/10 pb-4">
            <h2 className="text-2xl font-bold uppercase tracking-widest flex items-center gap-2">
              <Grid size={20} className="text-primary" /> 
              Project Blueprints
            </h2>
            <span className="text-xs text-muted-foreground font-mono hidden sm:block">STATUS: SHIPPED</span>
          </div>

          <div className="space-y-24">
            {/* Project 1 */}
            <div className="grid md:grid-cols-12 gap-8 border border-white/10 p-1 bg-white/5">
              <div className="md:col-span-8 bg-black relative min-h-[300px] border-r border-white/10">
                 <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%] animate-[shimmer_3s_infinite]"></div>
                 <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="text-6xl md:text-9xl font-bold text-white/5 select-none">FOXIE</h3>
                 </div>
                 <div className="absolute bottom-4 left-4 font-mono text-[10px] text-primary">
                    FIG 1.0 // iOS SOCIAL ARCHITECTURE
                 </div>
              </div>
              <div className="md:col-span-4 p-8 flex flex-col justify-center">
                <h3 className="text-3xl font-bold mb-2 text-white">FOXIE</h3>
                <div className="text-xs text-primary font-mono mb-6">FOUNDER & LEAD ENGINEER</div>
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                  Architected a social platform from zero to 500K users. 
                  Engineered growth loops and retention systems. 
                  <br/><br/>
                  <span className="text-white">Outcome:</span> Top 10 App Store Category.
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  <span className="px-2 py-1 border border-white/20 text-[10px] uppercase">SwiftUI</span>
                  <span className="px-2 py-1 border border-white/20 text-[10px] uppercase">Growth</span>
                  <span className="px-2 py-1 border border-white/20 text-[10px] uppercase">Scale</span>
                </div>
                <a href="#" className="text-xs font-bold uppercase flex items-center gap-2 hover:text-primary">
                  View Specs <ArrowRight size={12} />
                </a>
              </div>
            </div>

            {/* Project 2 */}
            <div className="grid md:grid-cols-12 gap-8 border border-white/10 p-1 bg-white/5">
              <div className="md:col-span-4 p-8 flex flex-col justify-center order-2 md:order-1">
                <h3 className="text-3xl font-bold mb-2 text-white">DELOITTE</h3>
                <div className="text-xs text-primary font-mono mb-6">B2B PRODUCT LEAD</div>
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                  Designed and drafted specifications for a massive B2B platform.
                  Managed constraints across 40K+ users and enterprise requirements.
                  <br/><br/>
                  <span className="text-white">Outcome:</span> $10M+ Revenue Impact.
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  <span className="px-2 py-1 border border-white/20 text-[10px] uppercase">Enterprise</span>
                  <span className="px-2 py-1 border border-white/20 text-[10px] uppercase">Strategy</span>
                  <span className="px-2 py-1 border border-white/20 text-[10px] uppercase">Systems</span>
                </div>
                <a href="#" className="text-xs font-bold uppercase flex items-center gap-2 hover:text-primary">
                  View Specs <ArrowRight size={12} />
                </a>
              </div>
              <div className="md:col-span-8 bg-black relative min-h-[300px] border-l border-white/10 order-1 md:order-2">
                 <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="text-6xl md:text-9xl font-bold text-white/5 select-none">B2B</h3>
                 </div>
                 <div className="absolute bottom-4 right-4 font-mono text-[10px] text-primary text-right">
                    FIG 2.0 // ENTERPRISE SYSTEMS
                 </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Section 4: The Ecosystem (App Gallery) */}
      <section id="systems" className="py-24 border-t border-white/10 bg-white/[0.02]">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
             <div>
               <h2 className="text-2xl font-bold uppercase tracking-widest">App Ecosystem</h2>
               <p className="text-xs text-muted-foreground mt-2 font-mono">DEPLOYED UNITS: 10+</p>
             </div>
             <a href="https://appgallery.io/edison" target="_blank" className="px-4 py-2 border border-primary text-primary text-xs uppercase font-bold hover:bg-primary hover:text-black transition-colors">
               Access Full Gallery
             </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {/* We use simple placeholders here to maintain the blueprint aesthetic */}
            {[
              "Foxie", "AI Amigo", "Sober AI", "SheGPT", "Accountability", 
              "Image Gen", "Global AI", "Unit 08", "Unit 09", "Unit 10"
            ].map((name, idx) => (
              <div key={idx} className="aspect-square border border-white/10 bg-black p-4 flex flex-col justify-between hover:border-primary/50 transition-colors group cursor-pointer">
                <div className="text-[10px] font-mono text-muted-foreground group-hover:text-primary">
                  0{idx + 1}
                </div>
                <div className="w-8 h-8 border border-white/20 rounded-full group-hover:border-primary group-hover:bg-primary/20 transition-all"></div>
                <div className="text-xs font-bold uppercase">{name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-32 border-t border-white/10 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_70%)]"></div>
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-8">
            Ready to <span className="text-primary">Build?</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto mb-12 font-light">
            Whether it's software, AI systems, or rebuilding from zero. 
            I bring the plans, the tools, and the grit.
          </p>
          <a href="mailto:hello@edison.ai" className="inline-block px-10 py-5 bg-primary text-black font-bold uppercase tracking-widest hover:bg-white transition-colors">
            Start Project
          </a>
        </div>
      </section>

    </Layout>
  );
}
