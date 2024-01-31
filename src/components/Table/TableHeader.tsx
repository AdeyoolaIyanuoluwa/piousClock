import React from "react";
import styles from "./table.module.scss";
import { TableProps } from "@/types";

const TableHeader = ({ tableHeaders }: TableProps) => (
  <thead className={styles.table__header}>
    <tr className={styles.table__row}>
      {tableHeaders?.map((header) => (
        <th key={header.key}>
          <div style={{ display: "flex", gap: "10px" }}>
            <div>{header.text}</div>
          </div>
        </th>
      ))}
    </tr>
  </thead>
);

export default TableHeader;
