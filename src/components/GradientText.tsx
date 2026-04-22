"use client";

import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  /** seconds for one full sweep */
  duration?: number;
  /** class on the outer span */
  className?: string;
  /** style overrides on outer span */
  style?: React.CSSProperties;
};

/**
 * GradientText — animates a gold gradient that sweeps across the text.
 * Uses background-position animation on a wide gradient. No JS.
 * Respects prefers-reduced-motion.
 */
export default function GradientText({
  children,
  duration = 5,
  className,
  style,
}: Props) {
  return (
    <span className={`gradient-text ${className ?? ""}`} style={style}>
      {children}
      <style>{`
        .gradient-text {
          background: linear-gradient(
            110deg,
            #ffc72c 0%,
            #ffe292 30%,
            #ffffff 45%,
            #ffe292 60%,
            #ffc72c 100%
          );
          background-size: 220% auto;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          color: transparent;
          animation: gradientShimmer ${duration}s linear infinite;
          display: inline-block;
        }
        @keyframes gradientShimmer {
          0%   { background-position: 0% 50%; }
          100% { background-position: 220% 50%; }
        }
        @media (prefers-reduced-motion: reduce) {
          .gradient-text { animation: none; background-position: 50% 50%; }
        }
      `}</style>
    </span>
  );
}
