import React, { useState, useEffect } from "react";
import Button from "../../UI/Button";
import styles from "./Blinds.module.scss";
import { blindStructure } from "./BlindStructure";
interface BlindsProps {
  blindLevel: number;
  increaseBlinds: () => void;
}
const Blinds = ({ blindLevel, increaseBlinds }: BlindsProps) => {
  const [warning, setWarning] = useState(false);
  const increaseBlindsHandler = (): void => {
    if (blindLevel < 10) increaseBlinds();
  };
  useEffect(() => {
    if (blindLevel === 10) setWarning(true);
  }, [blindLevel]);
  return (
    <div className={styles.blinds}>
      <p className={`${styles["blind"]} ${styles["blind--small"]}`}>
        {blindStructure[blindLevel].smallBlind}
      </p>
      {!warning ? (
        <Button onClick={increaseBlindsHandler} type="button">
          Zwiększ Blindy
        </Button>
      ) : (
        <p>Osiągnąłeś najwyższy poziom blindów</p>
      )}
      <p className={`${styles["blind"]} ${styles["blind--big"]}`}>
        {blindStructure[blindLevel].bigBlind}
      </p>
    </div>
  );
};

export default Blinds;
