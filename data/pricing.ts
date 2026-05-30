export type WebsiteFeature = {
  label: string;
  value: string;
  price: number;
};

export const BASE_PRICE = 1000;

export const templateStyles = [
  "Saathi AI Style",
  "Restaurant Style",
  "E-commerce Style",
  "Birthday Style",
  "Other Custom Design"
];

export const websiteFeatures: WebsiteFeature[] = [
  { label: "Landing Page", value: "landing-page", price: 0 },
  { label: "Contact Form", value: "contact-form", price: 300 },
  { label: "Admin Panel", value: "admin-panel", price: 2200 },
  { label: "Booking System", value: "booking-system", price: 800 },
  { label: "E-commerce", value: "ecommerce", price: 1500 },
  { label: "AI Chatbot", value: "ai-chatbot", price: 1800 },
  { label: "Gallery", value: "gallery", price: 400 },
  { label: "Payment Integration", value: "payment-integration", price: 1200 },
  { label: "Animation Effects", value: "animation-effects", price: 500 },
  { label: "SEO Optimization", value: "seo-optimization", price: 600 }
];

export const pagePrice = (pages: number) => Math.max(0, pages - 1) * 250;
