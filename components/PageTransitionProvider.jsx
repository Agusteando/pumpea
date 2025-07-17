
"use client";
import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";

export default function PageTransitionProvider({ children }) {
  const [show, setShow] = useState(false);
  const [videoKey, setVideoKey] = useState(0);
  const videoRef = useRef(null);
  const pathname = usePathname();
  const firstMount = useRef(true);
  const nextQueued = useRef(false);

  useEffect(() => {
    if (firstMount.current) {
      firstMount.current = false;
      return;
    }
    setShow(true);
    setVideoKey((k) => k + 1);
    nextQueued.current = false;
  }, [pathname]);

  useEffect(() => {
    if (!show) return;
    const prevent = (e) => e.preventDefault();
    document.body.style.overflow = "hidden";
    document.addEventListener("wheel", prevent, { passive: false });
    document.addEventListener("touchmove", prevent, { passive: false });
    document.addEventListener("keydown", prevent, { passive: false });
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("wheel", prevent);
      document.removeEventListener("touchmove", prevent);
      document.removeEventListener("keydown", prevent);
    };
  }, [show]);

  function handleEnded() {
    setShow(false);
  }

  useEffect(() => {
    if (!show) return;
    const handler = () => { nextQueued.current = true; };
    window.addEventListener("beforeunload", handler);
    return () => {
      window.removeEventListener("beforeunload", handler);
    }
  }, [show]);

  useEffect(() => {
    if (!show && nextQueued.current) {
      setTimeout(() => setShow(true), 0);
      nextQueued.current = false;
    }
  }, [show]);

  return (
    <>
      {show && (
        <div
          className="fixed inset-0 z-[99999] bg-white flex items-center justify-center"
          style={{ opacity: 1 }}
          aria-modal="true"
          aria-label="Transición"
        >
          <div className="flex items-center justify-center bg-white rounded-lg shadow-xl p-2"
               style={{
                 minWidth: 0, minHeight: 0,
                 maxWidth: "94vw", maxHeight: "94vh",
               }}
          >
            <video
              key={videoKey}
              ref={videoRef}
              src="/pumpea.mp4"
              className="bg-white max-w-[80vw] max-h-[70vh] w-auto h-auto object-contain rounded-lg shadow-lg"
              autoPlay
              controls={false}
              playsInline
              onEnded={handleEnded}
              onError={handleEnded}
              tabIndex={-1}
              style={{
                background: "white",
                display: "block"
              }}
            />
          </div>
        </div>
      )}
      {children}
    </>
  );
}
