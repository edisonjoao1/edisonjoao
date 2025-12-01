import Layout from "@/components/layout";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

import foxIcon from "@assets/generated_images/minimalist_orange_fox_head_icon_gradient_style.png";
import aiIcon from "@assets/generated_images/futuristic_ai_brain_chip_icon_blue_and_purple.png";
import lotusIcon from "@assets/generated_images/serene_lotus_flower_icon_teal_gradient.png";
import swirlIcon from "@assets/generated_images/abstract_colorful_swirl_icon_creative_art.png";
import robotIcon from "@assets/generated_images/cute_3d_robot_character_icon_for_accountability_app.png";
import paintIcon from "@assets/generated_images/artistic_digital_creation_icon_for_ai_image_app.png";
import sphereIcon from "@assets/generated_images/abstract_colorful_sphere_icon_for_general_ai_app.png";

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
    category: "AI", 
    desc: "AI for Her. Voice-First Design.",
    icon: swirlIcon, 
    color: "from-pink-400 to-rose-500", 
    url: "https://apps.apple.com/us/app/shegpt-ai-for-her/id6739187729",
    rating: "5.0"
  },
  { 
    name: "Accountability Buddie", 
    category: "Productivity", 
    desc: "AI Partner for Your Goals",
    icon: robotIcon, 
    color: "from-violet-400 to-purple-500", 
    url: "https://apps.apple.com/us/app/accountability-buddie/id6740279644",
    rating: "5.0"
  },
  { 
    name: "AI Image Create", 
    category: "AI", 
    desc: "Create Beautiful AI Art",
    icon: paintIcon, 
    color: "from-cyan-400 to-blue-500", 
    url: "https://apps.apple.com/us/app/ai-image-create/id6740282463",
    rating: "4.8"
  },
  { 
    name: "ChatAI Assistant", 
    category: "AI", 
    desc: "Your Intelligent AI Partner",
    icon: sphereIcon, 
    color: "from-indigo-400 to-violet-500", 
    url: "https://apps.apple.com/us/app/chatai-assistant-ai-chatbot/id6740284891",
    rating: "4.9"
  },
];

const categories = ["All", "AI", "Health", "Social", "Productivity"];

export default function Ecosystem() {
  const [filter, setFilter] = useState("All");
  const filteredApps = filter === "All" ? apps : apps.filter(app => app.category === filter);

  return (
    <Layout>
      {/* Hero */}
      <section className="min-h-[50vh] flex items-center bg-zinc-950 text-white pt-32">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm uppercase tracking-widest text-white/40 mb-6">App Portfolio</p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-black leading-[0.95] tracking-tight">
              The
              <span className="italic font-light"> Ecosystem</span>
            </h1>
            <p className="text-xl text-white/60 mt-8 max-w-xl">
              A growing portfolio of products across AI, health, social, and productivity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-zinc-950 text-white border-b border-white/10">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-between gap-8">
            {[
              { value: "10+", label: "Apps Shipped" },
              { value: "1M+", label: "Total Users" },
              { value: "#10", label: "App Store Rank" },
              { value: "$2M+", label: "Value Created" },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="text-4xl md:text-5xl font-display font-black">{stat.value}</div>
                <div className="text-xs uppercase tracking-widest text-white/40">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter & Grid */}
      <section className="py-24 bg-zinc-950 text-white">
        <div className="container mx-auto px-6">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
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

          {/* App Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                  className="rounded-3xl p-8 flex flex-col group relative overflow-hidden bg-white/5 border border-white/10 hover:border-white/30 transition-all duration-500"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${app.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                  
                  <div className="flex justify-between items-start mb-6">
                    {app.rating && (
                      <span className="px-3 py-1 rounded-full bg-white/10 text-sm font-bold">{app.rating} ★</span>
                    )}
                    <ArrowUpRight size={20} className="opacity-0 group-hover:opacity-100 transition-all" />
                  </div>
                  
                  <div className="flex items-center gap-4 mb-6">
                    <img src={app.icon} alt={app.name} className="w-16 h-16 rounded-2xl" />
                    <div>
                      <h3 className="text-xl font-display font-bold">{app.name}</h3>
                      <span className="text-xs uppercase tracking-widest text-white/40">{app.category}</span>
                    </div>
                  </div>
                  
                  <p className="text-white/60 leading-relaxed">{app.desc}</p>
                </motion.a>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </Layout>
  );
}
