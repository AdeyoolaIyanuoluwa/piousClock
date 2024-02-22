import React, { useEffect, useState } from "react";
import CancelIcon from "../../assets/close-circle.svg";
import styles from "./filterTag.module.scss";

const FilterTags = ({
  name,
  filterKey,
  filteredData,
  handleCancelFilter,
  dataTestId,
}: any) => {
  const [filter, setFilter] = useState<any>();

  useEffect(() => {
    setFilter(filteredData[filterKey]?.length);
  }, [filteredData]);

  // function areStartDateAndEndDateEmpty(filteredData: any) {
  //     return filteredData.start_date === '' && filteredData.end_date === '';
  // }

  return (
    <>
      {filter > 0 && (
        <div className={styles.tag}>
          <text>filter :</text>
          <div className={styles.tag__range}>
            <p>{name}</p>
            <img
              src={CancelIcon}
              alt="cancel"
              onClick={() => handleCancelFilter()}
              data-testid={dataTestId || "cancel-btn"}
            />
          </div>
        </div>
      )}

      {/* {filterKey === "date" && areStartDateAndEndDateEmpty(filteredData) === false &&
                <div className={styles.tag}>
                    <p>{name}</p>
                    <img src={'CancelIcon'} alt="cancel" onClick={() => handleCancelFilter()} data-testid={dataTestId || 'cancel-btn'} />
                </div>} */}
    </>
  );
};

export default FilterTags;
