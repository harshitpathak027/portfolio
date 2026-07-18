import { useDarkMode } from "./DarkModeContext";

const SkillItem = ({ label, level, icon }) => {
  return (
    <li className="skill-pill group">
      <i className={`bx ${icon} skill-pill-icon`} />
      <div className="skill-pill-text">
        <span>{label}</span>
        <small>{level}</small>
      </div>
    </li>
  );
};

const Skills = () => {
  const { darkMode } = useDarkMode();

  const skillGroups = [
    {
      title: "Frontend Development",
      description: "Crafting responsive interfaces with modern frameworks and strong UI systems.",
      skills: [
        { label: "CSS", level: "Advanced", icon: "bx-palette" },
        { label: "HTML", level: "Advanced", icon: "bx-code-alt" },
        { label: "JavaScript", level: "Advanced", icon: "bx-file" },
        { label: "React JS", level: "Advanced", icon: "bx-react" },
        { label: "Tailwind CSS", level: "Advanced", icon: "bx-brush" },
        { label: "Bootstrap", level: "Advanced", icon: "bx-layout" },
      ],
    },
    {
      title: "Backend Development",
      description: "Building reliable and secure systems with scalable architecture and APIs.",
      skills: [
        { label: "Node JS", level: "Advanced", icon: "bx-server" },
        { label: "Spring Boot", level: "Advanced", icon: "bx-data" },
        { label: "MySQL", level: "Advanced", icon: "bxs-data" },
        { label: "Spring Security", level: "Advanced", icon: "bx-lock-alt" },
        { label: "JWT", level: "Advanced", icon: "bx-key" },
        { label: "Microservices", level: "Advanced", icon: "bx-network-chart" },
      ],
    },
  ];

  return (
    <section className="skills-section" id="skills">
      <div className="skills-title-wrap">
        <span className={`skills-eyebrow ${darkMode ? "skills-eyebrow-dark" : ""}`}>Core strengths</span>
        <h2 className={`text-2xl font-bold sm:text-3xl md:text-4xl accent-underline accent-orange ${darkMode ? "text-white" : "text-slate-900"}`}>
          My Skills
        </h2>
        <p className={`skills-intro ${darkMode ? "text-slate-300" : "text-slate-600"}`}>
          I combine thoughtful design, efficient engineering, and modern tooling to deliver polished digital products.
        </p>
      </div>

      <div className="skills-grid">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className={`skills-card ${darkMode ? "skills-card-dark" : ""}`}
          >
            <div className="skills-card-head">
              <h3 className={`text-lg font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}>{group.title}</h3>
              <p className={`text-sm ${darkMode ? "text-slate-300" : "text-slate-600"}`}>{group.description}</p>
            </div>

            <ul className="skill-list">
              {group.skills.map((skill) => (
                <SkillItem key={skill.label} label={skill.label} level={skill.level} icon={skill.icon} />
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
