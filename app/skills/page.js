import {
  FaLaptopCode,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaServer,
  FaNodeJs,
  FaCube,
  FaTools,
  FaKey,
  FaGitAlt,
  FaGithub,
  FaFingerprint,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiAxios,
  SiPassport,
  SiTypescript,
  SiExpo,
  SiFirebase,
  SiVercel,
  SiPostman,
} from "react-icons/si";

export const metadata = {
  title: "My Skills - Jonaka Udu",
  description: "Frontend, Backend, and Database technologies I work with.",
};

export default function SkillsPage() {
  const categories = [
    {
      title: "Frontend",
      icon: <FaLaptopCode />,
      skills: [
        { name: "HTML5", icon: <FaHtml5 /> },
        { name: "CSS3", icon: <FaCss3Alt /> },
        { name: "JavaScript", icon: <FaJs /> },
        { name: "TypeScript", icon: <SiTypescript /> },
        { name: "React", icon: <FaReact /> },
        { name: "React Native", icon: <FaReact /> },
        { name: "Expo", icon: <SiExpo /> },
      ],
    },
    {
      title: "Backend",
      icon: <FaServer />,
      skills: [
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Express.js", icon: <SiExpress /> },
        { name: "Next.js", icon: <SiNextdotjs /> },
        { name: "Passport.js", icon: <SiPassport /> },
        { name: "ES Modules", icon: <FaCube /> },
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "Firebase", icon: <SiFirebase /> },
      ],
    },
    {
      title: "Tools & APIs",
      icon: <FaTools />,
      skills: [
        { name: "Axios", icon: <SiAxios /> },
        { name: "API Integration", icon: <FaKey /> },
        { name: "Git", icon: <FaGitAlt /> },
        { name: "GitHub", icon: <FaGithub /> },
        { name: "Vercel", icon: <SiVercel /> },
        { name: "Postman", icon: <SiPostman /> },
        { name: "OAuth", icon: <FaFingerprint /> },
      ],
    },
  ];

  return (
    <main>
      <section id="head" className="head" data-aos="fade-in">
        <div className="head-content">
          <h2 className="section-title" data-aos="fade-up" data-aos-delay="200">
            My Skills
          </h2>
        </div>
      </section>
      <section className="portfolio-section">
        <div className="skills-container">
          <div className="skills-grid">
            {categories.map(function (category, idx) {
              return (
                <div className="skill-category" key={idx}>
                  <h3>
                    {category.icon} {category.title}
                  </h3>
                  {category.skills.map(function (skill, sIdx) {
                    return (
                      <div className="skill-item" key={sIdx}>
                        {skill.icon}
                        <span>{skill.name}</span>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
