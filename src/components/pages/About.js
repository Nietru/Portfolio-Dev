import React from "react";
import image from "../../images/selfie.jpg";

export default function About() {
  return (
    <div className="container">
      <h1 className="row page-title">About Me</h1>
      <div className="row page-body">
        {/* TODO: need to add image here */}
        <div>
          <img src={image} alt="self portrait of the developer" />
        </div>
        <p className="col-8">
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
