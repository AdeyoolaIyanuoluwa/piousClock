import React from 'react';
import styles from './table.module.scss';
import { tableHeader } from '../../mocks/index';
import { TableProps } from '@/types';

const TableHeader = ({ sortRows } : TableProps) => (
  <thead className={styles.table__header}>
    <tr className={styles.table__row}>
      {tableHeader?.map((header, index) => (
        <th key={index}>
          {header ? (
            <div style={{ display: 'flex', gap: '10px' }}>
              <div>{header.text}</div>
            </div>
          ) : (
            ''
          )}

          {header.sortable && (
            <button className="" type="button" onClick={() => sortRows(header)}>
              <svg width="6" height="8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="m4.189 6.776-.803-.803A.273.273 0 1 0 3 6.36l1.268 1.268c.106.107.28.107.386 0L5.92 6.361a.273.273 0 1 0-.386-.386l-.8.799V2.52a.274.274 0 0 0-.545 0v4.256ZM1.81 1.358l.803.802A.273.273 0 1 0 3 1.774L1.732.507a.273.273 0 0 0-.386 0L.08 1.773a.273.273 0 1 0 .386.386l.8-.799v4.254a.273.273 0 1 0 .545 0V1.358Z"
                  fill="#B4B4B4"
                />
              </svg>
            </button>
          )}
        </th>
      ))}
    </tr>
  </thead>
);


export default TableHeader;
