// Note: Since we are using Bootstrap 5 via CDN in layout.js, the carousel structure *might* work if JS is loaded.
// However, React handles DOM updates, so Bootstrap JS usually needs initializing or a React wrapper.
// But forcing vanilla Bootstrap JS via script tag in Layout might work for simple carousels.
// If not, we can implement a simple React state carousel or just list them.
// Given strict instructions to keep Home page design primary reference, I'll attempt to keep structure.
// If carousel doesn't work, I'll revisit.

const Portfolio = () => {
  // We could extract data here too if we want to loop, but for carousel structure it's specific.
  // I'll keep the static structure for now to ensure classes match exactly, or map it.
  // Let's map it to be cleaner React code.

  const projects = [
    {
      title: "Delish",
      desc: "Delish is a modern food-ordering web app that lets users browse meals, view details, and place orders through a smooth, responsive interface.",
      img: "/images/delish.png",
      tags: ["Node.js", "Next.js", "MongoDB", "React"],
      links: {
        live: "https://delish-pied.vercel.app/",
        code: "https://github.com/Udu-Jonaka/delish",
      },
    },
    {
      title: "Nora Nova Energies",
      desc: "A corporate landing page website for Noranova Energy Services Limited — a Nigeria-owned oil & gas services company — showcasing their services, mission, and contact information in a clean, professional layout.",
      img: "/images/nesl.png",
      tags: ["JavaScript", "Express", "EJS", "jQuery"],
      links: {
        live: "https://nesl.vercel.app/",
        code: "https://github.com/Udu-Jonaka/NESL",
      },
    },
    {
      title: "Weather Search",
      desc: "An interactive weather application using third-party APIs to display real-time temprature in any given location.",
      img: "/images/weather.png",
      tags: ["Node.js", "CSS", "JavaScript", "Axios"],
      links: {
        live: "https://weather-app-nine-mocha-46.vercel.app/",
        code: "https://github.com/Udu-Jonaka/weather-app",
      },
    },
  ];

  return (
    <section id="portfolio">
      <div className="portfolio-container">
        <h2 className="section-title">My Portfolio</h2>

        <div
          id="portfolioCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            {projects.map((_, idx) => (
              <button
                key={idx}
                type="button"
                data-bs-target="#portfolioCarousel"
                data-bs-slide-to={idx}
                className={idx === 0 ? "active" : ""}
                aria-current={idx === 0 ? "true" : "false"}
                aria-label={`Slide ${idx + 1}`}
              ></button>
            ))}
          </div>

          <div className="carousel-inner">
            {projects.map((project, idx) => (
              <div
                className={`carousel-item ${idx === 0 ? "active" : ""}`}
                key={idx}
              >
                <div className="portfolio-card">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="portfolio-img"
                  />
                  <div className="portfolio-content">
                    <h3>{project.title}</h3>
                    <p>{project.desc}</p>
                    <div className="tech-tags">
                      {project.tags.map((tag, tIdx) => (
                        <span className="tech-tag" key={tIdx}>
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="portfolio-links">
                      <a
                        href={project.links.live}
                        className="portfolio-btn btn-primary-custom"
                        target="_blank"
                      >
                        <i className="fas fa-external-link-alt"></i> Live Demo
                      </a>
                      <a
                        href={project.links.code}
                        className="portfolio-btn btn-secondary-custom"
                        target="_blank"
                      >
                        <i className="fab fa-github"></i> View Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
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
};

export default Portfolio;
