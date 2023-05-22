import React from "react";
import { NavLink } from "react-bootstrap";

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul className="col-8 nav nav-tabs">
      <li className="nav-item">
        <a
          href="#about"
          onClick={() => handlePageChange("About")}
          className={currentPage === "About" ? "nav-link active" : "nav-link"}
        >
          <NavLink activeClassName="active-link">About</NavLink>
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          onClick={() => handlePageChange("Contact")}
          className={currentPage === "Contact" ? "nav-link active" : "nav-link"}
        >
          <NavLink activeClassName="active-link">Contact</NavLink>
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#portfolio"
          onClick={() => handlePageChange("Portfolio")}
          className={
            currentPage === "Portfolio" ? "nav-link active" : "nav-link"
          }
        >
          <NavLink activeClassName="active-link">Portfolio</NavLink>
        </a>
      </li>
      {/* TODO: need to make the resume a downloadable file: */}
      <li className="nav-item">
        <a
          href="#resume"
          onClick={() => handlePageChange("Resume")}
          className={currentPage === "Resume" ? "nav-link active" : "nav-link"}
        >
          <NavLink activeClassName="active-link">Resume'</NavLink>
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
