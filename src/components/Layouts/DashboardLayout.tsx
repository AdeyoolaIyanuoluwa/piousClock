import React from "react";
import styles from "./layout.module.scss";
import SideBar from "../SideBar";
import classNames from "classnames";
import Header from "../Header";
import { ChildrenProps } from "../../types";

const DashboardLayout = ({ children }: ChildrenProps) => {
  return (
    <main className={classNames(styles.main__layout)}>
      <SideBar />
      <section className={styles.main__page}>
        <Header />
        <>
          <div className={styles.main__content}>
  
            {children}
            </div>
        </>
      </section>
    </main>
  );
};

export default DashboardLayout;
