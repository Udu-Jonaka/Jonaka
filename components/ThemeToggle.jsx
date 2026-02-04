"use client";

import { useState, useEffect } from "react";
import { MdWbSunny, MdDarkMode } from "react-icons/md";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Separate load function for clarity and redundancy
    const initTheme = () => {
      // Check if the body already has the dark-mode class (set by layout.js script)
      if (document.body.classList.contains("dark-mode")) {
        setIsDark(true);
      }
    };
    initTheme();
  }, []);

  const toggleTheme = () => {
    const newState = !isDark;
    setIsDark(newState);
    if (newState) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <button id="theme-toogle" className="theme-toogle" onClick={toggleTheme}>
      {isDark ? <MdDarkMode /> : <MdWbSunny />}
    </button>
  );
}
