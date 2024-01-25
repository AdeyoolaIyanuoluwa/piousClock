import React from "react";
import styles from "./layout.module.scss";
import SideBar from "../SideBar";
import classNames from "classnames";
import Header from "../Header";
import { ChildrenProps } from "../../types";
import Pagination from "../Pagination";
import Table from "../Table";

const DashboardLayout = ({ children }: ChildrenProps) => {
  return (
    <main className={classNames(styles.main__layout)}>
      <SideBar />
      <section className={styles.main__page}>
        <Header />
        <>
          <div className={styles.main__content}>
              <Pagination/>
              <Table/>
            {children}
            </div>
        </>
      </section>
    </main>
  );
};

export default DashboardLayout;
