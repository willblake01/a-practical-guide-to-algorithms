import { memoize } from "./utils/memoize";

// The linearSearch function takes an array of numbers and a target number as input.
// It iterates through the array and checks if each element is equal to the target number.
// If it finds a match, it returns the index of the matching element.
// If it does not find a match, it returns -1.
// The time complexity of this function is O(n) because it may need to check every element in the array in the worst case.
// The space complexity is O(1) because it only uses a constant amount of extra space for the index variable.

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
