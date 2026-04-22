"use client";

import { useRef, ReactNode } from "react";

/**
 * ChromaCard — wraps a card and paints a soft gold spotlight
 * that follows the cursor on hover. Premium feel, zero layout shift.
 */
export default function ChromaCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    el.style.setProperty("--mx", `${x}px`);
    el.style.setProperty("--my", `${y}px`);
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      className={`chroma-card ${className}`}
      style={{ position: "relative", overflow: "hidden" }}
    >
      <div
        aria-hidden
        className="chroma-glow"
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "inherit",
          pointerEvents: "none",
          background:
            "radial-gradient(360px circle at var(--mx,50%) var(--my,50%), rgba(255,199,44,0.22), transparent 60%)",
          opacity: 0,
          transition: "opacity 0.3s",
          zIndex: 1,
        }}
      />
      <div style={{ position: "relative", zIndex: 2 }}>{children}</div>

      <style>{`
        .chroma-card:hover .chroma-glow { opacity: 1; }
      `}</style>
    </div>
  );
}
