import React from "react";
import Table from "@/components/Table";
import { history, historyHeader } from "@/mocks";

const ClockInHistoryTable = () => {
  return (
    <Table tableHeaders={historyHeader} tableData={history} paginate >
      {(row: any) => {
        return (
          <>
            <td>{row.full_name}</td>
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
