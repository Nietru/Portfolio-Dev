import React from "react";
import Image1 from "../../images/project-1.PNG";
import Image2 from "../../images/final-project.PNG";
import Image3 from "../../images/project-3.PNG";
import Image4 from "../../images/project-4.PNG";
import Image5 from "../../images/project-5.PNG";
import Image6 from "../../images/project-6.PNG";

function Portfolio() {
  return (
    <div className="container-fluid mt-3">
      <h2 className="page-title mt-3">Portfolio:</h2>
      <h6 className="row">Click on the Image to see the deployed project!</h6>
      <div className="col-lg-5 project-container">
        <h4 className="project-title col-4">Recipe API Project</h4>
        <a
          className="repo-link"
          href="https://github.com/Nietru/Mmm-My-Menu-Memory-App"
        >
          REPO
        </a>
        <a href="https://cryptic-brushlands-31143.herokuapp.com/">
          <img
            className="project-photo mt-3 img"
            src={Image1}
            alt="recipe application screen capture"
          />
        </a>
      </div>
      <div className="col-5 project-container">
        <h4 className="project-title col-4">
          Book-Review Project (MERN stack)
        </h4>
        <a className="repo-link" href="https://github.com/Nietru/Book-Mark">
          REPO
        </a>
        <a href="https://morning-refuge-05693-8548eae169a5.herokuapp.com/">
          <img
            className="project-photo mt-3 img"
            src={Image2}
            alt="note taker application screen capture"
          />
        </a>
      </div>
      <div className="col-5 project-container">
        <h4 className="project-title col-4">Workday Planner App</h4>
        <a
          className="repo-link"
          href="https://github.com/Nietru/little-workday-planner"
        >
          REPO
        </a>
        <a href="https://nietru.github.io/little-workday-planner/">
          <img
            className="project-photo mt-3 img"
            src={Image3}
            alt="workday planner application screen capture"
          />
        </a>
      </div>
      <div className="col-5 project-container">
        <h4 className="project-title col-4">Music Search API Project</h4>
        <a className="repo-link" href="https://github.com/bcebel/Hot10">
          REPO
        </a>
        <a href="https://bcebel.github.io/Hot10/">
          <img
            className="project-photo mt-3 img"
            src={Image4}
            alt="music search application screen capture"
          />
        </a>
      </div>
      <div className="col-5 project-container">
        <h4 className="project-title col-4">Weather information App</h4>
        <a href="https://github.com/Nietru/weather-finder-app">REPO</a>
        <a href="https://nietru.github.io/weather-finder-app/">
          <img
            className="project-photo mt-3 img"
            src={Image5}
            alt="weather application screen capture"
          />
        </a>
      </div>
      <div className="col-5 project-container">
        <h4 className="project-title col-4">Timed Quiz App</h4>
        <a className="repo-link" href="https://github.com/Nietru/js-timed-quiz">
          REPO
        </a>
        <a href="https://nietru.github.io/js-timed-quiz/">
          <img
            className="project-photo mt-3 img"
            src={Image6}
            alt="timed quiz application screen capture"
          />
        </a>
      </div>
    </div>
  );
}

export default Portfolio;
