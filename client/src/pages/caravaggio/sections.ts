export interface Section {
  id: string;
  title: string;
  roman: string;
  description: string;
  tagline?: string;
  image: string;
  imageAlt: string;
  features?: {
    title: string;
    description: string;
    appUrl?: string;
    appIcon?: string;
  }[];
}

// Images are in client/public/images/caravaggio/
const imageBase = "/images/caravaggio";

export const sections: Section[] = [
  {
    id: "hero",
    title: "A Modern Renaissance",
    roman: "",
    description: "I design. I build. I create. I think. I scale. Twenty apps. One million lives.",
    image: `${imageBase}/calling-of-saint-matthew.jpg`,
    imageAlt: "The Calling of Saint Matthew by Caravaggio",
  },
  {
    id: "ai-products",
    title: "The Workshop",
    roman: "I",
    tagline: "Where ideas take form",
    description: "Da Vinci had his bottega. I have AI 4U Labs. A studio where artificial minds and human vision converge.",
    image: `${imageBase}/boy-with-basket.jpg`,
    imageAlt: "Boy with a Basket of Fruit by Caravaggio",
    features: [
      {
        title: "AI 4U Labs",
        description: "The modern workshop. We forge intelligence—payment systems that reason, apps that comprehend, conversations that resonate.",
        appUrl: "https://ai4u.space",
      },
      {
        title: "SheGPT",
        description: "Six days from spark to store. AI crafted for women, by design.",
        appUrl: "https://apps.apple.com/us/app/shegpt/id6744063469",
      },
    ],
  },
  {
    id: "ios-engineering",
    title: "The Medium",
    roman: "II",
    tagline: "Mastery of tools",
    description: "The Renaissance masters ground their own pigments. I've spent a decade mastering Swift—understanding every API, every pixel, every possibility.",
    image: `${imageBase}/judith-beheading.jpg`,
    imageAlt: "Judith Beheading Holofernes by Caravaggio",
    features: [
      {
        title: "A Decade in Swift",
        description: "10 years refining the craft. SwiftUI, UIKit, the entire Apple ecosystem. Precision in every interaction.",
        appUrl: "https://apps.apple.com/us/developer/edison-espinosa/id1368707952",
      },
    ],
  },
  {
    id: "foxie",
    title: "The Piazza",
    roman: "III",
    tagline: "Where people gather",
    description: "Renaissance Florence had its public squares. Foxie became ours—half a million people, finding connection in the digital age.",
    image: `${imageBase}/cardsharps.jpg`,
    imageAlt: "The Cardsharps by Caravaggio",
    features: [
      {
        title: "Foxie — 4.9★",
        description: "500K+ users. #10 in Social. Post. Connect. Engage. Go Out. A community, not just an app.",
        appUrl: "https://apps.apple.com/us/app/foxie/id1369279200",
      },
    ],
  },
  {
    id: "health-ai",
    title: "The Apothecary",
    roman: "IV",
    tagline: "Healing through innovation",
    description: "Renaissance physicians mapped the human body. I'm mapping the human mind—AI companions for the soul's darker hours.",
    image: `${imageBase}/fortune-teller.jpg`,
    imageAlt: "The Fortune Teller by Caravaggio",
    features: [
      {
        title: "AI Amigo — 5.0★",
        description: "The friend who's always there. 3am conversations. No judgment. Pure understanding.",
        appUrl: "https://apps.apple.com/us/app/ai-amigo/id6670725604",
      },
      {
        title: "Sober AI — 5.0★",
        description: "For the bravest journey. Technology that walks beside you on the road to recovery.",
        appUrl: "https://apps.apple.com/us/app/sober-ai/id6740759999",
      },
    ],
  },
  {
    id: "product-strategy",
    title: "The Patron",
    roman: "V",
    tagline: "Vision before execution",
    description: "The Medici didn't just fund art—they directed it. Strategy is seeing the masterpiece before the first stroke falls.",
    image: `${imageBase}/bacchus.jpg`,
    imageAlt: "Bacchus by Caravaggio",
    features: [
      {
        title: "$2M+ in Value Architected",
        description: "Roadmaps. Prioritization. Go-to-market. The blueprint before the building.",
        appUrl: "https://ai4u.space",
      },
    ],
  },
  {
    id: "philosophy",
    title: "The Trial",
    roman: "VI",
    tagline: "Tested by fire",
    description: "Caravaggio fled Rome after killing a man. I lost $3 million. Both of us rebuilt. Some lessons only devastation can teach.",
    image: `${imageBase}/supper-at-emmaus.jpg`,
    imageAlt: "The Supper at Emmaus by Caravaggio",
    features: [
      {
        title: "Absolute Intent",
        description: "No more art for art's sake. Every creation must solve a problem. Every product must leave a legacy.",
        appUrl: "https://apps.apple.com/us/developer/edison-espinosa/id1368707952",
      },
    ],
  },
  {
    id: "tech-stack",
    title: "The Palette",
    roman: "VII",
    tagline: "Every color, every tool",
    description: "Caravaggio revolutionized chiaroscuro. My palette: Swift, React Native, Node.js, OpenAI, Firebase, PostgreSQL, AWS, Figma.",
    image: `${imageBase}/saint-jerome.jpg`,
    imageAlt: "Saint Jerome Writing by Caravaggio",
    features: [
      {
        title: "Full-Spectrum Creation",
        description: "From first sketch to final deployment. No middlemen. No committees. The complete vision, executed.",
        appUrl: "https://ai4u.space",
      },
    ],
  },
  {
    id: "ai-partners",
    title: "The Guild",
    roman: "VIII",
    tagline: "Collective intelligence",
    description: "Renaissance workshops had masters and apprentices. My guild: GPT, Claude, Gemini, Llama, Mistral. Each with its genius.",
    image: `${imageBase}/narcissus.jpg`,
    imageAlt: "Narcissus by Caravaggio",
    features: [
      {
        title: "1 Million Calls Daily",
        description: "10+ labs. 25+ models. Voice. Vision. Reasoning. Every AI mind, orchestrated.",
        appUrl: "https://ai4u.space",
      },
    ],
  },
  {
    id: "impact",
    title: "The Opus",
    roman: "IX",
    tagline: "The body of work",
    description: "A Renaissance man is measured by his works. Ten years. Twenty apps. One million users. The ledger speaks.",
    image: `${imageBase}/inspiration-of-matthew.jpg`,
    imageAlt: "The Inspiration of Saint Matthew by Caravaggio",
    features: [
      {
        title: "Living Creations",
        description: "Not museum pieces. Living, breathing products generating revenue, solving problems, touching lives daily.",
        appUrl: "https://apps.apple.com/us/developer/edison-espinosa/id1368707952",
      },
    ],
  },
  {
    id: "more-apps",
    title: "The Gallery",
    roman: "X",
    tagline: "The collection",
    description: "SheGPT. Accountability Buddie. AI Image Create. Inteligencia Artificial. Each app a canvas. Each user an audience.",
    image: `${imageBase}/denial-of-peter.jpg`,
    imageAlt: "The Denial of Saint Peter by Caravaggio",
    features: [
      {
        title: "The Exhibition",
        description: "Women's health. Productivity. Creative tools. All AI-powered. All live on the App Store. All reaching those who need them.",
        appUrl: "https://apps.apple.com/us/developer/edison-espinosa/id1368707952",
      },
    ],
  },
  {
    id: "logistics",
    title: "The Velocity",
    roman: "XI",
    tagline: "Genius moves fast",
    description: "Michelangelo painted the Sistine Chapel in four years. Your MVP ships in four weeks. The Renaissance accelerated.",
    image: `${imageBase}/taking-of-christ.jpg`,
    imageAlt: "The Taking of Christ by Caravaggio",
    features: [
      {
        title: "Speed Is a Feature",
        description: "2-4 weeks to MVP. Production-ready from the first brushstroke. No compromises.",
        appUrl: "https://ai4u.space",
      },
    ],
  },
  {
    id: "contact",
    title: "The Commission",
    roman: "XII",
    tagline: "Your masterpiece awaits",
    description: "Every Renaissance master needed a patron with vision. Every patron needed a master who could execute. Let's create something timeless.",
    image: `${imageBase}/david-with-goliath.jpg`,
    imageAlt: "David with the Head of Goliath by Caravaggio",
    features: [
      {
        title: "edison@ai4u.space",
        description: "The workshop is ready. The guild stands by. What shall we build together?",
        appUrl: "mailto:edison@ai4u.space",
      },
    ],
  },
];

export const navSections = sections.filter(s => s.roman !== "");
