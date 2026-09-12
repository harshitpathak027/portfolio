import React, { useMemo, useRef, useState } from "react";
import { useDarkMode } from "./DarkModeContext";
import "boxicons/css/boxicons.min.css";

const EARLY_ACCESS_PREFILL =
  "Hi Harshit, I'd like early access to the Resume Builder App (closed testing).";
export const EARLY_ACCESS_EVENT = "resume-early-access-request";

const handleRequestEarlyAccess = (e) => {
  e.preventDefault();
  window.dispatchEvent(
    new CustomEvent(EARLY_ACCESS_EVENT, { detail: EARLY_ACCESS_PREFILL })
  );
  const target = document.getElementById("contact");
  if (target) {
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  } else {
    window.location.hash = "contact";
  }
};

const projectItems = [
    {
    title: "Resume Builder App",
    category: "Full Stack",
    summary: "Built with Spring Boot and React, focused on a polished flow and a better user experience.",
    highlights: ["Spring Boot APIs", "React UI", "User-friendly flow"],
    image: "/images/WhatsApp%20Image%202026-07-18%20at%2009.59.04.jpeg",
    imageAlt: "WhatsApp screenshot for resume builder",
    earlyAccess: true,
    previewImages: [
      {
        src: "/images/resume-builder-preview-4.png",
        alt: "Resume Builder — section progress screen",
      },
      {
        src: "/images/resume-builder-preview-2.png",
        alt: "Resume Builder — My Resumes screen",
      },
      {
        src: "/images/resume-builder-preview-1.png",
        alt: "Resume Builder — pick a style screen",
      },
    ],
  },
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

];

const filterTabs = ["All", "Full Stack", "Client", "Profiles"];

// Faces that flip need to be hidden from view once they're facing away
// from the viewer.
const backfaceHiddenStyle = {
  backfaceVisibility: "hidden",
  WebkitBackfaceVisibility: "hidden",
};

