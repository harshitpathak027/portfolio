import React from "react";

const Banner=()=>{
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
                    <p className="banner-subheading">I'm a skilled web developer based in India, driven by a deep passion and unwavering dedication to crafting exceptional digital experiences.

</p>
                    </div>
                    <div className="banner-buttons"> 
                    <a
  href="/Harshit_Pathak_Resume.pdf"
  download="Harshit_Pathak_Resume.pdf"
  className="banner-button  group inline-flex gap-4 mt-4 items-center border border-gray rounded-lg bg-gray-700 text-white hover:bg-gray-900"
>
  <span>Resume Download</span>

  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="
      h-6 w-6
      transition-all duration-300 ease-out
      group-hover:text-orange-500
      group-hover:-translate-x-1
    "
  >
    <path d="M9 2h2v3H9zM2 9h3v2H2zM20.37 13.93c.38-.15.63-.52.63-.92s-.24-.77-.62-.93l-12-5a.98.98 0 0 0-1.09.22c-.29.29-.37.72-.22 1.09l5 12c.16.37.52.62.92.62.41 0 .77-.25.92-.63l1.44-3.59 4.93 4.93 1.41-1.41-4.93-4.93 3.59-1.44Z" />
  </svg>
</a>

    
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
        </>
    )
}
export default Banner;
