import React from "react";
import ConfigInput from "./ConfigInputs/StackConfigInput";
import styles from "./StackConfigForm.module.scss";
import { chips } from "./ConfigInputs/ChipsData";
import Button from "../../UI/Button";
const StackConfigForm = () => {
  const countStack = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("test");
  };
  return (
    <form className={styles["form"]}>
      <div className={styles["form__inner-wrapper"]}>
        <label>Number of players</label>
        <input />
        <label>Beginning stack</label>
        <input />
      </div>
      <p className={styles["inputs__header"]}>Amount of each chip You have</p>
      <div className={styles.inputs}>
        {chips.map((chips, i) => {
          return (
            <ConfigInput key={i} value={chips.value} image={chips.image} />
          );
        })}
      </div>
      <Button onClick={countStack} type="submit">
        Calculate stack
      </Button>
    </form>
  );
};

export default StackConfigForm;
