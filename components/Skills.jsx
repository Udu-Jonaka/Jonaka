import {
  FaLaptopCode,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaJs,
  FaReact,
  FaServer,
  FaNodeJs,
  FaCube,
  FaDatabase,
  FaProjectDiagram,
  FaLink,
  FaTerminal,
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
  SiMongoose,
} from "react-icons/si";

function Skills() {
  const categories = [
    {
      title: "Frontend",
      icon: <FaLaptopCode />,
      skills: [
        { name: "HTML5", icon: <FaHtml5 /> },
        { name: "CSS3", icon: <FaCss3Alt /> },
        { name: "Bootstrap", icon: <FaBootstrap /> },
        { name: "JavaScript", icon: <FaJs /> },
        { name: "React", icon: <FaReact /> },
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
      ],
    },
    {
      title: "Database",
      icon: <FaDatabase />,
      skills: [
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "CRUD Operations", icon: <FaProjectDiagram /> },
        { name: "Relationships", icon: <FaLink /> },
        { name: "Mongo Shell", icon: <FaTerminal /> },
        { name: "Mongoose", icon: <SiMongoose /> },
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
        { name: "OAuth", icon: <FaFingerprint /> },
      ],
    },
  ];

  return (
    <section id="skills">
      <div className="skills-container">
        <h2 className="section-title">My Skills</h2>

        <div className="skills-grid">
          {categories.map(function (category, idx) {
            return (
              <div className="skill-category" key={idx}>
                <h3>
                  {category.icon} {category.title}
                </h3>
                {category.skills.map(function (skill, sIdx) {
                  return (
                    <div className="skill-item contact-card" key={sIdx}>
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
  );
}

export default Skills;
