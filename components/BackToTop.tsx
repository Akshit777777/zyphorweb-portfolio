"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href="#home"
      aria-label="Back to top"
      className={[
        "fixed bottom-5 right-5 z-40 grid h-11 w-11 place-items-center rounded-full border border-white/16 bg-white/10 text-white shadow-glow backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:bg-white/18",
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"
      ].join(" ")}
    >
      <ArrowUp className="h-5 w-5" />
    </a>
  );
}
