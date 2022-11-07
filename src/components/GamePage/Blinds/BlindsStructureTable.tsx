import React from "react";
import styles from "./BlindsStructureTable.module.scss";
import { blindStructure } from "./BlindStructure";
interface BlindStructureTableProps {
  blindLevel: number;
}
const BlindsStructureTable = ({ blindLevel }: BlindStructureTableProps) => {
  return (
    <table className={styles.table}>
      <tr>
        <th>Poziom Blindów</th>
        <th>Small Blind</th>
        <th>Big Blind</th>
      </tr>
      {blindStructure.map((blind, i) => {
        if (blindLevel === i) {
          return (
            <tr className={styles.active}>
              <td>{i + 1}</td>
              <td>{blind.smallBlind}</td>
              <td>{blind.bigBlind}</td>
            </tr>
          );
        } else {
          return (
            <tr>
              <td>{i + 1}</td>
              <td>{blind.smallBlind}</td>
              <td>{blind.bigBlind}</td>
            </tr>
          );
        }
      })}
    </table>
  );
};

export default BlindsStructureTable;
