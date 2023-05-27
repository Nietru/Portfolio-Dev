import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="container-fluid">
        <ul className="footer row">
          <li className="foot-links col-md-4">
            <a
              href="https://github.com/Nietru"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </li>
          <li className="foot-links col-md-4">
            <a
              href="https://www.linkedin.com/in/nietru143/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li className="foot-links col-md-4">
            <a
              href="https://twitter.com/nietru143"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
}
