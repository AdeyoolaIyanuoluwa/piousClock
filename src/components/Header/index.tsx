import React from "react";
import styles from "./header.module.scss";
import { useLocation, useNavigate } from "react-router-dom";
import moment from "moment";
import Avatar from "../Avatar";
import Dropdown from "../Dropdown";
import { Option } from "../Dropdown/Option";
import UserIcon from "../../assets/userIcon.svg";
import LogoutIcon from "../../assets/logout.svg";
import { useUserContext } from "@/context/userContexts";
const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  interface UserContext {
    logoutUser: () => void;
  }
  const { logoutUser }: any = useUserContext() as UserContext;
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
  const FormatDateTime = () => {
    return (
      <div>
        <div style={{ display: "flex", flexWrap: "wrap", fontWeight: "500" }}>
          {moment().format("LT")}
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", color: "#6b7280" }}>
          {" "}
          {moment().format("dddd, MMMM DD, YYYY")}
        </div>
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
          <span className={styles.header__divider}></span>
        </div>
        <div className={styles.header__format}>
          <div>{FormatDateTime()}</div>
        </div>
      </div>
      <div className={styles.header__profile}>
        <div>
          <span className={styles.header__divider}></span>
        </div>
        <div>
          <Avatar name={"Temilola Peter"} size={'sm'}/>
        </div>

        <div>
          <p className={styles.header__profile__name}>Temilola Peter</p>
          <p className={styles.header__profile__email}>
            temilolapeter@gmail.com
          </p>
        </div>
        <div className={styles.header__dropdown}>
          <Dropdown
            content={
              <>
                <Option image={UserIcon}>
                  <p
                    className={styles.header__dropProfile}
                    onClick={() => navigate("/profile")}
                  >
                    Admin profile
                  </p>
                </Option>
                <Option image={LogoutIcon}>
                  <p className={styles.header__dropLogout} onClick={()=>logoutUser()}>Log out</p>
                </Option>
              </>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
