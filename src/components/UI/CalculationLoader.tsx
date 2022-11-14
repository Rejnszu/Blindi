import React from "react";
import styles from "./CalculationLoader.module.scss";
const CalculationLoader = () => {
  return (
    <div className={styles["calculation-loader"]}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default CalculationLoader;
