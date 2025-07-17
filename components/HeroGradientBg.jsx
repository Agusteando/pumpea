
import React from "react";
export default function HeroGradientBg({ children }) {
  return (
    <div className="relative min-h-[540px] w-full overflow-hidden flex items-center justify-center bg-[#fafdff]">
      {/* Blurred SVG radial shapes */}
      <svg
        className="absolute -top-36 -left-36 z-0"
        width={600}
        height={480}
        aria-hidden
      >
        <defs>
          <radialGradient id="a" cx="50%" cy="50%" r="70%">
            <stop offset="0%" stopColor="#238DFF" stopOpacity="1" />
            <stop offset="100%" stopColor="#BDE4FF" stopOpacity="0"/>
          </radialGradient>
        </defs>
        <ellipse
          cx="300"
          cy="250"
          rx="260"
          ry="200"
          fill="url(#a)"
          opacity="0.55"
          filter="blur(32px)"
        />
      </svg>
      <svg
        className="absolute top-0 right-0 z-0"
        width={420}
        height={300}
        aria-hidden
      >
        <defs>
          <radialGradient id="b" cx="60%" cy="40%" r="80%">
            <stop offset="0%" stopColor="#54ffcd" stopOpacity="0.30"/>
            <stop offset="100%" stopColor="#BDE4FF" stopOpacity="0"/>
          </radialGradient>
        </defs>
        <ellipse
          cx="180"
          cy="160"
          rx="170"
          ry="120"
          fill="url(#b)"
          opacity="0.7"
          filter="blur(28px)"
        />
      </svg>
      {children}
    </div>
  );
}
