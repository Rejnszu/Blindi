import { CalculatedChips } from "../components/models/CalculatedChipsModel";
export const calculateInitialStack = (
  initialStack: number,
  selectedChips: number[]
): CalculatedChips[] => {
  if (selectedChips.length < 4) {
    return [];
  }
  //   Calculations for 500 stack
  if (
    initialStack === 500 &&
    selectedChips.every((chips) => [5, 10, 25, 50].includes(chips))
  ) {
    return [
      { value: 5, amount: 20 },
      { value: 10, amount: 10 },
      { value: 25, amount: 6 },
      { value: 50, amount: 3 },
    ];
  }

  if (
    initialStack === 500 &&
    selectedChips.every((chips) => [5, 10, 20, 50].includes(chips))
  ) {
    return [
      { value: 5, amount: 10 },
      { value: 10, amount: 10 },
      { value: 20, amount: 10 },
      { value: 50, amount: 3 },
    ];
  }
  if (
    initialStack === 500 &&
    selectedChips.every((chips) => [10, 20, 25, 50].includes(chips))
  ) {
    return [
      { value: 5, amount: 8 },
      { value: 20, amount: 8 },
      { value: 25, amount: 6 },
      { value: 50, amount: 3 },
    ];
  }
  if (
    initialStack === 500 &&
    selectedChips.every((chips) => [5, 20, 25, 50].includes(chips))
  ) {
    return [
      { value: 5, amount: 10 },
      { value: 10, amount: 10 },
      { value: 25, amount: 6 },
      { value: 50, amount: 4 },
    ];
  }
  if (
    initialStack === 500 &&
    selectedChips.every((chips) => [5, 10, 20, 25].includes(chips))
  ) {
    return [
      { value: 5, amount: 10 },
      { value: 10, amount: 9 },
      { value: 20, amount: 8 },
      { value: 25, amount: 8 },
    ];
  }
  if (
    initialStack === 500 &&
    selectedChips.every((chips) => [5, 10, 20, 25, 50].includes(chips))
  ) {
    return [
      { value: 5, amount: 10 },
      { value: 10, amount: 10 },
      { value: 20, amount: 5 },
      { value: 25, amount: 6 },
      { value: 50, amount: 2 },
    ];
  }
  //   Calculations for 1000 stack
  if (
    initialStack === 1000 &&
    selectedChips.every((chips) => [5, 10, 25, 50].includes(chips))
  ) {
    return [
      { value: 5, amount: 40 },
      { value: 10, amount: 20 },
      { value: 25, amount: 12 },
      { value: 50, amount: 6 },
    ];
  }

  if (
    initialStack === 1000 &&
    selectedChips.every((chips) => [5, 10, 20, 50].includes(chips))
  ) {
    return [
      { value: 5, amount: 20 },
      { value: 10, amount: 20 },
      { value: 20, amount: 20 },
      { value: 50, amount: 6 },
    ];
  }
  if (
    initialStack === 1000 &&
    selectedChips.every((chips) => [10, 20, 25, 50].includes(chips))
  ) {
    return [
      { value: 5, amount: 16 },
      { value: 20, amount: 16 },
      { value: 25, amount: 12 },
      { value: 50, amount: 6 },
    ];
  }
  if (
    initialStack === 1000 &&
    selectedChips.every((chips) => [5, 20, 25, 50].includes(chips))
  ) {
    return [
      { value: 5, amount: 20 },
      { value: 10, amount: 20 },
      { value: 25, amount: 12 },
      { value: 50, amount: 8 },
    ];
  }
  if (
    initialStack === 1000 &&
    selectedChips.every((chips) => [5, 10, 20, 25].includes(chips))
  ) {
    return [
      { value: 5, amount: 20 },
      { value: 10, amount: 18 },
      { value: 20, amount: 16 },
      { value: 25, amount: 16 },
    ];
  }
  if (
    initialStack === 1000 &&
    selectedChips.every((chips) => [5, 10, 20, 25, 50].includes(chips))
  ) {
    return [
      { value: 5, amount: 20 },
      { value: 10, amount: 20 },
      { value: 20, amount: 10 },
      { value: 25, amount: 12 },
      { value: 50, amount: 4 },
    ];
  }
  if (
    initialStack === 1000 &&
    selectedChips.every((chips) => [5, 10, 20, 25, 100].includes(chips))
  ) {
    return [
      { value: 5, amount: 20 },
      { value: 10, amount: 20 },
      { value: 20, amount: 10 },
      { value: 25, amount: 12 },
      { value: 100, amount: 2 },
    ];
  }
  if (
    initialStack === 1000 &&
    selectedChips.every((chips) => [5, 10, 20, 50, 100].includes(chips))
  ) {
    return [
      { value: 5, amount: 20 },
      { value: 10, amount: 20 },
      { value: 20, amount: 10 },
      { value: 50, amount: 6 },
      { value: 100, amount: 2 },
    ];
  }
  if (
    initialStack === 1000 &&
    selectedChips.every((chips) => [5, 10, 25, 50, 100].includes(chips))
  ) {
    return [
      { value: 5, amount: 20 },
      { value: 10, amount: 20 },
      { value: 25, amount: 10 },
      { value: 50, amount: 6 },
      { value: 100, amount: 2 },
    ];
  } else {
    return [];
  }
};
