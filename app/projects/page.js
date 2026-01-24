export const metadata = {
  title: "Portfolio - Jonaka Udu",
  description: "Check out my latest full-stack development projects.",
};

import { projects } from "@/data/projects";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

export default function ProjectsPage() {
  return (
    <main>
      <section className="portfolio-section">
        <div className="portfolio-wrapper">
          <h2 className="section-title">My Projects</h2>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <img
                  src={project.img}
                  alt={`${project.title} preview`}
                  className="project-image"
                />
                <div className="project-details">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.desc}</p>

                  <div className="technology-tags">
                    {project.tags.map((tech, index) => (
                      <span key={index} className="technology-tag">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="project-actions">
                    <a
                      href={project.links.live}
                      className="action-button action-button-primary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                    <a
                      href={project.links.code}
                      className="action-button action-button-secondary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub /> View Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
