
"use client";
import { useRef, useEffect } from "react";

export default function AnimatedGradientBg({ className = "", style, children }) {
  const ref = useRef();
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let pos = 0, forward = true;
    let rid;
    function animate() {
      pos += forward ? 0.25 : -0.25;
      if (pos > 100) forward = false;
      if (pos < 0) forward = true;
      el.style.background = `linear-gradient(120deg, #3b78ff ${pos}%, #53d3fc 100%, #b1b6ca 0%)`;
      rid = requestAnimationFrame(animate);
    }
    animate();
    return () => cancelAnimationFrame(rid);
  }, []);
  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}
