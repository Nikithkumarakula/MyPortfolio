import React from "react";
import './About.css'; // Importing CSS for About


const About = () => {
  return (
    <section id="about" className="about">

      <h2 className="text-3xl font-bold text-center">🚀About Me🚀</h2>
      <p className="mt-4 text-lg text-center">
      I am a Full-Stack Developer with expertise in Java,
       ReactJS, and MySQL, passionate about building scalable and efficient applications.
        With a strong foundation in backend development using Java and Spring Boot. 
        On the frontend, I create seamless user experiences with ReactJS and CSS.
      </p>
      <div className="flex justify-center mt-8">
        <p className="text-lg text-center">I am continuously upskilling through certifications and bootcamps, staying updated with the latest trends in software development. My goal is to contribute to innovative projects that enhance user experiences and drive business success.</p>
        <p className="text-lg text-center">🌟 Let’s connect and build something amazing! </p>
        
      </div>
    </section>
  );
};

export default About;
