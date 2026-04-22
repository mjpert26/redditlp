"use client";

/**
 * AuroraBlur — animated soft-focus gradient blobs in brand colors.
 * Lives behind the hero. Pointer-events: none so it never blocks clicks.
 * Uses CSS keyframes only (no JS/rAF) to keep it cheap.
 */
export default function AuroraBlur() {
  return (
    <div
      aria-hidden
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 0,
      }}
    >
      <div className="aurora-blob aurora-1" />
      <div className="aurora-blob aurora-2" />
      <div className="aurora-blob aurora-3" />

      <style>{`
        .aurora-blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.55;
          mix-blend-mode: screen;
          will-change: transform;
        }
        .aurora-1 {
          width: 520px;
          height: 520px;
          background: radial-gradient(circle, rgba(255,199,44,0.55), transparent 70%);
          top: -120px;
          left: -80px;
          animation: auroraFloat1 18s ease-in-out infinite;
        }
        .aurora-2 {
          width: 620px;
          height: 620px;
          background: radial-gradient(circle, rgba(255,211,90,0.35), transparent 70%);
          bottom: -180px;
          right: -100px;
          animation: auroraFloat2 22s ease-in-out infinite;
        }
        .aurora-3 {
          width: 440px;
          height: 440px;
          background: radial-gradient(circle, rgba(255,226,146,0.28), transparent 70%);
          top: 45%;
          left: 40%;
          animation: auroraFloat3 26s ease-in-out infinite;
        }
        @keyframes auroraFloat1 {
          0%,100% { transform: translate(0,0) scale(1); }
          50%     { transform: translate(80px,40px) scale(1.12); }
        }
        @keyframes auroraFloat2 {
          0%,100% { transform: translate(0,0) scale(1); }
          50%     { transform: translate(-60px,-60px) scale(1.08); }
        }
        @keyframes auroraFloat3 {
          0%,100% { transform: translate(-50%,-50%) scale(1); }
          50%     { transform: translate(-40%,-55%) scale(1.15); }
        }
        @media (prefers-reduced-motion: reduce) {
          .aurora-blob { animation: none; }
        }
      `}</style>
    </div>
  );
}