const ProjectCard = ({ project, index }) => {
  const { darkMode } = useDarkMode();
  const [flipped, setFlipped] = useState(false);
  const [previewIndex, setPreviewIndex] = useState(0);
  const touchStartX = useRef(null);
  const touchDeltaX = useRef(0);

  const images = project.previewImages || [];

  const goNext = () => setPreviewIndex((i) => (i + 1) % images.length);
  const goPrev = () => setPreviewIndex((i) => (i - 1 + images.length) % images.length);

  const openPreview = () => {
    setPreviewIndex(0);
    setFlipped(true);
  };
  const closePreview = () => setFlipped(false);

  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchMove = (e) => {
    if (touchStartX.current === null) return;
    touchDeltaX.current = e.touches[0].clientX - touchStartX.current;
  };
  const onTouchEnd = () => {
    if (Math.abs(touchDeltaX.current) > 50) {
      if (touchDeltaX.current < 0) goNext();
      else goPrev();
    }
    touchStartX.current = null;
    touchDeltaX.current = 0;
  };

  return (
    <article
      className={`group relative min-w-[72vw] max-w-[72vw] shrink-0 snap-center overflow-hidden rounded-2xl border shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:min-w-[60vw] sm:max-w-[60vw] sm:rounded-3xl sm:hover:-translate-y-2 md:min-w-0 md:max-w-none [perspective:1800px] ${darkMode ? "border-slate-700 bg-slate-800" : "border-gray-200 bg-white"}`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div
        className="relative transition-transform duration-700 ease-out [transform-style:preserve-3d]"
        style={{ transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)" }}
      >
        {/* FRONT FACE */}
        <div className="p-2.5 sm:p-3 md:p-6" style={backfaceHiddenStyle}>
          {project.logo && (
            <div className={`flex h-20 items-center justify-center rounded-2xl bg-gradient-to-br ${project.category === "Profiles" ? "from-orange-500/20 via-transparent to-transparent" : "from-gray-100 via-transparent to-transparent"} ${darkMode ? "border border-slate-700" : "border border-gray-100"}`}>
              <img
                src={project.logo}
                alt={project.logoAlt}
                className="h-12 w-12 object-contain sm:h-14 sm:w-14"
              />
            </div>
          )}

          {project.image && (
            <div className={`relative mb-3 flex h-36 w-full items-center justify-center overflow-hidden rounded-2xl border p-2 sm:h-44 sm:p-3 ${project.imageWrapperClassName || ""} ${darkMode ? "border-slate-700 bg-slate-900/70" : "border-gray-100 bg-gray-50"}`}>
              {project.earlyAccess && (
                <span className="absolute left-3 top-3 z-10 inline-flex items-center gap-1.5 rounded-full bg-orange-500 px-2.5 py-1 text-[11px] font-semibold text-white shadow-sm">
                  <i className="bx bxs-circle text-[6px]" />
                  Closed testing
                </span>
              )}
              <img
                src={project.image}
                alt={project.imageAlt}
                className={`h-full w-full rounded-lg bg-white object-cover object-center ${project.imageClassName || ""}`}
              />
              {images.length > 0 && (
                <button
                  type="button"
                  onClick={openPreview}
                  className="absolute bottom-3 right-3 z-10 inline-flex items-center gap-1.5 rounded-full bg-black/60 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-sm transition-colors hover:bg-black/75"
                >
                  <i className="bx bx-fullscreen text-sm" />
                  Preview
                </button>
              )}
            </div>
          )}

          <div className="flex items-center justify-between gap-3">
            <span className={`rounded-full px-3 py-1 text-xs font-semibold ${darkMode ? "bg-slate-700 text-gray-200" : "bg-gray-100 text-gray-600"}`}>
              {project.category}
            </span>
            <span className="text-sm font-medium text-orange-500">{project.href ? "Profile" : "Featured"}</span>
          </div>

          <h3 className={`mt-3 text-lg font-semibold sm:mt-4 sm:text-2xl accent-underline accent-orange ${darkMode ? "text-white" : "text-gray-900"}`}>
            {project.title}
          </h3>
          <p className={`mt-2 text-sm leading-5 sm:text-[15px] sm:leading-6 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
            {project.summary}
          </p>

          <div className="mt-4 flex flex-wrap gap-2 sm:mt-6">
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
            <div className="mt-4 grid grid-cols-2 gap-2 sm:mt-5 sm:gap-3">
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

          {project.earlyAccess && (
            <div className={`mt-4 flex flex-col items-start gap-3 rounded-2xl border p-4 sm:mt-5 ${darkMode ? "border-slate-700 bg-slate-900/60" : "border-orange-100 bg-orange-50/60"}`}>
              <div className="max-w-none">
                <p className={`max-w-none text-sm font-medium leading-5 ${darkMode ? "text-gray-200" : "text-gray-800"}`}>
                  Want to be one of the first to try it?
                </p>
                <p className={`mt-1 max-w-none text-xs leading-5 sm:text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                  It's in closed testing right now — drop me a note and I'll gladly add you in.
                </p>
              </div>
              <a
                href="#contact"
                onClick={handleRequestEarlyAccess}
                className="inline-flex w-full items-center justify-center gap-1.5 whitespace-nowrap rounded-full bg-orange-500 px-4 py-2.5 text-sm font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5 hover:bg-orange-600 sm:w-auto"
              >
                Request early access
                <i className="bx bx-envelope text-base" />
              </a>
            </div>
          )}

          {project.href && (
            <a
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-orange-500 transition-transform duration-300 group-hover:translate-x-1 sm:mt-5"
            >
              Open profile
              <i className="bx bx-link-external text-base" />
            </a>
          )}
        </div>

        {/* BACK FACE — only exists for projects with a preview gallery */}
        {images.length > 0 && (
          <div
            className="absolute inset-0 flex flex-col p-3 sm:p-4"
            style={{ ...backfaceHiddenStyle, transform: "rotateY(180deg)" }}
          >
            <div className="mb-2 flex items-center justify-between gap-2">
              <span className={`text-xs font-semibold tracking-wide sm:text-sm ${darkMode ? "text-white" : "text-gray-900"}`}>
                {project.title}
              </span>
              <button
                type="button"
                onClick={closePreview}
                aria-label="Close preview"
                style={{
                  height: 28,
                  width: 28,
                  minHeight: 0,
                  minWidth: 0,
                  maxWidth: "none",
                  padding: 0,
                  margin: 0,
                  border: 0,
                  borderRadius: 9999,
                  lineHeight: 1,
                  boxSizing: "content-box",
                  flex: "0 0 auto",
                }}
                className={`flex items-center justify-center transition-colors ${darkMode ? "bg-slate-700/80 text-gray-200 hover:bg-slate-600" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}
              >
                <i className="bx bx-x text-base" />
              </button>
            </div>

            <div
              className={`relative min-h-0 flex-1 touch-pan-y overflow-hidden rounded-2xl border bg-transparent ${darkMode ? "border-slate-700" : "border-gray-100"}`}
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            >
              <div
                className="flex h-full transition-transform duration-300 ease-out"
                style={{ transform: `translateX(-${previewIndex * 100}%)` }}
              >
                {images.map((img) => (
                  <div key={img.src} className="flex h-full w-full shrink-0 items-center justify-center p-2">
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="max-h-full max-w-full select-none object-contain"
                      draggable={false}
                    />
                  </div>
                ))}
              </div>

              {images.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={goPrev}
                    aria-label="Previous image"
                    style={{
                      position: "absolute",
                      left: 8,
                      top: "50%",
                      transform: "translateY(-50%)",
                      height: 28,
                      width: 28,
                      minHeight: 0,
                      minWidth: 0,
                      maxWidth: "none",
                      padding: 0,
                      margin: 0,
                      border: 0,
                      borderRadius: 9999,
                      lineHeight: 1,
                      boxSizing: "content-box",
                    }}
                    className={`flex items-center justify-center text-white backdrop-blur-sm transition-colors ${darkMode ? "bg-black/50 hover:bg-black/70" : "bg-black/35 hover:bg-black/55"}`}
                  >
                    <i className="bx bx-chevron-left text-sm" />
                  </button>
                  <button
                    type="button"
                    onClick={goNext}
                    aria-label="Next image"
                    style={{
                      position: "absolute",
                      right: 8,
                      top: "50%",
                      transform: "translateY(-50%)",
                      height: 28,
                      width: 28,
                      minHeight: 0,
                      minWidth: 0,
                      maxWidth: "none",
                      padding: 0,
                      margin: 0,
                      border: 0,
                      borderRadius: 9999,
                      lineHeight: 1,
                      boxSizing: "content-box",
                    }}
                    className={`flex items-center justify-center text-white backdrop-blur-sm transition-colors ${darkMode ? "bg-black/50 hover:bg-black/70" : "bg-black/35 hover:bg-black/55"}`}
                  >
                    <i className="bx bx-chevron-right text-sm" />
                  </button>
                </>
              )}
            </div>

            {/* Dots live in their own slim row outside the image, not overlaid */}
            {images.length > 1 && (
              <div className="mt-2 flex shrink-0 items-center justify-center gap-1.5">
                {images.map((img, i) => (
                  <button
                    key={img.src}
                    type="button"
                    onClick={() => setPreviewIndex(i)}
                    aria-label={`Go to image ${i + 1}`}
                    style={{
                      height: 6,
                      width: i === previewIndex ? 16 : 6,
                      minHeight: 0,
                      minWidth: 0,
                      maxWidth: "none",
                      padding: 0,
                      margin: 0,
                      border: 0,
                      borderRadius: 9999,
                      lineHeight: 1,
                      boxSizing: "content-box",
                      flex: "0 0 auto",
                    }}
                    className={`transition-all duration-300 ${
                      i === previewIndex ? "bg-orange-500" : darkMode ? "bg-slate-600" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </article>
  );
};

const Projects = () => {
  const { darkMode } = useDarkMode();
  const [activeFilter, setActiveFilter] = useState("All");

  const visibleProjects = useMemo(() => {
    if (activeFilter === "All") return projectItems;
    return projectItems.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  return (
    <section className="projects-section px-1.5 py-12 sm:px-7 sm:py-16" id="projects">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 text-center">
        <p className="text-xs uppercase tracking-[0.35em] text-green-500 sm:text-sm">Projects</p>
        <h2 className={`text-3xl font-semibold sm:text-4xl md:text-5xl accent-underline accent-orange ${darkMode ? "text-white" : "text-gray-900"}`}>
          Selected work and practice
        </h2>
        <p className={`max-w-3xl text-sm leading-6 sm:text-base ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
          A small collection of work that shows how I build, solve, and deliver real user-facing experiences.
        </p>
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-center gap-2 sm:mt-8 sm:gap-3">
        {filterTabs.map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => setActiveFilter(tab)}
            className={`rounded-full border px-3 py-2 text-sm font-medium transition-all duration-300 sm:px-4 ${activeFilter === tab ? "border-orange-500 bg-orange-500 text-white shadow-lg shadow-orange-500/20" : darkMode ? "border-slate-700 bg-slate-800 text-gray-200 hover:border-slate-500 hover:bg-slate-700" : "border-gray-300 bg-white text-gray-700 hover:border-gray-400 hover:bg-gray-50"}`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="mx-auto mt-4 max-w-6xl sm:mt-6 md:mt-8">
        <div className={`flex snap-x snap-mandatory gap-2 overflow-x-auto pb-4 scroll-smooth md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:pb-0 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
          {visibleProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;