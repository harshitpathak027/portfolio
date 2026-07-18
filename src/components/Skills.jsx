import { useDarkMode } from "./DarkModeContext";

const SkillItem = ({ label, icon }) => {
  return (
    <li className="skill-pill">
      <i className={`bx ${icon} skill-pill-icon`} />
      <span className="skill-pill-label">{label}</span>
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

      <div className="md:hidden">
        <div className="skills-grid flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-smooth pb-4 md:grid md:gap-5 md:overflow-visible md:pb-0">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className={`skills-card min-w-[78vw] max-w-[78vw] shrink-0 snap-center p-3 sm:min-w-[64vw] sm:max-w-[64vw] sm:p-4 md:min-w-0 md:max-w-none md:p-6 ${darkMode ? "skills-card-dark" : ""}`}
          >
            <div className="skills-card-head mb-3">
              <h3 className={`text-lg font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}>{group.title}</h3>
              <p className={`text-sm ${darkMode ? "text-slate-300" : "text-slate-600"}`}>{group.description}</p>
            </div>

            <ul className="skill-list">
              {group.skills.map((skill) => (
                <SkillItem key={skill.label} label={skill.label} icon={skill.icon} />
              ))}
            </ul>
          </div>
        ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
