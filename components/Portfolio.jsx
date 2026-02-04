// Note: Since we are using Bootstrap 5 via CDN in layout.js, the carousel structure *might* work if JS is loaded.
import { projects } from "../data/projects";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

// However, React handles DOM updates, so Bootstrap JS usually needs initializing or a React wrapper.
// But forcing vanilla Bootstrap JS via script tag in Layout might work for simple carousels.
// If not, we can implement a simple React state carousel or just list them.
// Given strict instructions to keep Home page design primary reference, I'll attempt to keep structure.
// If carousel doesn't work, I'll revisit.

function Portfolio() {
  // We could extract data here too if we want to loop, but for carousel structure it's specific.
  // I'll keep the static structure for now to ensure classes match exactly, or map it.
  // Let's map it to be cleaner React code.

  return (
    <section id="portfolio">
      <div className="portfolio-container">
        <h2 className="section-title" data-aos="fade-up">
          My Projects
        </h2>

        <div
          id="portfolioCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          <div className="carousel-indicators">
            {projects.map(function (_, idx) {
              return (
                <button
                  key={idx}
                  type="button"
                  data-bs-target="#portfolioCarousel"
                  data-bs-slide-to={idx}
                  className={idx === 0 ? "active" : ""}
                  aria-current={idx === 0 ? "true" : "false"}
                  aria-label={`Slide ${idx + 1}`}
                ></button>
              );
            })}
          </div>

          <div className="carousel-inner">
            {projects.map(function (project, idx) {
              return (
                <div
                  className={`carousel-item ${idx === 0 ? "active" : ""}`}
                  key={idx}
                >
                  <div className="portfolio-card card">
                    <img
                      src={project.img}
                      alt={project.title}
                      className="portfolio-img"
                    />
                    <div className="portfolio-content">
                      <h3>{project.title}</h3>
                      <p>{project.desc}</p>
                      <div className="tech-tags">
                        {project.tags.map(function (tag, tIdx) {
                          return (
                            <span className="tech-tag" key={tIdx}>
                              {tag}
                            </span>
                          );
                        })}
                      </div>
                      <div className="portfolio-links">
                        <a
                          href={project.links.live}
                          className="portfolio-btn btn-primary-custom"
                          target="_blank"
                        >
                          <FaExternalLinkAlt /> Live Demo
                        </a>
                        <a
                          href={project.links.code}
                          className="portfolio-btn btn-secondary-custom"
                          target="_blank"
                        >
                          <FaGithub /> View Code
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#portfolioCarousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#portfolioCarousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
