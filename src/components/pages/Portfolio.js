import React from "react";
import Image1 from "../../images/project-1.PNG";
import Image2 from "../../images/project-2.PNG";
import Image3 from "../../images/project-3.PNG";
import Image4 from "../../images/project-4.PNG";
import Image5 from "../../images/project-5.PNG";
import Image6 from "../../images/project-6.PNG";

export default function Portfolio() {
  return (
    <div className="container mt-3">
      <h2 className="page-title mt-3">Portfolio:</h2>
      {/* TODO: update hrefs and alt text for images and resize images */}
      <div className="col-6 project-container">
        <h4 className="project-title col-5">Recipe API Project</h4>
        <a href="https://cryptic-brushlands-31143.herokuapp.com/">
          <img
            className="project-photo mt-3"
            src={Image1}
            alt="recipe application screen capture"
          />
        </a>
      </div>
      <div className="col-6 project-container">
        <h4 className="project-title col-5">Note Taker App</h4>
        <a href="https://secure-ocean-91993.herokuapp.com/">
          <img
            className="project-photo mt-3"
            src={Image2}
            alt="note taker application screen capture"
          />
        </a>
      </div>
      <div className="col-6 project-container">
        <h4 className="project-title col-5">Workday Planner App</h4>
        <a href="https://nietru.github.io/little-workday-planner/">
          <img
            className="project-photo mt-3"
            src={Image3}
            alt="workday planner application screen capture"
          />
        </a>
      </div>
      <div className="col-6 project-container">
        <h4 className="project-title col-5">Music Search API Project</h4>
        <a href="https://bcebel.github.io/Hot10/">
          <img
            className="project-photo mt-3"
            src={Image4}
            alt="music search application screen capture"
          />
        </a>
      </div>
      <div className="col-6 project-container">
        <h4 className="project-title col-5">Weather information App</h4>
        <a href="https://nietru.github.io/weather-finder-app/">
          <img
            className="project-photo mt-3"
            src={Image5}
            alt="weather application screen capture"
          />
        </a>
      </div>
      <div className="col-6 project-container">
        <h4 className="project-title col-5">Timed Quiz App</h4>
        <a href="https://nietru.github.io/js-timed-quiz/">
          <img
            className="project-photo mt-3"
            src={Image6}
            alt="timed quiz application screen capture"
          />
        </a>
      </div>
    </div>
  );
}
