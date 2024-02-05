import React from "react";
import styles from "./clockInHistory.module.scss";
import { history } from "@/mocks";
import Avatar from "@/components/Avatar";
import PlaceholderIcon from "../../assets/placeholder.svg";
import Pagination from "@/components/Pagination";

const ClockInHistoryMobile = () => {
  return (
    <div className={styles.history}>
      {history.slice(0, 10).map((i) => (
        <div className={styles.history__members}>
          <div className={styles.history__members__avatar}>
            <div className={styles.history__members__avatar__name}>
              <Avatar name={i.full_name} size="md" />
              <div>
                <text>{i.full_name}</text>
                <p>{i.address}</p>
                <p>{i.phone_number}</p>
              </div>
            </div>
            <div>
              {" "}
              <p>{i.date}</p>
            </div>
          </div>
          <div className={styles.history__members__clock}>
            <p>Clock-in: {i.clock_in}</p>
            <p style={{ borderLeft: "1px solid #F3F4F6", height: "16px" }}></p>
            <p>Clock-out: {i.clock_out}</p>
          </div>
        </div>
      ))}
      {!history?.length && (
        <>
          <div className={styles.user__empty}>
            <div>
              {<img src={PlaceholderIcon} alt="PlaceholderIcon" />}{" "}
              <p>You have no members</p>
              <p>Start by adding new members</p>
            </div>
          </div>
        </>
      )}

      <Pagination />
    </div>
  );
};

export default ClockInHistoryMobile;
