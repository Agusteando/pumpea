
"use client";
import { useEffect } from "react";

export default function CalendlyProvider() {
  useEffect(() => {
    // Only inject if Calendly not already there
    if (!document.querySelector("#calendly-css")) {
      const l1 = document.createElement("link");
      l1.rel = "stylesheet";
      l1.id = "calendly-css";
      l1.href = "https://assets.calendly.com/assets/external/widget.css";
      document.head.appendChild(l1);
    }

    if (!window.Calendly) {
      const s = document.createElement("script");
      s.src = "https://assets.calendly.com/assets/external/widget.js";
      s.async = true;
      document.body.appendChild(s);
    }
  }, []);
  return null;
}
