import { AboutSection } from "@/sections/AboutSection";
import { Footer } from "@/sections/Footer";
import { HeroSection } from "@/sections/HeroSection";
import { OrderSection } from "@/sections/OrderSection";
import { ProjectsSection } from "@/sections/ProjectsSection";
import { SocialSection } from "@/sections/SocialSection";
import { TestimonialsSection } from "@/sections/TestimonialsSection";
import { BackToTop } from "@/components/BackToTop";
import { CursorGlow } from "@/components/CursorGlow";
import { LoadingScreen } from "@/components/LoadingScreen";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <CursorGlow />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <OrderSection />
        <SocialSection />
        <TestimonialsSection />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
