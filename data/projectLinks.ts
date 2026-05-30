// Project live links are kept in one place so they are easy to update later.
// Replace placeholder URLs with the real deployed project URLs when ready.
export const PROJECT_LIVE_LINKS = {
  saathiAiChatBot: "https://saathi-ai-v1.netlify.app/",
  bihariByNatureRestaurant: "https://bihari-by-nature.netlify.app/",
  aazhaClothingEcommerce: "https://aazha.netlify.app/",
  birthdayWishingWebsite: "https://happy-birthday-sam-7.netlify.app/"
} as const;

export function isProjectLinkReady(url: string) {
  return Boolean(url && !url.includes("your-link-here.com") && !url.toLowerCase().includes("add link here"));
}
