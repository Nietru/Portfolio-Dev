import React from "react";
// import ReactDOM from "react";
import resume from "./resume.pdf";

export default function Resume() {
  return (
    <div className="container resume-page">
      <h2 className="page-title mt-3">Resume':</h2>
      <a
        className="resume-file"
        href={resume}
        download="Tifannie Truman resume.pdf"
      >
        {" "}
        Download File{""}
      </a>
      <h4 className="mt-3">Developer Skills:</h4>
    </div>
  );
}
