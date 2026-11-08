export const metadata = {
  title: "Portfolio - Jonaka Udu",
  description: "Check out my latest full-stack development projects.",
};

import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export default function ProjectsPage() {
  return (
    <main>
      <section id="head" className="head" data-aos="fade-in">
        <div className="head-content">
          <h2 className="section-title" data-aos="fade-up" data-aos-delay="100">
            All Projects
          </h2>
        </div>
      </section>

      <section
        className="portfolio-showcase-section"
        style={{ paddingTop: "20px" }}
      >
        <div className="portfolio-showcase-container">
          <div className="portfolio-items-grid">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.title || index}
                project={project}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
