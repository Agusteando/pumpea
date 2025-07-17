
"use client";
import { useEffect, useRef } from "react";

export default function HeroHeadline({ children, gradientClass = "" }) {
  const ref = useRef(null);
  // Per-letter animation for hero headline.
  useEffect(() => {
    if (!ref.current) return;
    const spans = ref.current.querySelectorAll("span.letter");
    spans.forEach((s, i) => {
      s.animate(
        [
          { opacity: 0, transform: "translateY(28px) scale(0.8) rotate(-8deg)" },
          {
            opacity: 1,
            transform: "none",
          },
        ],
        {
          duration: 540,
          delay: 110 + 32 * i,
          fill: "forwards",
          easing: "cubic-bezier(.46,.52,0,1)",
        }
      );
    });
  }, []);
  // Split letters and words (to avoid flash/shift).
  function renderLetters(text) {
    return text.split("").map((l, i) =>
      l === " " ? (
        <span key={"s" + i}>&nbsp;</span>
      ) : (
        <span key={i} className="letter inline-block opacity-0">
          {l}
        </span>
      )
    );
  }
  return (
    <h1
      ref={ref}
      className={`text-4xl md:text-6xl font-extrabold font-heading text-center leading-tight mb-3 tracking-tight ${gradientClass}`}
      style={{
        letterSpacing: "-0.01em",
        lineHeight: "1.11",
      }}
    >
      {renderLetters(children)}
    </h1>
  );
}
