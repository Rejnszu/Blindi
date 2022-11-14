import React, { useState } from "react";
import styles from "./StackConfigInput.module.scss";
import { TiTick } from "react-icons/ti";
interface InputProps {
  value: number;
  image: string;
  addChip: React.Dispatch<React.SetStateAction<number[]>>;
}
const ConfigInput = ({ value, image, addChip }: InputProps) => {
  const manageChips = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.checked === true) {
      addChip((prevState) => [...prevState, value]);
    } else {
      addChip((prevState) => prevState.filter((number) => number !== value));
    }
  };

  return (
    <div className={styles["input-wrapper"]}>
      <div>
        <input
          onChange={manageChips}
          value={value}
          type="checkbox"
          className={styles["input"]}
        />

        <div className={styles["image-wrapper"]}>
          <img
            className={styles["input__image"]}
            src={image}
            alt="coin"
            loading="lazy"
          />
          <span className={styles["check-mark"]}>
            <TiTick />
          </span>
        </div>
      </div>
    </div>
  );
};

export default ConfigInput;
