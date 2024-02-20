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
  totalCount,
}: PaginationProps) => {
  return (
    <div className={styles.pagination}>
      <p className={styles.pagination__count}>
        1-{displayed} of {totalCount}
      </p>
      <div className={styles.go_to}>
        <p>
          Page {currentPage} of {totalPage}
        </p>
        <ReactPaginate
          previousLabel={
            totalPage > 1 ? <img src={PreviousIcon} alt="" /> : null
          }
          nextLabel={
            totalPage > currentPage ? <img src={NextIcon} alt="" /> : null
          }
          pageRangeDisplayed={1}
          onPageChange={changeCurrentPage}
          marginPagesDisplayed={1}
          forcePage={forcePage}
          pageCount={totalPage}
          activeClassName={styles.activePaginate}
        />
      </div>
    </div>
  );
};

export default Pagination;
