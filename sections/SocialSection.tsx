"use client";

import { motion } from "framer-motion";
import { Instagram, Play, Users } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";

export function SocialSection() {
  return (
    <section id="social" className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(10,55,100,0.18),transparent)]" aria-hidden="true" />
      <div className="section-shell relative">
        {/* Social media section */}
        <SectionHeader
          eyebrow="Social Media"
          title="Follow ZyphorWeb across creator platforms."
          description="Watch builds, previews, experiments, and web design ideas across YouTube and Instagram."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <motion.a
            href="https://youtube.com/@zyphorwebdevs?si=VAaDI3GdVtYLpZD0"
            target="_blank"
            rel="noreferrer"
            className="glass group rounded-[32px] p-7 transition duration-300 hover:-translate-y-1 hover:border-red-300/40"
            whileHover={{ scale: 1.015 }}
          >
            <div className="flex items-center justify-between gap-4">
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-red-500 text-white shadow-glow">
                <Play className="h-7 w-7 fill-white" />
              </div>
              <span className="rounded-full border border-white/12 px-4 py-2 text-xs uppercase tracking-[0.2em] text-white/58">
                Subscribe
              </span>
            </div>
            <h3 className="mt-7 text-2xl font-semibold text-white">YouTube Studio Card</h3>
            <p className="mt-3 text-white/64">Build breakdowns, website previews, and agency-style design ideas.</p>
            <div className="mt-8 flex items-center gap-3 text-mist">
              <Users className="h-5 w-5" />
              <span className="text-sm">ZyphorWeb Devs community</span>
            </div>
          </motion.a>

          <motion.a
            href="https://www.instagram.com/zyphorweb/"
            target="_blank"
            rel="noreferrer"
            className="glass group rounded-[32px] p-7 transition duration-300 hover:-translate-y-1 hover:border-pink-200/40"
            whileHover={{ scale: 1.015 }}
          >
            <div className="flex items-center justify-between gap-4">
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-pink-400 via-sky-300 to-ocean-700 text-white shadow-glow">
                <Instagram className="h-7 w-7" />
              </div>
              <span className="rounded-full border border-white/12 px-4 py-2 text-xs uppercase tracking-[0.2em] text-white/58">
                Follow
              </span>
            </div>
            <h3 className="mt-7 text-2xl font-semibold text-white">Instagram Preview Card</h3>
            <p className="mt-3 text-white/64">Reels, design shots, launch updates, and crisp portfolio visuals.</p>
            <div className="mt-8 grid grid-cols-3 gap-3">
              <span className="h-20 rounded-2xl bg-white/10" />
              <span className="h-20 rounded-2xl bg-mist/20" />
              <span className="h-20 rounded-2xl bg-ocean-500/25" />
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
