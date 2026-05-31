"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

const TRANSITION_DURATION_MS = 720;
const REDUCED_MOTION_DURATION_MS = 220;

function prefersReducedMotion() {
  return typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export default function PageTransitionProvider({ children }) {
  const pathname = usePathname();
  const firstMount = useRef(true);
  const timeoutRef = useRef(null);
  const [transition, setTransition] = useState({ isVisible: false, key: 0 });

  useEffect(() => {
    if (firstMount.current) {
      firstMount.current = false;
      return undefined;
    }

    window.clearTimeout(timeoutRef.current);
    setTransition((current) => ({ isVisible: true, key: current.key + 1 }));

    timeoutRef.current = window.setTimeout(
      () => setTransition((current) => ({ ...current, isVisible: false })),
      prefersReducedMotion() ? REDUCED_MOTION_DURATION_MS : TRANSITION_DURATION_MS
    );

    return () => window.clearTimeout(timeoutRef.current);
  }, [pathname]);

  return (
    <>
      {transition.isVisible && (
        <div key={transition.key} className="page-transition-overlay" aria-hidden="true">
          <div className="page-transition-card">
            <div className="page-transition-network" aria-hidden="true">
              <span className="page-transition-node" />
              <span className="page-transition-node" />
              <span className="page-transition-node" />
              <span className="page-transition-node" />
              <span className="page-transition-node" />
              <span className="page-transition-orbit" />
            </div>

            <div className="page-transition-logo-wrap">
              <span className="page-transition-logo-glow" aria-hidden="true" />
              <img src="/logo.png" alt="" className="page-transition-logo" />
            </div>

            <div className="page-transition-copy">
              <span>Pumpea</span>
              <small>Web, automatización y alcance digital</small>
            </div>

            <span className="page-transition-progress" aria-hidden="true" />
          </div>
        </div>
      )}
      {children}
    </>
  );
}
