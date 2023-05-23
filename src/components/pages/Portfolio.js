import React from "react";
import Image1 from "../../images/project-1.PNG";
import Image2 from "../../images/project-2.PNG";
import Image3 from "../../images/project-3.PNG";
import Image4 from "../../images/project-4.PNG";
import Image5 from "../../images/project-5.PNG";
import Image6 from "../../images/project-6.PNG";

export default function Portfolio() {
  return (
    <div className="container">
      <h1 className="row page-title">Portfolio</h1>
      <div className="row portfolio">
        {/* TODO: image links to projects */}
        <a href="https://github.com/Nietru">
          <img src={Image1} alt="self portrait of the developer" />
        </a>
        <a href="https://github.com/Nietru">
          <img src={Image2} alt="self portrait of the developer" />
        </a>
        <a href="https://github.com/Nietru">
          <img src={Image3} alt="self portrait of the developer" />
        </a>
        <a href="https://github.com/Nietru">
          <img src={Image4} alt="self portrait of the developer" />
        </a>
        <a href="https://github.com/Nietru">
          <img src={Image5} alt="self portrait of the developer" />
        </a>
        <a href="https://github.com/Nietru">
          <img src={Image6} alt="self portrait of the developer" />
        </a>
      </div>
    </div>
  );
}
