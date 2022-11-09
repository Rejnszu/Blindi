import React, { useState, useEffect } from "react";
import Button from "../../UI/Button";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import styles from "./Blinds.module.scss";
import { blindStructure } from "./BlindStructure";
interface BlindsProps {
  blindLevel: number;
  increaseBlinds: () => void;
  decreaseBlinds: () => void;
}
const Blinds = ({
  blindLevel,
  increaseBlinds,
  decreaseBlinds,
}: BlindsProps) => {
  const [warning, setWarning] = useState(false);

  useEffect(() => {
    if (blindLevel === 10) setWarning(true);
    else setWarning(false);
  }, [blindLevel]);
  return (
    <div className={styles.blinds}>
      <div className={styles["blind__changer"]}>
        <button onClick={() => blindLevel >= 1 && decreaseBlinds()}>-</button>
        <p>
          {warning
            ? "Osiągnąłeś najwyższy poziom blindów"
            : "Zmień poziom blindów"}
        </p>
        <button onClick={() => blindLevel < 10 && increaseBlinds()}>+</button>
      </div>

      <div className={styles["blinds__inner-wrapper"]}>
        <p className={`${styles["blind"]} ${styles["blind--small"]}`}>
          {blindStructure[blindLevel].smallBlind}
        </p>

        <p className={`${styles["blind"]} ${styles["blind--big"]}`}>
          {blindStructure[blindLevel].bigBlind}
        </p>
      </div>
    </div>
  );
};

export default Blinds;
