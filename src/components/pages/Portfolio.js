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
      <h2 className="page-title">Portfolio:</h2>
      {/* TODO: update hrefs and alt text for images and resize images */}
      <a href="https://github.com/Nietru">
        <img className="project-photo col-5 mt-3" src={Image1} alt="project" />
      </a>
      <a href="https://github.com/Nietru">
        <img className="project-photo col-5 mt-3" src={Image2} alt="project" />
      </a>
      <a href="https://github.com/Nietru">
        <img className="project-photo col-5 mt-3" src={Image3} alt="project" />
      </a>
      <a href="https://github.com/Nietru">
        <img className="project-photo col-5 mt-3" src={Image4} alt="project" />
      </a>
      <a href="https://github.com/Nietru">
        <img className="project-photo col-5 mt-3" src={Image5} alt="project" />
      </a>
      <a href="https://github.com/Nietru">
        <img className="project-photo col-5 mt-3" src={Image6} alt="project" />
      </a>
    </div>
  );
}
