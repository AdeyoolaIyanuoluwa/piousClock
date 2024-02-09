import React from "react";
import styles from "./index.module.scss";
import Logo from "../../assets/piousClock.svg";
import SearchBox from "@/components/SearchBox";
import Timer from "../../assets/memberTimer.svg";
import Copyright from "../../assets/copyright.svg";

const Members = () => {
  return (
    <div className={styles.container}>
      <div>
        <img src={Logo} alt="" />
        <p>Select your profile and clock-in or out</p>
        <div className={styles.container__search}>
          <SearchBox
            searchName="Search"
            onSearch={() => {}}
            onChange={() => {}}
            // searchValue={() => {}}
            size="lg"
          />
        </div>
        <div className={styles.container__content}>
          <img src={Timer} alt="" />
        </div>
        <div className={styles.container__footer}>
          <div className={styles.container__footer__content}>
            <img style={{ paddingLeft: "77px" }} src={Logo} alt="" />
            <p>
              Copyright <img src={Copyright} alt="" />
              Enyata 2023
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Members;
