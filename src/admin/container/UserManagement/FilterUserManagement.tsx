import Button from "@/components/Button";
import DatePickerInput from "@/components/Input/DatePickerInput";
import SideSheetDrawer from "@/components/SideSheetDrawer";
import React, { useState } from "react";
import styles from "./users.module.scss";
import moment from "moment";

const FilterUserManagement = ({ isShown, onCloseComplete, setFilteredData, position }: any) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
 

  
  const handleFilter = () => {
    setFilteredData({
      date: startDate ? moment(startDate).format('YYYY-MM-DD') : '',
      to_date: endDate ? moment(endDate).format('YYYY-MM-DD') : '',
  });
  console.log(moment(startDate).format('YYYY-MM-DD'));
  console.log( moment(endDate).format('YYYY-MM-DD'));
  
  
  onCloseComplete();
  };
  return (
    <div>
      <SideSheetDrawer
        isShown={isShown}
        onCloseComplete={onCloseComplete}
        headingTitle="Filter by"
        width="452px"
        position={position}
      >
        <div className={styles.filterInput}>
          <p className={styles.filterInput__Heading}>Date added</p>
          <div className={styles.filterInput__dateInput}>
            <DatePickerInput
                 selected={startDate}
                 selectsStart
                 startDate={startDate}
                 endDate={endDate}
                 onChange={(date: any) => setStartDate(date)}
                 placeholderText="dd | mm | yyyy"
            />
            <DatePickerInput
             selected={endDate}
             selectsEnd
             startDate={startDate}
             endDate={endDate}
             minDate={startDate}
             onChange={(date: any) => setEndDate(date)}
             placeholderText="dd | mm | yyyy"
            />
          </div>

          <div className={styles.btnWrapperr}>
            <Button
              size={"sm"}
              theme={"primary"}
              onClick={() => handleFilter()}
            >
              Filter
            </Button>
            <Button
              size={"md"}
              theme={"second"}
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

export default FilterUserManagement;
