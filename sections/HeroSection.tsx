"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown, Sparkles } from "lucide-react";
import logo from "@/assets/zyphorweb-logo.png";
import { GlowButton } from "@/components/GlowButton";
import { MountainScene } from "@/components/MountainScene";

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-28">
      <MountainScene />

      {/* Hero landing content */}
      <div className="section-shell relative z-10 flex min-h-[calc(100vh-7rem)] items-center pb-24">
        <div className="max-w-4xl">
          <motion.div
            className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/14 bg-white/8 px-4 py-2 text-sm text-white/78 backdrop-blur-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Image src={logo} alt="ZyphorWeb logo" width={28} height={28} className="rounded-full" priority />
            <span>Luxury web design for ambitious brands</span>
          </motion.div>

          <motion.h1
            className="max-w-5xl text-balance text-5xl font-semibold leading-[0.98] tracking-normal text-white sm:text-6xl lg:text-7xl xl:text-8xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.12 }}
          >
            Premium Websites That Turn Ideas Into Brands
          </motion.h1>

          <motion.p
            className="mt-7 max-w-2xl text-lg leading-8 text-white/72 sm:text-xl"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.24 }}
          >
            Modern websites crafted for businesses, creators, restaurants, startups, and personal brands.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-col gap-4 sm:flex-row"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.36 }}
          >
            <GlowButton href="#projects">View Projects</GlowButton>
            <GlowButton href="#order" variant="secondary">
              Order Website
            </GlowButton>
          </motion.div>
        </div>

        {/* Floating glassmorphism cards and particles */}
        <motion.div
          className="glass absolute right-0 top-32 hidden w-64 rounded-[28px] p-5 lg:block"
          animate={{ y: [0, -16, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <Sparkles className="h-6 w-6 text-mist" />
          <p className="mt-4 text-sm leading-6 text-white/70">Brand-ready visuals, responsive UX, and clean handoff.</p>
        </motion.div>
        <motion.div
          className="glass absolute bottom-32 right-28 hidden w-56 rounded-[28px] p-5 xl:block"
          animate={{ y: [0, 14, 0] }}
          transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <p className="text-3xl font-semibold text-white">₹1000+</p>
          <p className="mt-2 text-sm text-white/60">Affordable premium starts here.</p>
        </motion.div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to about section"
        className="absolute bottom-7 left-1/2 z-10 grid h-12 w-12 -translate-x-1/2 place-items-center rounded-full border border-white/14 bg-white/8 text-white backdrop-blur-xl"
      >
        <ChevronDown className="h-5 w-5 animate-bounce" />
      </a>
    </section>
  );
}
