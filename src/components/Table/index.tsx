import React, { useState } from "react";
import styles from "./table.module.scss";
import TableHeader from "../Table/TableHeader";
import TableBody from "../Table/TableBody";
import { TableProps } from "@/types";
import PlaceholderIcon from "../../assets/placeholder.svg";
import Pagination from "../Pagination";
import Button from "../Button";
import AddMember from "@/admin/container/UserManagement/AddMemberModal";

export const TableLoader = ({ headers }: any) => (
  <div className={styles.skeleton}>
    <div className={styles.skeleton__head} />
    {headers?.slice(0, 4).map((header: any) => (
      <div key={header?.id} className={styles.skeleton__row}>
        {headers?.map((header: any) => (
          <div key={header?.id} className={styles.skeleton__item} />
        ))}
      </div>
    ))}
  </div>
);
const Table = ({
  tableHeaders,
  tableData,
  children,
  loading,
  currentPage,
  totalPage,
  changeCurrentPage,
  paginate,
  user,
  displayed,
  headers,
  totalCount
}: TableProps) => {
  const sortRows = () => true;

  const [addMember, setAddMember] = useState(false);
  const table = (
    <div>
      <table className={`${styles.table}`}>
        <TableHeader sortRows={sortRows} tableHeaders={tableHeaders} />
        <TableBody cols={headers} tableData={tableData} content={children} />
      </table>

      {!tableData?.length && (
        <>
          {user ? (
            <div className={styles.table__empty}>
              <div>
                {<img src={PlaceholderIcon} alt="PlaceholderIcon" />}{" "}
                <p>You have no recent activity.</p>
                <p>Go to “User management” to add members</p>
              </div>
            </div>
          ) : (
            <div className={styles.table__empty}>
              <div>
                {<img src={PlaceholderIcon} alt="PlaceholderIcon" />}{" "}
                <p>You have no members</p>
                <p>Start by adding new members</p>
                <div className={styles.table__empty__btn}>
                  <Button
                    size="md"
                    theme="primary"
                    onClick={() => setAddMember(true)}
                  >
                    Add manually
                  </Button>
                  <Button size="md" theme="secondary">
                    Import CSV file
                  </Button>
                </div>
              </div>
            </div>
          )}
        </>
      )}
      {paginate && !loading && tableData?.length ? (
        <Pagination
          currentPage={currentPage}
          totalPage={totalPage}
          changeCurrentPage={changeCurrentPage}
          displayed={displayed}
          totalCount={totalCount}
        />
      ) : null}

      {addMember && (
        <AddMember
          isShown={addMember}
          onCloseComplete={() => setAddMember(false)}
        />
      )}
    </div>
  );
  return loading ? <TableLoader headers={tableHeaders} /> : table;
};

export default Table;
