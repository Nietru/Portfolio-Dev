import React from "react";
import image from "../../images/selfie.jpg";

export default function About() {
  return (
    <div className="container">
      <h2 className="row page-title">About Me:</h2>
      <div>
        <img
          className="self-photo col-2"
          src={image}
          alt="self portrait of the developer"
        />
        <p className="about col-9">
          The learning journey is an endless beautiful adventure, and I am fully
          committed to the growth mindset. Currently enrolled in the UNH
          full-stack Coding Bootcamp, simply put, my current goal is to move
          into a junior developer role upon completion.
        </p>
      </div>
    </div>
  );
}

export { About };
