import React from "react";
import styles from "./BlindsStructureTable.module.scss";
import { blindStructure } from "./BlindStructure";
interface BlindStructureTableProps {
  blindLevel: number;
  setBlinds: (value: number) => void;
}
const BlindsStructureTable = ({
  blindLevel,
  setBlinds,
}: BlindStructureTableProps) => {
  return (
    <table className={styles.table}>
      <tbody>
        <tr>
          <th>Blinds Level</th>
          <th>Small Blind</th>
          <th>Big Blind</th>
        </tr>
        {blindStructure.map((blind, i) => {
          if (blindLevel === i) {
            return (
              <tr
                key={i}
                onClick={() => setBlinds(i + 1)}
                className={styles.active}
              >
                <td>{i + 1}</td>
                <td>{blind.smallBlind}</td>
                <td>{blind.bigBlind}</td>
              </tr>
            );
          } else {
            return (
              <tr onClick={() => setBlinds(i)} key={i}>
                <td>{i + 1}</td>
                <td>{blind.smallBlind}</td>
                <td>{blind.bigBlind}</td>
              </tr>
            );
          }
        })}
      </tbody>
    </table>
  );
};

export default BlindsStructureTable;
