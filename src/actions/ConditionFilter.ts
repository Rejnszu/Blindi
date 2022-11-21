import { Chips } from "../components/models/ChipsModel";

export const conditionFilter = (
  selectedChips: number[],
  initialStack: number,
  chips: Chips[]
): Chips[] => {
  if (initialStack === 3000) {
    if (selectedChips.includes(1000)) {
      return chips.filter((chip) => chip.value !== 500);
    } else if (selectedChips.includes(500)) {
      return chips.filter((chip) => chip.value !== 1000);
    } else {
      return [...chips];
    }
  } else if (initialStack === 1500) {
    if (selectedChips.includes(20)) {
      return chips.filter((chip) => chip.value !== 25);
    } else if (selectedChips.includes(25)) {
      return chips.filter((chip) => chip.value !== 20);
    } else {
      return [...chips];
    }
  } else if (initialStack === 1000) {
    if (selectedChips.includes(5)) {
      return chips.filter((chip) => chip.value !== 25);
    } else if (selectedChips.includes(25)) {
      return chips.filter((chip) => chip.value !== 5);
    } else {
      return [...chips];
    }
  } else {
    return [...chips];
  }
};
