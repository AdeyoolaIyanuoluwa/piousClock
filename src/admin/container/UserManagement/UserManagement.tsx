import Button from "@/components/Button";
import SearchBox from "@/components/SearchBox";
import React, { useState } from "react";
import styles from "./users.module.scss";
import { useDebounce } from "use-debounce";
import UserManagementTable from "./UserManagementTable";
import FilterUserManagement from "./FilterUserManagement";
import AddMember from "./AddMember";
import UserManagementMobile from "./UserManagementMobile";

const UserManagement = () => {
  const [searchValue, setSearchValue] = useState("");
  const [showFilterDrawer, setShowFilterDrawer] = useState(false);
  const [addMember, setAddMember] = useState(false)

  const [searchDebounce] = useDebounce(searchValue, 1000);
  return (
    <div className={styles.management}>
      <div className={styles.management__header}>
        <div className={styles.management__header__search}>
          <p style={{ width: "72px" }}>Members</p>
          <SearchBox
            searchName="Search"
            onSearch={(e) => setSearchValue(e)}
            onChange={(e) => setSearchValue(e)}
            searchValue={searchValue}
          />
        </div>
        <div className={styles.management__header__button}>
          <Button
            size={"md"}
            theme="secondary"
            onClick={() => setShowFilterDrawer(true)}
          >
            Filter
          </Button>
          <Button size={"md"} theme="">
            Export
          </Button>
          <Button size={"md"} theme="primary" onClick={()=> setAddMember(true)}>
            Add member
          </Button>
        </div>
      </div>
      <div className={styles.management__table}>
        <UserManagementTable/>
      </div>
      <div className={styles.management__mobile}>
        <UserManagementMobile/>
      </div>
      {showFilterDrawer && (
        <FilterUserManagement
          isShown={showFilterDrawer}
          onCloseComplete={() => setShowFilterDrawer(false)}
        />
      )}
      {addMember && (
        <AddMember isShown={addMember} onCloseComplete={()=> setAddMember(false)}/>
      )}
    </div>
  );
};

export default UserManagement;
