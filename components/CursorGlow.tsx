"use client";

import { useEffect, useState } from "react";

export function CursorGlow() {
  const [position, setPosition] = useState({ x: -200, y: -200 });

  useEffect(() => {
    const handleMove = (event: PointerEvent) => setPosition({ x: event.clientX, y: event.clientY });
    window.addEventListener("pointermove", handleMove);
    return () => window.removeEventListener("pointermove", handleMove);
  }, []);

  return (
    <div
      className="pointer-events-none fixed z-50 hidden h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-mist/10 blur-3xl lg:block"
      style={{ left: position.x, top: position.y }}
      aria-hidden="true"
    />
  );
}
