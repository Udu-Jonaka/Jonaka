const Skills = () => {
  const categories = [
    {
      title: "Frontend",
      icon: "fas fa-laptop-code",
      skills: [
        { name: "HTML5", icon: "fab fa-html5" },
        { name: "CSS3", icon: "fab fa-css3-alt" },
        { name: "Bootstrap", icon: "fab fa-bootstrap" },
        { name: "JavaScript", icon: "fab fa-js" },
        { name: "Next.js", icon: "fas fa-code" },
        { name: "React", icon: "fa-brands fa-react" },
      ],
    },
    {
      title: "Backend",
      icon: "fas fa-server",
      skills: [
        { name: "Node.js", icon: "fab fa-node-js" },
        { name: "Express.js", icon: "fas fa-code-branch" },
        { name: "Passport.js", icon: "fa-solid fa-id-badge" },
        { name: "ES Modules", icon: "fas fa-cube" },
      ],
    },
    {
      title: "Database",
      icon: "fas fa-database",
      skills: [
        { name: "MongoDB", icon: "fas fa-leaf" },
        { name: "CRUD Operations", icon: "fas fa-project-diagram" },
        { name: "Relationships", icon: "fas fa-link" },
        { name: "Mongo Shell", icon: "fas fa-terminal" },
      ],
    },
    {
      title: "Tools & APIs",
      icon: "fas fa-tools",
      skills: [
        { name: "Axios", icon: "fas fa-exchange-alt" },
        { name: "API Integration", icon: "fas fa-key" },
        { name: "Git", icon: "fab fa-git-alt" },
        { name: "GitHub", icon: "fab fa-github" },
        { name: "OAuth", icon: "fa-solid fa-fingerprint" },
      ],
    },
  ];

  return (
    <section id="skills">
      <div className="skills-container">
        <h2 className="section-title">My Skills</h2>

        <div className="skills-grid">
          {categories.map((category, idx) => (
            <div className="skill-category" key={idx}>
              <h3>
                <i className={category.icon}></i> {category.title}
              </h3>
              {category.skills.map((skill, sIdx) => (
                <div className="skill-item" key={sIdx}>
                  <i className={skill.icon}></i>
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
