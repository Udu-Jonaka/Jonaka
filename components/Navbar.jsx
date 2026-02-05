"use client";
import { useState } from "react";
import Link from "next/link";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <section id="navbar">
      <nav className="nav-lg">
        <div className="nav-container">
          <h1 className="nav-logo">Jhay</h1>

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
              <Link href="/" onClick={() => setIsOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" onClick={() => setIsOpen(false)}>
                About
              </Link>
            </li>
            <li>
              <Link href="/skills" onClick={() => setIsOpen(false)}>
                Skills
              </Link>
            </li>
            <li>
              <Link href="/projects" onClick={() => setIsOpen(false)}>
                Projects
              </Link>
            </li>
            <li>
              <Link href="/contact" onClick={() => setIsOpen(false)}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </section>
  );
}

export default Navbar;
