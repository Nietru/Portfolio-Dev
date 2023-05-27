import React, { useState } from "react";
import "../App.css";
import Header from "./Header";
import Footer from "./Footer";
import { PageItem } from "react-bootstrap";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("About");

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <>
      <div className="main-container container">
        <div className="container-fluid row mt-3">
          <Header
            currentPage={currentPage}
            handlePageChange={handlePageChange}
          />
        </div>
        <div className="container-fluid row current mt-3">
          <const currentPage={PageItem} />
        </div>
        <div className="container-fluid row mt-3">
          <Footer
            currentPage={currentPage}
            handlePageChange={handlePageChange}
          />
        </div>
      </div>
    </>
  );
}
