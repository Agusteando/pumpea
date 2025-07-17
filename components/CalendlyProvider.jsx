
"use client";
import { useEffect } from "react";

export default function CalendlyProvider() {
  useEffect(() => {
    // Load CSS only; JS script is not needed for embed inline
    if (!document.querySelector("#calendly-css")) {
      const l1 = document.createElement("link");
      l1.rel = "stylesheet";
      l1.id = "calendly-css";
      l1.href = "https://assets.calendly.com/assets/external/widget.css";
      document.head.appendChild(l1);
    }
  }, []);
  return null;
}
