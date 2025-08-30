import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Chip from '@mui/material/Chip';
import '../assets/styles/Main.scss';
import img from '../assets/images/img1.jpg'

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={img} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/Akash-sharma-au51" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/akash-sharma-22b764163/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Akash Sharma</h1>
          <p>MERN Stack Developer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/Akash-sharma-au51" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/akash-sharma-22b764163/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
            <div className="resume" style={{ color: "white" }}>
              <span className="chip-title" style={{ color: "white" }}>Resume:</span>
              <a href="./public/resume.pdf" target="_blank" rel="noopener noreferrer" style={{ color: "white" }}>
                <Chip label="View Resume" style={{ color: "white" }} />
              </a>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Main;