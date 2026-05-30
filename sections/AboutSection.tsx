"use client";

import { motion } from "framer-motion";
import { BadgeCheck, Gauge, Palette, Rocket, ShieldCheck } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";

const benefits = [
  { icon: Palette, title: "Professional UI/UX", text: "Interfaces planned around clarity, conversion, and brand polish." },
  { icon: ShieldCheck, title: "Affordable Websites", text: "Premium presentation with practical pricing for new and growing brands." },
  { icon: Gauge, title: "Modern Responsive Design", text: "Layouts tuned for mobile, tablet, laptop, and ultrawide screens." },
  { icon: Rocket, title: "Fast Delivery", text: "Lean build process, clean components, and quick launch cycles." },
  { icon: BadgeCheck, title: "Custom Branding", text: "Color, spacing, motion, and content shaped around your identity." }
];

const stats = [
  { label: "Projects Completed", value: "20+" },
  { label: "Client Satisfaction", value: "98%" },
  { label: "Fast Delivery", value: "7d" }
];

export function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(125,201,239,0.12),transparent_28%),radial-gradient(circle_at_82%_60%,rgba(10,55,100,0.3),transparent_34%)]" aria-hidden="true" />
      <div className="section-shell relative">
        {/* About ZyphorWeb section */}
        <SectionHeader
          eyebrow="About ZyphorWeb"
          title="A premium website development brand built for clean launches."
          description="ZyphorWeb creates polished websites with cinematic style, strong structure, and practical affordability for businesses, creators, restaurants, startups, and personal brands."
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-5">
          {benefits.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.title}
                className="glass rounded-[28px] p-6 lg:col-span-1"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: index * 0.06 }}
              >
                <div className="grid h-11 w-11 place-items-center rounded-2xl bg-white text-navy">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/62">{item.text}</p>
              </motion.article>
            );
          })}
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="rounded-[28px] border border-mist/18 bg-ocean-900/55 p-8 text-center shadow-glow"
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
            >
              <p className="text-4xl font-semibold text-white">{stat.value}</p>
              <p className="mt-2 text-sm uppercase tracking-[0.22em] text-mist">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
