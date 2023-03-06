//contains about me info

import React from "react";
import "../assets/css/Styles.css";

function Footer() {
  return (
    <div>
      <footer className="mt-auto">
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <a
              className="nav-link navbar-brand"
              href="https://github.com/DessySI"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="./assets/logo_images/github.svg"
                title="GitHub"
                alt="GitHub logo"
              />
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link navbar-brand"
              href="https://www.linkedin.com/in/desislava-ivanova-576838256/"
              target="_blank"
              rel="noreferrer"
            >
              <img title="LinkedIn" alt="LinkedIn logo" />
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link navbar-brand"
              href="https://www.facebook.com/DesislavaSergeevaIvanova"
              target="_blank"
              rel="noreferrer"
            >
              <img title="Facebook" alt="Facebook logo" />
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default Footer;
