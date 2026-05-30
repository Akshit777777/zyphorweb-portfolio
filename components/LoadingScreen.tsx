"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import logo from "@/assets/zyphorweb-logo.png";

export function LoadingScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(false), 950);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          className="fixed inset-0 z-[80] grid place-items-center bg-ink"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45 }}
        >
          <motion.div
            className="relative grid place-items-center"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 1.04, opacity: 0 }}
          >
            <span className="absolute h-36 w-36 rounded-full border border-mist/25 shadow-glow" />
            <Image src={logo} alt="ZyphorWeb logo" width={92} height={92} className="rounded-full" priority />
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
