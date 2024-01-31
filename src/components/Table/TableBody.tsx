import React from 'react';
import styles from './table.module.scss';
import { TableProps } from '@/types';

const TableBody = ({ tableData, content }: TableProps) => {
  return(
  <tbody className="table__body">
    
    {tableData?.map((row, index) => {
      return (
        <tr className={styles.table__row} key={index}>
        <>{content(row)}</>
      </tr>
      )
    })}
  </tbody>
)};


export default TableBody;
