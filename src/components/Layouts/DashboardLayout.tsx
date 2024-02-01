import React, {useState} from "react";
import styles from "./layout.module.scss";
import SideBar from "../SideBar";
import classNames from "classnames";
import Header from "../Header";
import { ChildrenProps } from "../../types";
import SmallScreenHeader from "../Header/SmallScreenHeader";

const DashboardLayout = ({ children }: ChildrenProps) => {
  const [visibility, setVisibility] = useState(false);
  return (

    <main className={classNames(styles.main__layout)}>
      <SideBar />
      <section className={styles.main__page}>
       <div className={styles.main__mainscreen}> <Header /></div>

       {visibility && (
            <div className={styles.main__visibility}
              onClick={() => setVisibility(false)}
            ></div>
          )}
        <div className={styles.main__smallscreen}>
          <SmallScreenHeader visibility={visibility} setVisibility={setVisibility} />
        </div>
        <>
          <div className={styles.main__content} style={{ position: visibility && 'fixed' }}>{children}</div>
        </>
      </section>
    </main>
  );
};

export default DashboardLayout;
