import { CalculatedChips } from "../components/models/CalculatedChipsModel";

export const calculateInitialStack = (
  initialStack: number,
  selectedChips: number[]
): CalculatedChips[] => {
  if (selectedChips.length < 4) {
    return [];
  }
  //   Calculations for 500 stack
  if (initialStack === 500) {
    if (selectedChips.every((chips) => [5, 10, 25, 50].includes(chips))) {
      return [
        { value: 5, amount: 20 },
        { value: 10, amount: 10 },
        { value: 25, amount: 6 },
        { value: 50, amount: 3 },
      ];
    }

    if (selectedChips.every((chips) => [5, 10, 20, 50].includes(chips))) {
      return [
        { value: 5, amount: 10 },
        { value: 10, amount: 10 },
        { value: 20, amount: 10 },
        { value: 50, amount: 3 },
      ];
    }
    if (selectedChips.every((chips) => [10, 20, 25, 50].includes(chips))) {
      return [
        { value: 10, amount: 9 },
        { value: 20, amount: 8 },
        { value: 25, amount: 6 },
        { value: 50, amount: 2 },
      ];
    }
    if (selectedChips.every((chips) => [5, 20, 25, 50].includes(chips))) {
      return [
        { value: 5, amount: 10 },
        { value: 10, amount: 10 },
        { value: 25, amount: 6 },
        { value: 50, amount: 4 },
      ];
    }
    if (selectedChips.every((chips) => [5, 10, 20, 25].includes(chips))) {
      return [
        { value: 5, amount: 10 },
        { value: 10, amount: 9 },
        { value: 20, amount: 8 },
        { value: 25, amount: 8 },
      ];
    }
    if (selectedChips.every((chips) => [5, 10, 20, 25, 50].includes(chips))) {
      return [
        { value: 5, amount: 10 },
        { value: 10, amount: 10 },
        { value: 20, amount: 5 },
        { value: 25, amount: 6 },
        { value: 50, amount: 2 },
      ];
    } else {
      return [];
    }
  }
  //   Calculations for 1000 stack
  if (initialStack === 3000) {
    if (selectedChips.every((chips) => [25, 50, 100, 250].includes(chips))) {
      return [
        { value: 25, amount: 8 },
        { value: 50, amount: 10 },
        { value: 100, amount: 8 },
        { value: 250, amount: 6 },
      ];
    }
    if (selectedChips.every((chips) => [50, 100, 250, 500].includes(chips))) {
      return [
        { value: 50, amount: 10 },
        { value: 100, amount: 5 },
        { value: 250, amount: 4 },
        { value: 500, amount: 2 },
      ];
    }
    if (selectedChips.every((chips) => [50, 100, 250, 1000].includes(chips))) {
      return [
        { value: 50, amount: 7 },
        { value: 100, amount: 4 },
        { value: 250, amount: 5 },
        { value: 1000, amount: 1 },
      ];
    }
    if (selectedChips.every((chips) => [25, 100, 250, 500].includes(chips))) {
      return [
        { value: 25, amount: 10 },
        { value: 100, amount: 5 },
        { value: 250, amount: 5 },
        { value: 500, amount: 2 },
      ];
    }
    if (selectedChips.every((chips) => [25, 100, 250, 1000].includes(chips))) {
      return [
        { value: 25, amount: 10 },
        { value: 100, amount: 5 },
        { value: 250, amount: 5 },
        { value: 1000, amount: 1 },
      ];
    }
    if (selectedChips.every((chips) => [25, 50, 250, 1000].includes(chips))) {
      return [
        { value: 25, amount: 14 },
        { value: 50, amount: 8 },
        { value: 250, amount: 5 },
        { value: 1000, amount: 1 },
      ];
    }
    if (selectedChips.every((chips) => [25, 50, 250, 500].includes(chips))) {
      return [
        { value: 25, amount: 14 },
        { value: 50, amount: 8 },
        { value: 250, amount: 5 },
        { value: 500, amount: 2 },
      ];
    }
    if (selectedChips.every((chips) => [25, 50, 100, 500].includes(chips))) {
      return [
        { value: 25, amount: 8 },
        { value: 50, amount: 10 },
        { value: 100, amount: 8 },
        { value: 500, amount: 3 },
      ];
    }
    if (selectedChips.every((chips) => [25, 50, 100, 1000].includes(chips))) {
      return [
        { value: 25, amount: 20 },
        { value: 50, amount: 10 },
        { value: 100, amount: 10 },
        { value: 1000, amount: 1 },
      ];
    }
    if (
      selectedChips.every((chips) => [25, 50, 100, 250, 1000].includes(chips))
    ) {
      return [
        { value: 25, amount: 10 },
        { value: 50, amount: 7 },
        { value: 100, amount: 4 },
        { value: 250, amount: 4 },
        { value: 1000, amount: 1 },
      ];
    }
    if (
      selectedChips.every((chips) => [25, 50, 100, 250, 500].includes(chips))
    ) {
      return [
        { value: 25, amount: 10 },
        { value: 50, amount: 5 },
        { value: 100, amount: 5 },
        { value: 250, amount: 4 },
        { value: 500, amount: 2 },
      ];
    } else {
      return [];
    }
  } else {
    return [];
  }
};
