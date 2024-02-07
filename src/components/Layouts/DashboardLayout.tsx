import React, { useState } from "react";
import styles from "./layout.module.scss";
import SideBar from "../SideBar";
import classNames from "classnames";
import Header from "../Header";
import { ChildrenProps } from "../../types";
import SmallScreenHeader from "../Header/SmallScreenHeader";
import BackArrow from "../../assets/backarrow.svg";
import { useNavigate } from "react-router-dom";

const DashboardLayout = ({ children, profile }: ChildrenProps) => {
  const [visibility, setVisibility] = useState(false);
  const navigate = useNavigate();
  return (
    <main className={classNames(styles.main__layout)}>
      <SideBar />
      <section className={styles.main__page}>
        {!profile ? (
          <div className={styles.main__mainscreen}>
            {" "}
            <Header />
          </div>
        ) : (
          <div className={styles.main__back}>
            <button onClick={() => navigate(-1)}>
              {" "}
              <img src={BackArrow} alt="" /> <span>Back</span>
            </button>
            <div>
              <span className={styles.main__back__divider}></span>
            </div>
            <div>
              <p></p>
            </div>
          </div>
        )}

        {visibility && (
          <div
            className={styles.main__visibility}
            onClick={() => setVisibility(false)}
          ></div>
        )}
        {!profile && (
          <div className={styles.main__smallscreen}>
            <SmallScreenHeader
              visibility={visibility}
              setVisibility={setVisibility}
            />
          </div>
        )}
        <>
          <div
            className={styles.main__content}
            style={{ position: visibility && "fixed" }}
          >
            {children}
          </div>
        </>
      </section>
    </main>
  );
};

export default DashboardLayout;
