import React from "react";
import styles from "./table.module.scss";
import TableHeader from "../Table/TableHeader";
import TableBody from "../Table/TableBody";
import { TableProps } from "@/types";
import PlaceholderIcon from "../../assets/placeholder.svg";
import Pagination from "../Pagination";

const Table = ({
  tableHeaders,
  tableData,
  children,
  loading,
  currentPage,
  totalPage,
  changeCurrentPage,
  handlePageInput,
  paginate,
}: TableProps) => {
  const sortRows = () => true;

  const table = (
    <div>
      <table className={`${styles.table}`}>
        <TableHeader sortRows={sortRows} tableHeaders={tableHeaders} />
        <TableBody
          tableData={tableData}
          content={children}
        />
      </table>

      {!tableData?.length && (
        <>
          <div className={styles.table__empty}>
            <div>
              {<img src={PlaceholderIcon} alt="" />}{" "}
              <p>You have no recent activity.</p>
              <p>Go to “User management” to add members</p>
            </div>
          </div>
        </>
      )}
      {paginate && !loading && tableData?.length ? (
        <Pagination
          currentPage={currentPage}
          totalPage={totalPage}
          changeCurrentPage={changeCurrentPage}
          // forcePage={forcePage}
          handlePageInput={handlePageInput}
        />
      ) : null}
    </div>
  );
  return table;
};

export default Table;
