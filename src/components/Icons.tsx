import React from "react";

type IconProps = {
  size?: number;
  strokeWidth?: number;
  className?: string;
  style?: React.CSSProperties;
};

const base = (props: IconProps) => ({
  width: props.size ?? 24,
  height: props.size ?? 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: props.strokeWidth ?? 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  className: props.className,
  style: props.style,
});

export const IconBank = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M3 10l9-6 9 6" />
    <path d="M5 10v8" />
    <path d="M19 10v8" />
    <path d="M9 10v8" />
    <path d="M15 10v8" />
    <path d="M3 20h18" />
  </svg>
);

export const IconBolt = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" />
  </svg>
);

export const IconChart = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M3 3v18h18" />
    <path d="M7 14l4-4 4 4 5-6" />
  </svg>
);

export const IconShield = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 2l8 3v7c0 5-4 9-8 10-4-1-8-5-8-10V5l8-3z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

export const IconCheck = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M5 12l5 5L20 7" />
  </svg>
);

export const IconBriefcase = (p: IconProps) => (
  <svg {...base(p)}>
    <rect x="2" y="7" width="20" height="14" rx="2" />
    <path d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2" />
    <path d="M2 13h20" />
  </svg>
);

export const IconColumns = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M3 5h18v14H3z" />
    <path d="M3 9h18" />
    <path d="M8 5v14" />
    <path d="M16 5v14" />
  </svg>
);

export const IconRefresh = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M21 12a9 9 0 11-3-6.7L21 8" />
    <path d="M21 3v5h-5" />
  </svg>
);

export const IconWrench = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M14.7 6.3a5 5 0 11-7 7L3 18v3h3l4.7-4.7a5 5 0 017-7l-3 3-2-2 3-3z" />
  </svg>
);

export const IconDoc = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M14 3H6a2 2 0 00-2 2v14a2 2 0 002 2h12a2 2 0 002-2V9l-6-6z" />
    <path d="M14 3v6h6" />
    <path d="M8 13h8" />
    <path d="M8 17h8" />
  </svg>
);

export const IconGlobe = (p: IconProps) => (
  <svg {...base(p)}>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18" />
    <path d="M12 3a14 14 0 010 18" />
    <path d="M12 3a14 14 0 000 18" />
  </svg>
);

export const IconHandshake = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M11 17l-3-3 5-5 3 3-5 5z" />
    <path d="M2 13l5-5 3 3" />
    <path d="M22 11l-5 5-3-3" />
    <path d="M17 9l4-4" />
    <path d="M3 19l4-4" />
  </svg>
);

export const IconLock = (p: IconProps) => (
  <svg {...base(p)}>
    <rect x="4" y="11" width="16" height="10" rx="2" />
    <path d="M8 11V7a4 4 0 018 0v4" />
  </svg>
);

export const IconStar = (p: IconProps) => (
  <svg {...base(p)} fill="currentColor" stroke="none">
    <path d="M12 2l3 7 7 .6-5.4 4.7L18 22l-6-4-6 4 1.4-7.7L2 9.6 9 9l3-7z" />
  </svg>
);

export const IconArrowRight = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M5 12h14" />
    <path d="M13 5l7 7-7 7" />
  </svg>
);

export const IconArrowLeft = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M19 12H5" />
    <path d="M11 19l-7-7 7-7" />
  </svg>
);

export const IconSparkle = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 3l2 6 6 2-6 2-2 6-2-6-6-2 6-2 2-6z" />
  </svg>
);

export const IconCoin = (p: IconProps) => (
  <svg {...base(p)}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v10" />
    <path d="M15 10c0-1.5-1.3-2-3-2s-3 .5-3 2 1.3 2 3 2 3 .5 3 2-1.3 2-3 2-3-.5-3-2" />
  </svg>
);

export const IconBuilding = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M4 21V5a2 2 0 012-2h12a2 2 0 012 2v16" />
    <path d="M4 21h16" />
    <path d="M9 8h2" />
    <path d="M13 8h2" />
    <path d="M9 12h2" />
    <path d="M13 12h2" />
    <path d="M9 16h2" />
    <path d="M13 16h2" />
  </svg>
);
