import { useState } from "react";
import { useDarkMode } from "./DarkModeContext";

const Qualifications = () => {
  const [selectedTab, setSelectedTab] = useState("Education");
  const { darkMode } = useDarkMode();

  const educationEntries = [
    { title: "B.Tech in Computer Science", institution: "GL Bajaj Group Of Institutions", period: "2020 - 2024" },
    { title: "12th Standard", institution: "Wisdom Public School", period: "2020" },
    { title: "10th Standard", institution: "Wisdom Public School", period: "2018" },
  ];

  const experienceEntries = [
    { title: "Software Engineer", institution: "LTIMINDTREE", period: "Feb 2026 - Present" },
    { title: "Web Developer Trainee", institution: "Keyideas InfoTech", period: "Mar 2024 - Oct 2024" },
  ];

  const entries = selectedTab === "Education" ? educationEntries : experienceEntries;

  return (
    <section className="qualification-section" id="qualification">
      <div className="qualification-heading">
        <span className={`qualification-pill ${darkMode ? "qualification-pill-dark" : ""}`}>Journey so far</span>
        <h2 className={`text-2xl font-bold sm:text-3xl md:text-4xl accent-underline accent-orange ${darkMode ? "text-white" : "text-slate-900"}`}>
          Qualifications
        </h2>
        <p className={`qualification-subtitle ${darkMode ? "text-slate-300" : "text-slate-600"}`}>
          A concise view of my academic background and professional growth.
        </p>
      </div>

      <div className="qualification-tabs">
        <button
          className={`qualification-tab ${selectedTab === "Education" ? "qualification-tab-active" : ""}`}
          onClick={() => setSelectedTab("Education")}
        >
          <i className="bx bx-book-open" />
          Education
        </button>
        <button
          className={`qualification-tab ${selectedTab === "Experience" ? "qualification-tab-active" : ""}`}
          onClick={() => setSelectedTab("Experience")}
        >
          <i className="bx bx-briefcase" />
          Experience
        </button>
      </div>

      <div className="qualification-timeline">
        {entries.map((entry, index) => {
          const alignLeft = index % 2 === 0;
          return (
            <div key={entry.title} className={`qualification-item ${alignLeft ? "left" : "right"}`}>
              <div className="qualification-dot" />
              <div className={`qualification-card ${darkMode ? "qualification-card-dark" : ""}`}>
                <span className="qualification-period">{entry.period}</span>
                <h3>{entry.title}</h3>
                <p>{entry.institution}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Qualifications;
