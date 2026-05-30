import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ZyphorWeb | Premium Websites That Turn Ideas Into Brands",
  description:
    "ZyphorWeb creates premium, responsive websites for businesses, creators, restaurants, startups, and personal brands.",
  keywords: ["ZyphorWeb", "web design agency", "affordable websites", "Next.js websites", "portfolio websites"],
  
  verification: {
    google: "V0aBNxbqT5DARrpbyu1Mt5Jpp_4tOXS6eHzDAt6ONgI"
  },
  openGraph: {
    title: "ZyphorWeb | Premium Website Development",
    description: "Modern websites crafted for brands that want a polished, fast, and cinematic online presence.",
    type: "website"
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#03162e"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
