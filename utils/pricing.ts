import { BASE_PRICE, pagePrice, websiteFeatures } from "@/data/pricing";

export function formatInr(amount: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0
  }).format(amount);
}

export function calculateEstimate(selectedFeatures: string[], pages: number) {
  const featureCost = websiteFeatures
    .filter((feature) => selectedFeatures.includes(feature.value))
    .reduce((total, feature) => total + feature.price, 0);

  return {
    base: BASE_PRICE,
    featureCost,
    pageCost: pagePrice(pages),
    total: BASE_PRICE + featureCost + pagePrice(pages)
  };
}
