import React from "react";

interface IPaginationProps {
  pageIndex: number;
  pageCount: number;
  gotoPage: (page: string | number) => void;
}

const Pagination = ({ pageIndex, pageCount, gotoPage }: IPaginationProps) => {
  const maxPageNumbersToShow = 5;

  const getPageNumbers = () => {
    const pages = [];
    const startPage = Math.max(
      1,
      pageIndex + 1 - Math.floor(maxPageNumbersToShow / 2),
    );
    const endPage = Math.min(pageCount, startPage + maxPageNumbersToShow - 1);

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    if (endPage < pageCount) {
      pages.push("...", pageCount);
    }
    return pages;
  };

  const handlePageClick = (page: string | number) => {
    if (typeof page === "number") {
      gotoPage(page - 1);
    }
  };

  return (
    <div className="pagination">
      <button onClick={() => gotoPage(0)} disabled={pageIndex === 0}>
        First
      </button>
      <button
        onClick={() => gotoPage(pageIndex - 1)}
        disabled={pageIndex === 0}
      >
        Previous
      </button>
      {getPageNumbers().map((page, index) => (
        <button
          key={index}
          onClick={() => handlePageClick(page)}
          className={pageIndex + 1 === page ? "active" : ""}
        >
          {page}
        </button>
      ))}
      <button
        onClick={() => gotoPage(pageIndex + 1)}
        disabled={pageIndex === pageCount - 1}
      >
        Next
      </button>
      <button
        onClick={() => gotoPage(pageCount - 1)}
        disabled={pageIndex === pageCount - 1}
      >
        Last
      </button>
    </div>
  );
};

export default Pagination;
