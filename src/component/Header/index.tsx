import React from "react";
import styles from "./header.module.scss";
import { useLocation } from "react-router-dom";
import moment from "moment";
import Avatar from "../Avatar";
import DropdownIcon from "../../assets/arrow-down.svg";

const Header = () => {
  const location = useLocation();
  const headerTitle = () => {
    switch (location?.pathname) {
      case "/dashboard":
        return "Dashboard";
      case "/history":
        return "Clock-in History";
      case "/user-management":
        return "User Management";
      default:
        return "";
    }
  };
  const FormatTime = () => {
    return (
      <div style={{ display: "flex", flexWrap: "wrap", fontWeight: "500" }}>
        {moment().format("LT")}
      </div>
    );
  };
  const FormatDate = () => {
    return (
      <div style={{ display: "flex", flexWrap: "wrap", color: "#6b7280" }}>
        {moment().format("dddd, MMMM DD, YYYY")}
      </div>
    );
  };

  return (
    <div className={styles.header}>
      <div className={styles.header__group}>
        <div className={styles.header__title}>
          <p>{headerTitle()}</p>
        </div>
        <div>
          {" "}
          <div>{FormatTime()}</div>
          <div>{FormatDate()}</div>
        </div>
      </div>
      <div className={styles.header__avatar}>
        <div>
          {" "}
          <Avatar />
        </div>
        <div>
          <p className={styles.header__avatar__name}>Temilola Peter</p>
          <p className={styles.header__avatar__email}>
            temilolapeter@gmail.com
          </p>
        </div>
        <div>
          <img src={DropdownIcon} />
        </div>
      </div>
    </div>
  );
};

export default Header;
