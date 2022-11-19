import React from "react";
import styles from "./CalculationLoader.module.scss";
const CalculationLoader = () => {
  return (
    <React.Fragment>
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
      <p className={styles["calculation-loader__mobile"]}>
        Calculating
        <span>.</span>
        <span>.</span>
        <span>.</span>
        <span>.</span>
      </p>
    </React.Fragment>
  );
};

export default CalculationLoader;
