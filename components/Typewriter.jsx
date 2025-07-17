
"use client";
import { useEffect, useRef, useState } from "react";
export default function Typewriter({ words = [], className = "", delay = 36 }) {
  const [displayed, setDisplayed] = useState("");
  const [subIndex, setSubIndex] = useState(0);

  useEffect(() => {
    if (!words.length) return;
    if (subIndex >= words[0].length) return;
    const timeout = setTimeout(() => {
      setSubIndex((i) => i + 1);
    }, delay);
    return () => clearTimeout(timeout);
  }, [words, subIndex, delay]);
  useEffect(() => {
    setDisplayed(words[0]?.slice(0, subIndex) || "");
  }, [words, subIndex]);
  return (
    <span className={className}>
      {displayed}
      {subIndex < words[0].length ? (
        <span className="text-gradient-main animate-pulse">|</span>
      ) : null}
    </span>
  );
}
