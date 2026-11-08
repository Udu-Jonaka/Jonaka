"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const brandName = "JONAKA";
  const letters = brandName.split("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <section id="navbar" className={isScrolled ? "scrolled" : ""}>
      <nav className="nav-lg">
        <div className="nav-container">
          <Link
            href="/"
            className={`nav-brand-logo ${isScrolled ? "is-scrolled" : ""}`}
            style={{ "--total": letters.length }}
            aria-label="Jonaka Udu"
          >
            {letters.map((char, index) => (
              <span
                key={index}
                id={index === 0 ? "nav-brand-first-letter" : undefined}
                className={`brand-char ${
                  index === 0 ? "brand-char-first" : "brand-char-rest"
                }`}
                style={{ "--i": index }}
              >
                {char}
              </span>
            ))}
          </Link>

          <div
            className={`nav-toggle ${isOpen ? "active" : ""}`}
            id="nav-toggle"
            onClick={toggleMenu}
            aria-label="Toggle navigation"
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

          <ul className={`nav-links ${isOpen ? "active" : ""}`} id="nav-links">
            <li>
              <Link
                href="/"
                className={`link-hover ${pathname === "/" ? "active" : ""}`}
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={`link-hover ${pathname === "/about" ? "active" : ""}`}
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/skills"
                className={`link-hover ${pathname === "/skills" ? "active" : ""}`}
                onClick={() => setIsOpen(false)}
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className={`link-hover ${pathname === "/projects" ? "active" : ""}`}
                onClick={() => setIsOpen(false)}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={`link-hover ${pathname === "/contact" ? "active" : ""}`}
                onClick={() => setIsOpen(false)}
              >
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
