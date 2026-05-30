import Image from "next/image";
import { Instagram, Mail, Phone, Youtube } from "lucide-react";
import { navItems } from "@/data/nav";
import logo from "@/assets/zyphorweb-logo.png";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[linear-gradient(180deg,#03162e,#020a16)] py-14">
      <div className="section-shell">
        {/* Premium large footer */}
        <div className="animated-divider mb-10" />
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <Image src={logo} alt="ZyphorWeb logo" width={74} height={74} className="rounded-full" />
            <h2 className="mt-5 text-2xl font-semibold text-white">ZyphorWeb</h2>
            <p className="mt-3 max-w-md text-sm leading-7 text-white/62">
              Premium websites for brands that want to look calm, modern, responsive, and ready for trust.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-mist">Quick Links</h3>
            <div className="mt-5 grid gap-3">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="text-sm text-white/64 transition hover:text-white">
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-mist">Contact</h3>
            <div className="mt-5 grid gap-3 text-sm text-white/64">
              <a href="mailto:pyrocoder07@gmail.com" className="inline-flex items-center gap-2 transition hover:text-white">
                <Mail className="h-4 w-4" /> pyrocoder07@gmail.com
              </a>
              <a
                href="https://wa.me/917070224802"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition hover:text-white"
              >
                <Phone className="h-4 w-4" /> Request on WhatsApp
              </a>
              <div className="mt-3 flex gap-3">
                <a aria-label="YouTube" href="https://youtube.com/@zyphorwebdevs?si=VAaDI3GdVtYLpZD0" target="_blank" rel="noopener noreferrer" className="grid h-10 w-10 place-items-center rounded-full border border-white/12 bg-white/8 transition hover:bg-white/14">
                  <Youtube className="h-5 w-5" />
                </a>
                <a aria-label="Instagram" href="https://www.instagram.com/zyphorweb/" target="_blank" rel="noopener noreferrer" className="grid h-10 w-10 place-items-center rounded-full border border-white/12 bg-white/8 transition hover:bg-white/14">
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <p className="mt-12 border-t border-white/10 pt-6 text-sm text-white/44">
          © {new Date().getFullYear()} ZyphorWeb. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
