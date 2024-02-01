import React from "react";
import styles from "./header.module.scss";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Avatar from "../Avatar";
import MenuBar from "../../assets/Menu.svg";
import classNames from "classnames";
import { navLinks } from "../SideBar/navLinks";
import Logo from "../../assets/piouslogo.svg";
import Logout from "../../assets/fillLogout.svg";

const SmallScreenHeader = ({ visibility, setVisibility }: any) => {

  const location = useLocation();

  const toggleVisibility = () => setVisibility((prev: any) => !prev);
  const navigate = useNavigate();

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

  return (
    <div className={styles.header}>
      <button onClick={() => toggleVisibility()}>
        <img src={MenuBar} alt="menubar" />
      </button>
      <div className={styles.header__title}>
        <p>{headerTitle()}</p>
      </div>

      <div className={styles.header__profile}>
        {!visibility && (
        <div>
          <Avatar name={"Temilola Peter"} />
        </div>
        )}
      </div>

      <div
        className={classNames([
          styles.slider,
          visibility ? styles.showSlider : styles.hideSlider,
        ])}
      >
        <div className={styles.sidebar__wrapper}>
          <div>
            <div className={styles.sidebar__logo}>
              <img
                className={styles.sidebar__logo__menubar}
                src={Logo}
                alt="logo"
              />
              <img
                src={MenuBar}
                alt="menubar"
                onClick={() => toggleVisibility()}
              />
            </div>
          </div>

          <div className={styles.menu}>
            {navLinks.map((i) => {
              return (
                <NavLink
                  className={({ isActive }) => (isActive ? styles.active : "")}
                  to={i.url}
                >
                  <li className={classNames(styles.menu__list)}>
                    <img src={i.icon} />
                    <span> {i.title}</span>
                  </li>
                </NavLink>
              );
            })}
          </div>
          <div className={styles.logout}>
            <img src={Logout} alt="logout" />
            <p onClick={() => navigate("/auth/login")}>Log Out</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmallScreenHeader;
