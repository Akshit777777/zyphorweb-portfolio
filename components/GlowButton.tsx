import { ArrowRight } from "lucide-react";
import { ReactNode } from "react";

type GlowButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
};

export function GlowButton({ href, children, variant = "primary" }: GlowButtonProps) {
  return (
    <a
      href={href}
      className={[
        "group inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold transition duration-300 focus:outline-none focus:ring-2 focus:ring-mist/70",
        variant === "primary"
          ? "bg-white text-navy shadow-glow hover:-translate-y-0.5 hover:bg-mist"
          : "border border-white/18 bg-white/8 text-white backdrop-blur-xl hover:-translate-y-0.5 hover:border-mist/50 hover:bg-white/12"
      ].join(" ")}
    >
      {children}
      <ArrowRight className="h-4 w-4 transition duration-300 group-hover:translate-x-1" aria-hidden="true" />
    </a>
  );
}
