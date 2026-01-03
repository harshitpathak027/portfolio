/* eslint-disable */
/* tailwindcss */

import React from "react";

const SkillItem = ({ label ,level}) => {
  return (
    <li className="group flex gap-2 items-start cursor-pointer">
      {/* ICON */}
      <i
        className="
          bx bx-badge-check
          text-gray-500
          transition-all duration-300
          group-hover:text-[#ff5722]
          group-hover:-translate-y-0.5
        "
      />

      {/* TEXT */}
      <div className="flex flex-col">
        <div className="font-medium transition-colors ">
          {label}
        </div>
        <div className="text-[12px] text-gray-600">
          {level}
        </div>
      </div>
    </li>
  );
};

const Skills = () => {
  return (
    <section className="skills-section p-7">
      <h2 className="text-center text-xl p-10 font-semibold">
        My Skills
      </h2>

      <div className="flex flex-col md:flex-row gap-10 justify-center items-start">

        {/* FRONTEND CARD */}
        <div className="border border-black p-4 rounded-lg w-full md:w-1/2">
          <h3 className="font-bold text-center mb-4">
            Frontend Developer Skills
          </h3>

          <ul className="grid grid-cols-2 gap-3 p-2 text-left">
            <SkillItem label="CSS" level="advanced"/>
            <SkillItem label="HTML" level="advanced"/>
            <SkillItem label="JavaScript" level="advanced" />
            <SkillItem label="React JS" level="advanced"/>
            <SkillItem label="Tailwind CSS" level="advanced"/>
            <SkillItem label="Bootstrap" level="advanced"/>
          </ul>
        </div>

        {/* BACKEND CARD */}
        <div className="border border-black p-4 rounded-lg w-full md:w-1/2">
          <h3 className="font-bold text-center mb-4">
            Backend Developer Skills
          </h3>

          <ul className="grid grid-cols-2 gap-3 p-2 text-left">
            <SkillItem label="Node JS" level="advanced"/>
            <SkillItem label="Spring Boot" level="advanced"/>
            <SkillItem label="MySQL" level="advanced"/>
            <SkillItem label="Spring Security" level="advanced"/>
            <SkillItem label="JWT" level="advanced"/>
            <SkillItem label="Microservices" level="advanced"/>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default Skills;
