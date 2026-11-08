"use client";

import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

export default function ProjectCard({ project, index = 0 }) {
  return (
    <div
      className="portfolio-project-item"
      data-aos="fade-up"
      data-aos-delay={(index % 4) * 100}
    >
      <div className="project-preview-wrap">
        {/* Typographic watermark placeholder underneath */}
        <div className="project-watermark" aria-hidden="true">
          <span>{project.title}</span>
        </div>

        {/* Media Asset */}
        <img
          src={project.img}
          alt={`${project.title} preview`}
          className="project-preview-img"
          loading="lazy"
        />

        {/* Desktop Quick Action Buttons Overlay */}
        <div className="project-preview-overlay">
          {project.links?.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="preview-pill-btn pill-primary"
              aria-label={`Open ${project.title} live demo`}
            >
              <FaExternalLinkAlt /> Live Demo
            </a>
          )}
          {project.links?.code && (
            <a
              href={project.links.code}
              target="_blank"
              rel="noopener noreferrer"
              className="preview-pill-btn pill-secondary"
              aria-label={`View ${project.title} source code`}
            >
              <FaGithub /> GitHub
            </a>
          )}
        </div>
      </div>

      <div className="project-meta-wrap">
        <div className="project-header-line">
          <h3 className="project-item-title">{project.title}</h3>
          <span className="project-tags-text">{project.tags.join(" · ")}</span>
        </div>

        <p className="project-item-desc">{project.desc}</p>

        {/* Action Links Row */}
        <div className="project-links-line">
          {project.links?.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link-cta link-hover"
            >
              <FaExternalLinkAlt /> Live Demo
            </a>
          )}
          {project.links?.code && (
            <a
              href={project.links.code}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link-cta link-hover"
            >
              <FaGithub /> View Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
