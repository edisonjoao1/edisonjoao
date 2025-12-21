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
  }[];
}

// Images are in client/public/images/caravaggio/
const imageBase = "/images/caravaggio";

export const sections: Section[] = [
  {
    id: "hero",
    title: "The Caravaggio Edition",
    roman: "",
    description: "A new world of art. 12 masterpiece explorations.",
    image: `${imageBase}/calling-of-saint-matthew.jpg`,
    imageAlt: "The Calling of Saint Matthew by Caravaggio",
  },
  {
    id: "chiaroscuro",
    title: "Chiaroscuro",
    roman: "I",
    tagline: "Light from darkness",
    description: "The AI-powered art expert who's just as obsessed with dramatic lighting as you are.",
    image: `${imageBase}/boy-with-basket.jpg`,
    imageAlt: "Boy with a Basket of Fruit by Caravaggio",
    features: [
      {
        title: "Smart suggestions",
        description: "Chiaroscuro Pulse delivers personalized recommendations and next steps for your creative business using art trends and data from your studio.",
      },
      {
        title: "Insights, proactively delivered",
        description: "Get notified about opportunities before you even think to look for them.",
      },
    ],
  },
  {
    id: "dramatic",
    title: "Dramatic",
    roman: "II",
    tagline: "Bold compositions",
    description: "Autonomous agents that handle the complex tasks so you can focus on creating.",
    image: `${imageBase}/judith-beheading.jpg`,
    imageAlt: "Judith Beheading Holofernes by Caravaggio",
    features: [
      {
        title: "Complexity, delegated",
        description: "Let AI agents handle your routine tasks while you focus on what matters most.",
      },
    ],
  },
  {
    id: "realism",
    title: "Realism",
    roman: "III",
    tagline: "Truth in every stroke",
    description: "Your online presence, elevated with masterful attention to detail.",
    image: `${imageBase}/cardsharps.jpg`,
    imageAlt: "The Cardsharps by Caravaggio",
    features: [
      {
        title: "Designs, refined",
        description: "Tell us the specific design updates you want and watch your theme adjust instantly.",
      },
    ],
  },
  {
    id: "naturalism",
    title: "Naturalism",
    roman: "IV",
    tagline: "Life as it is",
    description: "Retail experiences that feel as authentic as a Caravaggio portrait.",
    image: `${imageBase}/fortune-teller.jpg`,
    imageAlt: "The Fortune Teller by Caravaggio",
    features: [
      {
        title: "In-person, perfected",
        description: "Create retail experiences that capture the raw authenticity of real life.",
      },
    ],
  },
  {
    id: "tenebrism",
    title: "Tenebrism",
    roman: "V",
    tagline: "Shadows that sell",
    description: "Marketing that emerges from darkness with striking impact.",
    image: `${imageBase}/bacchus.jpg`,
    imageAlt: "Bacchus by Caravaggio",
    features: [
      {
        title: "Campaigns that captivate",
        description: "Create marketing moments as memorable as Caravaggio's most dramatic scenes.",
      },
    ],
  },
  {
    id: "baroque",
    title: "Baroque",
    roman: "VI",
    tagline: "Ornate simplicity",
    description: "Checkout experiences with the perfect balance of drama and function.",
    image: `${imageBase}/supper-at-emmaus.jpg`,
    imageAlt: "The Supper at Emmaus by Caravaggio",
    features: [
      {
        title: "Conversion, mastered",
        description: "Transform browsers into buyers with checkout flows that feel inevitable.",
      },
    ],
  },
  {
    id: "sfumato",
    title: "Sfumato",
    roman: "VII",
    tagline: "Seamless transitions",
    description: "Operations that flow like smoke, invisible yet essential.",
    image: `${imageBase}/saint-jerome.jpg`,
    imageAlt: "Saint Jerome Writing by Caravaggio",
    features: [
      {
        title: "Behind the scenes",
        description: "Automate the complexity so your business runs like a masterpiece.",
      },
    ],
  },
  {
    id: "contrapposto",
    title: "Contrapposto",
    roman: "VIII",
    tagline: "Dynamic balance",
    description: "A mobile experience that moves with natural grace.",
    image: `${imageBase}/narcissus.jpg`,
    imageAlt: "Narcissus by Caravaggio",
    features: [
      {
        title: "Mobile mastery",
        description: "Apps that feel as natural as the human form in motion.",
      },
    ],
  },
  {
    id: "patronage",
    title: "Patronage",
    roman: "IX",
    tagline: "Business to business",
    description: "B2B relationships built on mutual respect and shared vision.",
    image: `${imageBase}/inspiration-of-matthew.jpg`,
    imageAlt: "The Inspiration of Saint Matthew by Caravaggio",
    features: [
      {
        title: "Partnership, elevated",
        description: "Build wholesale relationships worthy of Renaissance patronage.",
      },
    ],
  },
  {
    id: "commission",
    title: "Commission",
    roman: "X",
    tagline: "The art of finance",
    description: "Financial tools as precise as a master's brushwork.",
    image: `${imageBase}/denial-of-peter.jpg`,
    imageAlt: "The Denial of Saint Peter by Caravaggio",
    features: [
      {
        title: "Numbers, illuminated",
        description: "Financial clarity that reveals the true picture of your business.",
      },
    ],
  },
  {
    id: "logistics",
    title: "Logistics",
    roman: "XI",
    tagline: "The journey home",
    description: "Shipping that delivers your creations with the care they deserve.",
    image: `${imageBase}/taking-of-christ.jpg`,
    imageAlt: "The Taking of Christ by Caravaggio",
    features: [
      {
        title: "Delivery, perfected",
        description: "Get your art to collectors faster, safer, and more affordably.",
      },
    ],
  },
  {
    id: "atelier",
    title: "Atelier",
    roman: "XII",
    tagline: "The master's workshop",
    description: "Developer tools for those who build the impossible.",
    image: `${imageBase}/david-with-goliath.jpg`,
    imageAlt: "David with the Head of Goliath by Caravaggio",
    features: [
      {
        title: "Build without limits",
        description: "APIs and tools that let you create your own masterpiece.",
      },
    ],
  },
];

export const navSections = sections.filter(s => s.roman !== "");
