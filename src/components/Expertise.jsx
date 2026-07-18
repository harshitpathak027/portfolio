
import React from "react";
import { useDarkMode } from "./DarkModeContext";
const Expertise = () => {
    const { darkMode } = useDarkMode();

    const expertiseItems = [
        {
            title: "Problem Solving",
            value: "1000+ DSA Problems",
            description:
                "Solved 1000+ data structures and algorithms questions with a strong focus on logic, optimization, and clean implementation.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="currentColor" viewBox="0 0 24 24" className="w-10 h-10">
                    <path d="M12 2a7 7 0 0 0-7 7v3.2a3 3 0 0 0 1.2 2.4l1.8 1.35V19a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-3.05l1.8-1.35A3 3 0 0 0 19 12.2V9a7 7 0 0 0-7-7Zm-1 18v-3h2v3h-2Zm6.4-7.2-.4.3V12h1a1 1 0 0 1 0 2h-.6Zm-11.8 0A1 1 0 0 1 6 12h1v1.1l-.4-.3a1 1 0 0 1-.4-.8Zm11.4-5.8V9a5 5 0 0 1-10 0v-.99A5 5 0 0 1 12 4a5 5 0 0 1 4 2.01Z" />
                </svg>
            ),
        },
        {
            title: "Full-Stack Development",
            value: "Spring Boot + React",
            description:
                "Built a resume builder app end to end with Spring Boot and React, focusing on a polished interface, smooth user flow, and a better overall user experience.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="currentColor" viewBox="0 0 24 24" className="w-10 h-10">
                    <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm-1 15.93A8.01 8.01 0 0 1 6.07 13H11Zm0-7.93H6.07A8.01 8.01 0 0 1 11 6.07Zm2 0V6.07A8.01 8.01 0 0 1 17.93 11Zm0 2h4.93A8.01 8.01 0 0 1 13 17.93Zm0-2V6.07A8.01 8.01 0 0 1 17.93 11Zm-2 2H6.07A8.01 8.01 0 0 1 11 17.93Z" />
                </svg>
            ),
        },
        {
            title: "Client Delivery",
            value: "E-commerce Projects",
            description:
                "Worked on a client e-commerce project, helping deliver user-friendly features that improved the shopping and admin experience.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="currentColor" viewBox="0 0 24 24" className="w-10 h-10">
                    <path d="M20 7h-3.18A3 3 0 0 0 11 5.18 3 3 0 0 0 5.18 7H4a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h.18l1.2 6A2 2 0 0 0 7.34 21h9.32a2 2 0 0 0 1.96-1.58l1.2-6H20a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2ZM14 5.18A1 1 0 0 1 14.82 6H13.18A1 1 0 0 1 14 5.18ZM10 6a1 1 0 0 1 2 0v1h-2V6ZM6 9h12v2H6V9Zm10.66 10H7.34L6.3 13h11.4l-1.04 6Z" />
                </svg>
            ),
        },
    ];

    return (
        <section className={`expertise-section px-7 py-16 ${darkMode ? "bg-slate-900" : "bg-transparent"}`}>
            <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-4 text-center">
                <p className="text-sm uppercase tracking-[0.35em] text-green-500">Expertise</p>
                <h2 className={`text-4xl font-semibold md:text-5xl accent-underline accent-orange ${darkMode ? "text-white" : "text-gray-900"}`}>
                    A practical summary of what I build and solve
                </h2>
                <p className={`max-w-3xl text-sm md:text-base ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                    Focused on shipping dependable web products, solving algorithmic problems, and delivering real client work with a clean, professional approach.
                </p>
            </div>
            <div className="mx-auto mt-10 grid max-w-6xl gap-6 md:grid-cols-3">
                {expertiseItems.map((item) => (
                    <article
                        key={item.title}
                        className={`group flex min-h-[280px] flex-col justify-between rounded-3xl border p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg accent-glow green accent-animate ${darkMode ? "border-slate-700 bg-slate-800 hover:border-slate-600" : "border-gray-200 bg-white hover:border-gray-300"}`}
                    >
                        <div className="flex items-start justify-between gap-4">
                            <div className="rounded-2xl bg-green-50 p-4 text-green-600 transition-colors duration-300 group-hover:bg-green-600 group-hover:text-white dark:bg-slate-700 dark:text-green-400">
                                {item.icon}
                            </div>
                            <span className={`rounded-full border px-3 py-1 text-xs font-medium ${darkMode ? "border-slate-600 text-gray-300" : "border-gray-200 text-gray-500"}`}>
                                {item.value}
                            </span>
                        </div>

                        <div className="mt-8 space-y-3">
                            <h3 className={`text-2xl font-semibold ${darkMode ? "text-white" : "text-gray-900"}`}>{item.title}</h3>
                            <p className={`text-sm leading-6 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>{item.description}</p>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    )


}

export default Expertise;