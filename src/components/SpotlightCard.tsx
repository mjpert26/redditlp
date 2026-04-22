"use client";

import { ReactNode, useRef } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  spotlightColor?: string;
};

/**
 * SpotlightCard — border-glow that tracks the cursor.
 * Uses CSS custom props updated via mousemove, conic gradient on a ::before layer.
 */
export default function SpotlightCard({
  children,
  className = "",
  spotlightColor = "rgba(255, 199, 44, 0.35)",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    el.style.setProperty("--sx", `${x}%`);
    el.style.setProperty("--sy", `${y}%`);
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      className={`spotlight-card ${className}`}
      style={
        {
          "--spotlight-color": spotlightColor,
        } as React.CSSProperties
      }
    >
      <div className="spotlight-inner">{children}</div>
      <style>{`
        .spotlight-card {
          position: relative;
          border-radius: 16px;
          overflow: hidden;
          isolation: isolate;
        }
        .spotlight-card::before {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: inherit;
          padding: 1px;
          background: radial-gradient(
            240px circle at var(--sx, 50%) var(--sy, 50%),
            var(--spotlight-color),
            transparent 70%
          );
          -webkit-mask:
            linear-gradient(#000 0 0) content-box,
            linear-gradient(#000 0 0);
          -webkit-mask-composite: xor;
                  mask-composite: exclude;
          opacity: 0;
          transition: opacity 0.3s;
          pointer-events: none;
          z-index: 2;
        }
        .spotlight-card:hover::before { opacity: 1; }

        .spotlight-card::after {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: inherit;
          background: radial-gradient(
            360px circle at var(--sx, 50%) var(--sy, 50%),
            rgba(255, 199, 44, 0.08),
            transparent 60%
          );
          opacity: 0;
          transition: opacity 0.3s;
          pointer-events: none;
          z-index: 1;
        }
        .spotlight-card:hover::after { opacity: 1; }

        .spotlight-inner {
          position: relative;
          z-index: 3;
          height: 100%;
        }
      `}</style>
    </div>
  );
}
