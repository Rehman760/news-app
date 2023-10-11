import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa"; // Import the icons

const Footer = () => {
  return (
    <div className="bg-blue-500 p-4 text-white text-center ">
      <p>
        &copy; {new Date().getFullYear()} Your Updater: created by Abdul Rehman
      </p>
      <div className="flex flex-row justify-center">
        <a
          href="https://github.com/Rehman760"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white mx-2"
        >
          <FaGithub size={24} /> {/* GitHub icon */}
        </a>
        <a
          href="https://www.linkedin.com/in/abdul-rehman-qureshi-884555177/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white mx-2"
        >
          <FaLinkedin size={24} /> {/* LinkedIn icon */}
        </a>
      </div>
    </div>
  );
};

export default Footer;
