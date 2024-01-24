import React from "react";
import styles from "./indicator.module.scss";

export type IndicatorProps = {
  color: string;
  width: string;
  height: string
};

const Indicator = ({ color, ...styleProps }: IndicatorProps) => (
  <div className={styles.indicator} style={{ backgroundColor: color, ...styleProps }} />
);

export default Indicator;
