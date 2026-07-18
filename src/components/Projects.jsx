import React, { useMemo, useState } from "react";
import { useDarkMode } from "./DarkModeContext";
import "boxicons/css/boxicons.min.css";

const projectItems = [

  {
    title: "Client E-commerce Work",
    category: "Client",
    summary: "Delivered practical features for shopping and admin workflows with usability in mind.",
    highlights: ["Product workflow", "Admin support", "Responsive UI"],
    image: "/images/Screenshot%202026-07-18%20at%209.53.38%E2%80%AFAM.png",
    imageAlt: "Client ecommerce screenshot",
    imageWrapperClassName: "aspect-[16/10]",
    imageClassName: "object-cover object-center",
  },
  {
    title: "LeetCode Profile",
    category: "Profiles",
    summary: "Tracking daily coding streaks, badge milestones, and problem-solving consistency on LeetCode.",
    highlights: ["500 days", "365 days", "DSA growth"],
    href: "https://leetcode.com/u/harshit-pathak/",
    logo: "/images/pngaaa.com-4868118.png",
    logoAlt: "LeetCode logo",
    medals: [
      {
        src: "/images/download.png",
        alt: "LeetCode 500 days badge",
      },
      {
        src: "/images/download%20(1).png",
        alt: "LeetCode 365 days badge",
      },
    ],
  },
  {
    title: "GeeksforGeeks Profile",
    category: "Profiles",
    summary: "A practice space for algorithms, notes, and structured problem solving on GeeksforGeeks.",
    highlights: ["Algorithms", "Notes", "Practice"],
    href: "http://geeksforgeeks.org/profile/pathakji",
    logo: "/images/Geeksforgeeks--Streamline-Simple-Icons.png",
    logoAlt: "GeeksforGeeks logo",
  },
    {
    title: "Resume Builder App",
    category: "Full Stack",
    summary: "Built with Spring Boot and React, focused on a polished flow and a better user experience.",
    highlights: ["Spring Boot APIs", "React UI", "User-friendly flow"],
    image: "/images/WhatsApp%20Image%202026-07-18%20at%2009.59.04.jpeg",
    imageAlt: "WhatsApp screenshot for resume builder",
  },
];

const Projects = () => {
  const { darkMode } = useDarkMode();
  const [activeFilter, setActiveFilter] = useState("All");

  const visibleProjects = useMemo(() => {
    if (activeFilter === "All") return projectItems;
    return projectItems.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  const filterTabs = ["All", "Full Stack", "Client", "Profiles"];

  return (
    <section className="projects-section px-7 py-16" id="projects">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 text-center">
        <p className="text-sm uppercase tracking-[0.35em] text-green-500">Projects</p>
        <h2 className={`text-4xl font-semibold md:text-5xl accent-underline accent-orange ${darkMode ? "text-white" : "text-gray-900"}`}>
          Selected work and practice
        </h2>
        <p className={`max-w-3xl text-sm md:text-base ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
          A small collection of work that shows how I build, solve, and deliver real user-facing experiences.
        </p>
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        {filterTabs.map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => setActiveFilter(tab)}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300 ${activeFilter === tab ? "border-orange-500 bg-orange-500 text-white shadow-lg shadow-orange-500/20" : darkMode ? "border-slate-700 bg-slate-800 text-gray-200 hover:border-slate-500 hover:bg-slate-700" : "border-gray-300 bg-white text-gray-700 hover:border-gray-400 hover:bg-gray-50"}`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="mx-auto mt-10 grid max-w-6xl gap-6 md:grid-cols-3">
        {visibleProjects.map((project, index) => (
          <article
            key={project.title}
            className={`group overflow-hidden rounded-3xl border p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${darkMode ? "border-slate-700 bg-slate-800" : "border-gray-200 bg-white"}`}
            style={{ transitionDelay: `${index * 80}ms` }}
          >
            {project.logo && (
              <div className={`flex h-24 items-center justify-center rounded-2xl bg-gradient-to-br ${project.category === "Profiles" ? "from-orange-500/20 via-transparent to-transparent" : "from-gray-100 via-transparent to-transparent"} ${darkMode ? "border border-slate-700" : "border border-gray-100"}`}>
                <img
                  src={project.logo}
                  alt={project.logoAlt}
                  className="h-14 w-14 object-contain"
                />
              </div>
            )}

            {project.image && (
              <div className={`mb-5 flex w-full items-center justify-center overflow-hidden rounded-2xl border p-3 ${project.imageWrapperClassName || "h-64"} ${darkMode ? "border-slate-700 bg-slate-900/70" : "border-gray-100 bg-gray-50"}`}>
                <img
                  src={project.image}
                  alt={project.imageAlt}
                  className={`h-full w-full rounded-xl bg-white ${project.imageClassName || "object-contain object-center"}`}
                />
              </div>
            )}

            <div className="flex items-center justify-between gap-3">
              <span className={`rounded-full px-3 py-1 text-xs font-semibold ${darkMode ? "bg-slate-700 text-gray-200" : "bg-gray-100 text-gray-600"}`}>
                {project.category}
              </span>
              <span className="text-sm font-medium text-orange-500">{project.href ? "Profile" : "Featured"}</span>
            </div>

            <h3 className={`mt-5 text-2xl font-semibold accent-underline accent-orange ${darkMode ? "text-white" : "text-gray-900"}`}>
              {project.title}
            </h3>
            <p className={`mt-3 text-sm leading-6 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
              {project.summary}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.highlights.map((item) => (
                <span
                  key={item}
                  className={`rounded-full px-3 py-1 text-xs font-medium transition-transform duration-300 group-hover:-translate-y-0.5 ${darkMode ? "bg-slate-700 text-gray-200" : "bg-gray-100 text-gray-600"}`}
                >
                  {item}
                </span>
              ))}
            </div>

            {project.medals && (
              <div className="mt-5 grid grid-cols-2 gap-3">
                {project.medals.map((medal) => (
                  <div
                    key={medal.alt}
                    className={`overflow-hidden rounded-2xl border p-2 ${darkMode ? "border-slate-700 bg-slate-900/50" : "border-gray-200 bg-gray-50"}`}
                  >
                    <img src={medal.src} alt={medal.alt} className="h-28 w-full rounded-xl object-cover" />
                  </div>
                ))}
              </div>
            )}

            {project.href && (
              <a
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-orange-500 transition-transform duration-300 group-hover:translate-x-1"
              >
                Open profile
                <i className="bx bx-link-external text-base" />
              </a>
            )}
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;