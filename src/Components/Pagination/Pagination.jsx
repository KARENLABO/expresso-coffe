import { ChevronLeft, ChevronRight } from "../../Assets/index";
import Button from "./Components/Button/Button";
import "./styles.scss";

function Pagination({ pages, currentPage, setCurrentPage }) {
  const buttons = [];

  for (let i = 1; i <= pages; i++) {
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
        disabled={currentPage === pages}
      >
        <img src={ChevronRight} alt="chevronRigth" className="chevron" />
      </button>
    </div>
  );
}

export default Pagination;
