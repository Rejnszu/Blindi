import React, { useState } from "react";
import styles from "./StackConfigInput.module.scss";
interface InputProps {
  value: number;
  image: string;
}
const ConfigInput = ({ value, image }: InputProps) => {
  const [inputValue, setInputValue] = useState<number | string>(0);
  const increaseInputValue = (): void => {
    setInputValue((prevValue) => +prevValue + 1);
  };
  const decreaseInputValue = (): void => {
    setInputValue((prevValue) => +prevValue - 1);
  };
  return (
    <div className={styles["input-wrapper"]}>
      <div>
        <img
          className={styles["input__image"]}
          src={image}
          alt={image}
          loading="lazy"
        />
        <input
          onFocus={() => {
            if (inputValue === 0) setInputValue("");
          }}
          placeholder="0"
          value={inputValue}
          type="number"
          onChange={(e) => setInputValue(Number(e.currentTarget.value))}
          className={styles["input"]}
        />
      </div>
      <div>
        <div className={styles["input__button-wrapper"]}>
          <button
            onClick={increaseInputValue}
            type="button"
            className={styles["input__buttons"]}
          >
            +
          </button>
          <button
            onClick={decreaseInputValue}
            type="button"
            className={styles["input__buttons"]}
          >
            -
          </button>
        </div>
        <p className={styles["input__total-value"]}>
          Total Chips Value: {value * +inputValue}
        </p>
      </div>
    </div>
  );
};

export default ConfigInput;
