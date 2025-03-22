import React from "react";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa"; // Import icons
import './Contact.css'; // Importing CSS

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2 className="contact-title">📞 Contact Me</h2>

      <div className="contact-info">
        <p>
           <a href="mailto:anikithkumar2003@gmail.com" target="_blank" rel="noopener noreferrer"><FaEnvelope className="icon" /></a>
          Email: <a href="mailto:anikithkumar2003@gmail.com">anikithkumar2003@gmail.com</a>
        </p>

        <p>
          <a href="https://www.linkedin.com/in/nikithkumar00092/" target="_blank" rel="noopener noreferrer"><FaLinkedin className="icon linkedin" /> </a> 
          LinkedIn: <a href="https://www.linkedin.com/in/nikithkumar00092/" target="_blank" rel="noopener noreferrer">
            linkedin.com/in/nikithkumar00092/
          </a>
        </p>

        <p>
        <a href="https://github.com/Nikithkumarakula" target="_blank" rel="noopener noreferrer"><FaGithub className="icon github" /> </a>
          GitHub: <a href="https://github.com/Nikithkumarakula" target="_blank" rel="noopener noreferrer">
            github.com/Nikithkumarakula
          </a>
        </p>
      </div>
    </section>
  );
};

export default Contact;
// Exporting the Contact component