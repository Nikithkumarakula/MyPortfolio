import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaJava,
  FaDatabase,
} from "react-icons/fa";
import { SiSpring, SiHibernate, SiDjango, SiMysql, SiMongodb, SiSelenium } from "react-icons/si";
import "./Skills.css";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-3xl" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-3xl" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-500 text-3xl" /> },
  { name: "ReactJS", icon: <FaReact className="text-blue-400 text-3xl" /> },
  { name: "Java", icon: <FaJava className="text-red-500 text-3xl" /> },
  { name: "OOPS", icon: <FaJava className="text-indigo-500 text-3xl" /> },
  { name: "JDBC", icon: <FaDatabase className="text-purple-500 text-3xl" /> },
  { name: "Hibernate", icon: <SiHibernate className="text-green-500 text-3xl" /> },
  { name: "Spring Framework", icon: <SiSpring className="text-green-400 text-3xl" /> },
  { name: "Python (Basics)", icon: <FaJs className="text-blue-600 text-3xl" /> },
  { name: "Django (Basics)", icon: <SiDjango className="text-green-600 text-3xl" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-700 text-3xl" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-700 text-3xl" /> },
  { name: "Automation Testing (Selenium)", icon: <SiSelenium className="text-green-500 text-3xl" /> },
];

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <h2 className="text-3xl font-bold text-center mb-6">🚀 Skills & Technologies 🚀</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            {skill.icon}
            <p className="skill-name">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
