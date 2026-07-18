import React, { useState } from "react";
import emailjs from "emailjs-com";
import { useDarkMode } from "./DarkModeContext";

const Banner=()=>{
  const { darkMode } = useDarkMode();
  const [showResumeForm, setShowResumeForm] = useState(false);
  const [resumeForm, setResumeForm] = useState({
    name: "",
    email: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const handleResumeChange = (event) => {
    setResumeForm({ ...resumeForm, [event.target.name]: event.target.value });
  };

  const triggerResumeDownload = () => {
    const link = document.createElement("a");
    link.href = "/Harshit_Pathak_Resume.pdf";
    link.download = "Harshit_Pathak_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleResumeSubmit = (event) => {
    event.preventDefault();
    setSubmitting(true);

    emailjs.send(
      "service_qkwtp4i",
      "template_js8ke8d",
      {
        name: resumeForm.name || "Resume Visitor",
        email: resumeForm.email,
        message: `Resume download request received. Visitor Gmail: ${resumeForm.email}. Visitor name: ${resumeForm.name || "Not provided"}.`,
      },
      "2rMUI3_1UFz8xXrU9"
    ).then(
      () => {
        triggerResumeDownload();
        setResumeForm({ name: "", email: "" });
        setShowResumeForm(false);
      },
      (error) => {
        console.error(error);
        alert("Unable to send the request right now. Please try again.");
      }
    ).finally(() => {
      setSubmitting(false);
    });
  };

    return (
        <>
        <div className="banner" id="home">
            <div className="main-banner m-9 md:m-0">
                <div className="first-section">

                </div>
                <div className="second-section">
                    <div className="banner-text">

                    <h1 className="banner-heading">Harshit Pathak</h1>
                    <div>----------- Full Stack Web Developer</div>
                    <p className="banner-subheading">Building responsive, scalable web solutions with modern technologies. Turning ideas into elegant digital experiences that users love.</p>
                    </div>
                    <div className="banner-buttons"> 
                    <button
                        type="button"
                        onClick={() => setShowResumeForm(true)}
                      className="banner-button  group inline-flex gap-4 mt-4 items-center border border-gray rounded-lg bg-gray-700 text-white hover:bg-gray-900"
                    >
                        <span>Download Resume</span>

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                        className="h-6 w-6 transition-all duration-300 ease-out group-hover:text-orange-500 group-hover:-translate-x-1"
                        >
                        <path d="M12 2a5 5 0 0 0-5 5v2H6a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2h-1V7a5 5 0 0 0-5-5Zm-3 7V7a3 3 0 0 1 6 0v2H9Zm3 4a1.5 1.5 0 0 1 .75 2.8V18h-1.5v-2.2A1.5 1.5 0 0 1 12 13Z" />
                        </svg>
                    </button>

    
                    </div>
                </div>
                <div className="third-section">
                    {/* set --blob-color inline or via CSS to change color */}
                    <div className="blob-wrapper" style={{ "--blob-color": "rgba(76,175,80,0.18)" }}>
                        <div className="blob-bg" aria-hidden="true" />
                        <div
                          className="blob-image"
                          role="img"
                          aria-label="Profile image"
                         
                        />
                    </div>
                </div>
            </div>
        </div>

          {showResumeForm && (
            <div className="fixed inset-0 z-[60] flex items-center justify-center px-4">
              <div className="absolute inset-0 bg-black/60" onClick={() => setShowResumeForm(false)} />
              <form
                onSubmit={handleResumeSubmit}
                className={`relative z-10 w-full max-w-md rounded-3xl border border-transparent bg-transparent p-6 shadow-none ${darkMode ? "text-white" : "text-gray-900"}`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-semibold">Get the resume</h3>
                    <p className={`mt-2 text-sm ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                      Enter your name and Gmail. I will receive the request, and the resume will download right after submission.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setShowResumeForm(false)}
                    className={`rounded-full px-3 py-1 text-sm ${darkMode ? "bg-slate-800 text-gray-200" : "bg-gray-100 text-gray-700"}`}
                  >
                    Close
                  </button>
                </div>

                <div className="mt-6 space-y-4">
                  <div className="space-y-2">
                    <label className={`text-sm font-medium ${darkMode ? "text-gray-200" : "text-gray-700"}`}>Name</label>
                    <input
                      required
                      name="name"
                      value={resumeForm.name}
                      onChange={handleResumeChange}
                      type="text"
                      placeholder="Your name"
                      className={`w-full rounded-xl border px-4 py-3 outline-none ${darkMode ? "border-slate-700 bg-slate-800 text-white placeholder:text-gray-400" : "border-gray-300 bg-white text-gray-900 placeholder:text-gray-400"}`}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className={`text-sm font-medium ${darkMode ? "text-gray-200" : "text-gray-700"}`}>Gmail</label>
                    <input
                      required
                      name="email"
                      value={resumeForm.email}
                      onChange={handleResumeChange}
                      type="email"
                      placeholder="yourname@gmail.com"
                      className={`w-full rounded-xl border px-4 py-3 outline-none ${darkMode ? "border-slate-700 bg-slate-800 text-white placeholder:text-gray-400" : "border-gray-300 bg-white text-gray-900 placeholder:text-gray-400"}`}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="mt-6 w-full rounded-xl bg-orange-500 px-4 py-3 font-medium text-white transition hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {submitting ? "Sending..." : "Send & Download Resume"}
                </button>
              </form>
            </div>
          )}
        </>
    )
}
export default Banner;
