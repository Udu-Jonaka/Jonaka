"use client";

import { useState, useEffect, useRef } from "react";
import "./Loader.css";

const FONT_STYLES = [
  { family: "'Playfair Display', Georgia, serif", style: "italic", weight: "700" },
  { family: "'Courier New', Courier, monospace", style: "normal", weight: "700" },
  { family: "'Brush Script MT', 'Dancing Script', cursive", style: "normal", weight: "500" },
  { family: "Impact, 'Arial Black', sans-serif", style: "normal", weight: "800" },
  { family: "'Times New Roman', Times, serif", style: "italic", weight: "700" },
  { family: "'Trebuchet MS', 'Lucida Sans Unicode', sans-serif", style: "normal", weight: "800" },
  { family: "var(--font-poppins), sans-serif", style: "normal", weight: "900" },
];

export default function Loader() {
  const [loading, setLoading] = useState(true);
  const [fontIndex, setFontIndex] = useState(0);
  const [isFlying, setIsFlying] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [transformStyle, setTransformStyle] = useState({});
  const letterRef = useRef(null);

  useEffect(() => {
    // 1. Cycle fonts rapidly every 110ms
    const interval = setInterval(() => {
      setFontIndex((prev) => (prev + 1) % FONT_STYLES.length);
    }, 110);

    // 2. Minimum display time so the morph is appreciated (900ms)
    const minTimePromise = new Promise((resolve) => setTimeout(resolve, 900));

    // Wait for document ready
    const pageLoadedPromise = new Promise((resolve) => {
      if (typeof document !== "undefined" && document.readyState === "complete") {
        resolve();
      } else if (typeof window !== "undefined") {
        window.addEventListener("load", resolve, { once: true });
      } else {
        resolve();
      }
    });

    Promise.all([minTimePromise, pageLoadedPromise]).then(() => {
      clearInterval(interval);
      // Lock into final bold brand font
      setFontIndex(FONT_STYLES.length - 1);

      // 3. Measure delta from center to the navbar's "J"
      requestAnimationFrame(() => {
        const navTarget = document.getElementById("nav-brand-first-letter");
        const letterEl = letterRef.current;

        if (navTarget && letterEl) {
          const targetRect = navTarget.getBoundingClientRect();
          const sourceRect = letterEl.getBoundingClientRect();

          const sourceCenterX = sourceRect.left + sourceRect.width / 2;
          const sourceCenterY = sourceRect.top + sourceRect.height / 2;

          const targetCenterX = targetRect.left + targetRect.width / 2;
          const targetCenterY = targetRect.top + targetRect.height / 2;

          const deltaX = targetCenterX - sourceCenterX;
          const deltaY = targetCenterY - sourceCenterY;
          const scale = targetRect.height / sourceRect.height || 0.28;

          setTransformStyle({
            "--tx": `${deltaX}px`,
            "--ty": `${deltaY}px`,
            "--scale": scale,
          });
        } else {
          // Fallback if target not in DOM
          setTransformStyle({
            "--tx": "-40vw",
            "--ty": "-45vh",
            "--scale": 0.25,
          });
        }

        // Trigger the flight into the navbar and fade the background
        requestAnimationFrame(() => {
          setIsFlying(true);
          setIsExiting(true);

          // 4. Remove loader after flight animation completes (650ms)
          setTimeout(() => {
            setLoading(false);
          }, 650);
        });
      });
    });

    return () => clearInterval(interval);
  }, []);

  if (!loading) return null;

  const currentFont = FONT_STYLES[fontIndex];

  return (
    <div
      className={`loader-overlay ${isExiting ? "is-exiting" : ""}`}
      aria-hidden="true"
    >
      <div className="loader-center-stage">
        <span
          ref={letterRef}
          className={`loader-morph-letter ${isFlying ? "is-flying" : ""}`}
          style={{
            fontFamily: currentFont.family,
            fontStyle: currentFont.style,
            fontWeight: currentFont.weight,
            ...transformStyle,
          }}
        >
          J
        </span>
      </div>
    </div>
  );
}
