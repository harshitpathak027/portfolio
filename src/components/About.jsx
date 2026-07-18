
import 'boxicons/css/boxicons.min.css';
import { useDarkMode } from "./DarkModeContext";

const About = () => {
    const { darkMode } = useDarkMode();

    const highlights = [
        { icon: "bx bx-check-shield", title: "Experience", value: "1+ Years" },
        { icon: "bx bx-badge-check", title: "Projects", value: "5+ Delivered" },
        { icon: "bx bx-happy-beaming", title: "DSA", value: "1000+ Problems" },
    ];

    return (
        <div className={`card about-card ${darkMode ? 'about-card-dark' : ''}`} id="about">
            <div className="about-intro">
                <span className={`about-pill ${darkMode ? 'about-pill-dark' : ''}`}>Crafting modern web experiences</span>
                <h2 className={`text-2xl font-bold sm:text-3xl md:text-4xl accent-underline accent-orange ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    About Me
                </h2>
                <p className={`mt-3 max-w-2xl mx-auto text-sm leading-6 sm:text-base ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                    I build polished, high-performing web applications with a strong eye for design, usability, and scalable solutions.
                </p>
            </div>

            <div className="about-section">
                <div className="left-about">
                    <div className={`profile-card ${darkMode ? 'profile-card-dark' : ''}`}>
                        <div className="img-profile" />
                        <div className={`profile-badge ${darkMode ? 'profile-badge-dark' : ''}`}>
                            <span className="profile-badge-dot" />
                            Available for freelance 
                        </div>
                    </div>
                </div>

                <div className="right-about">
                    <div className="right-cards">
                        {highlights.map((item) => (
                            <div
                                key={item.title}
                                className={`card-item ${darkMode ? 'border border-white/20' : 'border border-slate-200'} accent-glow green accent-animate`}
                            >
                                <div className="item-icon">
                                    <i className={`${item.icon} icon`} />
                                </div>
                                <div className="item-heading">{item.title}</div>
                                <div className={`item-description ${darkMode ? 'text-slate-200' : 'text-slate-600'}`}>
                                    {item.value}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className={`right-content ${darkMode ? 'right-content-dark' : ''}`}>
                        <p>
                            I’m a Full Stack Web Developer focused on creating responsive, user-centric digital experiences with thoughtful UI/UX and strong front-end craftsmanship.
                        </p>
                        <div className="about-highlights">
                            <div className="about-highlight-item">Strong in React, Tailwind, and modern web workflows</div>
                            <div className="about-highlight-item">Committed to clean architecture and scalable product thinking</div>
                            <div className="about-highlight-item">Passionate about problem solving, DSA, and continuous growth</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;