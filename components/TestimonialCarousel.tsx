"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";

export function TestimonialCarousel() {
  return (
    <div className="relative overflow-hidden">
      <motion.div
        className="flex gap-5"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      >
        {[...testimonials, ...testimonials].map((item, index) => (
          <article
            key={`${item.name}-${index}`}
            className="glass min-w-[min(86vw,370px)] rounded-[28px] p-7"
          >
            <Quote className="h-7 w-7 text-mist" />
            <p className="mt-5 min-h-28 text-base leading-8 text-white/76">“{item.quote}”</p>
            <div className="mt-6 border-t border-white/10 pt-5">
              <h3 className="font-semibold text-white">{item.name}</h3>
              <p className="mt-1 text-sm text-white/52">{item.role}</p>
            </div>
          </article>
        ))}
      </motion.div>
    </div>
  );
}
