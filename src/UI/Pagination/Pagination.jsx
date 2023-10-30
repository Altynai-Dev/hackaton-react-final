import React from "react";

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePrevClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    setCurrentPage(currentPage + 1);
  };
  return (
    <div>
      <button onClick={handlePrevClick} disabled={currentPage === 1}>
        Previous
      </button>
      <span>Page {currentPage}</span>
      <button onClick={handleNextClick}>Next</button>
    </div>
  );
};

export default Pagination;
