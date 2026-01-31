
import react from "react";
import 'boxicons/css/boxicons.min.css';
import { useDarkMode } from "./DarkModeContext";



const About = () => {
    const {darkMode, setDarkMode} = useDarkMode();
    return (

        <>
            <div className="card " id="about">

                <div className="intro">
                    <div className="text-2xl font-bold">About Me</div>
                </div>
                <div className="about-section">

                    <div className="left-about">
                        <div className="img-profile"></div>
                    </div>
                    <div className="right-about">
                        <div className="right-cards">
                            <div className={`card-item ${darkMode?'border border-white':'border border-gray-300'}`}>
                                <div className="item-icon">
                                    <i className="bx bx-check-shield icon" />
                                </div>
                                <div className="item-heading">
                                    Experience
                                </div>
                                <div className={`item-description ${darkMode ? 'text-white' : 'text-gray-600'}`}>
                                    1+ Years of Working
                                </div>
                            </div>
         <div className={`card-item ${darkMode?'border border-white':'border border-gray-300'}`}>                                <div className="item-icon">
                                    {/* use a valid icon name */}
                                    <i className="bx bx-badge-check icon" />
                                </div>
                                <div className="item-heading">
                                    Completed
                                </div>
                                <div className="item-description">
                                    5+ Projects
                                </div>
                            </div>
                                  <div className={`card-item ${darkMode?'border border-white':'border border-gray-300'}`}>
                                <div className="item-icon">
                                    <i className="bx bx-happy-beaming icon" />
                                </div>
                                <div className="item-heading">
                                    Algorithms
                                </div>
                                <div className="item-description">
                                    1000+ Problems
                                </div>
                            </div>
                        </div>
                        <div className="right-content">
                            Full Stack Web Developer crafting responsive, user-centric digital experiences with exceptional UI/UX design. I translate complex requirements into elegant, scalable solutions. Passionate about Data Structures and Algorithms, with 1000+ problems solved on competitive programming platforms. Always learning and pushing boundaries in modern web development.
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default About;