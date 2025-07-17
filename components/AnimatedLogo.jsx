
"use client";
import { useRef, useEffect } from "react";
export default function AnimatedLogo({ className = "" }) {
  const ref = useRef();
  useEffect(() => {
    if (!ref.current) return;
    ref.current.animate(
      [
        { transform: "scale(0.74) rotate(-10deg)", opacity: 0 },
        { transform: "scale(1.07) rotate(7deg)", opacity: 1, offset: 0.65 },
        { transform: "scale(0.98) rotate(-2deg)", opacity: 1, offset: 0.84 },
        { transform: "scale(1) rotate(0)", opacity: 1 }
      ],
      {
        duration: 1300,
        easing: "cubic-bezier(.62,.04,.23,1.01)",
        fill: "forwards",
      }
    );
  }, []);
  return (
    <img
      ref={ref}
      src="/logo.png"
      alt="Pumpea Logo Animado"
      className={className + " w-24 h-24 md:w-32 md:h-32 drop-shadow-2xl"}
      style={{ filter: "drop-shadow(0 7px 36px #299dff55)" }}
    />
  );
}
