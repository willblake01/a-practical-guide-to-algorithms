import { memoize } from "./utils/memoize";

export const bubbleSortOptimized = memoize((arr: number[]): number[] => {
  let countOuter = 0;
  let countInner = 0;
  let countSwap = 0;

  let swapped;
  do {
    countOuter++;
    swapped = false;
    for (let i = 0; i < arr.length; i++) {
      countInner++;
      if (arr[i] > arr[i + 1]) {
        countSwap++;
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
      }
    }
  } while (swapped)

    return arr;
});
