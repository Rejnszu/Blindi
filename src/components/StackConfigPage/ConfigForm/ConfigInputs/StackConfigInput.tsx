import React, { useEffect, useRef } from "react";
import styles from "./StackConfigInput.module.scss";
import { TiTick } from "react-icons/ti";
import gsap from "gsap";
import { Flip } from "gsap/Flip";
gsap.registerPlugin(Flip);
interface InputProps {
  value: number;
  image: string;
  addChip: React.Dispatch<React.SetStateAction<number[]>>;
  selectedChips: number[];
}
const ConfigInput = ({ value, image, addChip, selectedChips }: InputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const inputWrapperRef = useRef<HTMLDivElement>(null);
  let state = Flip.getState(inputWrapperRef.current);
  const manageChips = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.checked === true) {
      addChip((prevState) => [...prevState, value]);
    } else {
      addChip((prevState) => prevState.filter((number) => number !== value));
    }
  };
  useEffect(() => {
    Flip.from(state, {
      duration: 0.5,
      ease: "Power0.easeNone",
    });
  }, [selectedChips]);
  useEffect(() => {
    if (selectedChips.length === 0) {
      inputRef.current!.checked = false;
    }
  }, [selectedChips]);
  return (
    <div className={styles["input-wrapper"]}>
      <div>
        <input
          ref={inputRef}
          onChange={manageChips}
          value={value}
          type="checkbox"
          className={styles["input"]}
        />

        <div ref={inputWrapperRef} className={styles["image-wrapper"]}>
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
