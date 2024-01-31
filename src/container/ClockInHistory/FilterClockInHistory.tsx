import Button from "@/components/Button";
import DatePickerInput from "@/components/Input/DatePickerInput";
import SideSheetDrawer from "@/components/SideSheetDrawer";
import React, { useState } from "react";
import styles from "./clockInHistory.module.scss";

const FilterClockInHistory = ({ isShown, onCloseComplete, onFilter }: any) => {
  const [filters, setFilters] = useState({
    date: null,
  });

  const handleFilter = () => {
    onFilter(filters);
  };

  return (
    <div>
      <SideSheetDrawer
        isShown={isShown}
        onCloseComplete={onCloseComplete}
        headingTitle="Filter"
        width="452px"
      >
        <div className={styles.filterInput}>
          <p className={styles.filterInput__Heading}>Date added</p>
          <div>
            <DatePickerInput
              placeholderText="dd | mm | yyyy"
              selected={filters.date}
              onChange={(date) =>
                setFilters((prev) => ({
                  ...prev,
                  date,
                }))
              }
            />
          </div>

          <div className={styles.btnWrapper}>
            <Button
              size={"sm"}
              theme={"primary"}
              onClick={() => handleFilter()}
            >
              Filter
            </Button>
            <Button
              size={"md"}
              theme={"secondary"}
              onClick={() => onCloseComplete()}
            >
              Close
            </Button>
          </div>
        </div>
      </SideSheetDrawer>
    </div>
  );
};

export default FilterClockInHistory;
