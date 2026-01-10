import React, { useState } from "react";
import { useDarkMode } from "./DarkModeContext";

const Qualifications = () => {

    const [selectedTab, setSelectedTab] = useState("Education");
    const { darkMode, setDarkMode } = useDarkMode();

    return (
        <>
            <h2 className="text-5xl text-center mb-2">Qualifications</h2>
            <div className="text-xl text-center mb-4">My Steps</div>

            <section>
                <div className="flex  gap-4 justify-center text-center">

                    <div className={`flex items-center justify-center text-xl md:text-3xl cursor-pointer  gap-2  `} onClick={() => { setSelectedTab("Education") }} >
                       <svg  xmlns="http://www.w3.org/2000/svg" 
fill="currentColor" viewBox="0 0 24 24" className={`h-8 w-8 ${
  selectedTab === "Education"
    ? "text-orange-500"
    : darkMode
    ? "text-white"
    : "text-black"
}`}
 >
<path d="M9 11h2v2H9zm0-4h2v2H9zm4 4h2v2h-2zm0-4h2v2h-2z"></path><path d="M21 9h-3V5h1V3H5v2h1v4H3c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h18c.55 0 1-.45 1-1V10c0-.55-.45-1-1-1M4 11h2v8H4zm6 4v4H8V5h8v14h-2v-4zm10 4h-2v-8h2z"></path>
</svg>
                       Education</div>
                    <div className="flex justify-center items-center text-xl md:text-3xl cursor-pointer gap-2 " onClick={() => { setSelectedTab("Experience") }}>
                        <svg xmlns="http://www.w3.org/2000/svg" 
                            fill="currentColor"  viewBox="0 0 24 24" className={`h-8 w-8 ${selectedTab==="Experience" ? "text-orange-500":darkMode ? "text-white":"text-black"} `} >
                            <path d="M20 6h-3V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2M9 4h6v2H9zM8 8h12v3.07l-.83.39a16.78 16.78 0 0 1-14.34 0L4 11.07V8zM4 20v-6.72c2.54 1.19 5.27 1.79 8 1.79s5.46-.6 8-1.79V20z"></path>
                        </svg>
                        Experience</div>


                </div>
            </section>

            <section className="p-7">

                <div
                    className="
          relative mx-auto max-w-[900px] w-full px-4
          before:absolute before:top-0 before:h-full before:w-[1px] before:bg-gray-500
          before:left-1/2
        "
                >
                    {/* LEFT */}
                    <div
                        className="
            w-1/2 pr-10 text-right
            relative mb-12
            before:content-['']
            before:absolute before:top-2
            before:w-3 before:h-3 before:bg-gray-600 before:rounded-full before:hover:bg-orange-500
            before:right-[-7px]
          "
                    >
                        <h3 className="font-bold">{selectedTab==="Education"?"B.Tech in Computer Science ":"Software Engineer"}</h3>
                        <p>{selectedTab==="Education"?"GL Bajaj Group Of Institutions":"LTIMINDTREE"}</p>
                        <span className="text-sm text-gray-500">{selectedTab==="Education"?"2020-2024":"Oct-2024 - Present"}</span>
                    </div>

                    {/* RIGHT */}
                    <div
                        className="
            w-1/2 ml-auto pl-10
            relative mb-12
            before:content-['']
            before:absolute before:top-2
            before:w-3 before:h-3 before:bg-gray-600 before:rounded-full before:hover:bg-orange-500
            before:left-[-5px]
          "
                    >
                        <h3 className="font-bold">{selectedTab==="Education"?"12th Standard":"Web Developer Trainee"}</h3>
                        <p>{selectedTab==="Education"?"Wisdom Public School":"Keyideas InfoTech"}</p>
                        <span className="text-sm text-gray-600">{selectedTab==="Education"?"2020":"Mar-2024 - Oct-2024"}</span>
                    </div>
  {/* LEFT */}
  {selectedTab==="Education" && <div
                        className="
            w-1/2 pr-10 text-right
            relative mb-12
            before:content-['']
            before:absolute before:top-2
            before:w-3 before:h-3 before:bg-gray-600 before:rounded-full before:hover:bg-orange-500
            before:right-[-7px]
          "
                    >
                        <h3 className="font-bold">{selectedTab==="Education"&& "10th Standard"}</h3>
                        <p>{selectedTab==="Education"&&"Wisdom Public School"}</p>
                        <span className="text-sm text-gray-500">{selectedTab==="Education"&& "2018"}</span>
                    </div>
                }
                   </div>
            
            </section>
        </>
    );
};

export default Qualifications;
