"use client";

import { useState, useEffect } from "react";
import "./Loader.css";

export default function Loader() {
  const [loading, setLoading] = useState(true);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    // Check if it's the first visit in the current session
    const hasVisited = sessionStorage.getItem("hasVisitedLoader");

    if (hasVisited) {
      setLoading(false);
    } else {
      sessionStorage.setItem("hasVisitedLoader", "true");

      // Start fading out the loader
      const fadeTimer = setTimeout(() => {
        setFade(true);
      }, 1500);

      // Remove the loader from the DOM completely
      const removeTimer = setTimeout(() => {
        setLoading(false);
      }, 2000);

      return () => {
        clearTimeout(fadeTimer);
        clearTimeout(removeTimer);
      };
    }
  }, []);

  if (!loading) return null;

  return (
    <div className={`loader-overlay ${fade ? "fade-out" : ""}`}>
      <div className="loader-content">
        <div className="loader-spinner"></div>
        <div className="loader-text">Loading...</div>
      </div>
    </div>
  );
}
