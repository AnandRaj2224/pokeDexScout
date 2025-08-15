import React from "react";
import Wrapper from "../sections/Wrapper";
import {  FaGithub, FaLinkedin } from "react-icons/fa";

function About() {
  return (
    <div className="profile">
      <h1 className="profile-text">Hi I am Anand Raj</h1>
      <div className="profile-links">
        <a href="https://github.com/AnandRaj2224">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/AnandRaj/">
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
}

export default Wrapper(About);