"use client";

import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navItems } from "@/data/nav";
import logo from "@/assets/zyphorweb-logo.png";

export function Navbar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: 0.01 }
    );

    navItems.forEach((item) => {
      const section = document.querySelector(item.href);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed left-0 right-0 top-0 z-40 px-4 pt-4">
      <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/12 bg-ink/54 px-3 py-2 shadow-luxury backdrop-blur-2xl">
        <a href="#home" className="flex items-center gap-3 rounded-full pr-3 focus:outline-none focus:ring-2 focus:ring-mist/70">
          <Image src={logo} alt="ZyphorWeb logo" width={44} height={44} className="rounded-full" priority />
          <span className="text-sm font-semibold tracking-wide text-white">ZyphorWeb</span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={[
                "rounded-full px-4 py-2 text-sm transition duration-300 focus:outline-none focus:ring-2 focus:ring-mist/70",
                active === item.href.slice(1) ? "bg-white text-navy" : "text-white/68 hover:bg-white/9 hover:text-white"
              ].join(" ")}
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          href="#order"
          className="hidden rounded-full bg-white px-5 py-2 text-sm font-semibold text-navy transition hover:bg-mist lg:inline-flex"
        >
          Order Website
        </a>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-full border border-white/12 bg-white/8 text-white lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open ? (
        <div className="mx-auto mt-3 max-w-6xl rounded-3xl border border-white/12 bg-ink/90 p-3 shadow-luxury backdrop-blur-2xl lg:hidden">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block rounded-2xl px-4 py-3 text-sm text-white/78 transition hover:bg-white/10 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>
      ) : null}
    </header>
  );
}
