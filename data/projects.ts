import { PROJECT_LIVE_LINKS } from "@/data/projectLinks";

export type Project = {
  title: string;
  category: string;
  description: string;
  tags: string[];
  features: string[];
  techStack: string[];
  price: string;
  accent: string;
  liveUrl: string;
  screenshotSrc: string;
  screenshotAlt: string;
};

export const projects: Project[] = [
  {
    title: "Saathi AI Chat Bot",
    category: "AI Assistant Experience",
    description: "A conversational AI interface designed for helpful, fast, and approachable customer support.",
    tags: ["AI", "Chatbot", "Automation"],
    features: ["Smart prompt flows", "Clean chat UI", "Lead capture", "Responsive support layout"],
    techStack: ["Next.js", "AI API", "Tailwind CSS", "Framer Motion"],
    price: "From Rs. 3,500",
    accent: "#7dc9ef",
    liveUrl: PROJECT_LIVE_LINKS.saathiAiChatBot,
    screenshotSrc: "/project-screenshots/saathi-ai.png",
    screenshotAlt: "Saathi AI Chat Bot website preview"
  },
  {
    title: "Bihari By Nature Restaurant Website",
    category: "Restaurant Brand Site",
    description: "A flavorful restaurant presence with menu highlights, booking prompts, and premium food storytelling.",
    tags: ["Restaurant", "Booking", "Branding"],
    features: ["Menu sections", "Reservation CTA", "Gallery", "Location and contact flow"],
    techStack: ["Next.js", "Tailwind CSS", "Maps", "SEO"],
    price: "From Rs. 2,500",
    accent: "#b8d3e6",
    liveUrl: PROJECT_LIVE_LINKS.bihariByNatureRestaurant,
    screenshotSrc: "/project-screenshots/bihari-by-nature.png",
    screenshotAlt: "Bihari By Nature restaurant website preview"
  },
  {
    title: "Aazha Clothing Brand E-commerce Website",
    category: "Fashion Commerce",
    description: "A modern storefront for collections, product browsing, checkout-ready architecture, and brand campaigns.",
    tags: ["E-commerce", "Fashion", "Store"],
    features: ["Product grids", "Cart-ready UI", "Collection pages", "Payment integration plan"],
    techStack: ["Next.js", "Commerce UI", "Tailwind CSS", "Payments"],
    price: "From Rs. 5,000",
    accent: "#4ea8de",
    liveUrl: PROJECT_LIVE_LINKS.aazhaClothingEcommerce,
    screenshotSrc: "/project-screenshots/aazha-ecommerce.png",
    screenshotAlt: "Aazha clothing e-commerce website preview"
  },
  {
    title: "Birthday Wishing Website",
    category: "Personal Celebration Site",
    description: "A joyful animated website for wishes, memories, music moments, and shareable celebration pages.",
    tags: ["Portfolio", "Animation", "Personal"],
    features: ["Animated wishes", "Photo gallery", "Music-ready layout", "Shareable landing page"],
    techStack: ["React", "Tailwind CSS", "Framer Motion"],
    price: "From Rs. 1,000",
    accent: "#ffffff",
    liveUrl: PROJECT_LIVE_LINKS.birthdayWishingWebsite,
    screenshotSrc: "/project-screenshots/birthday-wishing.png",
    screenshotAlt: "Birthday wishing website preview"
  }
];
