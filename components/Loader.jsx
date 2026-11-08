"use client";

import { useState, useEffect, useRef } from "react";
import "./Loader.css";

const FANCY_FONTS = [
  {
    name: "Old English Gothic",
    family:
      "'Old English Text MT', 'Cloister Black', 'UnifrakturMaguntia', 'Fraktur', fantasy, serif",
    transform: "rotate(-4deg) scale(1.15)",
    weight: "700",
  },
  {
    name: "Goofy Comic",
    family:
      "'Comic Sans MS', 'Chalkboard SE', 'Comic Neue', cursive, sans-serif",
    transform: "rotate(10deg) scale(1.1)",
    weight: "700",
  },
  {
    name: "Royal Calligraphy",
    family:
      "'Brush Script MT', 'Zapfino', 'Snell Roundhand', 'Great Vibes', cursive",
    transform: "rotate(-6deg) scale(1.25)",
    weight: "500",
  },
  {
    name: "Western Circus",
    family: "'Playbill', 'Rodeo', 'Impact', fantasy",
    transform: "scaleY(1.35) scaleX(0.85)",
    weight: "800",
  },
  {
    name: "Chunky Bubble Pop",
    family: "'Cooper Black', 'Arial Black', fantasy",
    transform: "rotate(6deg) scale(1.1)",
    weight: "900",
  },
  {
    name: "Ancient Papyrus",
    family: "'Papyrus', 'Herculanum', fantasy, cursive",
    transform: "rotate(-6deg) scale(1.15)",
    weight: "700",
  },
  {
    name: "Retro Terminal Hacker",
    family: "'Courier New', Courier, monospace",
    transform: "rotate(0deg) scale(1.0)",
    weight: "800",
  },
  {
    name: "High Fashion Bodoni",
    family: "'Didot', 'Bodoni MT', 'Playfair Display', serif",
    transform: "rotate(2deg) scale(1.2)",
    weight: "700",
  },
  {
    name: "Broadway Art Deco",
    family: "'Copperplate', 'Engravers MT', 'Castellar', serif",
    transform: "rotate(-3deg) scale(1.05)",
    weight: "800",
  },
  {
    name: "Chalkboard Doodler",
    family: "'Chalkduster', 'Bradley Hand', cursive",
    transform: "rotate(8deg) scale(1.1)",
    weight: "700",
  },
];

const BRAND_FONT = {
  name: "Brand Modern",
  family: "var(--font-poppins), sans-serif",
  transform: "none",
  weight: "900",
};

export default function Loader() {
  const [loading, setLoading] = useState(true);
  const [fontIndex, setFontIndex] = useState(0);
  const [isFlying, setIsFlying] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [flightStyles, setFlightStyles] = useState({});
  const letterRef = useRef(null);

  useEffect(() => {
    // 1. Rapidly cycle through the funny & fancy fonts every 95ms
    const interval = setInterval(() => {
      setFontIndex((prev) => (prev + 1) % FANCY_FONTS.length);
    }, 95);

    // 2. Minimum visual showtime so the morphing is enjoyed (~3s)
    const minTimePromise = new Promise((resolve) => setTimeout(resolve, 3000));

    // Wait for document ready
    const pageLoadedPromise = new Promise((resolve) => {
      if (
        typeof document !== "undefined" &&
        document.readyState === "complete"
      ) {
        resolve();
      } else if (typeof window !== "undefined") {
        window.addEventListener("load", resolve, { once: true });
      } else {
        resolve();
      }
    });

    Promise.all([minTimePromise, pageLoadedPromise]).then(() => {
      clearInterval(interval);

      // 3. Measure delta from center stage to navbar's "J"
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
          const scale = targetRect.height / sourceRect.height || 0.26;

          setFlightStyles({
            "--tx": `${deltaX}px`,
            "--ty": `${deltaY}px`,
            "--scale": scale,
          });
        } else {
          // Fallback if target not in DOM
          setFlightStyles({
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

  const activeFont = isFlying ? BRAND_FONT : FANCY_FONTS[fontIndex];

  return (
    <div
      className={`loader-overlay ${isExiting ? "is-exiting" : ""}`}
      aria-hidden="true"
    >
      <div className="loader-center-stage">
        <span
          ref={letterRef}
          className={`loader-morph-letter ${isFlying ? "is-flying" : "is-morphing"}`}
          style={{
            fontFamily: activeFont.family,
            fontWeight: activeFont.weight,
            "--font-transform": isFlying ? "none" : activeFont.transform,
            ...flightStyles,
          }}
        >
          J
        </span>
      </div>
    </div>
  );
}
