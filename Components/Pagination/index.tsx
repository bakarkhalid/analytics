import React from "react";
import { ChevronRight, ChevronLeft } from "@/icons";

const Pagination = ({ currentPage, setCurrentPage }: any) => {
  const pageNumbers = 17;

  console.log("currentPage", currentPage);

  return (
    <nav>
      <ul className="pagination">
        <li
          className={`pagination-item ${currentPage === 1 ? "disabled" : ""}`}
          onClick={() => setCurrentPage((cur) => cur - 1)}
        >
          <ChevronLeft />
        </li>
        <li>
          Page <span className="text-color">{currentPage}</span> out of <span className="text-color">{pageNumbers}</span>
        </li>
        <li className="pagination-item" onClick={() => setCurrentPage((cur) => cur + 1)}><ChevronRight/></li>
      </ul>
    </nav>
  );
};

export default Pagination;
