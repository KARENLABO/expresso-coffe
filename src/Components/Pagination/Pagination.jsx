import React from "react";
import { ChevronLeft, ChevronRight } from "../../Assets/index";
import { calculatePages } from "../../Helpers";
import Button from "./Components/Button/Button";
import "./styles.scss";

const ITEMS_PER_PAGE = 10;

function Pagination({ orders, currentPage, setCurrentPage }) {
  const totalPages = calculatePages(orders, ITEMS_PER_PAGE);

  const buttons = [];

  for (let i = 1; i <= totalPages; i++) {
    buttons.push(
      <Button
        index={i}
        key={i}
        onClick={() => setCurrentPage(i)}
        isSelected={currentPage === i}
      />
    );
  }

  return (
    <div className="pagination-container">
      <button
        className="pagination-arrow"
        onClick={() => setCurrentPage(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <img src={ChevronLeft} alt="chevronLeft" className="chevron" />
      </button>
      {buttons}
      <button
        className="pagination-arrow"
        onClick={() => setCurrentPage(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <img src={ChevronRight} alt="chevronRigth" className="chevron" />
      </button>
    </div>
  );
}

export default Pagination;
