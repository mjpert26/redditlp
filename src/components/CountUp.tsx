"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  to: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  className?: string;
};

/**
 * CountUp — animates a number from 0 to `to` when scrolled into view.
 * Uses requestAnimationFrame with ease-out-cubic for a refined feel.
 * Respects prefers-reduced-motion.
 */
export default function CountUp({
  to,
  duration = 1600,
  prefix = "",
  suffix = "",
  decimals = 0,
  className,
}: Props) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasRun = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
    ) {
      setValue(to);
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting || hasRun.current) return;
          hasRun.current = true;

          const start = performance.now();
          const from = 0;

          const tick = (now: number) => {
            const t = Math.min((now - start) / duration, 1);
            // ease-out-cubic
            const eased = 1 - Math.pow(1 - t, 3);
            setValue(from + (to - from) * eased);
            if (t < 1) requestAnimationFrame(tick);
            else setValue(to);
          };
          requestAnimationFrame(tick);
        });
      },
      { threshold: 0.35 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [to, duration]);

  const display = value.toLocaleString("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
