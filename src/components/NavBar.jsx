import React from "react";
import './NavBar.css'; // Importing CSS for NavBar
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container mx-auto flex justify-between">
        <h1 className="text-2xl font-bold">My Portfolio</h1>
        <div>
          <Link to="about" smooth={true} className="link" offset={-70}>About</Link>
          <Link to="education" smooth={true} className="link" offset={-70}>Education</Link>
          <Link to="projects" smooth={true} className="link" offset={-70}>Projects</Link>
          <Link to="skills" smooth={true} className="link" offset={-70}>Skills</Link>
          {/* <Link to="resume" smooth={true} className="link" offset={-70}>Resume</Link> */}
          <Link to="contact" smooth={true} className="link" offset={-70}>Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
