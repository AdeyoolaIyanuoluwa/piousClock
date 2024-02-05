import React from "react";
import ReactPaginate from "react-paginate";
import styles from "./pagination.module.scss";
import { PaginationProps } from "@/types";
import PreviousIcon from "../../assets/prev.svg";
import NextIcon from "../../assets/next.svg";

const Pagination = ({
  currentPage,
  totalPage,
  changeCurrentPage,
  forcePage,
  displayed,
}: PaginationProps) => {
  return (
    <div className={styles.pagination}>
      <p className={styles.pagination__count}>
        1-{displayed} of {totalPage}
      </p>
      <div className={styles.pagination__container}>
        <ReactPaginate
          previousLabel={totalPage > 1 ? "Prev" : null}
          nextLabel={totalPage > currentPage ? "Next" : null}
          breakLabel="..."
          pageCount={totalPage}
          pageRangeDisplayed={1}
          onPageChange={changeCurrentPage}
          marginPagesDisplayed={1}
          activeClassName={styles.activePaginate}
          forcePage={forcePage}
        />
      </div>
      <div className={styles.go_to}>
        <p>
          Page {currentPage} of {totalPage}
        </p>
        <img src={PreviousIcon} alt="" />
        <img src={NextIcon} alt="" />
      </div>
    </div>
  );
};

export default Pagination;
