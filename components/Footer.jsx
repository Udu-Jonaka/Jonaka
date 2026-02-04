import Link from "next/link";
import { FaGithub, FaEnvelope, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-top">
          <div className="footer-brand">
            <h3>
              Jonaka <span>(Jhay Codes)</span>
            </h3>
            <p>Full-Stack Developer crafting digital experiences</p>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h4>Quick Links</h4>
              <ul>
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
              </ul>
            </div>

            <div className="footer-column">
              <h4>Connect</h4>
              <div className="footer-socials">
                <a
                  href="https://github.com/Udu-Jonaka"
                  target="_blank"
                  aria-label="GitHub"
                >
                  <FaGithub />
                </a>
                <a
                  href="mailto:udunnanna0@gmail.com"
                  target="_blank"
                  aria-label="LinkedIn"
                >
                  <FaEnvelope />
                </a>
                <a
                  href="https://x.com/Jonaka_Udu"
                  target="_blank"
                  aria-label="X"
                >
                  <FaXTwitter />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} Jonaka (Jhay Codes). All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
