import React from "react";
import styles from "./ChipResult.module.scss";
interface ChipResultProps {
  image: string;
  amount: number;
}
const ChipResult = ({ image, amount }: ChipResultProps) => {
  return (
    <div className={styles.result}>
      <img src={image} alt={image} />
      <span>x{amount}</span>
    </div>
  );
};

export default ChipResult;
