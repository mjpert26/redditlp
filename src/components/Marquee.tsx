"use client";

import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  /** seconds per full loop */
  duration?: number;
  /** pause animation when hovered */
  pauseOnHover?: boolean;
  /** reverse direction */
  reverse?: boolean;
  className?: string;
};

/**
 * Marquee — continuous horizontal scroll. Uses 2x duplicated content
 * translated by -50% for a seamless loop.
 */
export default function Marquee({
  children,
  duration = 40,
  pauseOnHover = true,
  reverse = false,
  className = "",
}: Props) {
  return (
    <div className={`marquee ${className}`}>
      <div
        className={`marquee-track ${pauseOnHover ? "pause-on-hover" : ""} ${reverse ? "reverse" : ""}`}
        style={{ animationDuration: `${duration}s` }}
      >
        <div className="marquee-group">{children}</div>
        <div className="marquee-group" aria-hidden>
          {children}
        </div>
      </div>
      <style>{`
        .marquee {
          overflow: hidden;
          width: 100%;
          position: relative;
          mask-image: linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent);
          -webkit-mask-image: linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent);
        }
        .marquee-track {
          display: flex;
          width: max-content;
          animation: marqueeScroll linear infinite;
        }
        .marquee-track.reverse { animation-direction: reverse; }
        .marquee-track.pause-on-hover:hover { animation-play-state: paused; }
        .marquee-group {
          display: flex;
          flex-shrink: 0;
        }
        @keyframes marqueeScroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee-track { animation: none; }
        }
      `}</style>
    </div>
  );
}
