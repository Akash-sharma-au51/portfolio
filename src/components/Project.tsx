import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.avif';
import mock10 from '../assets/images/mock10.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://www.gcs.tpserver.com" target="_blank" rel="noreferrer"><img src={mock01} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.gcs.tpserver.com" target="_blank" rel="noreferrer"><h2>Legislative Tracking Platform</h2></a>
                <p></p>
            </div>
            <div className="project">
                <a href="https://github.com/Akash-sharma-au51/image2text" target="_blank" rel="noreferrer"><img src={mock10} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Akash-sharma-au51/image2text" target="_blank" rel="noreferrer"><h2>Image to text converter</h2></a>
                <p>i have devloped image to text converter app by using nodejs and tessaract js its a fullstack web Project. client side is created using react js and serverside is created using node js</p>
            </div>
            <div className="project">
                <a href="https://moonlit-sprinkles-4504c1.netlify.app/" target="_blank" rel="noreferrer"><img src={mock08} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://moonlit-sprinkles-4504c1.netlify.app/" target="_blank" rel="noreferrer"><h2>Weather app</h2></a>
                <p>Developed a weather application using React and OpenWeatherMap API. The app provides real-time weather updates and forecasts for any location.</p>
            </div>
            <div className="project">
                <a href="#" target="_blank" rel="noreferrer"><img src={mock07} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="#" target="_blank" rel="noreferrer"><h2>Grocery online store</h2></a>
                <p>It was a backend Project.I created various api's using nodejs firebase is used for authentication functionality.User authentication functionality is carried out by using various libraries linke JWT and bcrypt</p>
            </div> 
        </div>
    </div>
    );
}

export default Project;