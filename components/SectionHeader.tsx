"use client";

import { motion } from "framer-motion";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

export function SectionHeader({ eyebrow, title, description, align = "center" }: SectionHeaderProps) {
  return (
    <motion.div
      className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-mist">{eyebrow}</p>
      <h2 className="text-balance text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">{title}</h2>
      <p className="mt-5 text-base leading-8 text-white/68 sm:text-lg">{description}</p>
    </motion.div>
  );
}
