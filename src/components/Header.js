//Must be rendered across every page component of the site
//Must contain a Navbar

import React from "react";
import "../assets/css/Styles.css";
import myImage from "../assets/images/profille_pic.jpg";

function Header() {
  return (
    <div>
      <header>
        <div className="container-fluid">
          <div className="bg-transparent text-center jumbotron-fluid">
            <div className="row">
              <div className="card bg-transparent col-3" id="profile-pic">
                <img className="img-thumbnail" src={myImage} alt="portfolio" />
                <h4>Desislava Ivanova</h4>
              </div>
              <div className="card-body col-8 mt-5 mb-0 pt-5" id="profile-text">
                <p>
                  Hello! My name is Desislava and I am currently taking part of
                  Trilogy Skills Bootcamp in Front-End Web Development course
                  with edX. In the projects section you can find some of my
                  executed projects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
