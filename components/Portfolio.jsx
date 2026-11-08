"use client";

import Link from "next/link";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

function Portfolio() {
  // Feature top 4 projects on home showcase
  const featured = projects.slice(0, 4);

  return (
    <section id="portfolio" className="portfolio-showcase-section">
      <div className="portfolio-showcase-container">
        <div className="portfolio-section-head" data-aos="fade-up">
          <div className="portfolio-eyebrow-badge">
            <span className="eyebrow-dot"></span>
            Selected Works
          </div>
          <h2 className="portfolio-main-title">Featured Projects</h2>
          <p className="portfolio-main-subtitle">
            A curated collection of web applications, platforms, and interactive digital experiences.
          </p>
        </div>

        <div className="portfolio-items-grid">
          {featured.map((project, idx) => (
            <ProjectCard key={project.title || idx} project={project} index={idx} />
          ))}
        </div>

        <div className="portfolio-more-cta" data-aos="fade-up">
          <Link href="/projects" className="btn-primary link-hover">
            Explore All Projects ({projects.length}) →
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
