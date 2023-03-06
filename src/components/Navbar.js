import React from "react";
import "../assets/css/Styles.css";
import myCV from "../assets/cv/Desislava_Ivanova_CV.pdf";

function NavBar() {
  return (
    <div className="row" id="navbar">
      <nav className="navbar nav-tabs bg-transparent navbar-toggle">
        <span className="navbar-brand justify-content-end mb-0 h1 font-weight-bold">
          edX Student
        </span>
        <ul className="nav justify-content-end">
          <li className="nav-item bg-transparent btn-sm">
            <a href="#projects">Projects</a>
          </li>
          <li className="nav-item bg-transparent btn-sm">
            <a href="#aboutMe">About me</a>
          </li>
          <li className="nav-item bg-transparent btn-sm">
            <a href="#skill">Skills</a>
          </li>
          <li className="nav-item bg-transparent btn-sm">
            <a href="#aboutContact">Contacts</a>
          </li>
          <li className="nav-item bg-transparent btn-sm">
            <a
              href={myCV}
              alt="download resume"
              title="download resume"
              download
            >
              Download Resume
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
