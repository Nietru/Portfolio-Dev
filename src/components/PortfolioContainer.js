import React, { useState } from "react";
import Header from "./Header";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("About");

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
    </div>
  );
}
