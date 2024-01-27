import React from "react";
import styles from "./card.module.scss";
import GreenLogin from "../../assets/icons/greenLoginIcon.svg";
import BlueLogin from "../../assets/icons/blueLoginIcon.svg";
import ContactIcon from "../../assets/icons/contactIcon.svg";
const Card = () => {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.cardWrapper__green}>
        <div>
          <img src={GreenLogin} alt="" />
          <p>Number of clock-ins today</p>
          <h6>0</h6>
        </div>
      </div>
      <div className={styles.cardWrapper__blue}>
        <div>
          <img src={BlueLogin} alt="" />
          <p>Number of clock-outs today</p>
          <h6>0</h6>
        </div>
      </div>
      <div className={styles.cardWrapper__red}>
        <div>
          <img src={ContactIcon} alt="" />
          <p>Total number of members</p>
          <h6>0</h6>
        </div>
      </div>
    </div>
  );
};

export default Card;
