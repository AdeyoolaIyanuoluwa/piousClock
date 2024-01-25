import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import styles from './pagination.module.scss';
import { PaginationProps } from '@/types';

const Pagination = ({ currentPage, totalPage, changeCurrentPage, handlePageInput, forcePage }: PaginationProps) => {
    const [inputValue, setInputValue] = useState<any>(currentPage);
    return (
        <div className={styles.pagination}>
            <p className={styles.pagination__count}>Page {currentPage} of {totalPage}</p>
            <div className={styles.pagination__container}>
                <ReactPaginate previousLabel={totalPage > 1 ? 'Prev' : null}
                    nextLabel={totalPage > currentPage ? 'Next' : null}
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
                <p>Go to page</p>
                <input
                    type="number"
                    onChange={(e: any) => {
                        setInputValue(e.target.value);
                    }}
                    onKeyDown={(event) => {
                        if (event.key === 'Enter') {
                            handlePageInput(inputValue);
                        }
                    }}
                    value={inputValue}
                />
            </div>
        </div>
    )
}

export default Pagination;