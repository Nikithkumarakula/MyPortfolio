import React from "react";
import Navbar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
// import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Education from './components/Education'; // Importing Education component
import Skills from './components/Skills'; // Importing Skills component

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Education />
      <Projects />      
      <Skills />
      {/* <Resume />       */}
      <Contact />
    </>
  );
};

export default App;
