"use client";
import { useState } from "react";
import Link from "next/link";
// We don't import CSS here because it's global as per legacy setup,
// but we could import 'nav.css' if we moved it.
// For now relying on global <link> in layout.

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section id="navbar">
      <nav className="nav-lg">
        <div className="nav-container">
          <h1 className="nav-logo">JhayCodes</h1>

          <div
            className={`nav-toggle ${isOpen ? "active" : ""}`}
            id="nav-toggle"
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

          <ul className={`nav-links ${isOpen ? "active" : ""}`} id="nav-links">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/skills">Skills</Link>
            </li>
            <li>
              <Link href="/projects">Portfolio</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
