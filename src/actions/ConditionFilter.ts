import { Chips } from "../components/models/ChipsModel";
import InitialStack from "../components/StackConfigPage/ConfigForm/InitialStack/InitialStack";
export const conditionFilter = (
  selectedChips: number[],
  initialStack: number,
  chips: Chips[]
): Chips[] => {
  if (initialStack === 3000) {
    if (selectedChips.includes(1000)) {
      return chips.filter((chip) => chip.value !== 500);
    }
    if (selectedChips.includes(500)) {
      return chips.filter((chip) => chip.value !== 1000);
    } else {
      return [...chips];
    }
  }
  if (initialStack === 1500) {
    if (selectedChips.includes(20)) {
      return chips.filter((chip) => chip.value !== 25);
    }
    if (selectedChips.includes(25)) {
      return chips.filter((chip) => chip.value !== 20);
    } else {
      return [...chips];
    }
  }
  if (initialStack === 1000) {
    if (selectedChips.includes(100)) {
      return chips.filter((chip) => chip.value !== 250);
    }
    if (selectedChips.includes(250)) {
      return chips.filter((chip) => chip.value !== 100);
    }
    if (selectedChips.includes(10)) {
      return chips.filter((chip) => chip.value !== 25);
    }
    if (selectedChips.includes(25)) {
      return chips.filter((chip) => chip.value !== 10);
    } else {
      return [...chips];
    }
  } else {
    return [...chips];
  }
};
