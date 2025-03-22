import React from "react";
import "./Projects.css"; // Importing CSS for Projects

const projects = [
  { 
    name: "Quiz App", 
    description: "A ReactJS-based web application for taking MCQ assessments with validations, scoring, and a final result display.", 
    link: "https://github.com/Nikithkumarakula/QuizApp",
    color: "bg-yellow-200 border-red-400"
  },
  { 
    name: "TaskBuddy", 
    description: "A React task management app with add, update, delete, and tracking features, including a progress tracker.", 
    link: "https://github.com/Nikithkumarakula/TaskBuddyApplication",
    color: "bg-blue-200 border-green-400"
  },
  { 
    name: "MealsMate", 
    description: "An online food ordering system built with Django, offering secure authentication, dynamic menu management, and payment integration.", 
    link: "https://github.com/Nikithkumarakula/MealsMate",
    color: "bg-green-200 border-pink-400"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2 className="text-3xl font-bold text-center mb-6">💡 Projects 💡</h2>
      
      <div className="flex flex-col gap-6"> 
        {projects.map((project, index) => (
          <div key={index} className={`project-card p-4 border-4 ${project.color} rounded-md shadow-md`}>
            <h3 className="text-xl font-bold">{project.name}</h3>
            <p className="mt-2">{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 mt-3 inline-block">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
