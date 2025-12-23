import React from "react";

const Banner=()=>{
    return (
        <>
        <div className="banner">
            <div className="main-banner">
                <div className="first-section">

                </div>
                <div className="second-section">
                    <h1 className="banner-heading">Harshit Pathak</h1>
                    <div>----------- Full Stack Web Developer</div>
                    <p className="banner-subheading">I'm a skilled web developer based in India, driven by a deep passion and unwavering dedication to crafting exceptional digital experiences.

</p>
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
        </>
    )
}
export default Banner;
