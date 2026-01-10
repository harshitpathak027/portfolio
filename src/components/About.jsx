
import react from "react";
import 'boxicons/css/boxicons.min.css';



const About = () => {
    return (

        <>
            <div className="card " id="about">

                <div className="intro">
                    <h2>About Me</h2>
                </div>
                <div className="about-section">

                    <div className="left-about">
                        <div className="img-profile"></div>
                    </div>
                    <div className="right-about">
                        <div className="right-cards">
                            <div className="card-item">
                                <div className="item-icon">
                                    <i className="bx bx-check-shield icon" />
                                </div>
                                <div className="item-heading">
                                    Experience
                                </div>
                                <div className="item-description">
                                    1+ Years of Working
                                </div>
                            </div>
                            <div className="card-item">
                                <div className="item-icon">
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
                            <div className="card-item">
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
                            As a web developer, I craft user-friendly web pages with a focus on exceptional UI/UX design. With extensive experience and a proven track record of client satisfaction.
<br></br>
I bring expertise in Data Structures and Algorithms, honing my skills on platforms like LeetCode, GeeksforGeeks and more.
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default About;