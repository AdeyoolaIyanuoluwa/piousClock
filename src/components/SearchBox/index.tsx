import { SearchBoxProps } from "@/types/index";
import * as React from "react";
import Search from "../../assets/search.svg";
import styles from "./searchBox.module.scss";
import classNames from "classnames";

const SearchBox = ({
  onSearch,
  searchName,
  searchValue,
  onChange,
  height,
  width,
  size
}: SearchBoxProps) => {
  return (
    <div className={classNames(styles.search, styles[`search__${size}`])}>
      <img
        src={Search}
        alt="search"
        width="18px"
        height="18px"
        aria-hidden
        onClick={onSearch}
      />
      <input
        placeholder="Search name or email address"
        name={searchName}
        value={searchValue}
        height={height}
        width={width}
        onChange={(e) => {
          onChange(e.target && e.target.value);
        }}
      />
    </div>
  );
};

export default SearchBox;
