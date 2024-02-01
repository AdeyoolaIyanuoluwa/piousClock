import Card from "@/components/Card";
import DashboardLayout from "@/components/Layouts/DashboardLayout";
import React, { useState } from "react";
import styles from "./clockInHistory.module.scss";
import SearchBox from "@/components/SearchBox";
import Button from "@/components/Button";
import ClockInHistoryTable from "./ClockInHistoryTable";
import { useDebounce } from "use-debounce";
import FilterClockInHistory from "./FilterClockInHistory";

const ClockInHistory = () => {
  const [searchValue, setSearchValue] = useState("");
  const [showFilterDrawer, setShowFilterDrawer] = useState(false);
  const [searchDebounce] = useDebounce(searchValue, 1000);
  return (
    <DashboardLayout>
      <Card />

      <div className={styles.history}>
        <div className={styles.history__header}>
          <div className={styles.history__header__search}>
            <p style={{ width: "72px" }}>Members</p>
            <SearchBox
              searchName="Search"
              onSearch={(e) => setSearchValue(e)}
              onChange={(e) => setSearchValue(e)}
              searchValue={searchValue}
            />
          </div>
          <div>
            <Button
              size={"md"}
              theme="secondary"
              onClick={() => setShowFilterDrawer(true)}
            >
              Filter
            </Button>
          </div>
        </div>
        <div>
          <ClockInHistoryTable />
        </div>
      </div>
      {showFilterDrawer && (
        <FilterClockInHistory
          isShown={showFilterDrawer}
          onCloseComplete={() => setShowFilterDrawer(false)}
        />
      )}
    </DashboardLayout>
  );
};

export default ClockInHistory;
