import React from "react";
import './Resume.css'; // Importing CSS for Resume


const Resume = () => {
  return (
    <section id="resume" className="resume">

      <h2 className="text-3xl font-bold">Resume</h2>
      <a href="/resume.pdf" download className="mt-4 px-6 py-2 bg-blue-600 text-white rounded">
        Download Resume
      </a>
    </section>
  );
};

export default Resume;
