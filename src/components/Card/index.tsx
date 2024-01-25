import React from "react";
import styles from "./card.module.scss";
import Indicator from "../Indicator";
import Avatar from "../Avatar";

const Card = () => {
  const data = [
    {
      active: true,
      id: 1,
    },
    {
      active: false,
      id: 2,
    },
  ];
  return (
    <div>
      {data.map((el) => (
        <div className={styles.cardWrapper}>
          <div key={el.id} className={styles.cardWrapper__detailwrapper}>
            <div className={styles.cardWrapper__indicator}>
              <Indicator
                color={el.active ? "#A7D49B" : "#FFC4D1"}
                width="16px"
                height="16px"
              />
            </div>
            <div className={styles.cardWrapper__details}>
              <Avatar name={"Abraham De"} />
              <div>
                <h6>Abraham De Lacy</h6>
                <p>abrahamdelacy@email.com</p> <p>08124576169</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
