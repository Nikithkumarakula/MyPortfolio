
import React from "react";
import './Education.css'; // Importing CSS for Education

const Education = () => {
  return (
    <section id="education" className="p-10 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold text-gray-800">Education 🎓</h2>

      <div className="mt-6">
        <h3 className="text-2xl font-semibold text-gray-700">
          📌 Bachelor of Technologies (B.Tech) in Electronics & Communication Engineering
        </h3>
        <p className="text-lg text-gray-600">📍 RSR Engineering College, JNTUA 2024</p>
        <p className="text-gray-600">📊 Percentage: 79.5%</p>
      </div>

      <div className="mt-6 certifications">
        <h3 className="text-2xl font-semibold text-gray-700">Certifications & Courses 🏆</h3>
        <ul>
          <li>✔ Java Full Stack Development – KodNest Technologies</li>
          <li>✔ Core Java – MyGreat Learning</li>
          <li>✔ SQL & MySQL – LetsUpgrade</li>
          <li>✔ ReactJS Development – LetsUpgrade</li>
        </ul>
      </div>

    </section>
  );
};

export default Education;
