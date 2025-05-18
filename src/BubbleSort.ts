import { memoize } from "./utils/memoize";

export const bubbleSort = memoize((arr: number[]): number[] => {
  let countOuter = 0;
  let countInner = 0;
  let countSwap = 0;

  // Traverse through all array elements
  for (let i = 0; i < arr.length; i++) {
    countOuter++;

    // Pointer one element ahead to compare last two elements
    for (let j = 1; j < arr.length; j++) {
      countInner++;
      
      // If element is smaller than the one before it, swap them
      if (arr[j - 1] > arr[j]) {
        countSwap++;
        [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
      }
    }
  }

  return arr;
});
