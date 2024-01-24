import { SearchBoxProps } from '@/types/index';
import * as React from 'react';
import Search from '../../assets/search.svg';
import styles from './searchBox.module.scss';

const SearchBox = ({
  onSearch,
  searchName,
  searchValue,
  onChange,
  height,
  dataTestId,
}: SearchBoxProps) => {
  return (
    <div className={styles.search}>
      <img
        src={Search}
        alt="search"
        width="20px"
        height="20px"
        aria-hidden
        onClick={onSearch}
      />
      <input
        placeholder="Search"
        name={searchName}
        value={searchValue}
        height={height}
        data-testid={dataTestId}
        onChange={(e) => {
          onChange(e.target && e.target.value);
        }}
      />
    </div>
  );
};

export default SearchBox;
