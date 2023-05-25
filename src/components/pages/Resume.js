import React from "react";
// import ReactDOM from "react";
import resume from "./resume.pdf";

const frontEndSkills = [
  { title: "HTML5" },
  { title: "CSS3" },
  { title: "JavaScript" },
  { title: "Bootstrap" },
  { title: "REACT" },
  { title: "Handlebars" },
  { title: "Heroku" },
];

const frontList = frontEndSkills.map((frontEndSkills) => (
  <li key={frontEndSkills.title}>{frontEndSkills.title}</li>
));

const backEndSKills = [
  { title: "GIT" },
  { title: "JavaScript" },
  { title: "OOP" },
  { title: "jQuery" },
  { title: "RESTful" },
  { title: "API" },
  { title: "NodeJS" },
  { title: "ExpressJS" },
  { title: "MongoDB" },
  { title: "mySQL" },
  { title: "Sequelize" },
  { title: "Mongoose" },
  { title: "PassportJS" },
  { title: "MERN" },
  { title: "GraphQL" },
];

const backList = backEndSKills.map((backEndSkills) => (
  <li key={backEndSkills.title}>{backEndSkills.title}</li>
));

export default function Resume() {
  return (
    <div className="container-fluid resume-page">
      <h2 className="page-title mt-3">Resume':</h2>
      <a
        className="resume-file"
        href={resume}
        download="Tifannie Truman resume.pdf"
      >
        {" "}
        Download File{""}
      </a>
      <h4 className="mt-3">Developer Skills</h4>
      <div className="row">
        <p className="col-md-5 list">
          <h4 className="skill-list">Front-End:</h4>
          <ul className="list-items">{frontList}</ul>
        </p>
        <p className="col-md-5 list">
          <h4 className="skill-list">Back-End:</h4>
          <ul className="list-items">{backList}</ul>
        </p>
      </div>
    </div>
  );
}
