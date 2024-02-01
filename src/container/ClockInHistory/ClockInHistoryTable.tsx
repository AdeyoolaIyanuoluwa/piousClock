import React from "react";
import Table from "@/components/Table";
import { history, historyHeader } from "@/mocks";
import Avatar from "@/components/Avatar";
import styles from "./clockInHistory.module.scss";

const ClockInHistoryTable = () => {
  return (
    <Table tableHeaders={historyHeader} tableData={history} paginate>
      {(row: any) => {
        return (
          <>
          <td>
            <div className={styles.avatar_name}>
              <div>
                <Avatar name={row.full_name} />
              </div>
              {row.full_name}
            </div>
            </td>
            <td>{row.address}</td>
            <td>{row.phone_number}</td>
            <td>{row.clock_in}</td>
            <td>{row.clock_out}</td>
            <td>{row.date}</td>
          </>
        );
      }}
    </Table>
  );
};

export default ClockInHistoryTable;
