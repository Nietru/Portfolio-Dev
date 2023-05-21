import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { PageItem } from "react-bootstrap";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("About");

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="container">
      <div className="row">
        <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      </div>
      <div className="row">
        <const currentPage={PageItem} />
      </div>
      <div className="row">
        <Footer currentPage={currentPage} handlePageChange={handlePageChange} />
      </div>
    </div>
  );
}
